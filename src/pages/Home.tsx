import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Play,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Users,
  Coins,
  BarChart3,
  Wallet,
  Star,
  CheckCircle,
  Cpu,
  Leaf,
  ShoppingCart,
  BookOpen,
  Target,
  Layers,
  Activity,
  Database,
  Lock,
  Sparkles,
  Rocket,
  Brain,
  Network,
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stats, setStats] = useState({
    holders: 0,
    volume: 0,
    staked: 0,
    apy: 0,
  });

  // Animate stats on load
  useEffect(() => {
    const animateStats = () => {
      const targets = { holders: 150000, volume: 2500000, staked: 65, apy: 24 };
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setStats({
          holders: Math.floor(targets.holders * progress),
          volume: Math.floor(targets.volume * progress),
          staked: Math.floor(targets.staked * progress),
          apy: Math.floor(targets.apy * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, stepTime);
    };

    const timeout = setTimeout(animateStats, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const features = [
    {
      icon: Shield,
      title: 'Quantum Security',
      description: 'Military-grade encryption with quantum-resistant protocols',
      color: 'text-electric-gold',
    },
    {
      icon: Zap,
      title: 'Neural Speed',
      description: 'Lightning-fast transactions with 0.1s block time',
      color: 'text-quantum-cyan',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Borderless payments across 85+ countries',
      color: 'text-cyber-purple',
    },
    {
      icon: TrendingUp,
      title: 'Quantum Staking',
      description: 'Earn up to 24% APY through AI-optimized pools',
      color: 'text-plasma-green',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Quantum Trader',
      content: 'AMMYI has revolutionized my crypto portfolio with consistent returns and cutting-edge technology.',
      rating: 5,
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sin68zzmEk5xy9rEuGWDfhyvT-07dKO5jw&s',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Blockchain Architect',
      content: 'The neural network architecture is impressive. Truly next-generation DeFi infrastructure.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
    },
    {
      name: 'Emily Johnson',
      role: 'DeFi Strategist',
      content: 'Best staking rewards in the quantum finance space. The ecosystem is growing exponentially.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
    },
  ];

  const ecosystemPages = [
    {
      icon: Target,
      title: 'About AMMYI',
      description: 'AMMYI is pioneering the future of decentralized commerce through innovative blockchain technology, creating a seamless ecosystem where digital assets and real-world value converge. Our mission is to democratize digital commerce by eliminating traditional payment barriers, reducing transaction costs by up to 90%, and enabling global commerce accessibility while supporting environmental sustainability.',
      path: '/about',
      color: 'electric-gold',
      features: ['Quantum Mission', 'Global Vision', 'Eco-Friendly'],
    },
    {
      icon: Layers,
      title: 'Advanced Features',
      description: 'Experience next-generation DeFi features including Quantum Staking with up to 24% APY, multi-currency exchange supporting 50+ fiat currencies and 100+ cryptocurrencies, NFTrees ecosystem connecting virtual to real world environmental impact, and AMMYI Web Platform for creating webstores in minutes. All powered by military-grade security and lightning-fast transactions.',
      path: '/features',
      color: 'cyber-purple',
      features: ['Neural Staking', 'Quantum Security', 'AI Trading'],
    },
    {
      icon: Rocket,
      title: 'Ecosystem Projects',
      description: 'Explore our comprehensive ecosystem including AMMYI Exchange for seamless token trading, NFTrees Platform supporting environmental reforestation through NFTs, advanced Staking Portal with multiple reward tiers, and upcoming Mobile Wallet with biometric security. Each project is designed to work synergistically within the AMMYI ecosystem.',
      path: '/projects',
      color: 'quantum-cyan',
      features: ['AMMYIChain', 'EcoStake', 'AMMYIPay'],
    },
    {
      icon: Database,
      title: 'Tokenomics',
      description: 'Discover our transparent and sustainable token economics with 1 billion total supply, strategic distribution across public sale (40%), team & advisors (20%), development (15%), marketing (10%), liquidity pool (10%), and reserve fund (5%). Features include deflationary mechanisms, staking rewards up to 24% APY, and integration with environmental NFTrees for carbon-neutral transactions.',
      path: '/tokenomics',
      color: 'plasma-green',
      features: ['1B Total Supply', '24% Max APY', 'Deflationary'],
    },
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Start your AMMYI journey with our comprehensive 3-step guide: Setup your crypto wallet (MetaMask, Trust Wallet, or WalletConnect), purchase AMMYI tokens through our platform or exchanges like PancakeSwap and Uniswap, then begin staking with flexible (18% APY) or fixed (24% APY) options. Includes video tutorials and 24/7 support.',
      path: '/steps',
      color: 'hologram-pink',
      features: ['Easy Setup', 'Video Guides', '24/7 Support'],
    },
    {
      icon: Leaf,
      title: 'NFTrees Platform',
      description: 'Revolutionary NFT marketplace combining environmental impact with blockchain technology. Features 5-tier pre-minted NFTs across 150+ categories including art, gaming, collectibles, and environmental assets. Multi-chain support for minting, buying, and selling NFTs on Binance Smart Chain, Ethereum, Polygon, and Ramesta Blockchain. Each NFTree purchase contributes to real-world tree planting initiatives.',
      path: 'https://nftrees.amicoin.io',
      color: 'plasma-green',
      features: ['5-Tier NFTs', '150+ Categories', 'Multi-Chain'],
      external: true,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative z-10 pt-32 md:pt-40 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto preserve-3d">
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Quantum Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="quantum-badge inline-flex items-center px-6 py-3 rounded-full mb-8 font-space-mono text-sm tracking-wider"
              >
                <Sparkles className="h-4 w-4 mr-2 text-electric-gold animate-neural-pulse" />
                <span className="text-electric-gold">QUANTUM FINANCE PROTOCOL</span>
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                The Future of{' '}
                <span className="text-gradient-gold">
                  Quantum Finance
                </span>
              </motion.h1>
              
              <motion.p
                className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-rajdhani break-words leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 holographic-card rounded-quantum flex items-center justify-center"
              >
                <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-quantum-cyan animate-neural-pulse" />
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <a
                  href="https://stak.amicoin.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button px-6 md:px-8 py-3 md:py-4 rounded-cyber font-rajdhani font-bold text-base md:text-lg hover:scale-105 transition-transform duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Rocket className="mr-2 h-5 w-5 animate-neural-pulse" />
                    LAUNCH QUANTUM STAKING
                  </span>
                </a>
                
                <Link
                  to="https://youtu.be/vNXglsMoGvM?si=vTWHE6B_zsfqzL1P
https://stak.amicoin.io/" target='_blank'
                  className="glass-panel border-glow-purple px-6 md:px-8 py-3 md:py-4 rounded-cyber font-rajdhani font-bold text-base md:text-lg text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <Play className="mr-2 h-5 w-5" />
                className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 holographic-card rounded-full flex items-center justify-center"
                  </span>
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-cyber-purple animate-neural-pulse" />
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { label: 'Quantum Holders', value: stats.holders, suffix: '+', color: 'electric-gold' },
                  { label: '24h Volume', value: stats.volume, prefix: '$', suffix: 'K', color: 'quantum-cyan' },
                  { label: 'Neural Staked', value: stats.staked, suffix: '%', color: 'cyber-purple' },
                  { label: 'Max APY', value: stats.apy, suffix: '%', color: 'plasma-green' },
                ].map((stat, index) => (
                  <div key={index} className="data-terminal p-3 md:p-4 rounded-cyber text-center hover:animate-float-gentle transition-all duration-300 overflow-hidden">
                    <div className={`text-xl md:text-2xl lg:text-3xl font-orbitron font-bold text-${stat.color} mb-2 animate-cyber-glow break-words`}>
                      {stat.prefix}{stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 font-space-mono tracking-wide break-words">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Content - Enhanced 3D Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative perspective-1000"
            >
              <div className="relative w-full max-w-lg mx-auto preserve-3d">
                {/* Orbital Rings */}
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-electric-gold/30 rounded-full animate-pulse-glow"
                  style={{ transform: 'rotateX(60deg)' }}
                />
                <motion.div
                  animate={{ rotateY: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-cyber-purple/40 rounded-full"
                  style={{ transform: 'rotateX(30deg)' }}
                />

                {/* Floating Quantum Elements */}
                <motion.div
                  animate={{ 
                    y: [-20, 20, -20],
                    rotateZ: [0, 180, 360]
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute top-10 right-10 w-20 h-20 holographic-card rounded-quantum flex items-center justify-center"
                >
                  <Coins className="h-10 w-10 text-electric-gold animate-neural-pulse" />
                </motion.div>
                
                <motion.div
                  animate={{ 
                    y: [20, -20, 20],
                    rotateZ: [360, 180, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute bottom-10 left-10 w-16 h-16 holographic-card rounded-quantum flex items-center justify-center"
                >
                  <BarChart3 className="h-8 w-8 text-quantum-cyan animate-neural-pulse" />
                </motion.div>

                <motion.div
                  animate={{ 
                    x: [-15, 15, -15],
                    rotateY: [0, 360, 0]
                  }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute top-1/2 -right-8 w-12 h-12 holographic-card rounded-full flex items-center justify-center"
                >
                  <Brain className="h-6 w-6 text-cyber-purple animate-neural-pulse" />
                </motion.div>

                {/* Central Quantum Core */}
                <div className="relative z-10 w-80 h-80 mx-auto holographic-card rounded-full flex items-center justify-center">
                  <motion.div 
                    className="w-60 h-60 bg-gradient-to-br from-electric-gold via-quantum-cyan to-cyber-purple rounded-full flex items-center justify-center relative overflow-hidden"
                    animate={{ rotateZ: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    <Wallet className="h-32 w-32 text-void-black relative z-10" />
                    
                    {/* Inner energy rings */}
                    <div className="absolute inset-4 border-2 border-white/30 rounded-full animate-pulse-glow" />
                    <div className="absolute inset-8 border border-white/20 rounded-full animate-pulse-glow animation-delay-500" />
                    
                    {/* Quantum particles */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-white rounded-full"
                        animate={{
                          x: [0, Math.cos(i * Math.PI / 4) * 80],
                          y: [0, Math.sin(i * Math.PI / 4) * 80],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        style={{
                          left: '50%',
                          top: '50%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 break-words">
              Why Choose <span className="text-gradient-gold">Quantum AMMYI?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani break-words leading-relaxed">
              Experience the perfect fusion of cutting-edge blockchain technology, environmental sustainability, and user-centric design. AMMYI combines military-grade security, lightning-fast transactions, global accessibility, and high-yield staking to create the ultimate DeFi ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="holographic-card p-6 md:p-8 rounded-quantum hover:scale-105 hover:animate-ticket-hover transition-all duration-300 group overflow-hidden"
              >
                <div className={`${feature.color} p-3 rounded-cyber w-fit mb-6 group-hover:animate-quantum-shift transition-all duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg md:text-xl font-orbitron font-bold text-white mb-4 break-words">{feature.title}</h3>
                <p className="text-sm md:text-base text-gray-300 font-rajdhani break-words leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore AMMYI Ecosystem Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 break-words">
              Explore the <span className="text-gradient-cyber">AMMYI Ecosystem</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani break-words leading-relaxed">
              Discover our comprehensive suite of interconnected platforms, tools, and services designed to revolutionize how you interact with digital finance. Each component works seamlessly together to provide a complete blockchain ecosystem experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 w-full md:w-[800px] lg:w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ecosystemPages.map((page, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                {page.external ? (
                  <a href={page.path} target="_blank" rel="noopener noreferrer">
                    <div className="holographic-card p-6 md:p-8 rounded-quantum hover:scale-105 hover:animate-ticket-hover transition-all duration-300 h-full overflow-hidden">
                      <div className={`text-${page.color} p-4 rounded-cyber w-fit mb-6 group-hover:animate-orbital-rotation transition-all duration-300`}>
                        <page.icon className="h-10 w-10" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-gradient-gold transition-all duration-300 break-words">
                        {page.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-gray-300 font-rajdhani mb-6 leading-relaxed break-words">
                        {page.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {page.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="quantum-badge px-3 py-1 rounded-full text-xs font-space-mono tracking-wide break-words"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-electric-gold font-rajdhani font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm md:text-base">
                          <span>{page.external ? 'Visit Platform' : 'Explore Now'}</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-energy-flow" />
                        </div>
                        <div className="text-xs text-gray-500 font-space-mono">
                          {page.external ? 'External →' : 'Learn More →'}
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link to={page.path}>
                    <div className="holographic-card p-6 md:p-8 rounded-quantum hover:scale-105 hover:animate-ticket-hover transition-all duration-300 h-full overflow-hidden">
                      <div className={`text-${page.color} p-4 rounded-cyber w-fit mb-6 group-hover:animate-orbital-rotation transition-all duration-300`}>
                        <page.icon className="h-10 w-10" />
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-orbitron font-bold text-white mb-4 group-hover:text-gradient-gold transition-all duration-300 break-words">
                        {page.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-gray-300 font-rajdhani mb-6 leading-relaxed break-words">
                        {page.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {page.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="quantum-badge px-3 py-1 rounded-full text-xs font-space-mono tracking-wide break-words"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-electric-gold font-rajdhani font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm md:text-base">
                          <span>{page.external ? 'Visit Platform' : 'Explore Now'}</span>
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-energy-flow" />
                        </div>
                        <div className="text-xs text-gray-500 font-space-mono">
                          {page.external ? 'External →' : 'Learn More →'}
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
              <div className="relative z-10 w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto holographic-card rounded-full flex items-center justify-center">
      </section>
                  className="w-3/4 aspect-square bg-gradient-to-br from-electric-gold via-quantum-cyan to-cyber-purple rounded-full flex items-center justify-center relative overflow-hidden"
      {/* Enhanced Testimonials */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
                  <Wallet className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-32 lg:w-32 text-void-black relative z-10" />
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6">
              What Our <span className="text-gradient-purple">Quantum Community</span> Says
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani break-words leading-relaxed">
              Join thousands of satisfied users who have already experienced the benefits of AMMYI's innovative DeFi ecosystem
            </p>
                        x: [0, Math.cos(i * Math.PI / 4) * 40],
                        y: [0, Math.sin(i * Math.PI / 4) * 40],
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="holographic-card p-6 md:p-8 rounded-quantum hover:animate-ticket-hover transition-all duration-300 overflow-hidden"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-electric-gold fill-current animate-neural-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 italic font-rajdhani text-sm md:text-lg leading-relaxed break-words">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-electric-gold mr-4"
                  />
                  <div>
                    <div className="font-orbitron font-bold text-white text-sm md:text-base break-words">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-electric-gold font-space-mono break-words">{testimonial.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="holographic-card p-8 md:p-12 rounded-quantum text-center relative overflow-hidden hover:animate-glow-pulse transition-all duration-300"
          >
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-electric-gold rounded-full"
                  animate={{
                    x: [0, Math.random() * 400],
                    y: [0, Math.random() * 300],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-orbitron font-bold mb-6 relative z-10 break-words">
              Ready to Enter the <span className="text-gradient-gold">Quantum Realm?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-rajdhani relative z-10 break-words leading-relaxed">
              Join over 150,000 users worldwide who are already benefiting from AMMYI's revolutionary DeFi ecosystem. Start earning up to 24% APY, participate in environmental sustainability through NFTrees, and be part of the quantum-powered future of finance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href="https://amicoin.io/buyami/User/Buy-now.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button px-6 md:px-8 py-3 md:py-4 rounded-cyber font-rajdhani font-bold text-base md:text-lg hover:scale-105 transition-transform duration-300"
              >
                <span className="flex items-center justify-center">
                  <Network className="mr-2 h-5 w-5 animate-neural-pulse" />
                  BUY AMMYI
                </span>
              </a>
              
              <Link
                to="/tokenomics"
                className="glass-panel border-glow-purple px-6 md:px-8 py-3 md:py-4 rounded-cyber font-rajdhani font-bold text-base md:text-lg text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  <Activity className="mr-2 h-5 w-5" />
                  QUANTUM ECONOMICS
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;