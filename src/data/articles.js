const publicationMetadata = {
  'iranian-vehicle-dataset-yolov8': {
    publicationType: 'JournalArticle',
    venue: 'Journal of Artificial Intelligence and Data Mining (JAIDM)',
    doi: '10.22044/jadm.2024.13858.2501',
    authors: ['Pouria Maleki', 'Abbas Ramazani', 'Hassan Khotanlou', 'Sina Ojaghi'],
    githubUrl: 'https://github.com/pouria-maleki/Iranian-Vehicle-images-dataset-for-detection',
    keywords: { en: ['Pouria Maleki','Iranian vehicle dataset','YOLOv8s','object detection','computer vision','intelligent transportation'], fa: ['پوریا ملکی','دیتاست خودروهای ایرانی','YOLOv8s','تشخیص شیء','بینایی ماشین','حمل‌ونقل هوشمند'] },
    dataset: { name: 'Iranian Vehicle Images Dataset', description: 'A 3,000-image dataset of Iranian vehicles labeled for car, bus and truck object detection.', distributionUrl: 'https://github.com/pouria-maleki/Iranian-Vehicle-images-dataset-for-detection' }
  },
  'vehicle-detection-yolo-emergency-vehicles': {
    publicationType: 'ConferencePaper',
    venue: 'IEEE SAMI 2024',
    doi: '10.1109/SAMI60510.2024.10432884',
    authors: ['Pouria Maleki','Abbas Ramazani','Hassan Khotanlou','Sina Ojaghi','Milad Mousavi','Alexey Kalinin','Amir Mosavi'],
    githubUrl: 'https://github.com/pouria-maleki/TVD-dataset',
    keywords: { en: ['Pouria Maleki','YOLO','vehicle detection','emergency vehicles','TVD dataset','deep learning','traffic management'], fa: ['پوریا ملکی','YOLO','تشخیص خودرو','خودروهای امدادی','دیتاست TVD','یادگیری عمیق','مدیریت ترافیک'] },
    dataset: { name: 'TVD Dataset', description: 'A 29,759-image, seven-class vehicle benchmark including ambulance and fire-truck classes.', distributionUrl: 'https://github.com/pouria-maleki/TVD-dataset' }
  },
  'flood-risk-machine-learning': {
    publicationType: 'ConferencePaper',
    venue: 'IEEE SISY 2024',
    doi: '10.1109/SISY62279.2024.10737603',
    authors: ['Saba Salmani Ghanbari','Bahram Choubin','Milad Mousavi','Pouria Maleki','Amir Mosavi'],
    keywords: { en: ['Pouria Maleki','flood risk','LSTM','Random Forest','SVM','machine learning','infrastructure resilience'], fa: ['پوریا ملکی','ریسک سیلاب','LSTM','Random Forest','SVM','یادگیری ماشین','تاب‌آوری زیرساخت'] }
  },
  'sustainable-energy-fuzzy-control': {
    publicationType: 'ConferencePaper',
    venue: 'IEEE ICCIA 2023',
    doi: '10.1109/ICCIA61416.2023.10506386',
    authors: ['Mohammad Soofi','Niloufar Maleki','Hadi Delavari','Pouria Maleki'],
    keywords: { en: ['Pouria Maleki','fuzzy logic','adaptive nonlinear control','energy management','HVAC','renewable energy'], fa: ['پوریا ملکی','منطق فازی','کنترل تطبیقی غیرخطی','مدیریت انرژی','HVAC','انرژی تجدیدپذیر'] }
  },
  'deep-reinforcement-learning-traffic-signals': {
    publicationType: 'Thesis',
    venue: 'Bu-Ali Sina University · M.S. Thesis',
    authors: ['Pouria Maleki'],
    keywords: { en: ['Pouria Maleki','reinforcement learning','DQN','Q-learning','SUMO','traffic signal control','YOLO'], fa: ['پوریا ملکی','یادگیری تقویتی','DQN','Q-learning','SUMO','کنترل چراغ راهنمایی','YOLO'] }
  },
  'offline-voice-detection-smart-homes': {
    publicationType: 'ConferencePaper',
    venue: '4th International Conference on Electrical Engineering, Computer, Mechanics and Artificial Intelligence',
    authors: ['Sina Ojaghi','Javid Ghafourian','Pouria Maleki','Atefeh Hedayatnia'],
    keywords: { en: ['Pouria Maleki','smart home','offline voice detection','Raspberry Pi','IoT','home automation'], fa: ['پوریا ملکی','خانه هوشمند','تشخیص گفتار آفلاین','Raspberry Pi','اینترنت اشیا','اتوماسیون خانگی'] }
  }
}

const editorialMetadata = {
  'iranian-vehicle-dataset-yolov8': {
    kind: { en: 'Peer-reviewed publication', fa: 'مقاله علمی منتشرشده' }, featured: true, updated: '2026-08-14',
    takeaways: {
      en: ['3,000 Iranian vehicle images with 5,765 manually labeled bounding boxes', '91.7% precision and 92.6% mAP@0.5 with domain-specific training', 'A practical example of why data quality and domain fit can matter as much as model choice'],
      fa: ['۳۰۰۰ تصویر خودروهای ایرانی با ۵۷۶۵ باکس برچسب‌گذاری‌شده دستی', 'دقت ۹۱٫۷٪ و mAP@0.5 برابر ۹۲٫۶٪ با آموزش دامنه‌محور', 'نمونه‌ای عملی از اینکه کیفیت و تناسب داده می‌تواند به اندازه انتخاب مدل مهم باشد']
    }
  },
  'vehicle-detection-yolo-emergency-vehicles': {
    kind: { en: 'IEEE conference paper', fa: 'مقاله کنفرانس IEEE' }, updated: '2026-08-14',
    takeaways: {
      en: ['29,759 images and 55,925 annotations across seven vehicle classes', 'Ambulance and fire-truck classes are modeled explicitly instead of being absorbed into generic vehicle labels', 'Best reported detector reached about 85% precision and 85% mAP@0.5'],
      fa: ['۲۹٬۷۵۹ تصویر و ۵۵٬۹۲۵ برچسب در هفت کلاس خودرو', 'آمبولانس و خودروی آتش‌نشانی به‌صورت کلاس مستقل مدل شده‌اند', 'بهترین آشکارساز گزارش‌شده به حدود ۸۵٪ Precision و ۸۵٪ mAP@0.5 رسید']
    }
  },
  'flood-risk-machine-learning': {
    kind: { en: 'IEEE conference paper', fa: 'مقاله کنفرانس IEEE' }, updated: '2026-08-14',
    takeaways: {
      en: ['2,634 bridge records were modeled through exposure, criticality and overall risk scores', 'Random Forest performed best for exposure and criticality prediction', 'LSTM produced the lowest reported error for the final risk-score prediction'],
      fa: ['۲۶۳۴ رکورد پل بر اساس امتیاز مواجهه، بحرانی‌بودن و ریسک نهایی مدل شد', 'Random Forest برای پیش‌بینی مواجهه و بحرانی‌بودن بهترین عملکرد را داشت', 'LSTM کمترین خطای گزارش‌شده را برای پیش‌بینی امتیاز ریسک نهایی ثبت کرد']
    }
  },
  'sustainable-energy-fuzzy-control': {
    kind: { en: 'IEEE conference paper', fa: 'مقاله کنفرانس IEEE' }, updated: '2026-08-14',
    takeaways: {
      en: ['A fuzzy supervisory layer balances comfort, electricity price and grid dependence', 'Adaptive nonlinear control coordinates aggregate air-conditioning loads', 'The MATLAB study evaluated 100 units under fixed-time, usage-time and real-time pricing'],
      fa: ['لایه نظارتی فازی میان آسایش، قیمت برق و وابستگی به شبکه تعادل ایجاد می‌کند', 'کنترل تطبیقی غیرخطی بار تجمیعی سیستم‌های سرمایشی را هماهنگ می‌کند', 'شبیه‌سازی MATLAB صد واحد را در سه سناریوی قیمت‌گذاری بررسی کرد']
    }
  },
  'deep-reinforcement-learning-traffic-signals': {
    kind: { en: 'M.S. thesis note', fa: 'یادداشت پایان‌نامه کارشناسی ارشد' }, updated: '2026-08-14',
    takeaways: {
      en: ['SUMO provides the traffic environment while Q-learning / deep networks drive sequential decisions', 'Computer vision supplies traffic-state estimates for adaptive control', 'The project connects perception, simulation and control rather than treating AI as an isolated model'],
      fa: ['SUMO محیط ترافیک را می‌سازد و Q-learning / شبکه‌های عمیق تصمیم‌گیری دنباله‌ای را انجام می‌دهند', 'بینایی ماشین وضعیت ترافیک را برای کنترل تطبیقی تخمین می‌زند', 'پروژه ادراک، شبیه‌سازی و کنترل را در یک سامانه واحد به هم متصل می‌کند']
    }
  },
  'offline-voice-detection-smart-homes': {
    kind: { en: 'Conference paper', fa: 'مقاله کنفرانسی' }, updated: '2026-08-14',
    takeaways: {
      en: ['Voice commands are processed locally on Raspberry Pi-class hardware', 'Offline operation improves resilience where connectivity is poor and limits unnecessary cloud dependence', 'The system combines voice interaction, automation, sensors and basic security logic'],
      fa: ['فرمان صوتی روی سخت‌افزار کلاس Raspberry Pi به‌صورت محلی پردازش می‌شود', 'کارکرد آفلاین در اینترنت ضعیف پایدارتر است و وابستگی غیرضروری به ابر را کاهش می‌دهد', 'سامانه تعامل صوتی، اتوماسیون، حسگرها و منطق امنیتی را یکپارچه می‌کند']
    }
  },
  'object-detection-yolo-rcnn-practical-guide': {
    kind: { en: 'Research note', fa: 'یادداشت پژوهشی' }, featured: true, updated: '2026-08-14',
    takeaways: {
      en: ['Choose an object-detection family from the deployment constraints, not from version numbers', 'YOLO-style one-stage detectors favor compact real-time pipelines; R-CNN-style methods remain valuable when region-based reasoning or instance segmentation matters', 'Dataset design, annotation quality and domain shift often dominate the last few points of benchmark performance'],
      fa: ['خانواده آشکارساز را بر اساس محدودیت کاربرد انتخاب کنید، نه صرفاً شماره نسخه', 'آشکارسازهای تک‌مرحله‌ای مانند YOLO برای پایپ‌لاین بلادرنگ مناسب‌اند و خانواده R-CNN در مسائل ناحیه‌محور و سگمنتیشن نمونه‌ای ارزشمند است', 'طراحی دیتاست، کیفیت برچسب و اختلاف دامنه اغلب از چند امتیاز بنچمارک مهم‌تر است']
    }
  },
  'from-detection-to-smart-traffic-control': {
    kind: { en: 'Research note', fa: 'یادداشت پژوهشی' }, updated: '2026-08-14',
    takeaways: {
      en: ['A smart intersection needs perception, state estimation, decision-making and control—not only a detector', 'Emergency-vehicle classes become useful when they change the controller objective or priority policy', 'The most interesting research question is how detection uncertainty propagates into reinforcement-learning decisions'],
      fa: ['چهارراه هوشمند فقط آشکارساز نمی‌خواهد؛ ادراک، تخمین وضعیت، تصمیم‌گیری و کنترل باید یکپارچه باشند', 'کلاس خودروهای امدادی زمانی ارزش واقعی دارد که سیاست اولویت‌دهی کنترل‌کننده را تغییر دهد', 'یک سؤال مهم پژوهشی این است که عدم‌قطعیت تشخیص چگونه به تصمیم‌های یادگیری تقویتی منتقل می‌شود']
    }
  }
}

