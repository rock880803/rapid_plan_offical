import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const FloatingChatbot: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const y = useMotionValue(0);
  
  // 使用 useSpring 創建彈性動畫效果
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 20,
    mass: 1
  });

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - scrollY;
      
      // 根據滾動方向和速度調整位移
      const inertiaOffset = Math.min(Math.max(-scrollDelta * 1, -window.innerHeight * 0.2), window.innerHeight * 0.2);
      y.set(inertiaOffset);
      
      setScrollY(currentScrollY);
      
      // 延遲回到原位
      setTimeout(() => {
        y.set(0);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY, y]);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      style={{ y: springY }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <motion.a
        href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-16 h-16 rounded-full flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title="聯絡我們"
      >
        {/* Background with smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
        <div className="absolute inset-0 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"></div>
        
        {/* Chatbot Icon */}
        <div className="relative z-10 w-8 h-8 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-full h-full drop-shadow-lg"
          >
            <defs>
              <linearGradient id="chatbot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
              <linearGradient id="chatbot-gradient-hover" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F8FAFC" />
              </linearGradient>
            </defs>
            
            {/* Robot Head */}
            <rect 
              x="6" 
              y="6" 
              width="12" 
              height="10" 
              rx="2" 
              fill="url(#chatbot-gradient)" 
              className="group-hover:fill-[url(#chatbot-gradient-hover)] transition-all duration-500 ease-out"
            />
            
            {/* Robot Eyes */}
            <circle 
              cx="9" 
              cy="10" 
              r="1" 
              fill="currentColor" 
              className="text-white group-hover:text-blue-600 transition-colors duration-500 ease-out"
            />
            <circle 
              cx="15" 
              cy="10" 
              r="1" 
              fill="currentColor" 
              className="text-white group-hover:text-blue-600 transition-colors duration-500 ease-out"
            />
            
            {/* Robot Mouth */}
            <path 
              d="M10 13h4" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              className="text-white group-hover:text-blue-600 transition-colors duration-500 ease-out"
            />
            
            {/* Robot Antenna */}
            <line 
              x1="12" 
              y1="6" 
              x2="12" 
              y2="4" 
              stroke="url(#chatbot-gradient)" 
              strokeWidth="2" 
              strokeLinecap="round" 
              className="group-hover:stroke-[url(#chatbot-gradient-hover)] transition-all duration-500 ease-out"
            />
            <circle 
              cx="12" 
              cy="3" 
              r="1" 
              fill="url(#chatbot-gradient)" 
              className="group-hover:fill-[url(#chatbot-gradient-hover)] transition-all duration-500 ease-out"
            />
            
            {/* Robot Body */}
            <rect 
              x="8" 
              y="16" 
              width="8" 
              height="4" 
              rx="1" 
              fill="url(#chatbot-gradient)" 
              className="group-hover:fill-[url(#chatbot-gradient-hover)] transition-all duration-500 ease-out"
            />
            
            {/* Robot Arms */}
            <rect 
              x="4" 
              y="12" 
              width="2" 
              height="6" 
              rx="1" 
              fill="url(#chatbot-gradient)" 
              className="group-hover:fill-[url(#chatbot-gradient-hover)] transition-all duration-500 ease-out"
            />
            <rect 
              x="18" 
              y="12" 
              width="2" 
              height="6" 
              rx="1" 
              fill="url(#chatbot-gradient)" 
              className="group-hover:fill-[url(#chatbot-gradient-hover)] transition-all duration-500 ease-out"
            />
          </svg>
        </div>
        
        {/* Tooltip */}
        <div className="absolute left-full ml-3 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out whitespace-nowrap pointer-events-none z-20">
          聯絡我們
          <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"></div>
        </div>
      </motion.a>
    </motion.div>
  );
};

export default FloatingChatbot;