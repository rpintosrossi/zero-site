"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-sticky-progress";
import { RUBROS } from "@/lib/rubros";

const WORDS = [...RUBROS, "Todos"] as const;

export function RubroCycle() {
  const reduced = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const last = index === WORDS.length - 1;

  useEffect(() => {
    if (reduced) return;
    const id = window.setTimeout(() => {
      setIndex((n) => (n + 1) % WORDS.length);
    }, last ? 3400 : 2000);
    return () => window.clearTimeout(id);
  }, [reduced, index, last]);

  return (
    <h1 className="max-w-xl text-[2.75rem] font-semibold leading-[1.06] tracking-tight sm:text-[4.25rem]">
      <span className="block text-white">Sistemas para</span>
      <span className="relative mt-1 block h-[1.12em] text-blue">
        <span className="invisible whitespace-nowrap" aria-hidden>
          Distribuidora
        </span>
        {reduced ? (
          <span className="absolute left-0 top-0">Todos</span>
        ) : (
          WORDS.map((word, i) => (
            <span
              key={word}
              className="absolute left-0 top-0 whitespace-nowrap transition-all duration-500 ease-out"
              style={{
                opacity: i === index ? 1 : 0,
                transform: i === index ? "translateY(0)" : "translateY(12px)",
              }}
            >
              {word}
            </span>
          ))
        )}
      </span>
    </h1>
  );
}
