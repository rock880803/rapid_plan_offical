import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ProjectImageProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
  showPlaceholderText?: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({
  src,
  alt,
  className = '',
  onClick,
  loading = 'lazy',
  showPlaceholderText = true
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const fallbackSrc = '/images/logo_transparent.png';

  return (
    <div className={`relative ${className}`}>
      {/* 主圖片 */}
      <motion.img
        src={hasError ? fallbackSrc : src}
        alt={alt}
        className={`w-full h-full object-cover transition-all duration-300 ${
          hasError ? 'object-contain bg-gray-100 dark:bg-gray-800' : ''
        } ${onClick ? 'cursor-pointer' : ''}`}
        onError={handleError}
        onLoad={handleLoad}
        onClick={onClick}
        loading={loading}
        whileHover={onClick ? { scale: 1.02 } : {}}
        transition={{ duration: 0.3 }}
      />

      {/* 載入中指示器 */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* 錯誤狀態覆蓋層 */}
      {hasError && showPlaceholderText && (
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="text-center text-white px-4">
            <motion.div
              className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/30"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="text-sm font-medium">圖片正在準備中</p>
              <p className="text-xs opacity-80 mt-1">即將更新實際專案圖片</p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* 小型錯誤指示器（用於縮圖） */}
      {hasError && !showPlaceholderText && (
        <div className="absolute top-1 right-1 w-3 h-3 bg-yellow-500 rounded-full border border-white shadow-sm"></div>
      )}
    </div>
  );
};

export default ProjectImage;