import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction: React.FC = () => {
  const navigate = useNavigate();
  const handleContactSales = () => {
    navigate('/contact');
  }
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-[#1e2d5f] text-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Network?</h2>
            <p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get in touch with our experts for all your IT and telecommunication needs
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <button className="w-full inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-[#1e2d5f] shadow transition-colors hover:bg-gray-200" onClick={handleContactSales}>
              Contact Sales
            </button>
            <button className="w-full inline-flex h-10 items-center justify-center rounded-md border border-white px-8 text-sm font-medium text-white shadow transition-colors hover:bg-white/10" onClick={handleContactSales}>
              Request a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

