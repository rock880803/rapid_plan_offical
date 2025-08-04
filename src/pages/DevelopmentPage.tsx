import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faCode, faMobile, faGlobe, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import ProjectImage from '../components/ProjectImage';

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
  id: 3,
  title: '臺科大國手計畫宣傳影片',
  description: '將國手在計劃期間內的成果紀實，以影音形式呈現精神與亮點',
  image: 'https://images.pexels.com/photos/5864277/pexels-photo-5864277.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'video',
  technologies: ['DaVinci Resolve', '影片剪輯', 'AI 音樂創作'],
  features: [
    '影片腳本與畫面分鏡',
    '剪輯與視覺節奏設計',
    'AI 音樂音效創作與混音',
    '支援社群與簡報播放格式'
  ],
  liveUrl: '',
  githubUrl: '',
  status: '已交付'
},
    {
  id: 4,
  title: '臺科大國手計畫三折頁',
  description: '簡介國手計畫需知事項，透過創意時間線與版面配置，提升閱讀與記憶效率',
  image: 'https://images.pexels.com/photos/2649473/pexels-photo-2649473.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'graphic',
  technologies: ['Adobe Illustrator', '排版設計', '燙金 CK-11', 'A4 雙面雪銅上霧'],
  features: [
    '三折頁版面設計',
    '多時間線圖示創意表現',
    '燙金應用與紙材規劃',
    '重要資訊可視化與分區設計'
  ],
  liveUrl: '',
  githubUrl: '',
  status: '已交付'
},
   {
  id: 5,
  title: '臺科大電子系 50 週年懷舊影片',
  description: '以敘事節奏與懷舊素材，紀錄電子系 50 年發展歷程，融合音樂與影像創造回憶感',
  image: 'https://images.pexels.com/photos/1670176/pexels-photo-1670176.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'video',
  technologies: ['Davinci Resolve', 'AI 音樂創作', 'Photoshop'],
  features: [
    '首尾呼應式影片節奏',
    '懷舊照片掃描與後製',
    'AI 音樂節奏配合畫面',
    '時間軸敘事剪輯風格'
  ],
  liveUrl: '',
  githubUrl: '',
  status: '已交付'
},
    {
  id: 6,
  title: '互動式情境模擬系統',
  description: '協助臺北市政府及外部廠商開發系統，在大螢幕即時展示演習流程，實現無腳本演練',
  image: 'https://images.pexels.com/photos/2566582/pexels-photo-2566582.jpeg?auto=compress&cs=tinysrgb&w=800',
  category: 'web',
  technologies: ['HTML', 'CSS', '模組化 Web 應用架構',
  '互動式地圖 API',
  'Canvas 與 SVG 資料視覺化技術'], 
  features: [
    '直覺操作：雙擊新增、拖曳移動、點選編輯，簡單好上手',
    '動態呈現：依現場推演及模擬之狀況，及時以圖資呈現，讓閱讀或管覽者應易於理解',
    '圖層管理：支援多圖層編輯，方便分類與整理各種推演及模擬元素',
    '圖形標記：可自由拖曳與繪製圓形、矩形、路線、不規則區域與文字標籤，於動態圖資上即時標註，掌握重要區域及位置',
    '時間軸事件：可依時間規劃行動項目、標示重要狀況',
    '更多其他客製化功能'
    
  ],
  liveUrl: '',
  githubUrl: '',
  status: '測試中' 
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
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  showPlaceholderText={true}
                />
                
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