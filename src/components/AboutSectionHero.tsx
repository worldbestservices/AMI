import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Users, TrendingUp, Award } from 'lucide-react';

const AboutSectionHero: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '50K+', color: 'text-electric-gold' },
    { icon: Globe, label: 'Countries', value: '120+', color: 'text-cyber-purple' },
    { icon: TrendingUp, label: 'Growth Rate', value: '300%', color: 'text-plasma-green' },
    { icon: Award, label: 'Awards', value: '15+', color: 'text-hologram-pink' }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-br from-void-black via-midnight-blue to-void-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-gold/10 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl animate-pulse-glow delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-gold/10 border border-electric-gold/20 mb-6">
            <Zap className="w-4 h-4 text-electric-gold animate-neural-pulse" />
            <span className="text-electric-gold font-space-mono text-sm">ABOUT AMMYI</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-gradient-gold mb-6">
            Revolutionizing Digital
            <br />
            <span className="text-gradient-purple">Commerce</span>
          </h2>
          
          <p className="text-xl text-gray-300 font-rajdhani max-w-3xl mx-auto leading-relaxed">
            AMMYI is pioneering the future of decentralized commerce through innovative blockchain technology, 
            creating a seamless ecosystem where digital assets and real-world value converge.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="holographic-card p-6 text-center group hover:scale-105 transition-transform duration-300"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 animate-neural-pulse`} />
              <div className={`text-3xl font-orbitron font-bold ${stat.color} mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 font-rajdhani text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-panel p-8 md:p-12 border-glow text-center"
        >
          <Shield className="w-12 h-12 text-electric-gold mx-auto mb-6 animate-orbital-rotation" />
          <h3 className="text-2xl md:text-3xl font-orbitron font-bold text-gradient-gold mb-6">
            Our Vision
          </h3>
          <p className="text-lg text-gray-300 font-rajdhani leading-relaxed max-w-4xl mx-auto">
            To create a decentralized ecosystem where innovation meets accessibility, empowering individuals 
            and businesses to participate in the digital economy with confidence, security, and unprecedented 
            opportunities for growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSectionHero;