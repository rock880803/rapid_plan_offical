import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faChartLine, 
  faPalette, 
  faUsers, 
  faRocket,
  faCheckCircle,
  faArrowRight,
  faBullseye,
  faLightbulb,
  faShield
} from '@fortawesome/free-solid-svg-icons';

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

const ServicesPage = () => {
  const edmServices = [
    {
      icon: faPalette,
      title: 'EDM 視覺設計',
      description: '專業的電子報視覺設計，結合品牌識別與行銷目標',
      features: [
        '響應式設計，適配各種裝置',
        '品牌一致性視覺規劃',
        '吸睛的視覺層次設計',
        '優化的閱讀體驗'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: faChartLine,
      title: 'EDM 策略規劃',
      description: '數據驅動的 EDM 行銷策略，提升開信率與轉換率',
      features: [
        '目標受眾分析與分群',
        '內容策略規劃',
        '發送時機優化',
        '成效追蹤與分析'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: faUsers,
      title: 'EDM 內容創作',
      description: '引人入勝的 EDM 內容創作，提升用戶參與度',
      features: [
        '吸引人的主旨設計',
        '個人化內容規劃',
        '行動呼籲優化',
        '多語言內容支援'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: faRocket,
      title: 'EDM 自動化',
      description: '智能化 EDM 自動發送系統，提升行銷效率',
      features: [
        '自動化流程設計',
        '觸發式郵件設定',
        '客戶旅程規劃',
        'A/B 測試優化'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ];

  const edmProcess = [
    {
      step: '01',
      title: '需求分析',
      description: '深入了解您的品牌、目標受眾與行銷目標',
      icon: faBullseye
    },
    {
      step: '02',
      title: '策略規劃',
      description: '制定個人化的 EDM 行銷策略與內容規劃',
      icon: faLightbulb
    },
    {
      step: '03',
      title: '設計製作',
      description: '創作吸引人的 EDM 視覺設計與內容',
      icon: faPalette
    },
    {
      step: '04',
      title: '測試優化',
      description: '進行 A/B 測試，持續優化成效',
      icon: faShield
    }
  ];

  const edmBenefits = [
    '提升品牌知名度與客戶忠誠度',
    '增加網站流量與轉換率',
    '建立長期客戶關係',
    '成本效益高的行銷方式',
    '精準的目標受眾觸及',
    '可量化的行銷成效'
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
            className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl glow-card"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-white" size="lg" />
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 glow-title">
            服務項目
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto glow-text">
            專業的 EDM 電子報行銷服務，幫助您的品牌與客戶建立更緊密的連結
          </p>
        </motion.div>

        {/* EDM Hero Section */}
        <motion.div 
          className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl p-12 text-white text-center mb-16 glow-card"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-6xl mb-6 glow-icon" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 glow-title">EDM 電子報行銷</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed glow-text">
              透過精心設計的電子報，與您的客戶建立持續且有價值的溝通管道，
              提升品牌影響力與業務成長
            </p>
            
            <motion.a
              href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              立即諮詢 EDM 服務
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* EDM Services Grid */}
        <motion.div 
          className="mb-16"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">
              EDM 服務內容
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
              從策略規劃到執行優化，提供完整的 EDM 行銷解決方案
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {edmServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 glow-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FontAwesomeIcon icon={service.icon} className="text-white" size="lg" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed glow-text">
                  {service.description}
                </p>
                
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 flex-shrink-0" />
                      <span className="glow-text">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EDM Process */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">
              EDM 服務流程
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
              專業且系統化的服務流程，確保每個 EDM 專案都能達到最佳效果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {edmProcess.map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg glow-card">
                    <FontAwesomeIcon icon={process.icon} className="text-white" size="lg" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md">
                    {process.step}
                  </div>
                </motion.div>
                
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 glow-subtitle">
                  {process.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed glow-text">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* EDM Benefits */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-8 border border-green-200 dark:border-green-700 glow-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">
                EDM 行銷優勢
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
                選擇我們的 EDM 服務，為您的品牌帶來這些實質效益
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {edmBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 dark:text-green-400 flex-shrink-0" />
                  <span className="glow-text">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-12 shadow-lg glow-card">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 glow-subtitle">
              準備開始您的 EDM 行銷之旅？
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 glow-text">
              讓我們為您量身打造專業的 EDM 行銷策略，提升您的品牌影響力
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
                立即諮詢 EDM 服務
              </motion.a>
              
              <motion.a
                href="tel:+886968838252"
                className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-8 py-3 rounded-lg font-semibold transition-all hover:bg-blue-50 dark:hover:bg-blue-900/30 glow-nav"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                電話諮詢
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesPage;