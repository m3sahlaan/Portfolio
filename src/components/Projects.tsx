import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence} from 'framer-motion';
import { FaGithub, FaHeart } from 'react-icons/fa';

// Placeholder images
const educonnectImg = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=600&fit=crop&crop=center';
const lifelineImg = 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1283&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const starlightImg = 'https://images.unsplash.com/photo-1502033491742-0e11fb057e16?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const moneyupImg = 'https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const testproImg = 'https://images.unsplash.com/photo-1691934286085-c88039d93dae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const eyezenImg = 'https://images.unsplash.com/photo-1638564688257-ce9072bf9f14?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const wedplanImg = 'https://images.unsplash.com/photo-1507260259154-654940bc8f3a?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const pygameImg = 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const tcktImg = 'https://images.unsplash.com/photo-1703960525294-53f01e3546eb?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const autoproImg = 'https://images.unsplash.com/photo-1727893119356-1702fe921cf9?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const ktechImg = 'https://images.unsplash.com/photo-1706101035106-119828e7b564?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  github: string;
  technologies: string[];
  featured: boolean;
}

const Projects: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  

  const projects: Project[] = [
    {
      id: '1',
      title: 'EduConnect - Advanced Education Management System',
      description: 'A comprehensive MERN stack application for managing online learning.A smart platform that helps students stay organized and teachers manage classes easily. From schedules and homework to payments and support, everything is in one place for a smooth learning experience.',
      image: educonnectImg,
      github: 'https://github.com/m3sahlaan/Education-Management-System',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Gemini.ai', 'JWT'],
      featured: true,
    },
    {
      id: '2',
      title: 'LifeLine - Blood Donation System',
      description: 'The Lifeline system allows hospitals and donors to register, view appointments, and hospitals to respond to blood requests. The platform supports core functionalities like booking, canceling, rescheduling appointments, and maintaining a donor record history.',
      image: lifelineImg,
      github: 'https://github.com/m3sahlaan/Blood-Donation-Management-System.git',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: true,
    },
    {
      id: '3',
      title: 'Cinema Booking System',
      description: 'STAR LIGHT CINEMA (SLC): A PHP-MySQL based movie ticket booking system with secure admin access, user-friendly reservations, and local hosting via XAMPP',
      image: starlightImg,
      github: 'https://github.com/m3sahlaan/Cinema-Ticket-Booking-System.git',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'jQuery', 'Bootstrap', 'PayPal API'],
      featured: true,
    },
    {
      id: '4',
      title: 'MoneyUp - Finance Tracking System',
      description: 'A comprehensive financial management Android application that helps users track expenses, manage budgets, and visualize spending patterns. Features include expense categorization, budget planning, and financial reports.',
      image: moneyupImg,
      github: 'https://github.com/m3sahlaan/Finance-Tracker-System.git',
      technologies: ['Kotlin', 'XML', 'Android SDK', 'Room Database', 'MPAndroidChart'],
      featured: true,
    },
    {
      id: '5',
      title: 'TestPro - Online Examination System',
      description: 'TestPro is a user-friendly and comprehensive platform designed to streamline the entire exam lifecycle for both lecturers and students. Whether it is scheduling, real-time monitoring, grading, or report generation — TestPro makes the process seamless, secure, and efficient.',
      image: testproImg,
      github: 'https://github.com/m3sahlaan/Online-Examination-Management-System.git',
      technologies: ['Java', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      featured: true,
    },
    {
      id: '6',
      title: 'EyeZen - Mobile Project',
      description: ' EyeZen-Mobile, a cutting-edge mobile app designed to enhance your visual experience! Our React native application combines cutting-edge technology with expert knowledge in eye care. EyeZen is your go-to solution for all things related to eye health.',
      image: eyezenImg,
      github: 'https://github.com/m3sahlaan/React-Native-Application.git',
      technologies: ['JavaScript','HTML', 'CSS'],
      featured: true,
    },
    {
      id: '7',
      title: 'Wedding Planning System',
      description: 'A user-friendly platform designed to simplify wedding planning from start to finish. It features secure login and registration for both couples and vendors, allowing users to create personalized dashboards, manage tasks, budgets, guest lists, and vendor bookings. With everything in one place, it ensures a seamless and organized wedding planning experience.',
      image: wedplanImg,
      github: 'https://github.com/m3sahlaan/Wedding-Planning-System.git',
      technologies: ['PHP', 'MySQL', 'XAMPP', 'Bootstrap'],
      featured: true,
    },
    {
      id: '8',
      title: 'Quiz Game',
      description: 'An interactive console-based game built with Python that tests users knowledge through multiple-choice questions. Players receive instant feedback on their answers, and their score is tracked throughout the game. Designed with beginner-friendly logic, it is a fun way to learn and practice Python basics, general knowledge, or any custom topic.',
      image: pygameImg,
      github: 'https://github.com/m3sahlaan/Python-Game-Simple.git',
      technologies: ['Python'],
      featured: false,
    },
    {
      id: '9',
      title: 'Ticketing System',
      description: 'A dynamic ticketing system built primarily with JavaScript, styled using HTML and CSS. It allows users to create, update, and manage tickets in real time through interactive features, making it ideal for event booking or support requests.',
      image: tcktImg,
      github: 'https://github.com/m3sahlaan/Ticketing-System.git',
      technologies: ['JavaScript','HTML', 'CSS'],
      featured: true,
    },
    {
      id: '10',
      title: 'AutoProCare - Car Service System',
      description: 'A web-based application built with JavaScript, styled using HTML and CSS, that allows users to book car services, view service history, and manage appointments. The system provides interactive forms, real-time updates, and a smooth user experience for both customers and service providers.',
      image: autoproImg,
      github: 'https://github.com/m3sahlaan/Car-Service-System.git',
      technologies: ['JavaScript','HTML', 'CSS'],
      featured: true,
    },
    {
      id: '11',
      title: 'K-tech - E-Commerce System',
      description: 'K Tech is a dynamic e-commerce platform for laptops, built using PHP, HTML, CSS, and JavaScript. It features product listings, shopping cart functionality, secure user login/registration, and a responsive design for a seamless shopping experience.',
      image: ktechImg,
      github: 'https://github.com/m3sahlaan/E-Commerce-Website.git',
      technologies: ['PHP', 'Bootstrap','JavaScript','HTML', 'CSS'],
      featured: true,
    },

  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id='projects' className="section-spacing relative bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1 className="heading bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            My projects
          </h1>
          <p className="subheading max-w-3xl mx-auto text-gray-300">
            Check out some of my works.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-primary-light rounded-2xl overflow-hidden animate-pulse shadow-lg">
                  <div className="h-64 bg-primary" />
                  <div className="p-6">
                    <div className="h-6 bg-primary rounded mb-3" />
                    <div className="h-4 bg-primary rounded mb-2" />
                    <div className="h-4 bg-primary rounded w-3/4" />
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="projects"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="group relative"
                >
                  <div className="bg-primary-light rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col border border-white/10">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-90 transition-opacity duration-300" />
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-md">
                            <FaHeart size={12} className="mr-2" />
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl md:text-2xl font-bold text-light group-hover:text-secondary transition-colors duration-300 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-tertiary text-sm md:text-base leading-relaxed mb-4 flex-1">
                        {project.description}
                      </p>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center bg-secondary text-primary px-4 py-2 rounded-lg hover:bg-secondary-dark transition-colors duration-300 mb-4 font-semibold text-sm"
                      >
                        <FaGithub size={16} className="mr-2" />
                        View on GitHub
                      </motion.a>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white/10 text-tertiary px-3 py-1 rounded-full text-xs border border-white/20 hover:bg-white/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && projects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-light mb-2">No projects found</h3>
            <p className="text-tertiary">No projects are currently available.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;