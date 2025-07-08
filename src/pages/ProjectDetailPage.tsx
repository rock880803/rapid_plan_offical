import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
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
      'web': 'from-blue-500 to-cyan-500',
      'mobile': 'from-green-500 to-emerald-500',
      'branding': 'from-purple-500 to-pink-500',
      'development': 'from-orange-500 to-red-500'
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  const getCategoryName = (category: string) => {
    const names = {
      'web': '網頁設計',
      'mobile': '移動應用',
      'branding': '品牌設計',
      'development': '開發專案'
    };
    return names[category as keyof typeof names] || category;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    );
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

          {/* Action Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="flex flex-wrap gap-4 mt-6"
          >
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg glow-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
                查看線上版本
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faGithub} />
                查看原始碼
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* Image Gallery */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 glow-subtitle">專案展示</h2>
          
          {/* Main Image */}
          <div className="relative mb-6 group">
            <motion.img
              src={project.images[currentImageIndex]}
              alt={`${project.title} - 圖片 ${currentImageIndex + 1}`}
              className="w-full h-96 md:h-[500px] object-cover rounded-xl shadow-lg cursor-pointer"
              onClick={() => setIsImageModalOpen(true)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Navigation Arrows */}
            {project.images.length > 1 && (
              <>
                <motion.button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </motion.button>
                <motion.button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </motion.button>
              </>
            )}
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          {project.images.length > 1 && (
            <div className="flex gap-4 overflow-x-auto pb-2">
              {project.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`${project.title} - 縮圖 ${index + 1}`}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer flex-shrink-0 transition-all ${
                    index === currentImageIndex 
                      ? 'ring-2 ring-blue-500 opacity-100' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                />
              ))}
            </div>
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
                      <img
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
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
            <motion.div
              className="relative max-w-6xl max-h-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={project.images[currentImageIndex]}
                alt={`${project.title} - 大圖`}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              
              {/* Navigation in Modal */}
              {project.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetailPage;