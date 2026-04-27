"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import gsap from "gsap";

const MetalText3D = dynamic(() => import("./MetalText3D"), { ssr: false });

const reasons = [
  {
    number: "01",
    title: "숙련된 전문가 그룹",
    description:
      "미디어·AI·데이터·플랫폼 분야의 전문 인력이 프로젝트 전체를 책임집니다. 단순 외주가 아닌 파트너로서 함께 성장합니다.",
    tag: "TEAM",
  },
  {
    number: "02",
    title: "고객 맞춤형 설계 능력",
    description:
      "각 산업과 브랜드의 목적에 맞춰 완전히 커스터마이징된 솔루션을 제공합니다. 템플릿이 아닌, 진짜 맞춤 전략입니다.",
    tag: "STRATEGY",
  },
  {
    number: "03",
    title: "지속적인 기술 확장성",
    description:
      "클라우드, 빅데이터, AI 등 변화하는 기술 트렌드를 지속적으로 연구하여 미래에도 유효한 결과물을 만들어냅니다.",
    tag: "TECHNOLOGY",
  },
];

const METAL_TEXT_END_S = 0.9 + 1.25 + 0.18;

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const divider = card.querySelector(".divider-line") as HTMLElement;
      const inner = card.querySelector(".card-inner") as HTMLElement;
      if (inner) {
        gsap.set(inner, {
          opacity: 0,
          y: 56,
          visibility: "hidden",
        });
      }
      if (divider) {
        gsap.set(divider, { scaleX: 0, transformOrigin: "left center" });
      }
    });
  }, []);

  useEffect(() => {
    if (!triggered) return;

    const timer = window.setTimeout(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        const divider = card.querySelector(".divider-line") as HTMLElement;
        const inner = card.querySelector(".card-inner") as HTMLElement;
        const stagger = i * 0.34;

        if (inner) {
          gsap.set(inner, { visibility: "visible" });
          gsap.fromTo(
            inner,
            { opacity: 0, y: 56 },
            {
              opacity: 1,
              y: 0,
              duration: 1.35,
              ease: "power4.out",
              delay: stagger,
            }
          );
        }
        if (divider) {
          gsap.to(divider, {
            scaleX: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: stagger,
          });
        }
      });
    }, METAL_TEXT_END_S * 1000);

    return () => window.clearTimeout(timer);
  }, [triggered]);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative bg-black pt-28 pb-32 px-8 md:px-14 overflow-hidden"
    >
      <div id="why-choose-us" className="scroll-mt-24 flex items-center gap-3 mb-10">
        <span className="text-[11px] tracking-[0.28em] uppercase text-white/25 font-medium">
          Why Choose Us
        </span>
        <div className="w-6 h-px bg-white/15" />
      </div>

      <div className="mb-16 -mx-8 md:-mx-14">
        <MetalText3D triggered={triggered} />
      </div>

      <div className="max-w-6xl mx-auto">
        {reasons.map((r, i) => (
          <div
            key={r.number}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="relative"
          >
            <div className="divider-line h-px bg-white/12 origin-left" />
            <div className="card-inner grid grid-cols-12 gap-6 py-12 md:py-14 will-change-transform">
              <div className="col-span-2 md:col-span-1">
                <span className="text-[11px] tracking-[0.22em] text-white/25 font-medium">{r.number}</span>
              </div>
              <div className="hidden md:flex col-span-2 items-start pt-1">
                <span className="text-[10px] tracking-[0.28em] uppercase text-white/30 border border-white/10 px-2.5 py-1 rounded-sm">
                  {r.tag}
                </span>
              </div>
              <div className="col-span-10 md:col-span-4">
                <h3
                  className="text-white font-bold tracking-tight leading-tight"
                  style={{ fontSize: "clamp(20px, 2.6vw, 36px)" }}
                >
                  {r.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-start">
                <p className="text-white/40 text-sm md:text-base leading-relaxed">{r.description}</p>
              </div>
            </div>
          </div>
        ))}

        <div className="h-px bg-white/12" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-12">
          <p className="text-white/30 text-sm tracking-wide">PMT와 함께 미디어 비즈니스를 혁신하세요</p>
          <button className="group flex items-center gap-3 text-sm font-semibold tracking-widest uppercase text-white border border-white/20 px-7 py-3.5 hover:bg-white hover:text-black transition-all duration-300">
            지금 시작하기
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
