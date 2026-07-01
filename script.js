/* =========================================================
   PRICE DATA (UK + EN labels)
   Методологія й повна версія полів — у prices.json.
   Тут дані продубльовано, щоб калькулятор працював навіть
   відкритим напряму як файл, без сервера.
========================================================= */
const PRICES = {
  siteTypes: [
    { id:"landing", label:"Landing Page", label_en:"Landing Page", base:350, baseWeeks:2,
      hint:"Одна сторінка під конкретну дію: заявка, продаж, запис", hint_en:"A single page built for one action: a lead, a sale, a booking" },
    { id:"corporate", label:"Корпоративний сайт", label_en:"Corporate website", base:900, baseWeeks:4,
      hint:"Багатосторінкове онлайн-представництво компанії", hint_en:"Multi-page online presence for a company" },
    { id:"company", label:"Сайт компанії", label_en:"Company website", base:800, baseWeeks:4,
      hint:"Презентаційний сайт з розділами про послуги та команду", hint_en:"Presentation site with services and team sections" },
    { id:"blog", label:"Блог", label_en:"Blog", base:450, baseWeeks:3,
      hint:"Контентний майданчик зі стрічкою статей", hint_en:"Content platform with an article feed" },
    { id:"news", label:"Новинний портал", label_en:"News portal", base:1700, baseWeeks:7,
      hint:"Багато рубрик, стрічка новин, високе навантаження", hint_en:"Many sections, news feed, high traffic load" },
    { id:"ecommerce", label:"Інтернет-магазин", label_en:"E-commerce store", base:2100, baseWeeks:8,
      hint:"Каталог, кошик, оплата, доставка", hint_en:"Catalog, cart, payments, delivery" },
    { id:"crm", label:"CRM", label_en:"CRM", base:3600, baseWeeks:12,
      hint:"Система керування клієнтами та угодами", hint_en:"System for managing customers and deals" },
    { id:"lms", label:"LMS", label_en:"LMS", base:3200, baseWeeks:10,
      hint:"Платформа для курсів та навчання", hint_en:"Platform for courses and online learning" },
    { id:"portal", label:"Портал", label_en:"Portal", base:2850, baseWeeks:10,
      hint:"Багатофункціональний ресурс з сервісами для користувачів", hint_en:"Multi-service resource with tools for users" },
    { id:"catalog", label:"Каталог", label_en:"Catalog", base:850, baseWeeks:5,
      hint:"Каталог товарів чи послуг без онлайн-оплати", hint_en:"Catalog of products or services, no online payment" },
    { id:"booking", label:"Сервіс бронювання", label_en:"Booking service", base:1800, baseWeeks:7,
      hint:"Онлайн-запис, календар, підтвердження", hint_en:"Online booking, calendar, confirmations" },
    { id:"realestate", label:"Сайт нерухомості", label_en:"Real estate website", base:1350, baseWeeks:6,
      hint:"Каталог об'єктів, фільтри, карта", hint_en:"Property listings, filters, map" },
    { id:"auto", label:"Автосайт", label_en:"Automotive website", base:1300, baseWeeks:6,
      hint:"Каталог авто, фільтри, підбір", hint_en:"Car catalog, filters, selection tool" },
    { id:"medical", label:"Медичний сайт", label_en:"Medical website", base:1400, baseWeeks:6,
      hint:"Запис до лікаря, послуги клініки", hint_en:"Doctor booking, clinic services" },
    { id:"education", label:"Освітній сайт", label_en:"Education website", base:1250, baseWeeks:6,
      hint:"Курси, розклад, викладачі", hint_en:"Courses, schedule, instructors" },
    { id:"restaurant", label:"Сайт ресторану", label_en:"Restaurant website", base:700, baseWeeks:4,
      hint:"Меню, бронювання столика, доставка", hint_en:"Menu, table booking, delivery" },
    { id:"personalbrand", label:"Особистий бренд", label_en:"Personal brand", base:550, baseWeeks:3,
      hint:"Сайт-візитка експерта чи публічної особи", hint_en:"Profile site for an expert or public figure" },
    { id:"portfolio", label:"Портфоліо", label_en:"Portfolio", base:450, baseWeeks:3,
      hint:"Демонстрація робіт та кейсів", hint_en:"Showcase of work and case studies" },
    { id:"webapp", label:"Веб-додаток", label_en:"Web application", base:3900, baseWeeks:12,
      hint:"Кастомна веб-логіка під конкретну задачу", hint_en:"Custom web logic for a specific task" },
    { id:"custom", label:"Індивідуальна розробка", label_en:"Custom development", base:1950, baseWeeks:8,
      hint:"Проєкт, що не підпадає під типові категорії", hint_en:"A project that doesn't fit standard categories" }
  ],
  pages: [
    { id:"1", label:"1", multiplier:0.6, weeksMultiplier:0.6 },
    { id:"3", label:"3", multiplier:0.85, weeksMultiplier:0.8 },
    { id:"5", label:"5", multiplier:1.0, weeksMultiplier:1.0 },
    { id:"10", label:"10", multiplier:1.3, weeksMultiplier:1.25 },
    { id:"15", label:"15", multiplier:1.55, weeksMultiplier:1.45 },
    { id:"20", label:"20", multiplier:1.8, weeksMultiplier:1.65 },
    { id:"30", label:"30", multiplier:2.2, weeksMultiplier:2.0 },
    { id:"50", label:"50+", multiplier:2.8, weeksMultiplier:2.5 }
  ],
  designTiers: [
    { id:"template", label:"Шаблон", label_en:"Template", multiplier:0.7, weeksBonus:0,
      hint:"Готовий преміум-шаблон, адаптований під бренд", hint_en:"A premium ready-made template adapted to your brand" },
    { id:"custom", label:"Індивідуальний дизайн", label_en:"Custom design", multiplier:1.0, weeksBonus:0.5,
      hint:"Дизайн з нуля під ваш бренд у Figma", hint_en:"Design built from scratch for your brand in Figma" },
    { id:"premium", label:"Premium UI", label_en:"Premium UI", multiplier:1.2, weeksBonus:1,
      hint:"Поглиблене UX-опрацювання, авторська дизайн-система", hint_en:"Deep UX work, a custom design system" },
    { id:"luxury", label:"Luxury Design", label_en:"Luxury Design", multiplier:1.5, weeksBonus:2,
      hint:"Ексклюзивний преміальний дизайн вищого рівня", hint_en:"Exclusive top-tier premium design" }
  ],
  designAddons: [
    { id:"motion", label:"Motion Design", label_en:"Motion Design", price:260, weeks:0.5,
      hint:"Анімовані переходи між станами й секціями", hint_en:"Animated transitions between states and sections" },
    { id:"illustrations", label:"Унікальні ілюстрації (AI)", label_en:"Custom illustrations (AI)", price:220, weeks:0.5,
      hint:"Авторська графіка, згенерована за допомогою AI, замість стокових зображень", hint_en:"AI-generated custom artwork instead of stock images" },
    { id:"lottie", label:"Lottie-анімації", label_en:"Lottie animations", price:190, weeks:0.5,
      hint:"Легкі векторні анімації для інтерфейсу", hint_en:"Lightweight vector animations for the interface" },
    { id:"microanim", label:"Мікроанімації", label_en:"Micro-interactions", price:110, weeks:0.3,
      hint:"Дрібні реакції інтерфейсу на дії користувача", hint_en:"Small interface reactions to user actions" }
  ],
  functionGroups: [
    { id:"comm", label:"Комунікація та боти", label_en:"Communication & bots", items:[
      { id:"form", label:"Форма заявки", label_en:"Lead form", price:30, hint:"Форма зі збором заявок та валідацією", hint_en:"A lead form with validation" },
      { id:"calc", label:"Інтерактивний калькулятор", label_en:"Interactive calculator", price:190, hint:"Власний калькулятор послуг чи вартості", hint_en:"Your own service or price calculator" },
      { id:"chat", label:"Онлайн-чат", label_en:"Live chat", price:45, hint:"Віджет чату на сайті", hint_en:"Chat widget on the website" },
      { id:"telegram", label:"Telegram бот", label_en:"Telegram bot", price:130, hint:"Приймання заявок і сповіщення в Telegram", hint_en:"Receive leads and notifications in Telegram" },
      { id:"whatsapp", label:"WhatsApp інтеграція", label_en:"WhatsApp integration", price:90, hint:"Кнопка та приймання повідомлень через WhatsApp", hint_en:"Button and messages via WhatsApp" },
      { id:"viber", label:"Viber інтеграція", label_en:"Viber integration", price:90, hint:"Кнопка та сповіщення через Viber", hint_en:"Button and notifications via Viber" },
      { id:"emailmarketing", label:"Email-розсилка", label_en:"Email newsletter", price:60, hint:"Підключення сервісу розсилок", hint_en:"Connecting a newsletter service" },
      { id:"push", label:"Push-повідомлення", label_en:"Push notifications", price:90, hint:"Сповіщення у браузері", hint_en:"Browser notifications" },
      { id:"sms", label:"SMS-сповіщення", label_en:"SMS notifications", price:80, hint:"Підключення SMS-шлюзу", hint_en:"Connecting an SMS gateway" }
    ]},
    { id:"payments", label:"Оплата та доставка", label_en:"Payments & delivery", items:[
      { id:"stripe", label:"Stripe", label_en:"Stripe", price:110, hint:"Прийом міжнародних платежів", hint_en:"Accept international payments" },
      { id:"paypal", label:"PayPal", label_en:"PayPal", price:95, hint:"Оплата через PayPal", hint_en:"Payment via PayPal" },
      { id:"wayforpay", label:"WayForPay", label_en:"WayForPay", price:100, hint:"Український платіжний шлюз", hint_en:"Ukrainian payment gateway" },
      { id:"liqpay", label:"LiqPay", label_en:"LiqPay", price:90, hint:"Оплата через LiqPay", hint_en:"Payment via LiqPay" },
      { id:"monobank", label:"Monobank еквайринг", label_en:"Monobank acquiring", price:95, hint:"Прийом оплат через Monobank", hint_en:"Accept payments via Monobank" },
      { id:"applepay", label:"Apple Pay", label_en:"Apple Pay", price:65, hint:"Швидка оплата з Apple-пристроїв", hint_en:"Fast checkout from Apple devices" },
      { id:"googlepay", label:"Google Pay", label_en:"Google Pay", price:65, hint:"Швидка оплата з Android-пристроїв", hint_en:"Fast checkout from Android devices" },
      { id:"novaposhta", label:"Нова Пошта API", label_en:"Nova Poshta API", price:80, hint:"Розрахунок доставки і відділення", hint_en:"Delivery cost and branch lookup" },
      { id:"ukrposhta", label:"Укрпошта API", label_en:"Ukrposhta API", price:75, hint:"Інтеграція з Укрпоштою", hint_en:"Integration with Ukrposhta" },
      { id:"meest", label:"Meest API", label_en:"Meest API", price:75, hint:"Інтеграція служби доставки Meest", hint_en:"Integration with Meest delivery" }
    ]},
    { id:"account", label:"Особистий кабінет", label_en:"User accounts", items:[
      { id:"cabinet", label:"Особистий кабінет", label_en:"Personal dashboard", price:300, hint:"Профіль користувача з історією дій", hint_en:"User profile with activity history" },
      { id:"auth", label:"Реєстрація / Авторизація", label_en:"Sign up / Log in", price:160, hint:"Створення акаунтів і вхід", hint_en:"Account creation and login" },
      { id:"2fa_user", label:"2FA для користувачів", label_en:"2FA for users", price:110, hint:"Двофакторна автентифікація", hint_en:"Two-factor authentication" },
      { id:"roles", label:"Ролі користувачів", label_en:"User roles", price:150, hint:"Різні рівні доступу до сайту", hint_en:"Different access levels on the site" },
      { id:"storage", label:"Файлове сховище", label_en:"File storage", price:130, hint:"Завантаження та зберігання файлів", hint_en:"Uploading and storing files" }
    ]},
    { id:"content", label:"Контент і каталог", label_en:"Content & catalog", items:[
      { id:"gallery", label:"Галерея", label_en:"Gallery", price:45, hint:"Візуальна галерея зображень", hint_en:"Visual image gallery" },
      { id:"blogmodule", label:"Блог / Новини", label_en:"Blog / News", price:110, hint:"Модуль статей із категоріями", hint_en:"Article module with categories" },
      { id:"catalogmodule", label:"Каталог товарів/послуг", label_en:"Product/service catalog", price:190, hint:"Структурований каталог з картками", hint_en:"Structured catalog with item cards" },
      { id:"filters", label:"Фільтри та сортування", label_en:"Filters & sorting", price:130, hint:"Розширена фільтрація каталогу", hint_en:"Advanced catalog filtering" },
      { id:"search", label:"Розширений пошук", label_en:"Advanced search", price:120, hint:"Пошук по сайту з підказками", hint_en:"Site search with suggestions" },
      { id:"reviews", label:"Модуль відгуків", label_en:"Reviews module", price:65, hint:"Збір і показ відгуків клієнтів", hint_en:"Collecting and showing customer reviews" },
      { id:"multilang", label:"Мультимовність", label_en:"Multi-language", price:110, hint:"Друга мова інтерфейсу сайту", hint_en:"A second interface language" }
    ]},
    { id:"analytics", label:"Аналітика та захист від спаму", label_en:"Analytics & anti-spam", items:[
      { id:"cookie", label:"Cookie-банер", label_en:"Cookie banner", price:20, hint:"Повідомлення про використання cookie", hint_en:"Cookie usage notice" },
      { id:"ga", label:"Google Analytics", label_en:"Google Analytics", price:30, hint:"Підключення веб-аналітики", hint_en:"Connecting web analytics" },
      { id:"fbpixel", label:"Facebook Pixel", label_en:"Facebook Pixel", price:30, hint:"Піксель для реклами в Meta", hint_en:"Pixel for Meta ads" },
      { id:"tiktokpixel", label:"TikTok Pixel", label_en:"TikTok Pixel", price:30, hint:"Піксель для реклами в TikTok", hint_en:"Pixel for TikTok ads" },
      { id:"hotjar", label:"Hotjar", label_en:"Hotjar", price:35, hint:"Теплові карти та запис сесій", hint_en:"Heatmaps and session recordings" },
      { id:"captcha", label:"Captcha / антиспам", label_en:"Captcha / anti-spam", price:30, hint:"Захист форм від ботів", hint_en:"Protecting forms from bots" }
    ]},
    { id:"integrations", label:"Інтеграції та API", label_en:"Integrations & API", items:[
      { id:"webhook", label:"Webhook інтеграції", label_en:"Webhook integrations", price:90, hint:"Передача подій у зовнішні сервіси", hint_en:"Sending events to external services" },
      { id:"restapi", label:"REST API", label_en:"REST API", price:220, hint:"Власний REST API для сайту", hint_en:"A custom REST API for the site" },
      { id:"graphql", label:"GraphQL API", label_en:"GraphQL API", price:260, hint:"Гнучкий API-шар GraphQL", hint_en:"A flexible GraphQL API layer" },
      { id:"firebase", label:"Firebase", label_en:"Firebase", price:160, hint:"Бекенд-сервіси Firebase", hint_en:"Firebase backend services" },
      { id:"supabase", label:"Supabase", label_en:"Supabase", price:160, hint:"Бекенд-сервіси Supabase", hint_en:"Supabase backend services" },
      { id:"googlesheets", label:"Google Sheets", label_en:"Google Sheets", price:65, hint:"Заявки напряму у Google-таблицю", hint_en:"Leads sent straight to a Google Sheet" },
      { id:"googlecalendar", label:"Google Calendar", label_en:"Google Calendar", price:65, hint:"Синхронізація записів із календарем", hint_en:"Syncing bookings with a calendar" },
      { id:"crmintegration", label:"Інтеграція з CRM", label_en:"CRM integration", price:260, hint:"Передача заявок у вашу CRM", hint_en:"Sending leads to your CRM" },
      { id:"openai", label:"OpenAI інтеграція", label_en:"OpenAI integration", price:200, hint:"AI-функції на базі GPT", hint_en:"AI features powered by GPT" },
      { id:"claudeai", label:"Claude інтеграція", label_en:"Claude integration", price:200, hint:"AI-функції на базі Claude", hint_en:"AI features powered by Claude" },
      { id:"gemini", label:"Gemini інтеграція", label_en:"Gemini integration", price:190, hint:"AI-функції на базі Gemini", hint_en:"AI features powered by Gemini" },
      { id:"deepseek", label:"DeepSeek інтеграція", label_en:"DeepSeek integration", price:190, hint:"AI-функції на базі DeepSeek", hint_en:"AI features powered by DeepSeek" }
    ]},
    { id:"platform", label:"Платформа та адміністрування", label_en:"Platform & administration", items:[
      { id:"admin", label:"Адмін-панель / CMS", label_en:"Admin panel / CMS", price:330, hint:"Панель для самостійного керування контентом", hint_en:"A panel to manage content yourself" },
      { id:"wordpress", label:"Встановлення WordPress на хостинг", label_en:"WordPress setup on hosting", price:180, hint:"Розгортання та налаштування WP, якщо потрібен цей рушій", hint_en:"Deploying and configuring WP if that engine is needed" },
      { id:"pwa", label:"PWA (офлайн-режим)", label_en:"PWA (offline mode)", price:220, hint:"Сайт працює як застосунок, є офлайн", hint_en:"Site works like an app, with offline support" }
    ]}
  ],
  security: [
    { id:"ssl", label:"SSL-сертифікат", label_en:"SSL certificate", price:15, hint:"Шифрування з'єднання", hint_en:"Encrypted connection" },
    { id:"cloudflare", label:"Cloudflare", label_en:"Cloudflare", price:30, hint:"CDN і базовий захист", hint_en:"CDN and basic protection" },
    { id:"antibot", label:"Захист від ботів", label_en:"Bot protection", price:65, hint:"Фільтрація автоматичного трафіку", hint_en:"Filtering automated traffic" },
    { id:"waf", label:"WAF", label_en:"WAF", price:130, hint:"Firewall рівня веб-застосунку", hint_en:"Web application firewall" },
    { id:"backup", label:"Backup", label_en:"Backup", price:45, hint:"Регулярне резервне копіювання", hint_en:"Regular backups" },
    { id:"monitoring", label:"Моніторинг", label_en:"Monitoring", price:50, hint:"Стеження за доступністю сайту", hint_en:"Uptime monitoring" },
    { id:"firewall", label:"Firewall", label_en:"Firewall", price:65, hint:"Мережевий захист сервера", hint_en:"Network-level server protection" },
    { id:"logs", label:"Логування подій", label_en:"Event logging", price:45, hint:"Журнал дій для аудиту", hint_en:"Action log for auditing" },
    { id:"2fa_admin", label:"2FA для адмінки", label_en:"2FA for admin panel", price:60, hint:"Захист панелі керування", hint_en:"Protecting the control panel" }
  ],
  contentServices: [
    { id:"copywriting", label:"Копірайтинг текстів", label_en:"Copywriting", price:110, hint:"Написання текстів для сторінок", hint_en:"Writing texts for pages" },
    { id:"photos", label:"Професійна фотозйомка", label_en:"Professional photography", price:190, hint:"Фотосесія для сайту", hint_en:"Photo shoot for the website" },
    { id:"aiimages", label:"AI-генерація зображень", label_en:"AI image generation", price:90, hint:"Унікальні зображення через AI", hint_en:"Unique images generated with AI" },
    { id:"icons", label:"Іконки та ілюстрації", label_en:"Icons & illustrations", price:110, hint:"Набір авторських іконок", hint_en:"A set of custom icons" }
  ],
  optimization: { id:"optimization", label:"Поглиблена оптимізація швидкості", label_en:"Advanced speed optimization",
    price:160, hint:"PageSpeed, lazy-load, WebP/AVIF, CDN, кешування, Core Web Vitals",
    hint_en:"PageSpeed, lazy-load, WebP/AVIF, CDN, caching, Core Web Vitals" },
  support: [
    { id:"none", label:"Без підтримки", label_en:"No support", price:0 },
    { id:"m1", label:"1 місяць", label_en:"1 month", price:45 },
    { id:"m3", label:"3 місяці", label_en:"3 months", price:110 },
    { id:"m6", label:"6 місяців", label_en:"6 months", price:200 },
    { id:"m12", label:"12 місяців", label_en:"12 months", price:360 }
  ]
};

