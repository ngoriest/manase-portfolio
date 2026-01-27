import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Zap, Code, Cpu, ArrowDown } from 'lucide-react';

const Hero = () => {
  const stats = [
    { number: '8+', label: 'Client Projects', icon: Code },
    { number: '10+', label: 'Live Production Sites', icon: Zap },
    { number: '12+', label: 'Developers Mentored', icon: Sparkles },
    { number: '100%', label: 'Client Satisfaction', icon: Cpu },
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/ngoriest', 
      label: 'GitHub',
      color: 'hover:text-white hover:shadow-white/20'
    },
    { 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/manase-kimutai', 
      label: 'LinkedIn',
      color: 'hover:text-cyan-400 hover:shadow-cyan-400/20'
    },
    { 
      icon: Mail, 
      href: 'mailto:thee.manase@gmail.com',  
      label: 'Email',
      color: 'hover:text-purple-400 hover:shadow-purple-400/20'
    },
    { 
      icon: ExternalLink, 
      href: 'https://dikoras.com', 
      label: 'Dikoras',
      color: 'hover:text-pink-400 hover:shadow-pink-400/20'
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-purple-950/20 to-[#0a0a0f]"></div>
        
        {/* Animated orbs */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-cyan-500/20 rounded-full blur-3xl"
        ></motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        {/* Noise texture */}
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            >
              <div className="relative">
                <Sparkles size={16} className="text-cyan-400" />
                <div className="absolute inset-0 blur-md">
                  <Sparkles size={16} className="text-cyan-400" />
                </div>
              </div>
              <span className="text-sm font-bold tracking-wide text-cyan-400">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  MANASE
                </span>
                <span className="block text-white mt-2">
                  KIMUTAI
                </span>
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl text-gray-400 font-light">
                  Full-Stack Developer &{' '}
                  <span className="font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    AI Engineer
                  </span>
                </p>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-cyan-400">
                  <Zap size={20} className="animate-pulse" />
                  <p className="text-lg font-bold tracking-wide">
                    BUILDING THE FUTURE WITH CODE & INTELLIGENCE
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Crafting <span className="font-bold text-purple-400">production-grade applications</span> with modern stacks. 
              Pioneering <span className="font-bold text-pink-400">Generative AI</span> solutions that transform businesses.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white rounded-2xl font-black tracking-wide overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  GET IN TOUCH
                  <Mail size={20} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              </motion.a>
              
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white rounded-2xl font-black tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                VIEW MY WORK
                <ExternalLink size={20} />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className={`group p-4 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 ${social.color} transition-all duration-300 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon size={22} className="text-gray-400 group-hover:text-inherit transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>
              
              {/* Image container with glass effect */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm"></div>
                <img
                  src="/manase-photo.jpg"
                  alt="Manase Kimutai - Full Stack Developer & AI Engineer"
                  className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl object-cover border border-white/10 shadow-2xl"
                  style={{ objectPosition: '50% 20%' }}
                />
                
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-black tracking-wide backdrop-blur-xl border border-white/20 shadow-xl"
                >
                  AI ENGINEER
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-black tracking-wide backdrop-blur-xl border border-white/20 shadow-xl"
                >
                  FULL STACK
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
              <div className="relative z-10">
                <stat.icon size={28} className="mx-auto mb-3 text-cyan-400 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-xs mb-2 font-bold uppercase tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-xl">
              <motion.div
                animate={{ y: [0, 16, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;