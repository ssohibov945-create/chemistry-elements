(function (global) {
  'use strict';
  const translations = {
    tg: {
      siteTitle: 'SCANNERI ELEMENTHO', subtitle: 'ҶАДВАЛИ ДАВРИИ ЭЛЕМЕНТХОИ ХИМИЯИ - 118 ЭЛЕМЕНТ',
      btnCalc: 'Канкулятори Химияви', btnInfo: 'МАЪЛУМОТ ДАР БОРАИ ХИМИЯ', btnTest: 'ТЕСТХОИ ХИМИЯВИ', btnTable: 'ҶАДВАЛИ МЕНДЕЛЕЕВ',
      searchPlaceholder: 'Номи элемент ё рамзи онро ворид кунед...', searchBtn: 'ҶУСТАН', tableTitle: 'ҶАДВАЛИ ДАВРИИ Д.И. МЕНДЕЛЕЕВ',
      labelUse: 'ИСТИФОДАБАРИИ АСОСӢ', labelFact: 'ХОСИЯТҲОИ ҶОЛИБ', labelDanger: 'ХАТАРНОКӢ', labelWeight: 'ВАЗНИ АТОМИ', photoLabel: 'СУРАТИ ЭЛЕМЕНТ',
      noData: 'Маълумот дар база нест.', notFound: 'Элемент ёфт нашуд.', infoTitle: 'ИЛМИ ХИМИЯ', infoIntro: 'Маълумоти асосӣ дар бораи химия.',
      calcTitle: 'КАЛКУЛЯТОРИ ХИМИЯВӢ', calcSubtitle: 'Ҳисобкунакҳои химиявӣ', molarTitle: 'ВАЗНИ АТОМИ', formulaLabel: 'Формулаи модда:', calcBtn: 'ҲИСОБ КУН',
      concTitle: 'КОНСЕНТРАТСИЯ', massLabel: 'Вазни модда (грамм):', molarMassLabel: 'Вазни атоми (г/моль):', volumeLabel: 'Ҳаҷми ҳал (литр):',
      balanceTitle: 'МУВОЗАНАТИ МУОДИЛА', equationLabel: 'Муодила:', balanceBtn: 'МУВОЗАНАТ КУН', convertTitle: 'ТАБДИЛИ МОЛ ВА ГРАММ', amountLabel: 'Миқдор:', convertTypeLabel: 'Навъи табдил:', convertBtn: 'ТАБДИЛ',
      testTitle: '🧪 ТЕСТХО', testSub: '25 савол • 1 дақиқа', nextBtn: '▶ БА САВОЛИ ОЯНДА', restartBtn: '🔁 Аз нав оғоз', questionOf: 'Саволи {n} / {total}', scoreText: 'аз 25 дуруст',
      whatIsChem: 'ЧИСТ ХИМИЯ?', defTitle: 'Таъриф', defText: 'Химия — илмест, ки сохт, хосиятҳо ва табдилёбии моддаҳоро меомӯзад.', basicsTitle: 'Асосҳо', basicsText: 'Атом — хурдтарин ҷузъи модда.',
      reactionsTitle: 'Навъҳои вокунишҳо', reaction1: 'Синтез: A + B → AB', reaction2: 'Таҳлил: AB → A + B', reaction3: 'Иваз: AB + C → AC + B', reaction4: 'Ивази дучанда: AB + CD → AD + CB',
      organicTitle: 'КИМИЁИ ОРГАНИКӢ', organicWhat: 'Чист?', organicText: 'Пайвастҳои карбон.', groupsTitle: 'Гурӯҳҳо', groupsText: 'Алканҳо, алкенҳо, алкинҳо, спиртҳо.', importanceTitle: 'Аҳамият', importanceText: 'Доруҳо, пластик, рангҳо.',
      mendeleevTitle: 'ДМИТРИЙ МЕНДЕЛЕЕВ', bioTitle: 'Зиндагинома', bioText: 'Д.И. Менделеев (1834–1907) — кашфкунандаи ҷадвали давравӣ.', discoveryTitle: 'Кашф', discoveryText: 'Соли 1869 ҷадвали давравиро кашф кард.',
      criteriaTitle: 'Меъёрҳо', criteria1: 'Хосиятҳо даврӣ такрор мешаванд.', criteria2: 'Пешгӯии унсурҳои нав.', criteria3: 'Асоси химияи муосир.',
      scientistsTitle: 'ОЛИМОНИ БУЗУРГ', lavoisierBio: 'Падари химияи муосир.', boyleBio: 'Таърифи муосири модда.', curieBio: 'Ду ҷоизаи Нобел. Радий ва полоний.', paulingBio: 'Назарияи пайванди химиявӣ.', formulasTitle: 'ФОРМУЛАҲО', footerInfo: 'Барои омӯзиш.', loading: 'Загрузка...'
    },
    ru: {
      siteTitle: 'SCANNERI ELEMENTHO', subtitle: 'ПЕРИОДИЧЕСКАЯ ТАБЛИЦА — 118 ЭЛЕМЕНТОВ',
      btnCalc: 'Химический калькулятор', btnInfo: 'ИНФОРМАЦИЯ О ХИМИИ', btnTest: 'ХИМИЧЕСКИЕ ТЕСТЫ', btnTable: 'ТАБЛИЦА МЕНДЕЛЕЕВА',
      searchPlaceholder: 'Введите название или символ...', searchBtn: 'НАЙТИ', tableTitle: 'ПЕРИОДИЧЕСКАЯ ТАБЛИЦА Д.И. МЕНДЕЛЕЕВА',
      labelUse: 'ОСНОВНОЕ ПРИМЕНЕНИЕ', labelFact: 'ИНТЕРЕСНЫЕ СВОЙСТВА', labelDanger: 'ОПАСНОСТЬ', labelWeight: 'АТОМНАЯ МАССА', photoLabel: 'ФОТО ЭЛЕМЕНТА',
      noData: 'Данных нет.', notFound: 'Элемент не найден.', infoTitle: 'НАУКА ХИМИЯ', infoIntro: 'Основная информация о химии.',
      calcTitle: 'ХИМИЧЕСКИЙ КАЛЬКУЛЯТОР', calcSubtitle: 'Химические расчёты', molarTitle: 'АТОМНАЯ МАССА', formulaLabel: 'Формула:', calcBtn: 'РАССЧИТАТЬ',
      concTitle: 'КОНЦЕНТРАЦИЯ', massLabel: 'Масса (г):', molarMassLabel: 'Молярная масса:', volumeLabel: 'Объём (л):',
      balanceTitle: 'УРАВНИВАНИЕ', equationLabel: 'Уравнение:', balanceBtn: 'УРАВНЯТЬ', convertTitle: 'МОЛЬ ↔ ГРАММ', amountLabel: 'Количество:', convertTypeLabel: 'Тип:', convertBtn: 'ПЕРЕВЕСТИ',
      testTitle: '🧪 ТЕСТЫ', testSub: '25 вопросов • 1 минута', nextBtn: '▶ СЛЕДУЮЩИЙ', restartBtn: '🔁 Заново', questionOf: 'Вопрос {n} / {total}', scoreText: 'из 25 правильных',
      whatIsChem: 'ЧТО ТАКОЕ ХИМИЯ?', defTitle: 'Определение', defText: 'Химия изучает строение и превращения веществ.', basicsTitle: 'Основы', basicsText: 'Атом — мельчайшая частица вещества.',
      reactionsTitle: 'Типы реакций', reaction1: 'Синтез: A + B → AB', reaction2: 'Разложение: AB → A + B', reaction3: 'Замещение: AB + C → AC + B', reaction4: 'Обмен: AB + CD → AD + CB',
      organicTitle: 'ОРГАНИЧЕСКАЯ ХИМИЯ', organicWhat: 'Что это?', organicText: 'Соединения углерода.', groupsTitle: 'Группы', groupsText: 'Алканы, алкены, алкины, спирты.', importanceTitle: 'Значение', importanceText: 'Лекарства, пластик, краски.',
      mendeleevTitle: 'ДМИТРИЙ МЕНДЕЛЕЕВ', bioTitle: 'Биография', bioText: 'Д.И. Менделеев (1834–1907) — создатель периодической таблицы.', discoveryTitle: 'Открытие', discoveryText: 'В 1869 году открыл периодический закон.',
      criteriaTitle: 'Принципы', criteria1: 'Свойства повторяются периодически.', criteria2: 'Предсказание новых элементов.', criteria3: 'Основа современной химии.',
      scientistsTitle: 'ВЕЛИКИЕ УЧЁНЫЕ', lavoisierBio: 'Отец современной химии.', boyleBio: 'Современное определение вещества.', curieBio: 'Две Нобелевские премии. Радий и полоний.', paulingBio: 'Теория химической связи.', formulasTitle: 'ФОРМУЛЫ', footerInfo: 'Для обучения.', loading: 'Загрузка...'
    },
    en: {
      siteTitle: 'SCANNERI ELEMENTHO', subtitle: 'PERIODIC TABLE — 118 ELEMENTS',
      btnCalc: 'Chemistry Calculator', btnInfo: 'CHEMISTRY INFO', btnTest: 'CHEMISTRY TESTS', btnTable: 'MENDELEEV TABLE',
      searchPlaceholder: 'Enter name or symbol...', searchBtn: 'SEARCH', tableTitle: 'PERIODIC TABLE OF D.I. MENDELEEV',
      labelUse: 'MAIN USES', labelFact: 'INTERESTING FACTS', labelDanger: 'HAZARDS', labelWeight: 'ATOMIC WEIGHT', photoLabel: 'ELEMENT PHOTO',
      noData: 'No data.', notFound: 'Element not found.', infoTitle: 'THE SCIENCE OF CHEMISTRY', infoIntro: 'Main information about chemistry.',
      calcTitle: 'CHEMISTRY CALCULATOR', calcSubtitle: 'Chemical calculations', molarTitle: 'ATOMIC MASS', formulaLabel: 'Formula:', calcBtn: 'CALCULATE',
      concTitle: 'CONCENTRATION', massLabel: 'Mass (g):', molarMassLabel: 'Molar mass:', volumeLabel: 'Volume (L):',
      balanceTitle: 'EQUATION BALANCING', equationLabel: 'Equation:', balanceBtn: 'BALANCE', convertTitle: 'MOL ↔ GRAM', amountLabel: 'Amount:', convertTypeLabel: 'Type:', convertBtn: 'CONVERT',
      testTitle: '🧪 TESTS', testSub: '25 questions • 1 minute', nextBtn: '▶ NEXT', restartBtn: '🔁 Restart', questionOf: 'Question {n} / {total}', scoreText: 'out of 25 correct',
      whatIsChem: 'WHAT IS CHEMISTRY?', defTitle: 'Definition', defText: 'Chemistry studies the structure and transformations of matter.', basicsTitle: 'Basics', basicsText: 'An atom is the smallest particle of matter.',
      reactionsTitle: 'Reaction types', reaction1: 'Synthesis: A + B → AB', reaction2: 'Decomposition: AB → A + B', reaction3: 'Single replacement: AB + C → AC + B', reaction4: 'Double replacement: AB + CD → AD + CB',
      organicTitle: 'ORGANIC CHEMISTRY', organicWhat: 'What is it?', organicText: 'Carbon compounds.', groupsTitle: 'Groups', groupsText: 'Alkanes, alkenes, alkynes, alcohols.', importanceTitle: 'Importance', importanceText: 'Medicines, plastics, dyes.',
      mendeleevTitle: 'DMITRI MENDELEEV', bioTitle: 'Biography', bioText: 'D.I. Mendeleev (1834–1907) created the periodic table.', discoveryTitle: 'Discovery', discoveryText: 'In 1869 he discovered the periodic law.',
      criteriaTitle: 'Principles', criteria1: 'Properties repeat periodically.', criteria2: 'Prediction of new elements.', criteria3: 'Foundation of modern chemistry.',
      scientistsTitle: 'GREAT SCIENTISTS', lavoisierBio: 'Father of modern chemistry.', boyleBio: 'Modern definition of substance.', curieBio: 'Two Nobel Prizes. Radium and polonium.', paulingBio: 'Theory of chemical bonding.', formulasTitle: 'FORMULAS', footerInfo: 'For learning.', loading: 'Loading...'
    }
  };
  const quizQuestions = {
    tg: [
      { q: 'Рамзи химиявии об кадом аст?', o: ['H₂O', 'CO₂', 'O₂', 'NaCl'], c: 0 },
      { q: 'Элементи №1 кадом аст?', o: ['Гелий', 'Ҳидроген', 'Литий', 'Карбон'], c: 1 },
      { q: 'Формулаи намаки ош?', o: ['KCl', 'NaCl', 'CaCl₂', 'NaOH'], c: 1 },
      { q: '78% ҳаво кадом газ аст?', o: ['Оксиген', 'Азот', 'Карбон', 'Аргон'], c: 1 },
      { q: 'Рамзи оҳан?', o: ['Fe', 'Au', 'Ag', 'Cu'], c: 0 }
    ],
    ru: [
      { q: 'Химическая формула воды?', o: ['H₂O', 'CO₂', 'O₂', 'NaCl'], c: 0 },
      { q: 'Элемент №1?', o: ['Гелий', 'Водород', 'Литий', 'Углерод'], c: 1 },
      { q: 'Формула поваренной соли?', o: ['KCl', 'NaCl', 'CaCl₂', 'NaOH'], c: 1 },
      { q: '78% воздуха — это?', o: ['Кислород', 'Азот', 'Углерод', 'Аргон'], c: 1 },
      { q: 'Символ железа?', o: ['Fe', 'Au', 'Ag', 'Cu'], c: 0 }
    ],
    en: [
      { q: 'Chemical formula of water?', o: ['H₂O', 'CO₂', 'O₂', 'NaCl'], c: 0 },
      { q: 'Element #1?', o: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'], c: 1 },
      { q: 'Formula of table salt?', o: ['KCl', 'NaCl', 'CaCl₂', 'NaOH'], c: 1 },
      { q: '78% of air is?', o: ['Oxygen', 'Nitrogen', 'Carbon', 'Argon'], c: 1 },
      { q: 'Symbol of iron?', o: ['Fe', 'Au', 'Ag', 'Cu'], c: 0 }
    ]
  };
  let currentLang = 'tg';
  function t(key, vars) {
    const dict = translations[currentLang] || translations.tg;
    let str = dict[key] || translations.tg[key] || key;
    if (vars) Object.keys(vars).forEach(k => { str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]); });
    return str;
  }
  function getQuizQuestions() { return quizQuestions[currentLang] || quizQuestions.tg; }
  function setLanguage(lang) {
    if (!translations[lang]) lang = 'tg';
    currentLang = lang;
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
    document.documentElement.lang = lang === 'tg' ? 'tg' : lang;
    document.querySelectorAll('[data-i18n]').forEach(el => { const key = el.getAttribute('data-i18n'); if (key) el.textContent = t(key); });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { const key = el.getAttribute('data-i18n-placeholder'); if (key) el.placeholder = t(key); });
    document.querySelectorAll('.lang-btn').forEach(btn => { btn.classList.toggle('active', btn.getAttribute('data-lang') === lang); });
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }
  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('siteLang'); } catch (e) {}
    setLanguage((saved && translations[saved]) ? saved : 'tg');
  }
  function injectSwitcher() {
    if (document.getElementById('lang-switcher')) return;
    const style = document.createElement('style');
    style.textContent = '#lang-switcher{position:fixed;top:14px;right:14px;z-index:1100;display:flex;gap:4px;background:rgba(12,18,34,.92);padding:5px 6px;border-radius:24px;border:1px solid rgba(201,162,39,.25);backdrop-filter:blur(12px)}.lang-btn{background:transparent;border:none;color:#94a3b8;font-size:.78rem;font-weight:600;padding:6px 10px;border-radius:16px;cursor:pointer}.lang-btn:hover{color:#e8d48b}.lang-btn.active{color:#0c1222;background:linear-gradient(135deg,#c9a227,#a8841a)}@media(max-width:480px){#lang-switcher{top:8px;right:8px}.lang-btn{font-size:.7rem;padding:5px 8px}}';
    document.head.appendChild(style);
    const sw = document.createElement('div');
    sw.id = 'lang-switcher';
    sw.innerHTML = '<button class="lang-btn" data-lang="tg">🇹🇯 ТОҶ</button><button class="lang-btn" data-lang="ru">🇷🇺 РУС</button><button class="lang-btn" data-lang="en">🇬🇧 ENG</button>';
    document.body.appendChild(sw);
    sw.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang'))));
  }
  function getElementData() { return null; }
  global.i18n = { t, setLanguage, initLanguage, injectSwitcher, getQuizQuestions, getElementData, get currentLang() { return currentLang; }, translations };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => { injectSwitcher(); initLanguage(); });
  else { injectSwitcher(); initLanguage(); }
})(typeof window !== 'undefined' ? window : this);
