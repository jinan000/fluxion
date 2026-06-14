"use client"

import { useEffect, useRef, useState } from "react"
import createGlobe, { type COBEOptions } from "cobe"
import { useMotionValue, useSpring, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

const MOVEMENT_DAMPING = 1400

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [15 / 255, 30 / 255, 51 / 255], // Match --color-accent #0F1E33
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Orange accent
  glowColor: [0, 152 / 255, 166 / 255], // Teal glow --color-secondary #0098A6
  markers: [
    { location: [24.4539, 54.3773], size: 0.08 }, // UAE (HQ)
    { location: [23.8859, 45.0792], size: 0.05 }, // Saudi Arabia
    { location: [21.4735, 55.9754], size: 0.05 }, // Oman
    { location: [25.3548, 51.1839], size: 0.05 }, // Qatar
    { location: [29.3117, 47.4818], size: 0.05 }, // Kuwait
    { location: [26.0667, 50.5577], size: 0.05 }, // Bahrain
  ],
}

interface GlobeProps {
  className?: string
  config?: Partial<COBEOptions>
  activeLocation?: [number, number] | null
}

export function Globe({
  className,
  config = {},
  activeLocation,
}: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Optimization: Detect if the canvas is scrolled near the viewport (with 300px padding).
  // When off-screen, WebGL rendering is completely paused to eliminate scrolling lag.
  const isInView = useInView(canvasRef, { margin: "300px 0px 300px 0px", once: false })

  const phiRef = useRef(3.75) // Initial angle showing the Middle East (approx 50 degrees E)
  const thetaRef = useRef(0.3) // Latitude angle showing Middle East (approx 20 degrees N)
  const widthRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)
  
  // Motion values for Y-axis rotation (phi) and X-axis tilt (theta)
  const r = useMotionValue(0)
  const t = useMotionValue(0)

  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  const ts = useSpring(t, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  })

  // Track state for interaction cursors
  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      r.set(r.get() + delta / MOVEMENT_DAMPING)
    }
  }

  // Ref to store dynamic markers to update them in-place inside the onRender loop
  // without destroying and recreating the WebGL globe instance.
  const markersRef = useRef(config.markers || GLOBE_CONFIG.markers)

  useEffect(() => {
    if (config.markers) {
      markersRef.current = config.markers
    }
  }, [config.markers])

  // Smoothly center the globe on the activeLocation
  useEffect(() => {
    if (activeLocation) {
      const [lat, lng] = activeLocation
      
      // Target phi: Map longitude to radians. Longitude is E (+) and W (-).
      // To bring Eastern longitudes (like GCC countries, ~45-56 degrees E) to the front,
      // we add the longitude radians to the base offset (2.8 rad).
      const targetPhi = 2.8 + (lng * Math.PI) / 180
      const targetTheta = (lat * Math.PI) / 180

      // Animate the springs to align with the target coordinates
      // We set r and t relative to the baseline phiRef and thetaRef
      r.set(targetPhi - phiRef.current)
      t.set(targetTheta - thetaRef.current)
    } else {
      // Reset targets to baseline when selection cleared
      r.set(0)
      t.set(0)
    }
  }, [activeLocation, r, t])

  useEffect(() => {
    // If the component is scrolled off-screen, completely bypass WebGL instantiation
    // to free up CPU/GPU cycles and ensure butter-smooth page scrolling.
    if (!isInView) return

    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth
      }
    }
    window.addEventListener("resize", onResize)
    onResize()

    // Optimization: Capping devicePixelRatio at 1.5 instead of 2.0.
    // This halves the rendered pixel count on high-DPI (Retina/4K) screens,
    // providing massive performance gains while maintaining crispness.
    const dynamicPixelRatio = typeof window !== "undefined" 
      ? Math.min(window.devicePixelRatio, 1.5) 
      : 1.5;

    const mergedConfig = { 
      ...GLOBE_CONFIG, 
      ...config,
      devicePixelRatio: dynamicPixelRatio,
      // Optimize map samples (fewer dot computations per frame)
      mapSamples: 10000 
    }

    const globe = createGlobe(canvasRef.current!, {
      ...mergedConfig,
      width: widthRef.current * dynamicPixelRatio,
      height: widthRef.current * dynamicPixelRatio,
      onRender: (state) => {
        // Rotate automatically if not dragging and no active country is selected
        if (!pointerInteracting.current && !activeLocation) {
          phiRef.current += 0.003
        }
        
        state.phi = phiRef.current + rs.get()
        state.theta = thetaRef.current + ts.get()
        state.width = widthRef.current * dynamicPixelRatio
        state.height = widthRef.current * dynamicPixelRatio
        
        // Dynamically assign updated markers in the render loop without recreating globe
        state.markers = markersRef.current
      },
    })

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1"
      }
    }, 0)

    return () => {
      globe.destroy()
      window.removeEventListener("resize", onResize)
    }
  }, [rs, ts, activeLocation, isInView])

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-150 flex items-center justify-center",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size] cursor-grab"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX
          updatePointerInteraction(e.clientX)
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  )
}
