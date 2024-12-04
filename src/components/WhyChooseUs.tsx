import React from 'react';
import { CheckCircle } from 'react-feather';

import image2 from "../assets/chosseUs.png"

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { title: 'Cutting-edge Technology', description: 'State-of-the-art equipment and solutions for optimal performance' },
    { title: '99.9% Uptime Guarantee', description: 'Ensuring your business stays connected around the clock' },
    { title: '24/7 Expert Support', description: 'Round-the-clock technical assistance from our skilled team' },
    { title: 'Tailored Solutions', description: 'Customized services to meet your unique business requirements' },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            src={image2}
            alt="Network Operations Center"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-fill shadow-lg"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#1e2d5f]">Why Choose Us?</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We are trusted experts in Network Security, LAN, WAN, ITeS, and IT consulting domains
              </p>
            </div>
            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-[#1e2d5f]">{reason.title}</h3>
                    <p className="text-gray-500">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

