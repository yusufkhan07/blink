import React from 'react';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

export const ProjectCard = () => {
  return (
    <section id="work" className="container mx-auto px-8 py-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Selected Work</h2>
          <p className="text-zinc-400 text-lg">Showcasing our finest digital craftsmanship.</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Main Featured Card - Blink App */}
        <div className="md:col-span-8 group relative rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 hover:border-white/10 transition-all">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="p-8 md:p-12 h-full flex flex-col justify-between relative z-10">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 border border-indigo-500/20">
                  SaaS Product
                </span>
                <span className="text-zinc-500 text-sm">2025</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-bold mb-4 group-hover:text-indigo-200 transition-colors">Blink Slack App</h3>
              <p className="text-zinc-400 text-lg max-w-xl">
                Enterprise-grade disappearing messages for Slack. Built with Serverless architecture on AWS, handling millions of secure messages.
              </p>
            </div>

            <div className="relative h-[300px] md:h-[400px] w-full rounded-xl overflow-hidden bg-zinc-950 border border-white/10 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500">
              {/* Mock UI */}
              <div className="absolute top-0 left-0 right-0 h-10 bg-zinc-900 border-b border-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
              </div>
              <div className="mt-14 px-8">
                <div className="flex gap-4 mb-6">
                  <div className="w-10 h-10 rounded bg-indigo-500/20 flex-shrink-0" />
                  <div className="space-y-2 w-full">
                    <div className="h-4 w-1/4 bg-zinc-800 rounded" />
                    <div className="h-16 w-3/4 bg-zinc-800/50 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl" />
                  </div>
                </div>
                <div className="flex gap-4 flex-row-reverse">
                  <div className="w-10 h-10 rounded bg-purple-500/20 flex-shrink-0" />
                  <div className="space-y-2 w-full flex flex-col items-end">
                    <div className="h-4 w-1/4 bg-zinc-800 rounded" />
                    <div className="h-10 w-1/2 bg-indigo-600/20 border border-indigo-500/30 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl flex items-center px-4 text-indigo-200 text-sm">
                      This message will self-destruct... 💥
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary Card - Tech Stack */}
        <div className="md:col-span-4 flex flex-col gap-8">
          <div className="flex-1 rounded-3xl bg-zinc-900 border border-white/5 p-8 hover:border-white/10 transition-all group">
            <h4 className="text-xl font-bold mb-6 text-zinc-300">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'AWS Lambda', 'DynamoDB', 'Tailwind', 'Next.js'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-400 group-hover:border-white/10 group-hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a 
            href="https://blink.bytedevs.com" 
            target="_blank" 
            rel="noreferrer"
            className="flex-1 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-700 p-8 flex flex-col justify-center items-center text-center group cursor-pointer hover:scale-[1.02] transition-transform shadow-xl dark:shadow-none"
          >
            <h4 className="text-2xl font-bold mb-2 text-white">View Live Project</h4>
            <p className="text-indigo-100 mb-6">Experience Blink in action</p>
            <div className="w-12 h-12 rounded-full bg-white text-indigo-600 flex items-center justify-center group-hover:rotate-45 transition-transform">
              <ArrowUpRightIcon className="w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
