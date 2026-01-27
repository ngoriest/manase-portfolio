import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Award, Target, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable code that stands the test of time and evolves with business needs.',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Rocket,
      title: 'Full-Stack Specialist',
      description: 'Expert in React frontends and Flask/Python backends, delivering production-ready applications.',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI & Emerging Tech',
      description: 'Building next-generation intelligent applications with Generative AI and modern frameworks.',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Mentoring developers and leading cross-functional teams to deliver exceptional results.',
      color: 'from-orange-400 to-red-500'
    }
  ];

  const education = [
    {
      institution: 'The Open University of Kenya & BCS Technology International',
      period: '2024 - Present',
      title: 'Building Generative AI Applications',
      description: 'Comprehensive program covering Generative AI for text, images, music, and video creation. Hands-on experience with Jaseci ecosystem and Jac language.',
      current: true
    },
    {
      institution: 'Moringa School',
      period: '2024',
      title: 'Full-Stack Software Engineering',
      description: 'Intensive project-based curriculum: React, Python/Flask, Node.js, databases, and DevOps. Built 10+ full-stack applications.',
      current: false
    },
    {
      institution: 'African Management Institute',
      period: '2023',
      title: 'Business Management & Leadership Training',
      description: 'Practical business learning focused on African entrepreneurship, effective communication, team leadership, and growth mindset development.',
      current: false
    }
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
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple-950/10 to-[#0a0a0f]"></div>
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6">
            <Sparkles size={16} className="text-purple-400" />
            <span className="text-sm font-bold tracking-wide text-purple-400">WHO I AM</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              ABOUT ME
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Full-Stack Software Engineer specializing in React, Python/Flask, and Generative AI applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a <span className="font-bold text-purple-400">Full-Stack Software Engineer</span> with expertise in React, Flask, and modern web technologies. Currently advancing my skills in Generative AI through intensive training, I build scalable applications that solve real-world problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My technical focus spans the entire development stack—from creating responsive React interfaces to building robust Flask APIs and optimizing PostgreSQL databases. Currently deepening my expertise in <span className="font-bold text-cyan-400">Generative AI applications</span> to create next-generation intelligent solutions.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group p-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">EDUCATION & TRAINING</h3>
              </div>

              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative pl-8 ${index !== education.length - 1 ? 'pb-8 border-l-2 border-white/10' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-[#0a0a0f] ${
                      edu.current 
                        ? 'bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/50 animate-pulse' 
                        : 'bg-gradient-to-r from-purple-400 to-pink-400'
                    }`}></div>

                    {/* Current badge */}
                    {edu.current && (
                      <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-bold px-3 py-1 rounded-full mb-3 border border-cyan-500/30">
                        CURRENTLY LEARNING
                      </span>
                    )}

                    <h4 className="font-bold text-lg text-white mb-2">
                      {edu.title}
                    </h4>
                    <p className="text-purple-400 font-bold mb-1 text-sm">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-500 mb-3 font-mono">
                      {edu.period}
                    </p>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative p-10 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative z-10">
              <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-6">
                <Target size={40} className="text-cyan-400" />
              </div>
              <h4 className="font-black text-3xl mb-4 text-white tracking-tight">READY TO BUILD</h4>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Passionate about creating scalable applications with modern technologies. Let's build something amazing together.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-purple-600 rounded-full font-black tracking-wide hover:bg-gray-100 transition-colors duration-300 shadow-xl"
              >
                START A CONVERSATION
                <Sparkles size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;