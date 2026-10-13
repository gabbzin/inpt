"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const slides = [
  {
    image: "/images/bacia-amazonica.png",
    kicker: "PANORAMA NACIONAL & BIODIVERSIDADE FISCAL",
    title: "Planejar hoje o futuro tributário do Brasil",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function Hero() {
  const [index, setIndex] = useState(0);
  const go = (step: number) => setIndex((index + step + slides.length) % slides.length);
  const { image, kicker, title } = slides[index];

  return (
    <section className="relative h-[656px] overflow-hidden bg-ink">
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/65 to-ink/30" />
      <div className="absolute inset-x-0 bottom-28">
        <div className="wrap">
          <div className="flex max-w-4xl flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-6 bg-gold-soft" />
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-gold-soft">{kicker}</span>
            </div>
            <h1 className="font-serif text-4xl font-semibold leading-tight tracking-[-0.02em] text-white drop-shadow-[0_2px_1px_rgb(0_0_0/0.06)] md:text-[56px] md:leading-16">
              {title}
            </h1>
          </div>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-8">
        <div className="wrap flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-sm font-semibold tracking-[0.05em] text-gold-soft">
              {pad(index + 1)} / {pad(slides.length)}
            </span>
            <div className="flex items-center gap-2">
              {slides.map((slide, n) => (
                <button
                  key={slide.title}
                  type="button"
                  aria-label={`Ir para o slide ${n + 1}`}
                  onClick={() => setIndex(n)}
                  className="flex h-1 w-12 overflow-hidden rounded-full bg-white/30"
                >
                  {n === index && <span className="h-full w-full bg-gold" />}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Slide anterior"
              onClick={() => go(-1)}
              className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-[6px] transition-colors hover:bg-white/20"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              aria-label="Próximo slide"
              onClick={() => go(1)}
              className="flex size-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-[6px] transition-colors hover:bg-white/20"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
