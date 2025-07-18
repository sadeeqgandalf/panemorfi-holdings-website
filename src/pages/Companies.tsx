import React from 'react';
import { Building, Calendar, Clock, ArrowRight } from 'lucide-react';

const Companies = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-400">Portfolio</span> Companies
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Discover the exceptional businesses we've acquired and the transformative journeys we've embarked on together.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Building Tomorrow's Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each acquisition represents a strategic opportunity to scale exceptional businesses and create lasting value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coming Soon Cards */}
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="bg-gray-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                    <Building className="h-10 w-10 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Portfolio Company #{index}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We're actively seeking exceptional B2B and industrial businesses to join our portfolio.
                  </p>
                  <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Criteria */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Look For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our acquisition criteria are designed to identify businesses with strong fundamentals and exceptional growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Business Characteristics</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Cash-flow positive with strong fundamentals</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">B2B and industrial focus</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Scalable business model</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Strong market position</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Investment Criteria</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">$50M+ target deal size</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Long-term value creation focus</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Operational improvement potential</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-1 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <span className="text-gray-700">Technology integration opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Growth Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track our journey as we build a portfolio of exceptional businesses.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="bg-white border-4 border-blue-600 rounded-full w-12 h-12 flex items-center justify-center relative z-10">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-slate-900 text-white rounded-lg p-6 inline-block">
                  <h3 className="text-xl font-semibold mb-2">2024 - Foundation</h3>
                  <p className="text-gray-300">Panemorfi Holdings established as Delaware C-Corp</p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="bg-white border-4 border-orange-400 rounded-full w-12 h-12 flex items-center justify-center relative z-10">
                  <Clock className="h-6 w-6 text-orange-400" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 text-orange-800 rounded-lg p-6 inline-block">
                  <h3 className="text-xl font-semibold mb-2">2025 - First Acquisitions</h3>
                  <p>Targeting initial portfolio company acquisitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Interested in Partnership?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Whether you're a business owner or investor, we'd love to explore opportunities for collaboration.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 inline-flex items-center space-x-2 transform hover:scale-105"
          >
            <span>Let's Connect</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Companies;