/* =========================================================
   REVISIONS DATA (edits on an existing site)
========================================================= */
const REVISIONS = {
  editTypes: [
    { id:"content", label:"Редагування тексту", label_en:"Text edits", price:15,
      hint:"Заміна чи правка текстів на сторінках", hint_en:"Replacing or editing text on pages" },
    { id:"media", label:"Заміна зображень / медіа", label_en:"Replace images / media", price:12,
      hint:"Оновлення фото, банерів, відео", hint_en:"Updating photos, banners, video" },
    { id:"style", label:"Зміна кольорів / стилів", label_en:"Colors / styling changes", price:20,
      hint:"Правки візуального оформлення елементів", hint_en:"Tweaking the visual styling of elements" },
    { id:"newsection", label:"Нова секція на сторінці", label_en:"New section on a page", price:60,
      hint:"Додавання нового блоку в існуючу сторінку", hint_en:"Adding a new block to an existing page" },
    { id:"newpage", label:"Нова сторінка на сайті", label_en:"New page on the site", price:120,
      hint:"Створення додаткової сторінки в тому ж стилі", hint_en:"Creating an extra page in the same style" },
    { id:"bugfix", label:"Виправлення бага", label_en:"Bug fix", price:35,
      hint:"Усунення некоректної роботи елемента", hint_en:"Fixing something that works incorrectly" },
    { id:"mobile", label:"Адаптація під мобільні", label_en:"Mobile adaptation", price:70,
      hint:"Виправлення відображення на телефонах", hint_en:"Fixing display issues on phones" },
    { id:"speed", label:"Прискорення сайту", label_en:"Site speed-up", price:90,
      hint:"Оптимізація швидкодії існуючих сторінок", hint_en:"Optimizing the speed of existing pages" },
    { id:"integration", label:"Форма / бот / оплата", label_en:"Form / bot / payment", price:80,
      hint:"Додавання чи зміна форми, бота або оплати", hint_en:"Adding or changing a form, bot, or payment" },
    { id:"consultation", label:"Консультація / аудит", label_en:"Consultation / audit", price:25,
      hint:"Розбір сайту та рекомендації", hint_en:"Reviewing the site and giving recommendations" },
    { id:"other", label:"Інше (опишіть у коментарі)", label_en:"Other (describe in the comment)", price:0,
      hint:"Вартість визначається індивідуально після опису", hint_en:"Price is determined individually after your description" }
  ],
  volume: [
    { id:"small", label:"1–2 правки", label_en:"1–2 edits", multiplier:1.0 },
    { id:"medium", label:"3–7 правок", label_en:"3–7 edits", multiplier:1.8 },
    { id:"large", label:"8+ правок", label_en:"8+ edits", multiplier:3.0 }
  ],
  urgency: [
    { id:"standard", label:"Стандартно (2–4 дні)", label_en:"Standard (2–4 days)", short:"Стандартно", short_en:"Standard", multiplier:1.0 },
    { id:"urgent", label:"Терміново (до 24 год) · +50%", label_en:"Urgent (within 24h) · +50%", short:"Терміново", short_en:"Urgent", multiplier:1.5 },
    { id:"asap", label:"Сьогодні · +100%", label_en:"Today · +100%", short:"Сьогодні", short_en:"Today", multiplier:2.0 }
  ]
};

