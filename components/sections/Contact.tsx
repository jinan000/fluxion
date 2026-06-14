'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import MagneticButton from '../ui/MagneticButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-bg-soft relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-primary mb-4 block">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-accent mb-6">
              Let&apos;s Move Your{' '}
              <span className="gradient-text">Cargo</span>
            </h2>
            <p className="text-text-light text-lg max-w-2xl mx-auto">
              Request a quote or reach out to our logistics team. We respond within 2 hours
              during business hours.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <SectionReveal direction="left" className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-premium p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-accent mb-2">Request Received!</h3>
                  <p className="text-text-light">Our team will contact you within 2 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-transparent text-accent placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                      <label
                        htmlFor="contact-name"
                        className="absolute left-4 top-3.5 text-text-light text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
                      >
                        Full Name *
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder=" "
                        className="peer w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-transparent text-accent placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                      <label
                        htmlFor="contact-email"
                        className="absolute left-4 top-3.5 text-text-light text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
                      >
                        Email Address *
                      </label>
                    </div>

                    {/* Phone */}
                    <div className="relative">
                      <input
                        type="tel"
                        id="contact-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-transparent text-accent placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                      <label
                        htmlFor="contact-phone"
                        className="absolute left-4 top-3.5 text-text-light text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
                      >
                        Phone Number
                      </label>
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <input
                        type="text"
                        id="contact-company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-transparent text-accent placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                      />
                      <label
                        htmlFor="contact-company"
                        className="absolute left-4 top-3.5 text-text-light text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
                      >
                        Company Name
                      </label>
                    </div>
                  </div>

                  {/* Service select */}
                  <div className="relative">
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-transparent text-accent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all appearance-none"
                    >
                      <option value="">Select a Service</option>
                      <option value="customs">UAE Customs Clearance</option>
                      <option value="import">Import Clearance</option>
                      <option value="export">Export Clearance</option>
                      <option value="freight">Freight Forwarding</option>
                      <option value="container">Container Transportation</option>
                      <option value="gcc">GCC Cargo Movement</option>
                      <option value="oversized">Oversized Cargo Transport</option>
                      <option value="heavy">Heavy Equipment Transport</option>
                      <option value="project">Project Cargo Logistics</option>
                      <option value="cross-border">Cross-Border Transport</option>
                    </select>
                    <svg className="absolute right-4 top-4 w-5 h-5 text-text-light pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder=" "
                      className="peer w-full px-4 py-3.5 border border-gray-200 rounded-xl bg-transparent text-accent placeholder-transparent focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all resize-none"
                    />
                    <label
                      htmlFor="contact-message"
                      className="absolute left-4 top-3.5 text-text-light text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-sm peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1"
                    >
                      Tell us about your cargo requirements
                    </label>
                  </div>

                  <MagneticButton variant="primary" size="lg">
                    Submit Request
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                </form>
              )}
            </div>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              {/* Location */}
              <div className="p-6 rounded-2xl bg-white shadow-premium">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-accent mb-1">Headquarters</h4>
                    <p className="text-sm text-text-light">Sharjah, United Arab Emirates</p>
                    <p className="text-xs text-text-light mt-1">Serving the entire GCC region</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <motion.a
                href="tel:+971589250501"
                className="p-6 rounded-2xl bg-white shadow-premium flex items-start gap-4 hover:shadow-premium-hover transition-shadow"
                whileHover={{ x: 4 }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-accent mb-1">Call Us</h4>
                  <p className="text-sm text-primary font-medium">+971 58 925 0501</p>
                  <p className="text-xs text-text-light mt-1">Available 24/7</p>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:INFO@FLUXIONUAE.COM"
                className="p-6 rounded-2xl bg-white shadow-premium flex items-start gap-4 hover:shadow-premium-hover transition-shadow"
                whileHover={{ x: 4 }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-accent mb-1">Email</h4>
                  <p className="text-sm text-primary font-medium">INFO@FLUXIONUAE.COM</p>
                  <p className="text-xs text-text-light mt-1">Response within 2 hours</p>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/971589250501"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-gradient-to-r from-[#25D366]/10 to-[#128C7E]/10 border border-[#25D366]/20 flex items-start gap-4 hover:from-[#25D366]/15 hover:to-[#128C7E]/15 transition-all"
                whileHover={{ x: 4 }}
                data-cursor-hover
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-accent mb-1">WhatsApp</h4>
                  <p className="text-sm text-[#25D366] font-medium">Chat with us instantly</p>
                  <p className="text-xs text-text-light mt-1">Quick response guaranteed</p>
                </div>
              </motion.a>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden h-48 bg-gradient-to-br from-bg-soft to-primary/5 border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-8 h-8 text-primary/30 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  <p className="text-sm text-text-light">Google Maps</p>
                  <p className="text-xs text-text-light/60">Sharjah, UAE</p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
