import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, MessageCircle, CheckCircle, AlertCircle, Copy, Check } from 'lucide-react';

const Contact = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: selectedPackage ? `Inquiry about ${selectedPackage.name} package` : '',
    message: selectedPackage ? selectedPackage.message : ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [copied, setCopied] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mernasseh@gmail.com',
      href: 'mailto:mernasseh@gmail.com',
      color: 'from-red-500 to-pink-500',
      action: 'copy'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 792 016 422',
      href: 'tel:+254792016422',
      color: 'from-green-500 to-emerald-500',
      action: 'call'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kenya',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+254 792 016 422',
      href: 'https://wa.me/254792016422',
      color: 'from-green-500 to-emerald-500',
      action: 'whatsapp'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ngoriest',
      color: 'hover:bg-gray-900 hover:text-white'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/manase-kimutai',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:mernasseh@gmail.com',
      color: 'hover:bg-red-500 hover:text-white'
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://dikoras.com',
      color: 'hover:bg-green-500 hover:text-white'
    }
  ];

  useEffect(() => {
    if (selectedPackage) {
      setFormData(prev => ({
        ...prev,
        subject: `Inquiry about ${selectedPackage.name} package - ${selectedPackage.title}`,
        message: `Hello Manase,\n\nI'm interested in the ${selectedPackage.name} package:\n- Package: ${selectedPackage.title}\n- Price: ${selectedPackage.price}\n- Timeline: As mentioned\n\nPlease get in touch with me to discuss further.\n\nBest regards,\n[Your Name]`
      }));
    }
  }, [selectedPackage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(type);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Service Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Subject:* ${formData.subject}\n\n*Message:*\n${formData.message}\n\n_Sent from portfolio website_`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/254792016422?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setSubmitStatus('success');
    setIsSubmitting(true);
    
    // Reset form after delay
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      localStorage.removeItem('selectedPackage');
    }, 2000);
  };

  const handleDirectWhatsApp = () => {
    const defaultMessage = `Hello Manase! I saw your portfolio and I'm interested in your services.`;
    const encodedMessage = encodeURIComponent(defaultMessage);
    window.open(`https://wa.me/254792016422?text=${encodedMessage}`, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Prefer WhatsApp? Send me a message directly! Fast responses guaranteed.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* WhatsApp CTA Card */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl shadow-lg border border-green-200 dark:border-green-800 p-8">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <MessageCircle size={32} className="text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                    WhatsApp Direct
                  </h3>
                  <p className="text-green-600 dark:text-green-400 font-medium">Fastest Response Time</p>
                </div>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Get instant responses via WhatsApp. Perfect for quick questions, project discussions, and fast communication.
              </p>
              
              <div className="space-y-4">
                <motion.button
                  onClick={handleDirectWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <MessageCircle size={24} />
                  Message on WhatsApp
                </motion.button>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Typically respond within minutes during business hours
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h4 className="text-xl font-bold text-gray-800 dark:text-white">Other Ways to Connect</h4>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.label}
                    whileHover={{ y: -3 }}
                    className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-4 hover:shadow-xl transition-all duration-300 ${
                      method.action ? 'cursor-pointer' : ''
                    }`}
                    onClick={() => {
                      if (method.action === 'copy') {
                        copyToClipboard(method.value, method.label.toLowerCase());
                      } else if (method.action === 'whatsapp') {
                        window.open(method.href, '_blank');
                      } else if (method.href !== '#') {
                        window.open(method.href);
                      }
                    }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center`}>
                        <method.icon size={20} className="text-white" />
                      </div>
                      {method.action === 'copy' && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            copyToClipboard(method.value, method.label.toLowerCase());
                          }}
                          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                          aria-label={`Copy ${method.label}`}
                        >
                          {copied === method.label.toLowerCase() ? (
                            <Check size={16} className="text-green-500" />
                          ) : (
                            <Copy size={16} className="text-gray-400" />
                          )}
                        </button>
                      )}
                    </div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">
                      {method.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {method.value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6">
              <h4 className="font-bold text-gray-800 dark:text-white mb-4">Response Times</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">WhatsApp:</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">Within minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Email:</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">Within 24 hours</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-300">Business Hours:</span>
                  <span className="font-semibold text-gray-800 dark:text-white">9 AM - 6 PM EAT</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* WhatsApp Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Send Message via WhatsApp
                </h3>
                <p className="text-green-600 dark:text-green-400 text-sm">
                  Fill this form and send directly to my WhatsApp
                </p>
              </div>
            </div>

            {/* Submission Status */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-green-700 dark:text-green-300"
                >
                  <CheckCircle size={20} />
                  <div>
                    <span className="font-medium">Message ready! Opening WhatsApp...</span>
                    <p className="text-sm mt-1">If WhatsApp doesn't open, please check your phone or click the WhatsApp icon below.</p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-4 mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-red-700 dark:text-red-300"
                >
                  <AlertCircle size={20} />
                  <span className="font-medium">Something went wrong. Please try again or message directly.</span>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedPackage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-800"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400">Selected Package:</h4>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-300 text-xs font-medium rounded">
                    {selectedPackage.name}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your inquiry about <strong>{selectedPackage.title}</strong> ({selectedPackage.price}) is pre-filled below.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  WhatsApp Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="+254 7XX XXX XXX"
                  pattern="[\+]\d{1,3}[\s]\d{1,14}"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Include country code (e.g., +254 for Kenya)
                </p>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white resize-none transition-colors duration-300"
                  placeholder="Tell me about your project, timeline, and requirements..."
                />
              </div>

              <div className="space-y-4">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Opening WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle size={20} />
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>

                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    By clicking, WhatsApp will open with your pre-filled message
                  </p>
                </div>
              </div>
            </form>

            {/* Alternative WhatsApp Button */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                Or message directly without filling the form:
              </p>
              <motion.a
                href={`https://wa.me/254792016422?text=${encodeURIComponent('Hello Manase! I saw your portfolio and would like to discuss a project.')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-3 w-full bg-white dark:bg-gray-700 border-2 border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 py-3 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-300"
              >
                <MessageCircle size={20} />
                Open WhatsApp Directly
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Quick Response Promise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-8 shadow-lg border border-green-200 dark:border-green-800 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Instant WhatsApp Response</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              I prioritize WhatsApp communication for the fastest response time. You'll typically get a reply within minutes during business hours (9 AM - 6 PM EAT).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;