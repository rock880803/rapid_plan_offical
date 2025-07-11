// 專案資料
export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  videoIframe?: string;
  videoAlternativeLink?: string;
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
  featured?: boolean; // 新增：是否為精選專案
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
    image: '/images/project_images/1-1.png',
    images: [
      '/images/project_images/1-1.png',
      '/images/project_images/1-2.png',
      '/images/project_images/1-3.png',
      '/images/project_images/1-4.png',
      '/images/project_images/1-5.png'
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
    featured: true, // 設為精選專案
    testimonial: {
      text: '設計溝通順暢、成品品質高，時間緊迫仍交出令人滿意的成果，非常推薦！',
      author: '楊先生',
      position: '承辦人',
      company: '台灣科技大學'
    }
  },
  {
    id: 2,
    title: '臺科大國手計畫成果冊',
    description: '將國手在計劃期間內的成果紀實，結合視覺設計與圖文編輯呈現專業形象',
    fullDescription: '本專案為臺灣科技大學國手培訓計劃成果紀錄冊，內容涵蓋學生訓練過程、比賽現場紀實與獲獎成果，並透過設計與攝影編排整合，打造具備代表性的形象冊。從風格規劃、排版設計、到高品質印刷交付，完整呈現計劃亮點。',
    image: '/images/project_images/2-1.png',
    images: [
      '/images/project_images/2-1.png',
      '/images/project_images/2-2.png',
      '/images/project_images/2-3.png',
      '/images/project_images/2-4.png'
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
    featured: false, // 不是精選專案
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
    image: '/images/project_images/3-1.png',
    images: [
      '/images/project_images/3-1.png',
      '/images/project_images/3-2.png',
      '/images/project_images/3-3.png',
      '/images/project_images/3-4.png',
      '/images/project_images/3-5.png'
    ],
    videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xHonIgLCehw?si=ogwpiTFGJ53jccFL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    videoAlternativeLink: 'https://www.youtube.com/watch?v=xHonIgLCehw',
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
    featured: true, // 設為精選專案
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
    image: '/images/project_images/4-1.png',
    images: [
      '/images/project_images/4-1.png',
      '/images/project_images/4-2.png',
      '/images/project_images/4-3.png'
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
    featured: true, // 不是精選專案
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
    image: '/images/project_images/5-1.png',
    images: [
      '/images/project_images/5-1.png',
      '/images/project_images/5-2.png',
      '/images/project_images/5-3.png',
      '/images/project_images/5-4.png'
    ],
    videoIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/fhICyAKCv6U?si=p_tyXTD_UrdDjp9D" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    videoAlternativeLink: 'https://youtu.be/fhICyAKCv6U',
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
    featured: false, // 不是精選專案
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
  title: '臺北市城鎮韌性演習兵推系統',
  description: '協助臺北市政府及外部廠商開發兵推系統，在大螢幕即時展示演習流程，實現無腳本演練',
  fullDescription: '為提升城市災害應變與決策演練效率，協助兵役局開發「城鎮韌性兵推系統」。此系統支援大型觸控顯示，提供即時事件更新、角色切換與視覺化流程呈現，協助多單位同步演練。過程中需整合地圖標記工具、繪圖模組與多角色介面，挑戰在於無腳本流程下的彈性與穩定性。',
   image: '/images/project_images/6-1.png',
    images: [
      '/images/project_images/6-1.png',
      '/images/project_images/6-2.png',
      '/images/project_images/6-3.png',
      '/images/project_images/6-4.png'
    ],
  category: '專案開發',
  technologies: ['HTML', 'CSS','模組化 Web 應用架構',
  '互動式地圖 API',
  'Canvas 與 SVG 資料視覺化技術'],
  features: [
    '多單位角色模擬操作',
    '大型觸控螢幕互動介面',
    '模組化地圖事件標示',
    '實時兵推流程控制與視覺化'
  ],
  challenges: [
    '需整合多方單位邏輯，並支援突發事件快速應變',
    '無腳本兵推需高度互動與即時流程切換',
    '系統需兼顧效能與穩定性，能在大型投影環境中順暢運作'
  ],
  solutions: [
    '採用模組化架構，分離前端介面與事件邏輯模組',
    '設計彈性地圖標註系統與角色操作框架',
    '優化前端效能，確保高效渲染與穩定互動'
  ],
  results: [
    '系統已於 2025 年 Q3 兵推演習中實測',
    '協助多單位完成即時應變模擬，提升演習效率'
  ],
  timeline: '90 天',
  client: '臺北市兵役局',
  year: '2025',
  teamSize: 1,
  role: '介面設計與互動流程整合',
  featured: true, // 設為精選專案
  liveUrl: '',
  githubUrl: '',
  status: '已上線',
  testimonial: {
    text: '系統即時性強、視覺清楚、能靈活支援演習現場，是我們首次真正做到「無腳本演練」的重要工具。',
    author: '蔡先生',
    position: '科長',
    company: '臺北市兵役局'
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

// 新增：獲取精選專案
export const getFeaturedProjects = (limit: number = 6): Project[] => {
  return projectsData
    .filter(project => project.featured === true)
    .slice(0, limit);
};

// 新增：獲取精選專案總數
export const getFeaturedProjectsCount = (): number => {
  return projectsData.filter(project => project.featured === true).length;
};