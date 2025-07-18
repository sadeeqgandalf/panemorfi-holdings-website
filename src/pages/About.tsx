import React from 'react';
import { GraduationCap, Brain, Cloud, Scale, Award, Users, Code, Target, Lightbulb, Rocket, BarChart3, Clock, DollarSign, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-medium mb-8">
              <Brain className="h-4 w-4 mr-2" />
              Tech-Driven Leadership
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Where <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Technology</span> Meets Acquisition
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Founded on the principle that exceptional businesses deserve exceptional leadership, Panemorfi Holdings combines deep technical expertise with strategic acquisition acumen to create lasting value.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <Rocket className="h-4 w-4 mr-2" />
                Founder's Journey
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Engineering Excellence Meets Business Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our founder brings a unique combination of technical expertise, business acumen, and strategic vision to every acquisition. With a foundation in civil engineering and advanced education in business management, our approach is both analytical and visionary.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                This rare blend of technical depth and business strategy enables us to see opportunities others miss and implement solutions that drive sustainable growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <div className="bg-blue-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Academic Foundation</h3>
                  <p className="text-gray-700 text-sm">Civil Engineering + MBA in Project Management & Law (UK)</p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <div className="bg-green-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">AI Expertise</h3>
                  <p className="text-gray-700 text-sm">Machine Learning Specialist with advanced implementation experience</p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                  <div className="bg-purple-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Cloud className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Infra Visionary</h3>
                  <p className="text-gray-700 text-sm">Certified Cloud Architect with scalable system design expertise</p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                  <div className="bg-orange-600 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">Systems Thinking</h3>
                  <p className="text-gray-700 text-sm">Data-driven approach to business optimization and scaling</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-slate-100 to-blue-50 rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl"></div>
                
                <div className="relative bg-white rounded-2xl shadow-xl p-8 text-center">
                  <div className="bg-blue-600 rounded-lg w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                    <Target className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Philosophy</h3>
                  <blockquote className="text-gray-600 italic text-lg leading-relaxed mb-6">
                    "Experience our data-driven approach firsthand with exclusive access to live market intelligence"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-2 text-blue-600 mb-6">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <div className="space-y-4">
                    <Link
                      to="/contact"
                      className="block bg-blue-600 text-white hover:bg-blue-700 px-8 py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105"
                    >
                      Schedule Data Demo
                    </Link>
                    <Link
                      to="/contact"
                      className="block border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                    >
                      <span>View Live Dashboard</span>
                      <BarChart3 className="h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These principles guide every decision we make and every relationship we build
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We pursue excellence in every aspect of our work, from rigorous due diligence to innovative operational implementation. Mediocrity is not an option.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Integrity</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent communication and ethical practices form the foundation of all our business relationships. Trust is earned through consistent action.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We leverage cutting-edge technology and innovative thinking to solve complex business challenges and unlock new growth opportunities.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Empowerment</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in empowering exceptional operators with the resources, autonomy, and support they need to achieve extraordinary results.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Focus</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain laser focus on long-term value creation, avoiding distractions and short-term thinking that can derail sustainable growth.
              </p>
            </div>

            <div className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                We see potential where others see problems, identifying opportunities to transform good businesses into industry leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the experienced professionals behind our data-driven acquisition strategy
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-blue-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Users className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Founder & CEO</h3>
              <p className="text-blue-600 font-semibold mb-4">Chief Executive Officer</p>
              <div className="text-left space-y-2 text-gray-700">
                <p>• Civil Engineering Foundation</p>
                <p>• MBA in Project Management & Law (UK)</p>
                <p>• Machine Learning Specialist</p>
                <p>• Certified Cloud Architect</p>
                <p>• 15+ Years Business Optimization</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-green-50 rounded-2xl p-8 text-center">
              <div className="bg-green-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Advisory Board</h3>
              <p className="text-green-600 font-semibold mb-4">Strategic Advisors</p>
              <div className="text-left space-y-2 text-gray-700">
                <p>• Former Fortune 500 Executives</p>
                <p>• M&A Transaction Specialists</p>
                <p>• International Business Leaders</p>
                <p>• Technology Integration Experts</p>
                <p>• $2B+ Combined Deal Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell to Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Why Business Owners Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're not just buyers - we're partners committed to preserving your legacy while accelerating growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Premium Valuations</h3>
              <p className="text-gray-600 leading-relaxed">
                Our data-driven approach identifies true value, often resulting in valuations 15-25% above market average.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-green-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Fast, Certain Closing</h3>
              <p className="text-gray-600 leading-relaxed">
                45-90 day average closing time with 94.7% deal completion rate. No financing contingencies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-purple-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Team Continuity</h3>
              <p className="text-gray-600 leading-relaxed">
                We retain and empower your existing team, preserving company culture and relationships.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-orange-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Legacy Protection</h3>
              <p className="text-gray-600 leading-relaxed">
                Your company name, values, and mission remain intact while we accelerate growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-red-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Growth Acceleration</h3>
              <p className="text-gray-600 leading-relaxed">
                Technology integration and operational improvements drive measurable efficiency gains and market expansion.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="bg-teal-600 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Transparent Process</h3>
              <p className="text-gray-600 leading-relaxed">
                Clear communication, fair terms, and no hidden fees. What we promise, we deliver.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Our Mission at Panemorfi Holdings
            </h2>
            <p className="text-2xl text-blue-400 leading-relaxed mb-12 font-semibold">
              To build a new era of business leadership by acquiring and scaling high-potential enterprises across global markets.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Acquisition Entrepreneurs</h3>
                <p className="text-gray-300 leading-relaxed">
                  Who identify and activate opportunities using real-time market intelligence and predictive analytics.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-green-400 mb-4">Enterprise Risk Architects</h3>
                <p className="text-gray-300 leading-relaxed">
                  Who engineer stability through predictive analytics and advanced scenario planning.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Global Project Partners</h3>
                <p className="text-gray-300 leading-relaxed">
                  Who deliver seamless execution, powered by data-driven decisions at every phase.
                </p>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
              </div>
              <blockquote className="text-3xl font-bold text-white mb-4">
                "We don't guess. We know. And we grow."
              </blockquote>
              <p className="text-lg text-gray-300">
                From sourcing to scaling, every move we make is backed by data — unlocking precision, foresight, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;