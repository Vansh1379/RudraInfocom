import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Monitor, Shield, Wifi, Users, Settings, Tool } from 'react-feather';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Fotter';
import image from "../assets/Screenshot 2024-12-04 130017.png"
import lan from "../assets/lan.png"
import wireless from "../assets/wireless.png"
import security from "../assets/security.png"

export const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState('vision');

    const tabContent = {
        vision: {
            title: "Our Vision",
            content: "To provide secure, reliable affordable and high quality converged telecommunication services anytime, anywhere for an accelerated inclusive socio-economic development."
        },
        mission: {
            title: "Our Mission",
            content: "To develop a robust and secure state-of-the-art telecommunication network providing seamless coverage for bridging the digital divide and thereby facilitate socio-economic development; attract investment, both domestic and foreign and create opportunities."
        },
        values: {
            title: "Our Values",
            content: "Innovation, Integrity, Excellence, Customer-Centric, Teamwork"
        }
    };

    const services = [
        "UI UX Design",
        "Website Development",
        "Marketing",
        "Social Media",
        "eCommerce Store",
        "Tech Support"
    ];

    const workItems = [
        {
            title: "LAN/WAN Installation",
            image: lan,
            alt: "Network Infrastructure"
        },
        {
            title: "Wireless Network Setup",
            image: wireless,
            alt: "Wireless Network"
        },
        {
            title: "Network Security",
            image: security,
            alt: "Network Security"
        },
        {
            title: "CCTV Installation",
            image: image,
            alt: "CCTV Installation"
        }
    ];

    const features = [
        { icon: Monitor, title: "New Network Implementation", description: "Seamlessly set up robust and reliable network infrastructure tailored to your business needs" },
        { icon: Wifi, title: "LAN/WAN/CCTV Maintenance", description: "Ensure uninterrupted connectivity and security with our expert maintenance services for LAN, WAN, and CCTV systems" },
        { icon: Wifi, title: "High-Speed Wireless Solutions", description: "Experience lightning-fast wireless connectivity with our cutting-edge solutions designed for optimal performance" },
        { icon: Shield, title: "Network Firewall Installation", description: "Protect your network with advanced firewalls that safeguard your data from cyber threats and breaches" },
        { icon: Users, title: "24/7 Expert Support", description: "Get round-the-clock technical assistance from our team of experienced IT professionals." },
        { icon: Settings, title: "Custom IT Solutions", description: "Empower your business with tailored IT solutions that address your unique challenges and goals." },
        { icon: Tool, title: "Hardware Repair & Upgrade", description: "Keep your hardware up-to-date and running smoothly with our expert repair and upgrade services." },
        { icon: CheckCircle, title: "Quality Assurance", description: "Delivering excellence through meticulous quality checks and reliable IT services for your peace of mind." }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div>
                <Navbar />
            </div>
            <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f]">
                <div className="absolute inset-0 bg-grid-white/10 animate-pulse" />
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="container relative px-4 md:px-6 mx-auto text-center"
                >
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6">
                        Empowering Connectivity
                    </h1>
                    <p className="mx-auto max-w-[800px] text-xl text-gray-200 mb-8">
                        Rudra Infocom: Your Trusted Partner in IT & Telecommunication Solutions
                    </p>
                    <div className="flex justify-center space-x-4">
                        <Link to="/contact" className="bg-white text-[#1e2d5f] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">
                            Get in Touch
                        </Link>
                        <Link to="/services" className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#1e2d5f] transition duration-300">
                            Our Services
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* Vision Mission Values Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex justify-center mb-8">
                        {Object.keys(tabContent).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 mx-2 rounded-full text-sm font-medium transition duration-300 ${activeTab === tab
                                    ? 'bg-[#1e2d5f] text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                    }`}
                            >
                                {tabContent[tab as keyof typeof tabContent].title}
                            </button>
                        ))}
                    </div>
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white p-8 rounded-lg shadow-lg"
                    >
                        <h2 className="text-3xl font-bold text-[#1e2d5f] mb-4">
                            {tabContent[activeTab as keyof typeof tabContent].title}
                        </h2>
                        <p className="text-gray-600 text-lg">
                            {tabContent[activeTab as keyof typeof tabContent].content}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-100">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1e2d5f] mb-12">What We Do</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 bg-[#1e2d5f] rounded-full flex items-center justify-center mb-4">
                                    <CheckCircle className="w-10 h-10 text-white" />
                                </div>
                                <p className="font-medium text-gray-800">{service}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-16 md:py-24 bg-[#1e2d5f] text-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Rudra Infocom?</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white/10 p-6 rounded-lg backdrop-blur-sm"
                            >
                                <feature.icon className="w-12 h-12 text-[#3a4d8f] mb-4" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Work Section */}
            <section className="py-16 md:py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#1e2d5f] mb-12">Our Work</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {workItems.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative overflow-hidden rounded-lg shadow-lg"
                            >
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] text-white">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Network?</h2>
                    <p className="max-w-2xl mx-auto text-lg mb-8">
                        Let's work together to build a secure, efficient, and future-proof IT infrastructure for your business.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-white text-[#1e2d5f] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300 inline-block"
                    >
                        Start Your Project
                    </Link>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    );
};