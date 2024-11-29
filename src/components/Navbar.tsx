import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center border-b">
            <Link to="/" className="flex items-center justify-center">
                <img src="/placeholder.svg" alt="Rudra Infocom Logo" className="h-12 w-12" />
                <span className="ml-2 text-xl font-bold text-[#1e2d5f]">RUDRA INFOCOM</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <Link to="/" className="text-sm font-medium hover:text-[#1e2d5f] transition-colors">
                    Home
                </Link>
                <Link to="/about" className="text-sm font-medium hover:text-[#1e2d5f] transition-colors">
                    About
                </Link>
                <Link to="/services" className="text-sm font-medium hover:text-[#1e2d5f] transition-colors">
                    Services
                </Link>
                <Link to="/contact" className="text-sm font-medium hover:text-[#1e2d5f] transition-colors">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;

