import React from 'react';
import { motion } from 'framer-motion';

interface YouTubeEmbedProps {
  videoUrl: string;
  title: string;
  className?: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoUrl, title, className = '' }) => {
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

  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <motion.div
      className={`relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-gray-100 dark:bg-gray-800 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.02 }}
    >
      <iframe
        src={embedUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </motion.div>
  );
};

export default YouTubeEmbed;