/* =========================================================
   UI TEXT (static strings)
========================================================= */
const UI_TEXT = {
  uk: {
    pageTitle: "Калькулятор вартості розробки сайту",
    langUk: "UA", langEn: "EN",
    stepOf: (n, total) => `Крок ${n} з ${total}`,
    s1eyebrow: "Крок 01 / Основа", s1title: "Який сайт потрібен?", s1sub: "Оберіть тип проєкту — від цього рахуємо базову вартість і терміни.",
    s2eyebrow: "Крок 02 / Обсяг", s2title: "Скільки сторінок?", s2sub: "Орієнтовна кількість унікальних екранів чи розділів сайту.",
    s3eyebrow: "Крок 03 / Дизайн", s3title: "Рівень дизайну", s3sub: "Наскільки унікальним і опрацьованим має бути вигляд сайту.", s3subh: "Додатково до дизайну",
    s4eyebrow: "Крок 04 / Функціонал", s4title: "Що має вміти сайт?", s4sub: "Оберіть боти, оплати, інтеграції та інші можливості — усе одразу впливає на ціну справа.",
    s5eyebrow: "Крок 05 / Безпека", s5title: "Захист сайту", s5sub: "Базові речі на кшталт SSL зазвичай варто брати завжди.",
    s6eyebrow: "Крок 06 / Контент", s6title: "Наповнення сайту", s6sub: "Якщо потрібні готові тексти чи фото — відзначте тут.",
    s7eyebrow: "Крок 07 / Швидкість", s7title: "Оптимізація продуктивності", s7sub: "Базова швидкодія входить завжди. Це — поглиблений пакет для важких проєктів.",
    s8eyebrow: "Крок 08 / Підтримка", s8title: "Супровід після запуску", s8sub: "Оплачується окремо від разової вартості розробки, помісячно.",
    s9eyebrow: "Крок 09 / Фінал", s9title: "Отримати комерційну пропозицію", s9sub: "Залиште контакти — заявка одразу прийде нам у Telegram.",
    lblName: "Ім'я *", lblPhone: "Телефон *", lblTelegram: "Telegram", lblEmail: "Email", lblCompany: "Компанія", lblComment: "Коментар",
    btnSubmit: "Отримати пропозицію", btnPdf: "Завантажити PDF", btnPrev: "← Назад", btnNext: "Далі →",
    summaryEyebrow: "// проєкт-конфігурація",
    summaryDescEmpty: "Оберіть тип сайту, щоб почати збірку проєкту.",
    priceLabel: "Орієнтовна вартість", min: "мін", avg: "сер", max: "макс",
    statWeeks: "термін", statCount: "опцій обрано", statSavings: "економія пакетом",
    receiptEmpty: "Тут з'являтиметься склад вашого проєкту",
    supportLine: "Підтримка",
    btnCta: "Отримати комерційну пропозицію",
    ctaSub: "Фінальна ціна узгоджується після короткого брифу",
    weeksUnit: "тижн.",
    pagesSuffix: " стор.",
    landingLockNote: "Landing Page — односторінковий сайт за визначенням, тому кількість сторінок тут зафіксована.",
    complexity: { simple:"Простий", mid:"Середній", high:"Складний", vhigh:"Дуже складний" },
    errName: "Вкажіть ім'я", errPhone: "Перевірте номер телефону", errType: "Спершу оберіть тип сайту (крок 1)", errTypeNav: "Оберіть тип сайту, щоб продовжити",
    toastSending: "Надсилаємо…",
    toastSuccess: "Заявку надіслано в Telegram. Дякуємо!",
    toastTelegramFail: "Не вдалося надіслати в Telegram. Спробуйте ще раз або зв'яжіться напряму.",
    finishNote: (name, price) => `Дякуємо, ${name || "друже"}! Заявку надіслано (орієнтовно $${price}). Можете також завантажити PDF нижче.`,
    pdfTitle: "Попередня комерційна пропозиція",
    pdfGenerated: "Сформовано",
    pdfPriceBox: "Орієнтовна вартість розробки",
    pdfRange: "Діапазон", pdfTerm: "Термін", pdfWeeks: "тижнів",
    pdfComposition: "Склад проєкту", pdfItem: "Позиція", pdfCost: "Вартість", pdfTotal: "Разом",
    pdfContact: "Контактні дані", pdfPrintHint: "Це вікно можна зберегти як PDF через Ctrl+P → «Зберегти як PDF».",
    summaryDesc: (typeLabel, pagesLabel, designLabel, count) =>
      `${typeLabel}, ${pagesLabel} сторінок, дизайн: ${designLabel.toLowerCase()}. ${count ? `Додатково обрано ${count} опцій.` : "Додаткові опції поки не обрані."}`,

    modeNew: "Новий сайт", modeRev: "Правки на сайті",
    r1eyebrow: "Правки на сайті", r1title: "Що потрібно доробити?",
    r1sub: "Оберіть, які зміни потрібні на вже готовому сайті — оцінка оновлюється одразу справа.",
    r2subh: "Обсяг правок", r3subh: "Терміновість", r4subh: "Сайт і контакти",
    lblUrl: "Посилання на сайт *", lblRComment: "Опис правок *",
    revBtnSubmit: "Надіслати заявку", revBtnPdf: "Завантажити PDF",
    revSummaryEyebrow: "// заявка на правки",
    revSummaryDescEmpty: "Оберіть, що потрібно змінити на сайті.",
    revSummaryDesc: (count, volumeLabel, urgencyShort) => `${count} тип${count === 1 ? "" : "и"} правок · обсяг: ${volumeLabel} · ${urgencyShort}`,
    revPriceLabel: "Орієнтовна вартість правок",
    revStatTime: "термін", revStatCount: "правок обрано", revStatUrgency: "терміновість",
    revReceiptEmpty: "Тут з'являтиметься список правок",
    revBtnCta: "Надіслати заявку на правки",
    revCtaSub: "Мінімальне замовлення — $15",
    revBadgeQuick: "Точкова правка", revBadgeMedium: "Середній обсяг", revBadgeLarge: "Великий обсяг",
    revTimeToday: "сьогодні", revTimeUrgent: "до 24 год", revTimeSmall: "1–2 дні", revTimeMedium: "2–4 дні", revTimeLarge: "4–7 днів",
    revSurchargeLabel: "Обсяг і терміновість",
    revCustomQuote: "за домовл.",
    errUrl: "Вкажіть посилання на сайт", errComment: "Опишіть, що потрібно змінити", errRevType: "Оберіть хоча б один тип правки",
    revToastSuccess: "Заявку на правки надіслано в Telegram!",
    revFinishNote: (name, price) => `Дякуємо, ${name || "друже"}! Заявку на правки надіслано (орієнтовно $${price}).`,
    revPdfTitle: "Заявка на правки сайту"
  },
  en: {
    pageTitle: "Website Development Cost Calculator",
    langUk: "UA", langEn: "EN",
    stepOf: (n, total) => `Step ${n} of ${total}`,
    s1eyebrow: "Step 01 / Basics", s1title: "What kind of website do you need?", s1sub: "Pick a project type — it's the base for price and timeline.",
    s2eyebrow: "Step 02 / Scope", s2title: "How many pages?", s2sub: "Approximate number of unique screens or sections.",
    s3eyebrow: "Step 03 / Design", s3title: "Design level", s3sub: "How unique and polished the site's look should be.", s3subh: "Design add-ons",
    s4eyebrow: "Step 04 / Functionality", s4title: "What should the site be able to do?", s4sub: "Pick bots, payments, integrations and other features — everything updates the price on the right.",
    s5eyebrow: "Step 05 / Security", s5title: "Site protection", s5sub: "Basics like SSL are usually worth taking by default.",
    s6eyebrow: "Step 06 / Content", s6title: "Site content", s6sub: "If you need ready texts or photos, mark them here.",
    s7eyebrow: "Step 07 / Speed", s7title: "Performance optimization", s7sub: "Basic performance is always included. This is an advanced package for heavy projects.",
    s8eyebrow: "Step 08 / Support", s8title: "Post-launch support", s8sub: "Billed separately from the one-time build cost, monthly.",
    s9eyebrow: "Step 09 / Final", s9title: "Get a commercial proposal", s9sub: "Leave your contacts — the request will go straight to our Telegram.",
    lblName: "Name *", lblPhone: "Phone *", lblTelegram: "Telegram", lblEmail: "Email", lblCompany: "Company", lblComment: "Comment",
    btnSubmit: "Get proposal", btnPdf: "Download PDF", btnPrev: "← Back", btnNext: "Next →",
    summaryEyebrow: "// project configuration",
    summaryDescEmpty: "Choose a site type to start building the project.",
    priceLabel: "Estimated cost", min: "min", avg: "avg", max: "max",
    statWeeks: "timeline", statCount: "options selected", statSavings: "bundle savings",
    receiptEmpty: "Your project composition will appear here",
    supportLine: "Support",
    btnCta: "Get a commercial proposal",
    ctaSub: "Final price is confirmed after a short brief",
    weeksUnit: "wks",
    pagesSuffix: " pg.",
    landingLockNote: "A Landing Page is a one-page site by definition, so the page count is fixed here.",
    complexity: { simple:"Simple", mid:"Medium", high:"Complex", vhigh:"Very complex" },
    errName: "Please enter your name", errPhone: "Please check the phone number", errType: "Please choose a site type first (step 1)", errTypeNav: "Choose a site type to continue",
    toastSending: "Sending…",
    toastSuccess: "Request sent to Telegram. Thank you!",
    toastTelegramFail: "Couldn't send to Telegram. Please try again or contact us directly.",
    finishNote: (name, price) => `Thank you, ${name || "there"}! The request has been sent (approx. $${price}). You can also download the PDF below.`,
    pdfTitle: "Preliminary commercial proposal",
    pdfGenerated: "Generated",
    pdfPriceBox: "Estimated development cost",
    pdfRange: "Range", pdfTerm: "Timeline", pdfWeeks: "weeks",
    pdfComposition: "Project composition", pdfItem: "Item", pdfCost: "Cost", pdfTotal: "Total",
    pdfContact: "Contact details", pdfPrintHint: "You can save this window as a PDF via Ctrl+P → \"Save as PDF\".",
    summaryDesc: (typeLabel, pagesLabel, designLabel, count) =>
      `${typeLabel}, ${pagesLabel} pages, design: ${designLabel.toLowerCase()}. ${count ? `${count} extra options selected.` : "No extra options selected yet."}`,

    modeNew: "New site", modeRev: "Site revisions",
    r1eyebrow: "Site revisions", r1title: "What needs updating?",
    r1sub: "Choose what changes you need on an existing site — the estimate updates on the right instantly.",
    r2subh: "Scope of changes", r3subh: "Urgency", r4subh: "Site and contacts",
    lblUrl: "Site URL *", lblRComment: "Describe the changes *",
    revBtnSubmit: "Send request", revBtnPdf: "Download PDF",
    revSummaryEyebrow: "// revision request",
    revSummaryDescEmpty: "Choose what needs to change on the site.",
    revSummaryDesc: (count, volumeLabel, urgencyShort) => `${count} edit type${count === 1 ? "" : "s"} · scope: ${volumeLabel} · ${urgencyShort}`,
    revPriceLabel: "Estimated revision cost",
    revStatTime: "timeline", revStatCount: "edits selected", revStatUrgency: "urgency",
    revReceiptEmpty: "Your list of edits will appear here",
    revBtnCta: "Send revision request",
    revCtaSub: "Minimum order — $15",
    revBadgeQuick: "Quick fix", revBadgeMedium: "Medium scope", revBadgeLarge: "Large scope",
    revTimeToday: "today", revTimeUrgent: "within 24h", revTimeSmall: "1–2 days", revTimeMedium: "2–4 days", revTimeLarge: "4–7 days",
    revSurchargeLabel: "Scope & urgency",
    revCustomQuote: "custom",
    errUrl: "Please enter the site URL", errComment: "Please describe what needs to change", errRevType: "Choose at least one edit type",
    revToastSuccess: "Revision request sent to Telegram!",
    revFinishNote: (name, price) => `Thank you, ${name || "there"}! Your revision request has been sent (approx. $${price}).`,
    revPdfTitle: "Site revision request"
  }
};

