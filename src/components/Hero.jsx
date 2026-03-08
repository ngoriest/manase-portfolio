import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Zap, Code, Cpu, ArrowDown } from 'lucide-react';

// ✅ Stats defined outside component - never recreated on re-render
const stats = [
  { number: '8+',   label: 'Client Projects',      icon: Code },
  { number: '10+',  label: 'Live Production Sites', icon: Zap },
  { number: '12+',  label: 'Developers Mentored',   icon: Sparkles },
  { number: '100%', label: 'Client Satisfaction',   icon: Cpu },
];

const socialLinks = [
  { icon: Github,      href: 'https://github.com/ngoriest',               label: 'GitHub',   color: 'hover:text-white hover:shadow-white/20' },
  { icon: Linkedin,    href: 'https://linkedin.com/in/manase-kimutai',     label: 'LinkedIn', color: 'hover:text-cyan-400 hover:shadow-cyan-400/20' },
  { icon: Mail,        href: 'mailto:thee.manase@gmail.com',               label: 'Email',    color: 'hover:text-purple-400 hover:shadow-purple-400/20' },
  { icon: ExternalLink,href: 'https://dikoras.com',                        label: 'Dikoras',  color: 'hover:text-pink-400 hover:shadow-pink-400/20' },
];

// ✅ memo - Hero never needs to re-render after mount
const Hero = memo(() => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background - ✅ Reduced from 3 infinite animations to CSS-only gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-purple-950/20 to-[#0a0a0f]" />
        {/* ✅ Static orbs with CSS animation (GPU-composited, no JS) */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute -bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-tr from-purple-500/15 via-pink-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }} />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-full border border-white/10"
            >
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-sm font-bold tracking-wide text-cyan-400">
                AVAILABLE FOR NEW PROJECTS
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  MANASE
                </span>
                <span className="block text-white mt-2">KIMUTAI</span>
              </h1>

              <div className="space-y-3">
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
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-300 max-w-2xl leading-relaxed"
            >
              Crafting <span className="font-bold text-purple-400">production-grade applications</span> with modern stacks.
              Pioneering <span className="font-bold text-pink-400">Generative AI</span> solutions that transform businesses.
            </motion.p>

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
                  GET IN TOUCH <Mail size={20} />
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white rounded-2xl font-black tracking-wide hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center justify-center gap-2"
              >
                VIEW MY WORK <ExternalLink size={20} />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center lg:justify-start gap-3"
            >
              {socialLinks.map((social) => (
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
              <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm" />
                {/* ✅ loading="eager" + fetchpriority="high" = browser prioritises this as LCP image */}
                <img
                  src="/manase-photo.jpg"
                  alt="Manase Kimutai - Full Stack Developer & AI Engineer"
                  className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-3xl object-cover border border-white/10 shadow-2xl"
                  style={{ objectPosition: '50% 20%' }}
                  loading="eager"
                  fetchpriority="high"
                  decoding="async"
                  width="384"
                  height="384"
                />
                {/* ✅ Floating badges use CSS animation - no JS loop */}
                <div
                  className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-white text-sm font-black tracking-wide backdrop-blur-xl border border-white/20 shadow-xl"
                  style={{ animation: 'float 4s ease-in-out infinite' }}
                >
                  AI ENGINEER
                </div>
                <div
                  className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white text-sm font-black tracking-wide backdrop-blur-xl border border-white/20 shadow-xl"
                  style={{ animation: 'float 4s ease-in-out infinite', animationDelay: '0.5s', animationDirection: 'reverse' }}
                >
                  FULL STACK
                </div>
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
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300" />
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
          <div className="flex flex-col items-center text-gray-500" style={{ animation: 'float 2s ease-in-out infinite' }}>
            <span className="text-xs mb-2 font-bold uppercase tracking-widest">SCROLL</span>
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center backdrop-blur-xl">
              <div
                className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-purple-400 rounded-full mt-2"
                style={{ animation: 'scrollDot 2s ease-in-out infinite' }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ✅ CSS keyframes for float/scroll animations - zero JS cost */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes scrollDot {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(16px); opacity: 1; }
        }
      `}</style>
    </section>
  );
});

Hero.displayName = 'Hero';
export default Hero;