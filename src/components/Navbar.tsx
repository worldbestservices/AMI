import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wallet, ChevronDown, Zap, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'How to Use', path: '/steps' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? 'glass-panel-dark border-glow'
          : 'bg-black/20'
      }`}
    >
      {/* Digital rain effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-20 bg-gradient-to-b from-electric-gold/30 to-transparent animate-matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Cyber scan line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-gold to-transparent animate-scan-line" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group gap-4">
            <div className="relative">
              {/* Pulse rings */}
              <div className="absolute -inset-2 rounded-full border border-electric-gold/30 animate-pulse-glow" />
              <div className="absolute -inset-4 rounded-full border border-cyber-purple/20 animate-pulse-glow animation-delay-500" />
              
              <div className="relative w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-electric-gold to-quantum-cyan rounded-full flex items-center justify-center group-hover:animate-orbital-rotation transition-all duration-300">
                <img 
                  src="/amisymbol copy.png" 
                  alt="AMMYI Symbol" 
                  className="h-6 w-6 md:h-8 md:w-8 object-contain"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric-gold/20 to-transparent animate-holographic-flicker" />
              </div>
            </div>
            <div className="flex flex-col ml-4 md:ml-4">
              <span className="text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-gradient-gold animate-cyber-glow">
                AMMYI
              </span>
              <span className="text-xs md:text-sm font-space-mono text-quantum-cyan/80 tracking-wider mt-0.5">
                QUANTUM FINANCE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 font-rajdhani font-medium text-base xl:text-lg transition-all duration-300 hover:text-electric-gold group whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-electric-gold'
                    : 'text-gray-300'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-electric-gold/10 to-cyber-purple/10 rounded-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Active indicator */}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-electric-gold via-quantum-cyan to-electric-gold animate-energy-flow"
                  />
                )}
                
                {/* Quantum particles */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-electric-gold rounded-full opacity-0 group-hover:opacity-100 animate-quantum-shift transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <a
              href="https://amicoin.io/buyami/User/Buy-now.aspx"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button px-4 lg:px-6 py-2 lg:py-3 rounded-cyber font-rajdhani font-semibold text-xs lg:text-sm tracking-wide hover:scale-105 transition-transform duration-300"
            >
              <span className="relative z-10 flex items-center">
                <Zap className="h-4 w-4 mr-2 animate-neural-pulse" />
                <span className="hidden lg:inline">BUY AMMYI</span>
                <span className="lg:hidden">BUY</span>
              </span>
            </a>
            <a
              href="https://nftrees.amicoin.io"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel border-glow-purple px-4 lg:px-6 py-2 lg:py-3 rounded-cyber font-rajdhani font-semibold text-xs lg:text-sm text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center">
                <Leaf className="h-4 w-4 mr-2 text-green-500" />
                <span className="hidden lg:inline">NFTREES</span>
                <span className="lg:hidden">NFT</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-electric-gold transition-colors duration-300 relative group"
          >
            <div className="absolute inset-0 bg-electric-gold/10 rounded-cyber opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {isOpen ? <X className="h-6 w-6 relative z-10" /> : <Menu className="h-6 w-6 relative z-10" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass-panel-dark border-t border-electric-gold/20 mt-2 rounded-b-cyber overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 font-rajdhani font-medium text-base md:text-lg transition-all duration-300 rounded-cyber hover:bg-electric-gold/10 ${
                        location.pathname === item.path
                          ? 'text-electric-gold bg-electric-gold/5 border-l-2 border-electric-gold'
                          : 'text-gray-300 hover:text-electric-gold'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-6 space-y-4 border-t border-electric-gold/20">
                  <a
                    href="https://amicoin.io/buyami/User/Buy-now.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full cyber-button px-6 py-4 rounded-cyber font-rajdhani font-semibold text-center text-base"
                  >
                    <span className="flex items-center justify-center">
                      <Zap className="h-5 w-5 mr-2" />
                      BUY AMMYI
                    </span>
                  </a>
                  <a
                    href="https://nftrees.amicoin.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full glass-panel border-glow-purple px-6 py-4 rounded-cyber font-rajdhani font-semibold text-cyber-purple text-base"
                  >
                    <span className="flex items-center justify-center">
                      <Leaf className="h-5 w-5 mr-2" />
                      VISIT NFTREES
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;


