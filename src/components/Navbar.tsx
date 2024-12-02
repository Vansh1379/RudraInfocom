import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'react-feather';

export const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const servicesDropdown = [
        { title: 'Network Solutions', path: '/services' },
        { title: 'IT Security', path: '/services' },
        { title: 'Cloud Services', path: '/services' },
        { title: 'Consulting', path: '/services' },
    ];

    const featuresDropdown = [
        { title: 'Implementation', path: '/features' },
        { title: '24/7 Support', path: '/features' },
        { title: 'Maintenance', path: '/features' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="container mx-auto px-4">
                <nav className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-2"
                    >
                        <img
                            src="/placeholder.svg"
                            alt="Rudra Infocom Logo"
                            className="h-10 w-10"
                        />
                        <span className={`text-xl font-bold ${isScrolled ? 'text-[#1e2d5f]' : 'text-white'
                            }`}>
                            Rudra Infocom
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            to="/about"
                            className={`nav-link ${isScrolled ? 'text-gray-600' : 'text-white'
                                } hover:text-[#1e2d5f] transition-colors`}
                        >
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <button
                                onMouseEnter={() => setActiveDropdown('services')}
                                className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-600' : 'text-white'
                                    } hover:text-[#1e2d5f] transition-colors`}
                            >
                                <span>Services</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'services' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                                    >
                                        {servicesDropdown.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#1e2d5f]"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Features Dropdown */}
                        <div className="relative group">
                            <button
                                onMouseEnter={() => setActiveDropdown('features')}
                                className={`flex items-center space-x-1 ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#1e2d5f] transition-colors`}
                            >
                                <span>Features</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>
                            <AnimatePresence>
                                {activeDropdown === 'features' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2"
                                    >
                                        {featuresDropdown.map((item) => (
                                            <Link
                                                key={item.path}
                                                to={item.path}
                                                className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#1e2d5f]"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link
                            to="/testimonials"
                            className={`nav-link ${isScrolled ? 'text-gray-600' : 'text-white'} hover:text-[#1e2d5f] transition-colors`}
                        >
                            Testimonials
                        </Link>

                        <Link
                            to="/contact"
                            className="bg-[#1e2d5f] text-white px-6 py-2 rounded-full hover:bg-[#2a3d7f] transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden p-2"
                    >
                        {isMobileMenuOpen ? (
                            <X className={isScrolled ? 'text-[#1e2d5f]' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled ? 'text-[#1e2d5f]' : 'text-white'} />
                        )}
                    </button>
                </nav>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-white mt-4 rounded-lg shadow-lg overflow-hidden"
                        >
                            <div className="py-4">
                                <Link
                                    to="/about"
                                    className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#1e2d5f]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    About
                                </Link>

                                {/* Mobile Services Dropdown */}
                                <div className="px-6 py-2">
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === 'mobile-services' ? null : 'mobile-services')}
                                        className="flex items-center justify-between w-full text-gray-600"
                                    >
                                        <span>Services</span>
                                        <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                                            }`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'mobile-services' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 ml-4 border-l-2 border-gray-200"
                                            >
                                                {servicesDropdown.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        to={item.path}
                                                        className="block px-4 py-2 text-gray-600 hover:text-[#1e2d5f]"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Mobile Features Dropdown */}
                                <div className="px-6 py-2">
                                    <button
                                        onClick={() => setActiveDropdown(activeDropdown === 'mobile-features' ? null : 'mobile-features')}
                                        className="flex items-center justify-between w-full text-gray-600"
                                    >
                                        <span>Features</span>
                                        <ChevronDown className={`w-4 h-4 transform transition-transform ${activeDropdown === 'mobile-features' ? 'rotate-180' : ''
                                            }`} />
                                    </button>
                                    <AnimatePresence>
                                        {activeDropdown === 'mobile-features' && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="mt-2 ml-4 border-l-2 border-gray-200"
                                            >
                                                {featuresDropdown.map((item) => (
                                                    <Link
                                                        key={item.path}
                                                        to={item.path}
                                                        className="block px-4 py-2 text-gray-600 hover:text-[#1e2d5f]"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {item.title}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <Link
                                    to="/testimonials"
                                    className="block px-6 py-2 text-gray-600 hover:bg-gray-50 hover:text-[#1e2d5f]"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Testimonials
                                </Link>

                                <div className="px-6 pt-2">
                                    <Link
                                        to="/contact"
                                        className="block w-full text-center bg-[#1e2d5f] text-white px-6 py-2 rounded-full hover:bg-[#2a3d7f] transition-colors duration-300"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
