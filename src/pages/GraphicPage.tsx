import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faDownload, faImage, faColumns, faPrint, faDesktop } from '@fortawesome/free-solid-svg-icons';
import ContactModal from '../components/ContactModal';

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

const GraphicPage = () => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const graphicProjects = [
    {
      id: 1,
      title: '企業年報設計',
      description: '為科技公司設計的年度報告，結合數據視覺化與現代設計美學',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '印刷設計',
      type: '年報設計',
      client: 'TechCorp Inc.',
      year: '2024',
      tools: ['InDesign', 'Illustrator', 'Photoshop']
    },
    {
      id: 2,
      title: '音樂節海報系列',
      description: '為夏日音樂節設計的視覺識別系列，包含主視覺、海報、周邊商品',
      image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '活動設計',
      type: '海報設計',
      client: 'Summer Beats Festival',
      year: '2024',
      tools: ['Illustrator', 'Photoshop']
    },
    {
      id: 3,
      title: '產品包裝設計',
      description: '為有機茶品牌設計的包裝系列，強調自然與環保理念',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '包裝設計',
      type: '產品包裝',
      client: 'Pure Tea Co.',
      year: '2024',
      tools: ['Illustrator', 'Photoshop', 'Dimension']
    },
    {
      id: 4,
      title: '雜誌版面設計',
      description: '時尚雜誌的版面設計，融合現代排版與視覺層次',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '編輯設計',
      type: '雜誌設計',
      client: 'Style Magazine',
      year: '2023',
      tools: ['InDesign', 'Photoshop']
    },
    {
      id: 5,
      title: '社群媒體視覺',
      description: '為時尚品牌設計的 Instagram 視覺內容，保持一致的品牌調性',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '數位設計',
      type: '社群視覺',
      client: 'Fashion Forward',
      year: '2023',
      tools: ['Photoshop', 'Illustrator', 'After Effects']
    },
    {
      id: 6,
      title: '書籍封面設計',
      description: '文學小說的封面設計，透過視覺元素傳達故事氛圍',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: '出版設計',
      type: '書籍設計',
      client: 'Literary Press',
      year: '2023',
      tools: ['Photoshop', 'Illustrator', 'InDesign']
    }
  ];

  const graphicServices = [
    {
      icon: faPrint,
      title: '印刷設計',
      description: '名片、海報、手冊、包裝設計'
    },
    {
      icon: faDesktop,
      title: '數位設計',
      description: '社群媒體、網頁圖像、數位廣告'
    },
    {
      icon: faColumns,
      title: '版面設計',
      description: '雜誌、書籍、年報版面規劃'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      '印刷設計': 'bg-orange-100 text-orange-600',
      '活動設計': 'bg-purple-100 text-purple-600',
      '包裝設計': 'bg-green-100 text-green-600',
      '編輯設計': 'bg-blue-100 text-blue-600',
      '數位設計': 'bg-pink-100 text-pink-600',
      '出版設計': 'bg-indigo-100 text-indigo-600'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-600';
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
            className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-600 rounded-full mx-auto mb-6 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faImage} className="text-white" size="lg" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            平面設計
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            運用視覺語言傳達訊息，創造具有影響力的設計作品
          </p>
        </motion.div>

        {/* Services Overview */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {graphicServices.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900 dark:to-red-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                <FontAwesomeIcon icon={service.icon} className="text-orange-600 dark:text-white" />
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
          {graphicProjects.map((project, index) => (
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
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Action button */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    className="bg-white text-gray-900 p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                  </motion.button>
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
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">客戶：{project.client}</span>
                    <span className="text-sm text-orange-600 dark:text-orange-400 font-medium">{project.type}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">使用工具</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="bg-orange-50 dark:bg-orange-900 text-orange-600 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium"
                      >
                        {tool}
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
          <div className="bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-700 dark:to-red-700 rounded-xl p-8 text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              需要設計服務？
            </h2>
            <p className="text-lg mb-8 opacity-90">
              讓我們為您的品牌創造令人印象深刻的視覺作品
            </p>
            <motion.a
              onClick={() => setIsContactModalOpen(true)}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              聯絡設計
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default GraphicPage;