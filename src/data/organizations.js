const organizationsData = [
  {
    id: 1,
    name: "Всемирная организация здравоохранения (ВОЗ)",
    logo: "🏥",
    country: "Международная",
    established: "1948",
    recommendation: "Кормление по требованию",
    details: "Рекомендует исключительно грудное вскармливание в первые 6 месяцев жизни с кормлением по требованию дня и ночи.",
    sources: [
      "WHO (2023): Infant and young child feeding",
      "WHO (2021): Breastfeeding recommendations"
    ],
    credibility: "high",
    url: "https://www.who.int"
  },
  {
    id: 2,
    name: "American Academy of Pediatrics (AAP)",
    logo: "🇺🇸",
    country: "США",
    established: "1930",
    recommendation: "Кормление по требованию",
    details: "Рекомендует кормление по требованию для всех младенцев. Подчеркивает важность ночных кормлений для поддержания лактации.",
    sources: [
      "AAP (2022): Breastfeeding and the Use of Human Milk",
      "Eidelman A. et al. (2012): Policy Statement on Breastfeeding"
    ],
    credibility: "high",
    url: "https://www.aap.org"
  },
  {
    id: 3,
    name: "UNICEF",
    logo: "🌍",
    country: "Международная",
    established: "1946",
    recommendation: "Кормление по требованию",
    details: "Продвигает инициативу «Больница доброжелательного отношения к ребенку», где кормление по требованию - один из ключевых принципов.",
    sources: [
      "UNICEF (2023): Baby-Friendly Hospital Initiative",
      "UNICEF (2020): Breastfeeding: A Mother's Gift"
    ],
    credibility: "high",
    url: "https://www.unicef.org"
  },
  {
    id: 4,
    name: "La Leche League International",
    logo: "🤱",
    country: "Международная",
    established: "1956",
    recommendation: "Кормление по требованию",
    details: "Крупнейшая организация поддержки грудного вскармливания. Пропагандирует отзывчивое кормление как основу успешной лактации.",
    sources: [
      "LLLI (2023): The Womanly Art of Breastfeeding",
      "LLLI: Philosophy and guidelines"
    ],
    credibility: "high",
    url: "https://www.llli.org"
  },
  {
    id: 5,
    name: "Royal College of Midwives (UK)",
    logo: "🇬🇧",
    country: "Великобритания",
    established: "1881",
    recommendation: "Кормление по требованию",
    details: "Поддерживает кормление в ответ на сигналы младенца. Подчеркивает важность поддержки матерей в первые недели.",
    sources: [
      "RCM (2021): Infant Feeding Position Statement",
      "NHS (2023): Breastfeeding: the first few days"
    ],
    credibility: "high",
    url: "https://www.rcm.org.uk"
  },
  {
    id: 6,
    name: "Canadian Paediatric Society",
    logo: "🇨🇦",
    country: "Канада",
    established: "1922",
    recommendation: "Кормление по требованию",
    details: "Рекомендует частые кормления по сигналам голода для оптимального роста и развития младенцев.",
    sources: [
      "CPS (2021): Nutrition for healthy term infants",
      "CPS: Breastfeeding guidelines"
    ],
    credibility: "high",
    url: "https://www.cps.ca"
  }
];

export default organizationsData;
