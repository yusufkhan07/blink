import React from 'react';

export const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into your vision, requirements, and business goals to create a strategic roadmap.',
    },
    {
      number: '02',
      title: 'Design & Build',
      description: 'Our team crafts pixel-perfect designs and robust code, keeping you in the loop with regular updates.',
    },
    {
      number: '03',
      title: 'Launch & Scale',
      description: 'We deploy your product with confidence and provide ongoing support to help you grow.',
    },
  ];

  return (
    <section id="process" className="container mx-auto px-8 py-32">
      <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center">How We Work</h2>
      
      <div className="grid md:grid-cols-3 gap-12 relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        {steps.map((step) => (
          <div key={step.number} className="relative pt-12">
            <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-6 h-6 rounded-full bg-zinc-950 border-4 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] z-10" />
            
            <div className="text-8xl font-bold text-white/5 absolute top-4 right-0 md:right-auto md:left-1/2 md:-translate-x-1/2 -z-10 select-none">
              {step.number}
            </div>
            
            <div className="md:text-center mt-8">
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
