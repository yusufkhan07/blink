import React from 'react';

export const About = () => {
  return (
    <section id="about" className="container mx-auto px-8 py-32">
      <div className="glass-panel rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2" />
        
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-12 leading-tight">
            Global talent, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              unified excellence.
            </span>
          </h2>
          
          <div className="space-y-8 text-lg md:text-xl text-zinc-300 leading-relaxed">
            <p>
              We are a team of passionate developers based in <span className="text-white font-semibold">Montreal, Quebec</span> with a dedicated offshore team in <span className="text-white font-semibold">Pakistan</span>.
            </p>
            <p>
              With over <span className="text-white font-semibold">7 years of experience</span> building SaaS products, we bridge the gap between visionary ideas and technical reality. Our distributed model allows us to deliver premium quality with exceptional efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/10">
            <div>
              <div className="text-4xl font-bold text-white mb-2">7+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Years Exp.</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">8+</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">2</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Continents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
