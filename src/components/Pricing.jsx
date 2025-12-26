import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Star, Zap, ChevronRight, X, CreditCard, Clock, Shield, Trophy, Code, Sparkles, Briefcase, Users, MessageCircle } from 'lucide-react';

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
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20',
      borderColor: 'border-amber-200 dark:border-amber-800',
      textColor: 'text-amber-600 dark:text-amber-400',
      buttonColor: 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700',
      features: [
        '1-3 pages (Home, About, Contact)',
        'Mobile-responsive design',
        'Basic SEO optimization',
        'Social media integration',
        'Contact form with email notifications',
        '1 month of free support and minor updates',
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
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      textColor: 'text-blue-600 dark:text-blue-400',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700',
      features: [
        '5-8 pages (Home, About, Services, Portfolio/Blog, Contact, etc.)',
        'Custom professional design with animations',
        'Advanced SEO optimization',
        'Google Analytics and Search Console setup',
        'Blog or portfolio section with CMS',
        'Newsletter signup integration',
        '3 months of free support and updates',
        '2-hour training session on managing your site'
      ],
      idealClient: 'Ideal for established businesses ready to scale their digital presence',
      popular: true
    },
    {
      id: 3,
      name: 'GOLD',
      title: 'Premium Website / E-commerce',
      price: 'KES 100,000 - 150,000+',
      timeline: '4-8 weeks',
      description: 'Perfect for established brands, e-commerce businesses, companies needing custom features',
      color: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      textColor: 'text-purple-600 dark:text-purple-400',
      buttonColor: 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700',
      features: [
        'Unlimited pages and custom features',
        'Full e-commerce integration (if needed)',
        'Payment gateway integration (M-Pesa, card payments)',
        'Custom booking or client portal systems',
        'Advanced SEO and performance optimization',
        'Comprehensive analytics and reporting setup',
        '6 months of free support and maintenance'
      ],
      idealClient: 'For businesses needing enterprise-level solutions and advanced functionality'
    }
  ];

  const additionalServices = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Logo Design & Branding',
      price: 'KES 8,000 - 15,000',
      description: 'Custom logo design with brand guidelines',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: 'Content Writing',
      price: 'KES 1,500 per page',
      description: 'Professional copy that converts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Photography Coordination',
      price: 'KES 5,000 coordination fee',
      description: 'Connect with professional photographers',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Social Media Setup',
      price: 'KES 3,000 - 8,000',
      description: 'Professional profiles across all platforms',
      color: 'from-orange-500 to-red-500'
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
    
    // Store the selected package info in localStorage
    localStorage.setItem('selectedPackage', JSON.stringify(packageInfo));
    
    // Call the parent function to handle navigation to contact
    if (onPackageSelect) {
      onPackageSelect(packageInfo);
    }

    // Scroll to contact section
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }

    // Close modal if open
    setSelectedPackage(null);
  };

  // Function to handle direct WhatsApp for a package
  const handleWhatsAppDirect = (pkg) => {
    const message = `Hello Manase! I'm interested in your ${pkg.name} package: ${pkg.title} (${pkg.price}). Can we discuss this?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/254792016422?text=${encodedMessage}`, '_blank');
  };

  const PackageModal = ({ pkg, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
          
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-lg font-bold ${pkg.textColor}`}>{pkg.name}</span>
                  {pkg.popular && (
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium rounded-full">
                      MOST POPULAR
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {pkg.title}
                </h3>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {pkg.price}
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Zap className="h-5 w-5 mr-2" />
                  <span className="font-medium">{pkg.timeline} delivery</span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className={`${pkg.bgColor} rounded-2xl p-6 border ${pkg.borderColor}`}>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Perfect for:</h4>
                  <p className="text-gray-700 dark:text-gray-300">{pkg.description}</p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Ideal Client</h4>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{pkg.idealClient}</p>
                </div>

                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handlePackageSelect(pkg)}
                    className={`w-full ${pkg.buttonColor} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    Discuss via WhatsApp
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleWhatsAppDirect(pkg)}
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
                  >
                    <ChevronRight className="w-4 h-4" />
                    WhatsApp Direct
                  </motion.button>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">What's Included</h4>
                  <div className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        <CheckCircle className={`w-5 h-5 ${pkg.textColor}`} />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className={`${pkg.bgColor} p-4 rounded-xl border ${pkg.borderColor}`}>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Next Steps</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    After selecting this package, we'll schedule a discovery call via WhatsApp to discuss your specific requirements and timeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

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
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services & Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transparent pricing in KES for professional websites. Choose the package that fits your business needs.
          </p>
          
          {/* WhatsApp Quick Info */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-full border border-green-200 dark:border-green-800"
          >
            <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm text-green-700 dark:text-green-300">
              Select a package to discuss via WhatsApp
            </span>
          </motion.div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border-2 ${pkg.borderColor} hover:shadow-xl transition-all duration-300 overflow-hidden h-full`}>
                <div className={`h-2 bg-gradient-to-r ${pkg.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Star className={`w-5 h-5 ${pkg.textColor}`} />
                      <span className={`text-lg font-bold ${pkg.textColor}`}>{pkg.name}</span>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-full">
                      {pkg.timeline}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {pkg.title}
                  </h3>
                  
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {pkg.price}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {pkg.description}
                  </p>

                  <div className="mb-6">
                    <div className="space-y-3">
                      {pkg.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${pkg.color} mr-3 mt-1.5 flex-shrink-0`}></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelectedPackage(pkg)}
                      className="mt-4 flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:gap-2 transition-all"
                    >
                      View all {pkg.features.length} features
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => handlePackageSelect(pkg)}
                      className={`w-full ${pkg.buttonColor} text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Discuss via WhatsApp
                    </button>
                    
                    <button
                      onClick={() => handleWhatsAppDirect(pkg)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      WhatsApp Direct
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Additional
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent ml-3">
                Services
              </span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Complete your digital transformation with our comprehensive range of additional services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h4>
                <div className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {service.price}
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border-2 border-blue-200 dark:border-blue-800">
            <div className="flex justify-center mb-6">
              <Trophy className="w-12 h-12 text-yellow-500" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Get a personalized quote or schedule a free consultation via WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Free Quote
              </motion.button>
              
              <span className="text-gray-400 dark:text-gray-500">or</span>
              
              <motion.a
                href="https://wa.me/254792016422?text=Hello%20Manase!%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Direct
              </motion.a>
            </div>
            
            {/* WhatsApp Quick Info */}
            <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <MessageCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
              <span>Typically respond within minutes via WhatsApp</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Package Modal */}
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