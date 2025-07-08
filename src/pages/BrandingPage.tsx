import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faPalette, faBullseye, faAward } from '@fortawesome/free-solid-svg-icons';
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

const BrandingPage = () => {
  const brandingProjects = [
    {
      id: 1,
      title: '咖啡品牌識別設計',
      description: '為新興精品咖啡品牌打造完整的視覺識別系統，包含 Logo、包裝設計、店面視覺等',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '品牌識別',
      deliverables: ['Logo 設計', '品牌指南', '包裝設計', '店面視覺'],
      client: 'Artisan Coffee Co.',
      year: '2024'
    },
    {
      id: 2,
      title: '科技新創品牌重塑',
      description: '協助 AI 科技公司重新定義品牌形象，創造現代且具科技感的視覺語言',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '品牌重塑',
      deliverables: ['品牌策略', 'Logo 重設計', '網站視覺', '行銷素材'],
      client: 'TechFlow AI',
      year: '2024'
    },
    {
      id: 3,
      title: '有機食品品牌設計',
      description: '為有機農產品公司設計自然、健康的品牌形象，強調永續與環保理念',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '品牌識別',
      deliverables: ['Logo 設計', '包裝系列', '品牌應用', '環保材質'],
      client: 'Green Harvest',
      year: '2023'
    },
    {
      id: 4,
      title: '時尚品牌視覺設計',
      description: '為獨立時尚品牌創造優雅且具現代感的視覺識別，展現品牌的獨特個性',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '時尚品牌',
      deliverables: ['品牌識別', '服裝標籤', '購物袋設計', '社群視覺'],
      client: 'Minimal Studio',
      year: '2023'
    },
    {
      id: 5,
      title: '餐廳品牌整體規劃',
      description: '為高端餐廳設計完整的品牌體驗，從 Logo 到菜單設計，營造一致的用餐氛圍',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '餐飲品牌',
      deliverables: ['品牌識別', '菜單設計', '店面裝潢', '制服設計'],
      client: 'Fusion Bistro',
      year: '2023'
    },
    {
      id: 6,
      title: '健身品牌視覺系統',
      description: '為健身中心打造充滿活力的品牌形象，激發運動熱忱與健康生活態度',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '運動品牌',
      deliverables: ['Logo 設計', '會員卡設計', '器材標識', '空間視覺'],
      client: 'PowerFit Gym',
      year: '2022'
    }
  ];

  const brandingServices = [
    {
      icon: faPalette,
      title: '品牌識別設計',
      description: 'Logo 設計、色彩規劃、字體選擇'
    },
    {
      icon: faBullseye,
      title: '品牌策略規劃',
      description: '市場定位、目標受眾、品牌個性'
    },
    {
      icon: faAward,
      title: '品牌應用設計',
      description: '名片、包裝、網站、行銷素材'
    }
  ];

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
            className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faPalette} className="text-white" size="lg" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            品牌設計
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            創造獨特且具有影響力的品牌識別，讓您的品牌在市場中脫穎而出
          </p>
        </motion.div>

        {/* Services Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {brandingServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} className="text-purple-600 dark:text-white" />
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
          {brandingProjects.map((project, index) => (
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
                
                {/* Overlay with category */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{project.year}</span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-900 dark:text-white mb-2">客戶：{project.client}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((item, itemIndex) => (
                      <span
                        key={itemIndex}
                        className="bg-purple-50 dark:bg-purple-900 text-purple-600 dark:text-purple-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 text-white py-2 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 dark:hover:from-purple-800 dark:hover:to-pink-800 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  查看詳情
                </motion.button>
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
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-700 dark:to-pink-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              準備打造您的品牌？
            </h2>
            <p className="text-lg mb-8 opacity-90">
              讓我們一起創造令人難忘的品牌體驗
            </p>
            <motion.a
              href="mailto:your.email@example.com"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              開始合作
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BrandingPage;