export const articles = [
  {
    slug: 'iranian-vehicle-dataset-yolov8',
    category: { en: 'Computer Vision', fa: 'بینایی ماشین' },
    date: '2024', readTime: 8, image: '/blog/iranian-vehicle-dataset.svg',
    sourceUrl: 'https://jad.shahroodut.ac.ir/article_3164.html',
    title: { en: 'Iranian Vehicle Images Dataset for Object Detection with YOLOv8s', fa: 'مجموعه‌داده تصاویر خودروهای ایرانی برای تشخیص شیء با YOLOv8s' },
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
    title: { en: 'Object Detection for Vehicles with YOLO: Including Emergency Vehicles', fa: 'تشخیص خودرو با YOLO؛ با تمرکز بر خودروهای امدادی' },
    excerpt: { en: 'A seven-class vehicle benchmark with 29,759 images separates ambulances and fire trucks from generic vehicle classes and evaluates YOLOv5, YOLOv6 and YOLOv7.', fa: 'بنچمارکی هفت‌کلاسه با ۲۹٬۷۵۹ تصویر که آمبولانس و خودروی آتش‌نشانی را به‌صورت مستقل مدل می‌کند و YOLOv5، YOLOv6 و YOLOv7 را مقایسه می‌کند.' },
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
  }
]

export const getArticle = (slug) => articles.find((article) => article.slug === slug)
