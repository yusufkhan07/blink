import React from 'react';
import { ComputerDesktopIcon, DevicePhoneMobileIcon, CloudIcon } from '@heroicons/react/24/outline';

export const Services = () => {
  const services = [
    {
      title: 'Web Applications',
      description: 'Scalable, high-performance web apps built with React, Next.js, and modern architectural patterns.',
      icon: ComputerDesktopIcon,
    },
    {
      title: 'Mobile Development',
      description: 'Native-like experiences for iOS and Android using React Native and cross-platform technologies.',
      icon: DevicePhoneMobileIcon,
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure, serverless infrastructure on AWS and Google Cloud to ensure your product scales effortlessly.',
      icon: CloudIcon,
    },
  ];

  return (
    <section id="services" className="container mx-auto px-8 py-32 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Expertise</h2>
        <p className="text-zinc-400 text-lg">
          We specialize in building digital products that drive growth and user engagement.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div key={service.title} className="glass-panel p-8 rounded-3xl hover:bg-white/5 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <service.icon className="w-7 h-7 text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
