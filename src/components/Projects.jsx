import React, { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, Code, Sparkles, Zap, Shield } from 'lucide-react';

// ✅ Static data outside component
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
      '99.9% uptime deployment',
    ]
  },
  {
    id: 2,
    title: 'Skincare Space Kenya',
    description: 'E-commerce platform for premium skincare products in Kenya. Full-stack application with product catalog, shopping cart, and payment integration.',
    image: '🧴',
    liveUrl: 'https://www.skincarespaceke.co.ke/',
    githubUrl: 'https://github.com/ngoriest',
    tags: ['React', 'Flask', 'PostgreSQL', 'E-commerce', 'Payment API', 'AWS'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: 3,
    title: 'Makeup by Linda',
    description: 'Professional makeup artist portfolio and booking platform. Features service catalog, appointment scheduling, and client management system.',
    image: '💄',
    liveUrl: 'https://makeupby-linda.com/',
    githubUrl: 'https://github.com/ngoriest',
    tags: ['React', 'Flask', 'PostgreSQL', 'Booking System', 'Portfolio', 'Vercel'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: 4,
    title: 'Tuinue Wasichana Platform',
    description: 'Donation management platform connecting donors with charitable organizations. Features secure payment processing, real-time tracking, and OAuth integration.',
    image: '❤️',
    liveUrl: null,
    githubUrl: 'https://github.com/ngoriest',
    tags: ['React', 'Flask', 'PostgreSQL', 'OAuth 2.0', 'JWT'],
    category: 'fullstack',
    featured: false,
  },
  {
    id: 5,
    title: 'AI-Powered Hackathon Project',
    description: 'Collaborated in a cross-functional team to build an AI-powered prototype in under 48 hours, earning "Most Innovative" award.',
    image: '🚀',
    liveUrl: null,
    githubUrl: 'https://github.com/ngoriest',
    tags: ['React', 'Python', 'AI Integration', 'Rapid Prototyping'],
    category: 'ai',
    featured: false,
  },
];

const filters = [
  { key: 'all',       label: 'All Projects' },
  { key: 'fullstack', label: 'Full-Stack' },
  { key: 'ai',        label: 'AI Projects' },
];

const statsData = [
  { number: '3+',   label: 'Live Production Applications' },
  { number: '100%', label: 'Client Satisfaction Rate' },
  { number: '99.9%',label: 'Average Uptime' },
];

const featuredProject = projects.find(p => p.featured);

// ✅ ProjectCard memo'd - won't re-render on filter changes for unchanged cards
const ProjectCard = memo(({ project }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    whileHover={{ y: -10, scale: 1.02 }}
    className="group p-6 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/10 group-hover:to-cyan-500/10 transition-all duration-500" />
    <div className="relative z-10">
      <div className="flex items-center justify-between mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <span className="text-3xl">{project.image}</span>
        </div>
        <div className="flex gap-2">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 bg-white/10 backdrop-blur-xl rounded-xl text-gray-400 hover:text-cyan-400 border border-white/10"
            >
              <ExternalLink size={18} />
            </motion.a>
          )}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="p-2 bg-white/10 backdrop-blur-xl rounded-xl text-gray-400 hover:text-purple-400 border border-white/10"
          >
            <Github size={18} />
          </motion.a>
        </div>
      </div>
      <h3 className="text-xl font-black text-white mb-3 tracking-tight">{project.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.slice(0, 4).map((tag) => (
          <span key={tag} className="px-2 py-1 bg-white/5 backdrop-blur-xl rounded-full text-xs font-bold text-gray-400 border border-white/10">
            {tag}
          </span>
        ))}
      </div>
      {project.liveUrl && (
        <div className="flex items-center gap-2 mt-4">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-green-400 font-bold">LIVE PRODUCTION SITE</span>
        </div>
      )}
    </div>
  </motion.div>
));
ProjectCard.displayName = 'ProjectCard';

const Projects = memo(() => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(
    p => !p.featured && (activeFilter === 'all' || p.category === activeFilter)
  );

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* ✅ CSS animation instead of Framer Motion infinite loop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-purple-950/10 to-[#0a0a0f]" />
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ animationDuration: '9s' }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 backdrop-blur-xl rounded-full border border-purple-500/20 mb-6">
            <Code size={16} className="text-purple-400" />
            <span className="text-sm font-bold tracking-wide text-purple-400">PORTFOLIO</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              PRODUCTION PROJECTS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light mb-6">
            Real-world applications solving business problems with cutting-edge technology
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl rounded-full border border-green-500/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-sm font-bold text-green-400">3+ PRODUCTION APPLICATIONS LIVE</span>
          </div>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20 relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
            <div className="relative p-10 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full mb-4 border border-yellow-500/30">
                    <Sparkles size={16} className="text-yellow-400" />
                    <span className="text-sm font-black text-yellow-400 tracking-wide">FEATURED PROJECT</span>
                  </div>
                  <h3 className="text-4xl font-black text-white mb-4 tracking-tight">{featuredProject.title}</h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredProject.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {featuredProject.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2">
                        <Zap size={16} className="text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-gray-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full text-sm font-bold text-white border border-white/20">
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
                      className="flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-full font-black hover:bg-gray-100 transition-colors"
                    >
                      <Eye size={20} /> VISIT LIVE SITE
                    </motion.a>
                    <motion.a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-6 py-3 rounded-full font-black border border-white/20 hover:bg-white/20 transition-colors"
                    >
                      <Github size={20} /> VIEW CODE
                    </motion.a>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-40 h-40 bg-white/10 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/20">
                    <span className="text-8xl">{featuredProject.image}</span>
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
          <div className="inline-flex p-2 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-3 rounded-xl font-black tracking-wide transition-all duration-300 ${
                  activeFilter === filter.key
                    ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl">
              <Shield size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight">PRODUCTION EXPERIENCE</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {statsData.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
                <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-400 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Projects.displayName = 'Projects';
export default Projects;