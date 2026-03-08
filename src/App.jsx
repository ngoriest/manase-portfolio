import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// ✅ LAZY LOAD all sections - they only load when needed
// Hero loads immediately (above the fold), everything else is deferred
import Hero from './components/Hero';
const About    = lazy(() => import('./components/About'));
const Skills   = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Pricing  = lazy(() => import('./components/Pricing'));
const Contact  = lazy(() => import('./components/Contact'));
const Footer   = lazy(() => import('./components/Footer'));

// Minimal fallback - no layout shift, matches dark bg
const SectionFallback = () => (
  <div className="w-full py-24 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-purple-500/40 border-t-purple-400 rounded-full animate-spin" />
  </div>
);

const navItems = [
  { name: 'Home',     href: '#home',     id: 'home' },
  { name: 'About',    href: '#about',    id: 'about' },
  { name: 'Skills',   href: '#skills',   id: 'skills' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Pricing',  href: '#pricing',  id: 'pricing' },
  { name: 'Contact',  href: '#contact',  id: 'contact' },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen]   = useState(false);
  const [activeSection, setActiveSection]     = useState('home');
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [scrolled, setScrolled]               = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');

    // ✅ Throttled scroll handler - fires at most once per animation frame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Active section observer
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { rootMargin: '-40% 0px -60% 0px', threshold: 0 });

    sections.forEach(s => observer.observe(s));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ✅ useCallback prevents re-creating this function on every render
  const scrollToSection = useCallback((href, id) => {
    setActiveSection(id);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileMenuOpen(false);
  }, []);

  // ✅ Package selection no longer touches localStorage on every mount
  const handlePackageSelect = useCallback((pkg) => {
    setSelectedPackage(pkg);
  }, []);

  return (
    <div className="min-h-screen dark bg-[#0a0a0f]">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/20 backdrop-blur-2xl border-b border-white/5 shadow-2xl shadow-purple-500/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => scrollToSection('#home', 'home')}
            >
              <div className="relative">
                <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-md animate-pulse" />
              </div>
              <span className="text-xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                MANASE KIMUTAI
              </span>
            </motion.div>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href, item.id)}
                  className={`relative px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-300 rounded-xl overflow-hidden group ${
                    activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/10"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      style={{ borderRadius: '0.75rem' }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 rounded-xl" />
                </button>
              ))}
            </div>

            <button
              className="md:hidden p-2.5 text-gray-300 hover:text-white transition-colors rounded-xl hover:bg-white/5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/40 backdrop-blur-2xl border-t border-white/5"
            >
              <div className="px-4 py-6 space-y-2 max-w-7xl mx-auto">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href, item.id)}
                    className={`block w-full text-left px-5 py-3 text-base font-bold tracking-wide transition-all duration-300 rounded-xl ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white border border-white/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content - each section is lazy loaded inside Suspense */}
      <main className="pt-16">
        {/* Hero is NOT lazy - it's above the fold and must render immediately */}
        <Hero />

        <Suspense fallback={<SectionFallback />}>
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Pricing onPackageSelect={handlePackageSelect} />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <Contact selectedPackage={selectedPackage} />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;