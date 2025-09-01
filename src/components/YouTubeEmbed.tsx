import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface YouTubeEmbedProps {
  videoUrl: string;
  title: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl, title, className = '' }) => {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  // 將 YouTube URL 轉換為嵌入格式
  const getEmbedUrl = (url: string): string => {
    // 處理不同格式的 YouTube URL
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
      /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
      }
    }

    // 如果已經是嵌入格式，直接返回
    if (url.includes('youtube.com/embed/')) {
      return url;
    }

    return url;
  };

  // 獲取 YouTube 影片 ID
  const getVideoId = (url: string): string => {
    const patterns = [
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&\n?#]+)/,
      /(?:https?:\/\/)?(?:www\.)?youtube\.com\/embed\/([^&\n?#]+)/,
      /(?:https?:\/\/)?youtu\.be\/([^&\n?#]+)/,
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return '';
  };

  const embedUrl = getEmbedUrl(videoUrl);
  const videoId = getVideoId(videoUrl);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  const handleIframeError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <motion.div
      className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      {hasError ? (
        // 錯誤狀態 - 顯示縮圖和連結
        <div className="relative w-full h-full bg-gray-900 flex items-center justify-center">
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-full object-cover opacity-70"
            onError={() => {
              // 如果縮圖也載入失敗，使用預設背景
              const img = document.querySelector('.youtube-thumbnail') as HTMLImageElement;
              if (img) {
                img.style.display = 'none';
              }
            }}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
            <FontAwesomeIcon icon={faPlay} size="3x" className="mb-4 opacity-80" />
            <h3 className="text-lg font-semibold mb-2 text-center px-4">{title}</h3>
            <p className="text-sm opacity-80 mb-4 text-center px-4">
              影片暫時無法嵌入播放
            </p>
            <motion.a
              href={watchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} />
              在 YouTube 觀看
            </motion.a>
          </div>
        </div>
      ) : (
        <>
          {/* 載入指示器 */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300">載入影片中...若長時間無回應請點擊下方替代連結</p>
              </div>
            </div>
          )}
          
          {/* YouTube iframe */}
          <iframe
            src={embedUrl}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            sandbox="allow-scripts allow-same-origin allow-presentation"
          />
        </>
      )}
    </motion.div>
  );
};

export default YouTubeEmbed;