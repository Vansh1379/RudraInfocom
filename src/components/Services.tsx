import React, { useState } from 'react';
import { Radio, Wifi, Shield, Server, Users, Settings, PenTool } from 'react-feather';

const Services: React.FC = () => {
    const [activeTab, setActiveTab] = useState('telecom');

    const tabs = [
        { id: 'telecom', label: 'Telecom' },
        { id: 'it', label: 'IT Services' },
        { id: 'consulting', label: 'Consulting' },
    ];

    const services = {
        telecom: [
            { icon: Radio, title: 'Network Planning', description: 'Expert RF planning and site surveys for optimal network performance' },
            { icon: Radio, title: 'BTS Installation', description: 'Professional installation and maintenance of Base Transceiver Stations' },
            { icon: Wifi, title: 'Broadband Solutions', description: 'High-speed broadband and POP operations for seamless connectivity' },
        ],
        it: [
            { icon: Shield, title: 'Cybersecurity', description: 'Advanced security solutions including firewalls and intrusion prevention' },
            { icon: Shield, title: 'Network Solutions', description: 'Comprehensive LAN/WAN design, implementation, and maintenance' },
            { icon: Server, title: 'Cloud Services', description: 'Scalable cloud solutions for businesses of all sizes' },
        ],
        consulting: [
            { icon: Users, title: 'IT Strategy', description: 'Tailored IT strategies to align with your business goals' },
            { icon: Settings, title: 'Process Optimization', description: 'Streamline your operations with our expert process consulting' },
            { icon: PenTool, title: 'Technology Integration', description: 'Seamless integration of new technologies into your existing infrastructure' },
        ],
    };

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1e2d5f]">Our Services</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Comprehensive telecommunications and IT solutions tailored for your business needs
                        </p>
                    </div>
                </div>
                <div className="mt-12">
                    <div className="flex justify-center space-x-4 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-4 py-2 rounded-md ${activeTab === tab.id
                                    ? 'bg-[#1e2d5f] text-white'
                                    : 'bg-white text-[#1e2d5f] hover:bg-gray-100'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className="grid gap-6 lg:grid-cols-3">
                        {services[activeTab as keyof typeof services].map((service, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <service.icon className="h-12 w-12 text-[#1e2d5f] mb-4" />
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;

