// App.jsx
import { useEffect } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import FloatingButtons from './components/FloatingButtons';
import ThemeToggle from './components/ThemeToggle';
import Fab from './components/Fab';
import './styles/indexStyles.css';

function App() {
  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.setAttribute('data-theme', 'light');
    }
    
    // Set up scroll event listener for navigation
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const navItems = document.querySelectorAll('.nav-item');
      
      let currentSection = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
          currentSection = section.getAttribute('id');
        }
      });
      
      navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').substring(1) === currentSection) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
        <div className="App">
		  <ThemeToggle />
		  <FloatingButtons />
		  <div className="flyer">
			<Header />
			<div className="content">
			  <Summary />
			  <Skills />
			  <Experience />
			  <Projects />
			  <Contact />
			</div>
		  </div>
		  <Navigation />
		  <Fab onClick={scrollToTop}/>
		</div>
    </>
  )
}

export default App
