import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AnimatedBackground = () => {
  const mountRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Create grid of glowing lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4a90e2,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const gridLines = [];
    const gridSize = 10;
    const gridSpacing = 1;

    // Horizontal lines
    for (let i = -gridSize; i <= gridSize; i++) {
      const points = [
        new THREE.Vector3(-gridSize, i * gridSpacing, 0),
        new THREE.Vector3(gridSize, i * gridSpacing, 0),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      gridLines.push(line);
      scene.add(line);
    }

    // Vertical lines
    for (let i = -gridSize; i <= gridSize; i++) {
      const points = [
        new THREE.Vector3(i * gridSpacing, -gridSize, 0),
        new THREE.Vector3(i * gridSpacing, gridSize, 0),
      ];
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, lineMaterial);
      gridLines.push(line);
      scene.add(line);
    }

    // Camera position
    camera.position.z = 10;

    // Animation
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Subtle grid animation
      gridLines.forEach((line, index) => {
        const isHorizontal = index < (gridLines.length / 2);
        const offset = Math.sin(Date.now() * 0.001 + index * 0.1) * 0.2;
        line.position.z = offset;
        line.rotation.z = isHorizontal ? mouseX * 0.05 : mouseY * 0.05;
      });

      renderer.render(scene, camera);
    };

    animate();
    setIsVisible(true);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div 
        ref={mountRef} 
        className="fixed inset-0 z-[-1] pointer-events-none"
        style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.8s ease-in-out' }}
      />
      <div className="fixed inset-0 z-[-2] pointer-events-none">
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-indigo-900/10 to-purple-900/10"
          animate={{
            background: [
              'radial-gradient(circle, rgba(74,144,226,0.1) 0%, rgba(79,70,229,0.1) 50%, rgba(147,51,234,0.1) 100%)',
              'radial-gradient(circle, rgba(147,51,234,0.1) 0%, rgba(74,144,226,0.1) 50%, rgba(79,70,229,0.1) 100%)',
              'radial-gradient(circle, rgba(79,70,229,0.1) 0%, rgba(147,51,234,0.1) 50%, rgba(74,144,226,0.1) 100%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/20" />
      </div>
    </>
  );
};

export default AnimatedBackground;