/* =========================================================
   Telegram delivery (client-side only — see note below)
   -----------------------------------------------------------
   Це чистий фронтенд без бекенду, тож справжньої секретності
   тут не буває: будь-який токен, вписаний у JS, видно у
   DevTools → Network, коли форма реально відправляється.
   Нижче токен зберігається в розбитому/base64 вигляді лише
   для того, щоб він не "світився" звичайним текстом при
   побіжному перегляді вихідного коду сторінки — це не захист
   від технічно підкованої людини. Якщо потрібна саме
   конфіденційність токена — його має ховати сервер
   (наприклад, простий проксі-воркер), а не клієнтський JS.
========================================================= */
const _tgP1 = "pt2UEJVS5dXU2hUQBpzNxUDN2EDNxgDO".split("").reverse().join("");
const _tgP2 = "==AO5RUYtU2RNhzV51CZINXdtRjaj9GN".split("").reverse().join("");
function _resolveToken(){
  try { return atob(_tgP1 + _tgP2); } catch(e){ return ""; }
}
const TELEGRAM_CONFIG = {
  enabled: true,
  chatId: "423617460"
};

/* =========================================================
   STATE
========================================================= */
const state = {
  step: 1,
  totalSteps: 9,
  lang: "uk",
  mode: "newsite",
  siteType: null,
  pages: "5",
  pagesMemory: "5",
  designTier: "custom",
  designAddons: new Set(),
  functions: new Set(),
  security: new Set(["ssl"]),
  content: new Set(),
  optimization: false,
  support: "none",
  revEditTypes: new Set(),
  revVolume: "small",
  revUrgency: "standard"
};

const fmt = (n) => Math.round(n).toLocaleString("en-US");
const t = () => UI_TEXT[state.lang];
const L = (item) => state.lang === "en" && item.label_en ? item.label_en : item.label;
const H = (item) => state.lang === "en" && item.hint_en ? item.hint_en : (item.hint || "");
const Ls = (item) => state.lang === "en" && item.short_en ? item.short_en : item.short;

/* =========================================================
   INIT
========================================================= */
function init(){
  bindLangSwitch();
  bindModeSwitch();
  applyStaticText();
  renderAll();
  renderRevisions();
  bindNav();
  bindForm();
  bindRevForm();
  goToStep(1);
  recalc();
  recalcRevisions();
}

function renderAll(){
  renderSiteTypes();
  renderPages();
  renderDesignTiers();
  renderDesignAddons();
  renderFunctionGroups();
  renderCheckGrid("securityGrid", PRICES.security, state.security);
  renderCheckGrid("contentGrid", PRICES.contentServices, state.content);
  renderOptimization();
  renderSupport();
}

/* =========================================================
   LANGUAGE SWITCH
========================================================= */
function bindLangSwitch(){
  document.getElementById("langBtnUk").addEventListener("click", () => setLang("uk"));
  document.getElementById("langBtnEn").addEventListener("click", () => setLang("en"));
}
function setLang(lang){
  if(state.lang === lang) return;
  state.lang = lang;
  document.getElementById("langBtnUk").classList.toggle("active", lang === "uk");
  document.getElementById("langBtnEn").classList.toggle("active", lang === "en");
  document.getElementById("htmlRoot").lang = lang;
  applyStaticText();
  renderAll();
  renderRevisions();
  goToStep(state.step);
  recalc();
  recalcRevisions();
}

