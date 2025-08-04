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
  faShield,
  faStar,
  faHeart,
  faTrophy,
  faGift,
  faSparkles,
  faMagic
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
      subtitle: '專業美觀的電子報設計',
      description: '打造符合品牌形象的專業 EDM 視覺設計，提升開信率與點擊率',
      features: [
        '響應式設計，完美適配各種裝置',
        '品牌一致性視覺規劃與色彩搭配',
        '吸睛的視覺層次與排版設計',
        '優化的閱讀體驗與互動元素'
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20',
      borderColor: 'border-purple-200 dark:border-purple-700'
    },
    {
      icon: faChartLine,
      title: 'EDM 策略規劃',
      subtitle: '數據驅動的行銷策略',
      description: '基於數據分析的 EDM 行銷策略，精準觸及目標受眾，提升轉換效果',
      features: [
        '目標受眾深度分析與精準分群',
        '個人化內容策略與發送規劃',
        '最佳發送時機與頻率優化',
        '完整成效追蹤與數據分析報告'
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20',
      borderColor: 'border-blue-200 dark:border-blue-700'
    },
    {
      icon: faUsers,
      title: 'EDM 內容創作',
      subtitle: '引人入勝的內容策劃',
      description: '專業的 EDM 內容創作服務，提升用戶參與度與品牌黏著度',
      features: [
        '吸引人的主旨與標題設計',
        '個人化內容規劃與客製化訊息',
        '強效行動呼籲（CTA）優化',
        '多語言內容支援與在地化'
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      borderColor: 'border-green-200 dark:border-green-700'
    },
    {
      icon: faRocket,
      title: 'EDM 自動化系統',
      subtitle: '智能化行銷自動化',
      description: '建置完整的 EDM 自動化流程，提升行銷效率與客戶體驗',
      features: [
        '智能自動化流程設計與建置',
        '觸發式郵件與行為追蹤設定',
        '完整客戶旅程規劃與優化',
        'A/B 測試與持續效果優化'
      ],
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20',
      borderColor: 'border-orange-200 dark:border-orange-700'
    }
  ];

  const successStories = [
    {
      icon: faTrophy,
      metric: '300%',
      label: '平均開信率提升',
      description: '透過專業設計與策略優化'
    },
    {
      icon: faHeart,
      metric: '85%',
      label: '客戶滿意度',
      description: '超過 50+ 企業客戶好評'
    },
    {
      icon: faStar,
      metric: '24H',
      label: '快速回應時間',
      description: '專業團隊即時支援服務'
    }
  ];

  const pricingPlans = [
    {
      name: '基礎方案',
      price: '8,800',
      period: '月',
      description: '適合小型企業與新創公司',
      features: [
        '每月 2 次 EDM 設計',
        '基礎數據分析報告',
        '響應式設計',
        '7 天修改期',
        '電話與 Email 支援'
      ],
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: '專業方案',
      price: '15,800',
      period: '月',
      description: '最受歡迎的企業選擇',
      features: [
        '每月 4 次 EDM 設計',
        '進階策略規劃',
        'A/B 測試優化',
        '詳細成效分析',
        '優先客服支援',
        '自動化流程設定'
      ],
      popular: true,
      color: 'from-blue-600 to-purple-600'
    },
    {
      name: '企業方案',
      price: '28,800',
      period: '月',
      description: '大型企業專屬服務',
      features: [
        '無限次 EDM 設計',
        '專屬客戶經理',
        '完整自動化系統',
        '即時數據儀表板',
        '24/7 技術支援',
        '客製化整合服務',
        '專業培訓課程'
      ],
      popular: false,
      color: 'from-purple-600 to-pink-600'
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
            {/* Header Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-white/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FontAwesomeIcon icon={faSparkles} className="text-yellow-300" />
              <span className="text-sm font-medium">專業 EDM 行銷服務</span>
            </motion.div>

            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 glow-banner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              EDM 電子報
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                行銷專家
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed glow-text opacity-90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              透過精心設計的電子報行銷，與您的客戶建立持續且有價值的溝通管道，
              <br className="hidden md:block" />
              提升品牌影響力與業務成長
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
                立即開始 EDM 行銷
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

      {/* Success Metrics */}
      <section className="py-16 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FontAwesomeIcon icon={story.icon} className="text-blue-600 dark:text-blue-400" size="lg" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 glow-stats">
                  {story.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {story.label}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {story.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full px-4 py-2 mb-4">
              <FontAwesomeIcon icon={faMagic} />
              <span className="text-sm font-medium">專業服務項目</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 glow-title">
              完整 EDM 解決方案
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
              從策略規劃到執行優化，提供一站式 EDM 電子報行銷服務
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {edmServices.map((service, index) => (
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
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4">核心功能特色：</h4>
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
                    立即諮詢
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
              <FontAwesomeIcon icon={faGift} />
              <span className="text-sm font-medium">彈性方案選擇</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 glow-title">
              選擇適合的方案
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto glow-text">
              根據您的需求選擇最適合的 EDM 服務方案，所有方案都包含專業支援
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden glow-card ${
                  plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                }`}
                variants={fadeInUp}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 text-sm font-semibold">
                    <FontAwesomeIcon icon={faStar} className="mr-1" />
                    最受歡迎
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-sm text-gray-500 dark:text-gray-400">NT$</span>
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">/{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <FontAwesomeIcon 
                          icon={faCheckCircle} 
                          className="text-green-500 mt-1 flex-shrink-0" 
                        />
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <motion.a
                    href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all ${
                      plan.popular
                        ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    選擇此方案
                    <FontAwesomeIcon icon={faArrowRight} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              需要客製化方案？我們提供彈性的企業解決方案
            </p>
            <motion.a
              href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              聯絡我們討論客製方案
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.a>
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
              <span className="text-white text-sm font-medium">立即開始</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 glow-banner">
              準備提升您的
              <br />
              EDM 行銷效果？
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed glow-text">
              讓我們的專業團隊為您量身打造高效的 EDM 行銷策略，
              <br className="hidden md:block" />
              提升品牌影響力與客戶參與度
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
                免費諮詢 EDM 服務
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
                { icon: faCheckCircle, text: '免費策略諮詢' },
                { icon: faCheckCircle, text: '專業團隊服務' },
                { icon: faCheckCircle, text: '滿意度保證' }
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