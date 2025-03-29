import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Edit3,
  Send,
  Shield,
  Headphones,
  Radio,
  Activity,
  CheckCircle,
  Lock,
} from "react-feather";
import { Navbar } from "../components/Navbar";
import Footer from "../components/Fotter";

export const Services: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const mainServices = [
    {
      icon: Edit3,
      title: "Implimantations",
      description:
        "Full project management and field activity services Pre-implementation design and consulting Site survey Installation On the-job training for your team",
    },
    {
      icon: Headphones,
      title: "24*7 Technical Support",
      description:
        "Maintaining your network is a top priority for Rudra Infocom. Our customer support team operates 24 hours a day, 7 days a week, to quickly resolve any issues.",
    },
    {
      icon: Send,
      title: "Implementation and Maintenance Services",
      description:
        "To ensure network integrity & availability, Gemini offers customers implementation, training, support and maintenance services.",
    },
  ];

  const telecomServices = [
    "RF Planning",
    "Site Survey and Feasibility study",
    "BTS Installation",
    "BTS, Backhaul, Broadband, POP, operation and Maintenance",
    "Late Mile Wireless/Backhaul installation for PTP and PTMP links",
    "Metropolitan Area Network – Man Installation",
    "WiMax and Wifi Network Deployment",
    "DLC Deployment",
  ];

  const salientFeatures = [
    "Ticket Management",
    "Vendor Management",
    "Compliance Management",
    "Network Management",
    "Issue Management",
    "Problem Management",
    "Vulnerability Management",
    "Patch Management",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div>
        <Navbar />
      </div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1e2d5f]/50 to-[#1e2d5f]/90" />
        <div className="relative h-full flex items-center justify-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive IT & Telecommunication Solutions for Your Business
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-3 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-[#1e2d5f] rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e2d5f] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-[#1e2d5f] transform transition-transform duration-300 ${
                    hoveredCard === index ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* IT Security Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] rounded-2xl p-8 md:p-12 text-white"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  IT Security Solutions
                </h2>
                <p className="text-lg text-gray-200 mb-6">
                  Security threats, be it physical or through IT, results in
                  consequences & effect. SAAS offers a comprehensive security
                  adoption.
                </p>
                <Link
                  to="/contact"
                  className="inline-block bg-white text-[#1e2d5f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
                >
                  Learn More
                </Link>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <span>Firewall Protection</span>
                </div>
                <div className="flex items-center gap-3">
                  <Lock className="w-8 h-8" />
                  <span>Data Encryption</span>
                </div>
                <div className="flex items-center gap-3">
                  <Activity className="w-8 h-8" />
                  <span>Threat Monitoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8" />
                  <span>Access Control</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Telecom Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e2d5f] mb-4">
              Telecom Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive telecommunication solutions tailored for your
              business needs
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {telecomServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#1e2d5f]/10 p-3 rounded-lg">
                    <Radio className="w-6 h-6 text-[#1e2d5f]" />
                  </div>
                  <p className="text-gray-700">{service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Salient Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1e2d5f] mb-4">
              Salient Features
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advanced features to ensure smooth operation and management
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {salientFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#1e2d5f] p-6 rounded-lg text-white text-center"
              >
                <CheckCircle className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-semibold">{feature}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1e2d5f] to-[#3a4d8f] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our services and how we can
              help transform your business
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#1e2d5f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Contact Us Now
            </Link>
          </motion.div>
        </div>
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
};
