import React from 'react';
import { ArrowLeft, Download, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const InvestmentDeck = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Investment Deck - Panemorfi Holdings"
        description="Comprehensive investment overview of Panemorfi Holdings' global acquisition strategy and opportunities for sophisticated investors."
        keywords="investment deck, business acquisition investment, private equity, global markets, IRR returns"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-100 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Panemorfi Holdings</h1>
            <p className="text-xl text-blue-100 mb-2">Investment Deck</p>
            <p className="text-blue-200">Building a New Era of Business Leadership</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Executive Summary */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-3 border-blue-500 pb-3">Executive Summary</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <p className="mb-4"><strong>Company:</strong> Panemorfi Holdings (Delaware C-Corp)</p>
              <p className="mb-4"><strong>Mission:</strong> Acquiring and scaling high-potential enterprises across global markets through data-driven precision</p>
              <p className="mb-6"><strong>Approach:</strong> Technology-driven acquisition platform with predictive analytics and real-time market intelligence</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-xl text-center border-2 border-blue-200">
                <div className="text-2xl font-bold text-blue-600">12-18%</div>
                <div className="text-sm text-gray-600">Target IRR</div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl text-center border-2 border-green-200">
                <div className="text-2xl font-bold text-green-600">85%+</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-purple-50 p-4 rounded-xl text-center border-2 border-purple-200">
                <div className="text-2xl font-bold text-purple-600">47</div>
                <div className="text-sm text-gray-600">Global Markets</div>
              </div>
              <div className="bg-orange-50 p-4 rounded-xl text-center border-2 border-orange-200">
                <div className="text-2xl font-bold text-orange-600">$50M+</div>
                <div className="text-sm text-gray-600">Target Deal Size</div>
              </div>
            </div>
          </div>
        </div>

        {/* Three-Pillar Strategy */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-3 border-blue-500 pb-3">Our Three-Pillar Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h4 className="text-xl font-bold text-blue-600 mb-4">1. Acquisition Entrepreneurs</h4>
              <p className="text-gray-700 mb-4">Identify and activate opportunities using real-time market intelligence across 47 global markets.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 15-minute market data updates</li>
                <li>• Live opportunity tracking</li>
                <li>• Advanced scenario modeling</li>
                <li>• Predictive analytics platform</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
              <h4 className="text-xl font-bold text-green-600 mb-4">2. Enterprise Risk Architects</h4>
              <p className="text-gray-700 mb-4">Engineer stability through comprehensive risk assessment and scenario models.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Advanced risk modeling</li>
                <li>• Predictive scenario planning</li>
                <li>• Early warning systems</li>
                <li>• Stability engineering</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
              <h4 className="text-xl font-bold text-purple-600 mb-4">3. Global Project Partners</h4>
              <p className="text-gray-700 mb-4">Deliver seamless execution powered by data-driven decisions and technology integration.</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Technology-driven scaling</li>
                <li>• Operational optimization</li>
                <li>• International expansion</li>
                <li>• Performance monitoring</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Criteria */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-3 border-blue-500 pb-3">Investment Criteria</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Target Businesses</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Revenue Range:</strong> $1M - $50M+ annual revenue</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Business Types:</strong> B2B Services, Industrial & Manufacturing, Scalable Technology</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Geographic Focus:</strong> Global opportunities with expansion potential</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <span><strong>Financial Health:</strong> Cash-flow positive with strong fundamentals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Key Requirements</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Established processes and operational systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Quality management teams willing to scale</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Technology integration opportunities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Clear path to international expansion</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span>Strong market position with competitive advantages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Financial Projections */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-3 border-blue-500 pb-3">Financial Projections</h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Year 1-2: Foundation Building</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Portfolio: 2-3 strategic acquisitions</li>
                <li>• Target Investment: $10-15M</li>
                <li>• Expected Returns: 12-15% IRR</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Year 3-5: Scale & Expansion</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Portfolio: 8-12 companies across multiple sectors</li>
                <li>• Target Investment: $50-75M</li>
                <li>• Expected Returns: 15-18% IRR</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-slate-900 mb-3">Year 5+: Market Leadership</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Portfolio: 15+ industry-leading companies</li>
                <li>• Global market presence established</li>
                <li>• Sustainable 18%+ IRR with reduced risk profile</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Investment Terms */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-6 border-b-3 border-blue-500 pb-3">Investment Terms</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-xl text-center border-2 border-blue-200">
              <div className="text-2xl font-bold text-blue-600">$1M</div>
              <div className="text-sm text-gray-600">Minimum Investment</div>
            </div>
            <div className="bg-green-50 p-6 rounded-xl text-center border-2 border-green-200">
              <div className="text-2xl font-bold text-green-600">3-7</div>
              <div className="text-sm text-gray-600">Years Horizon</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl text-center border-2 border-purple-200">
              <div className="text-2xl font-bold text-purple-600">Quarterly</div>
              <div className="text-sm text-gray-600">Reporting</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl text-center border-2 border-orange-200">
              <div className="text-2xl font-bold text-orange-600">Full</div>
              <div className="text-sm text-gray-600">Transparency</div>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 mb-4">What Investors Get</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Access to real-time analytics dashboard</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Quarterly performance reports with insights</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Direct communication with portfolio leadership</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Participation in strategic decision-making</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Priority access to co-investment opportunities</span>
            </li>
            <li className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <span>Comprehensive risk management protocols</span>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-center">Next Steps for Qualified Investors</h2>
          <p className="text-xl text-center mb-8 text-blue-100">Ready to explore partnership opportunities with our data-driven acquisition platform?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <h4 className="font-bold text-lg mb-2">Schedule Consultation</h4>
              <p className="text-blue-100 text-sm">Review investment objectives and discuss portfolio fit</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <h4 className="font-bold text-lg mb-2">Due Diligence Access</h4>
              <p className="text-blue-100 text-sm">Detailed financials and technology platform demonstration</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl text-center">
              <h4 className="font-bold text-lg mb-2">Investment Documentation</h4>
              <p className="text-blue-100 text-sm">Legal structure review and agreement execution</p>
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Contact Our Investment Team</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:investors@panemorfi.com" className="flex items-center space-x-2 text-blue-200 hover:text-white">
                <Mail className="h-5 w-5" />
                <span>investors@panemorfi.com</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center space-x-2 text-blue-200 hover:text-white">
                <Phone className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </a>
            </div>
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold transition-all duration-200 inline-flex items-center space-x-2"
              >
                <span>Schedule Meeting</span>
                <Download className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-xl mt-8">
          <h4 className="font-bold text-yellow-800 mb-2">Important Disclaimers</h4>
          <p className="text-yellow-700 text-sm">
            This investment deck contains forward-looking statements and projections. Past performance does not guarantee future results. 
            All investments carry risk of loss. This document is for qualified investors only and does not constitute a public offering. 
            Please consult with your financial advisor before making any investment decisions.
          </p>
          <p className="text-yellow-700 text-sm mt-2">
            <strong>Confidential and Proprietary</strong> © 2024 Panemorfi Holdings. All rights reserved.
          </p>
        </div>

        {/* Final Quote */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-slate-900 to-blue-900 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">"We don't guess. We know. And we grow."</h3>
          <p className="text-lg text-blue-200">Data-driven precision. Global execution. Exceptional returns.</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentDeck;