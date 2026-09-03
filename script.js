// Default Site Data Fallback for Velora (100% English)
const internalDefaultData = {
  general: {
    brandName: "Velora",
    brandSubtitle: "Web Solutions",
    brandIcon: "fa-gem",
    whatsappNumber: "8200890373",
    whatsappCountryCode: "91",
    phone: "8200890373",
    email: "contact@veloraweb.com",
    location: "Global & Remote Services",
    announcementText: "Special Limited-Time Offer: Get your custom website ready within 3-5 days!",
    announcementLinkText: "Order on WhatsApp →",
    announcementOfferQuery: "Hello, I want to claim the special website development offer.",
    floatingWhatsappBubbleText: "Need a website? <b>Let's chat!</b>"
  },
  hero: {
    badgeText: "⚡ Professional Web Developer Available For New Projects",
    titleLine1: "Need a Website?",
    titleGradient: "I Build High-Converting",
    typewriterWords: [
      "Business Websites",
      "E-Commerce Stores",
      "Portfolio Websites",
      "High-Converting Landing Pages",
      "Custom Web Applications"
    ],
    subtitle: "Looking for a modern, ultra-fast, and 100% mobile-responsive website to grow your business or personal brand? Connect directly with me on WhatsApp for immediate discussion, custom designs, and rapid delivery!",
    ctaPrimaryText: "Chat on WhatsApp",
    ctaSecondaryText: "View Portfolio & Demos",
    cardTitle: "Web Developer",
    cardStatus: "Online on WhatsApp",
    trustBadges: [
      { icon: "fa-mobile-screen-button", text: "100% Mobile Responsive", color: "emerald" },
      { icon: "fa-bolt", text: "Ultra-Fast Load Speed", color: "teal" },
      { icon: "fa-clock", text: "Fast 3-5 Days Delivery", color: "cyan" },
      { icon: "fa-headset", text: "24/7 WhatsApp Support", color: "indigo" }
    ]
  },
  services: [
    {
      id: "srv-1",
      icon: "fa-briefcase",
      color: "emerald",
      title: "Business & Corporate Websites",
      desc: "Professional websites tailored for companies, startups, clinics, law firms, and local businesses.",
      features: ["Interactive Contact Form & Google Maps", "100% Mobile & Tablet Responsive", "SEO-Optimized & Blazing Fast Speed"],
      whatsappQuery: "Hi! I want to build a Business Website. Please share details."
    },
    {
      id: "srv-2",
      icon: "fa-cart-shopping",
      color: "cyan",
      title: "E-Commerce & Online Stores",
      desc: "Complete digital storefronts with product catalogs, shopping cart drawers, and online payment integrations.",
      features: ["Product Catalog & Cart System", "Instant WhatsApp Order Notifications", "UPI, Card & Razorpay Payment Integration"],
      whatsappQuery: "Hi! I want to build an E-Commerce Website. Please share pricing."
    },
    {
      id: "srv-3",
      icon: "fa-user-astronaut",
      color: "indigo",
      title: "Personal Portfolio & Resume",
      desc: "Custom showcase websites for developers, designers, creators, consultants, and professionals.",
      features: ["Interactive Project Showcase", "Resume / CV Download Button", "Social Links & Direct Contact Channels"],
      whatsappQuery: "Hi! I want a Personal Portfolio Website."
    },
    {
      id: "srv-4",
      icon: "fa-bullhorn",
      color: "amber",
      title: "Landing Pages & Sales Funnels",
      desc: "High-converting single-page websites engineered for Google/Facebook Ads and product launches.",
      features: ["High Conversion Rate Architecture", "Direct Lead Capture & WhatsApp CTA", "1-2 Days Express Delivery"],
      whatsappQuery: "Hi! I need a High Converting Landing Page."
    },
    {
      id: "srv-5",
      icon: "fa-wand-magic-sparkles",
      color: "pink",
      title: "Website Redesign & Optimization",
      desc: "Transform outdated or slow websites into modern, high-speed powerhouses with 90+ PageSpeed scores.",
      features: ["Modern 2026 UI/UX Redesign", "Page Speed & Performance Optimization", "Bug Fixes & Clean Code Refactoring"],
      whatsappQuery: "Hi! I want to Redesign or Speed up my website."
    },
    {
      id: "srv-6",
      icon: "fa-cubes",
      color: "emerald",
      title: "Custom Web Applications",
      desc: "Admin dashboards, booking portals, CRM solutions, and tailored web applications built to scale.",
      features: ["User Login & Authentication", "Database Architecture & Custom APIs", "Tailored Business Logic & Automation"],
      whatsappQuery: "Hi! I have a custom web app requirement."
    }
  ],
  projects: [
    {
      id: "proj-1",
      category: "business",
      title: "Apex Corporate Solutions",
      icon: "fa-building",
      desc: "Modern multi-page corporate website with services showcase, team directory, and lead capture.",
      tags: ["HTML5", "Tailwind", "JavaScript"],
      whatsappQuery: "Hi! I would like a business website similar to Apex Corporate."
    },
    {
      id: "proj-2",
      category: "ecommerce",
      title: "TrendKart Fashion Store",
      icon: "fa-bag-shopping",
      desc: "Complete clothing storefront with filterable catalog, responsive cart, and direct WhatsApp checkout.",
      tags: ["E-Store", "Cart System", "WhatsApp Checkout"],
      whatsappQuery: "Hi! I would like an online shopping store similar to TrendKart."
    },
    {
      id: "proj-3",
      category: "portfolio",
      title: "Elite Creator Portfolio",
      icon: "fa-id-card-clip",
      desc: "Interactive portfolio with dark/light themes, skills animation, experience timeline, and resume download.",
      tags: ["Portfolio", "Dark Mode", "Animations"],
      whatsappQuery: "Hi! I would like a personal portfolio website."
    },
    {
      id: "proj-4",
      category: "landing",
      title: "SaaS Launch Funnel",
      icon: "fa-rocket",
      desc: "Single-page marketing funnel with interactive pricing calculator, video embed, FAQs, and lead capture.",
      tags: ["Lead Gen", "Fast Speed", "Conversion Focused"],
      whatsappQuery: "Hi! I would like a landing page similar to SaaS Launch Funnel."
    },
    {
      id: "proj-5",
      category: "business",
      title: "Urban Bistro & Dining",
      icon: "fa-mug-hot",
      desc: "Restaurant website with interactive digital QR food menu, table reservation system, and location maps.",
      tags: ["QR Menu", "Table Booking", "Local SEO"],
      whatsappQuery: "Hi! I want a website for a Restaurant / Cafe."
    },
    {
      id: "proj-6",
      category: "ecommerce",
      title: "Luxe Jewels & Accessories",
      icon: "fa-gem",
      desc: "Luxury jewelry storefront with Instagram feed synchronization and high-resolution zoom gallery.",
      tags: ["Luxury Store", "Instagram Sync", "Online Checkout"],
      whatsappQuery: "Hi! I would like a luxury jewelry storefront website."
    }
  ],
  pricing: [
    {
      id: "price-1",
      tierName: "Starter / Portfolio",
      title: "Single Page Website",
      desc: "Best for personal portfolios, resumes, or lightweight product landing pages.",
      price: "₹2,999",
      unit: "/ one-time",
      deliveryTime: "Delivery in 2-3 Days",
      isPopular: false,
      features: [
        "Up to 5 Sections (Hero, About, Skills, Projects, Contact)",
        "100% Mobile & Tablet Responsive",
        "Direct WhatsApp Contact Buttons",
        "Social Media & Resume Links",
        "Free Deployment & Setup Assistance"
      ],
      whatsappQuery: "Hi! I am interested in the Starter Single Page Website Package (Rs 2999)."
    },
    {
      id: "price-2",
      tierName: "Complete Business",
      title: "Corporate Website",
      desc: "Ideal for companies, agencies, clinics, consultants, and growing brands.",
      price: "₹5,999",
      unit: "/ one-time",
      deliveryTime: "Delivery in 3-5 Days",
      isPopular: true,
      popularBadge: "🔥 Most Popular Choice",
      features: [
        "Up to 5-8 Dedicated Pages (Home, About, Services, Gallery, Contact, etc.)",
        "Interactive Contact & Lead Inquiry Form",
        "Google Maps & Direct WhatsApp Chat Integration",
        "Basic SEO Optimization for Google Search",
        "Free Domain & Hosting Guidance",
        "30 Days Free Technical Support"
      ],
      whatsappQuery: "Hi! I am interested in the Corporate Business Package (Rs 5999)."
    },
    {
      id: "price-3",
      tierName: "E-Commerce Store",
      title: "Online Selling Store",
      desc: "Complete digital store for selling apparel, gadgets, cosmetics, or services online.",
      price: "₹11,999",
      unit: "/ one-time",
      deliveryTime: "Delivery in 5-8 Days",
      isPopular: false,
      features: [
        "Unlimited Products & Category Management",
        "Shopping Cart & Instant WhatsApp Order Notifications",
        "Online Payment Gateway (UPI, Cards, NetBanking)",
        "Admin Dashboard to Add & Edit Products",
        "60 Days Free Support & Onboarding Guidance"
      ],
      whatsappQuery: "Hi! I am interested in the E-Commerce Store Package (Rs 11999)."
    }
  ],
  whyUs: {
    tagline: "Why Work With Me",
    heading: "Direct Communication, Zero Agency Markup",
    desc: "I collaborate directly with you via WhatsApp. No middlemen, no delayed ticket queues, and no inflated agency fees. Clear milestones, rapid turnaround, and guaranteed satisfaction.",
    benefits: [
      { icon: "fa-comments", color: "emerald", title: "Direct WhatsApp Communication", desc: "Chat directly with your developer for instant updates, revisions, and feedback." },
      { icon: "fa-gauge-high", color: "teal", title: "Modern Tech & Blazing Speed", desc: "Clean code, high Google PageSpeed scores, and responsive mobile architecture." },
      { icon: "fa-shield-halved", color: "indigo", title: "100% Satisfaction Guarantee", desc: "Unlimited fine-tuning until launch, backed by complimentary post-launch support." }
    ],
    steps: [
      { num: 1, title: "Message on WhatsApp", desc: "Share your website goals, reference links, and key requirements." },
      { num: 2, title: "Design & Scope Alignment", desc: "We finalize the layout structure, color palette, and essential features." },
      { num: 3, title: "Development & Live Preview", desc: "I build the website and provide a private preview link for your review." },
      { num: 4, title: "Final Launch & Support", desc: "Your website goes live on your domain with 30 days of free technical support." }
    ]
  },
  faqs: [
    { id: "faq-1", question: "How long does it take to build and launch a website?", answer: "Starter and single-page portfolio websites are typically delivered within 2-3 business days. Full corporate business websites take 3-5 days, while complete E-Commerce online stores take approximately 5-8 days." },
    { id: "faq-2", question: "How do domain names and web hosting work?", answer: "If you already own a domain and hosting, I can deploy directly to your setup. If not, I will guide you through choosing the most reliable and affordable hosting provider and handle the complete configuration." },
    { id: "faq-3", question: "Will my website look great on mobile phones and tablets?", answer: "Yes, 100%! Every website is crafted with a mobile-first responsive design, ensuring seamless performance across smartphones, tablets, laptops, and wide monitors." },
    { id: "faq-4", question: "What if I need updates or assistance after the website is launched?", answer: "Every project includes 30 days of free technical support for minor text edits, image swaps, and technical maintenance." }
  ],
  footer: {
    about: "Fast, modern, and affordable web development solutions crafted for businesses, growing brands, and visionary individuals.",
    copyright: "© 2026 Velora Web Solutions. All rights reserved."
  }
};

