import { useState, useEffect } from 'react';
import './App.css';

// Data
import timelineData from './data/timeline';
import organizationsData from './data/organizations';
import faqData from './data/faq';
import sourcesData from './data/sources';
import statisticsData from './data/statistics';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import TimelineSection from './components/sections/TimelineSection';
import OrganizationsSection from './components/sections/OrganizationsSection';
import ScienceSection from './components/sections/ScienceSection';
import FAQSection from './components/sections/FAQSection';
import SourcesSection from './components/sections/SourcesSection';
import ConclusionSection from './components/sections/ConclusionSection';

// Scroll to top component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="App">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <section id="home">
          <HeroSection scrollToSection={scrollToSection} />
        </section>
        
        <section id="timeline">
          <TimelineSection data={timelineData} />
        </section>
        
        <section id="organizations">
          <OrganizationsSection data={organizationsData} />
        </section>
        
        <section id="science">
          <ScienceSection data={statisticsData} />
        </section>
        
        <section id="faq">
          <FAQSection data={faqData} />
        </section>
        
        <section id="sources">
          <SourcesSection data={sourcesData} />
        </section>
        
        <section id="conclusion">
          <ConclusionSection />
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;