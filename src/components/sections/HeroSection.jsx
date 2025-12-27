import { useState, useEffect } from 'react';

const HeroSection = ({ scrollToSection }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          {/* Hero Image/Icon */}
          <div className="hero-visual">
            <div className="hero-icon-wrapper">
              <span className="hero-icon">🤱</span>
              <div className="hero-icon-bg"></div>
            </div>
          </div>

          {/* Hero Text */}
          <div className="hero-text">
            <h1 className="hero-title">
              Кормление грудью младенца:
              <br />
              <span className="hero-subtitle-highlight">
                По требованию или по расписанию?
              </span>
            </h1>
            
            <p className="hero-description">
              Глубокое исследование научных данных о влиянии режима кормления 
              на здоровье младенцев, развитие лактации и когнитивные способности. 
              Анализ 75+ авторитетных источников, включая рекомендации ВОЗ, AAP 
              и крупномасштабные исследования.
            </p>

            {/* Key Stats */}
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">10,419</span>
                <span className="stat-label">детей в исследовании</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+4.5</span>
                <span className="stat-label">пунктов IQ разницы</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">75+</span>
                <span className="stat-label">научных источников</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button 
                className="btn btn-primary hero-cta-primary"
                onClick={() => scrollToSection('timeline')}
              >
                Исследовать данные
                <span className="cta-arrow">→</span>
              </button>
              
              <button 
                className="btn btn-outline hero-cta-secondary"
                onClick={() => scrollToSection('science')}
              >
                Научное обоснование
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel"></div>
          </div>
          <span className="scroll-text">Прокрутите вниз</span>
        </div>
      </div>

      {/* Background Elements */}
      <div className="hero-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 5rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-icon-wrapper {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-icon {
          font-size: 8rem;
          z-index: 2;
          position: relative;
          animation: float 3s ease-in-out infinite;
        }

        .hero-icon-bg {
          position: absolute;
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          border-radius: 50%;
          opacity: 0.1;
          animation: pulse 4s ease-in-out infinite;
        }

        .hero-text {
          z-index: 2;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-primary);
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .hero-subtitle-highlight {
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.125rem;
          color: var(--text-secondary);
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
          font-family: var(--font-mono);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.25rem;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-cta-primary {
          padding: 1rem 2rem;
          font-size: 1rem;
          position: relative;
          overflow: hidden;
        }

        .cta-arrow {
          margin-left: 0.5rem;
          transition: transform 0.3s ease;
        }

        .hero-cta-primary:hover .cta-arrow {
          transform: translateX(4px);
        }

        .hero-cta-secondary {
          padding: 1rem 2rem;
          font-size: 1rem;
        }

        .scroll-indicator {
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: bounce 2s infinite;
        }

        .scroll-mouse {
          width: 24px;
          height: 40px;
          border: 2px solid var(--text-secondary);
          border-radius: 12px;
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }

        .scroll-wheel {
          width: 4px;
          height: 8px;
          background: var(--primary);
          border-radius: 2px;
          animation: scroll 1.5s ease-in-out infinite;
        }

        .scroll-text {
          font-size: 0.75rem;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--secondary));
          opacity: 0.05;
        }

        .circle-1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -100px;
        }

        .circle-2 {
          width: 300px;
          height: 300px;
          bottom: 100px;
          left: -50px;
        }

        .circle-3 {
          width: 200px;
          height: 200px;
          top: 50%;
          right: 10%;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.15; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        @media (max-width: 1024px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }
          
          .hero-icon-wrapper {
            width: 200px;
            height: 200px;
          }
          
          .hero-icon {
            font-size: 5rem;
          }
          
          .hero-icon-bg {
            width: 180px;
            height: 180px;
          }
          
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-stats {
            justify-content: center;
          }
          
          .hero-actions {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2rem;
          }
          
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }
          
          .hero-actions {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-cta-primary,
          .hero-cta-secondary {
            width: 100%;
            max-width: 300px;
          }
          
          .scroll-indicator {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;