/* =========================================================
   MODE SWITCH (New site / Revisions)
========================================================= */
function bindModeSwitch(){
  document.getElementById("modeBtnNew").addEventListener("click", () => setMode("newsite"));
  document.getElementById("modeBtnRev").addEventListener("click", () => setMode("revisions"));
}
function setMode(mode){
  if(state.mode === mode) return;
  state.mode = mode;
  document.getElementById("modeBtnNew").classList.toggle("active", mode === "newsite");
  document.getElementById("modeBtnRev").classList.toggle("active", mode === "revisions");
  document.getElementById("modeNewSite").classList.toggle("active", mode === "newsite");
  document.getElementById("modeRevisions").classList.toggle("active", mode === "revisions");
  document.getElementById("progressWrap").style.display = mode === "newsite" ? "flex" : "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function applyStaticText(){
  const T = t();
  document.getElementById("pageTitle").textContent = T.pageTitle;
  document.getElementById("s1-eyebrow").textContent = T.s1eyebrow;
  document.getElementById("s1-title").textContent = T.s1title;
  document.getElementById("s1-sub").textContent = T.s1sub;
  document.getElementById("s2-eyebrow").textContent = T.s2eyebrow;
  document.getElementById("s2-title").textContent = T.s2title;
  document.getElementById("s2-sub").textContent = T.s2sub;
  document.getElementById("s3-eyebrow").textContent = T.s3eyebrow;
  document.getElementById("s3-title").textContent = T.s3title;
  document.getElementById("s3-sub").textContent = T.s3sub;
  document.getElementById("s3-subh").textContent = T.s3subh;
  document.getElementById("s4-eyebrow").textContent = T.s4eyebrow;
  document.getElementById("s4-title").textContent = T.s4title;
  document.getElementById("s4-sub").textContent = T.s4sub;
  document.getElementById("s5-eyebrow").textContent = T.s5eyebrow;
  document.getElementById("s5-title").textContent = T.s5title;
  document.getElementById("s5-sub").textContent = T.s5sub;
  document.getElementById("s6-eyebrow").textContent = T.s6eyebrow;
  document.getElementById("s6-title").textContent = T.s6title;
  document.getElementById("s6-sub").textContent = T.s6sub;
  document.getElementById("s7-eyebrow").textContent = T.s7eyebrow;
  document.getElementById("s7-title").textContent = T.s7title;
  document.getElementById("s7-sub").textContent = T.s7sub;
  document.getElementById("s8-eyebrow").textContent = T.s8eyebrow;
  document.getElementById("s8-title").textContent = T.s8title;
  document.getElementById("s8-sub").textContent = T.s8sub;
  document.getElementById("s9-eyebrow").textContent = T.s9eyebrow;
  document.getElementById("s9-title").textContent = T.s9title;
  document.getElementById("s9-sub").textContent = T.s9sub;

  document.getElementById("lbl-fName").textContent = T.lblName;
  document.getElementById("lbl-fPhone").textContent = T.lblPhone;
  document.getElementById("lbl-fTelegram").textContent = T.lblTelegram;
  document.getElementById("lbl-fEmail").textContent = T.lblEmail;
  document.getElementById("lbl-fCompany").textContent = T.lblCompany;
  document.getElementById("lbl-fComment").textContent = T.lblComment;

  document.getElementById("btnSubmit").textContent = T.btnSubmit;
  document.getElementById("btnDownloadPdf").textContent = T.btnPdf;
  document.getElementById("btnPrev").textContent = T.btnPrev;
  document.getElementById("btnNext").textContent = T.btnNext;

  document.getElementById("summaryEyebrow").textContent = T.summaryEyebrow;
  document.getElementById("priceLabel").textContent = T.priceLabel;
  document.getElementById("statWeeksLabel").textContent = T.statWeeks;
  document.getElementById("statCountLabel").textContent = T.statCount;
  document.getElementById("statSavingsLabel").textContent = T.statSavings;
  document.getElementById("supportLineLabel").textContent = T.supportLine;
  document.getElementById("btnCta").textContent = T.btnCta;
  document.getElementById("ctaSub").textContent = T.ctaSub;

  document.getElementById("progressLabel").textContent = T.stepOf(state.step, state.totalSteps);

  document.getElementById("modeBtnNew").textContent = T.modeNew;
  document.getElementById("modeBtnRev").textContent = T.modeRev;

  document.getElementById("r1-eyebrow").textContent = T.r1eyebrow;
  document.getElementById("r1-title").textContent = T.r1title;
  document.getElementById("r1-sub").textContent = T.r1sub;
  document.getElementById("r2-subh").textContent = T.r2subh;
  document.getElementById("r3-subh").textContent = T.r3subh;
  document.getElementById("r4-subh").textContent = T.r4subh;
  document.getElementById("lbl-rUrl").textContent = T.lblUrl;
  document.getElementById("lbl-rName").textContent = T.lblName;
  document.getElementById("lbl-rPhone").textContent = T.lblPhone;
  document.getElementById("lbl-rTelegram").textContent = T.lblTelegram;
  document.getElementById("lbl-rEmail").textContent = T.lblEmail;
  document.getElementById("lbl-rComment").textContent = T.lblRComment;
  document.getElementById("revBtnSubmit").textContent = T.revBtnSubmit;
  document.getElementById("revBtnPdf").textContent = T.revBtnPdf;
  document.getElementById("revSummaryEyebrow").textContent = T.revSummaryEyebrow;
  document.getElementById("revPriceLabel").textContent = T.revPriceLabel;
  document.getElementById("revStatTimeLabel").textContent = T.revStatTime;
  document.getElementById("revStatCountLabel").textContent = T.revStatCount;
  document.getElementById("revStatUrgencyLabel").textContent = T.revStatUrgency;
  document.getElementById("revBtnCta").textContent = T.revBtnCta;
  document.getElementById("revCtaSub").textContent = T.revCtaSub;
}

/* =========================================================
   RENDER: SITE TYPES
========================================================= */
function renderSiteTypes(){
  const grid = document.getElementById("siteTypeGrid");
  grid.innerHTML = "";
  PRICES.siteTypes.forEach(item => {
    const card = document.createElement("div");
    card.className = "card radio" + (state.siteType === item.id ? " selected" : "");
    card.innerHTML = `
      <div class="card-check"></div>
      <div class="card-title">${L(item)}</div>
      <div class="card-hint">${H(item)}</div>
      <div class="card-price">${state.lang === "en" ? "from" : "від"} $${fmt(item.base)}</div>
    `;
    card.addEventListener("click", () => {
      const wasLanding = state.siteType === "landing";
      if(item.id === "landing"){
        if(state.pages !== "1") state.pagesMemory = state.pages;
        state.pages = "1";
      } else if(wasLanding){
        state.pages = state.pagesMemory || "5";
      }
      state.siteType = item.id;
      [...grid.children].forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      renderPages();
      recalc();
    });
    grid.appendChild(card);
  });
}

function renderPages(){
  const T = t();
  const row = document.getElementById("pagesRow");
  row.innerHTML = "";

  if(state.siteType === "landing"){
    row.classList.add("locked");
    const note = document.createElement("div");
    note.className = "pages-note";
    note.textContent = T.landingLockNote;
    row.appendChild(note);
    const chip = document.createElement("div");
    chip.className = "chip selected locked-chip";
    chip.textContent = "1" + T.pagesSuffix;
    row.appendChild(chip);
    return;
  }

  row.classList.remove("locked");
  PRICES.pages.forEach(p => {
    const chip = document.createElement("div");
    chip.className = "chip" + (p.id === state.pages ? " selected" : "");
    chip.textContent = p.label + (p.id === "50" ? "" : T.pagesSuffix);
    chip.addEventListener("click", () => {
      state.pages = p.id;
      state.pagesMemory = p.id;
      [...row.children].forEach(c => { if(c.classList.contains("chip")) c.classList.remove("selected"); });
      chip.classList.add("selected");
      recalc();
    });
    row.appendChild(chip);
  });
}

function renderDesignTiers(){
  const grid = document.getElementById("designTierGrid");
  grid.innerHTML = "";
  PRICES.designTiers.forEach(d => {
    const card = document.createElement("div");
    card.className = "card radio" + (d.id === state.designTier ? " selected" : "");
    card.innerHTML = `
      <div class="card-check"></div>
      <div class="card-title">${L(d)}</div>
      <div class="card-hint">${H(d)}</div>
    `;
    card.addEventListener("click", () => {
      state.designTier = d.id;
      [...grid.children].forEach(c => c.classList.remove("selected"));
      card.classList.add("selected");
      recalc();
    });
    grid.appendChild(card);
  });
}

function renderDesignAddons(){
  const grid = document.getElementById("designAddonsGrid");
  grid.innerHTML = "";
  PRICES.designAddons.forEach(a => {
    const card = document.createElement("div");
    card.className = "card" + (state.designAddons.has(a.id) ? " selected" : "");
    card.innerHTML = `
      <div class="card-check"></div>
      <div class="card-title">${L(a)}</div>
      <div class="card-hint">${H(a)}</div>
      <div class="card-price">+$${fmt(a.price)}</div>
    `;
    card.addEventListener("click", () => {
      toggleSet(state.designAddons, a.id);
      card.classList.toggle("selected");
      recalc();
    });
    grid.appendChild(card);
  });
}

