import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  MessageCircle,
  Wallet,
  ArrowRight,
} from 'lucide-react';
import { addEmail } from '../api/emailApi';
import { toast } from 'react-toastify';
import axios, { AxiosError } from 'axios';




const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/Amicoin-100431995463885',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/Amicoin2',
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      url: 'https://t.me/Amicoin_official_group',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/amicoin_crypto/',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/ami-coin-6521b6209',
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://www.youtube.com/channel/UCia7ih-PS6GMVdi3EuZL2Ig',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:support@amicoin.io',
    },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Features', path: '/features' },
    { name: 'Projects', path: '/projects' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'How to Use', path: '/steps' },
  ];

  const resources = [
    { name: 'Whitepaper', url: 'AMI.pdf' },
    { name: 'Audit Report', url: 'https://www.amicoin.io/buyami/Doc/AMMYI_Audit.pdf' },
    { name: 'Terms of Service', url: '#' },
    { name: 'Privacy Policy', url: '#' },
  ];

  const [email, setEmail] = useState<string>('');


 
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const result = await addEmail(email); // This should be an axios call
    toast.success(result.message || '✅ Email saved successfully!');
    setEmail('');
  } catch (error: unknown) {
    // Check if it's an Axios error
    if (axios.isAxiosError(error)) {
      const errMsg =
        error.response?.data?.message || 'Something went wrong. Please try again.';
      toast.error(`⚠️ ${errMsg}`);
    } else {
      toast.error('❌ Unexpected error occurred');
    }
  }
};


  return (
    <footer className="relative bg-black border-t border-[#d4af37]/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="border-b border-[#d4af37]/20 py-12">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay Updated with <span className="text-[#d4af37]">AMMYI</span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get the latest news, updates, and exclusive insights delivered to your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-[#1a2e2a]/80 border border-[#d4af37]/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-[#f3d779] transition-colors"
              />
              <button onClick={handleSubmit} className="px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#f3d779] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-1">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#d4af37] to-[#f3d779] rounded-full flex items-center justify-center">
                    <img
                      src="/amisymbol copy.png"
                      alt="AMMYI Symbol"
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-[#d4af37] to-[#f3d779] bg-clip-text text-transparent">
                    AMMYI
                  </span>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  The future of decentralized finance. Built for speed, security, and sustainability.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.slice(0, 4).map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-[#1a2e2a]/80 border border-[#d4af37]/30 rounded-full flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Resources</h4>
                <ul className="space-y-3">
                  {resources.map((resource) => (
                    <li key={resource.name}>
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[#f3d779] transition-colors duration-300"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Connect With Us</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#d4af37]" />
                    <a
                      href="mailto:support@amicoin.io"
                      className="text-gray-300 hover:text-[#f3d779] transition-colors"
                    >
                      support@amicoin.io
                    </a>
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-gray-400 mb-3">Follow us on:</p>
                    <div className="flex space-x-3">
                      {socialLinks.slice(4).map((social) => (
                        <a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-8 h-8 bg-[#1a2e2a]/80 border border-[#d4af37]/30 rounded-full flex items-center justify-center text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-300"
                        >
                          <social.icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d4af37]/20 py-8">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2021-2025{' '}
                <span className="text-[#d4af37]">AMMYI Coin</span>. All rights reserved.
                Design by{' '}
                <span className="text-[#f3d779]">AMMYI Developers</span>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <a
                  href="AMI.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#f3d779] transition-colors"
                >
                  Whitepaper
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f3d779] transition-colors">
                  Terms
                </a>
                <a href="#" className="text-gray-400 hover:text-[#f3d779] transition-colors">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;