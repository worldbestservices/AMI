import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wallet,
  DollarSign,
  TrendingUp,
  Shield,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Play,
  ExternalLink
} from 'lucide-react';

const Steps = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Setup Wallet",
      description: "Connect your crypto wallet to get started",
      icon: Wallet,
      color: "electric-gold"
    },
    {
      id: 2,
      title: "Buy AMMYI",
      description: "Purchase AMMYI tokens from our platform",
      icon: DollarSign,
      color: "cyber-purple"
    },
    {
      id: 3,
      title: "Start Staking",
      description: "Stake your tokens and earn rewards",
      icon: TrendingUp,
      color: "plasma-green"
    }
  ];

  const walletOptions = [
    {
      name: "MetaMask",
      description: "Most popular Ethereum wallet",
      icon: "🦊",
      supported: true
    },
    {
      name: "Trust Wallet",
      description: "Mobile-first crypto wallet",
      icon: "🛡️",
      supported: true
    },
    {
      name: "WalletConnect",
      description: "Connect any wallet",
      icon: "🔗",
      supported: true
    },
    {
      name: "Coinbase Wallet",
      description: "Easy-to-use wallet",
      icon: "💙",
      supported: true
    }
  ];

  const handleBuyNow = () => {
    window.open("https://amicoin.io/User/Buy-now.aspx", "_blank");
  };
  const startStackinghandler = () =>{
    window.open("https://stak.amicoin.io/","_blank");
  };
  const handleWatchTutorial =() =>{
    window.open("https://www.youtube.com/watch?v=vNXglsMoGvM&t=4s","_blank");
  }

  const handleDownloadGuide = () =>{
    window.open("https://www.amicoin.io/Doc/AMI.pdf","_blank");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-void-black via-midnight-blue to-void-black text-white">
      {/* Floating Navigation */}
      <motion.div
        className="fixed top-20 sm:top-24 left-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 right-0 z-50 glass-panel-dark px-2 sm:px-4 py-2 sm:py-3 rounded-none sm:rounded-full border border-electric-gold/20 mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-6 overflow-x-auto flex-nowrap scrollbar-hide px-2 sm:px-0">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`flex items-center space-x-1 sm:space-x-2 px-2 py-1 sm:px-4 sm:py-2 rounded-full transition-all duration-300 whitespace-nowrap ${activeStep === step.id
                  ? 'bg-electric-gold/20 text-electric-gold border border-electric-gold/30'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
            >
              <step.icon className="w-4 h-4 shrink-0" />
              <span className="font-rajdhani font-medium text-xs sm:text-sm md:text-base">{step.title}</span>
            </button>
          ))}
        </div>
      </motion.div>



      {/* Header Section */}
      <motion.div
        className="pt-40 pb-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="quantum-badge mb-6">
          <Zap className="w-4 h-4 animate-neural-pulse" />
          <span>Getting Started Guide</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
          <span className="text-gradient-gold">Start Your</span>
          <br />
          <span className="text-gradient-purple">AMMYI Journey</span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-rajdhani">
          Follow these simple steps to join the quantum finance revolution and start earning rewards
        </p>

        {/* Progress Bar */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-between mb-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${activeStep >= step.id
                    ? 'bg-electric-gold text-void-black'
                    : 'bg-gray-700 text-gray-400'
                  }`}
              >
                {activeStep > step.id ? <CheckCircle className="w-4 h-4" /> : step.id}
              </div>
            ))}
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-electric-gold to-cyber-purple transition-all duration-500 animate-energy-flow"
              style={{ width: `${(activeStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 pb-20">
        {/* Step 1: Wallet Setup */}
        {activeStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="holographic-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-electric-gold/20 rounded-quantum flex items-center justify-center mr-4">
                  <Wallet className="w-6 h-6 text-electric-gold" />
                </div>
                <div>
                  <h2 className="text-3xl font-orbitron font-bold text-gradient-gold">Setup Your Wallet</h2>
                  <p className="text-gray-400 font-rajdhani">Choose and connect your preferred crypto wallet</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {walletOptions.map((wallet, index) => (
                  <motion.div
                    key={wallet.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-panel p-6 rounded-cyber border-glow-gold hover:scale-105 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-4">{wallet.icon}</span>
                      <div>
                        <h3 className="text-xl font-orbitron font-bold text-white group-hover:text-electric-gold transition-colors">
                          {wallet.name}
                        </h3>
                        <p className="text-gray-400 font-rajdhani">{wallet.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`px-3 py-1 rounded-full text-sm font-rajdhani ${wallet.supported
                          ? 'bg-plasma-green/20 text-plasma-green'
                          : 'bg-red-500/20 text-red-400'
                        }`}>
                        {wallet.supported ? 'Supported' : 'Coming Soon'}
                      </span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-electric-gold transition-colors" />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <button
                  onClick={() => setActiveStep(2)}
                  className="cyber-button rounded-cyber py-3 px-8"
                >
                  <div className='flex justify-center items-center gap-2'>
                    <span>Continue to Purchase</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Buy AMMYI */}
        {activeStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="holographic-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-cyber-purple/20 rounded-quantum flex items-center justify-center mr-4">
                  <DollarSign className="w-6 h-6 text-cyber-purple" />
                </div>
                <div>
                  <h2 className="text-3xl font-orbitron font-bold text-gradient-purple">Buy AMMYI Tokens</h2>
                  <p className="text-gray-400 font-rajdhani">Purchase AMMYI tokens to start your investment journey</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="glass-panel p-6 rounded-cyber border-glow-purple">
                  <h3 className="text-xl font-orbitron font-bold text-cyber-purple mb-4">Direct Purchase</h3>
                  <div className="space-y-4">
                    <div className="data-terminal p-4 rounded-cyber">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 font-rajdhani">Current Price</span>
                        <span className="text-electric-gold font-space-mono">$0.0045</span>
                      </div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-400 font-rajdhani">Min Purchase</span>
                        <span className="text-white font-space-mono">100 AMMYI</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 font-rajdhani">Payment Methods</span>
                        <span className="text-plasma-green font-space-mono">ETH, USDT, BNB</span>
                      </div>
                    </div>
                    <button onClick={handleBuyNow} className="w-full cyber-button rounded-cyber py-3 px-8 flex justify-center items-center gap-10">
                      <span>Buy Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="glass-panel p-6 rounded-cyber border-glow-gold">
                  <h3 className="text-xl font-orbitron font-bold text-electric-gold mb-4">Exchange Listing</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-cyber">
                      <span className="font-rajdhani">PancakeSwap</span>
                      <span className="text-plasma-green text-sm">✓ Live</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-cyber">
                      <span className="font-rajdhani">Uniswap</span>
                      <span className="text-plasma-green text-sm">✓ Live</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/5 rounded-cyber">
                      <span className="font-rajdhani">1inch</span>
                      <span className="text-yellow-400 text-sm">⏳ Soon</span>
                    </div>
                    <button className="w-full glass-panel border-glow-gold px-6 py-3 rounded-cyber hover:scale-105 transition-all duration-300">
                      <span className="font-rajdhani">View All Exchanges</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setActiveStep(3)}
                  className="cyber-button rounded-cyber py-3 px-8"
                >
                  <div className='flex justify-center items-center gap-2'>
                    <span>Continue to Staking</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 3: Start Staking */}
        {activeStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="holographic-card p-8 mb-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-plasma-green/20 rounded-quantum flex items-center justify-center mr-4">
                  <TrendingUp className="w-6 h-6 text-plasma-green" />
                </div>
                <div>
                  <h2 className="text-3xl font-orbitron font-bold text-gradient-green">Start Staking</h2>
                  <p className="text-gray-400 font-rajdhani">Stake your AMMYI tokens and earn passive rewards</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="data-terminal p-6 rounded-cyber text-center">
                  <TrendingUp className="w-8 h-8 text-plasma-green mx-auto mb-4 animate-neural-pulse" />
                  <div className="text-3xl font-orbitron font-bold text-plasma-green mb-2">24%</div>
                  <div className="text-gray-400 font-rajdhani">Annual APY</div>
                </div>

                <div className="data-terminal p-6 rounded-cyber text-center">
                  <Shield className="w-8 h-8 text-electric-gold mx-auto mb-4 animate-orbital-rotation" />
                  <div className="text-3xl font-orbitron font-bold text-electric-gold mb-2">100%</div>
                  <div className="text-gray-400 font-rajdhani">Secure</div>
                </div>

                <div className="data-terminal p-6 rounded-cyber text-center">
                  <Users className="w-8 h-8 text-cyber-purple mx-auto mb-4 animate-quantum-shift" />
                  <div className="text-3xl font-orbitron font-bold text-cyber-purple mb-2">5K+</div>
                  <div className="text-gray-400 font-rajdhani">Stakers</div>
                </div>
              </div>

              <div className="glass-panel p-6 rounded-cyber border-glow-green mb-8">
                <h3 className="text-xl font-orbitron font-bold text-plasma-green mb-4">Staking Options</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 p-4 rounded-cyber">
                    <h4 className="font-orbitron font-bold text-white mb-2">Flexible Staking</h4>
                    <p className="text-gray-400 font-rajdhani mb-4">Stake and unstake anytime with 18% APY</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Lock Period:</span>
                      <span className="text-white">None</span>
                    </div>
                  </div>
                  <div className="bg-white/5 p-4 rounded-cyber border border-plasma-green/30">
                    <h4 className="font-orbitron font-bold text-plasma-green mb-2">Fixed Staking</h4>
                    <p className="text-gray-400 font-rajdhani mb-4">Get annually 24% and H/Y 10% APR "from 400 million supply is locked for Staking rewards.</p>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Lock Period:</span>
                      <span className="text-plasma-green">2 years</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button onClick={startStackinghandler} className="cyber-button mr-4 rounded-cyber py-3 px-8 ">
                  <div className='flex justify-center items-center gap-2'>
                    <span>Start Staking</span>
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </button>
                <button
                  onClick={() => setActiveStep(1)}
                  className="glass-panel border-glow-purple px-6 py-3 rounded-cyber hover:scale-105 transition-all duration-300"
                >
                  <span className="font-rajdhani">Restart Guide</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Video Tutorial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-16"
        >
          <div className="holographic-card p-8 text-center">
            <h2 className="text-3xl font-orbitron font-bold text-gradient-gold mb-4">
              Watch Our Tutorial
            </h2>
            <p className="text-gray-400 font-rajdhani mb-8">
              Follow along with our step-by-step video guide
            </p>

            <a href="https://www.youtube.com/watch?v=vNXglsMoGvM&t=4s" target='_blank'>
            <div className="relative bg-gradient-to-br from-electric-gold/10 to-cyber-purple/10 rounded-cyber p-8 border border-electric-gold/20">
              <div className="absolute inset-0 bg-black/50 rounded-cyber flex items-center justify-center">
                <button className="w-20 h-20 bg-electric-gold/20 rounded-full flex items-center justify-center hover:bg-electric-gold/30 transition-all duration-300 hover:scale-110">
                  <Play className="w-8 h-8 text-electric-gold ml-1" />
                </button>
              </div>
              <div className="h-64 bg-gradient-to-br from-void-black to-midnight-blue rounded-cyber opacity-50"></div>
            </div>
            </a>

            <div className="mt-6 flex justify-center space-x-4">
              <button onClick={handleWatchTutorial} className="cyber-button rounded-cyber py-3 px-8">
                <div className='flex justify-center items-center gap-2'>
                  <Play className="w-4 h-4" />
                  <span>Watch Tutorial</span>
                </div>
              </button>
              <button onClick={handleDownloadGuide} className="glass-panel border-glow-purple px-6 py-3 rounded-cyber hover:scale-105 transition-all duration-300">
                <span className="font-rajdhani">Download Guide</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Steps;