function renderFunctionGroups(){
  const wrap = document.getElementById("functionGroups");
  wrap.innerHTML = "";
  PRICES.functionGroups.forEach(group => {
    const gEl = document.createElement("div");
    gEl.className = "func-group";
    gEl.innerHTML = `<div class="func-group-title">${L(group)} <span class="func-group-count" data-count="${group.id}">0</span></div>`;
    const gridEl = document.createElement("div");
    gridEl.className = "func-grid";
    group.items.forEach(item => {
      const el = document.createElement("div");
      el.className = "func-item" + (state.functions.has(item.id) ? " selected" : "");
      el.title = H(item);
      el.innerHTML = `
        <div class="func-item-left">
          <div class="func-item-box"></div>
          <div class="func-item-label">${L(item)}</div>
        </div>
        <div class="func-item-price">+$${fmt(item.price)}</div>
      `;
      el.addEventListener("click", () => {
        toggleSet(state.functions, item.id);
        el.classList.toggle("selected");
        updateFuncGroupCount(group);
        recalc();
      });
      gridEl.appendChild(el);
    });
    gEl.appendChild(gridEl);
    wrap.appendChild(gEl);
    updateFuncGroupCount(group);
  });
}

function updateFuncGroupCount(group){
  const badge = document.querySelector(`[data-count="${group.id}"]`);
  if(!badge) return;
  const n = group.items.filter(i => state.functions.has(i.id)).length;
  badge.textContent = n;
}

function renderCheckGrid(elId, items, targetSet){
  const grid = document.getElementById(elId);
  grid.innerHTML = "";
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card" + (targetSet.has(item.id) ? " selected" : "");
    card.innerHTML = `
      <div class="card-check"></div>
      <div class="card-title">${L(item)}</div>
      <div class="card-hint">${H(item)}</div>
      <div class="card-price">+$${fmt(item.price)}</div>
    `;
    card.addEventListener("click", () => {
      toggleSet(targetSet, item.id);
      card.classList.toggle("selected");
      recalc();
    });
    grid.appendChild(card);
  });
}

function renderOptimization(){
  const grid = document.getElementById("optimizationGrid");
  const o = PRICES.optimization;
  grid.innerHTML = `
    <div class="card${state.optimization ? " selected" : ""}" id="optCard">
      <div class="card-check"></div>
      <div class="card-title">${L(o)}</div>
      <div class="card-hint">${H(o)}</div>
      <div class="card-price">+$${fmt(o.price)}</div>
    </div>
  `;
  document.getElementById("optCard").addEventListener("click", (e) => {
    state.optimization = !state.optimization;
    e.currentTarget.classList.toggle("selected");
    recalc();
  });
}

function renderSupport(){
  const row = document.getElementById("supportRow");
  row.innerHTML = "";
  PRICES.support.forEach(s => {
    const chip = document.createElement("div");
    chip.className = "chip" + (s.id === state.support ? " selected" : "");
    chip.textContent = L(s) + (s.price ? ` · $${fmt(s.price)}` : "");
    chip.addEventListener("click", () => {
      state.support = s.id;
      [...row.children].forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      recalc();
    });
    row.appendChild(chip);
  });
}

function toggleSet(set, id){
  if(set.has(id)) set.delete(id); else set.add(id);
}

/* =========================================================
   RENDER: REVISIONS TAB
========================================================= */
function renderRevisions(){
  renderRevEditTypes();
  renderRevVolume();
  renderRevUrgency();
}

function renderRevEditTypes(){
  const grid = document.getElementById("revEditTypesGrid");
  grid.innerHTML = "";
  REVISIONS.editTypes.forEach(item => {
    const card = document.createElement("div");
    card.className = "card" + (state.revEditTypes.has(item.id) ? " selected" : "");
    const priceText = item.price > 0 ? `+$${fmt(item.price)}` : t().revCustomQuote;
    card.innerHTML = `
      <div class="card-check"></div>
      <div class="card-title">${L(item)}</div>
      <div class="card-hint">${H(item)}</div>
      <div class="card-price">${priceText}</div>
    `;
    card.addEventListener("click", () => {
      toggleSet(state.revEditTypes, item.id);
      card.classList.toggle("selected");
      recalcRevisions();
    });
    grid.appendChild(card);
  });
}

function renderRevVolume(){
  const row = document.getElementById("revVolumeRow");
  row.innerHTML = "";
  REVISIONS.volume.forEach(v => {
    const chip = document.createElement("div");
    chip.className = "chip" + (v.id === state.revVolume ? " selected" : "");
    chip.textContent = L(v);
    chip.addEventListener("click", () => {
      state.revVolume = v.id;
      [...row.children].forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      recalcRevisions();
    });
    row.appendChild(chip);
  });
}

function renderRevUrgency(){
  const row = document.getElementById("revUrgencyRow");
  row.innerHTML = "";
  REVISIONS.urgency.forEach(u => {
    const chip = document.createElement("div");
    chip.className = "chip" + (u.id === state.revUrgency ? " selected" : "");
    chip.textContent = L(u);
    chip.addEventListener("click", () => {
      state.revUrgency = u.id;
      [...row.children].forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      recalcRevisions();
    });
    row.appendChild(chip);
  });
}

/* =========================================================
   PRICE ENGINE
========================================================= */
function computeTotals(){
  const type = PRICES.siteTypes.find(x => x.id === state.siteType);
  const pages = PRICES.pages.find(p => p.id === state.pages);
  const design = PRICES.designTiers.find(d => d.id === state.designTier);

  if(!type){
    return { total:0, min:0, max:0, weeks:"—", count:0, savings:0, supportPrice:0, lines:[] };
  }

  const lines = [];
  let sum = type.base * pages.multiplier * design.multiplier;
  lines.push({ label: `${L(type)} · ${pages.label}${t().pagesSuffix} · ${L(design)}`, value: sum });

  let weeks = type.baseWeeks * pages.weeksMultiplier + design.weeksBonus;

  PRICES.designAddons.forEach(a => {
    if(state.designAddons.has(a.id)){ sum += a.price; weeks += a.weeks; lines.push({ label: L(a), value: a.price }); }
  });

  PRICES.functionGroups.forEach(group => {
    group.items.forEach(item => {
      if(state.functions.has(item.id)){ sum += item.price; weeks += 0.25; lines.push({ label: L(item), value: item.price }); }
    });
  });

  PRICES.security.forEach(item => {
    if(state.security.has(item.id)){ sum += item.price; weeks += 0.1; lines.push({ label: L(item), value: item.price }); }
  });

  PRICES.contentServices.forEach(item => {
    if(state.content.has(item.id)){ sum += item.price; weeks += 0.3; lines.push({ label: L(item), value: item.price }); }
  });

  if(state.optimization){
    sum += PRICES.optimization.price; weeks += 0.5;
    lines.push({ label: L(PRICES.optimization), value: PRICES.optimization.price });
  }

  const total = sum;
  const min = total * 0.88;
  const max = total * 1.2;
  const count = state.designAddons.size + state.functions.size + state.security.size + state.content.size + (state.optimization ? 1 : 0);
  const savings = total * 0.1;

  const supportItem = PRICES.support.find(s => s.id === state.support);
  const supportPrice = supportItem ? supportItem.price : 0;

  return { total, min, max, weeks: Math.max(1, Math.round(weeks * 2) / 2), count, savings, supportPrice, lines, type, pages, design };
}

function complexityInfo(count, total){
  const T = t().complexity;
  if(total > 6000 || count > 22) return { label:T.vhigh, cls:"vhigh" };
  if(total > 3000 || count > 14) return { label:T.high, cls:"high" };
  if(total > 1000 || count > 6) return { label:T.mid, cls:"mid" };
  return { label:T.simple, cls:"" };
}

let animFrameMain = null;
let animFrameRev = null;
function animatePrice(el, from, to, frameKey = "main", duration = 500){
  const cancel = frameKey === "main" ? () => animFrameMain && cancelAnimationFrame(animFrameMain) : () => animFrameRev && cancelAnimationFrame(animFrameRev);
  cancel();
  const start = performance.now();
  function tick(now){
    const p = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(from + (to - from) * eased);
    if(p < 1){
      const id = requestAnimationFrame(tick);
      if(frameKey === "main") animFrameMain = id; else animFrameRev = id;
    }
  }
  const id = requestAnimationFrame(tick);
  if(frameKey === "main") animFrameMain = id; else animFrameRev = id;
}

let lastPrice = 0;
function recalc(){
  const T = t();
  const r = computeTotals();

  const priceMainEl = document.getElementById("priceMain");
  animatePrice(priceMainEl, lastPrice, r.total, "main");
  lastPrice = r.total;

  document.getElementById("priceMinWrap").innerHTML = `${T.min} <b id="priceMin">$${fmt(r.min)}</b>`;
  document.getElementById("priceAvgWrap").innerHTML = `${T.avg} <b id="priceAvg">$${fmt(r.total)}</b>`;
  document.getElementById("priceMaxWrap").innerHTML = `${T.max} <b id="priceMax">$${fmt(r.max)}</b>`;

  document.getElementById("statWeeks").textContent = r.type ? r.weeks + " " + T.weeksUnit : "—";
  document.getElementById("statCount").textContent = r.count;
  document.getElementById("statSavings").textContent = "$" + fmt(r.savings);

  const badge = document.getElementById("complexityBadge");
  const info = complexityInfo(r.count, r.total);
  badge.textContent = info.label;
  badge.className = "badge" + (info.cls ? " " + info.cls : "");

  const desc = document.getElementById("summaryDesc");
  desc.textContent = r.type ? T.summaryDesc(L(r.type), r.pages.label, L(r.design), r.count) : T.summaryDescEmpty;

  const receipt = document.getElementById("receiptList");
  receipt.innerHTML = !r.type
    ? `<div class="receipt-empty">${T.receiptEmpty}</div>`
    : r.lines.map(l => `<div class="receipt-item"><span>${l.label}</span><span>$${fmt(l.value)}</span></div>`).join("");

  const supportLine = document.getElementById("supportLine");
  if(r.supportPrice > 0){
    supportLine.style.display = "flex";
    document.getElementById("supportPriceLine").textContent = "$" + fmt(r.supportPrice);
  } else {
    supportLine.style.display = "none";
  }
}

