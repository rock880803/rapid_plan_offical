import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faCalendarAlt, faAward, faUsers, faCoffee } from '@fortawesome/free-solid-svg-icons';

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
const AboutPage = () => {
  const experiences = [
    {
      company: '兵役局 × 台北市政府 城鎮韌性演習系統專案',
      position: '系統整合與前端協作開發',
      duration: '2024 – 現在',
      description: '配合政府跨單位演練專案，參與演習模組的系統設計與資料整合開發。負責前端視覺邏輯建構、使用者互動流程優化，並協助跨部門溝通與技術落地。'
    },
    {
      company: '上銀科技 研發部門',
      position: '專案助理與技術協作',
      duration: '2023',
      description: '於研發部門專案管理、技術文件整理與資料分析，協助推動多項研發流程，強化對製造業研發實務與技術文件撰寫的理解。'
    },
    {
      company: '大學／研究所課程支援',
      position: '技術助教與內容講解',
      duration: '2021 – 2024',
      description: '擔任多門課程技術助教，協助學生理解程式邏輯與實作內容。擅長將複雜技術拆解為具體步驟，並設計輔助教材與簡報，提升學習效率與教學品質。'
    },
    {
      company: 'Freelancer（設計與技術整合）',
      position: '簡報與平面設計案接案經歷',
      duration: '2020 – 現在',
      description: '提供簡報設計、操作手冊、美編與流程規劃服務，曾為政府與企業單位設計視覺素材，擅長結合內容結構與視覺層次，提升資料呈現的專業度與易讀性。'
    }
  ];

  const achievements = [
    { 
      icon: faAward, 
      title: '協助完成「城鎮韌性演習系統」專案',
      description: '配合兵役局與台北市政府，參與城市突發演練系統開發，整合視覺設計與流程模組，協助實作並優化跨部門作業節奏'
    },
    { 
      icon: faUsers, 
      title: '橫跨設計、技術與教學三大領域',
      description: '從 UI 設計、系統前端開發到課程助教與教材製作，累積多樣實務經驗，擅長轉譯複雜資訊、整合多方需求'
    },
    { 
      icon: faCoffee, 
      title: '協作與指導經驗',
      description: '擔任技術助教與專案設計指導者，支援多場教學活動與學生專案，提升團隊理解與執行品質'
    },
    { 
      icon: faCalendarAlt, 
      title: '參與與完成超過 30+ 項跨域專案',
      description: '涵蓋系統開發、簡報設計、技術整合、流程自動化與演練腳本等，具備穩定交付與快速溝通能力'
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
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            關於我
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            深入了解我的背景、經驗和對創造美好數位體驗的熱情
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          {/* Left Column - Personal Info */}
          <motion.div className="lg:col-span-1" variants={fadeInUp}>
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 mb-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-center mb-6">
                <motion.div 
                  className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="/images/profile_photo.jpg" 
                    alt="Alan Huang" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Alan Huang</h2>
                <p className="text-gray-600 dark:text-gray-300">一位專注於創造美好數位體驗的設計師與開發者。我熱愛將創意想法轉化為實際的解決方案。</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span>台北, 台灣</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span>rock880803@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>+886 968 838 252</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">專業成就與里程碑</h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div 
                    key={index} 
                    className="border-l-4 border-blue-600 pl-4 py-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={achievement.icon} className="text-blue-600 dark:text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">{achievement.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Additional Achievement */}
              <motion.div 
                className="mt-8 pt-6 border-t border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="border-l-4 border-green-600 pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FontAwesomeIcon icon={faAward} className="text-green-600 dark:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-1">持續進修與自學實作</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        主動學習前端框架（React）、流程工具（n8n）、視覺設計（ComfyUI），並應用於實際政府與設計專案中
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div className="lg:col-span-2 space-y-8" variants={fadeInUp}>
            {/* Bio */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">我的故事</h3>
              <div className="prose prose-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <p className="mb-4">
                 我是一位重視溝通與整合的工程師，擅長將技術語言與使用者需求之間的鴻溝轉譯成具體的解決方案。從技術實作到跨部門協作，我始終相信：「溝通是技能，整合是價值」。
                </p>
                <p className="mb-4">
                  我目前參與兵役局與台北市政府合作的「城鎮韌性演習系統」專案，負責系統模組設計、流程邏輯規劃與使用者互動視覺呈現。這項專案涉及多單位協同作業與情境模擬腳本建構，要求在有限時間內整合需求、快速迭代並保持資訊清晰，讓我更深刻體會「技術」與「人」之間的橋接價值。
                </p>
                <p className="mb-4">
                 在過去，我曾在上銀科技研發部門實習，參與專案管理與技術文件製作，建立起處理實務問題與團隊溝通的基礎能力。也曾擔任多門課程的技術助教，協助課程教學與製作簡報教材，進一步強化了我整理資訊與協助他人理解的能力。
                </p>
                <p className="mb-4">
                 我喜歡與不同角色合作，工程師、設計師、政策端、公部門窗口，並在他們之間找到共識、建立流程，讓技術成為一種能夠被溝通、被實踐、也能持續演化的工具。
                  
                </p>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">工作經驗</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index} 
                    className="border-l-4 border-blue-600 pl-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.position}</h4>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{exp.duration}</p>
                    <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">技能專長</h3>
              <div className="space-y-8">
                {[
                  {
                    category: '核心能力',
                    description: '專案協調與跨領域整合的核心技能',
                    skills: [
                      '專案管理與跨部門協作',
                      '技術邏輯整合與系統流程規劃',
                      '使用者需求轉譯與問題分析',
                      '簡報設計與資訊視覺化表達',
                      '教學輔助與內容解說'
                    ],
                    color: 'blue'
                  },
                  {
                    category: '程式開發與應用',
                    description: '前端開發與版本控制技術',
                    skills: [
                      'HTML',
                      'CSS',
                      'JavaScript',
                      'Git / GitHub'
                    ],
                    color: 'purple'
                  },
                  {
                    category: '設計與視覺表達',
                    description: '視覺設計與多媒體製作工具',
                    skills: [
                      'PowerPoint',
                      'Google Slides',
                      'Adobe Illustrator',
                      'Adobe PhotoShop',
                      'Davinci Resolve'
                    ],
                    color: 'green'
                  }
                ].map((skillGroup, groupIndex) => (
                  <motion.div
                    key={groupIndex}
                    className={`${
                      skillGroup.color === 'blue' ? 'bg-gradient-to-r from-blue-50 to-blue-50 dark:from-blue-900/20 dark:to-blue-900/20 border border-blue-200 dark:border-blue-700' :
                      skillGroup.color === 'purple' ? 'bg-gradient-to-r from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 border border-purple-200 dark:border-purple-700' :
                      'bg-gradient-to-r from-green-50 to-green-50 dark:from-green-900/20 dark:to-green-900/20 border border-green-200 dark:border-green-700'
                    } rounded-xl p-6`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-6">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{skillGroup.category}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{skillGroup.description}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          className={`bg-white dark:bg-gray-700 rounded-lg px-4 py-2 shadow-sm hover:shadow-md transition-all ${
                            skillGroup.color === 'blue' ? 'border-l-4 border-blue-400' :
                            skillGroup.color === 'purple' ? 'border-l-4 border-purple-400' :
                            'border-l-4 border-green-400'
                          }`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: groupIndex * 0.2 + skillIndex * 0.1 }}
                          whileHover={{ y: -2, scale: 1.05 }}
                        >
                          <span className="font-medium text-gray-900 dark:text-white text-sm">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div 
              className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-xl p-8 text-white text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold mb-4">讓我們一起合作</h3>
              <p className="text-lg mb-6 opacity-90">
                我很樂意聽取您的想法並討論如何將它們變為現實
              </p>
              <motion.a
                href="https://rock83-n8n-free.hf.space/form/9eac0b65-e87c-43f5-949e-93b2c54d8382"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                立即聯絡
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;