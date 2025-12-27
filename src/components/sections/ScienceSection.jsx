import { useState, useEffect } from 'react';

const ScienceSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('physiology');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('science');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        setIsVisible(isInView);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'physiology', label: 'Физиология лактации', icon: '🧬' },
    { id: 'composition', label: 'Состав молока', icon: '🥛' },
    { id: 'cognitive', label: 'Когнитивное развитие', icon: '🧠' },
    { id: 'comparison', label: 'Сравнительный анализ', icon: '⚖️' }
  ];

  // Гормональная регуляция
  const HormoneChart = () => (
    <div className="hormone-chart">
      <h4>Гормональная регуляция лактации</h4>
      <div className="hormone-bars">
        <div className="hormone-item">
          <div className="hormone-info">
            <span className="hormone-name">Пролактин</span>
            <span className="hormone-function">Производство молока</span>
          </div>
          <div className="hormone-bar">
            <div className="bar-fill demand" style={{ width: '100%' }}>
              <span className="bar-label">По требованию</span>
            </div>
          </div>
          <div className="hormone-bar">
            <div className="bar-fill scheduled" style={{ width: '70%' }}>
              <span className="bar-label">По расписанию</span>
            </div>
          </div>
        </div>
        
        <div className="hormone-item">
          <div className="hormone-info">
            <span className="hormone-name">Окситоцин</span>
            <span className="hormone-function">Выброс молока</span>
          </div>
          <div className="hormone-bar">
            <div className="bar-fill demand" style={{ width: '100%' }}>
              <span className="bar-label">По требованию</span>
            </div>
          </div>
          <div className="hormone-bar">
            <div className="bar-fill scheduled" style={{ width: '75%' }}>
              <span className="bar-label">По расписанию</span>
            </div>
          </div>
        </div>
      </div>
      <p className="chart-note">
        <strong>Ключевой вывод:</strong> Чем чаще сосёт младенец, тем больше вырабатывается пролактина, 
        гормона производства молока. При кормлении по графику (7 раз в сутки) лактация снижается на 20-30%.
      </p>
    </div>
  );

  // Состав молока
  const MilkCompositionChart = () => (
    <div className="composition-chart">
      <h4>Изменение состава молока во время кормления</h4>
      <div className="milk-types">
        <div className="milk-type fore">
          <div className="type-header">
            <h5>Переднее молоко</h5>
            <span className="calories">65 ккал/100мл</span>
          </div>
          <div className="composition-bars">
            <div className="comp-bar">
              <span className="comp-label">Вода</span>
              <div className="comp-fill" style={{ width: '87.5%', backgroundColor: '#3B82F6' }}>87.5%</div>
            </div>
            <div className="comp-bar">
              <span className="comp-label">Лактоза</span>
              <div className="comp-fill" style={{ width: '7.5%', backgroundColor: '#F59E0B' }}>7.5%</div>
            </div>
            <div className="comp-bar">
              <span className="comp-label">Белки</span>
              <div className="comp-fill" style={{ width: '1%', backgroundColor: '#10B981' }}>1%</div>
            </div>
            <div className="comp-bar">
              <span className="comp-label">Жиры</span>
              <div class="comp-fill" style={{ width: '4%', backgroundColor: '#EF4444' }}>4%</div>
            </div>
          </div>
          <p className="type-description">Водянистое, утоляет жажду, содержит лактозу и белки</p>
        </div>
        
        <div className="milk-type hind">
          <div className="type-header">
            <h5>Заднее молоко</h5>
            <span className="calories">110 ккал/100мл</span>
          </div>
          <div className="composition-bars">
            <div className="comp-bar">
              <span className="comp-label">Вода</span>
              <div className="comp-fill" style={{ width: '82.5%', backgroundColor: '#3B82F6' }}>82.5%</div>
            </div>
            <div className="comp-bar">
              <span className="comp-label">Лактоза</span>
              <div className="comp-fill" style={{ width: '7%', backgroundColor: '#F59E0B' }}>7%</div>
            </div>
            <div className="comp-bar">
              <span className="comp-label">Белки</span>
              <div className="comp-fill" style={{ width: '1.2%', backgroundColor: '#10B981' }}>1.2%</div>
            </div>
            <div className="comp-bar">
              <span className="comp-label">Жиры</span>
              <div className="comp-fill" style={{ width: '9.3%', backgroundColor: '#EF4444' }}>9.3%</div>
            </div>
          </div>
          <p className="type-description">Жирное, калорийное, обеспечивает насыщение и рост</p>
        </div>
      </div>
      
      <div className="composition-note">
        <span className="highlight">Жирность увеличивается в 2.3 раза!</span>
        <p>
          Проблема режимного кормления: младенец может получить только переднее молоко 
          и остаться голодным. При кормлении по требованию до насыщения младенец 
          получает оба типа молока.
        </p>
      </div>
    </div>
  );

  // Когнитивное развитие
  const CognitiveChart = () => (
    <div className="cognitive-chart">
      <h4>Влияние на когнитивное развитие (исследование 10,419 детей)</h4>
      
      <div className="iq-comparison">
        <div className="iq-group">
          <div className="iq-label">Кормление по требованию</div>
          <div className="iq-bar-container">
            <div className="iq-bar demand" style={{ width: '100%' }}>
              <span className="iq-value">100%</span>
            </div>
          </div>
          <div className="iq-note">Базовый уровень</div>
        </div>
        
        <div className="iq-group">
          <div className="iq-label">Кормление по графику</div>
          <div className="iq-bar-container">
            <div className="iq-bar scheduled" style={{ width: '95.5%' }}>
              <span className="iq-value">95.5%</span>
            </div>
          </div>
          <div className="iq-note">-4.5 пунктов IQ</div>
        </div>
      </div>
      
      <div className="academic-results">
        <h5>Академические тесты (разница в % стандартного отклонения)</h5>
        <div className="age-groups">
          <div className="age-group">
            <span className="age">5 лет</span>
            <div className="age-bar">
              <div className="difference" style={{ width: '17%' }}>17%</div>
            </div>
          </div>
          <div className="age-group">
            <span className="age">7 лет</span>
            <div className="age-bar">
              <div className="difference" style={{ width: '15%' }}>15%</div>
            </div>
          </div>
          <div className="age-group">
            <span className="age">11 лет</span>
            <div className="age-bar">
              <div className="difference" style={{ width: '13%' }}>13%</div>
            </div>
          </div>
          <div className="age-group">
            <span className="age">14 лет</span>
            <div className="age-bar">
              <div className="difference" style={{ width: '14%' }}>14%</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="study-info">
        <p>
          <strong>Источник:</strong> Iacovou & Sevilla (2012), European Journal of Public Health
        </p>
        <p>
          <strong>Методология:</strong> Проспективное когортное исследование 10,419 детей 
          с контролем множественных конфаундеров (вес при рождении, образование родителей, 
          социально-экономический статус и др.)
        </p>
        <p>
          <strong>Статистическая значимость:</strong> P {'<'} 0.001
        </p>
      </div>
    </div>
  );

  // Сравнительный анализ
  const ComparisonTable = () => (
    <div className="comparison-table">
      <h4>Сравнение подходов к кормлению</h4>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Аспект</th>
              <th>Кормление по требованию</th>
              <th>Кормление по расписанию</th>
              <th>Победитель</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="aspect">Физиология лактации</td>
              <td className="positive">Оптимальная стимуляция пролактина</td>
              <td className="negative">Снижение продукции молока на 20-30%</td>
              <td className="winner demand">По требованию</td>
            </tr>
            <tr>
              <td className="aspect">Психоэмоциональная связь</td>
              <td className="positive">Укрепление привязанности, доверия</td>
              <td className="negative">Риск формирования тревожности</td>
              <td className="winner demand">По требованию</td>
            </tr>
            <tr>
              <td className="aspect">Когнитивное развитие</td>
              <td className="positive">IQ на 4.5 пункта выше, лучшие академические результаты</td>
              <td className="negative">Снижение академической успеваемости</td>
              <td className="winner demand">По требованию</td>
            </tr>
            <tr>
              <td className="aspect">Сон матери (краткосрочный)</td>
              <td className="negative">Частые ночные пробуждения</td>
              <td className="positive">Более длительные периоды сна</td>
              <td className="winner scheduled">По расписанию</td>
            </tr>
            <tr>
              <td className="aspect">Сон матери (долгосрочный)</td>
              <td className="positive">К 6 неделям младенцы спят дольше</td>
              <td className="neutral">Искусственное растягивание интервалов</td>
              <td className="winner demand">По требованию</td>
            </tr>
            <tr>
              <td className="aspect">Практичность</td>
              <td className="positive">Не требует следить за часами</td>
              <td className="negative">Требует дисциплины, контроля времени</td>
              <td className="winner demand">По требованию</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="science-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Научное обоснование кормления по требованию</h2>
          <p className="section-subtitle">
            Физиология лактации, состав молока и долгосрочные эффекты на развитие младенца
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={`tab-navigation ${isVisible ? 'visible' : ''}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="tab-icon">{tab.icon}</span>
              <span className="tab-label">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === 'physiology' && <HormoneChart />}
          {activeTab === 'composition' && <MilkCompositionChart />}
          {activeTab === 'cognitive' && <CognitiveChart />}
          {activeTab === 'comparison' && <ComparisonTable />}
        </div>

        {/* Key Insights */}
        <div className={`key-insights ${isVisible ? 'visible' : ''}`}>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">🧬</div>
              <h4>Механизм спроса и предложения</h4>
              <p>
                Частое сосание стимулирует выработку пролактина, увеличивая 
                производство молока. Перерывы снижают лактацию.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">⏱️</div>
              <h4>Восстановление объема</h4>
              <p>
                Через 2 часа после кормления объём молока восстанавливается 
                на 70-75%, обеспечивая постоянную доступность питания.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">🧠</div>
              <h4>Долгосрочные эффекты</h4>
              <p>
                Дети, кормленные по требованию, демонстрируют более высокий 
                IQ и лучшие академические результаты в школьном возрасте.
              </p>
            </div>
            
            <div className="insight-card">
              <div className="insight-icon">🤱</div>
              <h4>Индивидуальность младенца</h4>
              <p>
                Все младенцы разные: размер, эффективность сосания, периоды 
                роста требуют гибкого подхода.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .science-section {
          padding: 4rem 0;
          background: var(--background);
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 700px;
          margin: 0 auto;
        }

        .tab-navigation {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .tab-navigation.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .tab-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .tab-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .tab-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .tab-icon {
          font-size: 1rem;
        }

        .tab-content {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          margin-bottom: 3rem;
        }

        .tab-content h4 {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        /* Hormone Chart Styles */
        .hormone-chart .hormone-bars {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 1.5rem;
        }

        .hormone-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hormone-info {
          flex: 0 0 150px;
        }

        .hormone-name {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .hormone-function {
          display: block;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .hormone-bar {
          flex: 1;
          height: 30px;
          background: var(--border);
          border-radius: 0.25rem;
          position: relative;
          overflow: hidden;
          margin-bottom: 0.5rem;
        }

        .bar-fill {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          transition: width 1s ease;
        }

        .bar-fill.demand {
          background: var(--secondary);
        }

        .bar-fill.scheduled {
          background: var(--danger);
        }

        .chart-note {
          background: rgba(59, 130, 246, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border-left: 4px solid var(--primary);
          font-size: 0.875rem;
          line-height: 1.6;
        }

        /* Milk Composition Styles */
        .composition-chart .milk-types {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .milk-type {
          background: var(--background);
          border-radius: 0.75rem;
          padding: 1.5rem;
          border: 1px solid var(--border);
        }

        .type-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .type-header h5 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .calories {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .composition-bars {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .comp-bar {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .comp-label {
          flex: 0 0 60px;
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .comp-fill {
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.75rem;
          font-weight: 500;
          border-radius: 0.25rem;
          transition: width 1s ease;
        }

        .type-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-top: 1rem;
          font-style: italic;
        }

        .composition-note {
          background: rgba(16, 185, 129, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border-left: 4px solid var(--secondary);
          text-align: center;
        }

        .highlight {
          display: block;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        /* Cognitive Chart Styles */
        .cognitive-chart .iq-comparison {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .iq-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .iq-label {
          flex: 0 0 200px;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .iq-bar-container {
          flex: 1;
          height: 40px;
          background: var(--border);
          border-radius: 0.25rem;
          position: relative;
          overflow: hidden;
        }

        .iq-bar {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          transition: width 1.5s ease;
        }

        .iq-bar.demand {
          background: var(--secondary);
        }

        .iq-bar.scheduled {
          background: var(--danger);
        }

        .iq-note {
          flex: 0 0 120px;
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-align: center;
        }

        .academic-results {
          margin-bottom: 2rem;
        }

        .academic-results h5 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1rem;
          text-align: center;
        }

        .age-groups {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .age-group {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .age {
          flex: 0 0 60px;
          font-weight: 500;
          color: var(--text-primary);
        }

        .age-bar {
          flex: 1;
          height: 24px;
          background: var(--border);
          border-radius: 0.25rem;
          overflow: hidden;
        }

        .difference {
          height: 100%;
          background: var(--danger);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 500;
          transition: width 1.5s ease;
        }

        .study-info {
          background: rgba(107, 114, 128, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Comparison Table Styles */
        .comparison-table .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.875rem;
        }

        th, td {
          padding: 1rem;
          text-align: left;
          border-bottom: 1px solid var(--border);
        }

        th {
          background: var(--background);
          font-weight: 600;
          color: var(--text-primary);
        }

        .aspect {
          font-weight: 500;
          color: var(--text-primary);
        }

        .positive {
          color: var(--secondary);
          background: rgba(16, 185, 129, 0.05);
        }

        .negative {
          color: var(--danger);
          background: rgba(239, 68, 68, 0.05);
        }

        .neutral {
          background: rgba(107, 114, 128, 0.05);
        }

        .winner {
          text-align: center;
          font-weight: 600;
        }

        .winner.demand {
          color: var(--secondary);
          background: rgba(16, 185, 129, 0.1);
        }

        .winner.scheduled {
          color: var(--danger);
          background: rgba(239, 68, 68, 0.1);
        }

        /* Key Insights */
        .key-insights {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

        .key-insights.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .insights-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .insight-card {
          background: white;
          border-radius: 0.75rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .insight-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .insight-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .insight-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .insight-card p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        @media (max-width: 1024px) {
          .insights-grid {
            grid-template-columns: 1fr;
          }

          .milk-types {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .tab-navigation {
            flex-direction: column;
            align-items: center;
          }

          .tab-btn {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }

          .tab-content {
            padding: 1.5rem;
          }

          .hormone-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .hormone-info {
            flex: none;
          }

          .iq-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .iq-label {
            flex: none;
          }

          .iq-note {
            flex: none;
            text-align: left;
          }

          table {
            font-size: 0.75rem;
          }

          th, td {
            padding: 0.75rem 0.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ScienceSection;