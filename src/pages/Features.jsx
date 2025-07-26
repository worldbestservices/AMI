// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Shield,
//   Zap,
//   Globe as LucideGlobe,
//   Lock,
//   Users,
//   TrendingUp,
//   Coins,
//   BarChart3,
//   Wallet,
//   Star,
//   CheckCircle,
//   ArrowRight,
//   Play,
//   Download,
//   ExternalLink,
// } from "lucide-react";

// const handleViewDoc = () => {
//   window.open("https://www.amicoin.io/Doc/AMI.pdf", "_blank")
// }

// const FeatureBlock = ({
//   title,
//   desc,
//   buttons,
//   imageUrl,
//   align = "left",
//   index,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="mb-20"
//     >
//       <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${align === "right" ? "lg:grid-flow-col-dense" : ""
//         }`}>
//         {/* Content */}
//         <div className={`${align === "right" ? "lg:col-start-2" : ""}`}>
//           <div className="holographic-card p-8 rounded-quantum">
//             <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient-gold mb-6">
//               {title}
//             </h3>
//             <p className="text-gray-300 text-lg mb-8 leading-relaxed font-rajdhani">
//               {desc}
//             </p>
//             <div className="flex flex-wrap gap-4">
//               {buttons.map((btn, idx) => (
//                 <Link
//                   key={idx}
//                   to={btn.url}
//                   className="cyber-button px-6 py-3 rounded-cyber font-rajdhani font-semibold hover:scale-105 transition-transform duration-300 inline-block text-center"
//                 >
//                   {btn.label}
//                 </Link>
//               ))}
//             </div>

//           </div>
//         </div>

//         {/* Image */}
//         <div className={`${align === "right" ? "lg:col-start-1" : ""}`}>
//           <motion.div
//             whileHover={{ scale: 1.05, rotateY: 5 }}
//             className="relative perspective-1000"
//           >
//             <div className="holographic-card p-8 rounded-quantum">
//               <img
//                 src={imageUrl}
//                 alt={title}
//                 className="w-full h-64 object-contain rounded-cyber"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const Features = () => {
//   const gridFeatures = [
//     {
//       icon: Shield,
//       title: "Military-Grade Security",
//       description: "Quantum-resistant encryption and multi-signature wallets",
//       color: "text-electric-gold",
//     },
//     {
//       icon: Zap,
//       title: "Instant Transactions",
//       description: "Near-zero latency with our proprietary consensus algorithm",
//       color: "text-quantum-cyan",
//     },
//     {
//       icon: LucideGlobe,
//       title: "Global Payments",
//       description: "Borderless transactions with minimal fees (<0.1%)",
//       color: "text-cyber-purple",
//     },
//     {
//       icon: Lock,
//       title: "Regulatory Compliance",
//       description: "Fully compliant with FATF travel rule and KYC/AML",
//       color: "text-plasma-green",
//     },
//     {
//       icon: Users,
//       title: "DAO Governance",
//       description: "Community-driven protocol upgrades and decisions",
//       color: "text-hologram-pink",
//     },
//     {
//       icon: TrendingUp,
//       title: "High-Yield Staking",
//       description: "Earn up to 24% APY through our sustainable staking pools",
//       color: "text-electric-gold",
//     },
//   ];

//   const advantages = [
//     {
//       title: "Blockchain Technology",
//       description: "Secure, decentralized infrastructure powering the future of finance",
//       icon: BarChart3,
//     },
//     {
//       title: "Advanced DeFi Staking System",
//       description: "Earn high yields with our innovative staking protocols",
//       icon: Coins,
//     },
//     {
//       title: "Multicurrency Buy Option",
//       description: "Purchase with multiple currencies for maximum convenience",
//       icon: Wallet,
//     },
//     {
//       title: "Marketplace of Future",
//       description: "Next-generation decentralized commerce platform",
//       icon: Star,
//     },
//     {
//       title: "Audited From BlockAudit",
//       description: "Security verified by top blockchain auditors",
//       icon: CheckCircle,
//       action: {
//         text: "Download Audit Report",
//         link: "https://www.amicoin.io/Doc/AMMYI_Audit.pdf",
//       },
//     },
//     {
//       title: "Use AMMYI Worldwide",
//       description: "Global payment solution accepted by merchants everywhere",
//       icon: LucideGlobe,
//     },
//   ];

