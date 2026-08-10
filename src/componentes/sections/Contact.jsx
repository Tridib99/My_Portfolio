import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../../utils/constants';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import FadeIn from '../animations/FadeIn';
import RadialGradientBackground from '../bacakgrounds/RadialGradientBackground';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ loading: false, success: null, error: null });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({ loading: false, success: data.message || 'Message sent successfully!', error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus({ loading: false, success: null, error: data.error || 'Failed to send message.' });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        loading: false,
        success: null,
        error: 'Unable to connect to the backend server. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden border-t border-white/5">
      <RadialGradientBackground variant="contact" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn delay={100}>
            <div className="inline-flex items-center gap-2.5 px-[18px] py-[9px] mb-5 bg-primary/10 border border-primary/20 rounded-full">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                Get In Touch
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
              Let's Build Something Together
            </h2>
            <p className="text-base md:text-lg text-white/60">
              Have a project in mind, an inquiry, or just want to connect? Send me a message and I'll get back to you promptly.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={200}>
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-2xl font-normal text-white mb-4">Contact Details</h3>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-base text-white hover:text-primary transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Phone</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-base text-white hover:text-primary transition-colors">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3.5 bg-primary/10 rounded-xl text-primary border border-primary/20">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50 uppercase tracking-wider font-semibold">Location</p>
                      <p className="text-base text-white">{PERSONAL_INFO.location}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs uppercase tracking-wider text-white/50 font-semibold mb-4">Follow & Connect</p>
                  <div className="flex items-center gap-3">
                    <a
                      href={SOCIAL_LINKS.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:text-primary hover:border-primary/40 transition-all duration-300"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:text-primary hover:border-primary/40 transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:text-primary hover:border-primary/40 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="w-5 h-5" />
                    </a>
                    <a
                      href={SOCIAL_LINKS.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 border border-white/10 rounded-xl text-white hover:text-primary hover:border-primary/40 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn delay={300}>
              <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status.success && (
                    <div className="flex items-center gap-3 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      <span>{status.success}</span>
                    </div>
                  )}

                  {status.error && (
                    <div className="flex items-center gap-3 p-4 bg-rose-500/10 border border-rose-500/30 rounded-xl text-rose-400 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{status.error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry / Collaboration"
                      className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full px-4 py-3.5 bg-black/40 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.loading}
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 cursor-pointer shadow-[0_0_20px_rgba(141,255,105,0.2)]"
                  >
                    {status.loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
