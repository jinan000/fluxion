'use client';

import React, { useMemo } from 'react';
import DottedMapLib from 'dotted-map/without-countries';
import mapData from '@/lib/map-data.json';

export interface Marker {
  lat: number;
  lng: number;
  size?: number;
  pulse?: boolean;
  label?: string;
}

interface DottedMapProps<T extends Marker = Marker> {
  dotRadius?: number;
  dotColor?: string;
  markerColor?: string;
  markers?: T[];
  pulse?: boolean;
  renderMarkerOverlay?: (args: {
    marker: T;
    x: number;
    y: number;
    r: number;
    index: number;
  }) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

// Clone map data once at module level, not per render
const clonedMapData = JSON.parse(JSON.stringify(mapData));

export function DottedMap<T extends Marker = Marker>({
  dotRadius = 0.2,
  dotColor,
  markerColor = '#0098A6',
  markers = [],
  pulse = false,
  renderMarkerOverlay,
  className,
  style,
}: DottedMapProps<T>) {

  // Generate the full SVG string once, extract viewBox + inner content
  const { viewBox, svgInner, markerPositions } = useMemo(() => {
    const map = new DottedMapLib({ map: JSON.parse(JSON.stringify(clonedMapData)) });

    // Collect marker positions before generating SVG
    const positions = markers.map((marker) => {
      const pin = map.addPin({
        lat: marker.lat,
        lng: marker.lng,
        svgOptions: {
          color: markerColor,
          radius: marker.size ?? 0.5,
        },
      });
      return { x: pin.x, y: pin.y };
    });

    const rawSvg = map.getSVG({
      radius: dotRadius,
      color: dotColor ?? 'rgba(255, 255, 255, 0.3)',
      shape: 'circle',
      backgroundColor: 'transparent',
    });

    // Extract viewBox
    const vbMatch = rawSvg.match(/viewBox="([^"]+)"/);
    const vb = vbMatch?.[1] ?? '0 0 150 75';

    // Extract just the circles (inner content of the SVG)
    const innerMatch = rawSvg.match(/<svg[^>]*>([\s\S]*)<\/svg>/);
    const inner = innerMatch?.[1] ?? '';

    return { viewBox: vb, svgInner: inner, markerPositions: positions };
  }, [markers, dotRadius, dotColor, markerColor]);

  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={{ width: '100%', height: '100%', ...style }}
    >
      {/* All base dots + marker dots rendered as raw SVG (no React overhead) */}
      <g dangerouslySetInnerHTML={{ __html: svgInner }} />

      {/* Pulse rings on markers (only 6 elements, very cheap) */}
      {markers.map((marker, i) => {
        const pos = markerPositions[i];
        if (!pos) return null;
        const shouldPulse = pulse || marker.pulse !== false;
        const r = marker.size ?? 0.5;
        return shouldPulse ? (
          <circle
            key={`pulse-${i}`}
            cx={pos.x}
            cy={pos.y}
            r={r}
            fill="none"
            stroke={markerColor}
            strokeWidth={0.1}
            opacity={0.6}
          >
            <animate attributeName="r" from={String(r)} to={String(r * 3)} dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" from="0.6" to="0" dur="2s" repeatCount="indefinite" />
          </circle>
        ) : null;
      })}

      {/* Marker overlays */}
      {renderMarkerOverlay && markers.map((marker, index) => {
        const pos = markerPositions[index];
        if (!pos) return null;
        const r = (marker.size ?? 0.5) * 2;
        return (
          <g key={`overlay-${index}`}>
            {renderMarkerOverlay({
              marker: marker as T,
              x: pos.x,
              y: pos.y,
              r,
              index,
            })}
          </g>
        );
      })}
    </svg>
  );
}
