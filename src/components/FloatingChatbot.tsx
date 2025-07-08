import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const FloatingChatbot: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 延遲 2 秒後顯示浮動按鈕
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 滑入動畫變體
  const slideVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.8
      }
    },
    exit: {
      x: -100,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  };

  // 脈衝動畫變體
  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-6 z-50"
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            variants={pulseVariants}
            animate={!isHovered ? "pulse" : ""}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <motion.a
              href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 overflow-hidden"
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { 
                  scale: { duration: 0.2 },
                  rotate: { duration: 0.6, ease: "easeInOut" }
                }
              }}
              whileTap={{ scale: 0.9 }}
              title="聯絡我們"
            >
              {/* 背景光暈效果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm scale-110"></div>
              
              {/* 聊天機器人圖標 */}
              <FontAwesomeIcon 
                icon={faComments} 
                className="text-white text-xl relative z-10" 
              />
              
              {/* 持續脈衝動畫環 */}
              <motion.div 
                className="absolute inset-0 rounded-full border-2 border-white/30"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.6, 0, 0.6]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut"
                }}
              />
              
              {/* 懸停時的擴散效果 */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-white/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ 
                  scale: 1.5, 
                  opacity: [0, 0.3, 0],
                  transition: { duration: 0.6 }
                }}
              />
              
              {/* 工具提示 */}
              <motion.div 
                className="absolute left-full ml-4 px-4 py-2 bg-gray-900/90 dark:bg-gray-700/90 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap pointer-events-none shadow-lg"
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  transition: { delay: 0.3, duration: 0.2 }
                }}
              >
                聯絡我們
                <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900/90 dark:bg-gray-700/90 rotate-45"></div>
              </motion.div>
            </motion.a>
          </motion.div>
          
          {/* 底部提示文字 */}
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap opacity-0"
            animate={{ 
              opacity: [0, 1, 1, 0],
              y: [10, 0, 0, -10]
            }}
            transition={{ 
              duration: 3,
              delay: 1,
              times: [0, 0.2, 0.8, 1]
            }}
          >
            有問題嗎？點我聯絡！
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingChatbot;