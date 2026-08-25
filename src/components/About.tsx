import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaCode, FaHeart, FaRocket, FaUsers, FaLightbulb, FaTrophy, FaStar, FaBriefcase } from 'react-icons/fa';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', name: 'About Me', icon: FaHeart },
    { id: 'education', name: 'Education', icon: FaGraduationCap },
    { id: 'experience', name: 'Experience', icon: FaBriefcase },
    { id: 'values', name: 'Values', icon: FaLightbulb },
  ];

  const education = [
    {
      year: '2025 - 2027',
      degree: 'Reading for a Degree in Information Technology',
      institution: 'SLIIT (Sri Lanka Institute of Information Technology)',
      description: 'Currently pursuing a Degree in Information Technology',
      achievements: ['Pending']
    },
    {
      year: '2023 - 2025',
      degree: 'Higher Diploma',
      institution: 'SLIIT (Sri Lanka Institute of Information Technology)',
      description: 'Completed Higher Diploma in Information Technology',
      achievements: ['Created real world projects']
    },
    {
      year: '2016 - 2018',
      degree: 'Graphic design & Adobe Photoshop',
      institution: 'Institute of E-Care',
      description: 'Completed Diploma in Computer Hardware',
      achievements: ['Designer for local political party'],
    },
  ];

  const experience = [
    {
      period: 'January 2026 – Present',
      role: 'Software Engineer Intern',
      company: 'Powersoft (Pvt) Ltd',
      highlights: [
        'Participate in the full software development lifecycle (SDLC) — requirement analysis, system design, implementation, testing, and deployment — translating client requirements into functional software solutions.',
        'Develop and maintain PHP backend services with MySQL, including database design, query optimization, schema migrations, and CRUD operations for production applications.',
        'Build and enhance cross-platform mobile applications in Flutter, implementing dynamic responsive UI, state management, form validation, and file/media upload handling.',
        'Design and integrate RESTful APIs; implement user authentication, authorization, role-based access control (RBAC), and secure session management.',
        'Implement offline-first functionality with local databases, and integrate Firebase for push notifications and real-time data sync, plus Google Maps, Qibla/compass, QR codes, and payment workflows.',
        'Perform debugging, error handling, performance optimization, and QA testing; refactor existing code and collaborate via Git within an Agile team, contributing to documentation and code reviews.',
      ],
    },
  ];

  const values = [
    
    {
      icon: FaRocket,
      title: 'Creative Solutions',
      description: 'Embracing new tools and innovative approaches to tackle challenging problems.',
      color: 'text-secondary'
    },
    {
      icon: FaCode,
      title: 'Clear Coding',
      description: 'Crafting code that is easy to read, maintain, and extend for seamless collaboration.',
      color: 'text-secondary-light'
    },
    {
      icon: FaTrophy,
      title: 'Quality Driven',
      description: 'Pursuing high standards in every task, from minor details to major projects.',
      color: 'text-yellow-400'
    },
    {
      icon: FaUsers,
      title: 'User-Centric',
      description: 'Focusing on creating intuitive and accessible experiences for all users',
      color: 'text-green-400'
    },
    
    
  ];

  return (
    <section id="about" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div       
          initial={{ opacity: 0, y: 10}}  
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading gradient-text">About Me</h2>
          <p className="subheading max-w-3xl mx-auto">
           I'm a full-stack developer driven by a love for building impactful digital solutions.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white/80 text-primary shadow-glass'
                    : 'glass text-tertiary hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={14} />
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-[400px]"
          >
            {activeTab === 'about' && (
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Left: Image */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative order-2 lg:order-1"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-secondary/30 to-white/20 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative glass rounded-2xl p-6 sm:p-8">
                      <div className="text-center space-y-4 sm:space-y-6">
                        <motion.div
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-4xl sm:text-6xl"
                        >
                          👨🏻‍💻♨️
                        </motion.div>
                        <h3 className="text-xl sm:text-2xl font-bold text-white">Sahlaan Mansoor</h3>
                        <p className="text-tertiary text-sm sm:text-base">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6 order-1 lg:order-2"
                >
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Passionate Developer</h3>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      As a passionate full-stack developer, I bring ideas to life through intuitive and scalable web solutions. I focus on solving practical problems with clean, efficient code and thoughtful design.
                    </p>
                    <p className="text-tertiary leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">
                      What began as a spark of curiosity has grown into a genuine passion for writing elegant code and building thoughtful, user-first experiences. I believe great code should be as readable and maintainable as it is powerful.
                    </p>
                    <p className="text-tertiary leading-relaxed text-sm sm:text-base">
                      Off the keyboard, I’m a curious learner, open-source contributor, and active member of the developer world. I approach every new challenge as a chance to sharpen my skills and push creative boundaries.
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                    <div className="card text-center p-3 sm:p-4 col-span-2 sm:col-span-1">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">10+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Projects</div>
                    </div>
                    <div className="card text-center p-3 sm:p-4 col-span-2 sm:col-span-1">
                      <div className="text-xl sm:text-2xl font-bold text-secondary mb-1">20+</div>
                      <div className="text-xs sm:text-sm text-tertiary">Technologies</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}

            {activeTab === 'education' && (
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="badge badge-primary text-xs">{edu.year}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{edu.degree}</h3>
                        <p className="text-secondary font-medium text-sm sm:text-base">{edu.institution}</p>
                      </div>
                    </div>
                    
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed mb-4">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="text-sm font-medium text-white mb-2">Achievements</h4>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start space-x-2 text-sm text-tertiary">
                            <FaStar className="text-secondary mt-1 flex-shrink-0" size={10} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="space-y-6">
                {experience.map((job, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="badge badge-primary text-xs">{job.period}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1">{job.role}</h3>
                        <p className="text-secondary font-medium text-sm sm:text-base">{job.company}</p>
                      </div>
                    </div>

                    <ul className="space-y-2">
                      {job.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start space-x-2 text-sm sm:text-base text-tertiary leading-relaxed">
                          <FaStar className="text-secondary mt-1.5 flex-shrink-0" size={10} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === 'values' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card p-4 sm:p-6 text-center group hover:border-white/40 transition-all duration-300"
                  >
                    <motion.div
                      className={`text-3xl sm:text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${value.color}`}
                      whileHover={{ rotate: 5 }}
                    >
                      <value.icon />
                    </motion.div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-tertiary text-sm sm:text-base leading-relaxed">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default About;