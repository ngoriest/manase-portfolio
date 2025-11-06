import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Palette, Cpu, Rocket, Zap, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React', level: 90, description: 'Advanced hooks, context, performance optimization' },
        { name: 'JavaScript (ES6+)', level: 88, description: 'Modern syntax, async/await, modules' },
        { name: 'Tailwind CSS', level: 85, description: 'Utility-first, responsive design, customization' },
        { name: 'HTML5/CSS3', level: 92, description: 'Semantic markup, flexbox, grid, animations' },
        { name: 'Next.js', level: 65, description: 'Currently learning - SSR, API routes' },
      ]
    },
    {
      icon: Database,
      title: 'Backend & Database',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Python (Flask)', level: 87, description: 'RESTful APIs, authentication, ORM' },
        { name: 'PostgreSQL', level: 82, description: 'Database design, queries, optimization' },
        { name: 'RESTful APIs', level: 85, description: 'API design, documentation, testing' },
        { name: 'MongoDB', level: 75, description: 'NoSQL, aggregation, data modeling' },
        { name: 'Node.js', level: 70, description: 'Express.js, middleware, package management' },
      ]
    },
    {
      icon: Cpu,
      title: 'AI & Emerging Tech',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Generative AI', level: 60, description: 'Text/image generation, prompt engineering' },
        { name: 'Jaseci/Jac Language', level: 55, description: 'AI application development' },
        { name: 'ByLLM Integration', level: 50, description: 'Large language model integration' },
        { name: 'AI Application Architecture', level: 45, description: 'Designing AI-powered systems' },
        { name: 'API Design', level: 80, description: 'REST, GraphQL, documentation' },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Git/GitHub', level: 88, description: 'Version control, collaboration, workflows' },
        { name: 'Vercel/Render', level: 85, description: 'Production deployment, CI/CD' },
        { name: 'Postman', level: 80, description: 'API testing, documentation, automation' },
        { name: 'Figma', level: 75, description: 'UI/UX design, prototyping, collaboration' },
        { name: 'Netlify', level: 70, description: 'Static site deployment, forms, functions' },
      ]
    }
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      level: 95,
      description: 'Analytical thinking and creative solutions'
    },
    {
      name: 'Project Management',
      level: 85,
      description: 'Agile methodologies and team leadership'
    },
    {
      name: 'Communication',
      level: 90,
      description: 'Technical documentation and client relations'
    },
    {
      name: 'Adaptability',
      level: 88,
      description: 'Quick learning and technology adoption'
    }
  ];

  const ProgressBar = ({ level, color, delay = 0 }) => (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={isVisible ? { width: `${level}%` } : { width: 0 }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
        className={`h-full rounded-full bg-gradient-to-r ${color} shadow-lg`}
      />
    </div>
  );

  const SkillCard = ({ category, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
    >
      <div className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-4`}>
        <category.icon size={28} className="text-white" />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-6">
        {category.title}
      </h3>

      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 1 + (skillIndex * 0.1) }}
                className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
              >
                {skill.level}%
              </motion.span>
            </div>
            <ProgressBar 
              level={skill.level} 
              color={category.color}
              delay={0.5 + (skillIndex * 0.1)}
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );

  const SoftSkillCard = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex-1 space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700 dark:text-gray-300">
            {skill.name}
          </span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
            className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            {skill.level}%
          </motion.span>
        </div>
        <ProgressBar 
          level={skill.level} 
          color="from-green-500 to-emerald-500"
          delay={0.8 + (index * 0.1)}
        />
        <p className="text-xs text-gray-500 dark:text-gray-400">
          {skill.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
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
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Mastering modern technologies to build scalable, efficient, and innovative solutions
          </p>
        </motion.div>

        {/* Technical Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp size={32} className="text-yellow-300" />
                <h3 className="text-2xl font-bold">Professional Skills</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <SoftSkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Rocket size={32} className="text-purple-600" />
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Current Learning Focus</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <Zap size={20} className="text-yellow-500" />
                Generative AI & Advanced Development
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Advanced Next.js and TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Jaseci AI framework and Jac language
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Generative AI application architecture
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  Advanced API design and microservices
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-500" />
                Career Growth Goals
              </h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Lead full-stack development projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Specialize in AI-integrated applications
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Mentor junior developers in the community
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  Contribute to open-source AI projects
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;