// import React from 'react';
// import { motion } from 'framer-motion';
// import { PieChart, BarChart3, TrendingUp, Users, Lock, Coins } from 'lucide-react';

// const TokenDistribution: React.FC = () => {
//   const distributionData = [
//     { label: 'Public Sale', percentage: 40, color: 'from-electric-gold to-quantum-cyan', amount: '40M' },
//     { label: 'Team & Advisors', percentage: 10, color: 'from-cyber-purple to-hologram-pink', amount: '10M' },
//     { label: 'Development', percentage: 10, color: 'from-plasma-green to-electric-gold', amount: '10M' },
//     { label: 'Marketing', percentage: 10, color: 'from-quantum-cyan to-cyber-purple', amount: '10M' },
//     { label: 'Liquidity Pool', percentage: 20, color: 'from-hologram-pink to-plasma-green', amount: '20M' },
//     { label: 'Reserve', percentage: 10, color: 'from-electric-gold to-hologram-pink', amount: '10M' }
//   ];

//   const tokenMetrics = [
//     { label: 'Total Supply', value: '100,000,000', icon: Coins, color: 'text-electric-gold' },
//     { label: 'Circulating Supply', value: '20,000,000', icon: TrendingUp, color: 'text-quantum-cyan' },
//     { label: 'Market Cap', value: '$50,000,000', icon: BarChart3, color: 'text-plasma-green' },
//     { label: 'Holders', value: '25,000+', icon: Users, color: 'text-hologram-pink' }
//   ];

//   return (
//     <div className="space-y-12">
//       {/* Token Metrics */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
//       >
//         {tokenMetrics.map((metric, index) => (
//           <motion.div
//             key={metric.label}
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: index * 0.1 }}
//             className="data-terminal p-6 text-center"
//           >
//             <metric.icon className={`w-8 h-8 mx-auto mb-3 ${metric.color} animate-pulse-glow`} />
//             <div className={`text-2xl font-orbitron font-bold mb-2 ${metric.color}`}>
//               {metric.value}
//             </div>
//             <div className="text-gray-400 font-rajdhani text-sm">
//               {metric.label}
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Token Distribution Chart */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="holographic-card p-8"
//       >
//         <div className="flex items-center justify-center mb-8">
//           <PieChart className="w-8 h-8 text-electric-gold mr-3 animate-orbital-rotation" />
//           <h3 className="text-3xl font-orbitron font-bold text-gradient-gold">
//             Token Distribution
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Distribution Visualization */}
//           <div className="relative">
//             <div className="w-80 h-80 mx-auto relative">
//               {/* Outer Ring */}
//               <div className="absolute inset-0 rounded-full border-4 border-electric-gold/20 animate-pulse-glow"></div>
              
//               {/* Distribution Segments */}
//               <div className="absolute inset-4 rounded-full overflow-hidden">
//                 {distributionData.map((item, index) => {
//                   const rotation = distributionData.slice(0, index).reduce((acc, curr) => acc + (curr.percentage * 3.6), 0);
//                   const segmentAngle = item.percentage * 3.6;
                  
//                   return (
//                     <motion.div
//                       key={item.label}
//                       initial={{ opacity: 0, scale: 0 }}
//                       whileInView={{ opacity: 1, scale: 1 }}
//                       transition={{ duration: 0.8, delay: index * 0.1 }}
//                       className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.color} opacity-80`}
//                       style={{
//                         clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((rotation + segmentAngle) * Math.PI / 180)}% ${50 - 50 * Math.sin((rotation + segmentAngle) * Math.PI / 180)}%, 50% 50%)`
//                       }}
//                     />
//                   );
//                 })}
//               </div>

//               {/* Center Circle */}
//               <div className="absolute inset-1/3 rounded-full bg-void-black border-2 border-electric-gold flex items-center justify-center">
//                 <div className="text-center">
//                   <div className="text-2xl font-orbitron font-bold text-electric-gold">100M</div>
//                   <div className="text-sm text-gray-400">Total Supply</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Distribution Legend */}
//           <div className="space-y-4">
//             {distributionData.map((item, index) => (
//               <motion.div
//                 key={item.label}
//                 initial={{ opacity: 0, x: 20 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 className="flex items-center justify-between p-4 glass-panel border-glow hover:scale-105 transition-all duration-300"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
//                   <div>
//                     <div className="font-rajdhani font-semibold text-white">
//                       {item.label}
//                     </div>
//                     <div className="text-sm text-gray-400">
//                       {item.amount} AMMYI
//                     </div>
//                   </div>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-xl font-orbitron font-bold text-electric-gold">
//                     {item.percentage}%
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* Vesting Schedule */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="holographic-card p-8"
//       >
//         <div className="flex items-center justify-center mb-8">
//           <Lock className="w-8 h-8 text-cyber-purple mr-3 animate-neural-pulse" />
//           <h3 className="text-3xl font-orbitron font-bold text-gradient-purple">
//             Vesting Schedule
//           </h3>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="data-terminal p-6 text-center">
//             <div className="text-2xl font-orbitron font-bold text-plasma-green mb-2">
//               Immediate
//             </div>
//             <div className="text-gray-400 font-rajdhani mb-4">
//               Public Sale Tokens
//             </div>
//             <div className="text-lg text-electric-gold">
//               40% (400M AMMYI)
//             </div>
//           </div>

