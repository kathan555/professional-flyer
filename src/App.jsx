// App.jsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import Play from './components/pages/Play';
import Calculate from './components/pages/Calculate';
import ContactUs from './components/pages/ContactUs';
import './styles/indexStyles.css';

function App() {
  useEffect(() => {
    // Initialize theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.setAttribute('data-theme', 'light');
    }
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const HomePage = () => (
    <div className="flyer">
      <Header title="KATHAN N. PATEL" description="Technical Lead | Full-Stack .NET Developer" />
      <div className="content">
        <Summary />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );

  return (
    <Router>
      <div className="App">
        <ThemeToggle />
        <FloatingButtons />
        <Routes>
          {/* Redirect root path to home */}
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/play" element={<Play />} />
          <Route path="/calculate" element={<Calculate />} />
          <Route path="/contactus" element={<ContactUs />} />
          {/* Catch all route - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Navigation />
        <Fab onClick={scrollToTop}/>
      </div>
    </Router>
  );
}

export default App;