import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, Zap, ChevronRight, X, MessageCircle, Sparkles, Trophy } from 'lucide-react';

const Pricing = ({ onPackageSelect }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: 'BRONZE',
      title: 'Starter Website',
      price: 'KES 20,000 - 30,000',
      timeline: '1-2 weeks',
      description: 'Perfect for startups, personal brands, and small local businesses',
      color: 'from-amber-400 to-orange-500',
      features: [
        '1-3 pages (Home, About, Contact)',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Social media integration',
        'Contact form with email notifications',
        '1 month of free support',
        'Basic Google Analytics setup'
      ],
      idealClient: 'Perfect for entrepreneurs just starting out who need a professional online presence quickly.'
    },
    {
      id: 2,
      name: 'SILVER',
      title: 'Business Growth Website',
      price: 'KES 40,000 - 80,000',
      timeline: '2-4 weeks',
      description: 'Perfect for growing companies, established professionals, service businesses',
      color: 'from-cyan-400 to-blue-500',
      popular: true,
      features: [
        '5-8 pages with custom design',
        'Advanced SEO optimization',
        'Google Analytics and Search Console',
        'Blog or portfolio section with CMS',
        'Newsletter signup integration',
        '3 months of free support',
        '2-hour training session'
      ],
      idealClient: 'Ideal for established businesses ready to scale their digital presence'
    },
    {
      id: 3,
      name: 'GOLD',
      title: 'Premium Website / E-commerce',
      price: 'KES 100,000 - 150,000+',
      timeline: '4-8 weeks',
      description: 'Perfect for established brands, e-commerce businesses, custom features',
      color: 'from-purple-400 to-pink-500',
      features: [
        'Unlimited pages and custom features',
        'Full e-commerce integration',
        'Payment gateway (M-Pesa, cards)',
        'Custom booking or client portals',
        'Advanced SEO and performance',
        'Comprehensive analytics',
        '6 months of free support'
      ],
      idealClient: 'For businesses needing enterprise-level solutions and advanced functionality'
    }
  ];

  const handlePackageSelect = (pkg) => {
    const packageInfo = {
      name: pkg.name,
      title: pkg.title,
      price: pkg.price,
      timeline: pkg.timeline,
      message: `Hello Manase,\n\nI'm interested in the ${pkg.name} package:\n- Package: ${pkg.title}\n- Price: ${pkg.price}\n- Timeline: ${pkg.timeline}\n\nPlease get in touch with me to discuss this package further.\n\nBest regards,\n[Your Name]`
    };
    
    localStorage.setItem('selectedPackage', JSON.stringify(packageInfo));
    
    if (onPackageSelect) {
      onPackageSelect(packageInfo);
    }

    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    setSelectedPackage(null);
  };

  const handleWhatsAppDirect = (pkg) => {
    const message = `Hello Manase! I'm interested in your ${pkg.name} package: ${pkg.title} (${pkg.price}). Can we discuss this?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254710371770?text=${encodedMessage}`, '_blank');
  };

  const PackageModal = ({ pkg, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-[#0a0a0f]/95 backdrop-blur-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`h-1 bg-gradient-to-r ${pkg.color}`}></div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-lg font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>{pkg.name}</span>
                  {pkg.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-black rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-black text-white mb-2">{pkg.title}</h3>
                <div className="text-2xl font-black text-white mb-4">{pkg.price}</div>
                <div className="flex items-center text-gray-400">
                  <Zap size={20} className="mr-2" />
                  <span className="font-bold">{pkg.timeline} delivery</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className={`p-6 bg-gradient-to-br ${pkg.color} bg-opacity-10 rounded-2xl border border-white/10`}>
                  <h4 className="font-bold text-white mb-3">Perfect for:</h4>
                  <p className="text-gray-300">{pkg.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-black text-white mb-3">IDEAL CLIENT</h4>
                  <p className="text-gray-400 leading-relaxed">{pkg.idealClient}</p>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 rounded-xl font-black hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    <MessageCircle size={18} />
                    DISCUSS VIA WHATSAPP
                  </motion.button>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-black text-white mb-4">WHAT'S INCLUDED</h4>
                <div className="space-y-3">
                  {pkg.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10"
                    >
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`} style={{ filter: 'drop-shadow(0 0 10px currentColor)' }} />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-cyan-950/10 to-[#0a0a0f]"></div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 backdrop-blur-xl rounded-full border border-cyan-500/20 mb-6">
            <Trophy size={16} className="text-cyan-400" />
            <span className="text-sm font-bold tracking-wide text-cyan-400">PACKAGES</span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SERVICES & PRICING
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light mb-6">
            Transparent pricing in KES for professional websites. Choose the package that fits your needs.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 backdrop-blur-xl rounded-full border border-green-500/20">
            <MessageCircle size={16} className="text-green-400" />
            <span className="text-sm font-bold text-green-400">SELECT A PACKAGE TO DISCUSS VIA WHATSAPP</span>
          </div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-black rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`relative h-full p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border-2 ${pkg.popular ? 'border-cyan-500/50' : 'border-white/10'} hover:border-white/30 transition-all duration-500 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color}`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className={`w-5 h-5 bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`} style={{ filter: 'drop-shadow(0 0 10px currentColor)' }} />
                    <span className={`text-lg font-black bg-gradient-to-r ${pkg.color} bg-clip-text text-transparent`}>{pkg.name}</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.title}</h3>
                  <div className="text-3xl font-black text-white mb-4">{pkg.price}</div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-xl rounded-full mb-6">
                    <Zap size={14} />
                    <span className="text-sm font-bold text-gray-300">{pkg.timeline}</span>
                  </div>

                  <p className="text-gray-400 mb-6">{pkg.description}</p>

                  <div className="space-y-3 mb-6">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.color} mt-1.5 flex-shrink-0`}></div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="flex items-center gap-1 text-cyan-400 font-bold hover:gap-2 transition-all mb-6"
                  >
                    View all {pkg.features.length} features
                    <ChevronRight size={16} />
                  </button>

                  <div className="space-y-3">
                    <button
                      onClick={() => handlePackageSelect(pkg)}
                      className={`w-full bg-gradient-to-r ${pkg.color} text-white py-3 rounded-xl font-black hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                    >
                      <MessageCircle size={18} />
                      DISCUSS VIA WHATSAPP
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative p-10 bg-gradient-to-br from-cyan-900/50 to-purple-900/50 backdrop-blur-2xl rounded-3xl border border-white/10 text-center">
            <div className="inline-flex p-4 bg-white/10 rounded-2xl mb-6">
              <Trophy size={48} className="text-cyan-400" />
            </div>
            <h3 className="text-3xl font-black text-white mb-4 tracking-tight">READY TO START YOUR PROJECT?</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Get a personalized quote or schedule a free consultation via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-black rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                GET FREE QUOTE
              </motion.button>
              
              <motion.a
                href="https://wa.me/254710371770?text=Hello%20Manase!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-xl border-2 border-white/20 text-white font-black rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WHATSAPP DIRECT
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {selectedPackage && (
        <PackageModal 
          pkg={selectedPackage} 
          onClose={() => setSelectedPackage(null)} 
        />
      )}
    </section>
  );
};

export default Pricing;