/**
 * SCANNERI ELEMENTHO — complete i18n (tg default, ru, en)
 * localStorage key: siteLang
 * Requires js/elements-i18n.js for element translations
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
      noData: 'Маълумот дар база нест.',
      notFound: 'Элемент ёфт нашуд.',
      infoTitle: 'ИЛМИ ХИМИЯ',
      infoIntro: 'Дар ин саҳифа шумо ҳама маълумоти асосии химия, пайвастҳо, олимон ва таърихи ин илми ҷолибро хоҳед ёфт.',
      calcTitle: 'КАЛКУЛЯТОРИ ХИМИЯВӢ',
      calcSubtitle: 'Ҳисобкунаки молярӣ, мувозанати муодилаҳо, концентрасияи ҳаллиҳо ва дигар асбобҳои ҳисоббарории химиявӣ',
      molarTitle: 'ВАЗНИ АТОМИ',
      formulaLabel: 'Формулаи модда (масалан: H2O, NaCl, C6H12O6):',
      calcBtn: 'ҲИСОБ КУН',
      molarPlaceholder: 'Вазни молярӣ дар ин ҷо пайдо мешавад...',
      concTitle: 'КОНСЕНТРАТСИЯ',
      massLabel: 'Вазни модда (грамм):',
      molarMassLabel: 'Вазни атоми (г/моль):',
      volumeLabel: 'Ҳаҷми ҳал (литр):',
      concPlaceholder: 'Концентрасия дар ин ҷо пайдо мешавад...',
      balanceTitle: 'МУВОЗАНАТИ МУОДИЛА',
      equationLabel: 'Муодилаи ғайримувозанат (масалан: H2 + O2 → H2O):',
      balanceBtn: 'МУВОЗАНАТ КУН',
      balancePlaceholder: 'Муодилаи мувозанат дар ин ҷо пайдо мешавад...',
      convertTitle: 'ТАБДИЛИ МОЛ ВА ГРАММ',
      amountLabel: 'Миқдор:',
      convertTypeLabel: 'Навъи табдил:',
      molToGram: 'Мол → Грамм',
      gramToMol: 'Грамм → Мол',
      convertBtn: 'ТАБДИЛ ДEҲ',
      convertPlaceholder: 'Натиҷа дар ин ҷо пайдо мешавад...',
      atomicWeightsTitle: 'ВАЗНИ АТОМИИ УНСУРҲО',
      seeTable: 'Барои дигар унсурҳо ба ҷадвали Менделеев нигаред',
      practicalTitle: 'КОРҲОИ АМАЛӢ',
      practical1: 'КОРИ АМАЛИ 1',
      practical2: 'КОРИ АМАЛИ 2',
      practical3: 'КОРИ АМАЛИ 3',
      calcFooter: 'Барои омухтани пайвастшави',
      enterFormula: '⚠️ Лутфан формуларо ворид кунед!',
      badFormula: '⚠️ Формула нодуруст аст!',
      fillAll: '⚠️ Ҳамаи майдонҳоро пур кунед!',
      enterAmount: '⚠️ Миқдор ва вазни моляриро ворид кунед!',
      equationNotFound: '🔍 Ин муодила дар система нест. Барои мувозанат кардан кӯшиш кунед: 2H₂ + O₂ → 2H₂O',
      molarResultPrefix: 'Вазни атоми =',
      molUnit: 'моль',
      gramUnit: 'грамм',
      concUnit: 'моль/л',
      testTitle: '🧪 ТЕСТХО',
      testSub: '25 савол • ба ҳар савол 1 дақиқа',
      nextBtn: '▶ БА САВОЛИ ОЯНДА',
      restartBtn: '🔁 Аз нав оғоз',
      questionOf: 'Саволи {n} / {total}',
      scoreText: 'аз 25 дуруст',
      loading: 'Загрузка...',
      whatIsChem: 'ЧИСТ ХИМИЯ?',
      defTitle: 'Таъриф',
      defText: 'Химия — илмест, ки сохт, хосиятҳо, табдилёбии моддаҳо ва инчунин энергияро дар раванди вокунишҳо меомӯзад. Ҳар чизе, ки масса дорад ва ҷой ишғол мекунад, модда аст.',
      basicsTitle: 'Асосҳои химия',
      basicsText: 'Атом — хурдтарин ҷузъи модда. Атомҳо якҷоя шуда молекулаҳо ташкил медиҳанд. Намуна: ду атоми ҳидроген ва як атоми оксиген як молекулаи об (H₂O) ташкил медиҳанд.',
      reactionsTitle: 'Навъҳои вокунишҳо',
      reaction1: 'Синтез (якҷояшавӣ): A + B → AB',
      reaction2: 'Таҳлил (порапорашавӣ): AB → A + B',
      reaction3: 'Иваз: AB + C → AC + B',
      reaction4: 'Ивази дучанда: AB + CD → AD + CB',
      organicTitle: 'КИМИЁИ ОРГАНИКӢ',
      organicWhat: 'Чист химияи органикӣ?',
      organicText: 'Химияи органикӣ — шохае аз химия, ки пайвастҳои карбонро меомӯзад. Карбон қобилияти ташкили зиёда аз 10 миллион пайвастҳои гуногунро дорад. Нафт, пластик, доруҳо — ҳама аз пайвастҳои органикӣ иборатанд.',
      groupsTitle: 'Гурӯҳҳои асосӣ',
      groupsText: 'Алканҳо: Пайванди якка — метан (CH₄), этан (C₂H₆). Алкенҳо: Пайванди дучанда — этилен (C₂H₄). Алкинҳо: Пайванди сечанда — ацетилен (C₂H₂). Спиртҳо: Гурӯҳи OH — этанол (C₂H₅OH).',
      importanceTitle: 'Аҳамият',
      importanceText: 'Бе химияи органикӣ мо доруҳои нав, пластик, рангҳо, воситаҳои химиявии кишоварзӣ надорем. Ҳаёти муосир бе пайвастҳои органикӣ имконнопазир аст.',
      mendeleevTitle: 'ДМИТРИЙ МЕНДЕЛЕЕВ',
      bioTitle: 'Зиндагинома',
      bioText: 'Дмитрий Иванович Менделеев (8 феврали 1834, Тоболск — 2 феврали 1907, Санкт-Петербург) — химикди рус, оҳангсоз ва олими барҷаста. Ӯ ҷадвали давравии элементҳои химиявиро кашф кард.',
      discoveryTitle: 'Кашфи ҷадвал',
      discoveryText: 'Соли 1869 Менделеев ҳангоми кор бо китоб ва маводи таълимӣ ба ин фикр расид, ки хосиятҳои унсурҳо ба вазнашон атомӣ вобастаанд. Вай унсурҳоро ба давраҳо гурӯҳбандӣ кард.',
      criteriaTitle: 'Меъёрҳои Менделеев',
      criteria1: 'Хосиятҳои унсурҳо ба таври даврӣ такрор мешаванд.',
      criteria2: 'Вай пешгӯӣ кард, ки унсурҳои нав (масалан, галлий, скандий) кашф мешаванд.',
      criteria3: 'Ҷадвал асоси химияи муосир гардид.',
      scientistsTitle: 'ОЛИМОНИ БУЗУРГИ ХИМИЯ',
      lavoisierBio: 'Падари химияи муосир. Ӯ қонуни ҳифзи массаро кашф кард ва номи «оксиген»-ро гузошт. Бо таҳқиқоти худ асоси химияи ғайриорганикӣ гузошт.',
      boyleBio: 'Нахустин олиме, ки таърифи муосири моддаро дод. Ӯ китоби «Кимиёгори шаффоф»-ро навишт ва қонуни Бойлро кашф кард.',
      curieBio: 'Ду маротиба барандаи ҷоизаи Нобел. Радий ва полонийро кашф кард. Олими якум, ки барандаи ҷоизаи Нобел дар ду соҳа шуд.',
      paulingBio: 'Ду маротиба барандаи ҷоизаи Нобел (химия ва сулҳ). Ӯ назарияи пайванди химиявиро таҳия кард ва барои сулҳ мубориза бурд.',
      formulasTitle: 'ФОРМУЛАҲОИ МУҲИМ',
      footerInfo: 'Ҳамаи маълумот барои омӯзиш аст.'
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
      noData: 'Данных в базе нет.',
      notFound: 'Элемент не найден.',
      infoTitle: 'НАУКА ХИМИЯ',
      infoIntro: 'На этой странице вы найдёте основную информацию о химии, соединениях, учёных и истории этой увлекательной науки.',
      calcTitle: 'ХИМИЧЕСКИЙ КАЛЬКУЛЯТОР',
      calcSubtitle: 'Молярный калькулятор, уравнивание реакций, концентрация растворов и другие инструменты химических расчётов',
      molarTitle: 'АТОМНАЯ МАССА',
      formulaLabel: 'Формула вещества (например: H2O, NaCl, C6H12O6):',
      calcBtn: 'РАССЧИТАТЬ',
      molarPlaceholder: 'Молярная масса появится здесь...',
      concTitle: 'КОНЦЕНТРАЦИЯ',
      massLabel: 'Масса вещества (грамм):',
      molarMassLabel: 'Атомная масса (г/моль):',
      volumeLabel: 'Объём раствора (литр):',
      concPlaceholder: 'Концентрация появится здесь...',
      balanceTitle: 'УРАВНИВАНИЕ УРАВНЕНИЯ',
      equationLabel: 'Неуравненное уравнение (например: H2 + O2 → H2O):',
      balanceBtn: 'УРАВНЯТЬ',
      balancePlaceholder: 'Уравненное уравнение появится здесь...',
      convertTitle: 'ПЕРЕВОД МОЛЬ И ГРАММ',
      amountLabel: 'Количество:',
      convertTypeLabel: 'Тип перевода:',
      molToGram: 'Моль → Грамм',
      gramToMol: 'Грамм → Моль',
      convertBtn: 'ПЕРЕВЕСТИ',
      convertPlaceholder: 'Результат появится здесь...',
      atomicWeightsTitle: 'АТОМНЫЕ МАССЫ ЭЛЕМЕНТОВ',
      seeTable: 'Для других элементов смотрите таблицу Менделеева',
      practicalTitle: 'ПРАКТИЧЕСКИЕ РАБОТЫ',
      practical1: 'ПРАКТИЧЕСКАЯ 1',
      practical2: 'ПРАКТИЧЕСКАЯ 2',
      practical3: 'ПРАКТИЧЕСКАЯ 3',
      calcFooter: 'Для изучения соединений',
      enterFormula: '⚠️ Пожалуйста, введите формулу!',
      badFormula: '⚠️ Формула неверна!',
      fillAll: '⚠️ Заполните все поля!',
      enterAmount: '⚠️ Введите количество и молярную массу!',
      equationNotFound: '🔍 Это уравнение отсутствует в системе. Попробуйте: 2H₂ + O₂ → 2H₂O',
      molarResultPrefix: 'Атомная масса =',
      molUnit: 'моль',
      gramUnit: 'грамм',
      concUnit: 'моль/л',
      testTitle: '🧪 ТЕСТЫ',
      testSub: '25 вопросов • 1 минута на каждый вопрос',
      nextBtn: '▶ СЛЕДУЮЩИЙ ВОПРОС',
      restartBtn: '🔁 Начать заново',
      questionOf: 'Вопрос {n} / {total}',
      scoreText: 'из 25 правильных',
      loading: 'Загрузка...',
      whatIsChem: 'ЧТО ТАКОЕ ХИМИЯ?',
      defTitle: 'Определение',
      defText: 'Химия — наука, изучающая строение, свойства, превращения веществ, а также энергию в процессе реакций. Всё, что имеет массу и занимает место, является веществом.',
      basicsTitle: 'Основы химии',
      basicsText: 'Атом — мельчайшая частица вещества. Атомы соединяются, образуя молекулы. Пример: два атома водорода и один атом кислорода образуют молекулу воды (H₂O).',
      reactionsTitle: 'Типы реакций',
      reaction1: 'Синтез (соединение): A + B → AB',
      reaction2: 'Разложение: AB → A + B',
      reaction3: 'Замещение: AB + C → AC + B',
      reaction4: 'Обмен: AB + CD → AD + CB',
      organicTitle: 'ОРГАНИЧЕСКАЯ ХИМИЯ',
      organicWhat: 'Что такое органическая химия?',
      organicText: 'Органическая химия — раздел химии, изучающий соединения углерода. Углерод способен образовывать более 10 миллионов различных соединений. Нефть, пластик, лекарства — всё состоит из органических соединений.',
      groupsTitle: 'Основные группы',
      groupsText: 'Алканы: одинарная связь — метан (CH₄), этан (C₂H₆). Алкены: двойная связь — этилен (C₂H₄). Алкины: тройная связь — ацетилен (C₂H₂). Спирты: группа OH — этанол (C₂H₅OH).',
      importanceTitle: 'Значение',
      importanceText: 'Без органической химии у нас не было бы новых лекарств, пластика, красок, средств химической защиты растений. Современная жизнь невозможна без органических соединений.',
      mendeleevTitle: 'ДМИТРИЙ МЕНДЕЛЕЕВ',
      bioTitle: 'Биография',
      bioText: 'Дмитрий Иванович Менделеев (8 февраля 1834, Тобольск — 2 февраля 1907, Санкт-Петербург) — русский химик, композитор и выдающийся учёный. Он открыл периодическую таблицу химических элементов.',
      discoveryTitle: 'Открытие таблицы',
      discoveryText: 'В 1869 году Менделеев, работая над книгой и учебными материалами, пришёл к мысли, что свойства элементов зависят от их атомной массы. Он расположил элементы по периодам.',
      criteriaTitle: 'Принципы Менделеева',
      criteria1: 'Свойства элементов периодически повторяются.',
      criteria2: 'Он предсказал открытие новых элементов (например, галлия, скандия).',
      criteria3: 'Таблица стала основой современной химии.',
      scientistsTitle: 'ВЕЛИКИЕ УЧЁНЫЕ-ХИМИКИ',
      lavoisierBio: 'Отец современной химии. Открыл закон сохранения массы и дал название «кислород». Своими исследованиями заложил основы неорганической химии.',
      boyleBio: 'Первый учёный, давший современное определение вещества. Написал книгу «Скептический химик» и открыл закон Бойля.',
      curieBio: 'Дважды лауреат Нобелевской премии. Открыла радий и полоний. Первая учёная, получившая Нобелевскую премию в двух областях.',
      paulingBio: 'Дважды лауреат Нобелевской премии (химия и мир). Разработал теорию химической связи и боролся за мир.',
      formulasTitle: 'ВАЖНЫЕ ФОРМУЛЫ',
      footerInfo: 'Вся информация предназначена для обучения.'
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
      noData: 'No data in the database.',
      notFound: 'Element not found.',
      infoTitle: 'THE SCIENCE OF CHEMISTRY',
      infoIntro: 'On this page you will find the main information about chemistry, compounds, scientists and the history of this fascinating science.',
      calcTitle: 'CHEMISTRY CALCULATOR',
      calcSubtitle: 'Molar mass calculator, equation balancing, solution concentration and other chemical calculation tools',
      molarTitle: 'ATOMIC MASS',
      formulaLabel: 'Substance formula (e.g. H2O, NaCl, C6H12O6):',
      calcBtn: 'CALCULATE',
      molarPlaceholder: 'Molar mass will appear here...',
      concTitle: 'CONCENTRATION',
      massLabel: 'Substance mass (grams):',
      molarMassLabel: 'Atomic mass (g/mol):',
      volumeLabel: 'Solution volume (liters):',
      concPlaceholder: 'Concentration will appear here...',
      balanceTitle: 'EQUATION BALANCING',
      equationLabel: 'Unbalanced equation (e.g. H2 + O2 → H2O):',
      balanceBtn: 'BALANCE',
      balancePlaceholder: 'Balanced equation will appear here...',
      convertTitle: 'MOLE ↔ GRAM CONVERSION',
      amountLabel: 'Amount:',
      convertTypeLabel: 'Conversion type:',
      molToGram: 'Mole → Gram',
      gramToMol: 'Gram → Mole',
      convertBtn: 'CONVERT',
      convertPlaceholder: 'Result will appear here...',
      atomicWeightsTitle: 'ATOMIC WEIGHTS OF ELEMENTS',
      seeTable: 'For other elements see the Mendeleev table',
      practicalTitle: 'PRACTICAL WORKS',
      practical1: 'PRACTICAL 1',
      practical2: 'PRACTICAL 2',
      practical3: 'PRACTICAL 3',
      calcFooter: 'For studying compounds',
      enterFormula: '⚠️ Please enter a formula!',
      badFormula: '⚠️ Invalid formula!',
      fillAll: '⚠️ Fill in all fields!',
      enterAmount: '⚠️ Enter amount and molar mass!',
      equationNotFound: '🔍 This equation is not in the system. Try: 2H₂ + O₂ → 2H₂O',
      molarResultPrefix: 'Atomic mass =',
      molUnit: 'mol',
      gramUnit: 'grams',
      concUnit: 'mol/L',
      testTitle: '🧪 TESTS',
      testSub: '25 questions • 1 minute per question',
      nextBtn: '▶ NEXT QUESTION',
      restartBtn: '🔁 Restart',
      questionOf: 'Question {n} / {total}',
      scoreText: 'out of 25 correct',
      loading: 'Loading...',
      whatIsChem: 'WHAT IS CHEMISTRY?',
      defTitle: 'Definition',
      defText: 'Chemistry is the science that studies the structure, properties and transformations of substances, as well as energy in reactions. Everything that has mass and occupies space is matter.',
      basicsTitle: 'Basics of chemistry',
      basicsText: 'An atom is the smallest particle of matter. Atoms combine to form molecules. Example: two hydrogen atoms and one oxygen atom form a water molecule (H₂O).',
      reactionsTitle: 'Types of reactions',
      reaction1: 'Synthesis (combination): A + B → AB',
      reaction2: 'Decomposition: AB → A + B',
      reaction3: 'Substitution: AB + C → AC + B',
      reaction4: 'Double displacement: AB + CD → AD + CB',
      organicTitle: 'ORGANIC CHEMISTRY',
      organicWhat: 'What is organic chemistry?',
      organicText: 'Organic chemistry is the branch of chemistry that studies carbon compounds. Carbon can form more than 10 million different compounds. Oil, plastic, medicines — all consist of organic compounds.',
      groupsTitle: 'Main groups',
      groupsText: 'Alkanes: single bond — methane (CH₄), ethane (C₂H₆). Alkenes: double bond — ethylene (C₂H₄). Alkynes: triple bond — acetylene (C₂H₂). Alcohols: OH group — ethanol (C₂H₅OH).',
      importanceTitle: 'Importance',
      importanceText: 'Without organic chemistry we would not have new medicines, plastics, paints or agricultural chemicals. Modern life is impossible without organic compounds.',
      mendeleevTitle: 'DMITRI MENDELEEV',
      bioTitle: 'Biography',
      bioText: 'Dmitri Ivanovich Mendeleev (8 February 1834, Tobolsk — 2 February 1907, St Petersburg) was a Russian chemist, composer and outstanding scientist. He discovered the periodic table of chemical elements.',
      discoveryTitle: 'Discovery of the table',
      discoveryText: 'In 1869, while working on a book and teaching materials, Mendeleev realised that the properties of elements depend on their atomic mass. He arranged the elements into periods.',
      criteriaTitle: "Mendeleev's principles",
      criteria1: 'The properties of elements repeat periodically.',
      criteria2: 'He predicted the discovery of new elements (e.g. gallium, scandium).',
      criteria3: 'The table became the foundation of modern chemistry.',
      scientistsTitle: 'GREAT CHEMISTS',
      lavoisierBio: 'Father of modern chemistry. Discovered the law of conservation of mass and named oxygen. His research laid the foundations of inorganic chemistry.',
      boyleBio: 'The first scientist to give a modern definition of matter. Wrote "The Sceptical Chymist" and discovered Boyle\'s law.',
      curieBio: 'Two-time Nobel Prize winner. Discovered radium and polonium. First scientist to win Nobel Prizes in two fields.',
      paulingBio: 'Two-time Nobel Prize winner (chemistry and peace). Developed the theory of chemical bonding and campaigned for peace.',
      formulasTitle: 'IMPORTANT FORMULAS',
      footerInfo: 'All information is for educational purposes.'
    }
  };

  const quizQuestions = {
    tg: [
      { q: 'Рамзи химиявии об кадом аст?', o: ['H₂O', 'CO₂', 'O₂', 'NaCl'], c: 0 },
      { q: 'Рамзи оксиген (Oxygen) чӣ гуна аст?', o: ['O', 'O₂', 'O₃', 'OH'], c: 0 },
      { q: 'Рамзи гидроген (Hydrogen) чӣ гуна аст?', o: ['H', 'He', 'Hg', 'Ho'], c: 0 },
      { q: 'Рамзи оҳан (Iron) кадом аст?', o: ['Ir', 'Fe', 'In', 'I'], c: 1 },
      { q: 'Рамзи тилло (Gold) чӣ гуна аст?', o: ['Go', 'Gd', 'Au', 'Ag'], c: 2 },
      { q: 'Рамзи нуқра (Silver) чӣ гуна аст?', o: ['Si', 'Sl', 'Ag', 'Au'], c: 2 },
      { q: 'Рамзи мис (Copper) кадом аст?', o: ['Co', 'Cp', 'Cu', 'C'], c: 2 },
      { q: 'Рамзи карбон (Carbon) чӣ гуна аст?', o: ['Ca', 'C', 'Co', 'Cr'], c: 1 },
      { q: 'Рамзи нитроген (Nitrogen) чӣ гуна аст?', o: ['Ni', 'N', 'Ng', 'Na'], c: 1 },
      { q: 'Рамзи калсий (Calcium) кадом аст?', o: ['Ca', 'Cl', 'C', 'Ce'], c: 0 },
      { q: 'Кадом газ барои сӯхтан (сӯзиш) лозим аст?', o: ['Оксиген (O₂)', 'Нитроген (N₂)', 'Карбон (IV) оксид', 'Гидроген'], c: 0 },
      { q: 'Массаи атомии оксиген тақрибан чанд аст?', o: ['8', '16', '32', '12'], c: 1 },
      { q: 'Формулаи гази карбон (IV) оксид кадом аст?', o: ['CO', 'CO₂', 'C₂O', 'CH₄'], c: 1 },
      { q: 'Формулаи намаки ошӣ (намак) кадом аст?', o: ['KCl', 'NaCl', 'CaCl₂', 'Na₂CO₃'], c: 1 },
      { q: 'Кислотае, ки дар лимон мавҷуд аст?', o: ['Кислотаи лимон (C₆H₈O₇)', 'Кислотаи уксус', 'Кислотаи сулфат', 'Кислотаи хлорид'], c: 0 },
      { q: 'Ранги маҳлули сулфати мис (CuSO₄) чӣ гуна аст?', o: ['Сафед', 'Зард', 'Кабуд', 'Сурх'], c: 2 },
      { q: 'Кадом металл дар ҳарорати хонагӣ моеъ аст?', o: ['Оҳан', 'Симоб (Hg)', 'Алюминий', 'Мис'], c: 1 },
      { q: 'Газе, ки бештар дар ҳаво мавҷуд аст?', o: ['Оксиген', 'Нитроген', 'Карбон диоксид', 'Аргон'], c: 1 },
      { q: 'Элементи сабуктарин (камтарин масса) кадом аст?', o: ['Гелий', 'Гидроген', 'Литий', 'Углерод'], c: 1 },
      { q: 'Атоми кадом элемент дорои 6 протон аст?', o: ['Углерод (C)', 'Оксиген (O)', 'Нитроген (N)', 'Неон (Ne)'], c: 0 },
      { q: 'Шумораи электронҳо дар атоми оксиген (рақами атомӣ 8) дар ҳолати бетараф?', o: ['6', '8', '10', '16'], c: 1 },
      { q: 'Валентнокии гидроген дар аксар пайвастагиҳо чанд аст?', o: ['1', '2', '3', '4'], c: 0 },
      { q: 'Рамзи калий (Potassium) чӣ гуна аст?', o: ['P', 'K', 'Po', 'Ka'], c: 1 },
      { q: 'Рамзи натрий (Sodium) кадом аст?', o: ['S', 'So', 'Na', 'Nd'], c: 2 },
      { q: 'Формулаи химиявии гази оксиген кадом аст?', o: ['O', 'O₂', 'O₃', 'H₂O'], c: 1 }
    ],
    ru: [
      { q: 'Какой химический символ воды?', o: ['H₂O', 'CO₂', 'O₂', 'NaCl'], c: 0 },
      { q: 'Какой символ кислорода (Oxygen)?', o: ['O', 'O₂', 'O₃', 'OH'], c: 0 },
      { q: 'Какой символ водорода (Hydrogen)?', o: ['H', 'He', 'Hg', 'Ho'], c: 0 },
      { q: 'Какой символ железа (Iron)?', o: ['Ir', 'Fe', 'In', 'I'], c: 1 },
      { q: 'Какой символ золота (Gold)?', o: ['Go', 'Gd', 'Au', 'Ag'], c: 2 },
      { q: 'Какой символ серебра (Silver)?', o: ['Si', 'Sl', 'Ag', 'Au'], c: 2 },
      { q: 'Какой символ меди (Copper)?', o: ['Co', 'Cp', 'Cu', 'C'], c: 2 },
      { q: 'Какой символ углерода (Carbon)?', o: ['Ca', 'C', 'Co', 'Cr'], c: 1 },
      { q: 'Какой символ азота (Nitrogen)?', o: ['Ni', 'N', 'Ng', 'Na'], c: 1 },
      { q: 'Какой символ кальция (Calcium)?', o: ['Ca', 'Cl', 'C', 'Ce'], c: 0 },
      { q: 'Какой газ необходим для горения?', o: ['Кислород (O₂)', 'Азот (N₂)', 'Диоксид углерода', 'Водород'], c: 0 },
      { q: 'Приблизительная атомная масса кислорода?', o: ['8', '16', '32', '12'], c: 1 },
      { q: 'Формула диоксида углерода?', o: ['CO', 'CO₂', 'C₂O', 'CH₄'], c: 1 },
      { q: 'Формула поваренной соли?', o: ['KCl', 'NaCl', 'CaCl₂', 'Na₂CO₃'], c: 1 },
      { q: 'Какая кислота содержится в лимоне?', o: ['Лимонная кислота (C₆H₈O₇)', 'Уксусная кислота', 'Серная кислота', 'Соляная кислота'], c: 0 },
      { q: 'Какой цвет раствора сульфата меди (CuSO₄)?', o: ['Белый', 'Жёлтый', 'Синий', 'Красный'], c: 2 },
      { q: 'Какой металл жидкий при комнатной температуре?', o: ['Железо', 'Ртуть (Hg)', 'Алюминий', 'Медь'], c: 1 },
      { q: 'Какой газ преобладает в воздухе?', o: ['Кислород', 'Азот', 'Диоксид углерода', 'Аргон'], c: 1 },
      { q: 'Самый лёгкий элемент?', o: ['Гелий', 'Водород', 'Литий', 'Углерод'], c: 1 },
      { q: 'Атом какого элемента имеет 6 протонов?', o: ['Углерод (C)', 'Кислород (O)', 'Азот (N)', 'Неон (Ne)'], c: 0 },
      { q: 'Сколько электронов у нейтрального атома кислорода (Z=8)?', o: ['6', '8', '10', '16'], c: 1 },
      { q: 'Валентность водорода в большинстве соединений?', o: ['1', '2', '3', '4'], c: 0 },
      { q: 'Символ калия (Potassium)?', o: ['P', 'K', 'Po', 'Ka'], c: 1 },
      { q: 'Символ натрия (Sodium)?', o: ['S', 'So', 'Na', 'Nd'], c: 2 },
      { q: 'Химическая формула кислорода?', o: ['O', 'O₂', 'O₃', 'H₂O'], c: 1 }
    ],
    en: [
      { q: 'What is the chemical symbol for water?', o: ['H₂O', 'CO₂', 'O₂', 'NaCl'], c: 0 },
      { q: 'What is the symbol for oxygen?', o: ['O', 'O₂', 'O₃', 'OH'], c: 0 },
      { q: 'What is the symbol for hydrogen?', o: ['H', 'He', 'Hg', 'Ho'], c: 0 },
      { q: 'What is the symbol for iron?', o: ['Ir', 'Fe', 'In', 'I'], c: 1 },
      { q: 'What is the symbol for gold?', o: ['Go', 'Gd', 'Au', 'Ag'], c: 2 },
      { q: 'What is the symbol for silver?', o: ['Si', 'Sl', 'Ag', 'Au'], c: 2 },
      { q: 'What is the symbol for copper?', o: ['Co', 'Cp', 'Cu', 'C'], c: 2 },
      { q: 'What is the symbol for carbon?', o: ['Ca', 'C', 'Co', 'Cr'], c: 1 },
      { q: 'What is the symbol for nitrogen?', o: ['Ni', 'N', 'Ng', 'Na'], c: 1 },
      { q: 'What is the symbol for calcium?', o: ['Ca', 'Cl', 'C', 'Ce'], c: 0 },
      { q: 'Which gas is needed for combustion?', o: ['Oxygen (O₂)', 'Nitrogen (N₂)', 'Carbon dioxide', 'Hydrogen'], c: 0 },
      { q: 'Approximate atomic mass of oxygen?', o: ['8', '16', '32', '12'], c: 1 },
      { q: 'Formula of carbon dioxide?', o: ['CO', 'CO₂', 'C₂O', 'CH₄'], c: 1 },
      { q: 'Formula of table salt?', o: ['KCl', 'NaCl', 'CaCl₂', 'Na₂CO₃'], c: 1 },
      { q: 'Which acid is found in lemons?', o: ['Citric acid (C₆H₈O₇)', 'Acetic acid', 'Sulfuric acid', 'Hydrochloric acid'], c: 0 },
      { q: 'Colour of copper sulfate (CuSO₄) solution?', o: ['White', 'Yellow', 'Blue', 'Red'], c: 2 },
      { q: 'Which metal is liquid at room temperature?', o: ['Iron', 'Mercury (Hg)', 'Aluminium', 'Copper'], c: 1 },
      { q: 'Which gas is most abundant in air?', o: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Argon'], c: 1 },
      { q: 'Lightest element?', o: ['Helium', 'Hydrogen', 'Lithium', 'Carbon'], c: 1 },
      { q: 'Which element has 6 protons?', o: ['Carbon (C)', 'Oxygen (O)', 'Nitrogen (N)', 'Neon (Ne)'], c: 0 },
      { q: 'Number of electrons in neutral oxygen atom (Z=8)?', o: ['6', '8', '10', '16'], c: 1 },
      { q: 'Valency of hydrogen in most compounds?', o: ['1', '2', '3', '4'], c: 0 },
      { q: 'Symbol of potassium?', o: ['P', 'K', 'Po', 'Ka'], c: 1 },
      { q: 'Symbol of sodium?', o: ['S', 'So', 'Na', 'Nd'], c: 2 },
      { q: 'Chemical formula of oxygen gas?', o: ['O', 'O₂', 'O₃', 'H₂O'], c: 1 }
    ]
  };

  let currentLang = 'tg';

  function t(key, vars) {
    const dict = translations[currentLang] || translations.tg;
    let str = dict[key] || translations.tg[key] || key;
    if (vars) {
      Object.keys(vars).forEach(k => {
        str = str.replace(new RegExp('\\{' + k + '\\}', 'g'), vars[k]);
      });
    }
    return str;
  }

  function getQuizQuestions() {
    return quizQuestions[currentLang] || quizQuestions.tg;
  }

  function getElementData(symbol) {
    if (typeof elementsI18n === 'undefined') return null;
    const key = (symbol || '').toLowerCase();
    const langData = elementsI18n[currentLang] || elementsI18n.tg;
    return langData[key] || (elementsI18n.tg && elementsI18n.tg[key]) || null;
  }

  function setLanguage(lang) {
    if (!translations[lang]) lang = 'tg';
    currentLang = lang;
    try { localStorage.setItem('siteLang', lang); } catch (e) {}
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
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: lang } }));
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem('siteLang'); } catch (e) {}
    setLanguage((saved && translations[saved]) ? saved : 'tg');
  }

  function injectSwitcher() {
    if (document.getElementById('lang-switcher')) return;
    const style = document.createElement('style');
    style.textContent = `#lang-switcher{position:fixed;top:20px;right:20px;z-index:1000;display:flex;gap:6px;background:rgba(10,15,20,0.85);padding:6px 8px;border-radius:30px;border:1px solid #00ffcc55;backdrop-filter:blur(8px);box-shadow:0 4px 20px rgba(0,255,204,0.15)}.lang-btn{background:transparent;border:none;color:#aaa;font-size:0.85rem;font-weight:700;padding:6px 12px;border-radius:20px;cursor:pointer;transition:all 0.25s ease}.lang-btn:hover{color:#00ffcc;background:rgba(0,255,204,0.1)}.lang-btn.active{color:#000;background:linear-gradient(135deg,#00ffcc,#00ccaa);box-shadow:0 0 12px rgba(0,255,204,0.6)}@media(max-width:480px){#lang-switcher{top:10px;right:10px;padding:4px 6px}.lang-btn{font-size:0.75rem;padding:5px 9px}}`;
    document.head.appendChild(style);
    const switcher = document.createElement('div');
    switcher.id = 'lang-switcher';
    switcher.innerHTML = '<button class="lang-btn" data-lang="tg" title="Тоҷикӣ">🇹🇯 ТОҶ</button><button class="lang-btn" data-lang="ru" title="Русский">🇷🇺 РУС</button><button class="lang-btn" data-lang="en" title="English">🇬🇧 ENG</button>';
    document.body.appendChild(switcher);
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLanguage(btn.getAttribute('data-lang')));
    });
  }

  global.i18n = {
    t, setLanguage, initLanguage, injectSwitcher, getQuizQuestions, getElementData,
    get currentLang() { return currentLang; },
    translations
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => { injectSwitcher(); initLanguage(); });
  } else {
    injectSwitcher();
    initLanguage();
  }
})(typeof window !== 'undefined' ? window : this);
