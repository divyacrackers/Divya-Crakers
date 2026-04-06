import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';
import logo from '../../assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Divya Crackers Logo" 
                className="w-12 h-12 object-contain" 
              />
              <span className="font-black text-2xl uppercase tracking-tighter text-gray-900">
                Divya Crackers
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Trusted Fireworks Dealer Since 2005. Bringing safety, quality, and brilliant colors to your celebrations for nearly two decades.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com/divyacrackers2005" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com/divyacrackers2005" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <h3 className="font-black text-gray-900 uppercase tracking-wider">Products</h3>
            </div>
            <ul className="space-y-3 text-gray-600 text-sm font-medium">
              <li><Link to="/products" className="hover:text-red-600 transition-colors">Sound Crackers</Link></li>
              <li><Link to="/products" className="hover:text-red-600 transition-colors">Fancy Fireworks</Link></li>
              <li><Link to="/products" className="hover:text-red-600 transition-colors">Flower Pots</Link></li>
              <li><Link to="/products" className="hover:text-red-600 transition-colors">Rockets</Link></li>
              <li><Link to="/products" className="hover:text-red-600 transition-colors">Kids Special</Link></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <h3 className="font-black text-gray-900 uppercase tracking-wider">Navigation</h3>
            </div>
            <ul className="space-y-3 text-gray-600 text-sm font-medium">
              <li><Link to="/" className="hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="hover:text-red-600 transition-colors">Shop Products</Link></li>
              <li><Link to="/gallery" className="hover:text-red-600 transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-red-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div>
            <div className="border-l-4 border-red-600 pl-4 mb-6">
              <h3 className="font-black text-gray-900 uppercase tracking-wider">Contact</h3>
            </div>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red-600 shrink-0" />
                <span className="font-bold text-gray-800">+91 9894354432</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-600 shrink-0" />
                <span className="break-all">jkenterprises_hsr@yahoo.co.in</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 shrink-0" />
                <span>74/A, 27/1, Bagalur Road, Hosur - 635109</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-red-600 shrink-0" />
                <span>9 AM – 9 PM (365 Days)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest order-3 md:order-1">
            © 2026 Divya Crackers. All rights reserved.
          </p>
          
          {/* StaffArc Attribution */}
          <div className="flex justify-center items-center gap-1 text-sm font-medium text-gray-500 order-1 md:order-2">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1" fill="currentColor" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-bold"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain ml-1"
              />
              StaffArc
            </a>
          </div>

          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest order-2 md:order-3">
            Quality & Safety First
          </p>
        </div>
      </div>
    </footer>
  );
}