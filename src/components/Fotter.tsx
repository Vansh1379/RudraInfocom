import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram } from 'react-feather';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e2d5f] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Rudra Infocom</h3>
            <p className="text-sm">Empowering businesses with cutting-edge IT and telecommunication solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/services" className="hover:underline">Services</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm">123 Tech Street, Digital City</p>
            <p className="text-sm">contact@rudrainfo.com</p>
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300"><Facebook /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Twitter /></a>
              <a href="#" className="hover:text-gray-300"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2024 Rudra Infocom. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

