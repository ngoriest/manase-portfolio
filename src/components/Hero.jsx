import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Download, Sparkles, Zap, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '8+', label: 'Client Projects', icon: Code },
    { number: '1', label: 'Live Production Site', icon: Zap },
    { number: '12+', label: 'Developers Mentored', icon: Sparkles },
    { number: '100%', label: 'Client Satisfaction', icon: Cpu },
  ];

  const floatingShapes = [
    { style: 'top-20 left-10 w-6 h-6 bg-purple-500', delay: 0 },
    { style: 'top-40 right-20 w-8 h-8 bg-pink-500', delay: 1 },
    { style: 'bottom-40 left-20 w-4 h-4 bg-blue-500', delay: 2 },
    { style: 'bottom-20 right-32 w-10 h-10 bg-cyan-500', delay: 3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '3s' }}
        ></motion.div>
        
        {/* Floating Shapes */}
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: shape.delay }}
            className={`absolute rounded-full ${shape.style} opacity-30 animate-float`}
            style={{ animationDelay: `${shape.delay * 2}s` }}
          ></motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm rounded-full border border-purple-200/50 dark:border-purple-700/50"
            >
              <Sparkles size={16} className="text-purple-600" />
              <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                Available for new projects
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight"
              >
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  MANASE
                </span>
                <br />
                <span className="bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-200 dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  KIMUTAI
                </span>
              </motion.h1>

              <motion.div
                variants={itemVariants}
                className="space-y-2"
              >
                <motion.p
                  className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-300 font-light"
                >
                  Full-Stack Developer &{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                    AI Engineer
                  </span>
                </motion.p>
                <motion.p
                  className="text-lg text-purple-600 dark:text-purple-400 font-semibold flex items-center justify-center lg:justify-start gap-2"
                >
                  <Zap size={20} className="animate-pulse" />
                  Building the future with code & intelligence
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
            >
              Crafting <span className="font-semibold text-purple-600 dark:text-purple-400">production-grade applications</span> with modern stacks. 
              Pioneering <span className="font-semibold text-pink-600 dark:text-pink-400">Generative AI</span> solutions that transform businesses 
              and create exceptional digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold overflow-hidden transition-all duration-300 hover:shadow-2xl shadow-lg flex items-center justify-center"
              >
                <span className="relative z-10 flex items-center">
                  Get In Touch
                  <Mail className="ml-3" size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 border-2 border-purple-600 text-purple-600 dark:text-purple-400 dark:border-purple-400 rounded-2xl font-bold transition-all duration-300 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 flex items-center justify-center backdrop-blur-sm"
              >
                View My Work
                <ExternalLink className="ml-3" size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start space-x-4 pt-6"
            >
              {[
                { 
                  icon: Github, 
                  href: 'https://github.com/ngoriest', 
                  label: 'GitHub',
                  color: 'hover:bg-gray-900 hover:text-white'
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
                },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${social.color} border border-gray-200/50 dark:border-gray-700/50`}
                  aria-label={social.label}
                >
                  <social.icon 
                    size={24} 
                    className="text-gray-600 dark:text-gray-300 transition-colors duration-300" 
                  />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Frameless Image */}
          <motion.div
            variants={imageVariants}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Main Image Container - Frameless Design */}
              <div className="relative z-10">
                {/* Background Glow - More Subtle */}
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition duration-1000 group-hover:duration-300"></div>
                
                {/* Frameless Image with Direct Shadow */}
                <div className="relative">
                 <img
  src="/manase-photo.jpg"
  alt="Manase Kimutai - Full Stack Developer & AI Engineer"
  className="w-80 h-80 sm:w-96 sm:h-96 rounded-2xl object-cover shadow-2xl group-hover:shadow-3xl transition-all duration-500 border-0"
  style={{
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    objectPosition: '50% 20%' // Start from 20% from top - adjust this number
  }}
/>
                  
                  {/* Floating Tech Badges - More Integrated */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                    className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border-0"
                  >
                    AI Engineer
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0, x: -20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ delay: 1.8, type: "spring", stiffness: 200 }}
                    className="absolute -bottom-2 -left-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm border-0"
                  >
                    Full Stack
                  </motion.div>
                </div>
              </div>

              {/* Floating Elements - More Subtle */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-8 -left-4 w-10 h-10 bg-yellow-400/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <Sparkles size={16} className="text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-16 -right-4 w-8 h-8 bg-green-400/80 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm"
              >
                <Zap size={14} className="text-white" />
              </motion.div>

              {/* Additional Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-1/2 -right-6 w-6 h-6 bg-purple-400/60 rounded-full shadow-lg"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <stat.icon 
                size={32} 
                className="mx-auto mb-3 text-purple-600 group-hover:scale-110 transition-transform duration-300" 
              />
              <div className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2 font-semibold uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500 dark:text-gray-400"
          >
            <span className="text-sm mb-3 font-medium">Scroll to explore</span>
            <div className="w-8 h-14 border-2 border-purple-400 dark:border-purple-500 rounded-full flex justify-center relative">
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1.5 h-4 bg-purple-600 dark:bg-purple-400 rounded-full mt-2"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;