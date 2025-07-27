import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaJs, FaLaptopCode,
  FaDatabase, FaServer, FaTools, FaCode, FaStar
} from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiExpress, SiRedux, SiNextdotjs, SiVite, SiFramer, SiPhp, SiMysql } from 'react-icons/si';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  color: string;
  description: string;
  category: string;
  certifications?: string[];
}

const Skills: React.FC = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const skills: Skill[] = [
    // Frontend
    { 
      name: 'React', 
      icon: <FaReact size={40} />, 
      level: 70, 
      color: '#61DAFB',
      description: 'Building modern, responsive user interfaces with React and its ecosystem',
      category: 'frontend',
      certifications: ['React Developer Certification']
    },
    { 
      name: 'TypeScript', 
      icon: <SiTypescript size={40} />, 
      level: 75, 
      color: '#3178C6',
      description: 'Developing type-safe applications with TypeScript',
      category: 'frontend'
    },
    { 
      name: 'JavaScript', 
      icon: <FaJs size={40} />, 
      level: 90, 
      color: '#F7DF1E',
      description: 'Expert in modern JavaScript (ES6+) and its best practices',
      category: 'frontend'
    },
    { 
      name: 'HTML5', 
      icon: <FaHtml5 size={40} />, 
      level: 95, 
      color: '#E34F26',
      description: 'Writing semantic and accessible HTML markup',
      category: 'frontend'
    },
    { 
      name: 'CSS3', 
      icon: <FaCss3Alt size={40} />, 
      level: 95, 
      color: '#1572B6',
      description: 'Creating responsive and animated user interfaces',
      category: 'frontend'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <SiTailwindcss size={40} />, 
      level: 80, 
      color: '#06B6D4',
      description: 'Building modern UIs with utility-first CSS',
      category: 'frontend'
    },
    { 
      name: 'Next.js', 
      icon: <SiNextdotjs size={40} />, 
      level: 65, 
      color: '#000000',
      description: 'Full-stack React framework for production',
      category: 'frontend'
    },
    { 
      name: 'Framer Motion', 
      icon: <SiFramer size={40} />, 
      level: 25, 
      color: '#0055FF',
      description: 'Creating smooth animations and interactions',
      category: 'frontend'
    },

    // Backend
    { 
      name: 'Node.js', 
      icon: <FaNodeJs size={40} />, 
      level: 80, 
      color: '#339933',
      description: 'Building scalable backend services with Node.js',
      category: 'backend'
    },
    { 
      name: 'Express.js', 
      icon: <SiExpress size={40} />, 
      level: 75, 
      color: '#000000',
      description: 'Creating RESTful APIs and middleware with Express',
      category: 'backend'
    },
    { 
      name: 'PHP', 
      icon: <SiPhp size={40} />, 
      level: 85, 
      color: '#777BB4',
      description: 'Server-side scripting and web development',
      category: 'backend'
    },
    { 
      name: 'Redux', 
      icon: <SiRedux size={40} />, 
      level: 50, 
      color: '#764ABC',
      description: 'State management and predictable data flow',
      category: 'backend'
    },
    { 
      name: 'Vite', 
      icon: <SiVite size={40} />, 
      level: 70, 
      color: '#646CFF',
      description: 'Fast build tool and development server',
      category: 'backend'
    },
    { 
      name: 'REST APIs', 
      icon: <FaServer size={40} />, 
      level: 60, 
      color: '#4A90E2',
      description: 'Designing and implementing RESTful APIs',
      category: 'backend'
    },

    // Database
    { 
      name: 'MongoDB', 
      icon: <SiMongodb size={40} />, 
      level: 78, 
      color: '#47A248',
      description: 'Designing and optimizing NoSQL databases',
      category: 'database'
    },
    { 
      name: 'MySQL', 
      icon: <SiMysql size={40} />, 
      level: 80, 
      color: '#4479A1',
      description: 'Relational database management and optimization',
      category: 'database'
    },
    { 
      name: 'SQLite', 
      icon: <FaDatabase size={40} />, 
      level: 75, 
      color: '#003B57',
      description: 'Lightweight database for mobile and web apps',
      category: 'database'
    },

    // Tools
    { 
      name: 'Git', 
      icon: <FaGitAlt size={40} />, 
      level: 85, 
      color: '#F05032',
      description: 'Version control and collaborative development',
      category: 'tools'
    },
    { 
      name: 'Docker', 
      icon: <FaDocker size={40} />, 
      level: 20, 
      color: '#2496ED',
      description: 'Containerization and deployment',
      category: 'tools'
    },
    { 
      name: 'AWS', 
      icon: <FaAws size={40} />, 
      level: 60, 
      color: '#FF9900',
      description: 'Cloud services and deployment',
      category: 'tools'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Skills', icon: FaCode, count: skills.length },
    { id: 'frontend', name: 'Frontend', icon: FaLaptopCode, count: skills.filter(s => s.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: FaServer, count: skills.filter(s => s.category === 'backend').length },
    { id: 'database', name: 'Database', icon: FaDatabase, count: skills.filter(s => s.category === 'database').length },
    { id: 'tools', name: 'Tools', icon: FaTools, count: skills.filter(s => s.category === 'tools').length },
  ];

  const filteredSkills = skills.filter(skill => 
    selectedCategory === 'all' || skill.category === selectedCategory
  );

  const toggleSkillDescription = (skillName: string) => {
    setSelectedSkill(selectedSkill === skillName ? null : skillName);
  };

  return (
    <section id="skills" className="section-spacing relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="heading gradient-text">Skills</h2>
          <p className="subheading max-w-3xl mx-auto">
            Tools and technologies I've worked with across the development lifecycle.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-secondary text-primary shadow-glow'
                    : 'bg-white/5 text-tertiary hover:text-secondary hover:bg-white/10 border border-white/10'
                }`}
              >
                <category.icon size={14} />
                <span className="hidden sm:inline">{category.name}</span>
                <span className="bg-white/10 px-2 py-0.5 rounded-full text-xs">
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="card card-hover h-full flex flex-col items-center text-center p-4 sm:p-6 cursor-pointer"
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
                onClick={() => toggleSkillDescription(skill.name)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Skill Icon */}
                <motion.div
                  className="mb-4"
                  animate={{
                    scale: hoveredSkill === skill.name ? 1.1 : 1,
                    rotate: hoveredSkill === skill.name ? 5 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </motion.div>

                {/* Skill Name */}
                <h3 className="text-sm sm:text-base font-semibold text-light mb-2 group-hover:text-secondary transition-colors duration-300">
                  {skill.name}
                </h3>

                {/* Skill Description */}
                {selectedSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="text-xs text-tertiary mb-3"
                  >
                    {skill.description}
                  </motion.div>
                )}

                {/* Certifications */}
                {selectedSkill === skill.name && skill.certifications && skill.certifications.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="mt-3"
                  >
                    <div className="space-y-1">
                      {skill.certifications.map((cert, index) => (
                        <div key={index} className="flex items-center space-x-1 text-xs text-tertiary">
                          <FaStar className="text-yellow-400" size={10} />
                          <span>{cert}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
            <div className="card text-center p-6">
              <div className="text-3xl font-bold text-secondary mb-2">
                {skills.length}+
              </div>
              <div className="text-tertiary text-sm">Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;