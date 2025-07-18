import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence, useMotionValue, useTransform, PanInfo, useSpring } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowLeft, 
  faExternalLinkAlt, 
  faCalendarAlt, 
  faUsers, 
  faClock, 
  faCheckCircle,
  faLightbulb,
  faTools,
  faTrophy,
  faQuoteLeft,
  faChevronLeft,
  faChevronRight,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { getProjectById, getRelatedProjects } from '../data/projectsData';
import ProjectImage from '../components/ProjectImage';
import IframeEmbed from '../components/IframeEmbed';

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

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [dragDirection, setDragDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // 用於拖拽手勢的motion values
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-150, 0, 150], [0.7, 1, 0.7]);
  const scale = useTransform(x, [-150, 0, 150], [0.95, 1, 0.95]);
  
  // 使用 spring 動畫讓拖拽更順暢
  const springX = useSpring(x, { 
    stiffness: 400, 
    damping: 40,
    mass: 0.8
  });
  
  if (!id) {
    return <Navigate to="/portfolio" replace />;
  }

  const project = getProjectById(parseInt(id));
  
  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  const relatedProjects = getRelatedProjects(project.id, project.category);

  const getCategoryColor = (category: string) => {
    const colors = {
      '品牌設計': 'from-purple-500 to-pink-500',
      '平面設計': 'from-green-500 to-emerald-500',
      '專案開發': 'from-blue-500 to-cyan-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryName = (category: string) => {
    return category;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
    setDragDirection(1);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
    setDragDirection(-1);
  };

  // 處理拖拽結束
  const handleDragEnd = (event: any, info: PanInfo) => {
    setIsDragging(false);
    const threshold = 80;
    const velocity = Math.abs(info.velocity.x);
    
    // 考慮速度和距離
    if (info.offset.x > threshold) {
      prevImage();
    } else if (info.offset.x < -threshold) {
      nextImage();
    } else if (velocity > 500) {
      // 快速滑動時降低閾值
      if (info.offset.x > 30) {
        prevImage();
      } else if (info.offset.x < -30) {
        nextImage();
      }
    }
    
    // 重置拖拽值
    x.set(0);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  // 圖片切換動畫變體
  const imageVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? 15 : -15
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        x: { 
          type: "spring", 
          stiffness: 400, 
          damping: 35,
          mass: 0.8
        },
        opacity: { 
          duration: 0.4,
          ease: [0.25, 0.46, 0.45, 0.94]
        },
        scale: { 
          type: "spring", 
          stiffness: 400, 
          damping: 35,
          mass: 0.8
        },
        rotateY: {
          type: "spring",
          stiffness: 400,
          damping: 35
        }
      }
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
      scale: 0.85,
      rotateY: direction > 0 ? -15 : 15,
      transition: {
        x: { 
          type: "spring", 
          stiffness: 500, 
          damping: 40,
          mass: 0.6
        },
        opacity: { 
          duration: 0.25,
          ease: [0.4, 0, 0.6, 1]
        },
        scale: { 
          type: "spring", 
          stiffness: 500, 
          damping: 40,
          mass: 0.6
        },
        rotateY: {
          type: "spring",
          stiffness: 500,
          damping: 40
        }
      }
    })
  };

  return (
    <div className="min-h-screen py-20 bg-slate-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            返回專案列表
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="mb-12"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className={`px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                {getCategoryName(project.category)}
              </span>
              <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-medium">
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 glow-title">
              {project.title}
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed glow-text">
              {project.description}
            </p>
          </motion.div>

          {/* Project Meta Info */}
          <motion.div 
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md glow-card"
          >
            <div className="text-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-600 dark:text-blue-400 mb-2" size="lg" />
              <div className="text-sm text-gray-500 dark:text-gray-400">完成時間</div>
              <div className="font-semibold text-gray-900 dark:text-white">{project.year}</div>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faClock} className="text-green-600 dark:text-green-400 mb-2" size="lg" />
              <div className="text-sm text-gray-500 dark:text-gray-400">開發週期</div>
              <div className="font-semibold text-gray-900 dark:text-white">{project.timeline}</div>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faUsers} className="text-purple-600 dark:text-purple-400 mb-2" size="lg" />
              <div className="text-sm text-gray-500 dark:text-gray-400">團隊規模</div>
              <div className="font-semibold text-gray-900 dark:text-white">{project.teamSize} 人</div>
            </div>
            <div className="text-center">
              <FontAwesomeIcon icon={faTools} className="text-orange-600 dark:text-orange-400 mb-2" size="lg" />
              <div className="text-sm text-gray-500 dark:text-gray-400">我的角色</div>
              <div className="font-semibold text-gray-900 dark:text-white text-sm">{project.role}</div>
            </div>
          </motion.div>

        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 glow-subtitle">
            {project.videoIframe ? '專案影片與展示' : '專案展示'}
          </h2>
          
          {/* Video Section */}
          {project.videoIframe && (
            <div className="mb-8">
              <IframeEmbed
                iframeHtml={project.videoIframe}
                title={`${project.title} - 專案影片`}
              />
              
              {/* Video Description */}
              <motion.div
                className="mt-4 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <FontAwesomeIcon icon={faExternalLinkAlt} className="text-blue-600 dark:text-blue-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">專案影片</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  觀看完整的專案展示影片，了解設計理念、製作過程與最終成果。
                </p>
                
                {/* 替代連結 */}
                {project.videoAlternativeLink && (
                  <motion.div
                    className="pt-3 border-t border-blue-200 dark:border-blue-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        替代觀看連結：
                      </span>
                      <motion.a
                        href={project.videoAlternativeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
                        開啟替代連結
                      </motion.a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          )}
          
          {/* Main Image */}
          {project.images.length > 0 && (
            <div className="relative mb-6 group overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <div className="relative w-full h-96 md:h-[500px]">
                <AnimatePresence mode="wait" custom={dragDirection}>
                  <motion.div
                    key={currentImageIndex}
                    custom={dragDirection}
                    variants={imageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsImageModalOpen(true)}
                    drag="x"
                    dragConstraints={{ left: -200, right: 200 }}
                    dragElastic={0.1}
                    dragMomentum={false}
                    onDragEnd={handleDragEnd}
                    onDragStart={handleDragStart}
                    style={{ 
                      x: isDragging ? x : 0, 
                      opacity: isDragging ? opacity : 1,
                      scale: isDragging ? scale : 1
                    }}
                    whileHover={{ scale: isDragging ? 1 : 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                  >
                    <ProjectImage
                      src={project.images[currentImageIndex]}
                      alt={`${project.title} - 圖片 ${currentImageIndex + 1}`}
                      className="w-full h-full rounded-xl shadow-lg select-none"
                      showPlaceholderText={true}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <motion.button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg"
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(0, 0, 0, 0.9)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: -10 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 z-10 shadow-lg"
                  whileHover={{ 
                    scale: 1.15,
                    backgroundColor: "rgba(0, 0, 0, 0.9)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ x: 10 }}
                  whileInView={{ x: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
              </>
            )}
            
            {/* Image Counter */}
            <motion.div 
              className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium z-10 shadow-lg border border-white/10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 400,
                damping: 25
              }}
            >
              <span className="text-blue-400 font-semibold">{currentImageIndex + 1}</span>
              <span className="mx-1 opacity-60">/</span>
              <span className="opacity-80">{project.images.length}</span>
            </motion.div>
            
            {/* 拖拽提示 */}
            {project.images.length > 1 && (
              <motion.div 
                className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg border border-white/10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <span className="flex items-center gap-1">
                  <span>←</span>
                  <span className="text-blue-300">拖拽切換</span>
                  <span>→</span>
                </span>
              </motion.div>
            )}
            </div>
          )}
          
          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <motion.div 
              className="flex gap-4 overflow-x-auto pb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {project.images.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative w-20 h-20 rounded-lg cursor-pointer flex-shrink-0 transition-all ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-blue-500 opacity-100 shadow-lg' 
                      : 'opacity-60 hover:opacity-100 hover:shadow-md'
                  }`}
                  onClick={() => {
                    setDragDirection(index > currentImageIndex ? 1 : -1);
                    setCurrentImageIndex(index);
                  }}
                  whileHover={{ 
                    scale: 1.08,
                    y: -2,
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: index === currentImageIndex ? 1 : 0.6, scale: 1 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  <ProjectImage
                    src={image}
                    alt={`${project.title} - 縮圖 ${index + 1}`}
                    className="w-full h-full rounded-lg"
                    loading="lazy"
                    showPlaceholderText={false}
                  />
                  
                  {/* 選中指示器 */}
                  {index === currentImageIndex && (
                    <motion.div
                      className="absolute inset-0 bg-blue-500/25 rounded-lg border-2 border-blue-400/50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Project Description */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 glow-subtitle">專案概述</h2>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md glow-card">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg glow-text">
                  {project.fullDescription}
                </p>
              </div>
            </motion.section>

            {/* Challenges & Solutions */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 glow-subtitle">挑戰與解決方案</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Challenges */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md glow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={faLightbulb} className="text-orange-500" size="lg" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">面臨挑戰</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="glow-text">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md glow-card">
                  <div className="flex items-center gap-3 mb-4">
                    <FontAwesomeIcon icon={faTools} className="text-green-500" size="lg" />
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">解決方案</h3>
                  </div>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                        <span className="glow-text">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Results */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 glow-subtitle">專案成果</h2>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-8 border border-green-200 dark:border-green-700 glow-card">
                <div className="flex items-center gap-3 mb-6">
                  <FontAwesomeIcon icon={faTrophy} className="text-green-600 dark:text-green-400" size="lg" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">專案成效</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.results.map((result, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <FontAwesomeIcon icon={faCheckCircle} className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                      <span className="glow-text">{result}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* Testimonial */}
            {project.testimonial && (
              <motion.section
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 glow-subtitle">客戶回饋</h2>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-8 border border-blue-200 dark:border-blue-700 glow-card">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-600 dark:text-blue-400 mb-4" size="2x" />
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed glow-text">
                    "{project.testimonial.text}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                      {project.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{project.testimonial.author}</div>
                      <div className="text-gray-600 dark:text-gray-400">{project.testimonial.position}</div>
                      <div className="text-blue-600 dark:text-blue-400 text-sm">{project.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Info */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md glow-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 glow-subtitle">專案資訊</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">客戶</div>
                  <div className="font-medium text-gray-900 dark:text-white">{project.client}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">完成年份</div>
                  <div className="font-medium text-gray-900 dark:text-white">{project.year}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">開發時間</div>
                  <div className="font-medium text-gray-900 dark:text-white">{project.timeline}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">團隊規模</div>
                  <div className="font-medium text-gray-900 dark:text-white">{project.teamSize} 人</div>
                </div>
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md glow-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 glow-subtitle">使用技術</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md glow-card"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 glow-subtitle">主要功能</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-sm" />
                    <span className="text-sm glow-text">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.section
            className="mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 glow-subtitle">相關專案</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <Link
                    to={`/portfolio/project/${relatedProject.id}`}
                    className="block bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group glow-card"
                  >
                    <div className="relative overflow-hidden">
                      <ProjectImage
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-48 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        showPlaceholderText={true}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 glow-subtitle">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm glow-text">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {isImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsImageModalOpen(false)}
          >
            <div className="relative max-w-6xl max-h-full overflow-hidden rounded-lg bg-black/20">
              <AnimatePresence mode="wait" custom={dragDirection}>
                <motion.div
                  key={`modal-${currentImageIndex}`}
                  custom={dragDirection}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative"
                  onClick={(e) => e.stopPropagation()}
                  drag="x"
                  dragConstraints={{ left: -300, right: 300 }}
                  dragElastic={0.1}
                  dragMomentum={false}
                  onDragEnd={handleDragEnd}
                  onDragStart={handleDragStart}
                  style={{ 
                    x: isDragging ? x : 0
                  }}
                >
                  <ProjectImage
                    src={project.images[currentImageIndex]}
                    alt={`${project.title} - 大圖`}
                    className="max-w-full max-h-full rounded-lg"
                    showPlaceholderText={true}
                  />
                </motion.div>
              </AnimatePresence>
              
              {/* Close Button */}
              <motion.button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-20 shadow-lg"
                whileHover={{ 
                  scale: 1.15,
                  backgroundColor: "rgba(0, 0, 0, 0.9)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }}
              >
                <FontAwesomeIcon icon={faTimes} />
              </motion.button>
              
              {/* Navigation in Modal */}
              {project.images.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-20 shadow-lg"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "rgba(0, 0, 0, 0.9)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 backdrop-blur-sm text-white p-3 rounded-full transition-colors z-20 shadow-lg"
                    whileHover={{ 
                      scale: 1.15,
                      backgroundColor: "rgba(0, 0, 0, 0.9)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      delay: 0.3,
                      type: "spring",
                      stiffness: 400,
                      damping: 25
                    }}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </motion.button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailPage;