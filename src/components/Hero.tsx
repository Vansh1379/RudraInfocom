import React from 'react';
import wifi from "../assets/image.png"
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate('/contact');
  }

  const handleFeature = () => {
    navigate("/features");
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1e2d5f] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                IT & TELECOMMUNICATION SERVICE AND SOLUTIONS
              </h1>
              <p className="max-w-[600px] text-gray-200 md:text-xl">
                Providing secure, reliable and high-quality converged telecommunication services for accelerated inclusive development.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button onClick={handleContact} className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#1e2d5f] shadow transition-colors hover:bg-gray-200">
                Get Started
              </button>
              <button onClick={handleFeature} className="inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
          <img
            src={wifi}
            alt="Network Infrastructure"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-fill dow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

