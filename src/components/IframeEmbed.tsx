import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

interface IframeEmbedProps {
  iframeHtml: string;
  title: string;
  alternativeLink?: string;
  className?: string;
}

const IframeEmbed: React.FC<IframeEmbedProps> = ({ iframeHtml, title, alternativeLink, className = '' }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // 從 iframe HTML 中提取 src 屬性
  const extractSrc = (html: string): string => {
    const srcMatch = html.match(/src="([^"]+)"/);
    return srcMatch ? srcMatch[1] : '';
  };

  // 從 YouTube embed URL 中提取影片 ID
  const extractVideoId = (src: string): string => {
    const match = src.match(/\/embed\/([^?&]+)/);
    return match ? match[1] : '';
  };

  // 創建安全的 iframe HTML
  const createSafeIframe = (html: string): string => {
    return html;
  };

  const src = extractSrc(iframeHtml);
  const videoId = extractVideoId(src);
  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';
  const watchUrl = alternativeLink || (videoId ? `https://www.youtube.com/watch?v=${videoId}` : src);
  const safeIframeHtml = createSafeIframe(iframeHtml);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
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
          {thumbnailUrl && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="w-full h-full object-cover opacity-70"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
          )}
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
              {alternativeLink ? '開啟替代連結' : (videoId ? '在 YouTube 觀看' : '開啟影片連結')}
            </motion.a>
          </div>
        </div>
      ) : (
        <>
          {/* 載入指示器 */}
          {isLoading && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center z-10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <p className="text-sm text-gray-600 dark:text-gray-300">載入影片中...若長時間無回應請點擊下方替代連結</p>
              </div>
            </div>
          )}
          
          {/* 嵌入的 iframe */}
          <iframe
            src={src}
            title={title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            onLoad={handleLoad}
            onError={handleError}
          />
        </>
      )}
      
      {/* 替代連結按鈕 - 總是顯示 */}
      <div className="absolute bottom-4 right-4 z-20 group">
        <motion.a
          href={watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black/70 hover:bg-black/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all opacity-80 hover:opacity-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="在新視窗開啟影片"
        >
          <FontAwesomeIcon icon={faExternalLinkAlt} size="sm" />
          開啟連結
        </motion.a>
      </div>
    </motion.div>
  );
};

export default IframeEmbed;