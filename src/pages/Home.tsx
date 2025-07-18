import React from 'react';
import { ArrowRight, Building2, Target, Users, Shield, TrendingUp, Globe, Zap, BarChart3, Clock, Award, CheckCircle, Star, Rocket, Brain, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { trackLeadEvent } from '../components/Analytics';

const Home = () => {
  return (
    <div className="bg-slate-50">
      <SEO />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900"></div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-medium mb-8">
            <Building2 className="h-4 w-4 mr-2" />
            Delaware C-Corp • Global Acquisition Platform
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
            Building a New Era of{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Business Leadership
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed">
            We acquire and scale high-potential enterprises across global markets through data-driven precision and strategic transformation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/contact"
              className="group bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
              onClick={() => trackLeadEvent('hero_cta_click', 5)}
            >
              <span>Start Partnership</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="group border-2 border-white/40 text-white hover:bg-white hover:text-slate-900 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
            >
              <span>Learn More</span>
              <Building2 className="h-6 w-6" />
            </Link>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">47</div>
              <div className="text-white/80 text-sm">Global Markets</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">94.7%</div>
              <div className="text-white/80 text-sm">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">$50M+</div>
              <div className="text-white/80 text-sm">Target Deal Size</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-orange-400 mb-2">18-25%</div>
              <div className="text-white/80 text-sm">Target IRR</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Target className="h-4 w-4 mr-2" />
              Our Strategic Approach
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Three-Pillar Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Acquisition entrepreneurs, enterprise risk architects, and global project partners working in perfect harmony
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-200">
              <div className="bg-blue-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Acquisition Entrepreneurs</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Who identify and activate opportunities using real-time market intelligence across 47 global markets with 92.4% prediction accuracy.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">15-minute market data updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">1,247+ live opportunities tracked</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Advanced scenario modeling</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-green-200">
              <div className="bg-green-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Enterprise Risk Architects</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Who engineer stability through comprehensive risk assessment and 15,000+ scenario models with 45-day early warning systems.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Advanced risk modeling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">Predictive scenario planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">45-day early warning systems</span>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-10 text-center hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-purple-200">
              <div className="bg-purple-600 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Global Project Partners</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Who deliver seamless execution, powered by data-driven decisions at every phase of acquisition and scaling.
              </p>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Technology-driven scaling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">Operational optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700">International expansion</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Advantage */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Brain className="h-4 w-4 mr-2" />
              Technology-Driven Excellence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Competitive Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Proprietary technology platform providing unprecedented insight and control over the acquisition process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Real-Time Intelligence</h3>
              <p className="text-gray-600 text-sm leading-relaxed">15-minute market updates across 47 global markets with live opportunity scoring</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Predictive Analytics</h3>
              <p className="text-gray-600 text-sm leading-relaxed">92.4% prediction accuracy with 15,000+ scenario models for risk assessment</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Data Integration</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Comprehensive market analysis with automated probability calculations</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">Automated Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Streamlined processes with early warning systems and performance monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4">
              <Rocket className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <blockquote className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            "We don't guess. We know. And we grow."
          </blockquote>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            From sourcing to scaling, every move we make is backed by data — unlocking precision, foresight, and performance across global markets.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400 mb-2">Data-Driven</div>
              <p className="text-gray-300">Precision in every decision</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="text-3xl font-bold text-green-400 mb-2">Global</div>
              <p className="text-gray-300">Execution across 47 markets</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="text-3xl font-bold text-purple-400 mb-2">Exceptional</div>
              <p className="text-gray-300">Returns for all stakeholders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Award className="h-4 w-4 mr-2" />
              Why Partner With Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              The Panemorfi Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just investors - we're partners committed to building lasting value and preserving your legacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Valuations</h3>
              <p className="text-gray-600 leading-relaxed">
                Our data-driven approach identifies true value, often resulting in valuations 15-25% above market average.
              </p>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-green-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fast, Certain Closing</h3>
              <p className="text-gray-600 leading-relaxed">
                45-90 day average closing time with 94.7% deal completion rate. No financing contingencies.
              </p>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-purple-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Team Continuity</h3>
              <p className="text-gray-600 leading-relaxed">
                We retain and empower your existing team, preserving company culture and relationships.
              </p>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-orange-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Legacy Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Your company name, values, and mission remain intact while we accelerate growth.
              </p>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-red-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Growth Acceleration</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology integration and operational improvements drive measurable efficiency gains.
              </p>
            </div>

            <div className="group bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-teal-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Global Expansion</h3>
              <p className="text-gray-600 leading-relaxed">
                Access to international markets and strategic partnerships for sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Whether you're a business owner looking for strategic partnership or an investor interested in our approach, let's explore the possibilities together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="group bg-white text-blue-600 hover:bg-gray-100 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
                onClick={() => trackLeadEvent('bottom_cta_click', 8)}
              >
                <span>Start Conversation</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/investment-deck"
                className="group border-2 border-white/40 text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-2xl"
              >
                <span>View Investment Deck</span>
                <BarChart3 className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;