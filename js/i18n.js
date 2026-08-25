/**
 * SCANNERI ELEMENTHO — i18n (tg default, ru, en)
 */
(function (global) {
  'use strict';
  const translations = {
    tg: {
      siteTitle: 'SCANNERI ELEMENTHO',
      subtitle: 'ҶАДВАЛИ ДАВРИИ ЭЛЕМЕНТХОИ ХИМИЯИ - 118 ЭЛЕМЕНТ',
      btnCalc: 'Канкулятори Химияви',
      btnInfo: 'МАЪЛУМОТ ДАР БОРАИ ХИМИЯ',
      btnTest: 'ТЕСТХОИ ХИМИЯВИ',
      btnTable: 'ҶАДВАЛИ МЕНДЕЛЕЕВ',
      searchPlaceholder: 'Номи элемент ё рамзи онро ворид кунед...',
      searchBtn: 'ҶУСТАН',
      tableTitle: 'ҶАДВАЛИ ДАВРИИ Д.И. МЕНДЕЛЕЕВ',
      labelUse: 'ИСТИФОДАБАРИИ АСОСӢ',
      labelFact: 'ХОСИЯТҲОИ ҶОЛИБ',
      labelDanger: 'ХАТАРНОКӢ',
      labelWeight: 'ВАЗНИ АТОМИ',
      photoLabel: 'СУРАТИ ЭЛЕМЕНТ',
      calcTitle: 'КАЛКУЛЯТОРИ ХИМИЯВӢ',
      testTitle: '🧪 ТЕСТХО',
      testSub: '25 савол • ба ҳар савол 1 дақиқа',
      nextBtn: '▶ БА САВОЛИ ОЯНДА',
      restartBtn: '🔁 Аз нав оғоз',
      infoTitle: 'ИЛМИ ХИМИЯ'
    },
    ru: {
      siteTitle: 'SCANNERI ELEMENTHO',
      subtitle: 'ПЕРИОДИЧЕСКАЯ ТАБЛИЦА ХИМИЧЕСКИХ ЭЛЕМЕНТОВ — 118 ЭЛЕМЕНТОВ',
      btnCalc: 'Химический калькулятор',
      btnInfo: 'ИНФОРМАЦИЯ О ХИМИИ',
      btnTest: 'ХИМИЧЕСКИЕ ТЕСТЫ',
      btnTable: 'ТАБЛИЦА МЕНДЕЛЕЕВА',
      searchPlaceholder: 'Введите название элемента или символ...',
      searchBtn: 'НАЙТИ',
      tableTitle: 'ПЕРИОДИЧЕСКАЯ ТАБЛИЦА Д.И. МЕНДЕЛЕЕВА',
      labelUse: 'ОСНОВНОЕ ПРИМЕНЕНИЕ',
      labelFact: 'ИНТЕРЕСНЫЕ СВОЙСТВА',
      labelDanger: 'ОПАСНОСТЬ',
      labelWeight: 'АТОМНАЯ МАССА',
      photoLabel: 'ФОТО ЭЛЕМЕНТА',
      calcTitle: 'ХИМИЧЕСКИЙ КАЛЬКУЛЯТОР',
      testTitle: '🧪 ТЕСТЫ',
      testSub: '25 вопросов • 1 минута на вопрос',
      nextBtn: '▶ СЛЕДУЮЩИЙ ВОПРОС',
      restartBtn: '🔁 Начать заново',
      infoTitle: 'НАУКА ХИМИЯ'
    },
    en: {
      siteTitle: 'SCANNERI ELEMENTHO',
      subtitle: 'PERIODIC TABLE OF CHEMICAL ELEMENTS — 118 ELEMENTS',
      btnCalc: 'Chemistry Calculator',
      btnInfo: 'CHEMISTRY INFORMATION',
      btnTest: 'CHEMISTRY TESTS',
      btnTable: 'MENDELEEV TABLE',
      searchPlaceholder: 'Enter element name or symbol...',
      searchBtn: 'SEARCH',
      tableTitle: 'PERIODIC TABLE OF D.I. MENDELEEV',
      labelUse: 'MAIN USES',
      labelFact: 'INTERESTING FACTS',
      labelDanger: 'HAZARDS',
      labelWeight: 'ATOMIC WEIGHT',
      photoLabel: 'ELEMENT PHOTO',
      calcTitle: 'CHEMISTRY CALCULATOR',
      testTitle: '🧪 TESTS',
      testSub: '25 questions • 1 minute per question',
      nextBtn: '▶ NEXT QUESTION',
      restartBtn: '🔁 Restart',
      infoTitle: 'THE SCIENCE OF CHEMISTRY'
    }
  };
  let currentLang = 'tg';
  function t(key) {
    const d = translations[currentLang] || translations.tg;
    return d[key] || translations.tg[key] || key;
  }
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'tg';
    currentLang = lang;
    try { localStorage.setItem('siteLang', lang); } catch(e) {}
    document.documentElement.lang = lang === 'tg' ? 'tg' : lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (key) el.textContent = t(key);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key) el.placeholder = t(key);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('siteLang'); } catch(e) {}
    setLanguage((saved && translations[saved]) ? saved : 'tg');
  }
  function injectSwitcher() {
    if (document.getElementById('lang-switcher')) return;
    const style = document.createElement('style');
    style.textContent = `
      #lang-switcher{position:fixed;top:20px;right:20px;z-index:1000;display:flex;gap:6px;background:rgba(10,15,20,0.85);padding:6px 8px;border-radius:30px;border:1px solid #00ffcc55;backdrop-filter:blur(8px);box-shadow:0 4px 20px rgba(0,255,204,0.15)}
      .lang-btn{background:transparent;border:none;color:#aaa;font-size:0.85rem;font-weight:700;padding:6px 12px;border-radius:20px;cursor:pointer;transition:all 0.25s}
      .lang-btn:hover{color:#00ffcc;background:rgba(0,255,204,0.1)}
      .lang-btn.active{color:#000;background:linear-gradient(135deg,#00ffcc,#00ccaa);box-shadow:0 0 12px rgba(0,255,204,0.6)}
      @media(max-width:480px){#lang-switcher{top:10px;right:10px;padding:4px 6px}.lang-btn{font-size:0.75rem;padding:5px 9px}}
    `;
    document.head.appendChild(style);
    const switcher = document.createElement('div');
    switcher.id = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" data-lang="tg" title="Тоҷикӣ">🇹🇯 ТОҶ</button>
      <button class="lang-btn" data-lang="ru" title="Русский">🇷🇺 РУС</button>
      <button class="lang-btn" data-lang="en" title="English">🇬🇧 ENG</button>
    `;
    document.body.appendChild(switcher);
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
  }
  global.i18n = { t, setLanguage, initLanguage, injectSwitcher, get currentLang() { return currentLang; } };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectSwitcher(); initLanguage(); });
  } else {
    injectSwitcher(); initLanguage();
  }
})(typeof window !== 'undefined' ? window : this);