//           <div className="data-terminal p-6 text-center">
//             <div className="text-2xl font-orbitron font-bold text-quantum-cyan mb-2">
//               6 Months
//             </div>
//             <div className="text-gray-400 font-rajdhani mb-4">
//               Team & Development
//             </div>
//             <div className="text-lg text-electric-gold">
//               35% (350M AMMYI)
//             </div>
//           </div>

//           <div className="data-terminal p-6 text-center">
//             <div className="text-2xl font-orbitron font-bold text-hologram-pink mb-2">
//               12 Months
//             </div>
//             <div className="text-gray-400 font-rajdhani mb-4">
//               Reserve & Marketing
//             </div>
//             <div className="text-lg text-electric-gold">
//               25% (250M AMMYI)
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default TokenDistribution;


import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PieChart as PieChartIcon, BarChart3, TrendingUp, Users, Lock, Coins } from 'lucide-react';

const TokenDistribution: React.FC = () => {
  const distributionData = [
    { label: 'Staking Contract', percentage: 40, color: '#d4af37', amount: '40M' },
    { label: 'Liquidity Pool', percentage: 20, color: '#8b5cf6', amount: '20M' },
    { label: 'Marketing', percentage: 10, color: '#10b981', amount: '10M' },
    { label: 'Development', percentage: 10, color: '#06b6d4', amount: '10M' },
    { label: 'Team & Advisors', percentage: 10, color: '#ec4899', amount: '10M' },
    { label: 'Reserve', percentage: 10, color: '#f97316', amount: '10M' }
  ];

  const tokenMetrics = [
    { label: 'Total Supply', value: '100,000,000', icon: Coins, color: 'text-electric-gold' },
    { label: 'Circulating Supply', value: '20,000,000', icon: TrendingUp, color: 'text-quantum-cyan' },
    { label: 'Market Cap', value: '$4,500,000', icon: BarChart3, color: 'text-plasma-green' },
    { label: 'Holders', value: '25,000+', icon: Users, color: 'text-hologram-pink' }
  ];

  // Custom tooltip for the pie chart
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="glass-panel p-4 rounded-cyber border-glow">
          <p className="font-orbitron font-bold text-white mb-2">{data.label}</p>
          <p className="text-electric-gold font-space-mono">{data.percentage}% ({data.amount} AMMYI)</p>
        </div>
      );
    }
    return null;
  };

  // Custom label function for the pie chart
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text 
        x={x} 
        y={y} 
        fill="white" 
        textAnchor={x > cx ? 'start' : 'end'} 
        dominantBaseline="central"
        className="font-space-mono text-sm font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="space-y-12">
      {/* Token Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {tokenMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="data-terminal p-6 text-center"
          >
            <metric.icon className={`w-8 h-8 mx-auto mb-3 ${metric.color} animate-pulse-glow`} />
            <div className={`text-2xl font-orbitron font-bold mb-2 ${metric.color}`}>
              {metric.value}
            </div>
            <div className="text-gray-400 font-rajdhani text-sm">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Token Distribution Chart */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="holographic-card p-8"
      >
        <div className="flex items-center justify-center mb-8">
          <PieChartIcon className="w-8 h-8 text-electric-gold mr-3 animate-orbital-rotation" />
          <h3 className="text-3xl font-orbitron font-bold text-gradient-gold">
            Token Distribution
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-96 h-96 mx-auto relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomLabel}
                    outerRadius={140}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="percentage"
                    animationBegin={0}
                    animationDuration={1500}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.color}
                        stroke="rgba(212, 175, 55, 0.3)"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
              
              {/* Center Circle with Total Supply */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none ">
                <div className="w-24 h-24 rounded-full bg-void-black border-2 border-electric-gold flex items-center justify-center animate-pulse-glow">
                  <div className="text-center">
                  <div className="text-xl font-orbitron font-bold text-electric-gold">100M</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Distribution Legend */}
          <div className="space-y-4">
            {distributionData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-between p-4 glass-panel border-glow hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div 
                    className="w-4 h-4 rounded-full animate-pulse-glow" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <div>
                    <div className="font-rajdhani font-semibold text-white">
                      {item.label}
                    </div>
                    <div className="text-sm text-gray-400">
                      {item.amount} AMMYI
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-orbitron font-bold text-electric-gold">
                    {item.percentage}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Vesting Schedule */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="holographic-card p-8"
      >
        <div className="flex items-center justify-center mb-8">
          <Lock className="w-8 h-8 text-cyber-purple mr-3 animate-neural-pulse" />
          <h3 className="text-3xl font-orbitron font-bold text-gradient-purple">
            Vesting Schedule
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="data-terminal p-6 text-center">
            <div className="text-2xl font-orbitron font-bold text-plasma-green mb-2">
              Immediate
            </div>
            <div className="text-gray-400 font-rajdhani mb-4">
              Staking & Liquidity
            </div>
            <div className="text-lg text-electric-gold">
              60% (60M AMMYI)
            </div>
          </div>

          <div className="data-terminal p-6 text-center">
            <div className="text-2xl font-orbitron font-bold text-quantum-cyan mb-2">
              6 Months
            </div>
            <div className="text-gray-400 font-rajdhani mb-4">
              Team & Development
            </div>
            <div className="text-lg text-electric-gold">
              20% (20M AMMYI)
            </div>
          </div>

          <div className="data-terminal p-6 text-center">
            <div className="text-2xl font-orbitron font-bold text-hologram-pink mb-2">
              12 Months
            </div>
            <div className="text-gray-400 font-rajdhani mb-4">
              Reserve & Marketing
            </div>
            <div className="text-lg text-electric-gold">
              20% (20M AMMYI)
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TokenDistribution;