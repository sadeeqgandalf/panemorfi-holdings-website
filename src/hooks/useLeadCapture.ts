import { useState, useEffect } from 'react';

export const useLeadCapture = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);
  const [showTimeBase, setShowTimeBase] = useState(false);
  const [showScrollBase, setShowScrollBase] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let hasShownPopup = false;

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShownPopup) {
        setShowExitIntent(true);
        hasShownPopup = true;
      }
    };

    // Time-based popup (30 seconds)
    timeoutId = setTimeout(() => {
      if (!hasShownPopup) {
        setShowTimeBase(true);
        hasShownPopup = true;
      }
    }, 30000);

    // Scroll-based popup (70% of page)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 70 && !hasShownPopup) {
        setShowScrollBase(true);
        hasShownPopup = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const closePopup = () => {
    setShowExitIntent(false);
    setShowTimeBase(false);
    setShowScrollBase(false);
  };

  return {
    showExitIntent,
    showTimeBase,
    showScrollBase,
    closePopup
  };
};