/* =========================================================
   REVISIONS PRICE ENGINE
========================================================= */
function computeRevisionTotals(){
  const volume = REVISIONS.volume.find(v => v.id === state.revVolume);
  const urgency = REVISIONS.urgency.find(u => u.id === state.revUrgency);
  const lines = [];
  let baseSum = 0;

  REVISIONS.editTypes.forEach(item => {
    if(!state.revEditTypes.has(item.id)) return;
    if(item.price > 0){
      baseSum += item.price;
      lines.push({ label: L(item), value: item.price });
    } else {
      lines.push({ label: L(item), value: null });
    }
  });

  const count = state.revEditTypes.size;
  const total = baseSum * volume.multiplier * urgency.multiplier;
  const surcharge = total - baseSum;
  if(count > 0 && surcharge > 0.5){
    lines.push({ label: `${t().revSurchargeLabel} (${L(volume)} · ${Ls(urgency)})`, value: surcharge });
  }

  const min = total * 0.85;
  const max = total * 1.3;

  return { total, min, max, count, volume, urgency, lines, baseSum };
}

function getRevisionTimeLabel(volumeId, urgencyId){
  const T = t();
  if(urgencyId === "asap") return T.revTimeToday;
  if(urgencyId === "urgent") return T.revTimeUrgent;
  if(volumeId === "medium") return T.revTimeMedium;
  if(volumeId === "large") return T.revTimeLarge;
  return T.revTimeSmall;
}

function revBadgeInfo(count){
  const T = t();
  if(count === 0) return { label: "—", cls: "" };
  if(count <= 2) return { label: T.revBadgeQuick, cls: "" };
  if(count <= 5) return { label: T.revBadgeMedium, cls: "mid" };
  return { label: T.revBadgeLarge, cls: "high" };
}

let lastPriceRev = 0;
function recalcRevisions(){
  const T = t();
  const r = computeRevisionTotals();

  const priceMainEl = document.getElementById("revPriceMain");
  animatePrice(priceMainEl, lastPriceRev, r.total, "rev");
  lastPriceRev = r.total;

  document.getElementById("revPriceMinWrap").innerHTML = `${T.min} <b id="revPriceMin">$${fmt(r.min)}</b>`;
  document.getElementById("revPriceAvgWrap").innerHTML = `${T.avg} <b id="revPriceAvg">$${fmt(r.total)}</b>`;
  document.getElementById("revPriceMaxWrap").innerHTML = `${T.max} <b id="revPriceMax">$${fmt(r.max)}</b>`;

  document.getElementById("revStatTime").textContent = r.count ? getRevisionTimeLabel(r.volume.id, r.urgency.id) : "—";
  document.getElementById("revStatCount").textContent = r.count;
  document.getElementById("revStatUrgency").textContent = r.count ? Ls(r.urgency) : "—";

  const badge = document.getElementById("revBadge");
  const info = revBadgeInfo(r.count);
  badge.textContent = info.label;
  badge.className = "badge" + (info.cls ? " " + info.cls : "");

  const desc = document.getElementById("revSummaryDesc");
  desc.textContent = r.count ? T.revSummaryDesc(r.count, L(r.volume), Ls(r.urgency)) : T.revSummaryDescEmpty;

  const receipt = document.getElementById("revReceiptList");
  receipt.innerHTML = !r.count
    ? `<div class="receipt-empty">${T.revReceiptEmpty}</div>`
    : r.lines.map(l => `<div class="receipt-item"><span>${l.label}</span><span>${l.value === null ? T.revCustomQuote : "$" + fmt(l.value)}</span></div>`).join("");
}

/* =========================================================
   NAVIGATION
========================================================= */
function goToStep(n){
  state.step = Math.max(1, Math.min(state.totalSteps, n));
  document.querySelectorAll("#wizard .step").forEach(s => {
    s.classList.toggle("active", Number(s.dataset.step) === state.step);
  });
  document.getElementById("progressFill").style.width = (state.step / state.totalSteps * 100) + "%";
  document.getElementById("progressLabel").textContent = t().stepOf(state.step, state.totalSteps);
  document.getElementById("btnPrev").disabled = state.step === 1;
  document.getElementById("btnNext").style.display = state.step === state.totalSteps ? "none" : "inline-flex";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindNav(){
  document.getElementById("btnNext").addEventListener("click", () => {
    if(state.step === 1 && !state.siteType){
      showToast(t().errTypeNav, "error");
      return;
    }
    goToStep(state.step + 1);
  });
  document.getElementById("btnPrev").addEventListener("click", () => goToStep(state.step - 1));
  document.getElementById("btnCta").addEventListener("click", () => {
    if(!state.siteType){
      showToast(t().errType, "error");
      goToStep(1);
      return;
    }
    goToStep(state.totalSteps);
  });
}

/* =========================================================
   FORM VALIDATION + SUBMIT
========================================================= */
function bindForm(){
  document.getElementById("btnSubmit").addEventListener("click", onSubmit);
  document.getElementById("btnDownloadPdf").addEventListener("click", onDownload);
}

function validateForm(){
  const T = t();
  let valid = true;
  const name = document.getElementById("fName");
  const phone = document.getElementById("fPhone");

  clearFieldError("fName");
  clearFieldError("fPhone");

  if(!name.value.trim()){
    setFieldError("fName", T.errName);
    valid = false;
  }
  const phoneDigits = phone.value.replace(/\D/g, "");
  if(phoneDigits.length < 9){
    setFieldError("fPhone", T.errPhone);
    valid = false;
  }
  if(!state.siteType){
    showToast(T.errType, "error");
    valid = false;
  }
  return valid;
}

function setFieldError(id, msg){
  document.getElementById(id).closest(".field").classList.add("has-error");
  document.getElementById("err-" + id).textContent = msg;
}
function clearFieldError(id){
  document.getElementById(id).closest(".field").classList.remove("has-error");
  document.getElementById("err-" + id).textContent = "";
}

function getFormData(){
  return {
    name: document.getElementById("fName").value.trim(),
    phone: document.getElementById("fPhone").value.trim(),
    telegram: document.getElementById("fTelegram").value.trim(),
    email: document.getElementById("fEmail").value.trim(),
    company: document.getElementById("fCompany").value.trim(),
    comment: document.getElementById("fComment").value.trim()
  };
}

function buildConfigSummary(){
  const r = computeTotals();
  return {
    generatedAt: new Date().toISOString(),
    lang: state.lang,
    siteType: r.type ? L(r.type) : null,
    pages: r.pages ? r.pages.label : null,
    design: r.design ? L(r.design) : null,
    designAddons: [...state.designAddons].map(id => L(PRICES.designAddons.find(x => x.id === id))),
    functions: [...state.functions],
    security: [...state.security],
    content: [...state.content],
    optimization: state.optimization,
    support: state.support,
    priceEstimate: { min: Math.round(r.min), avg: Math.round(r.total), max: Math.round(r.max) },
    timelineWeeks: r.weeks,
    lineItems: r.lines
  };
}

async function onSubmit(){
  const T = t();
  if(!validateForm()) return;

  const contact = getFormData();
  const config = buildConfigSummary();

  const btn = document.getElementById("btnSubmit");
  const originalText = btn.textContent;
  btn.textContent = T.toastSending;
  btn.disabled = true;

  try{
    if(TELEGRAM_CONFIG.enabled){
      await sendToTelegram({ contact, config });
    }
    showToast(T.toastSuccess, "success");
    document.getElementById("finishNote").textContent = T.finishNote(contact.name, config.priceEstimate.avg);
  } catch(err){
    showToast(T.toastTelegramFail, "error");
    console.error(err);
  } finally{
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

async function sendToTelegram(payload){
  const { contact, config } = payload;
  const text = [
    `🆕 Нова заявка з калькулятора`,
    `Ім'я: ${contact.name}`,
    `Телефон: ${contact.phone}`,
    contact.telegram ? `Telegram: ${contact.telegram}` : null,
    contact.email ? `Email: ${contact.email}` : null,
    contact.company ? `Компанія: ${contact.company}` : null,
    `—`,
    `Тип сайту: ${config.siteType}`,
    `Сторінок: ${config.pages}`,
    `Дизайн: ${config.design}`,
    `Опцій обрано: ${config.functions.length + config.designAddons.length + config.security.length + config.content.length}`,
    `Орієнтовна ціна: $${fmt(config.priceEstimate.avg)} (${fmt(config.priceEstimate.min)}–${fmt(config.priceEstimate.max)})`,
    `Термін: ${config.timelineWeeks} тижнів`,
    contact.comment ? `Коментар: ${contact.comment}` : null
  ].filter(Boolean).join("\n");

  const token = _resolveToken();
  if(!token) throw new Error("Telegram token unavailable");

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CONFIG.chatId, text })
  });
  if(!res.ok) throw new Error("Telegram API error: " + res.status);
}

