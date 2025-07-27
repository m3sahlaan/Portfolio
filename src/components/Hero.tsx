import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaArrowDown, FaDownload, FaEnvelope, FaInstagram } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import cvPdf from '../assets/SahlaanResume.pdf';
import { fadeIn, staggerContainer, scaleIn } from '../types/animations';

const Hero = () => {
  const [mousePosition] = useState({ x: 0, y: 0 });
  const [, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/m3sahlaan',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/mohamed-sahlaan/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaInstagram,
      href: 'https://www.instagram.com/sahlaan_mansoor/profilecard/?igsh=MWE2M3puaHh1cDJtZw%3D%3D',
      label: 'Instagram',
      color: 'hover:text-blue-400',
    },
    {
      icon: FaEnvelope,
      href: 'mailto:m3sahlaan.official@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400',
    },
  ];

  return (
    <motion.section
      id="home"
      className={`w-full min-h-screen relative overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-8 ${
        isMobile ? 'pt-20' : 'pt-0'
      }`} // Add padding-top on mobile to account for navbar
      style={{ opacity, scale, y }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-primary/30" />

      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 relative z-10 w-full"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Left: Text Content */}
        <motion.div className="flex-1 w-full text-center lg:text-left order-2 lg:order-1" variants={fadeIn}>
          <div className="space-y-4 sm:space-y-6">
            {/* Removed extra <br /> tags */}
            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
                <span className="gradient-text">Mohamed Sahlaan</span>
              </h1>
            </motion.div>

            {/* Title */}
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-tertiary">
              I'm a <span className="text-secondary relative">Full Stack Developer</span>
            </h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-tertiary text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Passionate developer skilled in building web applications through academic and personal projects. I enjoy
              solving real-world problems and creating user-friendly digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Explore Projects</span>
                <FaArrowDown className="text-sm" />
              </motion.a>

              <motion.a
                href={cvPdf}
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary inline-flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <span>Download Resume</span>
                <FaDownload className="text-sm" />
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 pt-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1, type: 'spring' }}
                  className={`text-light hover:text-secondary transition-all duration-300 bg-white/5 p-2 sm:p-3 rounded-full hover:bg-white/10 hover:shadow-glow ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={isMobile ? 20 : 24} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Profile Photo */}
        <motion.div
          className="flex-1 w-full flex justify-center items-center order-1 lg:order-2 mt-16 lg:mt-0" // Added mt-16 for mobile
          variants={scaleIn}
        >
          <motion.div
            className="relative group"
            onHoverStart={() => !isMobile && setIsHovered(true)}
            onHoverEnd={() => !isMobile && setIsHovered(false)}
            onTouchStart={() => isMobile && setIsHovered(true)}
            onTouchEnd={() => isMobile && setIsHovered(false)}
            animate={{
              rotateY: mousePosition.x * 0.1,
              rotateX: mousePosition.y * 0.1,
            }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-secondary rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse" />

            {/* Profile Image */}
            <motion.div
              className="relative z-10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={profileImg}
                alt="Sahlaan - Full Stack Developer"
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-secondary shadow-2xl bg-primary relative z-10 transition-all duration-500 group-hover:border-accent group-hover:shadow-glow-lg"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-secondary cursor-pointer bg-white/5 p-2 sm:p-3 rounded-full hover:bg-white/10 hover:shadow-glow transition-all duration-300 border border-white/10"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
          }}
        >
          <FaArrowDown size={isMobile ? 16 : 20} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;