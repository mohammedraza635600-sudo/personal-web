// Admin Panel Logic & Data Management for Velora CMS with Supabase Integration

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'devcraft_site_data';
  const PASSCODE_KEY = 'devcraft_admin_passcode';
  const DEFAULT_PASSCODE = 'admin123';

  let currentData = loadSiteData();

  /* ----------------------------------------------------
     1. Authentication & Passcode Lock
  ---------------------------------------------------- */
  const authModal = document.getElementById('auth-modal');
  const authForm = document.getElementById('auth-form');
  const authError = document.getElementById('auth-error');
  const lockBtn = document.getElementById('lock-btn');

  if (sessionStorage.getItem('devcraft_admin_logged_in') === 'true') {
    if (authModal) authModal.classList.add('hidden');
  }

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const enteredCode = document.getElementById('admin-passcode')?.value.trim();
      const actualCode = localStorage.getItem(PASSCODE_KEY) || DEFAULT_PASSCODE;

      if (enteredCode === actualCode) {
        sessionStorage.setItem('devcraft_admin_logged_in', 'true');
        if (authModal) authModal.classList.add('hidden');
        if (authError) authError.classList.add('hidden');
        showToast('Admin Panel unlocked!');
      } else {
        if (authError) authError.classList.remove('hidden');
      }
    });
  }

  if (lockBtn) {
    lockBtn.addEventListener('click', () => {
      sessionStorage.removeItem('devcraft_admin_logged_in');
      if (authModal) authModal.classList.remove('hidden');
      document.getElementById('admin-passcode').value = '';
    });
  }

  /* ----------------------------------------------------
     2. Tab Switching Logic
  ---------------------------------------------------- */
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.add('hidden'));

      btn.classList.add('active');
      const targetTabId = btn.getAttribute('data-tab');
      const targetElement = document.getElementById(targetTabId);
      if (targetElement) {
        targetElement.classList.remove('hidden');
      }

      if (targetTabId === 'tab-inquiries') {
        loadLeads();
      }
    });
  });

  /* ----------------------------------------------------
     3. Load Data into Form Controls
  ---------------------------------------------------- */
  function loadSiteData() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (err) {
      console.error('Error loading stored site data', err);
    }
    return JSON.parse(JSON.stringify(defaultSiteData));
  }

  function populateAdminForm(data) {
    // General
    setVal('gen-whatsapp', data.general?.whatsappNumber || '8200890373');
    setVal('gen-phone', data.general?.phone || '8200890373');
    setVal('gen-brandName', data.general?.brandName || 'Velora');
    setVal('gen-brandSubtitle', data.general?.brandSubtitle || 'Web Solutions');
    setVal('gen-email', data.general?.email || 'contact@veloraweb.com');
    setVal('gen-location', data.general?.location || 'Global & Remote Services');
    setVal('gen-announcementText', data.general?.announcementText || '');
    setVal('gen-announcementLinkText', data.general?.announcementLinkText || '');
    setVal('gen-floatingBubble', data.general?.floatingWhatsappBubbleText || '');

    // Hero
    setVal('hero-badgeText', data.hero?.badgeText || '');
    setVal('hero-titleLine1', data.hero?.titleLine1 || '');
    setVal('hero-titleGradient', data.hero?.titleGradient || '');
    setVal('hero-typewriterWords', (data.hero?.typewriterWords || []).join(', '));
    setVal('hero-subtitle', data.hero?.subtitle || '');
    setVal('hero-ctaPrimary', data.hero?.ctaPrimaryText || '');
    setVal('hero-ctaSecondary', data.hero?.ctaSecondaryText || '');

    // Hero Trust Badges
    renderTrustBadges(data.hero?.trustBadges || []);

    // Services
    renderServicesList(data.services || []);

    // Projects
    renderProjectsList(data.projects || []);

    // Pricing
    renderPricingList(data.pricing || []);

    // Why Us & Process
    setVal('whyus-tagline', data.whyUs?.tagline || '');
    setVal('whyus-heading', data.whyUs?.heading || '');
    setVal('whyus-desc', data.whyUs?.desc || '');
    renderProcessSteps(data.whyUs?.steps || []);

    // FAQs
    renderFaqsList(data.faqs || []);

    // Footer
    setVal('footer-about', data.footer?.about || '');
    setVal('footer-copyright', data.footer?.copyright || '');
  }

  function setVal(id, value) {
    const el = document.getElementById(id);
    if (el) el.value = value;
  }

  function getVal(id) {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  }

  /* ----------------------------------------------------
     4. Dynamic List Renderers
  ---------------------------------------------------- */

  // 4a. Trust Badges
  function renderTrustBadges(badges) {
    const container = document.getElementById('hero-trust-badges-container');
    if (!container) return;
    container.innerHTML = '';

    badges.forEach((badge, idx) => {
      const badgeDiv = document.createElement('div');
      badgeDiv.className = 'p-3 bg-slate-950 border border-slate-700/80 rounded-xl space-y-2';
      badgeDiv.innerHTML = `
        <div class="flex items-center justify-between text-xs font-semibold text-slate-400">
          <span>Highlight #${idx + 1}</span>
          <span class="text-emerald-400 font-mono text-[11px]">Badge ${idx + 1}</span>
        </div>
        <div class="grid grid-cols-3 gap-2">
          <input type="text" class="trust-badge-icon px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white" value="${escapeHtml(badge.icon || 'fa-check')}" placeholder="Icon (fa-check)" />
          <input type="text" class="trust-badge-text col-span-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white" value="${escapeHtml(badge.text || '')}" placeholder="Highlight text..." />
        </div>
      `;
      container.appendChild(badgeDiv);
    });
  }

  // 4b. Services List
  function renderServicesList(services) {
    const container = document.getElementById('services-list-container');
    if (!container) return;
    container.innerHTML = '';

    services.forEach((srv, idx) => {
      const srvCard = document.createElement('div');
      srvCard.className = 'service-item-card bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4';
      srvCard.dataset.id = srv.id || `srv-${idx}`;

      srvCard.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-xs">#${idx + 1}</span>
            <span class="font-heading font-bold text-sm text-white">${escapeHtml(srv.title || 'Service')}</span>
          </div>
          <button type="button" class="delete-service-btn text-xs text-red-400 hover:text-red-300 font-medium px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors">
            <i class="fa-solid fa-trash mr-1"></i> Delete
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="space-y-1 sm:col-span-2">
            <label class="text-[11px] font-semibold text-slate-400">Service Title</label>
            <input type="text" class="srv-title w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(srv.title || '')}" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">FontAwesome Icon</label>
            <input type="text" class="srv-icon w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(srv.icon || 'fa-briefcase')}" placeholder="fa-briefcase" />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">Short Description</label>
          <textarea rows="2" class="srv-desc w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white">${escapeHtml(srv.desc || '')}</textarea>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">Feature Bullet Points (1 per line)</label>
          <textarea rows="3" class="srv-features w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-mono">${(srv.features || []).join('\n')}</textarea>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">WhatsApp Query Message on Click</label>
          <input type="text" class="srv-whatsapp w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-emerald-400" value="${escapeHtml(srv.whatsappQuery || '')}" />
        </div>
      `;

      srvCard.querySelector('.delete-service-btn')?.addEventListener('click', () => {
        srvCard.remove();
        showToast('Service removed from list');
      });

      container.appendChild(srvCard);
    });
  }

  // 4c. Projects List
  function renderProjectsList(projects) {
    const container = document.getElementById('projects-list-container');
    if (!container) return;
    container.innerHTML = '';

    projects.forEach((proj, idx) => {
      const projCard = document.createElement('div');
      projCard.className = 'project-item-card bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-4';
      projCard.dataset.id = proj.id || `proj-${idx}`;

      projCard.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs">#${idx + 1}</span>
            <span class="font-heading font-bold text-sm text-white">${escapeHtml(proj.title || 'Project')}</span>
          </div>
          <button type="button" class="delete-project-btn text-xs text-red-400 hover:text-red-300 font-medium px-2 py-1 rounded bg-red-500/10 hover:bg-red-500/20 transition-colors">
            <i class="fa-solid fa-trash mr-1"></i> Delete
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="space-y-1 sm:col-span-2">
            <label class="text-[11px] font-semibold text-slate-400">Project Title</label>
            <input type="text" class="proj-title w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(proj.title || '')}" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Filter Category</label>
            <select class="proj-category w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white">
              <option value="business" ${proj.category === 'business' ? 'selected' : ''}>Business</option>
              <option value="ecommerce" ${proj.category === 'ecommerce' ? 'selected' : ''}>E-Commerce</option>
              <option value="portfolio" ${proj.category === 'portfolio' ? 'selected' : ''}>Portfolio</option>
              <option value="landing" ${proj.category === 'landing' ? 'selected' : ''}>Landing Page</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">FontAwesome Icon</label>
            <input type="text" class="proj-icon w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(proj.icon || 'fa-laptop-code')}" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Tech Tags (Comma separated)</label>
            <input type="text" class="proj-tags w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml((proj.tags || []).join(', '))}" />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">Project Description</label>
          <textarea rows="2" class="proj-desc w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white">${escapeHtml(proj.desc || '')}</textarea>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">WhatsApp Inquire Button Message</label>
          <input type="text" class="proj-whatsapp w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-emerald-400" value="${escapeHtml(proj.whatsappQuery || '')}" />
        </div>
      `;

      projCard.querySelector('.delete-project-btn')?.addEventListener('click', () => {
        projCard.remove();
        showToast('Project removed from list');
      });

      container.appendChild(projCard);
    });
  }

  // 4d. Pricing Packages
  function renderPricingList(pricing) {
    const container = document.getElementById('pricing-list-container');
    if (!container) return;
    container.innerHTML = '';

    pricing.forEach((plan, idx) => {
      const planCard = document.createElement('div');
      planCard.className = `pricing-item-card bg-slate-900/80 border ${plan.isPopular ? 'border-emerald-500' : 'border-slate-800'} rounded-2xl p-6 space-y-4`;
      planCard.dataset.id = plan.id || `price-${idx}`;

      planCard.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-3">
          <div class="flex items-center gap-2">
            <span class="font-heading font-bold text-base text-white">Tier ${idx + 1}: ${escapeHtml(plan.tierName || 'Plan')}</span>
          </div>
          <label class="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" class="plan-popular rounded text-emerald-500 bg-slate-950 border-slate-700" ${plan.isPopular ? 'checked' : ''} />
            <span class="text-xs text-emerald-400 font-semibold">Highlight as "Most Popular"</span>
          </label>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Tier Header Name</label>
            <input type="text" class="plan-tierName w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(plan.tierName || '')}" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Package Title</label>
            <input type="text" class="plan-title w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(plan.title || '')}" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Price Display (e.g. ₹5,999)</label>
            <input type="text" class="plan-price w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-emerald-400 font-bold" value="${escapeHtml(plan.price || '')}" />
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Short Sub-Description</label>
            <input type="text" class="plan-desc w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(plan.desc || '')}" />
          </div>
          <div class="space-y-1">
            <label class="text-[11px] font-semibold text-slate-400">Delivery Time Note</label>
            <input type="text" class="plan-delivery w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(plan.deliveryTime || 'Delivery in 3-5 Days')}" />
          </div>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">Included Features (1 bullet point per line)</label>
          <textarea rows="4" class="plan-features w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white font-mono">${(plan.features || []).join('\n')}</textarea>
        </div>

        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">WhatsApp Booking Inquiry Message</label>
          <input type="text" class="plan-whatsapp w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-emerald-400" value="${escapeHtml(plan.whatsappQuery || '')}" />
        </div>
      `;

      container.appendChild(planCard);
    });
  }

  // 4e. Process Steps
  function renderProcessSteps(steps) {
    const container = document.getElementById('whyus-steps-container');
    if (!container) return;
    container.innerHTML = '';

    steps.forEach((step, idx) => {
      const stepDiv = document.createElement('div');
      stepDiv.className = 'p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-2';
      stepDiv.innerHTML = `
        <div class="flex items-center gap-2 text-xs font-bold text-emerald-400">
          <span>Step ${step.num || idx + 1}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" class="step-title px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white" value="${escapeHtml(step.title || '')}" placeholder="Step Title" />
          <input type="text" class="step-desc px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white" value="${escapeHtml(step.desc || '')}" placeholder="Step Description" />
        </div>
      `;
      container.appendChild(stepDiv);
    });
  }

  // 4f. FAQs List
  function renderFaqsList(faqs) {
    const container = document.getElementById('faqs-list-container');
    if (!container) return;
    container.innerHTML = '';

    faqs.forEach((faq, idx) => {
      const faqCard = document.createElement('div');
      faqCard.className = 'faq-item-card bg-slate-900/80 border border-slate-800 rounded-2xl p-5 space-y-3';
      faqCard.dataset.id = faq.id || `faq-${idx}`;

      faqCard.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
          <span class="text-xs font-bold text-slate-300">Question #${idx + 1}</span>
          <button type="button" class="delete-faq-btn text-xs text-red-400 hover:text-red-300 font-medium px-2 py-0.5 rounded bg-red-500/10 hover:bg-red-500/20">
            <i class="fa-solid fa-trash mr-1"></i> Delete
          </button>
        </div>
        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">Question</label>
          <input type="text" class="faq-question-input w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white" value="${escapeHtml(faq.question || '')}" />
        </div>
        <div class="space-y-1">
          <label class="text-[11px] font-semibold text-slate-400">Answer</label>
          <textarea rows="2" class="faq-answer-input w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white">${escapeHtml(faq.answer || '')}</textarea>
        </div>
      `;

      faqCard.querySelector('.delete-faq-btn')?.addEventListener('click', () => {
        faqCard.remove();
        showToast('FAQ removed from list');
      });

      container.appendChild(faqCard);
    });
  }

  /* ----------------------------------------------------
     5. Add Item Buttons Handlers
  ---------------------------------------------------- */
  document.getElementById('add-service-btn')?.addEventListener('click', () => {
    const srvs = gatherServicesFromDOM();
    srvs.push({
      id: `srv-${Date.now()}`,
      icon: "fa-code",
      color: "emerald",
      title: "New Custom Service",
      desc: "Detailed description of what this service offers to clients.",
      features: ["Fast Delivery", "100% Mobile Ready", "Support Included"],
      whatsappQuery: "Hi! I am interested in this custom service."
    });
    renderServicesList(srvs);
    showToast('New service added! Click Save when done.');
  });

  document.getElementById('add-project-btn')?.addEventListener('click', () => {
    const projs = gatherProjectsFromDOM();
    projs.push({
      id: `proj-${Date.now()}`,
      category: "business",
      title: "New Project Showcase",
      icon: "fa-globe",
      desc: "Short summary about this client design demo.",
      tags: ["Modern", "Responsive", "Fast"],
      whatsappQuery: "Hi! I would like a website similar to this project."
    });
    renderProjectsList(projs);
    showToast('New project card added! Click Save when done.');
  });

  document.getElementById('add-faq-btn')?.addEventListener('click', () => {
    const faqs = gatherFaqsFromDOM();
    faqs.push({
      id: `faq-${Date.now()}`,
      question: "New Client Question?",
      answer: "Write a detailed answer here."
    });
    renderFaqsList(faqs);
    showToast('New FAQ added! Click Save when done.');
  });

  /* ----------------------------------------------------
     6. Gather Data from DOM & Save (with Supabase Sync)
  ---------------------------------------------------- */
  function gatherServicesFromDOM() {
    const cards = document.querySelectorAll('.service-item-card');
    const services = [];
    cards.forEach((card, idx) => {
      services.push({
        id: card.dataset.id || `srv-${idx}`,
        title: card.querySelector('.srv-title')?.value.trim() || '',
        icon: card.querySelector('.srv-icon')?.value.trim() || 'fa-briefcase',
        color: 'emerald',
        desc: card.querySelector('.srv-desc')?.value.trim() || '',
        features: (card.querySelector('.srv-features')?.value || '')
          .split('\n')
          .map(f => f.trim())
          .filter(Boolean),
        whatsappQuery: card.querySelector('.srv-whatsapp')?.value.trim() || ''
      });
    });
    return services;
  }

  function gatherProjectsFromDOM() {
    const cards = document.querySelectorAll('.project-item-card');
    const projects = [];
    cards.forEach((card, idx) => {
      projects.push({
        id: card.dataset.id || `proj-${idx}`,
        title: card.querySelector('.proj-title')?.value.trim() || '',
        category: card.querySelector('.proj-category')?.value || 'business',
        icon: card.querySelector('.proj-icon')?.value.trim() || 'fa-laptop-code',
        desc: card.querySelector('.proj-desc')?.value.trim() || '',
        tags: (card.querySelector('.proj-tags')?.value || '')
          .split(',')
          .map(t => t.trim())
          .filter(Boolean),
        whatsappQuery: card.querySelector('.proj-whatsapp')?.value.trim() || ''
      });
    });
    return projects;
  }

  function gatherPricingFromDOM() {
    const cards = document.querySelectorAll('.pricing-item-card');
    const pricing = [];
    cards.forEach((card, idx) => {
      pricing.push({
        id: card.dataset.id || `price-${idx}`,
        tierName: card.querySelector('.plan-tierName')?.value.trim() || '',
        title: card.querySelector('.plan-title')?.value.trim() || '',
        price: card.querySelector('.plan-price')?.value.trim() || '',
        unit: '/ one-time',
        desc: card.querySelector('.plan-desc')?.value.trim() || '',
        deliveryTime: card.querySelector('.plan-delivery')?.value.trim() || 'Delivery in 3-5 Days',
        isPopular: card.querySelector('.plan-popular')?.checked || false,
        popularBadge: '🔥 Most Popular Choice',
        features: (card.querySelector('.plan-features')?.value || '')
          .split('\n')
          .map(f => f.trim())
          .filter(Boolean),
        whatsappQuery: card.querySelector('.plan-whatsapp')?.value.trim() || ''
      });
    });
    return pricing;
  }

  function gatherTrustBadgesFromDOM() {
    const icons = document.querySelectorAll('.trust-badge-icon');
    const texts = document.querySelectorAll('.trust-badge-text');
    const badges = [];
    icons.forEach((ic, i) => {
      badges.push({
        icon: ic.value.trim() || 'fa-check',
        text: texts[i]?.value.trim() || '',
        color: 'emerald'
      });
    });
    return badges;
  }

  function gatherProcessStepsFromDOM() {
    const titles = document.querySelectorAll('.step-title');
    const descs = document.querySelectorAll('.step-desc');
    const steps = [];
    titles.forEach((t, i) => {
      steps.push({
        num: i + 1,
        title: t.value.trim() || '',
        desc: descs[i]?.value.trim() || ''
      });
    });
    return steps;
  }

  function gatherFaqsFromDOM() {
    const cards = document.querySelectorAll('.faq-item-card');
    const faqs = [];
    cards.forEach((card, idx) => {
      faqs.push({
        id: card.dataset.id || `faq-${idx}`,
        question: card.querySelector('.faq-question-input')?.value.trim() || '',
        answer: card.querySelector('.faq-answer-input')?.value.trim() || ''
      });
    });
    return faqs;
  }

  function gatherCompleteSiteData() {
    const whatsappNum = getVal('gen-whatsapp').replace(/[^0-9]/g, '');

    return {
      general: {
        brandName: getVal('gen-brandName') || 'Velora',
        brandSubtitle: getVal('gen-brandSubtitle') || 'Web Solutions',
        brandIcon: 'fa-gem',
        whatsappNumber: whatsappNum || '8200890373',
        whatsappCountryCode: '91',
        phone: getVal('gen-phone') || '8200890373',
        email: getVal('gen-email') || 'contact@veloraweb.com',
        location: getVal('gen-location') || 'Global & Remote Services',
        announcementText: getVal('gen-announcementText'),
        announcementLinkText: getVal('gen-announcementLinkText'),
        announcementOfferQuery: 'Hello, I want to claim the special website development offer.',
        floatingWhatsappBubbleText: getVal('gen-floatingBubble')
      },
      hero: {
        badgeText: getVal('hero-badgeText'),
        titleLine1: getVal('hero-titleLine1'),
        titleGradient: getVal('hero-titleGradient'),
        typewriterWords: getVal('hero-typewriterWords')
          .split(',')
          .map(w => w.trim())
          .filter(Boolean),
        subtitle: getVal('hero-subtitle'),
        ctaPrimaryText: getVal('hero-ctaPrimary'),
        ctaSecondaryText: getVal('hero-ctaSecondary'),
        cardTitle: 'Web Developer',
        cardStatus: 'Online on WhatsApp',
        trustBadges: gatherTrustBadgesFromDOM()
      },
      services: gatherServicesFromDOM(),
      projects: gatherProjectsFromDOM(),
      pricing: gatherPricingFromDOM(),
      whyUs: {
        tagline: getVal('whyus-tagline'),
        heading: getVal('whyus-heading'),
        desc: getVal('whyus-desc'),
        benefits: currentData.whyUs?.benefits || [],
        steps: gatherProcessStepsFromDOM()
      },
      faqs: gatherFaqsFromDOM(),
      footer: {
        about: getVal('footer-about'),
        copyright: getVal('footer-copyright')
      }
    };
  }

  async function saveChanges() {
    const updated = gatherCompleteSiteData();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    currentData = updated;

    // Save to Supabase Cloud
    if (typeof saveSiteSettingsToSupabase === 'function') {
      saveSiteSettingsToSupabase(updated).then(res => {
        if (res && res.success) {
          console.log('Successfully synced to Supabase Cloud');
        }
      });
    }

    showToast('✨ All changes saved to Browser & Supabase Cloud!');
  }

  document.getElementById('top-save-btn')?.addEventListener('click', saveChanges);
  document.getElementById('main-save-btn')?.addEventListener('click', saveChanges);

  /* ----------------------------------------------------
     7. Supabase Leads & Inquiries Manager
  ---------------------------------------------------- */
  async function loadLeads() {
    const tableBody = document.getElementById('leads-table-body');
    const badge = document.getElementById('leads-count-badge');
    if (!tableBody) return;

    tableBody.innerHTML = `
      <tr>
        <td colspan="7" class="py-8 text-center text-slate-500 text-xs">
          <i class="fa-solid fa-spinner fa-spin mr-2 text-emerald-400"></i> Fetching inquiries from Supabase...
        </td>
      </tr>
    `;

    if (typeof getLeadsFromSupabase !== 'function') {
      tableBody.innerHTML = `<tr><td colspan="7" class="py-6 text-center text-red-400">Supabase module not ready.</td></tr>`;
      return;
    }

    const leads = await getLeadsFromSupabase();
    if (badge) badge.textContent = leads.length;

    if (!leads || leads.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="py-10 text-center text-slate-400 space-y-2">
            <i class="fa-solid fa-inbox text-3xl text-slate-600 block mb-1"></i>
            <div>No inquiries received yet.</div>
            <div class="text-[11px] text-slate-500">When visitors submit the form on your website, they will appear here in real-time.</div>
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = '';
    leads.forEach((lead, idx) => {
      const tr = document.createElement('tr');
      tr.className = 'hover:bg-slate-800/40 transition-colors';

      const formattedDate = lead.created_at
        ? new Date(lead.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
        : 'Recent';

      const cleanPhone = (lead.phone || '').replace(/[^0-9]/g, '');
      const whatsappUrl = cleanPhone.length >= 10
        ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(`Hello ${lead.name}, thank you for your website inquiry!`)}`
        : null;

      tr.innerHTML = `
        <td class="py-3.5 px-4 font-semibold text-white">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-mono text-[10px]">
              ${idx + 1}
            </div>
            <span>${escapeHtml(lead.name || 'Anonymous')}</span>
          </div>
        </td>
        <td class="py-3.5 px-4 font-mono text-emerald-400">
          ${escapeHtml(lead.phone || 'N/A')}
        </td>
        <td class="py-3.5 px-4">
          <span class="px-2.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-[11px] text-slate-300">
            ${escapeHtml(lead.website_type || 'General')}
          </span>
        </td>
        <td class="py-3.5 px-4 text-emerald-300 font-semibold">
          ${escapeHtml(lead.budget || 'Standard')}
        </td>
        <td class="py-3.5 px-4 max-w-xs truncate text-slate-400" title="${escapeHtml(lead.notes || '')}">
          ${escapeHtml(lead.notes || 'No notes')}
        </td>
        <td class="py-3.5 px-4 text-[11px] text-slate-500 whitespace-nowrap">
          ${escapeHtml(formattedDate)}
        </td>
        <td class="py-3.5 px-4 text-right whitespace-nowrap space-x-2">
          ${whatsappUrl ? `
            <a href="${whatsappUrl}" target="_blank" title="Chat on WhatsApp" class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-whatsapp/15 hover:bg-whatsapp text-emerald-400 hover:text-slate-950 font-bold text-[11px] transition-all">
              <i class="fa-brands fa-whatsapp"></i> Chat
            </a>
          ` : ''}
          <button data-id="${lead.id}" class="delete-lead-btn inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-500/10 hover:bg-red-500 text-red-400 hover:text-white font-semibold text-[11px] transition-all">
            <i class="fa-solid fa-trash text-[10px]"></i>
          </button>
        </td>
      `;

      tr.querySelector('.delete-lead-btn')?.addEventListener('click', async () => {
        if (confirm(`Delete inquiry from ${lead.name}?`)) {
          const success = await deleteLeadFromSupabase(lead.id);
          if (success) {
            tr.remove();
            showToast('Inquiry deleted from Supabase.');
            const remaining = document.querySelectorAll('#leads-table-body tr').length;
            if (badge) badge.textContent = remaining;
          } else {
            showToast('Error deleting inquiry.');
          }
        }
      });

      tableBody.appendChild(tr);
    });
  }

  document.getElementById('refresh-leads-btn')?.addEventListener('click', () => {
    loadLeads();
    showToast('Refreshing inquiries from Supabase...');
  });

  /* ----------------------------------------------------
     8. Exporting & Backup Handlers
  ---------------------------------------------------- */
  document.getElementById('export-json-btn')?.addEventListener('click', () => {
    const data = gatherCompleteSiteData();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", "velora-site-backup.json");
    dlAnchor.click();
    showToast('JSON Backup downloaded!');
  });

  document.getElementById('export-html-btn')?.addEventListener('click', async () => {
    saveChanges();
    try {
      const response = await fetch('index.html');
      let htmlContent = await response.text();

      const embeddedScript = `\n<script>\nwindow.EMBEDDED_SITE_DATA = ${JSON.stringify(currentData)};\n</script>\n`;
      htmlContent = htmlContent.replace('</head>', `${embeddedScript}</head>`);

      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const dlAnchor = document.createElement('a');
      dlAnchor.href = url;
      dlAnchor.download = 'index.html';
      dlAnchor.click();
      URL.revokeObjectURL(url);
      showToast('Standalone index.html exported!');
    } catch (err) {
      console.error(err);
      showToast('Error exporting HTML. Please copy manually.');
    }
  });

  document.getElementById('reset-data-btn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all data back to original defaults? This will erase custom edits.')) {
      localStorage.removeItem(STORAGE_KEY);
      currentData = JSON.parse(JSON.stringify(defaultSiteData));
      populateAdminForm(currentData);
      showToast('Reset back to factory defaults.');
    }
  });

  /* ----------------------------------------------------
     9. Utility Functions
  ---------------------------------------------------- */
  function showToast(message) {
    const toast = document.getElementById('admin-toast');
    const toastText = document.getElementById('toast-text');
    if (!toast) return;

    if (toastText) toastText.textContent = message;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-20', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3500);
  }

  function escapeHtml(text) {
    if (!text) return '';
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Populate Admin Form
  populateAdminForm(currentData);
});
