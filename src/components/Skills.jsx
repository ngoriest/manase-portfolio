import React, { useState, useEffect, memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Cpu, Rocket, Zap, TrendingUp, Sparkles } from 'lucide-react';

// ✅ Static data outside component
const skillCategories = [
  {
    icon: Code,
    title: 'Frontend Development',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'React',               level: 90, description: 'Advanced hooks, context, performance optimization' },
      { name: 'JavaScript (ES6+)',   level: 88, description: 'Modern syntax, async/await, modules' },
      { name: 'Tailwind CSS',        level: 85, description: 'Utility-first, responsive design' },
      { name: 'HTML5/CSS3',          level: 92, description: 'Semantic markup, animations' },
      { name: 'Next.js',             level: 65, description: 'SSR, API routes, static generation' },
    ]
  },
  {
    icon: Database,
    title: 'Backend & Database',
    color: 'from-green-400 to-emerald-500',
    skills: [
      { name: 'Python (Flask/Django)', level: 88, description: 'REST APIs, authentication, ORM' },
      { name: 'PostgreSQL/MySQL',      level: 85, description: 'Database design, optimization' },
      { name: 'RESTful API Design',    level: 87, description: 'API architecture, documentation' },
      { name: 'MongoDB/Firebase',      level: 78, description: 'NoSQL databases, real-time data' },
      { name: 'Node.js/Express',       level: 75, description: 'Backend services, middleware' },
    ]
  },
  {
    icon: Cpu,
    title: 'AI & Emerging Tech',
    color: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Generative AI',    level: 60, description: 'Text/image generation, prompts' },
      { name: 'Jaseci/Jac Lang', level: 55, description: 'AI application development' },
      { name: 'LLM Integration', level: 50, description: 'Large language models' },
      { name: 'AI Architecture', level: 45, description: 'Designing AI-powered systems' },
      { name: 'System Design',   level: 80, description: 'Scalable architecture, microservices' },
    ]
  },
  {
    icon: Cloud,
    title: 'DevOps & Tools',
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'Git/GitHub',     level: 88, description: 'Version control, workflows' },
      { name: 'Vercel/Render',  level: 85, description: 'Production deployment, CI/CD' },
      { name: 'Postman',        level: 80, description: 'API testing, documentation' },
      { name: 'Figma',          level: 75, description: 'UI/UX design, prototyping' },
      { name: 'AWS Basics',     level: 70, description: 'Cloud deployment, S3, EC2' },
    ]
  }
];

const softSkills = [
  { name: 'Problem Solving',          level: 95, description: 'Analytical thinking and creative solutions' },
  { name: 'Project Management',       level: 85, description: 'Agile methodologies and leadership' },
  { name: 'Technical Communication',  level: 90, description: 'Documentation, collaboration' },
  { name: 'Adaptability',             level: 88, description: 'Quick learning and tech adoption' },
];

const specializationItems = [
  'Full-Stack Development: React + Flask/Python',
  'Database Architecture: PostgreSQL & MongoDB',
  'Cloud Deployment: Vercel, Render, AWS',
  'Generative AI: Building intelligent applications',
];

const growthItems = [
  'Deepening expertise in Generative AI applications',
  'Mastering advanced React patterns and Next.js',
  'Expanding cloud architecture knowledge (AWS)',
  'Contributing to open-source projects',
];

// ✅ ProgressBar as its own memo'd component - only re-renders when props change
const ProgressBar = memo(({ level, color, isVisible, delay = 0 }) => (
  <div className="relative w-full h-2 bg-white/5 rounded-full overflow-hidden backdrop-blur-xl">
    <motion.div
      initial={{ width: 0 }}
      animate={isVisible ? { width: `${level}%` } : { width: 0 }}
      transition={{ duration: 1.5, delay, ease: 'easeOut' }}
      className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
    </motion.div>
  </div>
));
ProgressBar.displayName = 'ProgressBar';

// ✅ SkillCard memo'd - won't re-render when parent isVisible changes unless its own props change
const SkillCard = memo(({ category, index, isVisible }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-500 relative overflow-hidden"
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
    <div className="relative z-10">
      <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        <category.icon size={32} className="text-white" />
      </div>
      <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{category.title}</h3>
      <div className="space-y-5">
        {category.skills.map((skill, skillIndex) => (
          <div key={skill.name} className="space-y-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gray-300 tracking-wide">{skill.name}</span>
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.8 + skillIndex * 0.1 }}
                className={`text-sm font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {skill.level}%
              </motion.span>
            </div>
            <ProgressBar
              level={skill.level}
              color={category.color}
              isVisible={isVisible}
              delay={0.3 + skillIndex * 0.1}
            />
            <p className="text-xs text-gray-500 leading-relaxed">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
));
SkillCard.displayName = 'SkillCard';

const Skills = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const skillsSection = document.getElementById('skills');
    if (!skillsSection) return;

    // ✅ Disconnect after first trigger - no reason to keep observing forever
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(skillsSection);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* ✅ CSS animation instead of Framer Motion infinite loop */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-cyan-950/10 to-[#0a0a0f]" />
        <div
          className="absolute -top-1/4 -left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl opacity-15 animate-pulse"
          style={{ animationDuration: '10s' }}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20 mb-6">
            <Code size={16} className="text-cyan-400" />
            <span className="text-sm font-bold tracking-wide text-cyan-400">EXPERTISE</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              TECHNICAL SKILLS
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Mastering modern technologies to build scalable, efficient, and innovative solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} isVisible={isVisible} />
          ))}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group mb-20"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          <div className="relative p-10 bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <TrendingUp size={28} className="text-white" />
                </div>
                <h3 className="text-3xl font-black text-white tracking-tight">PROFESSIONAL SKILLS</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-white">{skill.name}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                          className="text-sm font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <ProgressBar
                        level={skill.level}
                        color="from-cyan-400 via-purple-400 to-pink-400"
                        isVisible={isVisible}
                        delay={0.5 + index * 0.1}
                      />
                      <p className="text-xs text-gray-400">{skill.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Career Focus */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="p-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-xl">
              <Rocket size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-black text-white tracking-tight">CAREER FOCUS & GOALS</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                <Zap size={20} className="text-cyan-400" />
                CURRENT SPECIALIZATION
              </h4>
              <div className="space-y-4">
                {specializationItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                <Sparkles size={20} className="text-purple-400" />
                GROWTH & DEVELOPMENT
              </h4>
              <div className="space-y-4">
                {growthItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
export default Skills;