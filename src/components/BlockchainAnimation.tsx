import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  trail: Array<{ x: number; y: number; opacity: number }>;
  energy: number;
  pulsePhase: number;
}

interface Node {
  x: number;
  y: number;
  size: number;
  color: string;
  connections: number[];
  energy: number;
  pulsePhase: number;
}

interface BlockchainAnimationProps {
  light?: boolean;
}

const BlockchainAnimation: React.FC<BlockchainAnimationProps> = ({ light = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Futuristic color palette
    const colors = {
      gold: '#d4af37',
      cyan: '#06b6d4',
      purple: '#8b5cf6',
      green: '#10b981',
      blue: '#3b82f6',
      pink: '#ec4899',
    };

    const colorArray = Object.values(colors);

    // Enhanced particle system
    const particles: Particle[] = [];
    const nodes: Node[] = [];

    // Create neural network nodes
    for (let i = 0; i < 12; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 8 + 4,
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
        connections: [],
        energy: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    // Create connections between nodes
    nodes.forEach((node, index) => {
      const connectionCount = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < connectionCount; i++) {
        const targetIndex = Math.floor(Math.random() * nodes.length);
        if (targetIndex !== index && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    // Create floating particles
    const particleCount = light ? 30 : 80;
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * (light ? 0.3 : 0.8),
        vy: (Math.random() - 0.5) * (light ? 0.3 : 0.8),
        size: Math.random() * 4 + 1,
        opacity: Math.random() * (light ? 0.3 : 0.8) + (light ? 0.1 : 0.2),
        color: colorArray[Math.floor(Math.random() * colorArray.length)],
        trail: [],
        energy: Math.random(),
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let animationFrame: number;
    let time = 0;

    // Animation loop
    const animate = () => {
      time += 0.016; // ~60fps
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw neural network connections with energy pulses
      nodes.forEach((node, index) => {
        node.connections.forEach((targetIndex) => {
          const target = nodes[targetIndex];
          if (!target) return;

          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Draw connection line
          ctx.save();
          const gradient = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
          const opacity = light ? '20' : '40';
          const midOpacity = light ? '30' : '60';
          gradient.addColorStop(0, node.color + opacity);
          gradient.addColorStop(0.5, colors.cyan + midOpacity);
          gradient.addColorStop(1, target.color + opacity);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = light ? 1 : 2;
          ctx.shadowBlur = light ? 5 : 10;
          ctx.shadowColor = node.color;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();
          ctx.restore();

          // Draw energy pulse along connection
          const pulsePosition = (Math.sin(time * 2 + index) + 1) / 2;
          const pulseX = node.x + dx * pulsePosition;
          const pulseY = node.y + dy * pulsePosition;

          ctx.save();
          ctx.globalAlpha = light ? 0.4 : 0.8;
          ctx.fillStyle = colors.gold;
          ctx.shadowBlur = light ? 8 : 15;
          ctx.shadowColor = colors.gold;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });
      });

      // Draw and update neural network nodes
      nodes.forEach((node, index) => {
        // Update node energy
        node.energy = (Math.sin(time + node.pulsePhase) + 1) / 2;
        node.pulsePhase += 0.02;

        // Slowly drift nodes
        node.x += Math.sin(time * 0.5 + index) * 0.2;
        node.y += Math.cos(time * 0.3 + index) * 0.2;

        // Keep nodes in bounds
        if (node.x < 0) node.x = canvas.width;
        if (node.x > canvas.width) node.x = 0;
        if (node.y < 0) node.y = canvas.height;
        if (node.y > canvas.height) node.y = 0;

        // Draw node with energy glow
        ctx.save();
        const glowIntensity = 0.5 + node.energy * 0.5;
        ctx.globalAlpha = light ? glowIntensity * 0.5 : glowIntensity;
        
        // Outer glow
        ctx.shadowBlur = light ? 10 + node.energy * 5 : 20 + node.energy * 10;
        ctx.shadowColor = node.color;
        ctx.fillStyle = node.color + '80';
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size + node.energy * 3, 0, Math.PI * 2);
        ctx.fill();

        // Inner core
        ctx.shadowBlur = 5;
        ctx.fillStyle = node.color;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size * 0.6, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Update and draw particles with trails
      particles.forEach((particle, index) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Update energy and pulse
        particle.energy = (Math.sin(time * 2 + particle.pulsePhase) + 1) / 2;
        particle.pulsePhase += 0.03;

        // Add to trail
        particle.trail.push({ 
          x: particle.x, 
          y: particle.y, 
          opacity: particle.opacity * particle.energy 
        });
        
        // Limit trail length
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle trail
        particle.trail.forEach((point, trailIndex) => {
          const trailOpacity = (point.opacity * (trailIndex + 1)) / particle.trail.length;
          const trailSize = particle.size * ((trailIndex + 1) / particle.trail.length);
          
          ctx.save();
          ctx.globalAlpha = trailOpacity * 0.6;
          ctx.fillStyle = particle.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = particle.color;
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Draw main particle with energy glow
        ctx.save();
        const glowSize = particle.size + particle.energy * 2;
        const baseOpacity = light ? 0.3 : 0.7;
        ctx.globalAlpha = particle.opacity * (baseOpacity + particle.energy * 0.3);
        
        // Outer glow
        ctx.shadowBlur = light ? 8 + particle.energy * 3 : 15 + particle.energy * 5;
        ctx.shadowColor = particle.color;
        ctx.fillStyle = particle.color + '60';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Inner particle
        ctx.shadowBlur = 3;
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections to nearby particles
        particles.forEach((otherParticle, otherIndex) => {
          if (index !== otherIndex) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 120) {
              const connectionOpacity = (120 - distance) / 120 * (light ? 0.1 : 0.3);
              
              ctx.save();
              ctx.globalAlpha = connectionOpacity * particle.energy * otherParticle.energy;
              ctx.strokeStyle = particle.color;
              ctx.lineWidth = 1;
              ctx.shadowBlur = 5;
              ctx.shadowColor = particle.color;
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
              ctx.restore();
            }
          }
        });
      });

      // Add quantum field effect
      if (Math.random() < (light ? 0.005 : 0.02)) {
        const fieldX = Math.random() * canvas.width;
        const fieldY = Math.random() * canvas.height;
        const fieldColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        
        ctx.save();
        ctx.globalAlpha = light ? 0.03 : 0.1;
        const gradient = ctx.createRadialGradient(fieldX, fieldY, 0, fieldX, fieldY, 100);
        gradient.addColorStop(0, fieldColor + '40');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(fieldX, fieldY, 100, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
  );
};

export default BlockchainAnimation;