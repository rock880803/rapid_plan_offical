import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faLightbulb, faBullseye, faShield, faUsers, faAward, faZap, faChevronDown, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { projectsData } from '../data/projectsData';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const smoothFadeInUp = {
  initial: { opacity: 0, y: 80 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
};

const cardHover = {
  y: -10,
  scale: 1.02,
  transition: { type: "spring", stiffness: 300, damping: 20 }
};

// 核心價值卡片專用動畫
const coreValueCardAnimation = {
  initial: { opacity: 0, y: 40, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { 
    duration: 0.6, 
    ease: [0.25, 0.46, 0.45, 0.94],
  }
};

const coreValueHover = {
  y: -8,
  scale: 1.02,
  transition: { 
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
};

const iconHover = {
  scale: 1.1,
  rotate: 5,
  transition: { 
    duration: 0.3,
    ease: [0.25, 0.46, 0.45, 0.94]
  }
};

const HomePage = () => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  
  // 視差滾動變換
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const cardY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  // 精選專案 (取前3個專案作為精選)
  const featuredProjects = projectsData.slice(0, 3);

  const getCategoryColor = (category: string) => {
    const colors = {
      'web': 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400',
      'branding': 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400',
      'development': 'bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400';
  };

  const getCategoryName = (category: string) => {
    const names = {
      'web': '網頁設計',
      'branding': '品牌設計',
      'development': '開發專案'
    };
    return names[category as keyof typeof names] || category;
  };

  return (
    <div className="min-h-screen">
      {/* Video Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/logo-display.mp4" type="video/mp4" />
          </video>
          {/* Video Overlay */}
          <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
          {/* Bottom Fade Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-gray-900 to-transparent"></div>
        </div>
        
        {/* Minimal Content */}
        <motion.div 
          className="relative z-10 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-4 tracking-tight glow-brand"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Rapid Plan
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 tracking-wide glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            創新數位體驗
          </motion.p>
        </motion.div>
        
        {/* Floating Down Arrow */}
        <motion.div 
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <motion.div 
            className="w-12 h-12 border-2 border-white/70 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/20 hover:border-white transition-all backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              const nextSection = document.getElementById('main-content');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <FontAwesomeIcon icon={faChevronDown} className="text-white" />
          </motion.div>
        </motion.div>
      </section>

      {/* Main Content Section */}
      <section id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 dark:text-white">
        <motion.div 
          className="text-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div className="mb-8" variants={fadeInUp}>
            <motion.div 
              className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mx-auto mb-8 flex items-center justify-center shadow-2xl glow-card overflow-hidden"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img 
                src="/images/logo_transparent.png" 
                alt="Rapid Plan Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight glow-title"
            variants={fadeInUp}
          >
            <span className="block text-3xl md:text-5xl tracking-wide text-gray-700 dark:text-gray-300 glow-subtitle">創新數位體驗</span>
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed tracking-wide glow-text"
            variants={fadeInUp}
          >
            我們專注於為企業打造卓越的數位解決方案，結合創新設計與先進技術，
            幫助您的品牌在數位時代中脫穎而出。
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl glow-button"
              >
                探索我們的專案
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-4 rounded-xl font-semibold transition-all flex items-center gap-2 hover:bg-blue-50 dark:hover:bg-blue-900/30 glow-nav"
              >
                了解我們
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Company Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">我們的核心價值</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed tracking-wide glow-text">
            以創新思維和專業技術為基礎，為客戶創造真正有價值的數位體驗
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {[
            {
              icon: faLightbulb,
              title: '創新思維',
              description: '持續探索新技術與設計趨勢，為客戶提供前瞻性的解決方案',
              color: 'from-yellow-400 to-orange-500'
            },
            {
              icon: faBullseye,
              title: '精準執行',
              description: '深入理解客戶需求，制定明確目標，確保每個專案都能達到預期效果',
              color: 'from-blue-400 to-cyan-500'
            },
            {
              icon: faShield,
              title: '品質保證',
              description: '嚴格的品質控制流程，確保交付的每個產品都符合最高標準',
              color: 'from-green-400 to-emerald-500'
            }
          ].map((value, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center glow-card"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FontAwesomeIcon icon={value.icon} className="text-white dark:text-white glow-icon" size="lg" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 tracking-wide glow-subtitle">{value.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide glow-text">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative">
        {/* 品牌設計橫幅 */}
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center z-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div 
            className="relative z-10 text-center text-white px-4"
            style={{ y: useTransform(scrollYProgress, [0, 1], ['0%', '50%']) }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 glow-banner"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              品牌設計
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto glow-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              打造獨特的品牌識別，從 Logo 設計到完整的視覺系統
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio/branding"
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all"
              >
                探索品牌作品
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 網站開發橫幅 */}
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center z-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div 
            className="relative z-10 text-center text-white px-4"
            style={{ y: useTransform(scrollYProgress, [0.3, 1], ['0%', '50%']) }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 glow-banner"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              網站開發
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto glow-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              響應式網站與網頁應用程式開發，提供優質的使用者體驗
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio/development"
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all"
              >
                探索開發作品
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 平面設計橫幅 */}
        <motion.div 
          className="sticky top-0 h-screen flex items-center justify-center z-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          <motion.div 
            className="relative z-10 text-center text-white px-4"
            style={{ y: useTransform(scrollYProgress, [0.6, 1], ['0%', '50%']) }}
          >
            <motion.h2 
              className="text-5xl md:text-7xl font-bold mb-6 glow-banner"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              平面設計
            </motion.h2>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto glow-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              專業的平面設計服務，涵蓋印刷與數位媒體設計
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/portfolio/graphic"
                className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all"
              >
                探索設計作品
                <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-12 text-white text-center glow-card"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight glow-title">數字會說話</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide glow-text">
            我們用實際成果證明專業實力
          </p>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { number: '50+', label: '完成專案' },
              { number: '30+', label: '滿意客戶' },
              { number: '5+', label: '年經驗' },
              { number: '100%', label: '準時交付' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                variants={smoothFadeInUp}
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
      </section>

      {/* Featured Work Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 dark:text-white">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">精選作品展示</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide glow-text">展示我們為客戶創造的優秀成果</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group glow-card"
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                
                {/* 滑動遮罩效果 */}
                <div className="absolute inset-0 bg-black/60 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
                
                {/* 查看詳情按鈕 */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      to={`/portfolio/project/${project.id}`}
                      className="bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-lg hover:bg-white transition-all shadow-lg font-semibold flex items-center gap-2"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      查看詳情
                    </Link>
                  </motion.div>
                </div>
                
                {/* Overlay with category */}
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(project.category)} px-3 py-1 rounded-full text-sm font-medium`}>
                    {getCategoryName(project.category)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <Link to={`/portfolio/project/${project.id}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 tracking-wide glow-subtitle hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed tracking-wide glow-text">{project.description}</p>
                
                {/* 技術標籤 */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl glow-button"
            >
              查看完整專案
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-900 dark:from-gray-950 dark:to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 glow-title">
              準備開始您的數位轉型之旅？
            </h2>
            <p className="text-xl text-gray-300 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide glow-text">
              讓我們一起討論如何為您的企業創造卓越的數位體驗
            </p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-center"
            >
              <motion.a
                href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
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
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 dark:hover:text-gray-900 transition-all glow-nav"
                >
                  了解更多
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;