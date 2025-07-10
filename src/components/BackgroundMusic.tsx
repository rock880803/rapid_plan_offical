import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeMute } from '@fortawesome/free-solid-svg-icons';

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // 設置音頻屬性
    audio.loop = true;
    audio.volume = 0.1; // 設置較低的音量
    
    // 嘗試自動播放（某些瀏覽器可能會阻止）
    const playAudio = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.log('自動播放被阻止，需要用戶互動');
        setIsPlaying(false);
      }
    };

    // 延遲一點時間再播放，讓頁面完全載入
    const timer = setTimeout(playAudio, 1000);

    // 監聽用戶第一次點擊來啟動音頻
    const handleFirstInteraction = async () => {
      if (!isPlaying && audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (error) {
          console.log('播放失敗:', error);
        }
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    // 清理函數
    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying]);

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  // 5秒後隱藏控制按鈕
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControls(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* 隱藏的音頻元素 */}
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/music/bgm.mp3" type="audio/mpeg" />
        您的瀏覽器不支援音頻播放。
      </audio>

      {/* 音樂控制按鈕 */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            {/* 靜音按鈕 */}
            <motion.button
              onClick={toggleMute}
              className="w-12 h-12 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title={isMuted ? '取消靜音' : '靜音'}
            >
              <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} size="sm" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 重新顯示控制按鈕的觸發區域 */}
      <div
        className="fixed bottom-0 right-0 w-20 h-20 z-40 cursor-pointer"
        onMouseEnter={() => setShowControls(true)}
        onClick={() => setShowControls(true)}
      />
    </>
  );
};

export default BackgroundMusic;