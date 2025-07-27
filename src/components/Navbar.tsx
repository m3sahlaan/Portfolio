import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleClick = () => {
    setNav(!nav);
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: 'Home', to: 'home', icon: FaHome },
    { name: 'About', to: 'about', icon: FaUser },
    { name: 'Skills', to: 'skills', icon: FaCode },
    { name: 'Projects', to: 'projects', icon: FaBriefcase },
    { name: 'Contact', to: 'contact', icon: FaEnvelope },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => item.to);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuItems]);


  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
        setNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gradient-to-r from-gray-900/95 to-blue-900/95 backdrop-blur-xl border-b border-blue-600/30 py-3 shadow-2xl shadow-blue-600/10' 
            : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                <span className="text-white font-extrabold text-base">S</span>
              </div>
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">Sahlaan</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-10">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -3 }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`nav-link px-4 py-2 text-base font-semibold rounded-full transition-all duration-300 ${
                      activeSection === item.to 
                        ? 'text-teal-300 bg-blue-800/20 border border-blue-600/30 shadow-sm shadow-blue-500/20' 
                        : 'text-gray-200 hover:text-teal-300 hover:bg-blue-800/10'
                    }`}
                    onClick={() => setActiveSection(item.to)}
                  >
                    {item.name}
                  </Link>
                  {activeSection === item.to && (
                    <motion.div
                      layoutId="activeTab"
                      
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Right side buttons */}
            <div className="flex items-center space-x-6">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                className="lg:hidden p-3 rounded-full bg-blue-800/30 hover:bg-blue-700/30 border border-blue-600/20 transition-all duration-300 shadow-md shadow-blue-500/20"
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {nav ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaTimes className="text-teal-300 text-xl" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="text-teal-300 text-xl" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 lg:hidden"
              onClick={() => {
                setNav(false);
                setIsMobileMenuOpen(false);
              }}
            />
            
            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-gradient-to-b from-gray-900/95 to-blue-900/95 backdrop-blur-xl border-l border-blue-600/30 z-50 lg:hidden shadow-2xl shadow-blue-600/20"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-blue-600/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/40">
                      <span className="text-white font-extrabold text-base">S</span>
                    </div>
                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">Sahlaan</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setNav(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="p-3 rounded-full bg-blue-800/30 hover:bg-blue-700/30 transition-all duration-300 border border-blue-600/20 shadow-md shadow-blue-500/20"
                  >
                    <FaTimes className="text-teal-300 text-xl" />
                  </motion.button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 p-6">
                  <div className="space-y-3">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={item.to}
                          smooth={true}
                          duration={500}
                          className={`flex items-center space-x-4 px-5 py-3 text-lg font-semibold rounded-2xl transition-all duration-300 ${
                            activeSection === item.to
                              ? 'bg-blue-800/30 text-teal-300 border border-blue-600/40 shadow-md shadow-blue-500/30'
                              : 'text-gray-200 hover:text-teal-300 hover:bg-blue-800/20'
                          }`}
                          onClick={() => {
                            setActiveSection(item.to);
                            setNav(false);
                            setIsMobileMenuOpen(false);
                          }}
                        >
                          <item.icon size={22} />
                          <span>{item.name}</span>
                          {activeSection === item.to && (
                            <motion.div
                              layoutId="mobileActiveTab"
                              className="w-1.5 h-7 bg-gradient-to-b from-blue-500 to-teal-400 rounded-full ml-auto shadow-lg shadow-blue-500/40"
                              initial={false}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-6 border-t border-blue-600/30">
                  <div className="text-center">
                    <p className="text-gray-200 text-sm mb-4 font-medium">
                      Let's create something extraordinary together!
                    </p>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full text-center py-3 px-6 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-400 text-white font-semibold hover:from-blue-500 hover:to-teal-300 transition-all duration-300 shadow-lg shadow-blue-500/40"
                      onClick={() => {
                        setNav(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get In Touch
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;