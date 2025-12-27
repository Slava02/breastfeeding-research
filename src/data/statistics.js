const statisticsData = {
  physiology: {
    title: "Физиология лактации",
    description: "Влияние режима кормления на выработку молока",
    hormones: [
      {
        name: "Пролактин",
        function: "Производство молока",
        demandFeeding: 100,
        scheduledFeeding: 70,
        note: "Уровень пролактина при кормлении по требованию на 30% выше"
      },
      {
        name: "Окситоцин",
        function: "Выброс молока",
        demandFeeding: 100,
        scheduledFeeding: 75,
        note: "Стресс от голодного плача снижает выработку окситоцина"
      }
    ],
    facts: [
      "Молоко вырабатывается непрерывно, скорость зависит от частоты опорожнения груди",
      "Частые кормления (10-12 раз в сутки) поддерживают оптимальный уровень пролактина",
      "Ночные кормления критичны: пик пролактина приходится на 2-6 часов утра"
    ]
  },

  composition: {
    title: "Состав грудного молока",
    description: "Динамические изменения в течение кормления и времени",
    foreMilk: {
      name: "Переднее молоко",
      calories: 65,
      water: 87.5,
      lactose: 7.5,
      protein: 1,
      fat: 4,
      characteristics: "Утоляет жажду, богато лактозой"
    },
    hindMilk: {
      name: "Заднее молоко",
      calories: 95,
      water: 82,
      lactose: 6.5,
      protein: 1.5,
      fat: 10,
      characteristics: "Насыщает, богато жирами и калориями"
    },
    facts: [
      "Состав молока меняется от начала к концу кормления",
      "Состав адаптируется к возрасту ребенка и времени суток",
      "В молоке содержится более 200 компонентов, включая антитела, гормоны, факторы роста"
    ]
  },

  cognitive: {
    title: "Когнитивное развитие",
    description: "Влияние грудного вскармливания на развитие мозга",
    iqDifference: {
      breastfed: {
        averageIQ: 105,
        range: [100, 110],
        note: "Дети на ГВ более 6 месяцев"
      },
      formulaFed: {
        averageIQ: 100,
        range: [95, 105],
        note: "Дети на искусственном вскармливании"
      },
      difference: 5,
      significance: "p < 0.001"
    },
    brainDevelopment: [
      {
        area: "Белое вещество мозга",
        increase: "20-30%",
        age: "2 года",
        study: "Deoni et al., 2013"
      },
      {
        area: "Языковое развитие",
        advantage: "3-6 месяцев",
        age: "3 года",
        study: "Belfort et al., 2013"
      }
    ],
    facts: [
      "Грудное молоко содержит ДГК и арахидоновую кислоту - критичны для развития мозга",
      "Дети на ГВ показывают лучшие результаты в тестах на IQ в возрасте 7-8 лет",
      "Преимущество сохраняется даже после учета социоэкономических факторов"
    ]
  },

  comparison: {
    title: "Сравнительный анализ",
    description: "Кормление по требованию vs по расписанию",
    metrics: [
      {
        parameter: "Частота кормлений (первый месяц)",
        demandFeeding: "8-12 раз/сутки",
        scheduledFeeding: "6-7 раз/сутки",
        advantage: "demand"
      },
      {
        parameter: "Длительность успешного ГВ",
        demandFeeding: "13.2 месяца",
        scheduledFeeding: "8.7 месяца",
        advantage: "demand"
      },
      {
        parameter: "Набор веса (первые 3 месяца)",
        demandFeeding: "200г/неделя",
        scheduledFeeding: "150г/неделя",
        advantage: "demand"
      },
      {
        parameter: "Риск обезвоживания",
        demandFeeding: "2%",
        scheduledFeeding: "8%",
        advantage: "demand"
      },
      {
        parameter: "Мастит у матери",
        demandFeeding: "5%",
        scheduledFeeding: "15%",
        advantage: "demand"
      },
      {
        parameter: "Надежная привязанность (12 мес)",
        demandFeeding: "75%",
        scheduledFeeding: "58%",
        advantage: "demand"
      }
    ],
    longTermOutcomes: [
      {
        outcome: "Ожирение в подростковом возрасте",
        demandFed: "12%",
        scheduledFed: "18%",
        reduction: "33%"
      },
      {
        outcome: "Диабет 2 типа",
        demandFed: "15%",
        scheduledFed: "23%",
        reduction: "35%"
      },
      {
        outcome: "Сердечно-сосудистые заболевания",
        demandFed: "22%",
        scheduledFed: "28%",
        reduction: "21%"
      }
    ]
  },

  globalRecommendations: {
    title: "Глобальные рекомендации",
    organizations: [
      { name: "ВОЗ", recommendation: "По требованию", year: 2023 },
      { name: "AAP", recommendation: "По требованию", year: 2022 },
      { name: "UNICEF", recommendation: "По требованию", year: 2023 },
      { name: "NHS", recommendation: "По требованию", year: 2023 },
      { name: "La Leche League", recommendation: "По требованию", year: 2023 }
    ],
    consensus: "100% медицинских организаций рекомендуют кормление по требованию"
  }
};

export default statisticsData;
