import { useState } from 'react';

const Navbar = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Главная' },
    { id: 'timeline', label: 'История' },
    { id: 'organizations', label: 'Рекомендации' },
    { id: 'science', label: 'Наука' },
    { id: 'faq', label: 'Вопросы' },
    { id: 'sources', label: 'Источники' },
    { id: 'conclusion', label: 'Заключение' }
  ];

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo" onClick={() => handleNavClick('home')}>
            <span className="logo-icon">🤱</span>
            <div className="logo-text">
              <span className="logo-title">Грудное вскармливание</span>
              <span className="logo-subtitle">По требованию или по расписанию?</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-nav desktop">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="navbar-nav mobile">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

const NavbarStyles = () => (
  <style jsx>{`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--border);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .navbar-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
    }

    .navbar-logo {
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }

    .navbar-logo:hover {
      opacity: 0.8;
    }

    .logo-icon {
      font-size: 2rem;
      margin-right: 0.75rem;
    }

    .logo-text {
      display: flex;
      flex-direction: column;
    }

    .logo-title {
      font-weight: 700;
      font-size: 1.125rem;
      color: var(--text-primary);
      line-height: 1.2;
    }

    .logo-subtitle {
      font-size: 0.75rem;
      color: var(--text-secondary);
      line-height: 1.2;
    }

    .navbar-nav.desktop {
      display: flex;
      gap: 0.5rem;
    }

    .nav-link {
      padding: 0.5rem 1rem;
      border: none;
      background: none;
      color: var(--text-secondary);
      font-size: 0.875rem;
      font-weight: 500;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: all 0.3s ease;
      position: relative;
    }

    .nav-link:hover {
      color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
    }

    .nav-link.active {
      color: var(--primary);
      background: rgba(59, 130, 246, 0.1);
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 4px;
      background: var(--primary);
      border-radius: 50%;
    }

    .mobile-menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      transition: background 0.3s ease;
    }

    .mobile-menu-toggle:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      width: 20px;
      height: 16px;
      justify-content: space-between;
    }

    .hamburger span {
      width: 100%;
      height: 2px;
      background: var(--text-primary);
      transition: all 0.3s ease;
      transform-origin: center;
    }

    .hamburger.open span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    .hamburger.open span:nth-child(2) {
      opacity: 0;
    }

    .hamburger.open span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .navbar-nav.mobile {
      display: none;
      flex-direction: column;
      gap: 0.25rem;
      padding: 1rem 0;
      border-top: 1px solid var(--border);
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      .navbar-nav.desktop {
        display: none;
      }

      .mobile-menu-toggle {
        display: block;
      }

      .navbar-nav.mobile {
        display: flex;
      }

      .nav-link {
        padding: 0.75rem 1rem;
        text-align: left;
        width: 100%;
      }

      .nav-link.active::after {
        display: none;
      }

      .logo-subtitle {
        display: none;
      }
    }
  `}</style>
);

const FullNavbar = (props) => (
  <>
    <Navbar {...props} />
    <NavbarStyles />
  </>
);

export default FullNavbar;