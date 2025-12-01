import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[1000px] z-50">
      {({ open }) => (
        <>
          <div className="glass-panel rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300 hover:border-white/10">
            <div className="text-xl font-bold tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
                B
              </div>
              <span>ByteDevs</span>
            </div>
            
            <div className="hidden md:flex gap-1">
              {['Work', 'Services', 'Process', 'About'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-lg shadow-white/10">
                Start Project
              </a>

              <div className="flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden mt-2 glass-panel rounded-2xl overflow-hidden">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {['Work', 'Services', 'Process', 'About'].map((item) => (
                <Disclosure.Button 
                  key={item}
                  as="a" 
                  href={`#${item.toLowerCase()}`} 
                  className="block px-3 py-2 rounded-lg text-base font-medium text-zinc-400 hover:bg-white/5 hover:text-white"
                >
                  {item}
                </Disclosure.Button>
              ))}
              <div className="pt-4 pb-2">
                <a href="#contact" className="block w-full py-3 rounded-xl font-semibold bg-white text-black text-center">
                  Start Project
                </a>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
