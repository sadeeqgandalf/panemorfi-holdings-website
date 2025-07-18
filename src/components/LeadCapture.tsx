import React, { useState } from 'react';
import { X, Download, Calendar, Mail } from 'lucide-react';
import { trackLeadEvent, trackConversion } from './Analytics';

interface LeadCaptureProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'exit-intent' | 'time-based' | 'scroll-based';
}

const LeadCapture: React.FC<LeadCaptureProps> = ({ isOpen, onClose, type }) => {
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track lead capture
      trackLeadEvent('email_capture', 5);
      trackConversion('contact_form');

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Thank you! We\'ll send you the information shortly.');
      onClose();
      setEmail('');
      setInterest('');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 relative animate-slide-up shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="text-center mb-6">
          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Download className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">
            Get Your Acquisition Guide
          </h3>
          <p className="text-gray-600">
            Download our comprehensive guide to business acquisitions and strategic partnerships.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            >
              <option value="">I'm interested in...</option>
              <option value="selling">Selling my business</option>
              <option value="investing">Investment opportunities</option>
              <option value="partnership">Strategic partnership</option>
              <option value="learning">Learning about acquisitions</option>
            </select>
          </div>

          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your professional email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !interest}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                <Download className="h-5 w-5" />
                <span>Get Free Guide</span>
              </>
            )}
          </button>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>Instant delivery</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadCapture;