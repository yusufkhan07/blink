import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export const Contact = () => {
  return (
    <section id="contact" className="container mx-auto px-8 py-32 relative">
      <div className="glass-panel rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold mb-8 tracking-tight">
            Ready to launch your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              next project?
            </span>
          </h2>
          
          <p className="text-xl text-zinc-300 mb-4 max-w-2xl mx-auto">
            Let's discuss how we can help you build something extraordinary.
          </p>
          <p className="text-indigo-400 font-medium mb-12">
            Free introductory call to discuss your needs.
          </p>

          <div className="flex flex-col items-center gap-8">
            <div className="glass-panel px-8 py-4 rounded-full flex items-center gap-4 hover:bg-white/5 transition-colors group cursor-pointer" onClick={() => navigator.clipboard.writeText('hello@bytedevs.com')}>
              <EnvelopeIcon className="w-6 h-6 text-indigo-400" />
              <span className="text-xl md:text-2xl font-medium text-white">hello@bytedevs.com</span>
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity">Copy</span>
            </div>

            <a 
              href="mailto:hello@bytedevs.com" 
              className="px-10 py-4 rounded-full font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Send us an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
