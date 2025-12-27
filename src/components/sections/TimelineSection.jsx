import { useState, useEffect } from 'react';

const TimelineSection = ({ data }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('timeline');
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

  const getTypeColor = (type) => {
    switch (type) {
      case 'natural': return '#10B981';
      case 'scheduled': return '#EF4444';
      case 'scientific': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getTypeLabel = (type) => {
    switch (type) {
      case 'natural': return 'Естественный';
      case 'scheduled': return 'Режимный';
      case 'scientific': return 'Научный';
      default: return 'Неизвестно';
    }
  };

  return (
    <div className="timeline-section">
      <div className="container">
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">История развития подходов к кормлению</h2>
          <p className="section-subtitle">
            От естественного подхода к режимному кормлению и обратно к научной основе
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line">
            <div className="timeline-progress"></div>
          </div>
          
          {data.map((item, index) => {
            const isActive = activeItem === index;
            const position = (index / (data.length - 1)) * 100;
            
            return (
              <div
                key={item.id}
                className={`timeline-item ${isActive ? 'active' : ''} ${isVisible ? 'visible' : ''}`}
                style={{
                  '--position': `${position}%`,
                  '--type-color': getTypeColor(item.type),
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
              >
                {/* Timeline Dot */}
                <div className="timeline-dot">
                  <div className="dot-outer">
                    <div className="dot-inner">
                      <span className="dot-icon">{item.icon}</span>
                    </div>
                  </div>
                  <div className="dot-label">
                    <span className="period">{item.period}</span>
                    <span className="years">{item.years}</span>
                  </div>
                </div>

                {/* Timeline Content */}
                <div className="timeline-content">
                  <div className="content-card">
                    <div className="card-header">
                      <h3 className="card-title">{item.title}</h3>
                      <span 
                        className="type-badge"
                        style={{ backgroundColor: `${getTypeColor(item.type)}20`, color: getTypeColor(item.type) }}
                      >
                        {getTypeLabel(item.type)}
                      </span>
                    </div>
                    
                    <p className="card-description">{item.description}</p>
                    
                    <div className="card-points">
                      <h4>Ключевые моменты:</h4>
                      <ul>
                        {item.keyPoints.map((point, idx) => (
                          <li key={idx}>
                            <span className="point-icon">•</span>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className={`timeline-summary ${isVisible ? 'visible' : ''}`}>
          <div className="summary-card">
            <h3>Эволюция взглядов: полный круг</h3>
            <p>
              История кормления грудью демонстрирует полный круг эволюции: 
              от естественного подхода к искусственному режиму и возврат к 
              научно обоснованному естественному кормлению. Современные 
              рекомендации основаны на убедительных доказательствах пользы 
              кормления по требованию для физиологии лактации, здоровья 
              младенца и их когнитивного развития.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .timeline-section {
          padding: 4rem 0;
          position: relative;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
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

        .timeline-wrapper {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 4px;
          background: var(--border);
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .timeline-progress {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, var(--primary), var(--secondary));
          border-radius: 2px;
          transform: scaleY(0);
          transform-origin: top;
          animation: progressFill 2s ease-out forwards;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 4rem;
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.6s ease forwards;
        }

        .timeline-item:nth-child(even) .timeline-content {
          margin-left: auto;
          text-align: right;
        }

        .timeline-item:nth-child(even) .timeline-dot {
          left: auto;
          right: 50%;
          transform: translateX(50%);
        }

        .timeline-item:nth-child(even) .card-header {
          flex-direction: row-reverse;
        }

        .timeline-dot {
          position: absolute;
          left: 50%;
          top: 2rem;
          transform: translateX(-50%);
          z-index: 2;
        }

        .dot-outer {
          width: 60px;
          height: 60px;
          background: white;
          border: 4px solid var(--border);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .timeline-item:hover .dot-outer,
        .timeline-item.active .dot-outer {
          border-color: var(--type-color);
          box-shadow: 0 0 0 4px rgba(var(--type-color-rgb), 0.2);
        }

        .dot-inner {
          width: 40px;
          height: 40px;
          background: var(--type-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .dot-icon {
          font-size: 1.5rem;
        }

        .dot-label {
          position: absolute;
          top: 70px;
          left: 50%;
          transform: translateX(-50%);
          text-align: center;
          min-width: 200px;
        }

        .period {
          display: block;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.875rem;
          margin-bottom: 0.25rem;
        }

        .years {
          display: block;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: var(--font-mono);
        }

        .timeline-content {
          width: 45%;
          padding-top: 1rem;
        }

        .content-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .timeline-item:hover .content-card,
        .timeline-item.active .content-card {
          box-shadow: var(--shadow-lg);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: var(--text-primary);
          margin: 0;
        }

        .type-badge {
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-description {
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .card-points h4 {
          font-size: 0.875rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .card-points ul {
          list-style: none;
          padding: 0;
        }

        .card-points li {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .point-icon {
          color: var(--type-color);
          font-weight: bold;
          margin-top: 0.125rem;
        }

        .timeline-summary {
          margin-top: 4rem;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease 1s;
        }

        .timeline-summary.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .summary-card {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          color: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .summary-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .summary-card p {
          font-size: 1rem;
          line-height: 1.6;
          opacity: 0.95;
          margin: 0;
        }

        @keyframes progressFill {
          to {
            transform: scaleY(1);
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .timeline-line {
            left: 2rem;
          }

          .timeline-dot {
            left: 2rem !important;
            transform: translateX(-50%) !important;
          }

          .timeline-content {
            width: calc(100% - 5rem);
            margin-left: 5rem !important;
            margin-right: 0 !important;
            text-align: left !important;
          }

          .card-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .timeline-item {
            margin-bottom: 3rem;
          }

          .dot-label {
            position: static;
            transform: none !important;
            margin-top: 1rem;
            text-align: left;
          }

          .years {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </div>
  );
};

export default TimelineSection;