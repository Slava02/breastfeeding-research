import { useState, useEffect } from 'react';

const SourcesSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('sources');
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

  // Filter data
  const filteredData = data.filter(source => {
    const gradeMatch = selectedGrade === 'all' || source.grade === selectedGrade;
    const typeMatch = selectedType === 'all' || source.type === selectedType;
    return gradeMatch && typeMatch;
  });

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'A': return '#10B981';
      case 'B': return '#F59E0B';
      case 'C': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getGradeDescription = (grade) => {
    switch (grade) {
      case 'A': return 'Наивысшая авторитетность';
      case 'B': return 'Хорошо, но менее строго';
      case 'C': return 'Источники, которых следует избегать';
      default: return '';
    }
  };

  const grades = ['all', 'A', 'B', 'C'];
  const types = ['all', ...Array.from(new Set(data.map(s => s.type)))];

  return (
    <div className="sources-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Авторитетные источники</h2>
          <p className="section-subtitle">
            Научные данные с оценкой качества и авторитетности источников
          </p>
        </div>

        {/* Filters */}
        <div className={`filters ${isVisible ? 'visible' : ''}`}>
          <div className="filter-group">
            <label>Оценка качества:</label>
            <div className="filter-buttons">
              {grades.map(grade => (
                <button
                  key={grade}
                  className={`filter-btn ${selectedGrade === grade ? 'active' : ''}`}
                  onClick={() => setSelectedGrade(grade)}
                >
                  {grade === 'all' ? 'Все' : `Grade ${grade}`}
                </button>
              ))}
            </div>
          </div>
          
          <div className="filter-group">
            <label>Тип источника:</label>
            <div className="filter-buttons">
              {types.map(type => (
                <button
                  key={type}
                  className={`filter-btn ${selectedType === type ? 'active' : ''}`}
                  onClick={() => setSelectedType(type)}
                >
                  {type === 'all' ? 'Все' : type}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grade Legend */}
        <div className={`grade-legend ${isVisible ? 'visible' : ''}`}>
          <div className="legend-items">
            {['A', 'B', 'C'].map(grade => (
              <div key={grade} className="legend-item">
                <span 
                  className={`legend-badge badge-${grade.toLowerCase()}`}
                  style={{ backgroundColor: `${getGradeColor(grade)}20`, color: getGradeColor(grade) }}
                >
                  Grade {grade}
                </span>
                <span className="legend-description">{getGradeDescription(grade)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sources Grid */}
        <div className="sources-grid">
          {filteredData.map((source, index) => (
            <div
              key={source.id}
              className={`source-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Card Header */}
              <div className="card-header">
                <div className="source-grade">
                  <span 
                    className={`badge badge-${source.grade.toLowerCase()}`}
                    style={{ backgroundColor: `${getGradeColor(source.grade)}20`, color: getGradeColor(source.grade) }}
                  >
                    Grade {source.grade}
                  </span>
                </div>
                
                <div className="source-year">{source.year}</div>
              </div>

              {/* Source Info */}
              <div className="source-info">
                <h3 className="source-title">{source.title}</h3>
                <p className="source-type">{source.type}</p>
                <p className="source-description">{source.description}</p>
              </div>

              {/* Authority Info */}
              <div className="authority-info">
                <div className="info-item">
                  <span className="info-label">Авторитет:</span>
                  <span className="info-value">{source.authority}</span>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Процесс:</span>
                  <span className="info-value">{source.process}</span>
                </div>
                
                <div className="info-item">
                  <span className="info-label">Применение:</span>
                  <span className="info-value">{source.usage}</span>
                </div>
              </div>

              {/* Key Points */}
              {source.keyPoints && source.keyPoints.length > 0 && (
                <div className="key-points">
                  <h4>Ключевые моменты:</h4>
                  <ul>
                    {source.keyPoints.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* External Link */}
              {source.url && source.url !== '#' && (
                <div className="source-link">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    Перейти к источнику
                    <span className="link-icon">↗</span>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Results Info */}
        <div className={`results-info ${isVisible ? 'visible' : ''}`}>
          <p>
            Показано {filteredData.length} из {data.length} источников
            {selectedGrade !== 'all' && ` (Grade ${selectedGrade})`}
            {selectedType !== 'all' && ` (${selectedType})`}
          </p>
        </div>

        {/* Summary */}
        <div className={`sources-summary ${isVisible ? 'visible' : ''}`}>
          <div className="summary-card">
            <h3>О методологии оценки источников</h3>
            <div className="methodology-grid">
              <div className="methodology-item">
                <h4>Grade A</h4>
                <p>
                  Международные организации (ВОЗ, AAP), крупномасштабные 
                  исследования с контролем конфаундеров, систематические 
                  обзоры и мета-анализы.
                </p>
              </div>
              
              <div className="methodology-item">
                <h4>Grade B</h4>
                <p>
                  Научно-популярные ресурсы с аккуратным цитированием, 
                  национальные программы, профессиональные консультанты 
                  с сертификацией.
                </p>
              </div>
              
              <div className="methodology-item">
                <h4>Grade C</h4>
                <p>
                  Популярные книги без научной основы, немедицинские сайты 
                  без цитирования, сообщения в социальных сетях.
                </p>
              </div>
            </div>
            
            <div className="disclaimer">
              <p>
                <strong>Важно:</strong> Все ключевые утверждения в этом исследовании 
                подкреплены источниками Grade A. Источники Grade B используются 
                для дополнительного контекста. Источники Grade C представлены 
                как примеры того, чего следует избегать.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .sources-section {
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

        .filters {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .filters.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .filter-group {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .filter-group label {
          font-weight: 500;
          color: var(--text-primary);
          font-size: 0.875rem;
        }

        .filter-buttons {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .filter-btn {
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .filter-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .filter-btn.active {
          background: var(--primary);
          color: white;
          border-color: var(--primary);
        }

        .grade-legend {
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .grade-legend.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .legend-items {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .legend-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .legend-description {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .sources-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .source-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .source-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .source-year {
          font-size: 0.75rem;
          color: var(--text-secondary);
          font-family: var(--font-mono);
        }

        .source-info {
          margin-bottom: 1.5rem;
        }

        .source-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
          line-height: 1.3;
        }

        .source-type {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        .source-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .authority-info {
          margin-bottom: 1.5rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          margin-bottom: 0.75rem;
        }

        .info-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .info-value {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .key-points {
          margin-bottom: 1.5rem;
        }

        .key-points h4 {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .key-points ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .key-points li {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.4;
        }

        .key-points li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .source-link {
          margin-top: 1rem;
        }

        .external-link {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          color: var(--primary);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .external-link:hover {
          color: #2563EB;
        }

        .link-icon {
          font-size: 0.75rem;
        }

        .results-info {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

        .results-info.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .sources-summary {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.8s;
        }

        .sources-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .summary-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .methodology-item {
          text-align: center;
        }

        .methodology-item h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .methodology-item p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .disclaimer {
          background: rgba(59, 130, 246, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          border-left: 4px solid var(--primary);
          text-align: center;
        }

        .disclaimer p {
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .disclaimer strong {
          color: var(--text-primary);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .sources-grid {
            grid-template-columns: 1fr;
          }

          .methodology-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .legend-items {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .filter-group {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.75rem;
          }

          .filter-buttons {
            width: 100%;
            justify-content: center;
          }

          .source-card {
            padding: 1.25rem;
          }

          .summary-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SourcesSection;