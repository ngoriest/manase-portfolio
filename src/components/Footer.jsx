import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, ArrowUp, Mail, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },      
    { name: 'Projects', href: '#projects' }, 
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ngoriest',
      label: 'GitHub',
      color: 'from-gray-400 to-gray-600'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/manase-kimutai',
      label: 'LinkedIn',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Mail,
      href: 'mailto:thee.manase@gmail.com',
      label: 'Email',
      color: 'from-red-400 to-pink-500'
    },
    {
      icon: ExternalLink,
      href: 'https://dikoras.com',
      label: 'Dikoras',
      color: 'from-green-400 to-emerald-500'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0f] border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/20 to-transparent rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6">
                <Sparkles size={16} className="text-purple-400" />
                <span className="text-sm font-bold tracking-wide text-purple-400">LET'S BUILD TOGETHER</span>
              </div>
              <h3 className="text-4xl sm:text-5xl font-black mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  READY TO START YOUR PROJECT?
                </span>
              </h3>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <motion.a
                href="#contact"
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-full font-black hover:shadow-lg transition-all"
              >
                <Mail size={20} />
                GET IN TOUCH
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-md animate-pulse"></div>
                </div>
                <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MANASE KIMUTAI
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Full-Stack Software Engineer & AI Developer building scalable applications with React, Python/Flask, and modern technologies.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`group p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 hover:border-white/20 transition-all relative overflow-hidden`}
                    aria-label={social.label}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                    <social.icon size={20} className={`relative z-10 text-gray-400 group-hover:text-white transition-colors`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-black text-white tracking-tight">QUICK LINKS</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors font-bold text-sm group flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 bg-gray-600 rounded-full group-hover:bg-cyan-400 transition-colors"></div>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-black text-white tracking-tight">CONTACT INFORMATION</h4>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <p className="text-gray-500 font-bold text-xs mb-1">EMAIL</p>
                  <a href="mailto:thee.manase@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors font-bold">
                    thee.manase@gmail.com
                  </a>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <p className="text-gray-500 font-bold text-xs mb-1">PHONE & WHATSAPP</p>
                  <a href="tel:+254710371770" className="text-purple-400 hover:text-purple-300 transition-colors font-bold">
                    +254 710 371 770
                  </a>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10">
                  <p className="text-gray-500 font-bold text-xs mb-1">LOCATION</p>
                  <p className="text-pink-400 font-bold">Nairobi, Kenya</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-wrap items-center justify-center gap-2 text-gray-400 text-sm"
              >
                <span className="font-bold">© {currentYear} MANASE KIMUTAI.</span>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-2">
                  <span>Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Heart size={14} className="text-red-400 fill-red-400" />
                  </motion.div>
                  <Code size={14} className="text-cyan-400" />
                  <Coffee size={14} className="text-yellow-400" />
                </div>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-xl hover:bg-white/10 rounded-full border border-white/10 hover:border-white/20 text-gray-400 hover:text-white transition-all font-bold text-sm"
                aria-label="Back to top"
              >
                <span>BACK TO TOP</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp size={16} />
                </motion.div>
              </motion.button>
            </div>

            {/* Tech Stack Mention */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <p className="text-gray-500 text-xs font-bold">
                BUILT WITH REACT • TAILWIND CSS • FRAMER MOTION • DEPLOYED WITH VERCEL
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none">
        <Code size={60} className="text-white" />
      </div>
      <div className="absolute top-10 right-10 opacity-5 pointer-events-none">
        <Sparkles size={60} className="text-white" />
      </div>
    </footer>
  );
};

export default Footer;