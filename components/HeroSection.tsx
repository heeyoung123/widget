"use client";

import dynamic from "next/dynamic";

const HeroGlobe = dynamic(() => import("@/components/HeroGlobe"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-black" aria-hidden />,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] overflow-x-hidden bg-black">
      <div className="absolute bottom-0 left-0 right-0 z-0 h-[min(50vh,520px)] w-full min-h-[360px] md:h-[min(54vh,580px)] md:min-h-[400px]">
        <div className="absolute inset-x-[-12%] bottom-0 top-0 overflow-hidden md:inset-x-[-14%]">
          <HeroGlobe />
        </div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-28 bg-gradient-to-b from-black via-black/75 to-transparent md:h-36"
          aria-hidden
        />
      </div>

      <div className="relative z-20 flex min-h-[100dvh] flex-col px-6 pb-10">
        <header className="shrink-0 pt-[max(0.5rem,calc(env(safe-area-inset-top,0px)+4.5rem))] text-center md:pt-[max(0.75rem,calc(env(safe-area-inset-top,0px)+5rem))]">
          <div className="hero-fade-in inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.32em] text-white/55 md:text-[11px]">
            <span className="h-1 w-1 rounded-full bg-white/40" />
            Polestar Media Tech
          </div>
        </header>

        <div className="flex min-h-0 flex-1 -translate-y-10 flex-col items-center justify-center pb-[max(4.5rem,min(18vh,160px))] pt-6 md:-translate-y-16 md:pb-[max(5rem,min(22vh,200px))] md:pt-10">
          <h1 className="hero-fade-in-delay-1 text-center text-[clamp(2.25rem,7vw,4.75rem)] font-bold leading-[1.06] tracking-tight text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.9)]">
            누구나 즐겁게
            <br />
            <span className="text-white">
              창조하고 연결되는
            </span>
            <br />
            <span className="mt-1 block text-[0.42em] font-extralight tracking-wide text-white md:text-[0.45em]">
              미디어 세상
            </span>
          </h1>
          <div className="hero-fade-in-delay-2 mx-auto mt-6 max-w-lg px-2 text-center md:mt-8 md:max-w-xl">
            <p className="mb-2 text-base text-zinc-400 [text-shadow:0_2px_24px_rgba(0,0,0,0.85)] md:text-lg">
              PMT는 기술을 통해
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 [text-shadow:0_2px_20px_rgba(0,0,0,0.8)] md:text-base">
              창작 · 유통 · 캠페인이 자연스럽게 이어지는
              <br className="hidden sm:block" />
              새로운 미디어 생태계를 만들어갑니다
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 animate-bounce-slow">
        <span className="text-[10px] tracking-[0.35em] uppercase">scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-zinc-600 to-transparent" />
      </div>
    </section>
  );
}
