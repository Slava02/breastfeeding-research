import { useState, useEffect } from 'react';

const ConclusionSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('conclusion');
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
    <div className="conclusion-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Заключение</h2>
          <p className="section-subtitle">
            Баланс между наукой и реальностью материнства
          </p>
        </div>

        {/* Main Conclusion */}
        <div className={`main-conclusion ${isVisible ? 'visible' : ''}`}>
          <div className="conclusion-card">
            <div className="conclusion-quote">
              <blockquote>
                <p>
                  Научные доказательства однозначно поддерживают кормление по требованию 
                  как оптимальный подход для здоровья младенца, развития лактации и 
                  долгосрочного когнитивного развития. Это соответствует физиологии 
                  человека, эволюционной истории нашего вида и современным данным.
                </p>
              </blockquote>
            </div>
            
            <div className="key-findings">
              <h3>Ключевые выводы исследования</h3>
              <div className="findings-grid">
                <div className="finding-item">
                  <div className="finding-icon">🧬</div>
                  <h4>Физиологически обосновано</h4>
                  <p>
                    Механизм спроса и предложения в лактации работает эффективно 
                    при кормлении по требованию, обеспечивая оптимальное производство молока.
                  </p>
                </div>
                
                <div className="finding-item">
                  <div className="finding-icon">🧠</div>
                  <h4>Долгосрочные преимущества</h4>
                  <p>
                    Дети, кормленные по требованию, демонстрируют более высокий 
                    IQ и лучшие академические результаты в долгосрочной перспективе.
                  </p>
                </div>
                
                <div className="finding-item">
                  <div className="finding-icon">🌍</div>
                  <h4>Мировой консенсус</h4>
                  <p>
                    Все авторитетные международные организации (ВОЗ, AAP, ЮНИСЕФ) 
                    рекомендуют кормление по требованию как золотой стандарт.
                  </p>
                </div>
                
                <div className="finding-item">
                  <div className="finding-icon">⚖️</div>
                  <h4>Необходима поддержка</h4>
                  <p>
                    Успешное кормление по требованию требует системной поддержки 
                    матерей со стороны партнеров, семьи и общества.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Practical Recommendations */}
        <div className={`practical-recommendations ${isVisible ? 'visible' : ''}`}>
          <h3>Практические рекомендации</h3>
          
          <div className="recommendations-grid">
            <div className="recommendation-card">
              <div className="card-header">
                <span className="card-icon">👶</span>
                <h4>Для матерей</h4>
              </div>
              <ul>
                <li>Доверяйте сигналам своего младенца</li>
                <li>Не следите за часами, следите за поведением ребенка</li>
                <li>Ищите поддержку в первые недели</li>
                <li>Используйте слинги для удобства</li>
                <li>Обсуждайте с партнером распределение обязанностей</li>
              </ul>
            </div>
            
            <div className="recommendation-card">
              <div className="card-header">
                <span className="card-icon">👨</span>
                <h4>Для партнеров</h4>
              </div>
              <ul>
                <li>Помогайте с домашними делами</li>
                <li>Кормите младенца сцеженным молоком 1-2 раза в ночь</li>
                <li>Обеспечьте матери возможность отдыха</li>
                <li>Будьте эмоционально поддержкой</li>
                <li>Изучите основы грудного вскармливания</li>
              </ul>
            </div>
            
            <div className="recommendation-card">
              <div className="card-header">
                <span className="card-icon">🏥</span>
                <h4>Для системы здравоохранения</h4>
              </div>
              <ul>
                <li>Внедряйте программу Baby-Friendly Hospital Initiative</li>
                <li>Обучайте персонал современным рекомендациям</li>
                <li>Обеспечьте доступ к консультантам по лактации</li>
                <li>Поддерживайте матерей после выписки</li>
                <li>Нормализуйте грудное вскармливание в обществе</li>
              </ul>
            </div>
            
            <div className="recommendation-card">
              <div className="card-header">
                <span className="card-icon">🏛️</span>
                <h4>Для государства</h4>
              </div>
              <ul>
                <li>Обеспечьте оплачиваемый отпуск минимум 6 месяцев</li>
                <li>Создайте программы поддержки матерей</li>
                <li>Инвестируйте в образование о грудном вскармливании</li>
                <li>Поддерживайте работающих матерей</li>
                <li>Развивайте службы консультации по лактации</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`call-to-action ${isVisible ? 'visible' : ''}`}>
          <div className="cta-card">
            <div className="cta-content">
              <h3>Сделаем выбор в пользу науки</h3>
              <p>
                Время оставить позади устаревшие практики и перейти к 
                научно обоснованному подходу, который поддерживает здоровье 
                матерей и младенцев, их долгосрочное развитие и благополучие.
              </p>
            </div>
            
            <div className="cta-actions">
              <button className="btn btn-primary cta-btn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Вернуться к началу
              </button>
              
              <a 
                href="/report.md" 
                download 
                className="btn btn-outline cta-btn"
              >
                Скачать полный отчет
              </a>
            </div>
          </div>
        </div>

        {/* Final Stats */}
        <div className={`final-stats ${isVisible ? 'visible' : ''}`}>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">75+</span>
              <span className="stat-label">Анализированных источников</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10,419</span>
              <span className="stat-label">Детей в крупнейшем исследовании</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.5</span>
              <span className="stat-label">Пунктов IQ разница</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Авторитетных организаций рекомендуют</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .conclusion-section {
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
          max-width: 600px;
          margin: 0 auto;
        }

        .main-conclusion {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .main-conclusion.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .conclusion-card {
          background: white;
          border-radius: 1rem;
          padding: 2.5rem;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border);
        }

        .conclusion-quote {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .conclusion-quote blockquote {
          margin: 0;
          padding: 0;
          font-size: 1.25rem;
          line-height: 1.6;
          color: var(--text-primary);
          font-style: italic;
          position: relative;
        }

        .conclusion-quote blockquote::before,
        .conclusion-quote blockquote::after {
          content: '"';
          font-size: 3rem;
          color: var(--primary);
          opacity: 0.3;
          position: absolute;
        }

        .conclusion-quote blockquote::before {
          top: -1rem;
          left: -1rem;
        }

        .conclusion-quote blockquote::after {
          bottom: -2rem;
          right: -1rem;
        }

        .conclusion-quote p {
          margin: 0;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .key-findings {
          text-align: center;
        }

        .key-findings h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 2rem;
        }

        .findings-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .finding-item {
          background: var(--background);
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .finding-item:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .finding-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          display: block;
        }

        .finding-item h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
        }

        .finding-item p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .practical-recommendations {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .practical-recommendations.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .practical-recommendations h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary);
          text-align: center;
          margin-bottom: 2rem;
        }

        .recommendations-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .recommendation-card {
          background: white;
          border-radius: 1rem;
          padding: 1.5rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          font-size: 1.5rem;
        }

        .recommendation-card h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .recommendation-card ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .recommendation-card li {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 0.5rem;
          padding-left: 1rem;
          position: relative;
          line-height: 1.5;
        }

        .recommendation-card li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--primary);
        }

        .call-to-action {
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.6s;
        }

        .call-to-action.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .cta-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2.5rem;
          text-align: center;
        }

        .cta-content {
          margin-bottom: 2rem;
        }

        .cta-content h3 {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .cta-content p {
          font-size: 1.125rem;
          line-height: 1.6;
          opacity: 0.95;
          margin: 0;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .cta-btn {
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 500;
        }

        .btn-primary.cta-btn {
          background: white;
          color: var(--primary);
        }

        .btn-primary.cta-btn:hover {
          background: var(--background);
        }

        .btn-outline.cta-btn {
          border-color: white;
          color: white;
        }

        .btn-outline.cta-btn:hover {
          background: white;
          color: var(--primary);
        }

        .final-stats {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.8s;
        }

        .final-stats.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 0.75rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-mono);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        @media (max-width: 1024px) {
          .findings-grid {
            grid-template-columns: 1fr;
          }

          .recommendations-grid {
            grid-template-columns: 1fr;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .conclusion-card {
            padding: 2rem;
          }

          .conclusion-quote blockquote {
            font-size: 1.125rem;
          }

          .conclusion-quote blockquote::before,
          .conclusion-quote blockquote::after {
            display: none;
          }

          .cta-card {
            padding: 2rem;
          }

          .cta-actions {
            flex-direction: column;
            align-items: center;
          }

          .cta-btn {
            width: 100%;
            max-width: 300px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ConclusionSection;