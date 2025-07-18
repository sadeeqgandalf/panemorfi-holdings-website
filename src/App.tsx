import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Analytics, { initializeAnalytics } from './components/Analytics';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import InvestmentDeck from './pages/InvestmentDeck';
import LeadCapture from './components/LeadCapture';
import { useLeadCapture } from './hooks/useLeadCapture';
import { useEffect } from 'react';

function App() {
  const { showExitIntent, showTimeBase, showScrollBase, closePopup } = useLeadCapture();
  
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-slate-50">
          <ScrollToTop />
          <Analytics />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/investment-deck" element={<InvestmentDeck />} />
            </Routes>
          </main>
          <Footer />
          
          {/* Lead Capture Popups */}
          <LeadCapture 
            isOpen={showExitIntent} 
            onClose={closePopup} 
            type="exit-intent" 
          />
          <LeadCapture 
            isOpen={showTimeBase} 
            onClose={closePopup} 
            type="time-based" 
          />
          <LeadCapture 
            isOpen={showScrollBase} 
            onClose={closePopup} 
            type="scroll-based" 
          />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;