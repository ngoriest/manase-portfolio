import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Sparkles, Zap, Shield } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Dikoras Law Firm',
      description: 'Production full-stack platform for professional law firm serving real clients. Features secure document management, client portal, and responsive design with 100% uptime since launch.',
      image: '⚖️',
      liveUrl: 'https://dikoras.com',
      githubUrl: 'https://github.com/ngoriest',
      tags: ['React', 'Flask', 'PostgreSQL', 'JWT', 'Vercel', 'Render'],
      category: 'fullstack',
      featured: true,
      highlights: [
        'Real client platform in production',
        'Secure role-based access control',
        'Professional legal industry design',
        '99.9% uptime deployment'
      ]
    },
    {
      id: 2,
      title: 'Tuinue Wasichana Platform',
      description: 'Donation management platform connecting donors with charitable organizations. Features secure payment processing, real-time tracking, and OAuth integration with 99.8% uptime.',
      image: '❤️',
      liveUrl: null,
      githubUrl: 'https://github.com/ngoriest',
      tags: ['React', 'Flask', 'PostgreSQL', 'OAuth 2.0', 'JWT'],
      category: 'fullstack',
      featured: false,
      highlights: [
        'Dual authentication system',
        'Real-time donation tracking',
        'Google OAuth integration',
        'Optimized database architecture'
      ]
    },
    {
      id: 3,
      title: 'Job Application Tracker',
      description: 'Comprehensive dashboard for tracking job applications with real-time updates, analytics visualization, and interview scheduling features.',
      image: '💼',
      liveUrl: null,
      githubUrl: 'https://github.com/ngoriest',
      tags: ['React', 'Flask', 'Tailwind CSS', 'REST API', 'Context API'],
      category: 'fullstack',
      featured: false,
      highlights: [
        'Real-time status updates',
        'Mobile-first responsive design',
        'Data visualization features',
        'Optimistic UI updates'
      ]
    },
    {
      id: 4,
      title: 'AI-Powered Hackathon Project',
      description: 'Collaborated in a cross-functional team to build an AI-powered prototype in under 48 hours, earning "Most Innovative" award.',
      image: '🚀',
      liveUrl: null,
      githubUrl: 'https://github.com/ngoriest',
      tags: ['React', 'Python', 'AI Integration', 'Rapid Prototyping'],
      category: 'ai',
      featured: false,
      highlights: [
        'Built in 48-hour deadline',
        'Integrated multiple external APIs',
        'Earned "Most Innovative" award',
        'Cross-functional team collaboration'
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'fullstack', label: 'Full-Stack' },
    { key: 'ai', label: 'AI Projects' }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

  const featuredProject = projects.find(project => project.featured);

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
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
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-world applications solving real business problems with cutting-edge technology
          </p>
        </motion.div>

        {/* Featured Project Highlight */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-white rounded-full"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles size={24} className="text-yellow-300" />
                  <span className="font-semibold text-yellow-300">Featured Production Project</span>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold mb-4">{featuredProject.title}</h3>
                    <p className="text-purple-100 text-lg mb-6 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {featuredProject.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Zap size={16} className="text-yellow-300 flex-shrink-0" />
                          <span className="text-purple-100 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mb-6">
                      {featuredProject.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <motion.a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300"
                      >
                        <Eye size={20} />
                        Visit Live Site
                      </motion.a>
                      <motion.a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm"
                      >
                        <Github size={20} />
                        View Code
                      </motion.a>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <span className="text-6xl">{featuredProject.image}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg border border-gray-200 dark:border-gray-700">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects
              .filter(project => !project.featured)
              .map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-2xl transition-all duration-500"
                >
                  {/* Project Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl">{project.image}</span>
                      </div>
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                            aria-label="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </motion.a>
                        )}
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300"
                          aria-label="Source Code"
                        >
                          <Github size={18} />
                        </motion.a>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Highlights */}
                  <div className="p-6">
                    <div className="space-y-3 mb-4">
                      {project.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <Shield size={14} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <Code size={48} className="mx-auto mb-4 text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and bring innovative ideas to life. 
              Whether you need a full-stack application, AI integration, or technical consultation, 
              let's discuss how we can create something amazing.
            </p>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <Sparkles size={20} />
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;