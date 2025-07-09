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
  title: '臺科大國手計畫 LOGO',
  description: '國際技能競賽「臺科大國手計畫」專屬識別設計，展現專業與國際感',
  fullDescription: '本專案為臺灣科技大學舉辦之「國手培訓計畫」量身打造品牌識別 Logo，視覺風格結合技能競賽的專業性與臺科大的國際形象，應用範圍包含官方文宣、展架、隊服與簡報封面。整體設計以明確、現代、具識別度為核心，讓品牌在各式競賽與推廣活動中具有辨識優勢。',
  image: 'https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/1629212/pexels-photo-1629212.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  category: '品牌設計',
  technologies: ['Adobe Illustrator'],
  features: [
    '品牌識別 Logo 設計',
    '設計提案與版本迭代',
    '活動應用展示',
    'AI 向量圖格式輸出'
  ],
  challenges: [
    '需在短時間內凝聚國際技能意象與國手精神',
    '需讓 LOGO 能應用於信件、文宣品'
  ],
  solutions: [
    '建立品牌色與圖形模組，確保延展性',
    '使用幾何構圖提升比例與製作方便性',
    '提供不同版本輸出格式（PDF, SVG, PNG）應對不同應用'
  ],
  results: [
    '4 日內完成設計、提案、確認交付',
    '成功應用於培訓服裝、布條與形象影片',
    '獲客戶肯定並推薦後續其他活動設計'
  ],
  timeline: '4 天',
  client: '台灣科技大學',
  year: '2025',
  liveUrl: '',
  githubUrl: '',
  status: '已交付',
  teamSize: 1,
  role: '視覺設計與提案主導',
  testimonial: {
    text: '設計溝通順暢、成品品質高，讓我們能快速完成推廣材料製作。時間緊迫仍交出令人滿意的成果，非常推薦！',
    author: '楊先生',
    position: '承辦人',
    company: '台灣科技大學'
  }
},
  {
  id: 2,
  title: '臺科大國手計畫成果冊',
  description: '將國手在計劃期間內的成果紀實，結合視覺設計與圖文編輯呈現專業形象',
  fullDescription: '本專案為臺灣科技大學國手培訓計畫成果紀錄冊，內容涵蓋學生訓練過程、比賽現場紀實與獲獎成果，並透過設計與攝影編排整合，打造具備代表性的形象冊。從風格規劃、排版設計、到高品質印刷交付，完整呈現計劃亮點。',
  image: 'https://images.pexels.com/photos/19886862/pexels-photo-19886862.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/19886862/pexels-photo-19886862.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  category: '平面設計',
  technologies: ['Adobe Illustrator', '攝影', '排版', '印刷'],
  features: [
    '活動成果紀錄設計',
    '圖文編輯與版面規劃',
    '高品質印刷與裝訂',
    '結合照片與設計整合性'
  ],
  challenges: [
    '資料量大、素材零散，需有效統整編排',
    '時間緊湊，需短期內完成設計與校稿流程'
  ],
  solutions: [
    '建立圖文樣式模板快速編排',
    '提前規劃書冊結構與分頁配置',
    '採用高品質紙材與裝訂方式，強化質感'
  ],
  results: [
    '成功於 30 天內完成設計與交付',
    '成品應用於校內宣傳與對外展示，廣受好評',
    '獲承辦人推薦並爭取後續延伸設計'
  ],
  timeline: '10 天',
  client: '台灣科技大學',
  year: '2025',
  teamSize: 1,
  role: '整體設計與排版主導',
  liveUrl: '',
  githubUrl: '',
  status: '已交付',
  testimonial: {
    text: '成果冊設計高品質又準時交付，整體視覺呈現出色，協助我們清楚傳遞國手計畫的精神。',
    author: '楊先生',
    position: '承辦人',
    company: '台灣科技大學'
  }
  },
  {
  id: 3,
  title: '臺科大國手計畫宣傳影片',
  description: '將國手在計劃期間內的成果紀實，以影音形式呈現精神與亮點',
  fullDescription: '本專案為臺科大國手計畫打造專屬宣傳影片，從內容規劃、剪輯到配樂製作，整合比賽現場、訓練過程與訪談素材，完整傳遞選手的努力歷程與國手精神。影片長度約 2 分鐘，支援在簡報、社群媒體、活動播放使用。',
  image: 'https://images.pexels.com/photos/5864277/pexels-photo-5864277.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/5864277/pexels-photo-5864277.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  category: '影片創作',
  technologies: ['DaVinci Resolve', '影片剪輯', 'AI 音樂創作'],
  features: [
    '影片腳本與畫面分鏡',
    '剪輯與視覺節奏設計',
    'AI 音樂音效創作與混音',
    '支援社群與簡報播放格式'
  ],
  challenges: [
    '素材來源多元，需有效統整風格一致',
    '短時間內需完成剪輯與配樂、導出多種格式'
  ],
  solutions: [
    '制定內容腳本，搭配畫面節奏剪輯強化情緒',
    '導入 AI 音樂生成工具，快速建立風格一致的配樂',
    '輸出多種尺寸與格式，適應不同播放情境'
  ],
  results: [
    '成功於 11 天內完成剪輯、調色與交付',
    '影片於成果發表會現場播放，獲得高度回響',
    '後續應用於 LINE 官方帳號、招生簡報與形象網站'
  ],
  timeline: '11 天',
  client: '台灣科技大學',
  year: '2025',
  teamSize: 1,
  role: '影片規劃與剪輯主導',
  liveUrl: '',
  githubUrl: '',
  status: '已交付',
  testimonial: {
    text: '影片整體節奏與視覺呈現令人驚豔，充分展現國手的努力與精神，非常加分！',
    author: '楊先生',
    position: '承辦人',
    company: '台灣科技大學'
  }
},
  {
  id: 4,
  title: '臺科大國手計畫三折頁',
  description: '簡介國手計畫需知事項，透過創意時間線與版面配置，提升閱讀與記憶效率',
  fullDescription: '為提升國手對計畫內容的理解與記憶，我設計了一份結合燙金工藝與創意排版的三折頁，精準傳遞重要流程與注意事項。特別以「多條時間線視覺」為核心概念，幫助選手快速掌握培訓、競賽、申報等階段流程。紙材選用 A4 雙面雪銅上霧，搭配 CK-11 燙金點綴，提升整體質感。',
  image: 'https://images.pexels.com/photos/2649473/pexels-photo-2649473.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/2649473/pexels-photo-2649473.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  category: '平面設計',
  technologies: ['Adobe Illustrator', '排版設計', '燙金 CK-11', 'A4 雙面雪銅上霧'],
  features: [
    '三折頁版面設計',
    '多時間線圖示創意表現',
    '燙金應用與紙材規劃',
    '重要資訊可視化與分區設計'
  ],
  challenges: [
    '需在有限空間內呈現大量內容，並避免資訊過載',
    '需符合印刷廠裁切與折頁技術條件'
  ],
  solutions: [
    '採用多層級排版策略分區資訊，提升可讀性',
    '與印刷廠協作調整安全邊界與折線配置',
    '加入品牌識別設計元素，保持一致性'
  ],
  results: [
    '於 8 天內完成設計、校稿與交印',
    '成功分送給全體國手與指導老師使用',
    '獲校內行政單位肯定，作為優化資訊設計的範例'
  ],
  timeline: '8 天',
  client: '台灣科技大學',
  year: '2025',
  teamSize: 1,
  role: '整體設計與印製對接',
  liveUrl: '',
  githubUrl: '',
  status: '已交付',
  testimonial: {
    text: '三折頁排版清楚，時間線設計很有創意，我們與選手們都覺得資訊吸收變得更有效率。',
    author: '楊先生',
    position: '承辦人',
    company: '台灣科技大學'
  }
},
  {
  id: 5,
  title: '臺科大電子系 50 週年懷舊影片',
  description: '以敘事節奏與懷舊素材，紀錄電子系 50 年發展歷程，融合音樂與影像創造回憶感',
  fullDescription: '為了紀念台科大電子系創立 50 週年，我製作了一支具備情感節奏與歷史重量的懷舊影片。影片以創系照片開場，採用「翻開相簿」的敘事方式，引導觀眾進入電子系的成長回憶。時間軸採順敘手法編排歷史活動，並使用 AI 創作音樂搭配轉場節奏。結尾部分呼應開頭，將相簿合上，形成完整的記憶循環。',
  image: 'https://images.pexels.com/photos/1670176/pexels-photo-1670176.jpeg?auto=compress&cs=tinysrgb&w=800',
  images: [
    'https://images.pexels.com/photos/1670176/pexels-photo-1670176.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/700669/pexels-photo-700669.jpeg?auto=compress&cs=tinysrgb&w=1200'
  ],
  category: '影片創作',
  technologies: ['Davinci Resolve', 'AI 音樂創作', 'Photoshop'],
  features: [
    '首尾呼應式影片節奏',
    'AI 音樂節奏配合畫面',
    '時間軸敘事剪輯風格'
  ],
  challenges: [
    '需要在短時間內整合 50 年活動素材與照片',
    '營造濃厚情感，讓校友回憶校園時光'
  ],
  solutions: [
    '建立素材時間軸與編年清單，分類整理提升效率',
    '以 AI 音樂生成工具製作符合節奏的背景配樂',
    '將創系照片進行修圖與翻頁動畫設計'
  ],
  results: [
    '3 天內完成影片剪輯與交付',
    '成功於 50 週年紀念活動首播，獲得熱烈反響',
    '主任與師生高度評價影片溫度與敘事節奏'
  ],
  timeline: '3 天',
  client: '台灣科技大學',
  year: '2025',
  teamSize: 1,
  role: '影像編導與剪輯統籌',
  liveUrl: '',
  githubUrl: '',
  status: '已交付',
  testimonial: {
    text: '影片讓我們彷彿走過了 50 年電子系的旅程，從影像到音樂節奏都很細膩、動人。',
    author: '林主任',
    position: '系主任',
    company: '台灣科技大學'
  }
},
  {
    id: 6,
    title: '美食部落格',
    description: '響應式美食部落格網站設計',
    fullDescription: '為美食愛好者打造的精美部落格網站，具備文章發布、食譜分享、評論互動、分類搜尋等功能。網站採用響應式設計，在各種裝置上都能提供優質的閱讀體驗，並整合了 SEO 優化和社群分享功能。',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: '專案開發',
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
    id: 7,
    title: '線上學習平台',
    description: '提供課程管理、影片播放、作業提交、成績管理的完整學習管理系統',
    fullDescription: '為教育機構開發的綜合性線上學習平台，整合了課程管理、影片串流、互動測驗、作業提交、成績管理等完整功能。平台採用現代化設計，提供直觀的學習體驗，支援多種學習模式和評估方式。',
    image: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800',
    images: [
      'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200'
    ],
    category: '專案開發',
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