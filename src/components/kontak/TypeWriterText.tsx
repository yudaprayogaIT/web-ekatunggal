"use client";

import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;        // ms per karakter
  resetDelay?: number;   // ms jeda sebelum ulang
  loop?: boolean;
  onComplete?: () => void;
  className?: string;
}

export default function TypewriterText({
  text,
  speed = 50,
  resetDelay = 1500,
  loop = false,
  onComplete,
  className = "",
}: TypewriterTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let cancelled = false;

    // helper delay
    const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

    const run = async () => {
      // ketik satu per satu
      for (let i = 1; i <= text.length; i++) {
        if (cancelled) return;
        setDisplayed(text.slice(0, i));
        await wait(speed);
      }

      onComplete?.();

      if (loop) {
        // tunggu sebelum reset
        await wait(resetDelay);
        if (cancelled) return;
        setDisplayed("");       // reset
        run();                  // ulangi
      }
    };

    run();

    return () => {
      cancelled = true;
    };
  }, [text, speed, resetDelay, loop, onComplete]);

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block animate-pulse">|</span>
    </span>
  );
}
