export const skillGroups = [
  {
    id: 'ai', icon: 'brain',
    title: { en: 'AI & Deep Learning', fa: 'هوش مصنوعی و یادگیری عمیق' },
    subtitle: { en: 'From model design to validation', fa: 'از طراحی مدل تا اعتبارسنجی' },
    tools: ['PyTorch', 'TensorFlow', 'Keras', 'LSTM', 'Random Forest', 'SVM'],
    evidence: { en: ['Medical AI', 'Flood-risk modeling', 'Predictive systems'], fa: ['هوش مصنوعی پزشکی', 'مدل‌سازی ریسک سیلاب', 'سامانه‌های پیش‌بینی'] }
  },
  {
    id: 'vision', icon: 'scan',
    title: { en: 'Computer Vision', fa: 'بینایی ماشین' },
    subtitle: { en: 'Detection, datasets and real-world perception', fa: 'تشخیص، دیتاست و ادراک در دنیای واقعی' },
    tools: ['YOLOv5', 'YOLOv6', 'YOLOv7', 'YOLOv8', 'OpenCV', 'Roboflow'],
    evidence: { en: ['2 public vehicle datasets', 'Emergency-vehicle detection', 'Medical imaging'], fa: ['۲ دیتاست عمومی خودرو', 'تشخیص خودروهای امدادی', 'تصویربرداری پزشکی'] }
  },
  {
    id: 'rl', icon: 'network',
    title: { en: 'Reinforcement Learning', fa: 'یادگیری تقویتی' },
    subtitle: { en: 'Sequential decisions for intelligent control', fa: 'تصمیم‌گیری دنباله‌ای برای کنترل هوشمند' },
    tools: ['DQN', 'Q-Learning', 'SUMO', 'Reward Design', 'Simulation'],
    evidence: { en: ['M.S. thesis', 'Traffic-signal control', 'Dynamic optimization'], fa: ['پایان‌نامه ارشد', 'کنترل چراغ راهنمایی', 'بهینه‌سازی پویا'] }
  },
  {
    id: 'control', icon: 'waves',
    title: { en: 'Control & Simulation', fa: 'کنترل و شبیه‌سازی' },
    subtitle: { en: 'Nonlinear, fuzzy and model-based systems', fa: 'سیستم‌های غیرخطی، فازی و مدل‌محور' },
    tools: ['MATLAB', 'Simulink', 'Fuzzy Logic', 'Sliding Mode', 'Nonlinear Control'],
    evidence: { en: ['Energy management', 'HVAC control', 'Renewable integration'], fa: ['مدیریت انرژی', 'کنترل HVAC', 'یکپارچه‌سازی انرژی تجدیدپذیر'] }
  },
  {
    id: 'embedded', icon: 'cpu',
    title: { en: 'Embedded & IoT', fa: 'سیستم‌های نهفته و IoT' },
    subtitle: { en: 'Hardware-aware intelligent prototypes', fa: 'نمونه‌سازی هوشمند با توجه به سخت‌افزار' },
    tools: ['C/C++', 'STM32', 'AVR', 'Raspberry Pi', 'Arduino', 'Sensors'],
    evidence: { en: ['Smart home', 'Vehicle monitoring', 'Greenhouse monitoring'], fa: ['خانه هوشمند', 'پایش خودرو', 'پایش گلخانه'] }
  },
  {
    id: 'industrial', icon: 'circuit',
    title: { en: 'Industrial & Design Tools', fa: 'ابزارهای صنعتی و طراحی' },
    subtitle: { en: 'From circuits to automation documentation', fa: 'از مدار تا مستندسازی اتوماسیون' },
    tools: ['Siemens PLC', 'STEP 7', 'Altium', 'Multisim', 'AutoCAD Electrical', 'PCB'],
    evidence: { en: ['Electronics teaching', 'Industrial automation', 'PCB design'], fa: ['تدریس الکترونیک', 'اتوماسیون صنعتی', 'طراحی PCB'] }
  }
]
