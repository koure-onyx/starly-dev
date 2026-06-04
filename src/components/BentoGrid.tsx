'use client';

import React from 'react';

export default function BentoGrid() {
  const cards = [
    {
      title: 'Import Core',
      desc: 'Pulled react-three-next boilerplate configurations directly into system environment layers.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 17V3" />
          <path d="m6 11 6 6 6-6" />
          <path d="M19 21H5" />
        </svg>
      ),
    },
    {
      title: 'Prompt Sync',
      desc: 'Described spatial simplex organisms, math structures, and high-frequency matrix logic smoothly.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        </svg>
      ),
    },
    {
      title: 'Deploy Engine',
      desc: 'Stitch transforms multi-layer component arrays into high-performance web spaces instantly.',
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="systems" className="relative z-10 mx-auto w-full max-w-[1120px] px-6 py-24 md:px-10 md:py-32">
      <div className="mb-16 text-center md:mb-20">
        <h2 className="mb-4 font-label-caps text-xs font-bold uppercase tracking-[0.3em] text-primary-fixed">
          Built with Google Stitch
        </h2>
        <p className="mx-auto max-w-2xl font-headline-md text-2xl leading-tight text-white/80 md:text-3xl">
          From external repository systems to living dynamic graphic interfaces.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative flex min-h-[260px] flex-col items-center overflow-hidden rounded-[1.5rem] border border-white/5 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-8 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#60ff99]/25 hover:bg-white/[0.04]"
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#60ff99]/50 to-transparent opacity-60" />
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#60ff99]/10 text-[#60ff99] ring-1 ring-[#60ff99]/15 transition-transform duration-300 group-hover:scale-105">
              {card.icon}
            </div>
            <h3 className="mb-4 font-label-caps text-xs font-bold uppercase tracking-[0.28em] text-white">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#b9cbb9]">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