//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       <div className="relative z-10">
//         {/* Hero Section */}
//         <section className="pt-32 md:pt-40 pb-20 px-4">
//           <div className="container mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//               className="text-center mb-16"
//             >
//               <div className="quantum-badge inline-flex items-center px-6 py-3 rounded-full mb-8">
//                 <Zap className="h-5 w-5 text-electric-gold mr-2 animate-neural-pulse" />
//                 <span className="text-electric-gold font-space-mono tracking-wider">
//                   ADVANCED FEATURES
//                 </span>
//               </div>

//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
//                 Next-Generation
//                 <span className="block text-gradient-gold">
//                   DeFi Features
//                 </span>
//               </h1>

//               <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-rajdhani">
//                 Experience cutting-edge blockchain technology designed for the future of finance
//               </p>
//             </motion.div>
//           </div>
//         </section>

//         {/* Feature Blocks Section */}
//         {/* <section className="py-20 px-4">
//           <div className="container mx-auto max-w-7xl">
//             <FeatureBlock
//               title="Quantum Staking"
//               desc="Unique DeFi smart contract platform for multiple AMMYI rewards. Get annually 24% and H/Y 10% APR from 400 million supply locked for staking rewards. Our quantum-enhanced algorithms optimize your returns automatically."
//               buttons={["START STAKING"]}
//               imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
//               align="left"
//               index={0}
//             />
            
//             <FeatureBlock
//               title="Multi-Currency Exchange"
//               desc="Exchange between all popular currencies with a couple of clicks. Instant buy from multiple pairs with the best rates in the market. Support for 50+ fiat currencies and 100+ cryptocurrencies."
//               buttons={["ETH/AMMYI", "BTC/AMMYI", "FIAT/AMMYI"]}
//               imageUrl="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop"
//               align="right"
//               index={1}
//             />

//             <FeatureBlock
//               title="NFTrees Ecosystem"
//               desc="Connecting people from virtual world to real world. Plant real NFT trees, upload images, get listed & earn AMMYI as listing rewards. Also sell your images as NFTs while contributing to environmental sustainability."
//               buttons={["EXPLORE NFTREES"]}
//               imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
//               align="left"
//               index={2}
//             />
            
//             <FeatureBlock
//               title="AMMYI Web Platform"
//               desc="Create your webstore website in 2 minutes. Select templates, choose designs and go live. Accept AMMYI as payment for your goods and services. Complete e-commerce solution with built-in crypto payments."
//               buttons={["COMING 2024"]}
//               imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
//               align="right"
//               index={3}
//             />
//           </div>
//         </section> */}
//         {/* Feature Blocks Section */}
// {/* Feature Blocks Section */}
// <section className="py-20 px-4">
//   <div className="container mx-auto max-w-7xl">
//     <FeatureBlock
//       title="Quantum Staking"
//       desc="Unique DeFi smart contract platform for multiple AMMYI rewards. Get annually 24% and H/Y 10% APR from 400 million supply locked for staking rewards. Our quantum-enhanced algorithms optimize your returns automatically."
//       buttons={[
//         { label: "START STAKING", url: "/staking" },
//       ]}
//       imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
//       align="left"
//       index={0}
//     />

//     <FeatureBlock
//       title="Multi-Currency Exchange"
//       desc="Exchange between all popular currencies with a couple of clicks. Instant buy from multiple pairs with the best rates in the market. Support for 50+ fiat currencies and 100+ cryptocurrencies."
//       buttons={[
//         { label: "ETH/AMMYI", url: "/exchange/eth-ammyi" },
//         { label: "BTC/AMMYI", url: "/exchange/btc-ammyi" },
//         { label: "FIAT/AMMYI", url: "/exchange/fiat-ammyi" },
//       ]}
//       imageUrl="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop"
//       align="right"
//       index={1}
//     />

