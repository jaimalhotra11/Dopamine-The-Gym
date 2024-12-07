import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import CountUp from 'react-countup';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
      alt="Modern gym interior"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50" />
  </div>

  {/* Main Content */}
  <div className="relative flex flex-col items-center justify-between text-white h-full pb-10 px-4">
    {/* Hero Text Section */}
    <div className="text-center space-y-6 max-w-4xl pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        <h2 className="text-[#116DEC] text-sm sm:text-lg md:text-xl font-semibold uppercase tracking-wider">
          Welcome to DOPAMINE
        </h2>
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Feel Good Gym
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-300"
      >
        Where endorphins meet excellence. Transform your body, elevate your mind,
        and join a community that celebrates every victory.
      </motion.p>
    </div>

    {/* Buttons Section */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full flex flex-col sm:flex-row gap-4 justify-center mt-8"
    >
      <button
        onClick={() => navigate('/contact')}
        className="bg-[#116DEC] w-full sm:w-auto px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-blue-700 transition group flex items-center justify-center space-x-2"
      >
        <span>Start Free Trial</span>
        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
      </button>
      <button
        onClick={() => navigate('/virtual-tour')}
        className="bg-white/10 w-full sm:w-auto backdrop-blur-lg border-2 border-white/20 px-4 sm:px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-white hover:text-[#116DEC] transition flex items-center justify-center space-x-2"
      >
        <Play className="h-5 w-5" />
        <span>Watch Video</span>
      </button>
    </motion.div>

    {/* Statistics Section */}
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 1 }}
  className="w-full bg-white/10 backdrop-blur-lg rounded-xl p-4 sm:p-6 mt-8 lg:mt-16"
>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {[
      { label: 'Expert Trainers', value: 50 },
      { label: 'Success Stories', value: 1000 },
      { label: 'Fitness Programs', value: 30 },
      { label: 'Premium Equipment', value: 100 },
    ].map((stat, index) => (
      <div key={index} className="text-center group">
        <div className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-[#116DEC]">
          <CountUp end={stat.value} suffix="+" duration={2.5} />
        </div>
        <div className="text-xs sm:text-sm text-white group-hover:text-[#116DEC] transition">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
</motion.div>
  </div>
</div>


  );
}