import { useState, useEffect } from 'react';

const FAQSection = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedItems, setExpandedItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('faq');
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

  const toggleItem = (id) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const expandAll = () => {
    setExpandedItems(data.map(item => item.id));
  };

  const collapseAll = () => {
    setExpandedItems([]);
  };

  return (
    <div className="faq-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">Популярные возражения и научные ответы</h2>
          <p className="section-subtitle">
            Развенчиваем мифы о кормлении по требованию с опорой на медицинские данные
          </p>
        </div>

        {/* Controls */}
        <div className={`faq-controls ${isVisible ? 'visible' : ''}`}>
          <button className="control-btn" onClick={expandAll}>
            Развернуть все
          </button>
          <button className="control-btn" onClick={collapseAll}>
            Свернуть все
          </button>
        </div>

        {/* FAQ Items */}
        <div className="faq-list">
          {data.map((item, index) => {
            const isExpanded = expandedItems.includes(item.id);
            return (
              <div
                key={item.id}
                className={`faq-item ${isExpanded ? 'expanded' : ''} ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Question */}
                <button
                  className="faq-question"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isExpanded}
                >
                  <div className="question-icon">
                    <span className="icon-myth">❓</span>
                  </div>
                  
                  <div className="question-content">
                    <h3 className="objection-title">{item.objection}</h3>
                    <p className="myth-text">{item.myth}</p>
                  </div>
                  
                  <div className="question-toggle">
                    <span className={`toggle-icon ${isExpanded ? 'open' : ''}`}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>
                </button>

                {/* Answer */}
                {isExpanded && (
                  <div className="faq-answer">
                    <div className="answer-header">
                      <span className="answer-icon">🔬</span>
                      <h4>Научный ответ</h4>
                    </div>
                    
                    <div className="answer-introduction">
                      <p>{item.scientificAnswer.introduction}</p>
                    </div>
                    
                    <div className="answer-points">
                      {item.scientificAnswer.points.map((point, idx) => (
                        <div key={idx} className="point-item">
                          <div className="point-number">{idx + 1}</div>
                          <div className="point-content">
                            <h5>{point.title}</h5>
                            <p>{point.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="answer-evidence">
                      <h5>Научные источники:</h5>
                      <ul>
                        {item.evidence.map((evidence, idx) => (
                          <li key={idx}>{evidence}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className={`faq-summary ${isVisible ? 'visible' : ''}`}>
          <div className="summary-card">
            <h3>Общий вывод</h3>
            <p>
              Все возражения против кормления по требованию либо основаны на устаревших 
              представлениях, либо игнорируют современные научные данные. Единственное 
              обоснованное опасение — это временное истощение матери в ранний период, 
              что требует системной поддержки, а не изменения режима кормления.
            </p>
            
            <div className="key-message">
              <span className="message-icon">💡</span>
              <p>
                <strong>Ключевое сообщение:</strong> Кормление по требованию — это 
                не только безопасно, но и оптимально для здоровья младенца, развития 
                лактации и долгосрочного когнитивного развития.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
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

        .faq-controls {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.2s;
        }

        .faq-controls.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .control-btn {
          padding: 0.5rem 1rem;
          background: white;
          border: 1px solid var(--border);
          border-radius: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .control-btn:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .faq-item {
          background: white;
          border-radius: 1rem;
          box-shadow: var(--shadow-sm);
          border: 1px solid var(--border);
          overflow: hidden;
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .faq-item:hover {
          box-shadow: var(--shadow-md);
        }

        .faq-item.expanded {
          box-shadow: var(--shadow-lg);
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          transition: background 0.3s ease;
        }

        .faq-question:hover {
          background: rgba(59, 130, 246, 0.02);
        }

        .question-icon {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          background: rgba(239, 68, 68, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .question-content {
          flex: 1;
        }

        .objection-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .myth-text {
          font-size: 0.875rem;
          color: var(--text-secondary);
          font-style: italic;
          margin: 0;
        }

        .question-toggle {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: var(--background);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-secondary);
          transition: all 0.3s ease;
        }

        .toggle-icon.open {
          transform: rotate(180deg);
          background: var(--primary);
          color: white;
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          border-top: 1px solid var(--border);
        }

        .answer-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
          padding-top: 1rem;
        }

        .answer-icon {
          font-size: 1.5rem;
        }

        .answer-header h4 {
          font-size: 1rem;
          font-weight: 600;
          color: var(--primary);
          margin: 0;
        }

        .answer-introduction {
          background: rgba(59, 130, 246, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border-left: 4px solid var(--primary);
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          line-height: 1.6;
        }

        .answer-points {
          margin-bottom: 1.5rem;
        }

        .point-item {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
          padding: 1rem;
          background: var(--background);
          border-radius: 0.5rem;
        }

        .point-number {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: var(--secondary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .point-content h5 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .point-content p {
          font-size: 0.875rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin: 0;
        }

        .answer-evidence {
          background: rgba(16, 185, 129, 0.05);
          padding: 1rem;
          border-radius: 0.5rem;
          border-left: 4px solid var(--secondary);
        }

        .answer-evidence h5 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.5rem;
        }

        .answer-evidence ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .answer-evidence li {
          font-size: 0.75rem;
          color: var(--text-secondary);
          margin-bottom: 0.25rem;
          padding-left: 1rem;
          position: relative;
        }

        .answer-evidence li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: var(--secondary);
        }

        .faq-summary {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 0.4s;
        }

        .faq-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
        }

        .summary-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .summary-card p {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.95;
          margin-bottom: 1.5rem;
        }

        .key-message {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 0.75rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          text-align: left;
        }

        .message-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .key-message p {
          margin: 0;
          font-size: 0.875rem;
          line-height: 1.6;
          font-weight: 500;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .faq-question {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .question-toggle {
            align-self: flex-end;
          }

          .point-item {
            flex-direction: column;
            gap: 0.5rem;
          }

          .key-message {
            flex-direction: column;
            text-align: center;
          }

          .faq-controls {
            flex-direction: column;
            align-items: center;
          }

          .control-btn {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default FAQSection;