import { useState, useEffect } from 'react';

const OrganizationsSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('organizations');
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

  return (
    <div className="organizations-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Рекомендации международных организаций</h2>
          <p className="section-subtitle">
            Современный консенсус медицинского сообщества: кормление по требованию 
            как золотой стандарт
          </p>
        </div>

        <div className="organizations-grid">
          {data.map((org, index) => (
            <div
              key={org.id}
              className={`org-card ${selectedOrg === org.id ? 'selected' : ''} ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedOrg(selectedOrg === org.id ? null : org.id)}
            >
              {/* Card Header */}
              <div className="org-header">
                <div className="org-logo">
                  <span className="logo-icon">{org.logo}</span>
                  <div className="logo-badge">
                    <span className={`badge badge-${org.grade.toLowerCase()}`}>
                      Grade {org.grade}
                    </span>
                  </div>
                </div>
                
                <div className="org-info">
                  <h3 className="org-name">{org.name}</h3>
                  <p className="org-year">Обновлено: {org.year}</p>
                  <p className="org-description">{org.description}</p>
                </div>
              </div>

              {/* Recommendations */}
              <div className="org-recommendations">
                <h4>Ключевые рекомендации:</h4>
                <ul>
                  {org.recommendations.map((rec, idx) => (
                    <li key={idx}>
                      <span className="rec-icon">✓</span>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Initiatives */}
              {org.initiatives && org.initiatives.length > 0 && (
                <div className="org-initiatives">
                  <h4>Программы и инициативы:</h4>
                  <div className="initiatives-list">
                    {org.initiatives.map((initiative, idx) => (
                      <span key={idx} className="initiative-tag">
                        {initiative}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Expand Button */}
              <button className="expand-btn">
                {selectedOrg === org.id ? 'Свернуть' : 'Подробнее'}
                <span className={`expand-arrow ${selectedOrg === org.id ? 'open' : ''}`}>↓</span>
              </button>
            </div>
          ))}
        </div>

        {/* Consensus Panel */}
        <div className={`consensus-panel ${isVisible ? 'visible' : ''}`}>
          <div className="consensus-card">
            <div className="consensus-header">
              <span className="consensus-icon">🌍</span>
              <h3>Общий консенсус мирового медицинского сообщества</h3>
            </div>
            
            <div className="consensus-content">
              <blockquote className="consensus-quote">
                "Не существует авторитетной международной организации, которая рекомендовала бы 
                режимное кормление. Напротив, его классифицируют как опасный пережиток прошлого века."
              </blockquote>
              
              <div className="consensus-stats">
                <div className="stat">
                  <span className="stat-number">150+</span>
                  <span className="stat-label">Стран используют рекомендации ВОЗ</span>
                </div>
                <div className="stat">
                  <span className="stat-number">60,000+</span>
                  <span className="stat-label">Педиатров в AAP</span>
                </div>
                <div className="stat">
                  <span className="stat-number">190</span>
                  <span className="stat-label">Стран с программами ЮНИСЕФ</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .organizations-section {
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

        .organizations-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .org-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
          cursor: pointer;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .org-card:hover {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .org-card.selected {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
        }

        .org-header {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .org-logo {
          position: relative;
          flex-shrink: 0;
        }

        .logo-icon {
          font-size: 3rem;
          display: block;
        }

        .logo-badge {
          position: absolute;
          top: -0.5rem;
          right: -0.5rem;
        }

        .org-info {
          flex: 1;
        }

        .org-name {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.25rem;
        }

        .org-year {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
        }

        .org-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.5;
          margin: 0;
        }

        .org-recommendations {
          margin-bottom: 1.5rem;
        }

        .org-recommendations h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .org-recommendations ul {
          list-style: none;
          padding: 0;
        }

        .org-recommendations li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .rec-icon {
          color: var(--secondary);
          font-weight: bold;
          margin-top: 0.125rem;
          flex-shrink: 0;
        }

        .org-initiatives {
          margin-bottom: 1.5rem;
        }

        .org-initiatives h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .initiatives-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .initiative-tag {
          padding: 0.25rem 0.75rem;
          background: rgba(59, 130, 246, 0.1);
          color: var(--primary);
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
        }

        .expand-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.75rem;
          background: rgba(59, 130, 246, 0.05);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 0.5rem;
          color: var(--primary);
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .expand-btn:hover {
          background: rgba(59, 130, 246, 0.1);
        }

        .expand-arrow {
          transition: transform 0.3s ease;
        }

        .expand-arrow.open {
          transform: rotate(180deg);
        }

        .consensus-panel {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .consensus-panel.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .consensus-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2.5rem;
          text-align: center;
        }

        .consensus-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .consensus-icon {
          font-size: 2.5rem;
        }

        .consensus-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
        }

        .consensus-quote {
          font-size: 1.125rem;
          font-style: italic;
          margin-bottom: 2rem;
          padding: 0 2rem;
          line-height: 1.6;
          position: relative;
        }

        .consensus-quote::before,
        .consensus-quote::after {
          content: '"';
          font-size: 3rem;
          opacity: 0.3;
          position: absolute;
        }

        .consensus-quote::before {
          top: -1rem;
          left: 0;
        }

        .consensus-quote::after {
          bottom: -2rem;
          right: 0;
        }

        .consensus-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
        }

        .consensus-stats .stat {
          text-align: center;
        }

        .consensus-stats .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          font-family: var(--font-mono);
          line-height: 1;
        }

        .consensus-stats .stat-label {
          font-size: 0.875rem;
          opacity: 0.9;
          margin-top: 0.5rem;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 1024px) {
          .organizations-grid {
            grid-template-columns: 1fr;
          }

          .consensus-stats {
            flex-direction: column;
            gap: 1.5rem;
          }

          .consensus-quote {
            padding: 0;
          }

          .consensus-quote::before,
          .consensus-quote::after {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .org-header {
            flex-direction: column;
            text-align: center;
          }

          .logo-badge {
            position: static;
            margin-top: 0.5rem;
          }

          .expand-btn {
            padding: 1rem;
          }

          .consensus-card {
            padding: 2rem;
          }

          .consensus-header {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default OrganizationsSection;