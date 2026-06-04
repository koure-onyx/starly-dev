'use client';

import React, { useEffect, useState } from 'react';

interface TypewriterHeroProps {
  text?: string;
  delay?: number;
  speed?: number;
  onSequenceComplete?: () => void;
}

export default function TypewriterHero({
  text = 'Full-Stack Developer & AI Systems Architect',
  delay = 200,
  speed = 34,
  onSequenceComplete,
}: TypewriterHeroProps) {
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    let cancelled = false;
    let intervalId: number | undefined;

    const start = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        if (cancelled) return;

        index += 1;
        setTypedText(text.slice(0, index));

        if (index >= text.length) {
          if (intervalId) {
            window.clearInterval(intervalId);
          }
          setShowCursor(false);
          onSequenceComplete?.();
        }
      }, speed);
    }, delay);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
      if (intervalId) {
        window.clearInterval(intervalId);
      }
    };
  }, [delay, onSequenceComplete, speed, text]);

  return (
    <div className="mb-12">
      <p className="font-headline-md text-xl md:text-3xl text-on-surface-variant max-w-2xl mx-auto min-h-[1.6em]">
        {typedText}
        <span className={`terminal-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
      </p>
      <p className="mt-3 font-label-caps text-[10px] tracking-[0.22em] text-primary-fixed/80">
        Lahore, PK
      </p>
    </div>
  );
}
