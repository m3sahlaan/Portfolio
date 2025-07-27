import { motion } from 'framer-motion';
import { useScroll, useSpring } from 'framer-motion';

const ReadingProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ReadingProgress; 