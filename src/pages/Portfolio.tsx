import React from 'react';
import { Building, Calendar, Clock, ArrowRight, Plus, TrendingUp, Target, ExternalLink, Users, DollarSign, BarChart3 } from 'lucide-react';
import { portfolioCompanies, acquisitionCriteria } from '../data/portfolio';
import SEO from '../components/SEO';
import { trackLeadEvent } from '../components/Analytics';

const Portfolio = () => {
  const activeCompanies = portfolioCompanies.filter(company => company.status === 'active');
  const comingSoonCompanies = portfolioCompanies.filter(company => company.status === 'coming-soon');

  const handleCompanyClick = (companyName: string) => {
    trackLeadEvent('portfolio_company_view', 3);
  };

  return (
    <div className="bg-slate-50">
      <SEO 
        title="Portfolio Companies - Panemorfi Holdings"
        description="Discover the exceptional B2B and industrial businesses we've acquired and transformed through strategic vision and operational excellence."
        keywords="portfolio companies, business acquisitions, B2B businesses, industrial companies, business transformation"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-medium mb-8">
              <Building className="h-4 w-4 mr-2" />
              Portfolio Companies
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              {activeCompanies.length > 0 ? 'Our Portfolio' : 'Companies We Acquire Will Be'}{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {activeCompanies.length > 0 ? 'Companies' : 'Shown Here'}
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              {activeCompanies.length > 0 
                ? 'Discover the exceptional businesses we\'ve acquired and the transformative journeys we\'ve embarked on together.'
                : 'Stay tuned as we build our portfolio of exceptional B2B and industrial businesses. Each acquisition represents a strategic opportunity to scale and create lasting value.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Active Portfolio Companies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCompanies.length > 0 ? (
            <>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Our Portfolio Companies
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Each acquisition represents a strategic opportunity to scale exceptional businesses and create lasting value through our proven methodology.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {activeCompanies.map((company) => (
                  <div
                    key={company.id}
                    className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
                    onClick={() => handleCompanyClick(company.name)}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{company.name}</h3>
                        <p className="text-blue-600 font-semibold">{company.industry}</p>
                        <p className="text-gray-500 text-sm">{company.location}</p>
                      </div>
                      {company.website && (
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-blue-600 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      )}
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{company.description}</p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-blue-50 rounded-xl">
                        <DollarSign className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-slate-900">{company.revenue}</div>
                        <div className="text-xs text-gray-600">Revenue</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-xl">
                        <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-slate-900">{company.employees}</div>
                        <div className="text-xs text-gray-600">Employees</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-xl">
                        <Calendar className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-slate-900">
                          {new Date(company.acquired).getFullYear()}
                        </div>
                        <div className="text-xs text-gray-600">Acquired</div>
                      </div>
                    </div>

                    {/* Performance Metrics */}
                    <div className="bg-slate-50 rounded-xl p-6 mb-6">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center">
                        <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                        Performance Since Acquisition
                      </h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600">{company.metrics.revenueGrowth}</div>
                          <div className="text-sm text-gray-600">Revenue Growth</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600">{company.metrics.efficiencyGain}</div>
                          <div className="text-sm text-gray-600">Efficiency Gain</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600">{company.metrics.employeeGrowth}</div>
                          <div className="text-sm text-gray-600">Team Growth</div>
                        </div>
                      </div>
                    </div>

                    {/* Case Study Preview */}
                    <div className="border-t border-gray-200 pt-6">
                      <h4 className="font-bold text-slate-900 mb-3">Transformation Story</h4>
                      <p className="text-gray-600 text-sm mb-3">
                        <strong>Challenge:</strong> {company.caseStudy.challenge}
                      </p>
                      <p className="text-gray-600 text-sm mb-4">
                        <strong>Solution:</strong> {company.caseStudy.solution}
                      </p>
                      <div className="space-y-2">
                        {company.caseStudy.results.map((result, index) => (
                          <div key={index} className="flex items-center space-x-2 text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Building Our Portfolio
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We're actively seeking exceptional B2B and industrial businesses to join our portfolio. Each acquisition will be showcased here as we build our collection of industry leaders.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Coming Soon Portfolio */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {activeCompanies.length > 0 ? 'Expanding Our Portfolio' : 'Future Portfolio Companies'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {activeCompanies.length > 0 
                ? 'We\'re actively seeking additional exceptional businesses to join our growing portfolio of industry leaders.'
                : 'These represent the types of exceptional businesses we\'re seeking to acquire and scale through our proven methodology.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonCompanies.map((company) => (
              <div
                key={company.id}
                className="group bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-dashed border-gray-300 hover:border-blue-400 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-center">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 group-hover:from-blue-100 group-hover:to-blue-200 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110">
                    <Plus className="h-10 w-10 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {company.description}
                  </p>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold inline-block border border-blue-200">
                    Coming Soon
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We're Looking For */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              What We're Looking For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our acquisition criteria are designed to identify businesses with strong fundamentals and exceptional growth potential.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-green-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Business Characteristics</h3>
              </div>
              <ul className="space-y-4">
                {[
                  ...acquisitionCriteria.requirements,
                  'Established customer base and recurring revenue',
                  'Quality management team and operational systems'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 rounded-full p-1 mt-1.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="bg-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900">Investment Criteria</h3>
              </div>
              <ul className="space-y-4">
                {[
                  `${acquisitionCriteria.revenueRange} annual revenue range`,
                  'Long-term value creation focus',
                  'Operational improvement potential',
                  'Technology integration opportunities',
                  'Experienced management willing to stay',
                  'Clear path to sustainable growth'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-1 mt-1.5 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Focus */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Industry Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We target specific industries where our expertise and technology can create the most value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {acquisitionCriteria.preferredIndustries.map((industry, index) => {
              const icons = [Building, TrendingUp, Users, Target];
              const Icon = icons[index % icons.length];
              const colors = ['blue', 'green', 'purple', 'orange'];
              const color = colors[index % colors.length];
              
              return (
                <div
                  key={industry}
                  className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className={`bg-${color}-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 text-${color}-600`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{industry}</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic opportunities for growth and optimization
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Growth Timeline
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Track our journey as we build a portfolio of exceptional businesses and create lasting value.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-16">
              {/* 2024 - Foundation */}
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-slate-900 text-white rounded-xl p-6 inline-block shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">2024 - Foundation</h3>
                    <p className="text-gray-300">Panemorfi Holdings established as Delaware C-Corp with strategic vision and technical expertise</p>
                  </div>
                </div>
                <div className="bg-white border-4 border-blue-600 rounded-full w-16 h-16 flex items-center justify-center relative z-10 shadow-lg">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>

              {/* 2025 - First Acquisitions */}
              <div className="flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="bg-white border-4 border-orange-500 rounded-full w-16 h-16 flex items-center justify-center relative z-10 shadow-lg">
                  <Clock className="h-8 w-8 text-orange-500" />
                </div>
                <div className="flex-1 text-left pl-8">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-6 inline-block shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">2025 - First Acquisitions</h3>
                    <p className="text-orange-100">Targeting initial portfolio company acquisitions and beginning our scaling journey</p>
                  </div>
                </div>
              </div>

              {/* Future Growth */}
              <div className="flex items-center">
                <div className="flex-1 text-right pr-8">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl p-6 inline-block shadow-lg">
                    <h3 className="text-2xl font-bold mb-2">2025+ - Scale & Expand</h3>
                    <p className="text-purple-100">Building a diversified portfolio of industry-leading businesses</p>
                  </div>
                </div>
                <div className="bg-white border-4 border-purple-600 rounded-full w-16 h-16 flex items-center justify-center relative z-10 shadow-lg">
                  <TrendingUp className="h-8 w-8 text-purple-600" />
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Interested in Partnership?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Whether you're a business owner looking for strategic partnership or an investor interested in our approach, we'd love to explore opportunities for collaboration.
          </p>
          <a
            href="/contact"
            className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 inline-flex items-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
          >
            <span>Let's Connect</span>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;