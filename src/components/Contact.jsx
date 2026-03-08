import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, CheckCircle, Copy, Check } from 'lucide-react';

// ✅ Static data outside component
const contactMethods = [
  { icon: Mail,          label: 'Email',     value: 'thee.manase@gmail.com', href: 'mailto:thee.manase@gmail.com', color: 'from-red-400 to-pink-500',    action: 'copy' },
  { icon: Phone,         label: 'Phone',     value: '+254 710 371 770',       href: 'tel:+254710371770',            color: 'from-green-400 to-emerald-500',action: 'call' },
  { icon: MapPin,        label: 'Location',  value: 'Nairobi, Kenya',          href: '#',                            color: 'from-cyan-400 to-blue-500' },
  { icon: MessageCircle, label: 'WhatsApp',  value: '+254 710 371 770',       href: 'https://wa.me/254710371770',   color: 'from-green-400 to-emerald-500',action: 'whatsapp' },
];

const emptyForm = { name: '', email: '', phone: '', subject: '', message: '' };

const Contact = memo(({ selectedPackage }) => {
  const [formData, setFormData]       = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied]           = useState(false);

  // Sync form when a package is selected from Pricing
  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about ${selectedPackage.name} package - ${selectedPackage.title}`,
        message: `Hello Manase,\n\nI'm interested in the ${selectedPackage.name} package:\n- Package: ${selectedPackage.title}\n- Price: ${selectedPackage.price}\n- Timeline: ${selectedPackage.timeline}\n\nPlease get in touch with me to discuss further.\n\nBest regards,\n[Your Name]`
      }));
    }
  }, [selectedPackage]);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const copyToClipboard = useCallback((text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const handleDirectWhatsApp = useCallback(() => {
    const msg = encodeURIComponent('Hello Manase! I saw your portfolio and I\'m interested in your services.');
    window.open(`https://wa.me/254710371770?text=${msg}`, '_blank');
  }, []);

  const handleWhatsAppSubmit = useCallback((e) => {
    e.preventDefault();
    const text = `*New Project Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}`;
    window.open(`https://wa.me/254710371770?text=${encodeURIComponent(text)}`, '_blank');
    setSubmitStatus('success');
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData(emptyForm);
      setSubmitStatus(null);
    }, 2000);
  }, [formData]);

  const handleMethodClick = useCallback((method) => {
    if (method.action === 'copy')      copyToClipboard(method.value, method.label.toLowerCase());
    else if (method.action === 'whatsapp') window.open(method.href, '_blank');
    else if (method.href !== '#')      window.open(method.href);
  }, [copyToClipboard]);

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* ✅ CSS animation instead of Framer Motion infinite loop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-green-950/10 to-[#0a0a0f]" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-green-500/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '11s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl rounded-full border border-green-500/20 mb-6">
            <MessageCircle size={16} className="text-green-400" />
            <span className="text-sm font-bold tracking-wide text-green-400">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              LET'S CONNECT
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Professional communication for your project needs. WhatsApp preferred for fastest response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* WhatsApp CTA Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative p-8 bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-2xl rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl">
                    <MessageCircle size={32} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">WHATSAPP DIRECT</h3>
                    <p className="text-green-400 font-bold">Professional Fast Response</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6">
                  Get instant professional responses via WhatsApp. Perfect for project discussions and fast communication.
                </p>
                <motion.button
                  onClick={handleDirectWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-black hover:shadow-lg transition-all flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} /> MESSAGE ON WHATSAPP
                </motion.button>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
                  onClick={() => handleMethodClick(method)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <method.icon size={20} className="text-white" />
                      </div>
                      {method.action === 'copy' && (
                        <button
                          onClick={(e) => { e.stopPropagation(); copyToClipboard(method.value, method.label.toLowerCase()); }}
                          className="p-2 hover:bg-white/10 rounded-lg"
                        >
                          {copied === method.label.toLowerCase()
                            ? <Check size={16} className="text-green-400" />
                            : <Copy size={16} className="text-gray-400" />
                          }
                        </button>
                      )}
                    </div>
                    <h4 className="font-black text-white mb-1">{method.label}</h4>
                    <p className="text-gray-400 text-sm">{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">SEND MESSAGE</h3>
                <p className="text-green-400 text-sm font-bold">Via WhatsApp</p>
              </div>
            </div>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 mb-6 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400"
                >
                  <CheckCircle size={20} />
                  <span className="font-bold">Message ready! Opening WhatsApp...</span>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedPackage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-black text-cyan-400">SELECTED PACKAGE:</h4>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-black rounded-full">{selectedPackage.name}</span>
                </div>
                <p className="text-sm text-gray-400">
                  Your inquiry about <strong>{selectedPackage.title}</strong> ({selectedPackage.price}) is pre-filled below.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">YOUR NAME *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white transition-all"
                    placeholder="Enter your name" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2">EMAIL ADDRESS *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} required
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white transition-all"
                    placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">WHATSAPP NUMBER *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white transition-all"
                  placeholder="+254 710 371 770" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">SUBJECT *</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white transition-all"
                  placeholder="What's this about?" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">MESSAGE *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows={6}
                  className="w-full px-4 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-white resize-none transition-all"
                  placeholder="Tell me about your project..." />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-4 rounded-xl font-black hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /> OPENING WHATSAPP...</>
                ) : (
                  <><MessageCircle size={20} /> SEND VIA WHATSAPP</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-green-900/50 to-emerald-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <h3 className="text-xl font-black text-white">PROFESSIONAL COMMUNICATION GUARANTEE</h3>
            </div>
            <p className="text-gray-300">
              I prioritize clear, professional communication. WhatsApp offers the fastest response time, typically within minutes during business hours (9 AM - 6 PM EAT, Monday–Friday).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';
export default Contact;