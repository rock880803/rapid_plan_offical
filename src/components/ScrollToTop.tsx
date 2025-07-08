import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 頁面切換時滾動到頂部
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' // 平滑滾動效果
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;