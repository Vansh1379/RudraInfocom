import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    Server,
    Shield,
    Cloud,
    Users,
    Clock,
    Eye,
    Database,
    Zap,
    Smartphone,
    Globe,
    Book,
    Tool,
    Headphones,
    BarChart,
    CheckCircle
} from 'react-feather';
import Footer from '../components/Fotter';
import { Navbar } from '../components/Navbar';

interface Feature {
    icon: React.ElementType;
    title: string;
    description: string;
}

export const Features: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('network');

    const categories = [
        { id: 'network', name: 'Network Solutions' },
        { id: 'security', name: 'IT Security' },
        { id: 'cloud', name: 'Cloud Services' },
        { id: 'support', name: '24/7 Support' },
    ];

    const features: Record<string, Feature[]> = {
        network: [
            { icon: Server, title: 'High-Performance Infrastructure', description: 'State-of-the-art network infrastructure designed for speed and reliability.' },
            { icon: Globe, title: 'Global Connectivity', description: 'Seamless integration with global networks for worldwide reach.' },
            { icon: Zap, title: 'Low Latency', description: 'Optimized routing for minimal latency and maximum performance.' },
        ],
        security: [
            { icon: Shield, title: 'Advanced Threat Protection', description: 'Cutting-edge security measures to safeguard against evolving cyber threats.' },
            { icon: Eye, title: 'Data Encryption', description: 'End-to-end encryption for all your sensitive data transmissions.' },
            { icon: Eye, title: 'Real-time Monitoring', description: '24/7 surveillance of your network for immediate threat detection and response.' },
        ],
        cloud: [
            { icon: Cloud, title: 'Scalable Cloud Solutions', description: 'Flexible cloud infrastructure that grows with your business needs.' },
            { icon: Database, title: 'Secure Data Storage', description: 'Redundant and secure cloud storage for all your critical data.' },
            { icon: Database, title: 'Automatic Backups', description: 'Regular automated backups to ensure data integrity and business continuity.' },
        ],
        support: [
            { icon: Headphones, title: 'Round-the-Clock Support', description: 'Expert technical assistance available 24/7, 365 days a year.' },
            { icon: Zap, title: 'Rapid Response Time', description: 'Quick resolution to your IT issues with our dedicated support team.' },
            { icon: Book, title: 'Comprehensive Knowledge Base', description: 'Access to extensive documentation and self-help resources.' },
        ],
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            {/* Hero Section */}
            <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e2d5f]/50 to-[#1e2d5f]/90" />
                <div className="relative z-10 text-center text-white px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                    >
                        Our Features
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                    >
                        Discover the powerful capabilities that set Rudra Infocom apart
                    </motion.p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <motion.button
                                key={category.id}
                                onClick={() => setActiveCategory(category.id)}
                                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors duration-300 ${activeCategory === category.id
                                    ? 'bg-[#1e2d5f] text-white'
                                    : 'bg-white text-[#1e2d5f] hover:bg-gray-200'
                                    }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category.name}
                            </motion.button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {features[activeCategory].map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <feature.icon className="w-12 h-12 text-[#1e2d5f] mb-4" />
                                    <h3 className="text-xl font-semibold text-[#1e2d5f] mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e2d5f] mb-12">Why Choose Rudra Infocom?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Users, title: 'Expert Team', description: 'Highly skilled professionals with years of industry experience' },
                            { icon: Zap, title: 'Cutting-edge Technology', description: 'Always up-to-date with the latest IT and telecom advancements' },
                            { icon: Clock, title: 'Timely Delivery', description: 'Committed to meeting deadlines and exceeding expectations' },
                            { icon: BarChart, title: 'Scalable Solutions', description: 'Flexible services that grow with your business needs' },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-gray-50 rounded-lg p-6 text-center"
                            >
                                <item.icon className="w-12 h-12 text-[#1e2d5f] mx-auto mb-4" />
                                <h3 className="text-xl font-semibold text-[#1e2d5f] mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Implementation Process */}
            <section className="py-20 bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Implementation Process</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-8">
                        {[
                            { icon: Smartphone, title: 'Consultation', description: 'We start by understanding your unique needs' },
                            { icon: Tool, title: 'Custom Design', description: 'Tailored solutions designed specifically for you' },
                            { icon: Zap, title: 'Rapid Deployment', description: 'Swift and efficient implementation of services' },
                            { icon: CheckCircle, title: 'Ongoing Support', description: 'Continuous assistance to ensure optimal performance' },
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center max-w-xs"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4">
                                    <step.icon className="w-8 h-8 text-[#1e2d5f]" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-300">{step.description}</p>
                                {index < 3 && (
                                    <motion.div
                                        className="hidden md:block w-12 h-1 bg-white mt-4 transform rotate-90 md:rotate-0"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: 48 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1e2d5f] mb-6">Ready to Experience Our Features?</h2>
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let's discuss how Rudra Infocom's cutting-edge features can transform your business.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-[#1e2d5f] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#2a3d7f] transition-colors duration-300"
                    >
                        Get Started Today
                    </Link>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    );
};


