const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Main Footer Section */}
          <div className="footer-main">
            <div className="footer-brand">
              <span className="brand-icon">🤱</span>
              <div className="brand-text">
                <h3>Исследование грудного вскармливания</h3>
                <p>Научный анализ подходов к кормлению младенцев</p>
              </div>
            </div>
            
            <div className="footer-links">
              <div className="link-group">
                <h4>Разделы</h4>
                <ul>
                  <li><a href="#timeline">История</a></li>
                  <li><a href="#organizations">Рекомендации</a></li>
                  <li><a href="#science">Научное обоснование</a></li>
                  <li><a href="#faq">Вопросы и ответы</a></li>
                  <li><a href="#sources">Источники</a></li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Ключевые организации</h4>
                <ul>
                  <li>
                    <a href="https://www.who.int" target="_blank" rel="noopener noreferrer">
                      Всемирная организация здравоохранения
                    </a>
                  </li>
                  <li>
                    <a href="https://www.aap.org" target="_blank" rel="noopener noreferrer">
                      Американская академия педиатрии
                    </a>
                  </li>
                  <li>
                    <a href="https://www.unicef.org" target="_blank" rel="noopener noreferrer">
                      Детский фонд ООН
                    </a>
                  </li>
                </ul>
              </div>
              
              <div className="link-group">
                <h4>Научные источники</h4>
                <ul>
                  <li>
                    <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3553587/" target="_blank" rel="noopener noreferrer">
                      Iacovou & Sevilla (2012)
                    </a>
                  </li>
                  <li>
                    <a href="https://www.thelancet.com" target="_blank" rel="noopener noreferrer">
                      The Lancet Breastfeeding Series
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cochranelibrary.com" target="_blank" rel="noopener noreferrer">
                      Cochrane Reviews
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="footer-bottom">
            <div className="footer-info">
              <p>&copy; 2023 Исследование грудного вскармливания. На основе научных данных.</p>
              <p className="footer-disclaimer">
                Информация представлена для образовательных целей. Консультируйтесь с квалифицированными специалистами.
              </p>
            </div>
            
            <div className="footer-stats">
              <div className="stat">
                <span className="stat-value">75+</span>
                <span className="stat-label">Источников</span>
              </div>
              <div className="stat">
                <span className="stat-value">10,419</span>
                <span className="stat-label">Детей в исследовании</span>
              </div>
              <div className="stat">
                <span className="stat-value">4.5</span>
                <span className="stat-label">Пунктов IQ разницы</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .footer {
          background: var(--surface);
          border-top: 1px solid var(--border);
          padding: 3rem 0 2rem;
          margin-top: 4rem;
        }
        
        .footer-main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }
        
        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }
        
        .brand-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }
        
        .brand-text h3 {
          color: var(--text-primary);
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        
        .brand-text p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0;
        }
        
        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        
        .link-group h4 {
          color: var(--text-primary);
          font-size: 1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .link-group ul {
          list-style: none;
        }
        
        .link-group li {
          margin-bottom: 0.5rem;
        }
        
        .link-group a {
          color: var(--text-secondary);
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.3s ease;
        }
        
        .link-group a:hover {
          color: var(--primary);
        }
        
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding-top: 2rem;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 2rem;
          align-items: center;
        }
        
        .footer-info p {
          color: var(--text-secondary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }
        
        .footer-disclaimer {
          font-style: italic;
          opacity: 0.8;
        }
        
        .footer-stats {
          display: flex;
          gap: 2rem;
        }
        
        .stat {
          text-align: center;
        }
        
        .stat-value {
          display: block;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-mono);
        }
        
        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .footer-links {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 768px) {
          .footer-links {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .footer-stats {
            justify-content: center;
            gap: 1rem;
          }
          
          .stat {
            padding: 0 0.5rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;