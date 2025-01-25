import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'react-feather';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Fotter';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    inquiry: string;
}

export const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        inquiry: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        // Simulate success (80% chance) or error (20% chance)
        const isSuccess = Math.random() < 0.8;
        setSubmitStatus(isSuccess ? 'success' : 'error');
        if (isSuccess) {
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                inquiry: ''
            });
        }
        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus(null), 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <div>
                <Navbar />
            </div>
            <section className="relative h-[50vh] min-h-[400px] bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f]">
                <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1e2d5f]/50 to-[#1e2d5f]/90" />
                <div className="relative h-full flex items-center justify-center text-white px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                            We're here to help you transform your business with cutting-edge IT and telecommunication solutions
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-lg shadow-lg p-8"
                        >
                            <h2 className="text-2xl md:text-3xl font-bold text-[#1e2d5f] mb-6">
                                Let's Start a Conversation
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e2d5f] focus:border-transparent transition duration-300"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e2d5f] focus:border-transparent transition duration-300"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e2d5f] focus:border-transparent transition duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e2d5f] focus:border-transparent transition duration-300"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">
                                        Your Inquiry
                                    </label>
                                    <textarea
                                        id="inquiry"
                                        name="inquiry"
                                        rows={4}
                                        value={formData.inquiry}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e2d5f] focus:border-transparent transition duration-300"
                                    />
                                </div>
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-[#1e2d5f] text-white py-3 rounded-md hover:bg-[#2a3d7f] transition-colors duration-300 flex items-center justify-center space-x-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {isSubmitting ? (
                                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <span>Submit</span>
                                            <Send className="w-4 h-4" />
                                        </>
                                    )}
                                </motion.button>
                            </form>
                            <AnimatePresence>
                                {submitStatus && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`mt-4 p-4 rounded-md ${submitStatus === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                            }`}
                                    >
                                        {submitStatus === 'success' ? (
                                            <div className="flex items-center">
                                                <CheckCircle className="w-5 h-5 mr-2" />
                                                <span>Thank you for your message. We'll be in touch soon!</span>
                                            </div>
                                        ) : (
                                            <div className="flex items-center">
                                                <AlertCircle className="w-5 h-5 mr-2" />
                                                <span>There was an error submitting your message. Please try again.</span>
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="lg:pl-12"
                        >
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-2xl md:text-3xl font-bold text-[#1e2d5f] mb-8">
                                    Connect With Us
                                </h2>
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-[#1e2d5f] mb-4">Our Contact Details</h3>
                                    <div className="space-y-4">
                                        <motion.a
                                            href="mailto:support@rudrainfo.co.in"
                                            className="flex items-center space-x-4 text-gray-600 hover:text-[#1e2d5f] transition-colors duration-300"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="w-12 h-12 bg-[#1e2d5f]/10 rounded-full flex items-center justify-center">
                                                <Mail className="w-5 h-5 text-[#1e2d5f]" />
                                            </div>
                                            <span>Hemang@rudrainfo.co.in</span>
                                        </motion.a>
                                        <motion.a
                                            href="tel:+917600436960"
                                            className="flex items-center space-x-4 text-gray-600 hover:text-[#1e2d5f] transition-colors duration-300"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="w-12 h-12 bg-[#1e2d5f]/10 rounded-full flex items-center justify-center">
                                                <Phone className="w-5 h-5 text-[#1e2d5f]" />
                                            </div>
                                            <span>+91 7600436960</span>
                                        </motion.a>
                                        <motion.div
                                            className="flex items-center space-x-4 text-gray-600"
                                            whileHover={{ x: 10 }}
                                        >
                                            <div className="w-12 h-12 bg-[#1e2d5f]/10 rounded-full flex items-center justify-center">
                                                <MapPin className="w-5 h-5 text-[#1e2d5f]" />
                                            </div>
                                            <span>1, Akhilesh society, near mona park, Vejalpur road, Jivrajpark, Ahmedabad - 380051</span>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Business Hours */}
                                <div className="mt-12">
                                    <h3 className="text-xl font-semibold text-[#1e2d5f] mb-4">Business Hours</h3>
                                    <div className="space-y-2 text-gray-600">
                                        <p className="flex justify-between">
                                            <span>Monday - Friday:</span>
                                            <span>9:00 AM - 6:00 PM</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span>Saturday:</span>
                                            <span>9:00 AM - 2:00 PM</span>
                                        </p>
                                        <p className="flex justify-between">
                                            <span>Sunday:</span>
                                            <span>Closed</span>
                                        </p>
                                    </div>
                                </div>


                                <div className="mt-12">
                                    <h3 className="text-xl font-semibold text-[#1e2d5f] mb-4">Frequently Asked Questions</h3>
                                    <div className="space-y-4">
                                        <details className="bg-gray-100 rounded-md p-4">
                                            <summary className="font-medium cursor-pointer">What services do you offer?</summary>
                                            <p className="mt-2 text-gray-600">We offer a wide range of IT and telecommunication services including network solutions, cybersecurity, cloud services, and more.</p>
                                        </details>
                                        <details className="bg-gray-100 rounded-md p-4">
                                            <summary className="font-medium cursor-pointer">Do you provide 24/7 support?</summary>
                                            <p className="mt-2 text-gray-600">Yes, we offer 24/7 technical support to ensure your systems are always up and running.</p>
                                        </details>
                                        <details className="bg-gray-100 rounded-md p-4">
                                            <summary className="font-medium cursor-pointer">How quickly can you respond to inquiries?</summary>
                                            <p className="mt-2 text-gray-600">We aim to respond to all inquiries within 24 hours during business days.</p>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-[#1e2d5f] mb-12">Visit Our Office</h2>
                    <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.9014419969!2d72.55434661496815!3d23.033559384946705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1624007482142!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    allowFullScreen
                                    title="Google Map of Ahmedabad, Gujarat"
                                ></iframe>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <div>
                <Footer />
            </div>
        </div>
    );
};



