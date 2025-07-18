import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 Integration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const initializeAnalytics = () => {
  // Google Analytics 4 - Replace with your actual GA4 Measurement ID
  const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
  
  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href,
  });
};

// Track page views
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location]);
};

// Track events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (window.gtag) {
    window.gtag('event', eventName, {
      event_category: 'engagement',
      event_label: eventName,
      ...parameters,
    });
  }
};

// Lead scoring events
export const trackLeadEvent = (action: string, value?: number) => {
  trackEvent('lead_action', {
    action,
    value: value || 1,
    timestamp: new Date().toISOString(),
  });
};

// Conversion tracking
export const trackConversion = (type: 'contact_form' | 'chat_engagement' | 'calendar_booking') => {
  trackEvent('conversion', {
    conversion_type: type,
    timestamp: new Date().toISOString(),
  });
};

const Analytics = () => {
  usePageTracking();
  return null;
};

export default Analytics;