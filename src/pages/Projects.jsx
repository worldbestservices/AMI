import React from 'react';
import { motion } from 'framer-motion';
import {
  Coins,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  ExternalLink,
  Download
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const LogoImage = ({ src, alt, className = "" }) => (
  <div className={`bg-gradient-to-br from-electric-gold/20 to-cyber-purple/20 rounded-quantum p-4 ${className}`}>
    <div className="w-12 h-12 bg-gradient-to-br from-electric-gold to-plasma-green rounded-full flex items-center justify-center">
      <span className="text-void-black font-bold text-lg">{alt?.charAt(0) || 'A'}</span>
    </div>
  </div>
);

const Projects = () => {
  const advantages = [
    {
      icon: <Shield className="w-8 h-8 text-plasma-green" />,
      title: "Secure & Transparent",
      description: "Built on blockchain technology with full transparency and security audits"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-electric-gold" />,
      title: "High Yield Staking",
      description: "Earn up to 24% APY through our innovative staking mechanisms"
    },
    {
      icon: <Globe className="w-8 h-8 text-cyber-purple" />,
      title: "Global Ecosystem",
      description: "Access worldwide markets and opportunities through our platform"
    },
    {
      icon: <Users className="w-8 h-8 text-hologram-pink" />,
      title: "Community Driven",
      description: "Governed by the community with democratic decision-making processes"
    },
    {
      icon: <Zap className="w-8 h-8 text-plasma-green" />,
      title: "Lightning Fast",
      description: "Ultra-fast transactions with minimal fees on optimized networks"
    },
    {
      icon: <Star className="w-8 h-8 text-electric-gold" />,
      title: "Premium Features",
      description: "Access exclusive features and benefits as an AMMYI token holder"
    }
  ];


  const ecosystemProjects = [
    {
      title: "AMMYI Exchange",
      description: "Decentralized exchange platform for seamless token trading",
      status: "Live",
      features: ["Multi-chain support", "Low fees", "High liquidity"],
      link: "https://amicoin.io/buyami/User/Buy-now.aspx"
    },
    {
      title: "NFTrees Platform",
      description: "Environmental NFT marketplace supporting reforestation",
      status: "Beta",
      features: ["Eco-friendly NFTs", "Carbon credits", "Tree planting"],
      link: "https://nftrees.amicoin.io/"
    },
    {
      title: "Staking Portal",
      description: "Advanced staking platform with multiple reward tiers",
      status: "Live",
      features: ["24% APY", "Flexible terms", "Auto-compound"],
      link: "https://stak.amicoin.io/"
    },
    {
      title: "Mobile Wallet",
      description: "Secure mobile wallet for AMMYI ecosystem",
      status: "Coming Soon",
      features: ["Multi-asset", "DeFi integration", "Biometric security"],
      link: "#"
    }
  ];


  const handleBuyAmi =() =>{
    window.open("https://amicoin.io/buyami/User/Buy-now.aspx","_blank")
  }
  const handleExploreEcosystem = () =>{
    window.open("AMI.pdf","_blank")
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-void-black via-midnight-blue to-void-black">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <motion.section
        className="pt-40 pb-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            className="quantum-badge mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Coins className="w-5 h-5 mr-2" />
            AMMYI Ecosystem
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-orbitron font-bold mb-8 text-gradient-gold"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Our Projects
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-rajdhani"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover the comprehensive ecosystem of innovative projects and platforms
            built around the AMMYI token, designed to revolutionize digital finance.
          </motion.p>
        </div>
      </motion.section>

      {/* Advantages Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-gradient-purple">
              Why Choose AMMYI?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
              Experience the advantages of our cutting-edge blockchain ecosystem
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="holographic-card p-8 group hover:scale-105 transition-all duration-300"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {advantage.icon}
                </div>
                <h3 className="text-2xl font-orbitron font-bold mb-4 text-gradient-gold">
                  {advantage.title}
                </h3>
                <p className="text-gray-300 font-rajdhani text-lg leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Ecosystem Projects */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold mb-6 text-gradient-green">
              Ecosystem Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
              Explore our comprehensive suite of interconnected platforms and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecosystemProjects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-panel border-glow p-8 group hover:scale-105 transition-all duration-300"
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-orbitron font-bold text-gradient-gold">
                    {project.title}
                  </h3>
                  <span className={`quantum-badge rounded-cyber px-2 ${project.status === 'Live' ? 'bg-plasma-green/20 text-plasma-green' :
                      project.status === 'Beta' ? 'bg-electric-gold/20 text-electric-gold' :
                        'bg-cyber-purple/20 text-cyber-purple'
                    }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-300 font-rajdhani text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-plasma-green mr-3" />
                      <span className="text-gray-300 font-rajdhani">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* <button className="cyber-button w-full group rounded-cyber flex justify-center items-center gap-8 py-3 px-8">
                  <span>Learn More</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button> */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button w-full group rounded-cyber flex justify-center items-center gap-8 py-3 px-8"
                >
                  <span>Learn More</span>
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>

              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Audit & Security Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="holographic-card p-12 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Shield className="w-16 h-16 text-plasma-green mx-auto mb-8 animate-pulse-glow" />
            <h2 className="text-4xl font-orbitron font-bold mb-6 text-gradient-green">
              Security & Audits
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani mb-8 leading-relaxed">
              Our smart contracts have been thoroughly audited by leading security firms
              to ensure the highest level of safety for your investments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button rounded-cyber flex justify-center items-center gap-2 py-3 px-8">
                <Download className="w-5 h-5 mr-2" />
                Download Audit Report
              </button>
              <button className="glass-panel border-glow-purple px-8 py-4 rounded-cyber font-rajdhani font-bold text-white hover:bg-cyber-purple/10 transition-all duration-300 group">
                <ExternalLink className="w-5 h-5 mr-2 inline group-hover:translate-x-1 transition-transform" />
                View on GitHub
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass-panel-dark p-12 rounded-quantum border-glow"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6 text-gradient-gold">
              Ready to Join the Future?
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani mb-8 leading-relaxed">
              Start your journey with AMMYI today and become part of the next generation
              of decentralized finance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleBuyAmi} className="cyber-button text-lg px-8 py-4 rounded-cyber flex justify-center items-center gap-2 py-3 px-8">
                <Coins className="w-6 h-6 mr-2" />
                Buy AMMYI Now
              </button>
              <button onClick={handleExploreEcosystem}  className="glass-panel border-glow-purple px-8 py-4 rounded-cyber font-rajdhani font-bold text-white hover:bg-cyber-purple/10 transition-all duration-300 group text-lg">
                <span>Explore Ecosystem</span>
                <ArrowRight className="w-6 h-6 ml-2 inline group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* <Footer /> */}
    </div>
  );
};

export default Projects;