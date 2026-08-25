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
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`ios-navbar pointer-events-auto mx-auto max-w-5xl px-3 sm:px-4 py-2 transition-all duration-500 ${
            scrolled ? 'ios-navbar-scrolled' : ''
          }`}
        >
          <div className="flex items-center justify-between h-12 sm:h-14 w-full">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2.5 cursor-pointer pl-1"
            >
              <div className="w-9 h-9 bg-gradient-to-br from-white/80 to-secondary-dark rounded-full flex items-center justify-center shadow-inner-glow border border-white/40">
                <span className="text-primary font-extrabold text-sm">S</span>
              </div>
              <span className="text-lg sm:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">Sahlaan</span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ y: -1 }}
                  className="relative"
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className={`ios-nav-item cursor-pointer px-4 py-2 rounded-full ${
                      activeSection === item.to
                        ? 'active'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
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
            <div className="flex items-center justify-end min-w-[88px]">
              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleClick}
                className="lg:hidden p-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 transition-all duration-300"
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
                      <FaTimes className="text-white text-lg" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FaBars className="text-white text-lg" />
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
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 lg:hidden"
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
              className="mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[90vw] z-50 lg:hidden"
              style={{
                background: 'linear-gradient(180deg, rgba(232,237,242,0.22) 0%, rgba(18,20,26,0.72) 100%)',
                backdropFilter: 'blur(40px) saturate(180%)',
                WebkitBackdropFilter: 'blur(40px) saturate(180%)',
                borderLeft: '1px solid rgba(255,255,255,0.28)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.4), inset 1px 0 0 rgba(255,255,255,0.25)',
              }}
            >
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/15">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-white/80 to-secondary-dark rounded-full flex items-center justify-center border border-white/40">
                      <span className="text-primary font-extrabold text-base">S</span>
                    </div>
                    <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-secondary">Sahlaan</span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      setNav(false);
                      setIsMobileMenuOpen(false);
                    }}
                    className="p-3 rounded-full bg-white/15 hover:bg-white/25 transition-all duration-300 border border-white/20"
                  >
                    <FaTimes className="text-white text-xl" />
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
                              ? 'bg-white/25 text-white border border-white/30 shadow-glass'
                              : 'text-white/80 hover:text-white hover:bg-white/10'
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
                              className="w-1.5 h-7 bg-gradient-to-b from-white to-secondary rounded-full ml-auto"
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
                <div className="p-6 border-t border-white/15">
                  <div className="text-center">
                    <p className="text-white/80 text-sm mb-4 font-medium">
                      Let's create something extraordinary together!
                    </p>
                    <motion.a
                      href="#contact"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="block w-full text-center py-3 px-6 rounded-2xl bg-gradient-to-r from-white to-secondary text-primary font-semibold hover:from-secondary-light hover:to-white transition-all duration-300 shadow-glass"
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