'use client';

import React, { useCallback, useEffect, useState } from 'react';
import ThreeCanvas from '../components/ThreeCanva';
import TypewriterHero from '../components/TypeWriterHero';
import BentoGrid from '../components/BentoGrid';

export default function Home() {
  const [showRest, setShowRest] = useState(false);
  const handleSequenceComplete = useCallback(() => {
    setShowRest(true);
  }, []);

  useEffect(() => {
    const handleMagneticMove = (e: MouseEvent) => {
      const wrappers = document.querySelectorAll<HTMLElement>('.magnetic-wrap');

      wrappers.forEach((wrap) => {
        const rect = wrap.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

        if (distance < 90) {
          wrap.style.transform = `translate(${distanceX * 0.2}px, ${distanceY * 0.2}px)`;
        } else {
          wrap.style.transform = 'translate(0px, 0px)';
        }
      });
    };

    window.addEventListener('mousemove', handleMagneticMove);
    return () => window.removeEventListener('mousemove', handleMagneticMove);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#08080c] text-[#e5e1e5] antialiased">
      <ThreeCanvas />

      <div className="pointer-events-none fixed left-[-10%] top-[-10%] h-[40vw] w-[40vw] rounded-full bg-[#60ff99]/5 blur-[150px] ambient-orb" />
      <div className="pointer-events-none fixed bottom-[-10%] left-[-10%] h-[50vw] w-[50vw] rounded-full bg-[#dab9ff]/5 blur-[180px] ambient-orb-delayed" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="starly-glass fixed top-0 z-50 w-full border-b border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 py-6 md:px-10">
            <a
              href="#top"
              className="font-display-lg text-[32px] tracking-tighter text-[#e5e1e5] transition-colors hover:text-[#60ff99]"
            >
              STARLY
            </a>

            <div className="hidden items-center gap-8 md:flex">
              <a className="font-label-caps text-[12px] tracking-[0.18em] text-[#60ff99]" href="#systems">
                Systems
              </a>
              <a className="font-label-caps text-[12px] tracking-[0.18em] text-[#b9cbb9] transition-colors hover:text-[#60ff99]" href="#protocols">
                Protocols
              </a>
              <a className="font-label-caps text-[12px] tracking-[0.18em] text-[#b9cbb9] transition-colors hover:text-[#60ff99]" href="#archive">
                Archive
              </a>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
              <button
                aria-label="Open terminal"
                className="text-[#b9cbb9] transition-colors hover:text-[#60ff99]"
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.75"
                  viewBox="0 0 24 24"
                >
                  <path d="m4 6 8 6-8 6" />
                  <path d="M12 18h8" />
                </svg>
              </button>
              <button className="glow-hover rounded-full bg-[#60ff99] px-6 py-2 font-label-caps text-[12px] tracking-[0.18em] text-[#00210c]">
                Initialize
              </button>
            </div>
          </div>
        </nav>

        <main id="top" className="relative mx-auto flex min-h-screen w-full max-w-[1280px] flex-col items-center justify-center px-6 pb-24 pt-32 text-center md:px-10">
          <div
            className={`mb-8 transition-all duration-700 ${showRest ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          >
            <div className="inline-flex items-center gap-4 rounded-lg border border-[#849585]/20 bg-[#1c1b1e]/60 px-4 py-2 font-label-caps text-[10px] tracking-[0.2em] text-[#60ff99] backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="status-pulse absolute inline-flex h-full w-full rounded-full bg-[#60ff99] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#60ff99]" />
              </span>
              SYSTEM STATUS: ONLINE <span className="text-[#b9cbb9]">{'//'}</span> KERNEL: V1.4.2
            </div>
          </div>

          <h1 className="mb-6 font-display-lg text-[64px] leading-[0.9] tracking-tighter text-[#e5e1e5] md:text-[120px]">
            STARLY
          </h1>

          <TypewriterHero onSequenceComplete={handleSequenceComplete} />

          <div
            className={`max-w-2xl transition-all duration-1000 ${
              showRest ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <p className="mx-auto mb-12 font-headline-md text-2xl leading-tight text-[#b9cbb9] md:text-3xl">
              Architecting AI-native systems, motion-rich interfaces, and spatial product experiences.
            </p>

            <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="magnetic-wrap">
                <button className="glow-hover rounded-full bg-[#60ff99] px-10 py-5 font-label-caps text-[12px] tracking-[0.18em] text-[#00210c]">
                  Launch Project
                </button>
              </div>

              <div className="magnetic-wrap">
                <button className="lattice-border rounded-full px-10 py-5 font-label-caps text-[12px] tracking-[0.18em] text-[#e5e1e5] transition-colors duration-300 hover:bg-white/5">
                  View Architecture
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-4">
            <span className="font-label-caps text-[10px] tracking-[0.3em] text-[#b9cbb9]">DESCEND</span>
            <div className="h-12 w-px bg-gradient-to-b from-[#60ff99] to-transparent" />
          </div>
        </main>

        <section className="relative mx-auto grid w-full max-w-[1280px] gap-10 px-6 pb-20 md:px-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <BentoGrid />

          <aside className="hidden h-fit flex-col rounded-2xl border border-white/5 bg-[#08080c]/40 p-6 backdrop-blur-xl xl:flex">
            <div className="mb-6 flex items-center gap-4">
              <div
                aria-label="Architect"
                className="h-12 w-12 overflow-hidden rounded-full bg-cover bg-center grayscale brightness-75"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBZYgzagmbqSPYxAmwy7ifdbTQFuZTkdIjP_tjRk7qXNR-FcYfRrIKu0HQjUQ7_dTYhMht6nd1L-qShiMDkslHPeEPFn0UL7DK0o001CIfrfttwup-XamYvOM_rug-IJZ1pFhdzTZJHKdDmjj450ldq2AsROEYIp6hUoVTfere2qQ0QSlXytJs7actAhV-e4XZ9VocPPDkS5_8HUIwfQ-2Bqqxr0CI6sJCdZUmBseM5daQmNkRBgnB3CbqVkGL0tldkBD8QJcKbYml3")',
                }}
              />
              <div>
                <h4 className="font-label-caps text-xs font-bold text-[#e5e1e5]">Architect</h4>
                <p className="font-label-caps text-[10px] text-[#60ff99]">0x2A4F</p>
              </div>
            </div>

            <div className="space-y-2 font-label-caps text-xs">
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-[#b9cbb9]">Neural Connect</span>
                <span className="text-[#60ff99]">99%</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-1">
                <span className="text-[#b9cbb9]">Latency</span>
                <span className="text-[#dab9ff]">0.04ms</span>
              </div>
              <div className="flex justify-between pb-1">
                <span className="text-[#b9cbb9]">Uptime</span>
                <span className="text-[#60ff99]">Stable</span>
              </div>
            </div>
          </aside>
        </section>

        <section id="protocols" className="relative z-10">
          <div className="mx-auto max-w-[960px] px-6 md:px-10">
            <div className="grid gap-6 rounded-3xl border border-white/5 bg-white/[0.015] p-6 md:grid-cols-2 md:justify-center">
              <div className="rounded-2xl border border-white/5 bg-[#1c1b1e]/50 p-6 text-left backdrop-blur-md">
                <div className="mb-3 font-label-caps text-[10px] tracking-[0.22em] text-[#60ff99]">Protocol 01</div>
                <h3 className="mb-3 font-headline-md text-2xl text-[#e5e1e5]">Spatial systems that breathe</h3>
                <p className="text-sm leading-relaxed text-[#b9cbb9]">
                  Motion, glass, and depth combine to keep the interface alive without sacrificing clarity.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-[#1c1b1e]/50 p-6 text-left backdrop-blur-md">
                <div className="mb-3 font-label-caps text-[10px] tracking-[0.22em] text-[#60ff99]">Protocol 02</div>
                <h3 className="mb-3 font-headline-md text-2xl text-[#e5e1e5]">Fast systems, intentional pacing</h3>
                <p className="text-sm leading-relaxed text-[#b9cbb9]">
                  The page reveals its hierarchy in layers so the experience feels deliberate and premium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer id="archive" className="mt-auto w-full border-t border-white/5 bg-[#08080c]/80 py-12 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-6 px-6 font-label-caps text-xs md:flex-row md:px-10">
            <div className="text-[#b9cbb9]">© 2024 STARLY SYSTEMS.</div>
            <div className="flex gap-12 text-[#b9cbb9]">
              <a className="transition-colors hover:text-[#60ff99]" href="#">
                GITHUB
              </a>
              <a className="transition-colors hover:text-[#60ff99]" href="#">
                LINKEDIN
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
