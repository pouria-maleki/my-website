export const skillGroups = [
  {
    id: 'vision', icon: 'scan',
    title: { en: 'Computer Vision & Object Detection', fa: 'بینایی ماشین و تشخیص شیء' },
    subtitle: { en: 'Perception systems built around real datasets and measurable evaluation', fa: 'سامانه‌های ادراک مبتنی بر داده واقعی و ارزیابی قابل اندازه‌گیری' },
    tools: ['Object Detection', 'YOLO family', 'R-CNN family', 'OpenCV', 'Dataset Design', 'Data Augmentation'],
    evidence: { en: ['2 public vehicle datasets', 'Emergency-vehicle detection', 'Medical-image analysis'], fa: ['۲ دیتاست عمومی خودرو', 'تشخیص خودروهای امدادی', 'تحلیل تصاویر پزشکی'] }
  },
  {
    id: 'ai', icon: 'brain',
    title: { en: 'Machine Learning & Medical AI', fa: 'یادگیری ماشین و هوش مصنوعی پزشکی' },
    subtitle: { en: 'From predictive modeling to AI-assisted diagnostic prototypes', fa: 'از مدل‌سازی پیش‌بینی تا نمونه‌های اولیه تشخیص هوشمند' },
    tools: ['Deep Neural Networks', 'CNN', 'LSTM', 'Random Forest', 'SVM', 'Model Evaluation'],
    evidence: { en: ['Gastrointestinal lesion-detection prototype', 'Flood-risk modeling', 'Predictive engineering systems'], fa: ['نمونه اولیه کمک‌تشخیصی ضایعات دستگاه گوارش', 'مدل‌سازی ریسک سیلاب', 'سامانه‌های پیش‌بینی مهندسی'] }
  },
  {
    id: 'rl', icon: 'network',
    title: { en: 'Reinforcement Learning & Decision Systems', fa: 'یادگیری تقویتی و سامانه‌های تصمیم‌گیری' },
    subtitle: { en: 'Sequential decision-making for adaptive engineering control', fa: 'تصمیم‌گیری دنباله‌ای برای کنترل تطبیقی سامانه‌های مهندسی' },
    tools: ['Q-Learning', 'Deep Q-Learning (DQL)', 'Reward Design', 'SUMO', 'Simulation', 'Traffic Optimization'],
    evidence: { en: ['M.S. thesis', 'Adaptive traffic-signal control', 'Dynamic optimization'], fa: ['پایان‌نامه ارشد', 'کنترل تطبیقی چراغ راهنمایی', 'بهینه‌سازی پویا'] }
  },
  {
    id: 'control', icon: 'waves',
    title: { en: 'Intelligent Control & Simulation', fa: 'کنترل هوشمند و شبیه‌سازی' },
    subtitle: { en: 'Nonlinear, fuzzy and model-based control for physical systems', fa: 'کنترل غیرخطی، فازی و مدل‌محور برای سامانه‌های فیزیکی' },
    tools: ['MATLAB', 'Simulink', 'Fuzzy Logic', 'Sliding Mode', 'Adaptive Control', 'Nonlinear Control'],
    evidence: { en: ['Energy management', 'HVAC control', 'Renewable-energy integration'], fa: ['مدیریت انرژی', 'کنترل HVAC', 'یکپارچه‌سازی انرژی تجدیدپذیر'] }
  },
  {
    id: 'embedded', icon: 'cpu',
    title: { en: 'Embedded Systems & Edge AI', fa: 'سیستم‌های نهفته و هوش لبه' },
    subtitle: { en: 'Hardware-aware prototypes where sensing, inference and control meet', fa: 'نمونه‌سازی سخت‌افزارمحور در نقطه اتصال حسگر، پردازش و کنترل' },
    tools: ['C/C++', 'STM32', 'AVR', 'Raspberry Pi', 'Arduino', 'Sensors & Actuators'],
    evidence: { en: ['Offline smart-home voice control', 'Vehicle monitoring', 'Greenhouse monitoring'], fa: ['کنترل صوتی آفلاین خانه هوشمند', 'پایش خودرو', 'پایش گلخانه'] }
  },
  {
    id: 'industrial', icon: 'circuit',
    title: { en: 'Industrial Automation & Electronics', fa: 'اتوماسیون صنعتی و الکترونیک' },
    subtitle: { en: 'Practical electronics, automation and engineering documentation', fa: 'الکترونیک عملی، اتوماسیون و مستندسازی مهندسی' },
    tools: ['Siemens PLC', 'STEP 7', 'PCB Design', 'AutoCAD Electrical', 'Altium', 'Instrumentation'],
    evidence: { en: ['Electronics teaching', 'Industrial automation', 'Circuit & PCB design'], fa: ['تدریس الکترونیک', 'اتوماسیون صنعتی', 'طراحی مدار و PCB'] }
  }
]
