import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageSquare, User, Building } from 'lucide-react';
import SEO from '../components/SEO';
import CalendarBooking from '../components/CalendarBooking';
import { trackLeadEvent, trackConversion } from '../components/Analytics';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import toast, { Toaster } from 'react-hot-toast';

const contactSchema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().required('Email is required').email('Please enter a valid email'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters')
});

type ContactFormData = yup.InferType<typeof contactSchema>;

const Contact = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'calendar'>('contact');
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema)
  });

  const [chatMessages, setChatMessages] = useState([
    { 
      role: 'assistant', 
      content: 'Hi, I\'m the Panemorfi AI assistant. How can I help you today? I can answer questions about our acquisition criteria, investment strategy, or help you get in touch with our team.' 
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Track form submission
      trackLeadEvent('contact_form_submit', 10);
      trackConversion('contact_form');

      // Simulate API call - replace with your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Thank you for your message! We\'ll get back to you within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Simulate AI response for demo purposes
      // In production, you would need to implement a backend API endpoint
      // that securely handles OpenAI API calls server-side
      
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
      
      // Generate contextual responses based on user input
      let response = '';
      const lowerMessage = userMessage.toLowerCase();
      
      if (lowerMessage.includes('acquisition') || lowerMessage.includes('acquire') || lowerMessage.includes('buy')) {
        response = "We focus on acquiring cash-flow positive B2B and industrial businesses with $1M-$20M in annual revenue. Our ideal targets have strong operations, scalable business models, and growth potential. We look for businesses where we can add value through our technology expertise and operational improvements. Would you like to discuss a potential acquisition opportunity?";
      } else if (lowerMessage.includes('criteria') || lowerMessage.includes('requirements')) {
        response = "Our acquisition criteria include: 1) Cash-flow positive businesses, 2) B2B or industrial focus, 3) $1M-$20M annual revenue, 4) Scalable business model, 5) Strong market position, and 6) Operational improvement potential. We also look for businesses where technology integration can drive growth. What specific aspect would you like to know more about?";
      } else if (lowerMessage.includes('strategy') || lowerMessage.includes('approach')) {
        response = "Our strategy follows three key pillars: 1) Identify and acquire solid businesses with strong fundamentals, 2) Empower exceptional operators to lead our portfolio companies, and 3) Scale using AI, cloud systems, and data analytics. This 'tech meets acquisition' approach allows us to create sustainable long-term value. How can we help with your business goals?";
      } else if (lowerMessage.includes('founder') || lowerMessage.includes('background') || lowerMessage.includes('team')) {
        response = "Our founder brings a unique combination of technical and business expertise: civil engineering background, MBA in project management & law from the UK, machine learning specialist, and certified cloud architect. This rare blend enables us to see opportunities others miss and implement solutions that drive sustainable growth. What would you like to know about our approach?";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('meeting') || lowerMessage.includes('discuss')) {
        response = "I'd be happy to help connect you with our team! For detailed discussions about potential partnerships or acquisitions, please use the contact form on this page. Our team typically responds within 24 hours. You can also reach us directly at info@panemorfi.com. What type of opportunity are you looking to discuss?";
      } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('companies')) {
        response = "We're currently building our portfolio of exceptional businesses. Each acquisition represents a strategic opportunity to scale and create lasting value. While our portfolio companies will be showcased as we grow, we're actively seeking businesses that match our criteria. Do you have a business that might be a good fit?";
      } else {
        response = "Thank you for your question! As the Panemorfi Holdings AI assistant, I can help you learn about our acquisition criteria, investment strategy, founder background, or connect you with our team. We specialize in acquiring and scaling profitable B2B and industrial businesses using data-driven approaches. What specific information can I provide for you?";
      }
      
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: response
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setChatMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I apologize, but I\'m having trouble processing your request right now. Please try again or use the contact form to reach our team directly at info@panemorfi.com.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-50">
      <Toaster position="top-right" />
      <SEO 
        title="Contact Us - Panemorfi Holdings"
        description="Get in touch with Panemorfi Holdings to discuss business acquisition opportunities, strategic partnerships, or investment inquiries."
        keywords="contact, business acquisition, investment opportunities, strategic partnership, business consultation"
      />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 text-sm font-medium mb-8">
              <MessageSquare className="h-4 w-4 mr-2" />
              Get In Touch
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Let's Start a{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Whether you're a business owner looking for strategic partnership or an investor interested in our approach, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 rounded-xl p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'contact'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Send Message
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === 'calendar'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Schedule Meeting
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form or Calendar */}
            <div>
              {activeTab === 'contact' ? (
                <>
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Ready to discuss your business or investment opportunity? Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          {...register('name')}
                          className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg ${
                            errors.name ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="Your full name"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          {...register('email')}
                          className={`w-full pl-10 pr-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-lg ${
                            errors.email ? 'border-red-300' : 'border-gray-300'
                          }`}
                          placeholder="your.email@example.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        {...register('message')}
                        rows={6}
                        className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-lg ${
                          errors.message ? 'border-red-300' : 'border-gray-300'
                        }`}
                        placeholder="Tell us about your business, investment interest, or any questions you have..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-5 rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="h-6 w-6" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <CalendarBooking />
              )}

              {/* Contact Info - Only show on contact tab */}
              {activeTab === 'contact' && (
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                    <a href="mailto:info@panemorfi.com" className="text-blue-600 hover:text-blue-700 transition-colors">
                      info@panemorfiholdings.com
                    </a>
                  </div>

                  <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="bg-green-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                    <a href="tel:+15551234567" className="text-green-600 hover:text-green-700 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>

                  <div className="text-center p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="bg-purple-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-900 mb-2">Location</h3>
                    <span className="text-purple-600">Delaware, USA</span>
                  </div>
                </div>
              )}
            </div>

            {/* AI Chatbot */}
            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-12 h-12 flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">AI Assistant</h2>
                  <p className="text-sm text-gray-600">Powered by OpenAI GPT-4</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl h-96 mb-6 p-4 overflow-y-auto shadow-inner border border-gray-100">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                        msg.role === 'user' 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                          : 'bg-gray-100 text-gray-800 border border-gray-200'
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-800 px-4 py-3 rounded-2xl border border-gray-200">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <form onSubmit={handleChatSubmit} className="flex space-x-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything about Panemorfi Holdings..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !chatInput.trim()}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                  onClick={() => trackLeadEvent('chat_interaction', 2)}
                >
                  <Send className="h-5 w-5" />
                </button>
              </form>
              
              <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                <p className="text-xs text-blue-700 leading-relaxed">
                  <strong>💡 Try asking:</strong> "What types of businesses do you acquire?" or "Tell me about your investment criteria" or "How does your scaling process work?" or "Can we schedule a meeting?"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;