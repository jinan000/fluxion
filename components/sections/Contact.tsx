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
  const [mailtoUrl, setMailtoUrl] = useState('');
  const [gmailUrl, setGmailUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceLabels: { [key: string]: string } = {
      customs: 'UAE Customs Clearance',
      import: 'Import Clearance',
      export: 'Export Clearance',
      freight: 'Freight Forwarding',
      container: 'Container Transportation',
      gcc: 'GCC Cargo Movement',
      oversized: 'Oversized Cargo Transport',
      heavy: 'Heavy Equipment Transport',
      project: 'Project Cargo Logistics',
      'cross-border': 'Cross-Border Transport',
    };
    const selectedServiceLabel = serviceLabels[formData.service] || formData.service || 'N/A';

    const subject = `Fluxion Cargo Enquiry - ${formData.name}`;
    const body = `Dear Fluxion Team,\n\nI would like to request a quote / make an enquiry with the following details:\n\n` +
      `- Full Name: ${formData.name}\n` +
      `- Email: ${formData.email}\n` +
      `- Phone Number: ${formData.phone || 'N/A'}\n` +
      `- Company Name: ${formData.company || 'N/A'}\n` +
      `- Service Required: ${selectedServiceLabel}\n\n` +
      `Message / Requirements:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`;

    const mailto = `mailto:info@fluxionuae.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=info@fluxionuae.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    setMailtoUrl(mailto);
    setGmailUrl(gmail);
    window.location.href = mailto;

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-bg-soft relative overflow-hidden" aria-label="Contact FLUXION Logistics - Request a Quote for Customs Clearance and Freight Forwarding in UAE">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[120px] pointer-events-none" />

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
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-accent mb-2">Email Drafted!</h3>
                  <p className="text-text-light mb-6">
                    We have initiated your default mail client with the enquiry details.
                  </p>
                  
                  <div className="bg-bg-soft rounded-2xl p-6 max-w-md mx-auto text-sm border border-gray-100 space-y-4 mb-6">
                    <p className="text-accent font-semibold">If the mail client did not open automatically:</p>
                    
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href={gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 bg-[#EA4335] text-white font-medium rounded-xl hover:bg-[#d93025] transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                        data-cursor-hover
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                        Open Gmail Web
                      </a>
                      
                      <a
                        href={mailtoUrl}
                        className="px-4 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-accent font-medium rounded-xl transition-colors inline-flex items-center justify-center gap-2 shadow-sm"
                        data-cursor-hover
                      >
                        Retry Mail Client
                      </a>
                    </div>
                    
                    <p className="text-xs text-text-light/85 mt-2">
                      Or copy and send details manually to:{' '}
                      <span className="font-mono bg-white px-2 py-0.5 rounded border border-gray-200 text-accent font-medium">
                        info@fluxionuae.com
                      </span>
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    type="button"
                    className="text-sm font-semibold text-primary hover:underline"
                    data-cursor-hover
                  >
                    Send Another Enquiry
                  </button>
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

                  <MagneticButton variant="primary" size="lg" type="submit">
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
              <motion.a
                href="https://maps.app.goo.gl/X296Ax1kVbPsJqYg6?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded-2xl bg-white shadow-premium flex items-start gap-4 hover:shadow-premium-hover transition-shadow"
                whileHover={{ x: 4 }}
                data-cursor-hover
              >
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
              </motion.a>

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
                href="mailto:info@fluxionuae.com"
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
                  <p className="text-sm text-primary font-medium">info@fluxionuae.com</p>
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

              {/* Google Maps Satellite Embed */}
              <div className="rounded-2xl overflow-hidden h-64 border border-gray-200 shadow-premium relative group">
                <iframe
                  src="https://maps.google.com/maps?q=25.277525,55.680447&t=k&z=16&output=embed&iwloc=near"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="FLUXION Headquarters Location"
                  className="w-full h-full object-cover filter contrast-[1.05] saturate-[1.1]"
                />
                
                {/* Floating "View on Google Maps" Overlay Badge */}
                <a
                  href="https://maps.app.goo.gl/X296Ax1kVbPsJqYg6?g_st=aw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-4 bg-accent/90 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5 shadow-lg border border-white/10"
                  data-cursor-hover
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Open in Google Maps
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
