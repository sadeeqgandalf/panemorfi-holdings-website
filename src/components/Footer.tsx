import React from 'react';
import { Building2, Mail, Phone, MapPin, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <Building2 className="h-10 w-10 text-blue-400" />
                <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-lg"></div>
              </div>
              <div>
                <span className="text-2xl font-bold">Panemorfi</span>
                <div className="text-blue-400 text-sm font-medium">Holdings</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              A Delaware C-Corp holding company that acquires and scales profitable B2B and industrial businesses through strategic vision, operational excellence, and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="group bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href="#" 
                className="group bg-slate-800 hover:bg-blue-600 p-3 rounded-lg transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Portfolio', href: '/portfolio' },
                { name: 'Investment Strategy', href: '/about' },
                { name: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@panemorfi.com" className="text-gray-300 hover:text-blue-400 transition-colors">
                    info@panemorfiholdings.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <MapPin className="h-4 w-4 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <span className="text-gray-300">Delaware, USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Panemorfi Holdings. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;