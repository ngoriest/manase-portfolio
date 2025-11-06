import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Rocket, Users, Award, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description: 'Writing maintainable, scalable code that stands the test of time and evolves with business needs.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      title: 'Rapid Prototyper',
      description: 'Delivering MVPs and production-ready solutions under tight deadlines without compromising quality.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Brain,
      title: 'AI Pioneer',
      description: 'Integrating cutting-edge Generative AI technologies to build next-generation intelligent applications.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Team Leader',
      description: 'Mentoring developers and leading cross-functional teams to deliver exceptional results together.',
      color: 'from-orange-500 to-red-500'
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
      title: 'Certificate in Full-Stack Software Engineering',
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into powerful digital solutions through code, creativity, and cutting-edge technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Story */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm a <span className="font-semibold text-purple-600 dark:text-purple-400">Full-Stack Software Engineer</span> who brings ideas to life through code. With a proven track record of delivering production applications like <span className="font-semibold text-pink-600 dark:text-pink-400">dikoras.com</span>, I specialize in building scalable, user-centric web solutions that drive real business impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Currently, I'm expanding my expertise in <span className="font-semibold text-green-600 dark:text-green-400">Generative AI</span> through intensive training at Open University of Kenya. I'm learning to integrate cutting-edge AI capabilities into full-stack applications, preparing for the next wave of intelligent software solutions.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              My background in <span className="font-semibold text-blue-600 dark:text-blue-400">Mathematics and Physics</span> gives me a unique analytical approach to problem-solving, while my training from African Management Institute provides the business acumen to understand and deliver on client objectives.
            </motion.p>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-4 pt-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center mb-3`}>
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Education & Training */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="text-purple-600" size={28} />
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Education & Training</h3>
              </div>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.institution}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`relative pl-8 pb-6 ${index !== education.length - 1 ? 'border-l-2 border-purple-200 dark:border-purple-800' : ''}`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 ${
                      edu.current 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}></div>

                    {/* Current learning badge */}
                    {edu.current && (
                      <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
                        Currently Learning
                      </span>
                    )}

                    <h4 className="font-bold text-lg text-gray-800 dark:text-white mb-1">
                      {edu.title}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {edu.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Action Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white text-center"
            >
              <Target size={32} className="mx-auto mb-3" />
              <h4 className="font-bold text-lg mb-2">Ready to Innovate</h4>
              <p className="text-purple-100 text-sm mb-4">
                Passionate about building the future with code and AI. Let's create something amazing together.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Start a Conversation
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;