// Main Initialization Function
function initDevCraftSite() {
  const STORAGE_KEY = 'devcraft_site_data';

  function getActiveData() {
    if (window.EMBEDDED_SITE_DATA) {
      return window.EMBEDDED_SITE_DATA;
    }
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('LocalStorage parse error', e);
    }
    if (typeof defaultSiteData !== 'undefined' && defaultSiteData) {
      return defaultSiteData;
    }
    return internalDefaultData;
  }

  const site = getActiveData();
  const phone = (site.general?.whatsappNumber || '8200890373').replace(/[^0-9]/g, '');
  const countryCode = site.general?.whatsappCountryCode || '91';
  const fullPhone = `${countryCode}${phone}`;

  function buildWhatsAppUrl(customText) {
    const text = customText || 'Hello! I would like to inquire about website development.';
    return `https://wa.me/${fullPhone}?text=${encodeURIComponent(text)}`;
  }

  /* ----------------------------------------------------
     2. Render Dynamic Content
  ---------------------------------------------------- */
  function renderAll() {
    // 2a. General & Brand
    setText('brand-name-display', `${site.general?.brandName || 'Velora'}.`);
    setText('brand-subtitle-display', site.general?.brandSubtitle || 'Web Solutions');
    setText('footer-brand-title', `${site.general?.brandName || 'Velora'}.`);
    setText('footer-about-display', site.footer?.about || '');
    setText('footer-copyright-display', site.footer?.copyright || '© 2026 Velora Web Solutions. All rights reserved.');

    // Contacts
    setText('footer-whatsapp-display', `+91 ${phone}`);
    setText('footer-phone-display', site.general?.phone || phone);
    setText('footer-email-display', site.general?.email || 'contact@veloraweb.com');
    setText('footer-location-display', site.general?.location || 'Global & Remote Services');
    setHref('footer-whatsapp-link', `https://wa.me/${fullPhone}`);

    // Announcement Bar
    setText('announcement-text', site.general?.announcementText || 'Special Limited-Time Offer: Get your custom website ready within 3-5 days!');

    // Floating WhatsApp
    setHref('floating-whatsapp-btn', buildWhatsAppUrl());
    setHref('header-whatsapp-btn', buildWhatsAppUrl());
    setHref('mobile-whatsapp-btn', buildWhatsAppUrl());
    setText('mobile-whatsapp-text', `WhatsApp: ${phone}`);
    setHtml('floating-bubble-text', site.general?.floatingWhatsappBubbleText || 'Need a website? <b>Let\'s chat!</b>');

    // 2b. Hero Section
    setText('hero-badge-display', site.hero?.badgeText || '⚡ Professional Web Developer Available For New Projects');
    setText('hero-title-line1', site.hero?.titleLine1 || 'Need a Website?');
    setText('hero-title-gradient', site.hero?.titleGradient || 'I Build High-Converting');
    setText('hero-subtitle-display', site.hero?.subtitle || '');
    setText('hero-primary-text', site.hero?.ctaPrimaryText || 'Chat on WhatsApp');
    setText('hero-secondary-text', site.hero?.ctaSecondaryText || 'View Portfolio & Demos');
    setHref('hero-primary-cta', buildWhatsAppUrl('Hello! I would like to inquire about building a website. Please share details and pricing.'));

    // Hero Right Card
    setText('card-title-display', site.hero?.cardTitle || 'Web Developer');
    setText('card-phone-display', `+91 ${phone}`);

    // Trust Badges
    renderTrustBadgesDOM(site.hero?.trustBadges || internalDefaultData.hero.trustBadges);

    // Right Card Quick Services Links
    renderQuickServicesDOM(site.services || internalDefaultData.services);

    // 2c. Services Section
    renderServicesDOM(site.services || internalDefaultData.services);

    // 2d. Portfolio Projects
    renderProjectsDOM(site.projects || internalDefaultData.projects);

    // 2e. Pricing Packages
    renderPricingDOM(site.pricing || internalDefaultData.pricing);

    // 2f. Why Us & Process
    setText('whyus-tagline-display', site.whyUs?.tagline || 'Why Work With Me');
    setText('whyus-heading-display', site.whyUs?.heading || 'Direct Communication, Zero Agency Markup');
    setText('whyus-desc-display', site.whyUs?.desc || '');
    renderWhyUsBenefitsDOM(site.whyUs?.benefits || internalDefaultData.whyUs.benefits);
    renderWhyUsStepsDOM(site.whyUs?.steps || internalDefaultData.whyUs.steps);
    setHref('process-cta-btn', buildWhatsAppUrl("Hi! Let's start with Step 1 for my website."));

    // 2g. Inquiry Form Label
    setText('form-whatsapp-display', phone);
    document.querySelectorAll('.submit-btn-phone').forEach(el => el.textContent = phone);

    // 2h. FAQ Section
    renderFaqsDOM(site.faqs || internalDefaultData.faqs);
  }

  /* ----------------------------------------------------
     3. DOM Render Helpers
  ---------------------------------------------------- */
  function setText(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.textContent = val;
  }

  function setHtml(id, val) {
    const el = document.getElementById(id);
    if (el && val !== undefined) el.innerHTML = val;
  }

  function setHref(id, url) {
    const el = document.getElementById(id);
    if (el && url) el.href = url;
  }

  // 3a. Trust Badges
  function renderTrustBadgesDOM(badges) {
    const container = document.getElementById('hero-trust-badges-display');
    if (!container) return;
    container.innerHTML = '';

    badges.forEach(b => {
      const div = document.createElement('div');
      div.className = 'flex items-center gap-2.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800';
      div.innerHTML = `
        <div class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
          <i class="fa-solid ${escapeHtml(b.icon || 'fa-check')}"></i>
        </div>
        <div class="text-xs font-medium text-slate-300">${escapeHtml(b.text || '')}</div>
      `;
      container.appendChild(div);
    });
  }

  // 3b. Quick Services intro line (Hero Right Card).
  // Per-service mini-links were removed here to avoid duplicating the WhatsApp
  // CTAs and content already shown in the Services section below (see the
  // "Direct WhatsApp" button rendered right after this in the card).
  function renderQuickServicesDOM(services) {
    const container = document.getElementById('quick-services-links');
    if (!container) return;
    container.innerHTML = '<p class="text-xs font-semibold text-slate-400 tracking-wide">Get a reply in minutes on WhatsApp.</p>';
  }

  // 3c. Services Grid
  function renderServicesDOM(services) {
    const container = document.getElementById('services-container');
    if (!container) return;
    container.innerHTML = '';

    services.forEach(srv => {
      const card = document.createElement('div');
      card.className = 'service-card group bg-slate-800/50 hover:bg-slate-800 border border-slate-700/70 hover:border-emerald-500/50 rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between';

      const featuresHtml = (srv.features || [])
        .map(f => `<li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-400"></i> ${escapeHtml(f)}</li>`)
        .join('');

      card.innerHTML = `
        <div class="space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
            <i class="fa-solid ${escapeHtml(srv.icon || 'fa-code')}"></i>
          </div>
          <h3 class="font-heading font-bold text-xl text-white group-hover:text-emerald-400 transition-colors">${escapeHtml(srv.title)}</h3>
          <p class="text-slate-300 text-sm leading-relaxed pb-2 min-h-[72px]">${escapeHtml(srv.desc)}</p>
          <ul class="space-y-2 text-xs text-slate-300 pt-4 mt-2 border-t border-slate-700/60">
            ${featuresHtml}
          </ul>
        </div>
        <div class="pt-6 opacity-90 group-hover:opacity-100 transition-opacity">
          <a href="${buildWhatsAppUrl(srv.whatsappQuery || `Hi! I want to order ${srv.title}`)}" target="_blank" class="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-700/60 group-hover:bg-whatsapp text-slate-200 group-hover:text-slate-950 font-bold text-xs transition-all">
            <i class="fa-brands fa-whatsapp text-sm"></i> Order via WhatsApp
          </a>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // 3d. Projects Grid
  function categoryDisplayLabel(cat) {
    const map = { business: 'Business', ecommerce: 'E-Commerce', portfolio: 'Portfolio', landing: 'Landing Page' };
    return map[cat] || (cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'Demo');
  }

  function renderProjectsDOM(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';

    projects.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-item group bg-slate-800/40 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300';
      card.setAttribute('data-category', proj.category || 'business');

      const tagsHtml = (proj.tags || [])
        .map(t => `<span class="px-2.5 py-1 rounded-md bg-slate-700/80 text-slate-200 font-medium">${escapeHtml(t)}</span>`)
        .join('');

      card.innerHTML = `
        <div class="relative h-48 bg-gradient-to-tr from-slate-800 to-slate-700 p-6 flex flex-col justify-between overflow-hidden">
          <div class="flex justify-between items-center z-10">
            <span class="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-900/60 text-slate-300 border border-slate-600/60">${escapeHtml(categoryDisplayLabel(proj.category))}</span>
            <span class="text-xs font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded-md border border-emerald-500/20"><i class="fa-solid fa-circle-check mr-1"></i> Live Ready</span>
          </div>
          <div class="text-left z-10">
            <i class="fa-solid ${escapeHtml(proj.icon || 'fa-laptop-code')} text-4xl text-emerald-400/80 mb-2"></i>
            <h3 class="font-heading font-bold text-lg text-white">${escapeHtml(proj.title)}</h3>
          </div>
          <div class="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
        </div>
        <div class="p-6 space-y-4">
          <p class="text-xs text-slate-300">${escapeHtml(proj.desc)}</p>
          <div class="flex flex-wrap gap-1.5 text-sm">
            ${tagsHtml}
          </div>
          <div class="pt-5 mt-1 border-t border-slate-700/60 flex items-center justify-between">
            <a href="${buildWhatsAppUrl(proj.whatsappQuery || `Hi! I would like a website similar to ${proj.title}.`)}" target="_blank" class="w-full text-center py-2.5 px-3 rounded-lg bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold text-xs shadow-md shadow-whatsapp/20 transition-all">
              <i class="fa-brands fa-whatsapp mr-1"></i> I Want a Similar Website
            </a>
          </div>
        </div>
      `;
      container.appendChild(card);
    });
  }

  // 3e. Pricing Packages
  function renderPricingDOM(pricing) {
    const container = document.getElementById('pricing-container');
    if (!container) return;
    container.innerHTML = '';

    pricing.forEach(plan => {
      const card = document.createElement('div');
      const isPopular = plan.isPopular;

      card.className = isPopular
        ? 'relative bg-slate-800/90 border-2 border-emerald-500 rounded-3xl pt-10 pb-8 px-8 flex flex-col justify-between shadow-2xl shadow-emerald-500/10 scale-100'
        : 'relative bg-slate-800/50 border border-slate-700 rounded-3xl pt-10 pb-8 px-8 flex flex-col justify-between hover:border-slate-600 transition-all';

      const popularBadge = isPopular
        ? `<div class="absolute -top-4 left-1/2 -translate-x-1/2 w-max whitespace-nowrap text-center bg-emerald-500 text-slate-950 text-[11px] font-extrabold px-4 py-1 rounded-full uppercase tracking-wider shadow-md">${escapeHtml(plan.popularBadge || '🔥 Most Popular Choice')}</div>`
        : '';

      const featuresHtml = (plan.features || [])
        .map(f => `<li class="flex items-center gap-2.5"><i class="fa-solid fa-check text-emerald-400"></i> ${escapeHtml(f)}</li>`)
        .join('');

      card.innerHTML = `
        ${popularBadge}
        <div class="space-y-6">
          <div class="space-y-2">
            <span class="text-xs font-bold tracking-wider text-emerald-400">${escapeHtml(plan.tierName || 'Plan')}</span>
            <h3 class="font-heading font-bold text-2xl text-white">${escapeHtml(plan.title || 'Package')}</h3>
            <p class="text-xs text-slate-400">${escapeHtml(plan.desc || '')}</p>
          </div>

          <div class="py-4 border-y border-slate-700/60">
            <div class="flex items-baseline gap-2">
              <span class="text-3xl sm:text-4xl font-extrabold text-white">${escapeHtml(plan.price || '₹0')}</span>
              <span class="text-xs text-slate-400">${escapeHtml(plan.unit || '/ one-time')}</span>
            </div>
            <span class="text-xs text-emerald-400 font-semibold block mt-1">${escapeHtml(plan.deliveryTime || 'Delivery in 3-5 Days')}</span>
          </div>

          <ul class="space-y-3 text-xs ${isPopular ? 'text-slate-200' : 'text-slate-300'}">
            ${featuresHtml}
          </ul>
        </div>

        <div class="pt-8 mt-auto">
          <a href="${buildWhatsAppUrl(plan.whatsappQuery || `Hi! I want to book the ${plan.tierName} package.`)}" target="_blank" class="w-full inline-flex items-center justify-center gap-2 ${isPopular ? 'py-3.5 shadow-lg shadow-whatsapp/25 hover:scale-105' : 'py-3'} bg-whatsapp hover:bg-whatsapp-hover text-slate-950 font-bold px-4 rounded-xl text-sm transition-all">
            <i class="fa-brands fa-whatsapp text-lg"></i> Chat on WhatsApp
          </a>
        </div>
      `;

      container.appendChild(card);
    });
  }

  // 3f. Why Us Benefits & Steps
  function renderWhyUsBenefitsDOM(benefits) {
    const container = document.getElementById('whyus-benefits-container');
    if (!container) return;
    container.innerHTML = '';

    benefits.forEach(b => {
      const div = document.createElement('div');
      div.className = 'flex items-start gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/60';
      div.innerHTML = `
        <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 text-lg">
          <i class="fa-solid ${escapeHtml(b.icon || 'fa-check')}"></i>
        </div>
        <div>
          <h3 class="font-heading font-bold text-white text-base">${escapeHtml(b.title)}</h3>
          <p class="text-xs text-slate-300 mt-1">${escapeHtml(b.desc)}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }

  function renderWhyUsStepsDOM(steps) {
    const container = document.getElementById('whyus-steps-container');
    if (!container) return;
    container.innerHTML = '';

    steps.forEach(s => {
      const div = document.createElement('div');
      div.className = 'flex items-start gap-4';
      div.innerHTML = `
        <div class="w-10 h-10 rounded-full bg-emerald-500 text-slate-950 font-extrabold flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/30">
          ${s.num || '✓'}
        </div>
        <div class="space-y-1">
          <h4 class="font-bold text-white text-sm">${escapeHtml(s.title)}</h4>
          <p class="text-xs text-slate-300">${escapeHtml(s.desc)}</p>
        </div>
      `;
      container.appendChild(div);
    });
  }

  // 3g. FAQ Accordion
  function renderFaqsDOM(faqs) {
    const container = document.getElementById('faq-accordion');
    if (!container) return;
    container.innerHTML = '';

    faqs.forEach(faq => {
      const item = document.createElement('div');
      item.className = 'faq-item bg-slate-800/50 border border-slate-700/70 rounded-2xl overflow-hidden';
      item.innerHTML = `
        <button class="faq-question w-full p-5 text-left flex justify-between items-center font-heading font-semibold text-white text-sm sm:text-base hover:text-emerald-400 transition-colors">
          <span>${escapeHtml(faq.question)}</span>
          <i class="fa-solid fa-chevron-down text-xs text-slate-400 transition-transform"></i>
        </button>
        <div class="faq-answer hidden px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/40 pt-3">
          ${escapeHtml(faq.answer)}
        </div>
      `;
      container.appendChild(item);
    });

    initFaqAccordion();
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Run DOM rendering
  renderAll();

  /* ----------------------------------------------------
     4. Word-Cycle Animation Engine (crossfade, never shows a
     partial/truncated word — avoids the "broken mid-type"
     look that character-by-character typewriters can have).
  ---------------------------------------------------- */
  const words = (site.hero?.typewriterWords && site.hero.typewriterWords.length > 0)
    ? site.hero.typewriterWords
    : ['Business Websites', 'E-Commerce Stores', 'Portfolio Websites', 'High-Converting Landing Pages', 'Custom Web Applications'];

  let wordIndex = 0;
  const typewriterElement = document.getElementById('typewriter-text');
  const displayDuration = 1800;
  const fadeDuration = 250;

  function cycleWord() {
    if (!typewriterElement) return;

    typewriterElement.style.transition = `opacity ${fadeDuration}ms ease`;
    typewriterElement.style.opacity = '0';

    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      typewriterElement.textContent = words[wordIndex] || 'Websites';
      typewriterElement.style.opacity = '1';
    }, fadeDuration);

    setTimeout(cycleWord, displayDuration + fadeDuration);
  }

  if (typewriterElement) {
    typewriterElement.textContent = words[0] || 'Websites';
    typewriterElement.style.opacity = '1';
    setTimeout(cycleWord, displayDuration);
  }

  // Sync cloud settings from Supabase if available
  if (typeof getSiteSettingsFromSupabase === 'function') {
    getSiteSettingsFromSupabase().then(cloudData => {
      if (cloudData && typeof cloudData === 'object') {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudData));
      }
    }).catch(err => console.log('Supabase sync notice:', err));
  }

  /* ----------------------------------------------------
     5. WhatsApp Form Inquiry Generator (100% English & Supabase Sync)
  ---------------------------------------------------- */
  const inquiryForm = document.getElementById('whatsapp-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('client-name')?.value.trim() || 'Client';
      const userPhone = document.getElementById('client-phone')?.value.trim() || 'Not Provided';
      const websiteType = document.getElementById('website-type')?.value || 'Website Development';
      const budget = document.getElementById('budget-range')?.value || 'Standard';
      const notes = document.getElementById('project-notes')?.value.trim() || 'Please share portfolio samples and quotation.';

      // Save inquiry to Supabase Cloud Database
      if (typeof saveLeadToSupabase === 'function') {
        saveLeadToSupabase({
          name: name,
          phone: userPhone,
          website_type: websiteType,
          budget: budget,
          notes: notes
        });
      }

      const message = 
`🚀 *New Website Development Inquiry - Velora*
━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${name}
📞 *Contact Number:* ${userPhone}
🌐 *Website Type:* ${websiteType}
💰 *Budget Range:* ${budget}
📝 *Project Details:* ${notes}
━━━━━━━━━━━━━━━━━━━━
Please confirm availability and discuss project scope!`;

      const whatsappUrl = `https://wa.me/${fullPhone}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      inquiryForm.reset();
    });
  }

  /* ----------------------------------------------------
     6. Mobile Navigation Menu Toggle
  ---------------------------------------------------- */
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      if (menuIcon) {
        menuIcon.className = mobileMenu.classList.contains('hidden')
          ? 'fa-solid fa-bars text-lg'
          : 'fa-solid fa-xmark text-lg';
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        if (menuIcon) menuIcon.className = 'fa-solid fa-bars text-lg';
      });
    });
  }

  /* ----------------------------------------------------
     7. Portfolio Filter Tabs
  ---------------------------------------------------- */
  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => {
        b.classList.remove('active', 'bg-emerald-500', 'text-slate-950');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-emerald-500', 'text-slate-950');
      btn.classList.remove('bg-slate-800', 'text-slate-300');

      const filterValue = btn.getAttribute('data-filter');
      const projectItems = document.querySelectorAll('.project-item');

      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
          item.classList.remove('hidden');
          item.style.display = 'block';
        } else {
          item.classList.add('hidden');
          item.style.display = 'none';
        }
      });
    });
  });

  /* ----------------------------------------------------
     8. FAQ Accordion Logic
  ---------------------------------------------------- */
  function initFaqAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        const isOpen = !answer.classList.contains('hidden');

        document.querySelectorAll('.faq-answer').forEach(ans => ans.classList.add('hidden'));
        document.querySelectorAll('.faq-question i').forEach(ic => ic.style.transform = 'rotate(0deg)');

        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    });
  }

  /* ----------------------------------------------------
     9. Scrollspy Active Navigation Link
  ---------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        current = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('text-emerald-400');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('text-emerald-400');
      }
    });
  });

  /* ----------------------------------------------------
     10. Floating WhatsApp Notification Bubble
  ---------------------------------------------------- */
  const bubble = document.getElementById('whatsapp-bubble');
  if (bubble) {
    setInterval(() => {
      bubble.classList.remove('hidden');
    }, 14000);
  }

  /* ----------------------------------------------------
     11. Show floating WhatsApp widget only after the user
     scrolls past the hero section (reduces CTA redundancy
     while the hero's own primary button is visible).
  ---------------------------------------------------- */
  const floatingWidget = document.getElementById('floating-widget-wrapper');
  const heroSection = document.getElementById('home');
  if (floatingWidget && heroSection) {
    const revealFloatingWidget = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 80) {
        floatingWidget.classList.remove('opacity-0', 'translate-y-3', 'pointer-events-none');
      } else {
        floatingWidget.classList.add('opacity-0', 'translate-y-3', 'pointer-events-none');
      }
    };
    window.addEventListener('scroll', revealFloatingWidget, { passive: true });
    revealFloatingWidget();
  }
}

// Immediate & Safe DOM Ready Listener
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDevCraftSite);
} else {
  initDevCraftSite();
}
