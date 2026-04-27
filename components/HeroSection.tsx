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
        <div className="flex min-h-0 flex-1 flex-col items-center justify-start pb-[max(4rem,min(16vh,140px))] pt-[18vh] md:pb-[max(4.5rem,min(18vh,170px))] md:pt-[20vh]">
          <h1 className="hero-fade-in-delay-1 text-center text-[clamp(2.5rem,6.8vw,4.8rem)] font-black leading-[1.1] tracking-tight text-white [text-shadow:0_2px_40px_rgba(0,0,0,0.9)]">
            글로벌 미디어 생태계 구축을 위한
            <br />
            <span className="block text-[0.78em] font-semibold tracking-wide text-white md:text-[0.82em]">
              &apos;시각 지능 AI 모델&apos;
            </span>
          </h1>
          <div className="hero-fade-in-delay-2 mx-auto mt-8 max-w-lg px-2 text-center md:mt-10 md:max-w-xl">
            <p className="mb-2 text-base text-zinc-400 [text-shadow:0_2px_24px_rgba(0,0,0,0.85)] md:text-lg">
              PMT는 기술을 통해
            </p>
            <p className="text-sm leading-relaxed text-zinc-500 [text-shadow:0_2px_20px_rgba(0,0,0,0.8)] md:text-base">
              창작 · 유통 · 캠페인이 자연스럽게 이어지는
              <br className="hidden sm:block" />
              새로운 미디어 생태계를 만들어갑니다
            </p>
            <a
              href="https://clipink.ai/"
              target="_blank"
              rel="noreferrer"
              className="group mt-8 inline-flex items-center gap-4 border border-white/20 px-9 py-4 text-base font-semibold tracking-widest uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
            >
              지금 시작하기
              <span aria-hidden className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
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
