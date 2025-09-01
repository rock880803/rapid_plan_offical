import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPalette, 
  faCode, 
  faVideo,
  faCheckCircle,
  faArrowRight,
  faBullseye,
  faLightbulb,
  faShield,
  faStar,
  faHeart,
  faTrophy,
  faGift,
  faMagic,
  faRocket,
  faUsers,
  faChartLine,
  faCog,
  faDesktop,
  faMobile,
  faPrint
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
  const mainServices = [
    {
      icon: faPalette,
      title: '品牌設計服務',
      subtitle: '打造獨特品牌識別',
      description: '從 Logo 設計到完整視覺識別系統，為您的品牌創造獨特且具有影響力的視覺形象，讓品牌在市場中脫穎而出。',
      features: [
        'Logo 設計與品牌識別系統',
        '企業視覺規範手冊制定',
        '品牌應用設計（名片、文宣品）',
        '品牌策略諮詢與定位'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
      icon: faCode,
      title: '網站開發服務',
      subtitle: '專業網站建置與維護',
      description: '提供響應式網站設計、網頁應用程式開發，以及完整的技術支援服務，確保您的數位平台穩定運行。',
      features: [
        '響應式網站設計與開發',
        '電商平台建置與整合',
        '網站維護與技術支援',
        'SEO 優化與效能提升'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    {
      icon: faPrint,
      title: '平面設計服務',
      subtitle: '專業視覺設計解決方案',
      description: '涵蓋印刷品設計、數位媒體設計等多元化平面設計服務，為您的行銷活動提供強力的視覺支援。',
      features: [
        '海報、傳單、手冊設計',
        '包裝設計與產品視覺',
        '社群媒體視覺內容',
        '展覽活動視覺規劃'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-700'
    },
    {
      icon: faVideo,
      title: '影片製作服務',
      subtitle: '專業影音內容創作',
      description: '從企業形象影片到產品宣傳片，提供完整的影片製作服務，幫助您的品牌故事生動呈現。',
      features: [
        '企業形象影片製作',
        '產品介紹與宣傳影片',
        '活動紀錄與剪輯',
        '動畫製作與後製特效'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    }
  ];

  const companyAdvantages = [
    {
      icon: faTrophy,
      title: '專業經驗',
      description: '多年設計與開發經驗，服務過各行各業客戶'
    },
    {
      icon: faRocket,
      title: '快速交付',
      description: '高效的工作流程，確保專案準時完成'
    },
    {
      icon: faHeart,
      title: '客戶至上',
      description: '以客戶需求為核心，提供貼心的服務體驗'
    },
    {
      icon: faShield,
      title: '品質保證',
      description: '嚴格的品質控制，確保每個作品都達到最高標準'
    },
    {
      icon: faUsers,
      title: '團隊合作',
      description: '跨領域專業團隊，提供全方位的解決方案'
    },
    {
      icon: faStar,
      title: '創新思維',
      description: '持續關注最新趋势，為客戶提供創新的設計方案'
    }
  ];

  const workProcess = [
    {
      step: '01',
      title: '需求分析',
      description: '深入了解客戶需求與目標',
      icon: faLightbulb
    },
    {
      step: '02',
      title: '方案規劃',
      description: '制定詳細的執行計畫',
      icon: faBullseye
    },
    {
      step: '03',
      title: '設計執行',
      description: '專業團隊進行創作與開發',
      icon: faCog
    },
    {
      step: '04',
      title: '成果交付',
      description: '完成品質檢核並交付成果',
      icon: faCheckCircle
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900">
      {/* EDM Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Company Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faMagic} className="text-yellow-300" />
              <span className="text-sm font-medium">Rapid Plan 專業服務</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 glow-banner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              我們的
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                專業服務
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed glow-text opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              從品牌設計到網站開發，從平面設計到影片製作，
              <br className="hidden md:block" />
              我們提供全方位的數位創意解決方案
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.a
                href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faRocket} className="mr-2" />
                立即諮詢服務
              </motion.a>
              
              <motion.a
                href="#services"
                className="border-2 border-white/50 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                了解服務內容
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full px-4 py-2 mb-4">
              <FontAwesomeIcon icon={faUsers} />
              <span className="text-sm font-medium">關於 Rapid Plan</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 glow-title">
              專業團隊，創新服務
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed glow-text">
              Rapid Plan 致力於為企業提供全方位的數位創意服務。我們擁有專業的設計與開發團隊，
              結合創新思維與豐富經驗，為每位客戶量身打造最適合的解決方案。
              從品牌識別到數位平台，我們協助企業在競爭激烈的市場中建立獨特的品牌形象。
            </p>
          </motion.div>

          {/* Company Advantages */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {companyAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center glow-card"
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
                  transition: { 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25,
                    mass: 0.8
                  }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { 
                    type: "spring", 
                    stiffness: 600, 
                    damping: 30 
                  }
                }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300,
                  damping: 25
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.15, 
                    rotate: 5,
                    transition: { 
                      type: "spring", 
                      stiffness: 500, 
                      damping: 20 
                    }
                  }}
                >
                  <FontAwesomeIcon 
                    icon={advantage.icon} 
                    className="text-blue-600 dark:text-blue-400 transition-colors duration-300" 
                  />
                </div>
                <motion.h3 
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-2 glow-subtitle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  {advantage.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600 dark:text-gray-300 text-sm glow-text leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  {advantage.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full px-4 py-2 mb-4">
              <FontAwesomeIcon icon={faMagic} />
              <span className="text-sm font-medium">核心服務項目</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 glow-title">
              我們提供的專業服務
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
              四大核心服務領域，為您的企業提供完整的數位創意解決方案
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${service.bgColor} border ${service.borderColor} p-8 glow-card`}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Service Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <FontAwesomeIcon icon={service.icon} className="text-white" size="lg" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 glow-subtitle">
                      {service.title}
                    </h3>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed glow-text">
                      {service.description}
                    </p>
                  </div>
                </div>
                
                {/* Service Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">服務內容包含：</h4>
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + featureIndex * 0.05 }}
                    >
                      <FontAwesomeIcon 
                        icon={faCheckCircle} 
                        className="text-green-500 mt-1 flex-shrink-0" 
                      />
                      <span className="text-gray-700 dark:text-gray-300 glow-text">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Button */}
                <motion.div className="mt-8">
                  <motion.a
                    href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    了解更多
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full px-4 py-2 mb-4">
              <FontAwesomeIcon icon={faCog} />
              <span className="text-sm font-medium">工作流程</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 glow-title">
              專業的服務流程
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
              透過標準化的工作流程，確保每個專案都能達到最佳成果
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {workProcess.map((process, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={process.icon} className="text-white" size="lg" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 glow-subtitle">
                  {process.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 glow-text">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-700 dark:via-purple-700 dark:to-pink-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30">
              <FontAwesomeIcon icon={faRocket} className="text-yellow-300" />
              <span className="text-white text-sm font-medium">開始合作</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-banner">
              準備開始您的
              <br />
              數位創意專案？
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed glow-text">
              讓 Rapid Plan 專業團隊為您提供量身打造的創意解決方案，
              <br className="hidden md:block" />
              一起創造令人驚艷的成果
            </p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 sm:gap-4 justify-center items-center"
            >
              <motion.a
                href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-xl hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                立即聯絡我們
              </motion.a>
              
              <motion.a
                href="tel:+886968838252"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                電話諮詢：0968-838-252
              </motion.a>
            </motion.div>

            <motion.div 
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {[
                { icon: faCheckCircle, text: '免費初步諮詢' },
                { icon: faCheckCircle, text: '專業團隊服務' },
                { icon: faCheckCircle, text: '品質滿意保證' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-2 text-white/90">
                  <FontAwesomeIcon icon={item.icon} className="text-green-300" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;