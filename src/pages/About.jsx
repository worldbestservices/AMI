import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Target,
  Heart,
  Users,
  Star,
  Award,
  Shield,
  Zap,
  TrendingUp,
  Coins,
  Leaf,
  Building,
} from "lucide-react";
import AboutHero from "../components/AboutHero";
import AboutSectionHero from "../components/AboutSectionHero";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-void-black via-midnight-blue to-void-black w-full">
      <AboutHero />
      <AboutSectionHero />

      {/* Global Marketplace Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="quantum-badge mb-6 inline-flex items-center justify-center p-2">
              <Globe className="w-5 h-5 mr-2 text-electric-gold animate-orbital-rotation" />
              Global Marketplace
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient-gold mb-6">
              Revolutionizing Digital Commerce
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed">
              AMMYI creates a unified ecosystem where traditional e-commerce meets cutting-edge blockchain technology,
              enabling seamless transactions across multiple platforms and currencies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card Items here */}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            {/* Mission and Vision Cards here */}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 px-4 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="quantum-badge mb-6 inline-flex items-center justify-center p-2">
              <Heart className="w-5 h-5 mr-2 text-hologram-pink animate-pulse-glow" />
              Core Values
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient-pink mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-300 font-rajdhani max-w-4xl mx-auto leading-relaxed">
              Our values shape every decision we make and every solution we build for the global community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Values Cards here */}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 relative">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="quantum-badge mb-6 inline-flex items-center justify-center p-2">
              <Star className="w-5 h-5 mr-2 text-electric-gold animate-orbital-rotation" />
              Our Story
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-gradient-gold mb-6">
              The Journey to Innovation
            </h2>
          </motion.div>

          <div className="space-y-12">
            {/* Timeline items - use flex-col sm:flex-row for responsiveness */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-4">
            Ready to be part of the revolution?
          </h3>
          <p className="text-lg text-gray-300 mb-6 font-rajdhani">
            Join AMMYI and be a part of the most transformative movement in the decentralized economy.
          </p>
          <a
            href="https://www.amicoin.io/Doc/AMI.pdf" target="_blank"
            className="inline-block px-6 py-3 rounded-lg bg-electric-gold/10 text-electric-gold font-semibold hover:bg-electric-gold/20 transition-all border border-electric-gold/30"
          >
            Read Our Whitepaper
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
