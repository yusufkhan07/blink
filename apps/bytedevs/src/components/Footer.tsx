import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-20 border-t border-white/5 bg-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
              Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">extraordinary.</span>
            </h2>
            <button className="px-8 py-4 rounded-full text-lg font-semibold bg-white text-black hover:bg-zinc-200 transition-colors">
              Start a Project
            </button>
          </div>
          
          <div className="mt-12 md:mt-0 flex flex-col items-start md:items-end gap-4">
            <a href="mailto:hello@bytedevs.com" className="text-2xl md:text-3xl font-medium hover:text-indigo-400 transition-colors">
              hello@bytedevs.com
            </a>
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-zinc-500 hover:text-white transition-colors uppercase tracking-wider text-sm font-medium">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-zinc-500 text-sm">
          <p>© 2024 ByteDevs Agency. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
