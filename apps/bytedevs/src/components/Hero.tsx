import React from 'react';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center relative overflow-hidden pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-8 relative z-10 animate-fade-in">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
          <span className="text-sm font-medium text-zinc-300">Accepting new projects for Q4</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-[0.9]">
          We craft <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 text-glow">
            digital magic.
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          ByteDevs is a premium web development agency transforming ambitious ideas into <span className="text-white font-medium">stunning, high-performance</span> digital experiences.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="group relative px-8 py-4 rounded-full font-semibold bg-white text-black shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)] transition-all hover:-translate-y-1">
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-10 transition-opacity" />
          </button>
          
          <button className="px-8 py-4 rounded-full font-semibold text-zinc-300 hover:text-white transition-colors flex items-center gap-2 group">
            Our Services
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};
