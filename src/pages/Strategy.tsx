import React from 'react';
import { Target, Users, Zap, TrendingUp, Brain, Shield, Cpu, Database } from 'lucide-react';

const Strategy = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-blue-400">Strategic</span> Approach
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We transform businesses through a proven methodology that combines strategic vision, operational excellence, and cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Core Strategy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Three-Pillar Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every acquisition follows our proven framework designed to unlock value and drive sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">1. Identify & Acquire</h3>
              <p className="text-gray-600 mb-6">
                We target cash-flow positive, scalable B2B and industrial businesses with strong fundamentals and growth potential.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Rigorous due diligence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Financial analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Market positioning</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">2. Empower Leadership</h3>
              <p className="text-gray-600 mb-6">
                We hire and empower exceptional operators to lead our portfolio companies with vision and expertise.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Strategic recruitment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Leadership development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Performance alignment</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">3. Scale with Technology</h3>
              <p className="text-gray-600 mb-6">
                We implement AI, cloud systems, and data analytics to drive operational efficiency and sustainable growth.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Process automation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Data-driven insights</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="text-sm text-gray-700">Scalable infrastructure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Technology-Driven Value Creation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our technical expertise enables us to implement cutting-edge solutions that drive operational excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Machine Learning</h3>
              <p className="text-sm text-gray-600">Predictive analytics and intelligent automation</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Cloud Architecture</h3>
              <p className="text-sm text-gray-600">Scalable, secure infrastructure solutions</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Analytics</h3>
              <p className="text-sm text-gray-600">Business intelligence and insights</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Process Automation</h3>
              <p className="text-sm text-gray-600">Streamlined operations and efficiency</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Creation Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Value Creation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach ensures consistent results across all portfolio companies.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-between bg-slate-50 rounded-xl p-8">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Initial Assessment</h3>
                  <p className="text-gray-600">Comprehensive analysis of business fundamentals and growth potential</p>
                </div>
              </div>
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>

            <div className="flex items-center justify-between bg-slate-50 rounded-xl p-8">
              <div className="flex items-center space-x-6">
                <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Strategic Planning</h3>
                  <p className="text-gray-600">Develop customized growth strategy and operational roadmap</p>
                </div>
              </div>
              <Target className="h-8 w-8 text-green-600" />
            </div>

            <div className="flex items-center justify-between bg-slate-50 rounded-xl p-8">
              <div className="flex items-center space-x-6">
                <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Implementation</h3>
                  <p className="text-gray-600">Execute technology integration and operational improvements</p>
                </div>
              </div>
              <Zap className="h-8 w-8 text-purple-600" />
            </div>

            <div className="flex items-center justify-between bg-slate-50 rounded-xl p-8">
              <div className="flex items-center space-x-6">
                <div className="bg-orange-600 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Scaling & Optimization</h3>
                  <p className="text-gray-600">Continuous improvement and sustainable growth acceleration</p>
                </div>
              </div>
              <Users className="h-8 w-8 text-orange-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Investment Philosophy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our approach focuses on sustainable value creation rather than short-term gains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Long-term Value Creation</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full w-2 h-2 mt-2"></div>
                  <span className="text-gray-300">Focus on sustainable growth over quick exits</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full w-2 h-2 mt-2"></div>
                  <span className="text-gray-300">Invest in operational excellence and capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full w-2 h-2 mt-2"></div>
                  <span className="text-gray-300">Build market-leading competitive advantages</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Data-Driven Decisions</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full w-2 h-2 mt-2"></div>
                  <span className="text-gray-300">Comprehensive market and financial analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full w-2 h-2 mt-2"></div>
                  <span className="text-gray-300">Predictive modeling and scenario planning</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-green-600 rounded-full w-2 h-2 mt-2"></div>
                  <span className="text-gray-300">Continuous performance monitoring and optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Strategy;