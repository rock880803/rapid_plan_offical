export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  category: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  timeline: string;
  client: string;
  year: string;
  liveUrl?: string;
  githubUrl?: string;
  status: string;
  teamSize: number;
  role: string;
  testimonial?: {
    text: string;
    author: string;
    position: string;
    company: string;
  };
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: '電商購物平台',
    description: '完整的電商解決方案，包含商品管理、購物車、結帳流程等功能',
    fullDescription: '這是一個為中小企業打造的全功能電商平台，整合了現代化的使用者介面設計與強大的後端管理系統。平台支援多種支付方式、庫存管理、訂單追蹤、會員系統等完整功能，並具備響應式設計，確保在各種裝置上都能提供優質的購物體驗。',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Express', 'JWT', 'Cloudinary'],
    features: [
      '響應式設計',
      '支付整合 (Stripe)',
      '庫存管理系統',
      '訂單追蹤',
      '會員註冊登入',
      '商品搜尋與篩選',
      '購物車功能',
      '管理員後台',
      '郵件通知系統',
      'SEO 優化'
    ],
    challenges: [
      '複雜的購物車邏輯處理',
      '多種支付方式整合',
      '大量商品數據的效能優化',
      '庫存即時同步問題',
      '跨瀏覽器兼容性'
    ],
    solutions: [
      '使用 Redux 進行狀態管理，確保購物車數據一致性',
      '整合 Stripe API 提供安全可靠的支付處理',
      '實作分頁載入和圖片懶載入優化效能',
      '建立即時庫存更新機制',
      '進行全面的跨瀏覽器測試與優化'
    ],
    results: [
      '成功提升客戶線上銷售額 40%',
      '使用者轉換率提高 25%',
      '頁面載入速度優化至 2 秒內',
      '獲得客戶 95% 滿意度評價',
      '月活躍用戶增長 60%'
    ],
    timeline: '3 個月',
    client: 'TechMart 電商',
    year: '2024',
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/example/ecommerce',
    status: '已上線',
    teamSize: 4,
    role: '前端開發主導 & UI/UX 設計',
    testimonial: {
      text: '這個電商平台完全超出了我們的期望！不僅功能完整，使用體驗也非常流暢。自從上線後，我們的銷售額有了顯著提升。',
      author: '王小明',
      position: '執行長',
      company: 'TechMart 電商'
    }
  },
  {
    id: 2,
    title: '任務管理系統',
    description: '團隊協作的任務管理和專案追蹤系統',
    fullDescription: '為企業團隊開發的綜合性任務管理和專案追蹤系統，支援多人協作、即時通訊、進度追蹤、報表分析等功能。系統採用現代化的介面設計，提供直觀的操作體驗，幫助團隊提高工作效率和協作品質。',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: 'development',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io', 'Redis', 'Docker', 'AWS'],
    features: [
      '即時協作功能',
      '甘特圖專案視圖',
      '時間追蹤系統',
      '報表分析儀表板',
      '檔案共享管理',
      '通知提醒系統',
      '權限管理',
      '多專案支援',
      '行動裝置適配',
      'API 整合能力'
    ],
    challenges: [
      '即時協作的技術實現',
      '大量數據的效能優化',
      '複雜的權限管理邏輯',
      '跨時區的時間處理',
      '系統擴展性設計'
    ],
    solutions: [
      '使用 WebSocket 實現即時通訊',
      '實作數據庫索引和快取機制',
      '設計靈活的角色權限系統',
      '統一使用 UTC 時間處理',
      '採用微服務架構確保擴展性'
    ],
    results: [
      '團隊工作效率提升 35%',
      '專案完成率提高 28%',
      '用戶滿意度達 92%',
      '系統穩定性達 99.9%',
      '成功服務 50+ 企業客戶'
    ],
    timeline: '5 個月',
    client: 'ProductivePro 企業',
    year: '2024',
    liveUrl: 'https://taskmanager-pro.com',
    githubUrl: 'https://github.com/example/task-manager',
    status: '開發中',
    teamSize: 5,
    role: '全端開發 & 系統架構',
    testimonial: {
      text: '這套系統大幅改善了我們的專案管理流程，團隊協作變得更加順暢，強烈推薦給其他企業！',
      author: '張經理',
      position: '專案經理',
      company: 'ProductivePro 企業'
    }
  },
  {
    id: 3,
    title: '咖啡品牌識別',
    description: '為新興咖啡品牌設計的完整視覺識別系統',
    fullDescription: '為一家精品咖啡品牌打造的完整視覺識別系統，從品牌 Logo 設計到包裝設計、店面視覺規劃等。設計理念融合了現代簡約風格與咖啡文化的溫暖感受，創造出獨特且具有辨識度的品牌形象。',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: 'branding',
    technologies: ['Illustrator', 'Photoshop', 'InDesign', 'Figma'],
    features: [
      'Logo 設計',
      '品牌色彩規劃',
      '字體系統設計',
      '包裝設計系列',
      '店面視覺規劃',
      '名片與文具設計',
      '社群媒體模板',
      '品牌指南手冊',
      '廣告素材設計',
      '網站視覺規劃'
    ],
    challenges: [
      '在競爭激烈的咖啡市場中建立獨特性',
      '平衡現代感與溫暖感的視覺表現',
      '確保品牌在不同媒介上的一致性',
      '符合目標客群的審美偏好',
      '控制製作成本與品質'
    ],
    solutions: [
      '深入研究目標市場和競爭對手',
      '創造獨特的視覺語言和色彩系統',
      '建立完整的品牌應用規範',
      '進行多輪用戶測試和反饋收集',
      '選擇高品質且經濟的製作方案'
    ],
    results: [
      '品牌知名度提升 80%',
      '社群媒體關注度增長 150%',
      '獲得設計獎項肯定',
      '客戶滿意度達 98%',
      '成功拓展至 5 個城市'
    ],
    timeline: '2 個月',
    client: 'Artisan Coffee Co.',
    year: '2024',
    status: '已完成',
    teamSize: 2,
    role: '品牌設計主導',
    testimonial: {
      text: '新的品牌識別完全改變了我們的形象！顧客們都說我們看起來更專業、更有質感了。銷售額也有明顯提升。',
      author: '陳老闆',
      position: '創辦人',
      company: 'Artisan Coffee Co.'
    }
  },
  {
    id: 4,
    title: '美食部落格',
    description: '響應式美食部落格網站設計',
    fullDescription: '為美食愛好者打造的精美部落格網站，具備文章發布、食譜分享、評論互動、分類搜尋等功能。網站採用響應式設計，在各種裝置上都能提供優質的閱讀體驗，並整合了 SEO 優化和社群分享功能。',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: 'web',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Vercel', 'TypeScript'],
    features: [
      '響應式設計',
      '內容管理系統',
      '食譜分類搜尋',
      '評論互動系統',
      '社群分享功能',
      'SEO 優化',
      '圖片優化載入',
      '訂閱電子報',
      '相關文章推薦',
      '多語言支援'
    ],
    challenges: [
      '大量圖片的載入優化',
      'SEO 效果最大化',
      '內容管理的便利性',
      '跨裝置的閱讀體驗',
      '網站載入速度優化'
    ],
    solutions: [
      '實作圖片懶載入和 WebP 格式',
      '優化 meta 標籤和結構化數據',
      '整合無頭 CMS 系統',
      '採用行動優先的設計策略',
      '使用 CDN 和快取機制'
    ],
    results: [
      '網站流量增長 200%',
      'SEO 排名進入前 10',
      '用戶停留時間增加 45%',
      '社群分享率提升 80%',
      '獲得美食部落格獎項'
    ],
    timeline: '2 個月',
    client: 'FoodieLife 美食家',
    year: '2024',
    liveUrl: 'https://foodie-blog.com',
    githubUrl: 'https://github.com/example/food-blog',
    status: '已上線',
    teamSize: 2,
    role: '前端開發 & 設計',
    testimonial: {
      text: '網站的設計非常精美，功能也很完整。自從上線後，我的讀者數量大幅增加，真的很感謝！',
      author: '美食達人小王',
      position: '部落客',
      company: 'FoodieLife'
    }
  },
  {
    id: 5,
    title: '線上學習平台',
    description: '提供課程管理、影片播放、作業提交、成績管理的完整學習管理系統',
    fullDescription: '為教育機構開發的綜合性線上學習平台，整合了課程管理、影片串流、互動測驗、作業提交、成績管理等完整功能。平台採用現代化設計，提供直觀的學習體驗，支援多種學習模式和評估方式。',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: 'development',
    technologies: ['Next.js', 'Prisma', 'MySQL', 'AWS', 'TypeScript', 'Tailwind CSS'],
    features: [
      '課程管理系統',
      '影片串流播放',
      '互動測驗功能',
      '作業提交系統',
      '成績管理',
      '學習進度追蹤',
      '討論區功能',
      '證書生成',
      '多媒體支援',
      '行動裝置適配'
    ],
    challenges: [
      '大容量影片串流優化',
      '多用戶同時存取效能',
      '複雜的權限管理系統',
      '學習數據分析',
      '跨裝置同步問題'
    ],
    solutions: [
      '使用 CDN 和影片壓縮技術',
      '實作負載平衡和快取機制',
      '設計彈性的角色權限架構',
      '建立完整的學習分析系統',
      '採用響應式設計和 PWA 技術'
    ],
    results: [
      '學習完成率提升 45%',
      '用戶滿意度達 96%',
      '系統穩定性達 99.8%',
      '成功服務 100+ 教育機構',
      '學習效果提升 30%'
    ],
    timeline: '6 個月',
    client: 'EduTech 教育科技',
    year: '2024',
    liveUrl: 'https://learning-platform.com',
    githubUrl: 'https://github.com/example/learning-platform',
    status: '已上線',
    teamSize: 6,
    role: '全端開發 & 系統架構',
    testimonial: {
      text: '這個學習平台大幅提升了我們的教學效率，學生們的學習成效也有顯著改善。功能完整且易於使用！',
      author: '李教授',
      position: '教務主任',
      company: 'EduTech 教育科技'
    }
  }
];

export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find(project => project.id === id);
};

export const getRelatedProjects = (currentId: number, category: string, limit: number = 3): Project[] => {
  return projectsData
    .filter(project => project.id !== currentId && project.category === category)
    .slice(0, limit);
};