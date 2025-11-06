import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Code, Coffee, ArrowUp, Mail, Github, Linkedin, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/ngoriest',
      label: 'GitHub',
      color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-gray-900'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/manase-kimutai',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      icon: Mail,
      href: 'mailto:mernasseh@gmail.com',
      label: 'Email',
      color: 'hover:bg-red-500 hover:text-white'
    },
    {
      icon: ExternalLink,
      href: 'https://dikoras.com',
      label: 'Dikoras',
      color: 'hover:bg-green-500 hover:text-white'
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
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* CTA Section */}
        <div className="border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                Ready to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Start Your Project</span>?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
              </p>
              <motion.a
                href="#contact"
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              >
                <Mail size={20} />
                Get In Touch
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Manase Kimutai
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Full-Stack Developer & AI Engineer building the future with code, creativity, and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-800 rounded-xl text-gray-300 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
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
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 font-medium"
                    >
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
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <a href="mailto:mernasseh@gmail.com" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    mernasseh@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <a href="tel:+254792016422" className="text-purple-400 hover:text-purple-300 transition-colors duration-300">
                    +254 792 016 422
                  </a>
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Location</p>
                  <p className="text-purple-400">Kenya</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-gray-300"
              >
                <span>© {currentYear} Manase Kimutai. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <div className="flex items-center gap-1 text-sm">
                  <span>Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <Heart size={16} className="text-red-500" />
                  </motion.div>
                  <span>,</span>
                  <Code size={16} className="text-purple-400 ml-1" />
                  <span>, and</span>
                  <Coffee size={16} className="text-yellow-500 ml-1" />
                </div>
              </motion.div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-gray-300 hover:text-white transition-all duration-300 group"
                aria-label="Back to top"
              >
                <span className="text-sm font-medium">Back to Top</span>
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowUp size={16} className="group-hover:text-purple-400 transition-colors" />
                </motion.div>
              </motion.button>
            </div>

            {/* Tech Stack Mention */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center mt-4"
            >
              <p className="text-gray-400 text-sm">
                Built with React, Tailwind CSS, Framer Motion • Deployed with Vercel
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 opacity-10">
        <Code size={40} />
      </div>
      <div className="absolute top-10 right-10 opacity-10">
        <Heart size={40} />
      </div>
    </footer>
  );
};

export default Footer;