import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faMobile, faGlobe, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const DevelopmentPage = () => {
  const developmentProjects = [
   {
  id: 1,
  title: '臺科大國手計畫 LOGO',
  description: '國際技能競賽「臺科大國手計畫」專屬識別設計，展現專業與國際感',
  image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800', // ✅ 可替換為實際 LOGO 縮圖網址
  category: '品牌設計',
  technologies: ['Adobe Illustrator'],
  features: ['品牌識別設計', 'Logo 設計', '視覺一致性', '活動應用場景'],
  liveUrl: 'https://example.com',
  githubUrl: 'https://github.com/example',
  status: '已交付'
}
    {
      id: 2,
      title: '任務管理系統',
      description: '團隊協作的任務管理和專案追蹤系統，支援即時協作和進度監控',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'SaaS 平台',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      features: ['即時協作', '甘特圖', '時間追蹤', '報表分析'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: '開發中'
    },
    {
      id: 3,
      title: '健身追蹤 App',
      description: '幫助使用者記錄運動數據和制定健身計劃的移動應用程式',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '移動應用',
      technologies: ['React Native', 'Firebase', 'Redux'],
      features: ['運動記錄', '計劃制定', '進度追蹤', '社群分享'],
      liveUrl: 'https://example.com',
      status: '已上線'
    },
    {
      id: 4,
      title: '線上學習平台',
      description: '提供課程管理、影片播放、作業提交、成績管理的完整學習管理系統',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'EdTech',
      technologies: ['Next.js', 'Prisma', 'MySQL', 'AWS'],
      features: ['課程管理', '影片串流', '互動測驗', '證書系統'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/example',
      status: '已上線'
    },
    {
      id: 5,
      title: '房地產搜尋平台',
      description: '整合地圖搜尋、篩選條件、虛擬看房等功能的房地產平台',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Web 應用',
      technologies: ['Angular', 'Django', 'PostgreSQL', 'Google Maps'],
      features: ['地圖搜尋', '進階篩選', '虛擬導覽', '價格分析'],
      liveUrl: 'https://example.com',
      status: '已上線'
    },
    {
      id: 6,
      title: '庫存管理系統',
      description: '為中小企業設計的庫存管理和進銷存系統，支援多倉庫管理',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'ERP 系統',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
      features: ['多倉庫管理', '自動補貨', '報表分析', 'API 整合'],
      githubUrl: 'https://github.com/example',
      status: '維護中'
    }
  ];

  const developmentServices = [
    {
      icon: faGlobe,
      title: '網頁應用開發',
      description: '響應式網站、SPA、PWA 開發'
    },
    {
      icon: faMobile,
      title: '移動應用開發',
      description: 'iOS、Android 原生及跨平台應用'
    },
    {
      icon: faDatabase,
      title: '後端系統開發',
      description: 'API 設計、資料庫架構、雲端部署'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case '已上線': return 'bg-green-100 text-green-600';
      case '開發中': return 'bg-blue-100 text-blue-600';
      case '維護中': return 'bg-yellow-100 text-yellow-600';
      default: return 'bg-gray-100 text-gray-600';
    }
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
            className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mx-auto mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faCode} className="text-white" size="lg" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            專案開發
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            運用現代技術打造高效能、可擴展的數位解決方案
          </p>
        </motion.div>

        {/* Services Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {developmentServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900 dark:to-cyan-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} className="text-blue-600 dark:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {developmentProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
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
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                
                {/* Overlay with category and status */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span className="bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Action buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FontAwesomeIcon icon={faGithub} size="sm" />
                    </motion.a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">主要功能</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">技術棧</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-700 dark:to-cyan-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              有開發需求？
            </h2>
            <p className="text-lg mb-8 opacity-90">
              讓我們討論如何將您的想法變成現實
            </p>
            <motion.a
              href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              開始專案
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DevelopmentPage;