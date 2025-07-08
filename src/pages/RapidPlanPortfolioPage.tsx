import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projectsData } from '../data/projectsData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { 
    duration: 0.8, 
    ease: [0.25, 0.46, 0.45, 0.94],
    type: "spring",
    stiffness: 100,
    damping: 15
  }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const RapidPlanPortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: '全部專案' },
    { id: '品牌設計', name: '品牌設計' },
    { id: '平面設計', name: '平面設計' },
    { id: '專案開發', name: '專案開發' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  const getCategoryColor = (category: string) => {
    const colors = {
      '品牌設計': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      '平面設計': 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400',
      '專案開發': 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
  };

  const getCategoryName = (category: string) => {
    return category;
  };

  return (
    <div className="min-h-screen py-20 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl glow-card overflow-hidden"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img 
              src="/images/logo_transparent.png" 
              alt="Rapid Plan Logo" 
              className="w-full h-full object-contain"
            />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 glow-title">
            Rapid Plan 專案作品
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto glow-text">
            展示我們在設計與開發領域的創作成果，每個專案都代表著我們對品質和創新的追求
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <motion.button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg glow-button'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 glow-card'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group glow-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -12,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25,
                    duration: 0.4
                  }
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 15
                }}
                layout
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* 滑動遮罩效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  
                  {/* 專案分類標籤 */}
                  <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-105">
                    <span className={`${getCategoryColor(project.category)} px-3 py-1 rounded-full text-sm font-medium`}>
                      {getCategoryName(project.category)}
                    </span>
                  </div>

                  {/* 專案狀態標籤 */}
                  <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-105">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === '已上線' ? 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300' :
                      project.status === '開發中' ? 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300' :
                      'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* 查看詳情按鈕 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 delay-300">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2,
                        transition: { type: "spring", stiffness: 400, damping: 25 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{ 
                        y: 0, 
                        opacity: 1,
                        transition: { delay: 0.3, duration: 0.4 }
                      }}
                    >
                      <Link
                        to={`/portfolio/project/${project.id}`}
                        className="bg-white/95 backdrop-blur-md text-gray-900 px-6 py-3 rounded-lg hover:bg-white transition-all duration-300 shadow-xl font-semibold flex items-center gap-2 border border-white/20"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                        查看詳情
                      </Link>
                    </motion.div>
                  </div>

                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link to={`/portfolio/project/${project.id}`}>
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 cursor-pointer glow-subtitle">
                          {project.title}
                        </h3>
                      </Link>
                    </motion.div>
                    <motion.span 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {project.year}
                    </motion.span>
                  </div>
                  
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-4 glow-text leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  {/* 專案資訊 */}
                  <motion.div 
                    className="mb-4"
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                      <span>客戶：{project.client}</span>
                      <span>{project.timeline}</span>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      團隊規模：{project.teamSize} 人 | 角色：{project.role}
                    </div>
                  </motion.div>
                  
                  {/* 技術標籤 */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2,
                          backgroundColor: "rgb(59 130 246 / 0.2)"
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.1 + techIndex * 0.05 }
                        }}
                      >
                        {project.title}
                      </motion.span>
                    ))}
                    {project.technologies.length > 3 && (
                      <motion.span 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ 
                          opacity: 1, 
                          scale: 1,
                          transition: { delay: index * 0.1 + 0.3 }
                        }}
                      >
                        +{project.technologies.length - 3}
                      </motion.span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* 專案統計 */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-12 text-white text-center glow-card"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight glow-title">專案成果統計</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide glow-text">
            用數據展現我們的專業實力與客戶滿意度
          </p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { number: `${projectsData.length}+`, label: '完成專案' },
              { number: '98%', label: '客戶滿意度' },
              { number: '100%', label: '準時交付' },
              { number: '24/7', label: '技術支援' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl md:text-4xl font-bold mb-2 glow-stats"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15, 
                    type: "spring", 
                    stiffness: 200,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg opacity-90 tracking-wide glow-text">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-lg glow-card">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">
              有想法想要實現？
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 glow-text">
              我們很樂意和您討論新的專案機會，讓我們一起創造令人驚艷的數位體驗
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl glow-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                立即聯絡我們
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30 glow-nav"
                >
                  了解更多
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RapidPlanPortfolioPage;