//     <FeatureBlock
//       title="NFTrees Ecosystem"
//       desc="Connecting people from virtual world to real world. Plant real NFT trees, upload images, get listed & earn AMMYI as listing rewards. Also sell your images as NFTs while contributing to environmental sustainability."
//       buttons={[
//         { label: "EXPLORE NFTREES", url: "/nftrees" },
//       ]}
//       imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
//       align="left"
//       index={2}
//     />

//     <FeatureBlock
//       title="AMMYI Web Platform"
//       desc="Create your webstore website in 2 minutes. Select templates, choose designs and go live. Accept AMMYI as payment for your goods and services. Complete e-commerce solution with built-in crypto payments."
//       buttons={[
//         { label: "COMING 2024", url: "#" },
//       ]}
//       imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
//       align="right"
//       index={3}
//     />
//   </div>
// </section>



//         {/* Advantages Grid */}
//         <section className="py-20 px-4 bg-gradient-to-b from-transparent to-midnight-blue/50">
//           <div className="container mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
//                 Why Choose <span className="text-gradient-gold">AMMYI?</span>
//               </h2>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
//                 Discover the advantages that make AMMYI the future of decentralized finance
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {advantages.map((advantage, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="holographic-card p-8 rounded-quantum hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className="text-electric-gold p-4 rounded-cyber w-fit mb-6 group-hover:animate-quantum-shift">
//                     <advantage.icon className="h-8 w-8" />
//                   </div>
//                   <h3 className="text-xl font-orbitron font-bold text-white mb-4">
//                     {advantage.title}
//                   </h3>
//                   <p className="text-gray-300 font-rajdhani mb-6">
//                     {advantage.description}
//                   </p>
//                   {advantage.action && (
//                     <a
//                       href={advantage.action.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="cyber-button px-4 py-2 rounded-cyber font-rajdhani font-semibold text-sm hover:scale-105 transition-transform duration-300 rounded-cyber flex justify-center items-center gap-8 py-3 px-8"
//                     >
//                       <span className="flex items-center">
//                         <Download className="mr-2 h-4 w-4" />
//                         {advantage.action.text}
//                       </span>
//                     </a>
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Core Features Grid */}
//         <section className="py-20 px-4">
//           <div className="container mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
//                 Core <span className="text-gradient-cyber">Technologies</span>
//               </h2>
//               <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
//                 Built with cutting-edge technology for maximum performance and security
//               </p>
//             </motion.div>

//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {gridFeatures.map((feature, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="holographic-card p-8 rounded-quantum hover:scale-105 transition-all duration-300 group"
//                 >
//                   <div className={`${feature.color} p-4 rounded-cyber w-fit mb-6 group-hover:animate-orbital-rotation`}>
//                     <feature.icon className="h-8 w-8" />
//                   </div>
//                   <h3 className="text-xl font-orbitron font-bold text-white mb-4">
//                     {feature.title}
//                   </h3>
//                   <p className="text-gray-300 font-rajdhani">
//                     {feature.description}
//                   </p>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Technical Specifications */}
//         <section className="py-20 px-4 bg-gradient-to-t from-transparent to-midnight-blue/50">
//           <div className="container mx-auto max-w-7xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
//                 Technical <span className="text-gradient-purple">Specifications</span>
//               </h2>
//             </motion.div>

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//               {[
//                 { label: "Block Time", value: "0.1s", color: "electric-gold" },
//                 { label: "Average Fee", value: "$0.001", color: "quantum-cyan" },
//                 { label: "Active Wallets", value: "10M+", color: "cyber-purple" },
//                 { label: "Network Uptime", value: "99.9%", color: "plasma-green" },
//               ].map((spec, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="data-terminal p-6 rounded-cyber text-center"
//                 >
//                   <div className={`text-3xl md:text-4xl font-orbitron font-bold text-${spec.color} mb-2 animate-cyber-glow`}>
//                     {spec.value}
//                   </div>
//                   <div className="text-gray-400 font-space-mono text-sm tracking-wide">
//                     {spec.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 px-4">
//           <div className="container mx-auto max-w-4xl">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className="holographic-card p-12 rounded-quantum text-center"
//             >
//               <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
//                 Ready to Experience <span className="text-gradient-gold">Advanced DeFi?</span>
//               </h2>

//               <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-rajdhani">
//                 Join thousands of users already benefiting from AMMYI's cutting-edge features
//               </p>

//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <a
//                   href="https://amicoin.io/buyami/User/Buy-now.aspx"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="cyber-button px-8 py-4 rounded-cyber font-rajdhani font-bold text-lg hover:scale-105 transition-transform duration-300"
//                 >
//                   <span className="flex items-center justify-center">
//                     <Wallet className="mr-2 h-5 w-5" />
//                     GET STARTED NOW
//                   </span>
//                 </a>

//                 <button onClick={handleViewDoc} className="glass-panel border-glow-purple px-8 py-4 rounded-cyber font-rajdhani font-bold text-lg text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-105">
//                   <span className="flex items-center justify-center">
//                     <ExternalLink className="mr-2 h-5 w-5" />
//                     VIEW DOCUMENTATION
//                   </span>
//                 </button>
//               </div>
//             </motion.div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Features;




import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Zap,
  Globe as LucideGlobe,
  Lock,
  Users,
  TrendingUp,
  Coins,
  BarChart3,
  Wallet,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  Download,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const handleViewDoc = () => {
  window.open("https://www.amicoin.io/Doc/AMI.pdf", "_blank");
};

// const FeatureBlock = ({
//   title,
//   desc,
//   buttons,
//   imageUrl,
//   align = "left",
//   index,
// }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6, delay: index * 0.1 }}
//       className="mb-20"
//     >
//       <div
//         className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
//           align === "right" ? "lg:grid-flow-col-dense" : ""
//         }`}
//       >
//         {/* Content */}
//         <div className={`${align === "right" ? "lg:col-start-2" : ""}`}>
//           <div className="holographic-card p-8 rounded-quantum">
//             <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient-gold mb-6">
//               {title}
//             </h3>
//             <p className="text-gray-300 text-lg mb-8 leading-relaxed font-rajdhani">
//               {desc}
//             </p>
//             <div className="flex flex-wrap gap-4">
//               {buttons.map((btn, idx) => (
//                 <Link
//                   key={idx}
//                   to={btn.url}
//                   className="cyber-button px-6 py-3 rounded-cyber font-rajdhani font-semibold hover:scale-105 transition-transform duration-300 inline-block text-center"
//                 >
//                   {btn.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Image */}
//         <div className={`${align === "right" ? "lg:col-start-1" : ""}`}>
//           <motion.div
//             whileHover={{ scale: 1.05, rotateY: 5 }}
//             className="relative perspective-1000"
//           >
//             <div className="holographic-card p-8 rounded-quantum">
//               <img
//                 src={imageUrl}
//                 alt={title}
//                 className="w-full h-64 object-contain rounded-cyber"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

const FeatureBlock = ({
  title,
  desc,
  buttons,
  imageUrl,
  align = "left",
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="mb-20"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch ${
          align === "right" ? "lg:grid-flow-col-dense" : ""
        }`}
      >
        {/* Content */}
        <div className={`${align === "right" ? "lg:col-start-2" : ""}`}>
          <div className="holographic-card p-8 rounded-quantum h-full flex flex-col">
            <div className="flex-grow">
              <h3 className="text-3xl md:text-4xl font-orbitron font-bold text-gradient-gold mb-6">
                {title}
              </h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed font-rajdhani">
                {desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              {buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  to={btn.url}
                  className="cyber-button px-6 py-3 rounded-cyber font-rajdhani font-semibold hover:scale-105 transition-transform duration-300 inline-block text-center"
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className={`${align === "right" ? "lg:col-start-1" : ""}`}>
          <motion.div
            whileHover={{ scale: 1.05, rotateY: 5 }}
            className="relative perspective-1000 h-full"
          >
            <div className="holographic-card p-8 rounded-quantum h-full flex items-center justify-center">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-64 object-contain rounded-cyber"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const gridFeatures = [
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Quantum-resistant encryption and multi-signature wallets",
      color: "text-electric-gold",
    },
    {
      icon: Zap,
      title: "Instant Transactions",
      description: "Near-zero latency with our proprietary consensus algorithm",
      color: "text-quantum-cyan",
    },
    {
      icon: LucideGlobe,
      title: "Global Payments",
      description: "Borderless transactions with minimal fees (<0.1%)",
      color: "text-cyber-purple",
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Fully compliant with FATF travel rule and KYC/AML",
      color: "text-plasma-green",
    },
    {
      icon: Users,
      title: "DAO Governance",
      description: "Community-driven protocol upgrades and decisions",
      color: "text-hologram-pink",
    },
    {
      icon: TrendingUp,
      title: "High-Yield Staking",
      description: "Earn up to 24% APY through our sustainable staking pools",
      color: "text-electric-gold",
    },
  ];

  const advantages = [
    {
      title: "Blockchain Technology",
      description: "Secure, decentralized infrastructure powering the future of finance",
      icon: BarChart3,
    },
    {
      title: "Advanced DeFi Staking System",
      description: "Earn high yields with our innovative staking protocols",
      icon: Coins,
    },
    {
      title: "Multicurrency Buy Option",
      description: "Purchase with multiple currencies for maximum convenience",
      icon: Wallet,
    },
    {
      title: "Marketplace of Future",
      description: "Next-generation decentralized commerce platform",
      icon: Star,
    },
    {
      title: "Audited From BlockAudit",
      description: "Security verified by top blockchain auditors",
      icon: CheckCircle,
      action: {
        text: "Download Audit Report",
        link: "https://www.amicoin.io/Doc/AMMYI_Audit.pdf",
      },
    },
    {
      title: "Use AMMYI Worldwide",
      description: "Global payment solution accepted by merchants everywhere",
      icon: LucideGlobe,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-32 md:pt-40 pb-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="quantum-badge inline-flex items-center px-6 py-3 rounded-full mb-8">
                <Zap className="h-5 w-5 text-electric-gold mr-2 animate-neural-pulse" />
                <span className="text-electric-gold font-space-mono tracking-wider">
                  ADVANCED FEATURES
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-orbitron font-bold mb-6 leading-tight">
                Next-Generation
                <span className="block text-gradient-gold">DeFi Features</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-rajdhani">
                Experience cutting-edge blockchain technology designed for the future of finance
              </p>
            </motion.div>
          </div>
        </section>

        {/* Feature Blocks Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <FeatureBlock
              title="Quantum Staking"
              desc="Unique DeFi smart contract platform for multiple AMMYI rewards. Get annually 24% and H/Y 10% APR from 400 million supply locked for staking rewards. Our quantum-enhanced algorithms optimize your returns automatically."
              buttons={[
                { label: "START STAKING", url: "https://stak.amicoin.io/" },
              ]}
              imageUrl="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=500&h=300&fit=crop"
              align="left"
              index={0}
            />
            
            <FeatureBlock
              title="Multi-Currency Exchange"
              desc="Exchange between all popular currencies with a couple of clicks. Instant buy from multiple pairs with the best rates in the market. Support for 50+ fiat currencies and 100+ cryptocurrencies."
              buttons={[
                { label: "ETH/AMMYI", url: "/exchange/eth-ammyi" },
                { label: "BTC/AMMYI", url: "/exchange/btc-ammyi" },
                { label: "FIAT/AMMYI", url: "/exchange/fiat-ammyi" },
              ]}
              imageUrl="https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=500&h=300&fit=crop"
              align="right"
              index={1}
            />

            <FeatureBlock
              title="NFTrees Ecosystem"
              desc="Connecting people from virtual world to real world. Plant real NFT trees, upload images, get listed & earn AMMYI as listing rewards. Also sell your images as NFTs while contributing to environmental sustainability."
              buttons={[
                { label: "EXPLORE NFTREES", url: "https://nftrees.amicoin.io/" },
              ]}
              imageUrl="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop"
              align="left"
              index={2}
            />
            
            <FeatureBlock
              title="AMMYI Web Platform"
              desc="Create your webstore website in 2 minutes. Select templates, choose designs and go live. Accept AMMYI as payment for your goods and services. Complete e-commerce solution with built-in crypto payments."
              buttons={[
                { label: "COMING 2025", url: "#" },
              ]}
              imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop"
              align="right"
              index={3}
            />
          </div>
        </section>

        {/* Advantages Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-midnight-blue/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Why Choose <span className="text-gradient-gold">AMMYI?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
                Discover the advantages that make AMMYI the future of decentralized finance
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="holographic-card p-8 rounded-quantum hover:scale-105 transition-all duration-300 group"
                >
                  <div className="text-electric-gold p-4 rounded-cyber w-fit mb-6 group-hover:animate-quantum-shift">
                    <advantage.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani mb-6">
                    {advantage.description}
                  </p>
                  {advantage.action && (
                    <a
                      href={advantage.action.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-button px-4 py-2 rounded-cyber font-rajdhani font-semibold text-sm hover:scale-105 transition-transform duration-300 rounded-cyber flex justify-center items-center gap-8 py-3 px-8"
                    >
                      <span className="flex items-center">
                        <Download className="mr-2 h-4 w-4" />
                        {advantage.action.text}
                      </span>
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Features Grid */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Core <span className="text-gradient-cyber">Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto font-rajdhani">
                Built with cutting-edge technology for maximum performance and security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="holographic-card p-8 rounded-quantum hover:scale-105 transition-all duration-300 group"
                >
                  <div className={`${feature.color} p-4 rounded-cyber w-fit mb-6 group-hover:animate-orbital-rotation`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-orbitron font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 font-rajdhani">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-20 px-4 bg-gradient-to-t from-transparent to-midnight-blue/50">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Technical <span className="text-gradient-purple">Specifications</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Block Time", value: "0.1s", color: "electric-gold" },
                { label: "Average Fee", value: "$0.001", color: "quantum-cyan" },
                { label: "Active Wallets", value: "10M+", color: "cyber-purple" },
                { label: "Network Uptime", value: "99.9%", color: "plasma-green" },
              ].map((spec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="data-terminal p-6 rounded-cyber text-center"
                >
                  <div className={`text-3xl md:text-4xl font-orbitron font-bold text-${spec.color} mb-2 animate-cyber-glow`}>
                    {spec.value}
                  </div>
                  <div className="text-gray-400 font-space-mono text-sm tracking-wide">
                    {spec.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="holographic-card p-12 rounded-quantum text-center"
            >
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-6">
                Ready to Experience <span className="text-gradient-gold">Advanced DeFi?</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-rajdhani">
                Join thousands of users already benefiting from AMMYI's cutting-edge features
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://amicoin.io/buyami/User/Buy-now.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-button px-8 py-4 rounded-cyber font-rajdhani font-bold text-lg hover:scale-105 transition-transform duration-300"
                >
                  <span className="flex items-center justify-center">
                    <Wallet className="mr-2 h-5 w-5" />
                    GET STARTED NOW
                  </span>
                </a>

                <button
                  onClick={handleViewDoc}
                  className="glass-panel border-glow-purple px-8 py-4 rounded-cyber font-rajdhani font-bold text-lg text-cyber-purple hover:bg-cyber-purple/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="flex items-center justify-center">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    VIEW DOCUMENTATION
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Features;