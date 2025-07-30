import React from 'react';
import { motion } from 'framer-motion';
import {
  Coins,
  TrendingUp,
  Shield,
  Users,
  Zap,
  Target,
  PieChart,
  Lock,
  Gift,
  Rocket,
  Star,
  ArrowRight
} from 'lucide-react';
import TokenDistribution from '../components/TokenDistribution';
import { a } from 'framer-motion/client';


const Tokenomics = () => {
  const tokenMetrics = [
    { label: 'Total Supply', value: '100,000,000', unit: 'AMMYI', icon: Coins },
    { label: 'Circulating Supply', value: '20,000,000', unit: 'AMMYI', icon: TrendingUp },
    { label: 'Market Cap', value: '$5,000,000', unit: 'USD', icon: Target },
    { label: 'Holders', value: '25,000+', unit: 'Users', icon: Users }
  ];

  const distributionData = [
    { category: 'Locked for Staking', percentage: 40, color: 'from-electric-gold to-quantum-cyan', amount: '40M' },
    { category: 'Team & Advisors', percentage: 10, color: 'from-cyber-purple to-hologram-pink', amount: '10M' },
    { category: 'Development', percentage: 10, color: 'from-plasma-green to-electric-gold', amount: '10M' },
    { category: 'Marketing', percentage: 10, color: 'from-quantum-cyan to-cyber-purple', amount: '10M' },
    { category: 'Liquidity Pool', percentage: 20, color: 'from-hologram-pink to-plasma-green', amount: '20M' },
    { category: 'Reserve Fund', percentage: 10, color: 'from-electric-gold to-hologram-pink', amount: '10M' }
  ];

  const nftreesFeatures = [
    {
      icon: Shield,
      title: 'Environmental Impact',
      description: 'Each NFTree represents real tree planting initiatives, creating tangible environmental benefits.'
    },
    {
      icon: Coins,
      title: 'Tokenized Rewards',
      description: 'Earn AMMYI tokens through NFTree ownership and environmental contribution tracking.'
    },
    {
      icon: TrendingUp,
      title: 'Growing Value',
      description: 'NFTrees appreciate in value as the environmental impact and ecosystem grows.'
    }
  ];

  const exchangeListings = [
    { name: 'Coinmarketcap', logo: 'data:image/jpeg;base64,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', status: 'Live', volume: '$2.5M', link: 'https://coinmarketcap.com/currencies/ammyi-coin/' },
    { name: 'Pancakeswap', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sGcPub0jg5otPbAghDSkCQUOcaa7QaMmqg&s', status: 'Live', volume: '$1.8M', link: 'https://pancakeswap.finance/swap' },
    { name: 'Koinbx', logo: 'https://assets.coingecko.com/markets/images/751/large/Dark_Logo_Icon.png?1729689995', status: 'Live', volume: '$950K', link: 'https://koinbx.com/' },
    { name: 'Binance', logo: 'data:image/png;base64,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', status: 'Pending', volume: 'TBA', link: 'https://bscscan.com/token/0x1ef72a1df5e4d165f84fc43b20d56caa7dad46e1' },
    { name: 'Coinbase', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMX1MF_m5wMJpnppjniVQXClEPvhcN4N6dbw&s', status: 'Applied', volume: 'TBA', link: '#' },
    { name: 'KuCoin', logo: 'data:image/png;base64,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', status: 'In Review', volume: 'TBA', link: '#' }
  ];

  const handleMintNFT = () => {
    window.open("https://nftrees.amicoin.io/mint", "_blank");
  }

  const handleBuyAmi = () => {
    window.open("https://amicoin.io/buyami/User/Buy-now.aspx", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-void-black via-midnight-blue to-void-black">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="quantum-badge mb-6">
              <Coins className="w-5 h-5 mr-2 animate-orbital-rotation" />
              AMMYI Tokenomics
            </div>
            <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6">
              <span className="text-gradient-gold">Token</span>{' '}
              <span className="text-gradient-purple">Economics</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
              Discover the economic model powering the AMMYI ecosystem, designed for
              sustainable growth and community rewards.
            </p>
          </motion.div>

          {/* Token Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {tokenMetrics.map((metric, index) => (
              <div key={index} className="data-terminal group p-4">
                <div className="flex items-center justify-between mb-4">
                  <metric.icon className="w-8 h-8 text-electric-gold animate-pulse-glow" />
                  <div className="w-2 h-2 bg-plasma-green rounded-full animate-neural-pulse"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-orbitron font-bold cyber-glow">
                    {metric.value}
                  </p>
                  <p className="text-sm text-gray-400 font-space-mono">{metric.unit}</p>
                  <p className="text-xs text-gray-500 font-rajdhani">{metric.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-cyan">Token</span>{' '}
              <span className="text-gradient-gold">Distribution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
              Transparent allocation ensuring sustainable ecosystem growth and community benefits.
            </p>
          </motion.div>

          <TokenDistribution />

          {/* Distribution Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
          >
            {distributionData.map((item, index) => (
              <div key={index} className="holographic-card group p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                  <span className="text-2xl font-orbitron font-bold text-electric-gold">
                    {item.percentage}%
                  </span>
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-2">
                  {item.category}
                </h3>
                <p className="text-gray-300 font-rajdhani mb-4">
                  {item.amount} AMMYI tokens allocated for {item.category.toLowerCase()}.
                </p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 group-hover:animate-energy-flow`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NFTrees Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="quantum-badge mb-6">
              <Star className="w-5 h-5 mr-2 animate-orbital-rotation" />
              NFTrees Integration
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-green">Environmental</span>{' '}
              <span className="text-gradient-gold">NFTs</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
              Revolutionary NFTrees combine environmental impact with tokenized rewards,
              creating a sustainable future through blockchain technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {nftreesFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="holographic-card group p-4"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-plasma-green to-electric-gold rounded-quantum mb-6 mx-auto group-hover:animate-orbital-rotation">
                  <feature.icon className="w-8 h-8 text-void-black" />
                </div>
                <h3 className="text-xl font-orbitron font-bold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-rajdhani text-center">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="holographic-card text-center p-4"
          >
            <h3 className="text-2xl font-orbitron font-bold text-gradient-gold mb-4">
              Join the Green Revolution
            </h3>
            <p className="text-gray-300 font-rajdhani mb-6 max-w-2xl mx-auto">
              Mint NFTrees, contribute to environmental restoration, and earn AMMYI tokens
              while making a positive impact on our planet.
            </p>
            <button onClick={handleMintNFT} className="cyber-button rounded-cyber group ">
              <div className='flex p-4 '>
                <Gift className="w-5 h-5 mr-2 group-hover:animate-orbital-rotation" />
                Mint NFTree
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Exchange Listings */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="quantum-badge mb-6">
              <TrendingUp className="w-5 h-5 mr-2 animate-neural-pulse" />
              Exchange Listings
            </div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
              <span className="text-gradient-purple">Trading</span>{' '}
              <span className="text-gradient-cyan">Venues</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
              AMMYI is available across multiple exchanges, providing liquidity and
              accessibility for our global community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exchangeListings.map((exchange, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="holographic-card group p-4"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {/* <span className="text-3xl">{exchange.logo}</span> */}
                    <img src={exchange.logo} alt="logo" className='h-10 w-10 rounded-full' />
                    <h3 className="text-xl font-orbitron font-bold text-white">
                      {exchange.name}
                    </h3>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-space-mono ${exchange.status === 'Live'
                    ? 'bg-plasma-green/20 text-plasma-green border border-plasma-green/30'
                    : exchange.status === 'Pending'
                      ? 'bg-electric-gold/20 text-electric-gold border border-electric-gold/30'
                      : 'bg-cyber-purple/20 text-cyber-purple border border-cyber-purple/30'
                    }`}>
                    {exchange.status}
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-400 font-rajdhani text-sm">24h Volume</p>
                  <p className="text-2xl font-orbitron font-bold cyber-glow">
                    {exchange.volume}
                  </p>
                </div>
                {exchange.status === 'Live' && (
                  <a href={exchange.link} target='_blank'>
                    <button className="w-full mt-4 glass-panel border-glow-green hover:border-glow-gold transition-all duration-300 py-2 px-4 rounded-cyber font-rajdhani font-medium">
                      Trade Now
                    </button>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="holographic-card text-center relative overflow-hidden p-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-gold/5 via-cyber-purple/5 to-plasma-green/5 animate-energy-flow"></div>
            <div className="relative z-10">
              <Rocket className="w-16 h-16 text-electric-gold mx-auto mb-6 animate-orbital-rotation" />
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">
                <span className="text-gradient-gold">Ready to Join</span>{' '}
                <span className="text-gradient-purple">AMMYI?</span>
              </h2>
              <p className="text-xl text-gray-300 font-rajdhani mb-8 max-w-2xl mx-auto">
                Start your journey with AMMYI tokens and become part of the quantum finance revolution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleBuyAmi}
                  className="cyber-button group rounded-cyber py-3 px-8">
                  <div className='flex justify-center itmes-center '>
                    <Coins className="w-5 h-5 mr-2 group-hover:animate-orbital-rotation" />
                    Buy AMMYI
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>

                <button className="glass-panel border-glow-purple hover:border-glow-gold transition-all duration-300 py-3 px-8 rounded-cyber font-rajdhani font-medium group">
                  <div className='flex justify-center itmes-center'>
                    <PieChart className="w-5 h-5 mr-2 group-hover:animate-neural-pulse" />
                    View Analytics
                  </div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tokenomics;