/* =========================================================
   PDF EXPORT (client-side, window.print based)
========================================================= */
function onDownload(){
  const T = t();
  if(!state.siteType){
    showToast(T.errType, "error");
    goToStep(1);
    return;
  }
  const contact = getFormData();
  const config = buildConfigSummary();
  const win = window.open("", "_blank");
  const rows = config.lineItems.map(l => `<tr><td>${l.label}</td><td class="num">$${fmt(l.value)}</td></tr>`).join("");

  win.document.write(`
    <html lang="${state.lang}">
    <head>
      <meta charset="UTF-8">
      <title>${T.pdfTitle}</title>
      <style>
        body{ font-family: Arial, sans-serif; padding:40px; color:#12141F; }
        h1{ font-size:22px; margin-bottom:4px; }
        .muted{ color:#6B7086; font-size:13px; margin-bottom:24px; }
        table{ width:100%; border-collapse:collapse; margin-bottom:24px; }
        td, th{ padding:8px 10px; border-bottom:1px solid #E6E8F0; font-size:13px; text-align:left; }
        td.num, th.num{ text-align:right; font-variant-numeric: tabular-nums; }
        .total-row td{ font-weight:bold; font-size:15px; border-top:2px solid #12141F; border-bottom:none; }
        .price-box{ background:#F4F5FA; border-radius:12px; padding:18px; margin-bottom:24px; }
        .price-box b{ font-size:24px; }
        .contact{ font-size:13px; line-height:1.6; }
        @media print{ .no-print{ display:none; } }
      </style>
    </head>
    <body>
      <h1>${T.pdfTitle}</h1>
      <p class="muted">${T.pdfGenerated}: ${new Date().toLocaleString(state.lang === "en" ? "en-US" : "uk-UA")}</p>

      <div class="price-box">
        <div>${T.pdfPriceBox}</div>
        <b>$${fmt(config.priceEstimate.avg)}</b>
        <div class="muted">${T.pdfRange}: $${fmt(config.priceEstimate.min)} – $${fmt(config.priceEstimate.max)} · ${T.pdfTerm}: ${config.timelineWeeks} ${T.pdfWeeks}</div>
      </div>

      <h3>${T.pdfComposition}</h3>
      <table>
        <tr><th>${T.pdfItem}</th><th class="num">${T.pdfCost}</th></tr>
        ${rows}
        <tr class="total-row"><td>${T.pdfTotal}</td><td class="num">$${fmt(config.priceEstimate.avg)}</td></tr>
      </table>

      <h3>${T.pdfContact}</h3>
      <div class="contact">
        ${T.lblName.replace(" *", "")}: ${contact.name || "—"}<br>
        ${T.lblPhone.replace(" *", "")}: ${contact.phone || "—"}<br>
        ${contact.telegram ? T.lblTelegram + ": " + contact.telegram + "<br>" : ""}
        ${contact.email ? T.lblEmail + ": " + contact.email + "<br>" : ""}
        ${contact.company ? T.lblCompany + ": " + contact.company + "<br>" : ""}
        ${contact.comment ? T.lblComment + ": " + contact.comment : ""}
      </div>

      <p class="muted no-print">${T.pdfPrintHint}</p>
      <script>window.onload = () => window.print();<\/script>
    </body>
    </html>
  `);
  win.document.close();
}

/* =========================================================
   REVISIONS: FORM VALIDATION + SUBMIT
========================================================= */
function bindRevForm(){
  document.getElementById("revBtnSubmit").addEventListener("click", onRevSubmit);
  document.getElementById("revBtnPdf").addEventListener("click", onRevDownload);
  document.getElementById("revBtnCta").addEventListener("click", () => {
    const el = document.getElementById("rUrl");
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.focus();
  });
}

function validateRevForm(){
  const T = t();
  let valid = true;

  ["rUrl", "rName", "rPhone", "rComment"].forEach(clearFieldError);

  const url = document.getElementById("rUrl");
  const name = document.getElementById("rName");
  const phone = document.getElementById("rPhone");
  const comment = document.getElementById("rComment");

  if(!url.value.trim()){ setFieldError("rUrl", T.errUrl); valid = false; }
  if(!name.value.trim()){ setFieldError("rName", T.errName); valid = false; }
  const phoneDigits = phone.value.replace(/\D/g, "");
  if(phoneDigits.length < 9){ setFieldError("rPhone", T.errPhone); valid = false; }
  if(!comment.value.trim()){ setFieldError("rComment", T.errComment); valid = false; }
  if(state.revEditTypes.size === 0){ showToast(T.errRevType, "error"); valid = false; }

  return valid;
}

function getRevFormData(){
  return {
    url: document.getElementById("rUrl").value.trim(),
    name: document.getElementById("rName").value.trim(),
    phone: document.getElementById("rPhone").value.trim(),
    telegram: document.getElementById("rTelegram").value.trim(),
    email: document.getElementById("rEmail").value.trim(),
    comment: document.getElementById("rComment").value.trim()
  };
}

function buildRevConfigSummary(){
  const r = computeRevisionTotals();
  return {
    generatedAt: new Date().toISOString(),
    lang: state.lang,
    editTypes: [...state.revEditTypes].map(id => L(REVISIONS.editTypes.find(x => x.id === id))),
    volume: L(r.volume),
    urgency: L(r.urgency),
    priceEstimate: { min: Math.round(r.min), avg: Math.round(r.total), max: Math.round(r.max) },
    timeEstimate: getRevisionTimeLabel(r.volume.id, r.urgency.id),
    lineItems: r.lines
  };
}

async function onRevSubmit(){
  const T = t();
  if(!validateRevForm()) return;

  const contact = getRevFormData();
  const config = buildRevConfigSummary();

  const btn = document.getElementById("revBtnSubmit");
  const originalText = btn.textContent;
  btn.textContent = T.toastSending;
  btn.disabled = true;

  try{
    if(TELEGRAM_CONFIG.enabled){
      await sendRevisionsToTelegram({ contact, config });
    }
    showToast(T.revToastSuccess, "success");
    document.getElementById("revFinishNote").textContent = T.revFinishNote(contact.name, config.priceEstimate.avg);
  } catch(err){
    showToast(T.toastTelegramFail, "error");
    console.error(err);
  } finally{
    btn.textContent = originalText;
    btn.disabled = false;
  }
}

async function sendRevisionsToTelegram(payload){
  const { contact, config } = payload;
  const text = [
    `🛠 Заявка на правки сайту`,
    `Сайт: ${contact.url}`,
    `Ім'я: ${contact.name}`,
    `Телефон: ${contact.phone}`,
    contact.telegram ? `Telegram: ${contact.telegram}` : null,
    contact.email ? `Email: ${contact.email}` : null,
    `—`,
    `Правки: ${config.editTypes.join(", ") || "—"}`,
    `Обсяг: ${config.volume}`,
    `Терміновість: ${config.urgency}`,
    `Орієнтовна ціна: $${fmt(config.priceEstimate.avg)} (${fmt(config.priceEstimate.min)}–${fmt(config.priceEstimate.max)})`,
    `Термін: ${config.timeEstimate}`,
    `Опис: ${contact.comment}`
  ].filter(Boolean).join("\n");

  const token = _resolveToken();
  if(!token) throw new Error("Telegram token unavailable");

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: TELEGRAM_CONFIG.chatId, text })
  });
  if(!res.ok) throw new Error("Telegram API error: " + res.status);
}

function onRevDownload(){
  const T = t();
  if(state.revEditTypes.size === 0){
    showToast(T.errRevType, "error");
    return;
  }
  const contact = getRevFormData();
  const config = buildRevConfigSummary();
  const win = window.open("", "_blank");
  const rows = config.lineItems.map(l => `<tr><td>${l.label}</td><td class="num">${l.value === null ? T.revCustomQuote : "$" + fmt(l.value)}</td></tr>`).join("");

  win.document.write(`
    <html lang="${state.lang}">
    <head>
      <meta charset="UTF-8">
      <title>${T.revPdfTitle}</title>
      <style>
        body{ font-family: Arial, sans-serif; padding:40px; color:#12141F; }
        h1{ font-size:22px; margin-bottom:4px; }
        .muted{ color:#6B7086; font-size:13px; margin-bottom:24px; }
        table{ width:100%; border-collapse:collapse; margin-bottom:24px; }
        td, th{ padding:8px 10px; border-bottom:1px solid #E6E8F0; font-size:13px; text-align:left; }
        td.num, th.num{ text-align:right; font-variant-numeric: tabular-nums; }
        .total-row td{ font-weight:bold; font-size:15px; border-top:2px solid #12141F; border-bottom:none; }
        .price-box{ background:#F4F5FA; border-radius:12px; padding:18px; margin-bottom:24px; }
        .price-box b{ font-size:24px; }
        .contact{ font-size:13px; line-height:1.6; }
        @media print{ .no-print{ display:none; } }
      </style>
    </head>
    <body>
      <h1>${T.revPdfTitle}</h1>
      <p class="muted">${T.pdfGenerated}: ${new Date().toLocaleString(state.lang === "en" ? "en-US" : "uk-UA")}</p>

      <div class="price-box">
        <div>${T.revPriceLabel}</div>
        <b>$${fmt(config.priceEstimate.avg)}</b>
        <div class="muted">${T.pdfRange}: $${fmt(config.priceEstimate.min)} – $${fmt(config.priceEstimate.max)} · ${T.pdfTerm}: ${config.timeEstimate}</div>
      </div>

      <h3>${T.pdfComposition}</h3>
      <table>
        <tr><th>${T.pdfItem}</th><th class="num">${T.pdfCost}</th></tr>
        ${rows}
        <tr class="total-row"><td>${T.pdfTotal}</td><td class="num">$${fmt(config.priceEstimate.avg)}</td></tr>
      </table>

      <h3>${T.pdfContact}</h3>
      <div class="contact">
        ${T.lblUrl.replace(" *", "")}: ${contact.url || "—"}<br>
        ${T.lblName.replace(" *", "")}: ${contact.name || "—"}<br>
        ${T.lblPhone.replace(" *", "")}: ${contact.phone || "—"}<br>
        ${contact.telegram ? T.lblTelegram + ": " + contact.telegram + "<br>" : ""}
        ${contact.email ? T.lblEmail + ": " + contact.email + "<br>" : ""}
        ${T.lblRComment.replace(" *", "")}: ${contact.comment || "—"}
      </div>

      <p class="muted no-print">${T.pdfPrintHint}</p>
      <script>window.onload = () => window.print();<\/script>
    </body>
    </html>
  `);
  win.document.close();
}

/* =========================================================
   TOASTS
========================================================= */
function showToast(msg, type = ""){
  const stack = document.getElementById("toastStack");
  const el = document.createElement("div");
  el.className = "toast" + (type ? " " + type : "");
  el.textContent = msg;
  stack.appendChild(el);
  setTimeout(() => { el.style.opacity = "0"; el.style.transition = "opacity .3s"; setTimeout(() => el.remove(), 300); }, 3200);
}

document.addEventListener("DOMContentLoaded", init);
