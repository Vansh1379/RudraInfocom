import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "react-feather";
import { Link } from "react-router-dom";
import Footer from "../components/Fotter";
import { Navbar } from "../components/Navbar";
import frizbee from "../assets/frizbee.png";

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
    name: "Tata Communication",
    position: "Manager",
    company: "Tata Communication Inc.",
    image:
      "data:image/png;base64,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",
    quote:
      "Rudra Infocom's network solutions have transformed our infrastructure. Their expertise and support are unmatched in the industry.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sify Technologies",
    position: "IT Director",
    company: "SifytechnologiesLtd.",
    image:
      "data:image/jpeg;base64,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",
    quote:
      "The Telecom measures implemented by Rudra Infocom have given us peace of mind. Their team is proactive and always ahead of potential threats.",
    rating: 5,
  },
  {
    id: 3,
    name: "Vedang Cellular Services",
    position: "CEO",
    company: "Vedang Cellular Services Ltd.",
    image:
      "https://www.vedangcellular.com/wp-content/uploads/2021/11/vedang-logo.png",
    quote:
      "As a growing startup, Rudra Infocom's scalable Telecom solutions have been instrumental in our success. They truly understand our needs.",
    rating: 4,
  },
  {
    id: 4,
    name: "Frizb ee",
    position: "Operations Manager",
    company: "Logistics Pro",
    image: frizbee,
    quote:
      "The 24/7 support from Rudra Infocom is exceptional. They've helped us maintain seamless operations even during critical times.",
    rating: 5,
  },
  {
    id: 5,
    name: "Airtel",
    position: "Manager",
    company: "Airtel ",
    image:
      "data:image/png;base64,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",
    quote:
      "Rudra Infocom's IT consulting services have helped us optimize our processes and stay ahead in a competitive market.",
    rating: 5,
  },
  {
    id: 6,
    name: "Vi",
    position: "Head of IT",
    company: "Vodafone Idea Ltd.",
    image:
      "data:image/png;base64,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",
    quote:
      "The implementation of Rudra Infocom's solutions was smooth and efficient. Their team's expertise is evident in every interaction.",
    rating: 4,
  },
];

export const Testimonal: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
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
            Hear what our clients have to say about our IT and telecommunication
            solutions
          </motion.p>
        </div>
      </section>

      {/* Featured Testimonial Carousel */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e2d5f] mb-12">
            Featured Testimonials
          </h2>
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
                    className="w-24 h-24 rounded-full object-fit"
                  />
                  <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-600 italic mb-6">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-[#1e2d5f]">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-gray-500">
                          {testimonials[currentTestimonial].position},{" "}
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                      <div className="flex">
                        {[
                          ...Array(testimonials[currentTestimonial].rating),
                        ].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <button
              type="button"
              onClick={prevTestimonial}
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-[#1e2d5f]" />
            </button>

            <button
              type="button"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1e2d5f] mb-12">
            More Success Stories
          </h2>
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
                    className="w-16 h-16 rounded-full object-fit mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-[#1e2d5f]">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and experience the Rudra Infocom
            difference in IT and telecommunication solutions.
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