const rawArticles = [
  {
    slug: 'object-detection-yolo-rcnn-practical-guide',
    sortDate: '2026-08-14', date: '2026', readTime: 11, image: '/blog/yolo-emergency.svg',
    category: { en: 'Computer Vision', fa: 'بینایی ماشین' },
    title: { en: 'Object Detection in Practice: YOLO, R-CNN and Better Dataset Design', fa: 'تشخیص شیء در عمل؛ YOLO، خانواده R-CNN و طراحی بهتر دیتاست' },
    excerpt: {
      en: 'A practical research note on choosing an object-detection approach from latency, localization, segmentation and dataset constraints—not from model-version numbers alone.',
      fa: 'یک یادداشت کاربردی درباره انتخاب روش تشخیص شیء بر اساس تأخیر، دقت مکان‌یابی، سگمنتیشن و محدودیت داده؛ نه صرفاً شماره نسخه مدل.'
    },
    keywords: {
      en: ['Pouria Maleki','object detection','YOLO','R-CNN','Faster R-CNN','Mask R-CNN','dataset design','computer vision'],
      fa: ['پوریا ملکی','تشخیص شیء','YOLO','R-CNN','Faster R-CNN','Mask R-CNN','طراحی دیتاست','بینایی ماشین']
    },
    content: {
      en: `# Object Detection in Practice: YOLO, R-CNN and Better Dataset Design

When people describe computer-vision skills, they often list model names: *YOLOv5, YOLOv6, YOLOv7, YOLOv8*. That is useful for documenting experiments, but it is not the best way to explain engineering capability. A stronger question is: **what kind of perception problem are we solving, under what deployment constraints, and what data do we actually have?**

My own vehicle-detection work has reinforced this view. The model family matters, but dataset definition, labels, domain shift, latency and the downstream control objective often matter more.

## Start with the task, not the version number

Object detection means locating and classifying objects in an image. In an intelligent-transportation system, that might mean cars, buses, motorcycles, ambulances and fire trucks. In medical imaging, the visual target and evaluation protocol can be very different. The detector should follow the task.

A useful first split is between **one-stage** and **region-based / two-stage** approaches.

### One-stage detectors: a compact real-time pipeline

The original YOLO paper reframed object detection as a single end-to-end prediction problem. Instead of running a separate proposal-and-classification pipeline, one network predicts object locations and class probabilities from the full image. That design made YOLO influential for real-time perception.

For engineering systems such as traffic monitoring, the attraction is clear:

- a relatively compact inference pipeline;
- good fit for video and edge-oriented applications;
- easier integration with a control loop that needs frequent updates;
- a mature ecosystem for training on custom datasets.

This is why the YOLO family became a natural choice in my vehicle datasets and traffic-perception experiments.

## R-CNN-style methods: region reasoning still matters

The R-CNN line takes a different path. Faster R-CNN introduced a **Region Proposal Network (RPN)** that shares convolutional features with the detector, making region proposals part of the learned pipeline. Mask R-CNN then extended this idea with an additional branch for instance masks.

That family remains conceptually important because it makes the region-level structure explicit. It is a useful comparison point when:

- localization quality is central;
- region proposals are useful to the task;
- instance segmentation is required;
- throughput is less important than richer per-instance analysis.

So the right portfolio statement is not “I know four YOLO versions.” It is closer to: **I work on object detection and visual perception, understand one-stage and region-based detector families, and choose the architecture around the system requirement.**

## The hidden variable: dataset quality

Architecture discussions can distract from the most important practical variable: the data.

In our Iranian Vehicle Images Dataset study, we collected **3,000 images** and manually created **5,765 bounding boxes** for car, bus and truck classes. Training on that domain-specific dataset produced **91.7% precision** and **92.6% mAP@0.5** in the reported experiment. The important lesson was not simply that a particular YOLO release worked; it was that a detector trained on data closer to the deployment domain could outperform a generic baseline by a meaningful margin.

Our larger seven-class vehicle work pushed the same idea further. It separated **ambulances and fire trucks** from generic vehicle classes because those labels can matter to an intelligent traffic controller. If the final system needs to prioritize an ambulance, a detector that only says “truck” or “van” has lost information before the control problem even starts.

## How I choose an object-detection approach

I use a system-oriented checklist:

| Question | Why it matters |
|---|---|
| Is inference real-time? | Influences model family, input size and deployment hardware |
| Is bounding-box detection enough? | If not, instance segmentation may be more appropriate |
| Are small or crowded objects critical? | Changes data collection, resolution and evaluation priorities |
| Is the deployment domain different from public benchmarks? | Domain-specific data may be essential |
| Is the output feeding a controller? | False negatives and class definitions may have asymmetric costs |
| Can the dataset be expanded or relabeled? | Data work may outperform architecture swapping |

## Metrics need context

Precision, recall and mAP are useful, but the “best” detector depends on the application. Missing an emergency vehicle may be more costly than a small change in average mAP. A medical prototype may need a completely different validation strategy from a traffic camera. A real-time controller also cares about latency and stability, not only image-level accuracy.

That is why I prefer to describe my computer-vision work through **problem definition → dataset → model family → evaluation → system integration**.

## References and related work

- [Redmon et al., *You Only Look Once: Unified, Real-Time Object Detection*, CVPR 2016](https://openaccess.thecvf.com/content_cvpr_2016/html/Redmon_You_Only_Look_CVPR_2016_paper.html).
- [Ren et al., *Faster R-CNN: Towards Real-Time Object Detection with Region Proposal Networks*, NeurIPS 2015](https://arxiv.org/abs/1506.01497).
- [He et al., *Mask R-CNN*, ICCV 2017](https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html).
- [Maleki et al., *Iranian Vehicle Images Dataset for Object Detection Algorithm*, JAIDM 2024](https://doi.org/10.22044/jadm.2024.13858.2501).
- [Maleki et al., *Object Detection for Vehicles with YOLO*, IEEE SAMI 2024](https://doi.org/10.1109/SAMI60510.2024.10432884).

The version number will change. **The engineering questions remain.**`,
      fa: `# تشخیص شیء در عمل؛ YOLO، خانواده R-CNN و طراحی بهتر دیتاست

وقتی درباره مهارت بینایی ماشین صحبت می‌شود، خیلی وقت‌ها فقط نام مدل‌ها ردیف می‌شوند: *YOLOv5، YOLOv6، YOLOv7، YOLOv8*. این برای مستندسازی آزمایش‌ها مفید است، اما برای نشان‌دادن توانایی مهندسی کافی نیست. سؤال مهم‌تر این است: **چه مسئله ادراکی را حل می‌کنیم، محدودیت اجرای واقعی چیست و چه داده‌ای در اختیار داریم؟**

تجربه من در پروژه‌های تشخیص خودرو دقیقاً همین نکته را پررنگ کرده است. خانواده مدل مهم است، اما تعریف دیتاست، کیفیت برچسب، اختلاف دامنه، سرعت اجرا و هدف نهایی سیستم اغلب مهم‌ترند.

## از مسئله شروع کنیم، نه شماره نسخه

تشخیص شیء یعنی پیدا کردن موقعیت و کلاس اشیا در تصویر. در حمل‌ونقل هوشمند این اشیا می‌توانند خودرو، اتوبوس، موتورسیکلت، آمبولانس و خودروی آتش‌نشانی باشند. در تصویربرداری پزشکی، نوع هدف و پروتکل ارزیابی کاملاً متفاوت است. بنابراین معماری باید تابع مسئله باشد.

یک تقسیم‌بندی مفید، تفاوت میان روش‌های **تک‌مرحله‌ای** و رویکردهای **ناحیه‌محور / دو‌مرحله‌ای** است.

### آشکارسازهای تک‌مرحله‌ای؛ مناسب برای پایپ‌لاین بلادرنگ

مقاله اصلی YOLO تشخیص شیء را به یک مسئله پیش‌بینی یکپارچه و انتها‌به‌انتها تبدیل کرد. به‌جای اینکه پیشنهاد ناحیه و طبقه‌بندی در چند مرحله جدا انجام شود، یک شبکه مستقیماً مکان و احتمال کلاس‌ها را از کل تصویر پیش‌بینی می‌کند.

برای سامانه‌هایی مثل پایش ترافیک، این ساختار جذاب است چون:

- پایپ‌لاین inference نسبتاً فشرده‌ای دارد؛
- برای ویدئو و کاربردهای نزدیک به edge مناسب است؛
- اتصال آن به حلقه کنترلی که به بروزرسانی سریع نیاز دارد ساده‌تر است؛
- آموزش روی دیتاست اختصاصی اکوسیستم جاافتاده‌ای دارد.

به همین دلیل خانواده YOLO در دیتاست‌های خودرو و آزمایش‌های ادراک ترافیکی من انتخاب طبیعی بوده است.

## خانواده R-CNN؛ استدلال ناحیه‌ای هنوز مهم است

خانواده R-CNN مسیر متفاوتی دارد. Faster R-CNN یک **Region Proposal Network (RPN)** را وارد معماری کرد که ویژگی‌های کانولوشنی را با آشکارساز به اشتراک می‌گذارد. Mask R-CNN نیز این ایده را با یک شاخه مستقل برای ماسک هر نمونه توسعه داد.

این خانواده زمانی نقطه مقایسه مهمی است که:

- کیفیت مکان‌یابی اهمیت بالایی دارد؛
- پیشنهاد ناحیه بخشی مفید از مسئله است؛
- instance segmentation نیاز داریم؛
- تحلیل غنی‌تر هر شیء از throughput مهم‌تر است.

بنابراین جمله قوی‌تر برای رزومه این نیست که «چهار نسخه YOLO بلدم». جمله دقیق‌تر این است: **روی تشخیص شیء و ادراک بصری کار می‌کنم، تفاوت خانواده‌های تک‌مرحله‌ای و ناحیه‌محور را می‌شناسم و معماری را بر اساس نیاز سیستم انتخاب می‌کنم.**

## متغیر پنهان و مهم؛ کیفیت دیتاست

بحث معماری گاهی ما را از مهم‌ترین عامل عملی دور می‌کند: داده.

در پژوهش دیتاست خودروهای ایرانی، **۳۰۰۰ تصویر** و **۵۷۶۵ bounding box** برای سه کلاس خودرو، اتوبوس و کامیون تهیه و به‌صورت دستی برچسب‌گذاری شد. در آزمایش گزارش‌شده، آموزش دامنه‌محور به **Precision برابر ۹۱٫۷٪** و **mAP@0.5 برابر ۹۲٫۶٪** رسید. درس مهم فقط موفقیت یک نسخه خاص YOLO نبود؛ نکته اصلی این بود که داده نزدیک‌تر به دامنه واقعی می‌تواند یک baseline عمومی را به شکل معنی‌داری بهبود دهد.

در دیتاست بزرگ‌تر هفت‌کلاسه نیز همین ایده ادامه پیدا کرد. **آمبولانس و خودروی آتش‌نشانی** از کلاس‌های عمومی جدا شدند، چون این برچسب‌ها برای کنترل‌کننده ترافیک هوشمند معنی عملی دارند. اگر هدف نهایی اولویت‌دادن به آمبولانس باشد، آشکارسازی که فقط «ون» یا «کامیون» بگوید، قبل از شروع مسئله کنترل بخشی از اطلاعات را از دست داده است.

## برای انتخاب آشکارساز چه سؤال‌هایی می‌پرسم؟

| سؤال | اهمیت |
|---|---|
| آیا inference باید بلادرنگ باشد؟ | روی خانواده مدل، اندازه ورودی و سخت‌افزار اثر دارد |
| bounding box کافی است؟ | اگر نه، شاید instance segmentation مناسب‌تر باشد |
| اشیای کوچک یا متراکم مهم‌اند؟ | رزولوشن، داده و معیار ارزیابی را تغییر می‌دهد |
| دامنه واقعی با دیتاست عمومی متفاوت است؟ | ممکن است داده اختصاصی ضروری باشد |
| خروجی وارد حلقه کنترل می‌شود؟ | هزینه خطاها و تعریف کلاس‌ها نامتقارن می‌شود |
| امکان توسعه یا بازبرچسب‌گذاری دیتاست وجود دارد؟ | گاهی کار روی داده از تعویض معماری مؤثرتر است |

## معیارها بدون زمینه کافی نیستند

Precision، Recall و mAP لازم‌اند، اما «بهترین» مدل تابع کاربرد است. از دست دادن یک خودروی امدادی می‌تواند بسیار مهم‌تر از چند دهم درصد تغییر در mAP متوسط باشد. یک نمونه اولیه پزشکی نیز به پروتکل اعتبارسنجی کاملاً متفاوت از دوربین ترافیکی نیاز دارد. سامانه بلادرنگ علاوه بر دقت، به latency و پایداری هم حساس است.

به همین دلیل ترجیح می‌دهم کار بینایی ماشین را با زنجیره **تعریف مسئله ← دیتاست ← خانواده مدل ← ارزیابی ← یکپارچه‌سازی سیستم** توضیح دهم.

## منابع و کارهای مرتبط

- [Redmon و همکاران، *You Only Look Once*، CVPR 2016](https://openaccess.thecvf.com/content_cvpr_2016/html/Redmon_You_Only_Look_CVPR_2016_paper.html).
- [Ren و همکاران، *Faster R-CNN*، NeurIPS 2015](https://arxiv.org/abs/1506.01497).
- [He و همکاران، *Mask R-CNN*، ICCV 2017](https://openaccess.thecvf.com/content_iccv_2017/html/He_Mask_R-CNN_ICCV_2017_paper.html).
- [Maleki و همکاران، *Iranian Vehicle Images Dataset for Object Detection Algorithm*، 2024](https://doi.org/10.22044/jadm.2024.13858.2501).
- [Maleki و همکاران، *Object Detection for Vehicles with YOLO*، IEEE SAMI 2024](https://doi.org/10.1109/SAMI60510.2024.10432884).

شماره نسخه عوض می‌شود؛ **سؤال‌های مهندسی ماندگارترند.**`
    }
  },
  {
    slug: 'from-detection-to-smart-traffic-control',
    sortDate: '2026-08-13', date: '2026', readTime: 10, image: '/blog/traffic-rl.svg',
    category: { en: 'Intelligent Transportation', fa: 'حمل‌ونقل هوشمند' },
    title: { en: 'From Vehicle Detection to Smart Traffic Control: Perception, RL and Emergency Priority', fa: 'از تشخیص خودرو تا کنترل هوشمند ترافیک؛ ادراک، یادگیری تقویتی و اولویت خودروهای امدادی' },
    excerpt: {
      en: 'A system-level view of how vehicle detection, traffic-state estimation and reinforcement learning can be connected into an adaptive intersection controller.',
      fa: 'نگاهی سیستمی به اتصال تشخیص خودرو، تخمین وضعیت ترافیک و یادگیری تقویتی در یک کنترل‌کننده تطبیقی چهارراه.'
    },
    keywords: {
      en: ['Pouria Maleki','smart traffic control','vehicle detection','reinforcement learning','YOLO','SUMO','emergency vehicle priority'],
      fa: ['پوریا ملکی','کنترل هوشمند ترافیک','تشخیص خودرو','یادگیری تقویتی','YOLO','SUMO','اولویت خودروهای امدادی']
    },
    content: {
      en: `# From Vehicle Detection to Smart Traffic Control

A traffic camera that detects vehicles is useful, but it is not yet an intelligent traffic-control system. To change signal timing intelligently, the system needs a complete loop: **perception → state estimation → decision → control → feedback**.

This is the thread that connects my M.S. thesis with the vehicle-detection datasets I later worked on.

## Layer 1 — Perception

The first layer answers visual questions: What vehicles are present? How many? Which lane? Are any of them emergency vehicles?

Object detection is a natural tool because it returns both class and location. But the class design must reflect the control objective. If an ambulance is grouped into a generic van class, an emergency-priority policy cannot use that information reliably.

That is one reason our seven-class dataset explicitly separates ambulance and fire-truck classes.

## Layer 2 — State estimation

Raw detections are not the state of the traffic-control problem. A controller needs a compact representation such as:

- queue length by approach;
- vehicle density;
- waiting-time estimates;
- lane occupancy;
- emergency-vehicle presence;
- current signal phase and elapsed phase time.

This step is easy to underestimate. Detection uncertainty becomes control uncertainty. Missed vehicles, occlusion and class confusion can distort the state sent to the decision agent.

## Layer 3 — Sequential decision-making

In my M.S. thesis, the intersection was modeled in **SUMO** and the controller was studied with Q-learning / deep-network ideas. Reinforcement learning fits the problem because one signal action changes future queues. The controller cannot optimize only the current frame; it must learn a policy over sequences of decisions.

A simplified loop is:

\`\`\`text
Camera / detector
       ↓
Traffic-state estimator
       ↓
RL policy → signal action
       ↓
Intersection / SUMO
       ↓
Delay, queue, throughput → reward
       ↺
\`\`\`

## Emergency priority changes the objective

Adding emergency-vehicle detection is not useful only because the dataset becomes more detailed. It changes what the controller can optimize.

A normal objective might minimize average delay. With an ambulance present, the objective can become multi-criteria: reduce general congestion **while imposing a much larger penalty on emergency-vehicle delay**.

That immediately creates interesting research questions:

1. How should emergency priority be balanced against gridlock on conflicting approaches?
2. How robust should the policy be to a false emergency detection?
3. Should priority be rule-based, reward-based or handled by a supervisory layer?
4. How early must the perception system detect the emergency vehicle to create a useful green corridor?

## A better research metric than detector mAP alone

If the detector feeds a controller, the final evaluation should not stop at image metrics. We should also measure system-level outcomes:

| Layer | Example metrics |
|---|---|
| Perception | Precision, recall, mAP, latency |
| State estimation | Queue-count error, occupancy error |
| Control | Average waiting time, travel time, throughput |
| Emergency priority | Emergency delay, clearance time |
| Robustness | Performance under missed/false detections |

This is a direction I find especially interesting: **evaluate perception by the decisions it enables**, not only by the boxes it draws.

## Where I would take the project next

A strong next experiment would compare three controllers under the same SUMO traffic scenarios:

- fixed-time control;
- RL control using ideal simulator state;
- RL control using noisy states generated from a vision model.

The gap between the second and third systems would quantify how perception quality affects control performance. We could then inject controlled detection errors and test whether uncertainty-aware state estimation or a safety supervisor makes the policy more robust.

That moves the project from “YOLO + RL” as two technologies placed next to each other toward a single **perception-and-control research system**.`,
      fa: `# از تشخیص خودرو تا کنترل هوشمند ترافیک

دوربینی که خودروها را تشخیص می‌دهد مفید است، اما هنوز یک سامانه کنترل ترافیک هوشمند نیست. برای تغییر تطبیقی چراغ، یک حلقه کامل لازم است: **ادراک ← تخمین وضعیت ← تصمیم ← کنترل ← بازخورد**.

این همان نخ مشترکی است که پایان‌نامه کارشناسی ارشد من را به کارهای بعدی روی دیتاست و تشخیص خودرو متصل می‌کند.

## لایه اول — ادراک

در این لایه سؤال‌های بصری پاسخ داده می‌شوند: چه خودروهایی حضور دارند؟ چند خودرو؟ در کدام مسیر؟ آیا خودروی امدادی وجود دارد؟

تشخیص شیء ابزار طبیعی این مرحله است چون هم کلاس و هم موقعیت را برمی‌گرداند. اما تعریف کلاس‌ها باید با هدف کنترل هماهنگ باشد. اگر آمبولانس در کلاس عمومی «ون» قرار بگیرد، سیاست اولویت امدادی اطلاعات کافی نخواهد داشت.

به همین دلیل در دیتاست هفت‌کلاسه ما، آمبولانس و خودروی آتش‌نشانی به‌صورت کلاس مستقل تعریف شدند.

## لایه دوم — تخمین وضعیت

خروجی خام آشکارساز هنوز state مناسب برای کنترل نیست. کنترل‌کننده به نمایش فشرده‌تری نیاز دارد، مثلاً:

- طول صف هر ورودی؛
- تراکم خودرو؛
- تخمین زمان انتظار؛
- اشغال خطوط؛
- حضور خودروی امدادی؛
- فاز فعلی چراغ و زمان سپری‌شده از آن.

این مرحله خیلی مهم است. عدم‌قطعیت آشکارسازی مستقیماً به عدم‌قطعیت کنترل تبدیل می‌شود. خودروهای از‌دست‌رفته، occlusion و اشتباه کلاس می‌توانند state ارسالی به عامل تصمیم‌گیر را تحریف کنند.

## لایه سوم — تصمیم‌گیری دنباله‌ای

در پایان‌نامه کارشناسی ارشد من، چهارراه در **SUMO** مدل شد و کنترل با ایده‌های Q-learning و شبکه عمیق بررسی شد. یادگیری تقویتی برای این مسئله مناسب است چون هر تصمیم چراغ، صف‌های آینده را تغییر می‌دهد. کنترل‌کننده نباید فقط فریم فعلی را بهینه کند؛ باید سیاستی برای دنباله تصمیم‌ها یاد بگیرد.

\`\`\`text
دوربین / آشکارساز
        ↓
تخمین وضعیت ترافیک
        ↓
سیاست RL → فرمان چراغ
        ↓
چهارراه / SUMO
        ↓
تأخیر، صف، عبور → پاداش
        ↺
\`\`\`

## اولویت امدادی تابع هدف را تغییر می‌دهد

تشخیص خودروی امدادی فقط باعث جزئی‌تر شدن دیتاست نمی‌شود؛ تابع هدف کنترل‌کننده را تغییر می‌دهد.

در حالت عادی شاید هدف کمینه‌کردن تأخیر متوسط باشد. با حضور آمبولانس، مسئله چندمعیاره می‌شود: کاهش تراکم عمومی **همراه با جریمه بسیار بزرگ‌تر برای تأخیر خودروی امدادی**.

این موضوع چند سؤال پژوهشی مهم ایجاد می‌کند:

1. اولویت امدادی چگونه با جلوگیری از قفل‌شدگی مسیرهای متقاطع متعادل شود؟
2. سیاست در برابر تشخیص اشتباه آمبولانس چقدر باید مقاوم باشد؟
3. اولویت بهتر است rule-based باشد، در reward وارد شود یا یک لایه supervisory داشته باشد؟
4. سامانه ادراک باید خودروی امدادی را از چه فاصله‌ای تشخیص دهد تا green corridor مفید ایجاد شود؟

## معیار بهتر از mAP آشکارساز

وقتی خروجی مدل وارد کنترل‌کننده می‌شود، ارزیابی نباید در معیارهای تصویر متوقف شود:

| لایه | نمونه معیار |
|---|---|
| ادراک | Precision، Recall، mAP، Latency |
| تخمین وضعیت | خطای شمارش صف و اشغال مسیر |
| کنترل | زمان انتظار، زمان سفر، throughput |
| اولویت امدادی | تأخیر خودروی امدادی، زمان عبور |
| پایداری | عملکرد در حضور miss و false detection |

این جهت برای من بسیار جذاب است: **کیفیت ادراک را با تصمیم‌هایی که ممکن می‌کند ارزیابی کنیم، نه فقط با باکس‌هایی که رسم می‌کند.**

## مرحله بعدی پژوهش

یک آزمایش خوب می‌تواند سه کنترل‌کننده را در سناریوهای یکسان SUMO مقایسه کند:

- کنترل زمان‌ثابت؛
- RL با state ایده‌آل شبیه‌ساز؛
- RL با state نویزی حاصل از مدل بینایی ماشین.

فاصله عملکرد سیستم دوم و سوم نشان می‌دهد کیفیت ادراک چقدر روی کنترل اثر دارد. بعد می‌توان خطاهای تشخیص را به‌صورت کنترل‌شده تزریق کرد و سنجید آیا تخمین وضعیت uncertainty-aware یا یک لایه ایمنی، سیاست را مقاوم‌تر می‌کند یا نه.

در این حالت پروژه دیگر صرفاً «YOLO + RL» به‌عنوان دو فناوری کنار هم نیست؛ بلکه یک **سامانه پژوهشی یکپارچه ادراک و کنترل** خواهد بود.`
    }
  },
  {
    slug: 'iranian-vehicle-dataset-yolov8',
    category: { en: 'Computer Vision', fa: 'بینایی ماشین' },
    date: '2024', readTime: 8, image: '/blog/iranian-vehicle-dataset.svg',
    sourceUrl: 'https://jad.shahroodut.ac.ir/article_3164.html',
    title: { en: 'Iranian Vehicle Images Dataset for Object Detection', fa: 'مجموعه‌داده تصاویر خودروهای ایرانی برای تشخیص شیء' },
    excerpt: {
      en: 'A domain-specific dataset of 3,000 Iranian vehicle images and 5,765 manually labeled bounding boxes improved YOLOv8s performance over a COCO-trained baseline.',
      fa: 'یک مجموعه‌داده بومی شامل ۳۰۰۰ تصویر خودرو و ۵۷۶۵ باکس برچسب‌گذاری‌شده که عملکرد YOLOv8s را نسبت به مدل آموزش‌دیده با COCO به‌طور محسوسی بهبود داد.'
    },
    content: {
      en: `# Iranian Vehicle Images Dataset for Object Detection with YOLOv8s

Reliable object detection depends heavily on the **quality and relevance of training data**. In this work, we built a dedicated dataset for Iranian urban traffic instead of relying only on generic international benchmarks.

## Why a local vehicle dataset matters

Vehicles seen in Iran have a different distribution of brands, models, viewpoints and urban conditions. A detector trained on a broad dataset can perform well globally while still underperforming in a specific local environment. We therefore collected images from Iranian vehicle marketplaces and traffic scenes, then manually labeled the vehicles.

## Dataset at a glance

- **3,000 images**
- **5,765 bounding boxes**
- Three classes: **car, bus and truck**
- Images collected from sources including Divar, Bama and urban traffic scenes
- Multiple viewpoints and vehicle orientations
- Train, validation and independent test partitions

## YOLOv8s results

The YOLOv8s model trained on the custom dataset achieved **91.7% precision** and **92.6% mAP@0.5**. Compared with the same architecture using COCO-trained weights as the main reference, the domain-specific training produced a substantial improvement in detection quality.

| Metric | Custom dataset |
|---|---:|
| Precision | 91.7% |
| Recall | 86.6% |
| mAP@0.5 | 92.6% |
| mAP@0.5:0.95 | 70.2% |

## Engineering lesson

The key lesson is simple: **better data can be more valuable than a more complicated model**. Careful collection, accurate annotation, class analysis and augmentation can make an existing architecture far more useful in a target environment.

### Practical pipeline

\`\`\`python
# simplified training concept
from ultralytics import YOLO

model = YOLO("yolov8s.pt")
model.train(
    data="iranian-vehicles.yaml",
    imgsz=800,
    epochs=100,
    lr0=0.01,
)
\`\`\`

The dataset is useful for intelligent transportation systems, traffic monitoring and future research on localized vehicle perception.`,
      fa: `# مجموعه‌داده تصاویر خودروهای ایرانی برای تشخیص شیء با YOLOv8s

کیفیت یک سامانه تشخیص شیء تا حد زیادی به **کیفیت و مرتبط‌بودن داده‌های آموزشی** وابسته است. در این پژوهش به‌جای اتکا صرف به دیتاست‌های عمومی، یک مجموعه‌داده اختصاصی برای شرایط واقعی ترافیک شهری ایران تهیه شد.

## چرا دیتاست بومی اهمیت دارد؟

توزیع برندها، مدل‌ها، زاویه دید و شرایط تصویری خودروها در ایران با بسیاری از دیتاست‌های عمومی متفاوت است. یک مدل عمومی ممکن است در بنچمارک‌ها عملکرد خوبی داشته باشد، اما در محیط محلی دچار افت شود. به همین دلیل تصاویر از منابع ایرانی جمع‌آوری و به‌صورت دستی برچسب‌گذاری شدند.

## مشخصات مجموعه‌داده

- **۳۰۰۰ تصویر**
- **۵۷۶۵ باکس برچسب‌گذاری‌شده**
- سه کلاس: **خودرو، اتوبوس و کامیون**
- استفاده از تصاویر منابعی مانند دیوار، باما و صحنه‌های ترافیکی
- تنوع مناسب در زاویه دید خودروها
- تفکیک داده‌ها به آموزش، اعتبارسنجی و آزمون مستقل

## نتایج YOLOv8s

مدل YOLOv8s آموزش‌دیده با این دیتاست به **دقت ۹۱٫۷٪** و **mAP@0.5 برابر ۹۲٫۶٪** رسید. مقایسه با مدل مبتنی بر COCO نشان داد آموزش دامنه‌محور می‌تواند کیفیت تشخیص را به‌شکل محسوسی افزایش دهد.

| معیار | نتیجه دیتاست اختصاصی |
|---|---:|
| Precision | ۹۱٫۷٪ |
| Recall | ۸۶٫۶٪ |
| mAP@0.5 | ۹۲٫۶٪ |
| mAP@0.5:0.95 | ۷۰٫۲٪ |

## نکته مهندسی

نتیجه مهم این پروژه این است که **داده بهتر گاهی از مدل پیچیده‌تر ارزشمندتر است**. جمع‌آوری هدفمند، برچسب‌گذاری دقیق، تحلیل توزیع کلاس‌ها و افزایش داده می‌تواند یک معماری موجود را برای کاربرد واقعی بسیار مؤثرتر کند.

### نمونه ساده فرایند آموزش

\`\`\`python
from ultralytics import YOLO

model = YOLO("yolov8s.pt")
model.train(
    data="iranian-vehicles.yaml",
    imgsz=800,
    epochs=100,
    lr0=0.01,
)
\`\`\`

این مجموعه‌داده می‌تواند در سامانه‌های حمل‌ونقل هوشمند، پایش ترافیک و تحقیقات آینده در تشخیص خودروهای بومی مورد استفاده قرار گیرد.`
    }
  },
  {
    slug: 'vehicle-detection-yolo-emergency-vehicles',
    category: { en: 'Deep Learning', fa: 'یادگیری عمیق' },
    date: '2024', readTime: 9, image: '/blog/yolo-emergency.svg',
    sourceUrl: 'https://ieeexplore.ieee.org/abstract/document/10432884/',
    title: { en: 'Vehicle Object Detection with Dedicated Emergency-Vehicle Classes', fa: 'تشخیص شیء خودرو با کلاس‌های مستقل خودروهای امدادی' },
    excerpt: { en: 'A seven-class, 29,759-image vehicle benchmark that treats ambulances and fire trucks as dedicated object-detection classes and evaluates real-time detector performance.', fa: 'بنچمارکی هفت‌کلاسه با ۲۹٬۷۵۹ تصویر که آمبولانس و خودروی آتش‌نشانی را به‌صورت کلاس مستقل تشخیص شیء مدل می‌کند و عملکرد آشکارسازهای بلادرنگ را می‌سنجد.' },
    content: {
      en: `# Object Detection for Vehicles with YOLO

Urban traffic management needs more than generic vehicle counting. Emergency vehicles such as **ambulances and fire trucks** should be recognized separately so that intelligent traffic-control systems can prioritize them when necessary.

## Dataset design

The study presents a vehicle dataset with **29,759 images** and seven classes:

1. Ambulance
2. Bus
3. Car
4. Motorcycle
5. Truck
6. Van
7. Fire truck

The dataset contains **55,925 annotations** and is split into training, validation and testing subsets. Data augmentation—including HSV transformations, translation, scaling, flipping and mosaic augmentation—was used to improve robustness and address class imbalance.

## Comparing YOLO versions

YOLOv5s, YOLOv6-s and YOLOv7 were trained and evaluated. Among them, YOLOv7 produced the strongest overall result with approximately **85% precision, 76% recall and 85% mAP@0.5**.

## Why emergency-vehicle classes matter

Generic datasets frequently map ambulances to vans and fire trucks to trucks. That is acceptable for general-purpose detection, but not for a smart intersection that needs to grant priority to emergency traffic.

A dedicated class structure allows the perception layer to feed more meaningful information into a control layer—such as a reinforcement-learning traffic agent.

## From perception to control

\`\`\`text
Camera → Vehicle detector → Traffic-state estimator
       → Priority logic / RL agent → Signal timing action
\`\`\`

This separation between perception and decision-making creates a practical foundation for intelligent transportation systems.`,
      fa: `# تشخیص خودرو با YOLO و شناسایی مستقل خودروهای امدادی

مدیریت هوشمند ترافیک تنها به شمارش عمومی خودروها محدود نمی‌شود. خودروهایی مانند **آمبولانس و ماشین آتش‌نشانی** باید به‌صورت مستقل شناسایی شوند تا سامانه کنترل ترافیک بتواند در زمان لازم برای آن‌ها اولویت ایجاد کند.

## طراحی مجموعه‌داده

در این پژوهش مجموعه‌داده‌ای با **۲۹٬۷۵۹ تصویر** و هفت کلاس معرفی شده است:

1. آمبولانس
2. اتوبوس
3. خودرو
4. موتورسیکلت
5. کامیون
6. ون
7. ماشین آتش‌نشانی

این مجموعه شامل **۵۵٬۹۲۵ برچسب** است و به داده‌های آموزش، اعتبارسنجی و آزمون تقسیم شده است. برای افزایش پایداری مدل و کاهش اثر عدم‌توازن کلاس‌ها، روش‌هایی مانند تغییر HSV، انتقال، مقیاس، Flip و Mosaic به‌کار رفت.

## مقایسه نسخه‌های YOLO

نسخه‌های YOLOv5s، YOLOv6-s و YOLOv7 آموزش داده شدند. بهترین نتیجه مربوط به YOLOv7 بود که در مجموع به حدود **۸۵٪ Precision، ۷۶٪ Recall و ۸۵٪ mAP@0.5** رسید.

## چرا کلاس‌های امدادی اهمیت دارند؟

در دیتاست‌های عمومی، آمبولانس ممکن است به‌عنوان Van و ماشین آتش‌نشانی به‌عنوان Truck دیده شود. برای یک آشکارساز عمومی این موضوع قابل قبول است، اما برای چهارراه هوشمندی که باید به خودروی امدادی اولویت بدهد کافی نیست.

ساختار کلاس اختصاصی باعث می‌شود لایه ادراک اطلاعات معنادارتری به لایه تصمیم‌گیری، مانند عامل یادگیری تقویتی، ارسال کند.

## از ادراک تا کنترل

\`\`\`text
دوربین ← تشخیص خودرو ← تخمین وضعیت ترافیک
       ← عامل RL / منطق اولویت ← فرمان چراغ راهنمایی
\`\`\`

این جداسازی میان ادراک و تصمیم‌گیری، پایه‌ای عملی برای سیستم‌های حمل‌ونقل هوشمند ایجاد می‌کند.`
    }
  },
  {
    slug: 'flood-risk-machine-learning',
    category: { en: 'Predictive AI', fa: 'هوش مصنوعی پیش‌بینی' },
    date: '2024', readTime: 7, image: '/blog/flood-risk.svg',
    sourceUrl: 'https://ieeexplore.ieee.org/document/10737603',
    title: { en: 'Flood Risk Analysis with LSTM, Random Forest and SVM', fa: 'تحلیل ریسک سیلاب با LSTM، Random Forest و SVM' },
    excerpt: { en: 'A comparison of three machine-learning approaches for predicting exposure, criticality and flood-risk scores using 2,634 bridge records.', fa: 'مقایسه سه روش یادگیری ماشین برای پیش‌بینی امتیاز مواجهه، بحرانی‌بودن و ریسک سیلاب با استفاده از داده‌های ۲۶۳۴ پل.' },
    content: {
      en: `# Flood Risk Analysis with Machine Learning

Flood-risk planning is fundamentally a prediction problem under uncertainty. This study evaluates three machine-learning approaches—**Random Forest, LSTM and SVM**—for estimating infrastructure-related flood risk.

## Modeling risk

The analysis uses **2,634 bridge records**. Risk is decomposed into two components:

- **Exposure**, capturing environmental and hazard-related variables
- **Criticality**, representing the importance and vulnerability of infrastructure

These components are then combined into an overall risk score.

## Model comparison

For exposure prediction, Random Forest achieved the lowest error (**MAE 0.41, MSE 0.25**). It was also strongest for criticality (**MAE 0.38, MSE 0.11**). For final risk-score prediction, LSTM achieved the best result (**MAE 0.31, MSE 0.11**).

| Target | Best model | MAE | MSE |
|---|---|---:|---:|
| Exposure | Random Forest | 0.41 | 0.25 |
| Criticality | Random Forest | 0.38 | 0.11 |
| Risk | LSTM | 0.31 | 0.11 |

## Why different models win

Random Forest is powerful for nonlinear relationships in tabular features and is often robust without heavy preprocessing. LSTM, meanwhile, can represent structured dependencies when data have an ordered or sequential character.

The broader engineering point is that there is rarely a universal “best model.” Model selection should follow the structure of the target problem and the error that matters operationally.

## Application

More reliable flood-risk estimates can support infrastructure planning, prioritization of mitigation measures and disaster-preparedness decisions.`,
      fa: `# تحلیل ریسک سیلاب با یادگیری ماشین

برنامه‌ریزی برای ریسک سیلاب در اصل یک مسئله پیش‌بینی در شرایط عدم‌قطعیت است. در این پژوهش سه رویکرد **Random Forest، LSTM و SVM** برای تخمین ریسک مرتبط با زیرساخت بررسی شدند.

## مدل‌سازی ریسک

تحلیل بر پایه **۲۶۳۴ رکورد مربوط به پل‌ها** انجام شد. ریسک به دو مؤلفه اصلی تقسیم شده است:

- **Exposure** یا میزان مواجهه با عوامل محیطی و خطر
- **Criticality** یا میزان اهمیت و آسیب‌پذیری زیرساخت

سپس این دو مؤلفه برای محاسبه امتیاز نهایی ریسک ترکیب می‌شوند.

## مقایسه مدل‌ها

برای پیش‌بینی Exposure، مدل Random Forest کمترین خطا را داشت (**MAE=0.41 و MSE=0.25**). برای Criticality نیز بهترین بود (**MAE=0.38 و MSE=0.11**). در پیش‌بینی امتیاز نهایی ریسک، LSTM بهترین نتیجه را ثبت کرد (**MAE=0.31 و MSE=0.11**).

| هدف | بهترین مدل | MAE | MSE |
|---|---|---:|---:|
| Exposure | Random Forest | 0.41 | 0.25 |
| Criticality | Random Forest | 0.38 | 0.11 |
| Risk | LSTM | 0.31 | 0.11 |

## چرا مدل‌های مختلف برنده شدند؟

Random Forest برای روابط غیرخطی در داده‌های جدولی بسیار مناسب است و معمولاً بدون پیش‌پردازش سنگین عملکرد پایداری دارد. LSTM نیز در ساختارهایی که وابستگی ترتیبی یا پیوستگی میان داده‌ها وجود دارد مزیت دارد.

نکته مهندسی مهم این است که یک «بهترین مدل عمومی» وجود ندارد؛ انتخاب مدل باید با ساختار مسئله و نوع خطای مهم در کاربرد واقعی هماهنگ باشد.

## کاربرد

تخمین دقیق‌تر ریسک سیلاب می‌تواند به اولویت‌بندی اقدامات مقاوم‌سازی، برنامه‌ریزی زیرساخت و تصمیم‌گیری بهتر در مدیریت بحران کمک کند.`
    }
  },
  {
    slug: 'sustainable-energy-fuzzy-control',
    category: { en: 'Intelligent Control', fa: 'کنترل هوشمند' },
    date: '2023', readTime: 8, image: '/blog/energy-control.svg',
    sourceUrl: 'https://ieeexplore.ieee.org/abstract/document/10506386',
    title: { en: 'Sustainable Energy Management with Fuzzy Logic and Adaptive Nonlinear Control', fa: 'مدیریت انرژی پایدار با منطق فازی و کنترل تطبیقی غیرخطی' },
    excerpt: { en: 'A centralized controller coordinates 100 air-conditioning units using wind power, grid energy, fuzzy decision-making and adaptive nonlinear control.', fa: 'یک کنترل‌کننده مرکزی برای هماهنگی ۱۰۰ واحد تهویه مطبوع با ترکیب انرژی باد، شبکه، تصمیم‌گیری فازی و کنترل تطبیقی غیرخطی.' },
    content: {
      en: `# Sustainable Energy Management in Multi-Unit Cooling Systems

Large groups of air-conditioning units can create significant peak demand. This work combines **fuzzy logic**, **adaptive nonlinear control** and **renewable wind energy** to manage a cluster of thermostatically controlled loads.

## System idea

The energy supply combines power from the electrical grid with renewable generation. A fuzzy controller decides how much grid power should be used based on variables such as electricity price and ambient temperature.

An adaptive nonlinear controller then coordinates the ON/OFF behavior of individual cooling loads so aggregate demand tracks the desired power reference.

## Why the adaptive layer matters

A fixed nonlinear-control gain can be difficult to tune: a large value may introduce chattering, while a small value can reduce tracking performance. The adaptive law changes the effective control gain online, reducing the need for manual tuning.

## Simulation scenarios

The MATLAB simulation considered **100 air-conditioning units** and three electricity-pricing strategies:

- Fixed-time pricing
- Usage-time pricing
- Real-time pricing

Reported power savings were **1821.6, 2401.9 and 2131.5 kW/h** respectively across the three scenarios, while maintaining a comfortable temperature envelope.

## Broader relevance

The architecture illustrates how intelligent control can connect user comfort, variable energy prices and renewable generation. Similar ideas can be extended to smart buildings, demand response and distributed energy systems.`,
      fa: `# مدیریت انرژی پایدار در سامانه‌های سرمایشی چندواحدی

گروه بزرگی از سیستم‌های تهویه مطبوع می‌تواند بار قابل توجهی در ساعات اوج مصرف ایجاد کند. در این پژوهش **منطق فازی**، **کنترل تطبیقی غیرخطی** و **انرژی تجدیدپذیر باد** برای مدیریت مجموعه‌ای از بارهای ترموستاتیکی ترکیب شده‌اند.

## ایده سامانه

منبع انرژی ترکیبی از برق شبکه و تولید تجدیدپذیر است. کنترل‌کننده فازی با توجه به متغیرهایی مانند قیمت برق و دمای محیط تعیین می‌کند چه مقدار از انرژی مورد نیاز از شبکه تأمین شود.

در مرحله بعد، کنترل‌کننده تطبیقی غیرخطی وضعیت روشن/خاموش واحدهای سرمایشی را هماهنگ می‌کند تا مصرف کل به مرجع توان مطلوب نزدیک شود.

## اهمیت لایه تطبیقی

انتخاب یک بهره ثابت برای کنترل غیرخطی دشوار است؛ مقدار زیاد می‌تواند Chattering ایجاد کند و مقدار کم ممکن است عملکرد Tracking را کاهش دهد. قانون تطبیقی، بهره کنترل را به‌صورت آنلاین تنظیم می‌کند و نیاز به تنظیم دستی را کاهش می‌دهد.

## سناریوهای شبیه‌سازی

شبیه‌سازی MATLAB برای **۱۰۰ واحد تهویه مطبوع** و سه ساختار قیمت‌گذاری انجام شد:

- قیمت‌گذاری ثابت
- قیمت‌گذاری بر اساس زمان مصرف
- قیمت‌گذاری بلادرنگ

مقادیر صرفه‌جویی گزارش‌شده برای توان به‌ترتیب **۱۸۲۱٫۶، ۲۴۰۱٫۹ و ۲۱۳۱٫۵ کیلووات‌ساعت** بود و هم‌زمان محدوده آسایش دمایی حفظ شد.

## اهمیت گسترده‌تر

این ساختار نشان می‌دهد کنترل هوشمند چگونه می‌تواند آسایش کاربر، قیمت متغیر انرژی و تولید تجدیدپذیر را به یکدیگر متصل کند. همین ایده‌ها در ساختمان هوشمند، Demand Response و سیستم‌های انرژی توزیع‌شده قابل توسعه هستند.`
    }
  },
  {
    slug: 'deep-reinforcement-learning-traffic-signals',
    category: { en: 'Reinforcement Learning', fa: 'یادگیری تقویتی' },
    date: '2021', readTime: 7, image: '/blog/traffic-rl.svg',
    sourceUrl: null,
    title: { en: 'Deep Reinforcement Learning for Intelligent Traffic Signal Control', fa: 'کنترل هوشمند چراغ راهنمایی با یادگیری تقویتی عمیق' },
    excerpt: { en: 'My M.S. thesis combined Q-learning, deep neural networks, SUMO simulation and YOLO-based traffic estimation to adapt signal timing to real-time traffic conditions.', fa: 'پایان‌نامه کارشناسی ارشد من ترکیبی از Q-learning، شبکه عصبی عمیق، شبیه‌ساز SUMO و تخمین ترافیک مبتنی بر YOLO برای تنظیم هوشمند زمان چراغ‌ها بود.' },
    content: {
      en: `# Deep Reinforcement Learning for Intelligent Traffic Signal Control

Traditional traffic lights usually operate with fixed timing plans or manually tuned rules. My M.S. thesis explored a more adaptive idea: treat the intersection as a **reinforcement-learning environment** and let an intelligent agent learn which signal action reduces congestion.

## The learning loop

The traffic environment was modeled in **SUMO**. At every decision step, the agent received a representation of current traffic conditions, selected a signal action and observed a reward related to traffic performance.

\`\`\`text
Traffic state → DQN/Q-learning agent → Signal phase
      ↑                               ↓
      └──────── reward / delay ───────┘
\`\`\`

## Connecting computer vision

A practical adaptive controller needs a reliable estimate of traffic density. The project therefore investigated real-time video processing and **YOLO-based vehicle detection** as the perception layer.

This creates an end-to-end architecture:

1. Camera observes the intersection
2. Detector estimates vehicles and traffic density
3. State is sent to the RL agent
4. Agent chooses the next traffic-light action
5. The environment produces a new state and reward

## Why reinforcement learning fits traffic control

Traffic is stochastic and highly dynamic. The optimal decision depends not only on the current queue but on how current actions influence future congestion. Reinforcement learning is naturally suited to this sequential decision problem.

## Transferable insight

The most important lesson from the thesis was learning how to combine **mathematical modeling, simulation, perception and sequential optimization** in one engineering system. That same pattern appears in robotics, resource allocation and many real-time AI applications.`,
      fa: `# کنترل هوشمند چراغ راهنمایی با یادگیری تقویتی عمیق

چراغ‌های راهنمایی کلاسیک معمولاً بر اساس زمان‌بندی ثابت یا قوانین از پیش تنظیم‌شده کار می‌کنند. در پایان‌نامه کارشناسی ارشد من ایده‌ای تطبیقی‌تر بررسی شد: چهارراه به‌عنوان یک **محیط یادگیری تقویتی** مدل شود و عامل هوشمند یاد بگیرد چه تصمیمی باعث کاهش تراکم و تأخیر می‌شود.

## حلقه یادگیری

محیط ترافیک با **SUMO** شبیه‌سازی شد. در هر مرحله تصمیم‌گیری، عامل وضعیت فعلی ترافیک را دریافت می‌کرد، یک فاز چراغ را انتخاب می‌کرد و سپس پاداشی متناسب با عملکرد ترافیک دریافت می‌شد.

\`\`\`text
وضعیت ترافیک ← عامل DQN/Q-learning ← فاز چراغ
      ↑                              ↓
      └──────── پاداش / تأخیر ───────┘
\`\`\`

## اتصال بینایی ماشین

یک کنترل‌کننده تطبیقی واقعی به تخمین قابل اعتماد از تراکم خودرو نیاز دارد. به همین دلیل پردازش ویدئوی بلادرنگ و **تشخیص خودرو با YOLO** به‌عنوان لایه ادراک بررسی شد.

معماری کلی به این صورت است:

1. دوربین چهارراه را مشاهده می‌کند
2. آشکارساز تعداد و تراکم خودروها را تخمین می‌زند
3. وضعیت به عامل RL ارسال می‌شود
4. عامل فرمان چراغ بعدی را انتخاب می‌کند
5. محیط، وضعیت و پاداش جدید ایجاد می‌کند

## چرا یادگیری تقویتی برای ترافیک مناسب است؟

ترافیک ماهیتی تصادفی و پویا دارد. تصمیم بهینه فقط به صف فعلی وابسته نیست، بلکه باید اثر تصمیم فعلی بر تراکم آینده را هم در نظر بگیرد. یادگیری تقویتی برای چنین مسئله تصمیم‌گیری دنباله‌ای بسیار مناسب است.

## بینش قابل انتقال

مهم‌ترین دستاورد این پایان‌نامه برای من، تجربه ترکیب **مدل‌سازی ریاضی، شبیه‌سازی، ادراک و بهینه‌سازی دنباله‌ای** در یک سیستم مهندسی بود؛ الگویی که در رباتیک، تخصیص منابع و بسیاری از کاربردهای بلادرنگ هوش مصنوعی نیز تکرار می‌شود.`
    }
  },
  {
    slug: 'offline-voice-detection-smart-homes',
    category: { en: 'IoT & Edge AI', fa: 'اینترنت اشیا و هوش لبه' },
    date: '2023', readTime: 6, image: '/blog/smart-home-voice.svg',
    sourceUrl: 'https://www.researchgate.net/publication/375910479_Offline_voice_detection_in_smart_homes',
    title: { en: 'Offline Voice Detection in Smart Homes: Privacy-Aware Edge Automation', fa: 'تشخیص گفتار آفلاین در خانه هوشمند؛ اتوماسیون لبه با حفظ حریم خصوصی' },
    excerpt: {
      en: 'A multi-purpose smart-home automation concept that processes voice commands locally, combining offline interaction, Raspberry Pi-class edge computing and environmental control.',
      fa: 'طرحی چندمنظوره برای خانه هوشمند که فرمان‌های صوتی را به‌صورت محلی پردازش می‌کند و تعامل آفلاین، رایانش لبه و کنترل محیط را در کنار هم قرار می‌دهد.'
    },
    content: {
      en: `# Offline Voice Detection in Smart Homes

Cloud voice assistants are convenient, but a smart home does not always need to send every command to an external service. This conference work explored a **multi-purpose smart-home automation system** in which voice interaction can be processed locally and connected to authentication, automation and environmental control.

## Why offline voice matters

Local processing can make a home-automation system more resilient to internet outages and can reduce the amount of private audio that needs to leave the local environment. For engineering prototypes, it also creates a useful edge-computing architecture: sensing, inference and actuation remain close to the device.

## System idea

The proposed smart-home concept brings several functions together:

- Offline voice-command interaction
- Home automation and device control
- Authentication and access logic
- Interaction with environmental sensors
- Edge processing with embedded / Raspberry Pi-class hardware

\`\`\`text
Voice command → Local processing → Intent / authentication
                         ↓
Sensors → Smart-home controller → Lights / devices / environment
\`\`\`

## Engineering value

The interesting part is not only speech recognition itself. It is the **integration problem**: connecting user interaction, embedded hardware, sensors and automation in a system that should remain responsive and dependable.

That same design pattern appears across modern IoT systems—move essential intelligence closer to the device, keep control loops local where practical, and use network services as an enhancement rather than a single point of failure.`,
      fa: `# تشخیص گفتار آفلاین در خانه هوشمند

دستیارهای صوتی ابری راحت هستند، اما یک خانه هوشمند لزوماً نباید هر فرمان را برای پردازش به یک سرویس خارجی ارسال کند. در این مقاله کنفرانسی، یک **سامانه چندمنظوره اتوماسیون خانه هوشمند** بررسی شد که تعامل صوتی را به‌صورت محلی پردازش کرده و آن را با احراز هویت، اتوماسیون و کنترل محیط ترکیب می‌کند.

## چرا پردازش آفلاین مهم است؟

پردازش محلی می‌تواند سامانه را در زمان قطع اینترنت پایدارتر کند و نیاز به ارسال صدای خصوصی به خارج از محیط محلی را کاهش دهد. از دید مهندسی نیز یک معماری مناسب برای رایانش لبه ایجاد می‌شود؛ حس‌کردن، پردازش و عملگرها نزدیک به خود دستگاه باقی می‌مانند.

## ایده سامانه

طرح خانه هوشمند چند قابلیت را در یک معماری ترکیب می‌کند:

- تعامل صوتی و فرمان آفلاین
- اتوماسیون و کنترل تجهیزات خانه
- منطق احراز هویت و دسترسی
- تعامل با حسگرهای محیطی
- پردازش لبه با سخت‌افزارهای نهفته و Raspberry Pi

\`\`\`text
فرمان صوتی ← پردازش محلی ← تشخیص قصد / احراز هویت
                          ↓
حسگرها ← کنترلر خانه هوشمند ← روشنایی / تجهیزات / محیط
\`\`\`

## ارزش مهندسی

بخش جذاب پروژه فقط تشخیص گفتار نیست؛ مسئله اصلی **یکپارچه‌سازی سیستم** است: اتصال تعامل انسان، سخت‌افزار نهفته، حسگرها و اتوماسیون در سیستمی که باید سریع و قابل اعتماد باقی بماند.

همین الگو در بسیاری از سامانه‌های IoT جدید دیده می‌شود: هوشمندی ضروری تا حد امکان نزدیک دستگاه اجرا شود، حلقه‌های کنترل حیاتی محلی بمانند و سرویس‌های شبکه نقش تکمیل‌کننده داشته باشند، نه یک نقطه شکست واحد.`
    }
  }
]

export const articles = rawArticles.map((article) => ({ ...publicationMetadata[article.slug], ...editorialMetadata[article.slug], ...article })).sort((a,b) => String(b.sortDate || b.date).localeCompare(String(a.sortDate || a.date)))
export const getArticle = (slug) => articles.find((article) => article.slug === slug)
