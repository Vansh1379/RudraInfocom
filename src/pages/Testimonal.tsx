import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'react-feather';
import { Link } from 'react-router-dom';
import Footer from '../components/Fotter';
import { Navbar } from '../components/Navbar';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    image: string;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "John Doe",
        position: "CTO",
        company: "Tech Innovators Inc.",
        image: "/placeholder.svg?height=100&width=100",
        quote: "Rudra Infocom's network solutions have transformed our infrastructure. Their expertise and support are unmatched in the industry.",
        rating: 5,
    },
    {
        id: 2,
        name: "Jane Smith",
        position: "IT Director",
        company: "Global Systems Ltd.",
        image: "/placeholder.svg?height=100&width=100",
        quote: "The cybersecurity measures implemented by Rudra Infocom have given us peace of mind. Their team is proactive and always ahead of potential threats.",
        rating: 5,
    },
    {
        id: 3,
        name: "Mike Johnson",
        position: "CEO",
        company: "Startup Ventures",
        image: "/placeholder.svg?height=100&width=100",
        quote: "As a growing startup, Rudra Infocom's scalable cloud solutions have been instrumental in our success. They truly understand our needs.",
        rating: 4,
    },
    {
        id: 4,
        name: "Sarah Lee",
        position: "Operations Manager",
        company: "Logistics Pro",
        image: "/placeholder.svg?height=100&width=100",
        quote: "The 24/7 support from Rudra Infocom is exceptional. They've helped us maintain seamless operations even during critical times.",
        rating: 5,
    },
    {
        id: 5,
        name: "David Chen",
        position: "CIO",
        company: "Financial Solutions Corp",
        image: "/placeholder.svg?height=100&width=100",
        quote: "Rudra Infocom's IT consulting services have helped us optimize our processes and stay ahead in a competitive market.",
        rating: 5,
    },
    {
        id: 6,
        name: "Emily Watson",
        position: "Head of IT",
        company: "Education First",
        image: "/placeholder.svg?height=100&width=100",
        quote: "The implementation of Rudra Infocom's solutions was smooth and efficient. Their team's expertise is evident in every interaction.",
        rating: 4,
    },
];

export const Testimonal: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
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
                        Client Testimonials
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl max-w-2xl mx-auto"
                    >
                        Hear what our clients have to say about our IT and telecommunication solutions
                    </motion.p>
                </div>
            </section>

            {/* Featured Testimonial Carousel */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e2d5f] mb-12">Featured Testimonials</h2>
                    <div className="relative max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentTestimonial}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white rounded-lg shadow-lg p-8 md:p-12"
                            >
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                                    <img
                                        src={testimonials[currentTestimonial].image}
                                        alt={testimonials[currentTestimonial].name}
                                        className="w-24 h-24 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <p className="text-lg md:text-xl text-gray-600 italic mb-6">"{testimonials[currentTestimonial].quote}"</p>
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-semibold text-[#1e2d5f]">{testimonials[currentTestimonial].name}</h3>
                                                <p className="text-gray-500">{testimonials[currentTestimonial].position}, {testimonials[currentTestimonial].company}</p>
                                            </div>
                                            <div className="flex">
                                                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                        <button
                            type='button'
                            onClick={prevTestimonial}
                            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6 text-[#1e2d5f]" />
                        </button>

                        <button
                            type='button'
                            onClick={nextTestimonial}
                            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6 text-[#1e2d5f]" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonial Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e2d5f] mb-12">More Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold text-[#1e2d5f]">{testimonial.name}</h3>
                                        <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                                <div className="flex">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our satisfied clients and experience the Rudra Infocom difference in IT and telecommunication solutions.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-[#1e2d5f] px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
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

