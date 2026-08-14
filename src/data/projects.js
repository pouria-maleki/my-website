export const caseStudies = [
  {
    slug: 'ai-gastrointestinal-lesion-detection',
    updated: '2026-08-14',
    status: { en: 'Applied AI · Prototype', fa: 'هوش مصنوعی کاربردی · نمونه اولیه' },
    title: {
      en: 'AI-Assisted Gastrointestinal Lesion Detection System',
      fa: 'سامانه هوشمند کمک‌تشخیصی ضایعات دستگاه گوارش'
    },
    summary: {
      en: 'Development of a high-precision AI-assisted prototype for identifying gastrointestinal polyps and suspicious lesions in endoscopic imagery.',
      fa: 'توسعه و ساخت یک نمونه اولیه مبتنی بر هوش مصنوعی برای شناسایی دقیق پولیپ‌ها و ضایعات مشکوک در تصاویر آندوسکوپی.'
    },
    role: {
      en: 'AI algorithm development, medical-image labeling and prototype hardware development.',
      fa: 'توسعه الگوریتم هوش مصنوعی، برچسب‌گذاری تصاویر پزشکی و توسعه سخت‌افزار نمونه اولیه.'
    },
    tags: ['Medical AI', 'Computer Vision', 'Object Detection', 'Real-time Inference'],
    heroImage: '/images/projects/medical-detections.webp',
    secondaryImage: '/images/projects/medical-device.webp',
    metrics: [
      { label: 'Precision', value: '99.4%' },
      { label: 'Recall', value: '99.2%' },
      { label: 'mAP@50', value: '99.5%' },
      { label: 'mAP@50–95', value: '84.3%' }
    ],
    note: {
      en: 'Metrics are from project/model evaluation and are not presented as clinical-performance claims. Implementation and integration details are intentionally omitted to respect company intellectual property.',
      fa: 'این اعداد مربوط به ارزیابی پروژه و مدل هستند و به‌عنوان ادعای عملکرد بالینی ارائه نمی‌شوند. جزئیات پیاده‌سازی و یکپارچه‌سازی برای حفظ مالکیت فکری شرکت عمداً منتشر نشده‌اند.'
    }
  },
  {
    slug: 'intelligent-traffic-control-dql',
    updated: '2026-08-14',
    status: { en: 'M.S. Thesis · 2021 → Ongoing research', fa: 'پایان‌نامه ارشد · ۲۰۲۱ ← پژوهش در حال توسعه' },
    title: {
      en: 'Intelligent Traffic Signal Control with Deep Q-Learning',
      fa: 'کنترل هوشمند چراغ راهنمایی با Deep Q-Learning'
    },
    summary: {
      en: 'A four-way intersection control system combining vehicle perception, traffic-state modeling and a Deep Q-Learning agent in SUMO to reduce waiting time compared with fixed-time control.',
      fa: 'سامانه کنترل یک چهارراه با ترکیب ادراک خودرو، مدل‌سازی وضعیت ترافیک و عامل Deep Q-Learning در SUMO برای کاهش زمان انتظار نسبت به کنترل زمان‌ثابت.'
    },
    role: {
      en: 'M.S. thesis research at Bu-Ali Sina University; perception, state design, reward design, neural-network agent and simulation evaluation.',
      fa: 'پژوهش پایان‌نامه کارشناسی ارشد در دانشگاه بوعلی سینا؛ ادراک، طراحی حالت و پاداش، عامل شبکه عصبی و ارزیابی شبیه‌سازی.'
    },
    tags: ['Deep Q-Learning', 'Reinforcement Learning', 'SUMO', 'Traffic Signal Control', 'Computer Vision'],
    heroImage: '/images/projects/traffic-rl-loop.webp',
    gallery: ['/images/research/traffic-environment.gif', '/images/projects/traffic-intersection.webp', '/images/projects/traffic-perception.webp'],
    highlights: {
      en: ['Four-way intersection with adaptive phase selection', '80-cell traffic-state representation and four signal actions', 'Compared against a fixed-time signal controller across light, medium and heavy traffic scenarios', 'The perception side later evolved into vehicle-detection publications, while the control side is being extended in a new manuscript'],
      fa: ['چهارراه با انتخاب تطبیقی فاز چراغ', 'نمایش وضعیت ترافیک با ۸۰ سلول و چهار عمل کنترلی', 'مقایسه با کنترل‌کننده زمان‌ثابت در ترافیک سبک، متوسط و سنگین', 'بخش ادراک این مسیر بعداً به مقالات تشخیص خودرو رسید و بخش کنترل نیز در یک مقاله جدید در حال توسعه است']
    },
    currentWork: {
      en: 'A new manuscript extending the Deep Q-Learning traffic-control line is currently being prepared for submission. Methodological details are kept concise while the work is unpublished.',
      fa: 'یک مقاله جدید در ادامه مسیر کنترل ترافیک مبتنی بر Deep Q-Learning در حال آماده‌سازی برای ارسال به داوری است. تا پیش از انتشار، جزئیات روش به‌صورت خلاصه نگه داشته می‌شود.'
    }
  }
]

export const getCaseStudy = (slug) => caseStudies.find(project => project.slug === slug)
