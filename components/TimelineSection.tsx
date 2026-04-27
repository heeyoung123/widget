"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";

const services = [
  {
    id: "creation",
    code: "00-1",
    title: "AI 숏폼 자동 생성",
    description:
      "영상을 분석하여 가장 전달력 높은 콘텍스트 기반 CQAA 알고리즘으로 최적의 숏폼 클립을 자동 생성합니다.",
    includes: [
      "긴 영상 → 숏폼 클립 자동 생성",
      "전달력·조회수 최적화 알고리즘",
      "SNS 업로드·유통까지 워크플로우 단축",
      "Clipink 서비스 기반의 기술 확장성 확보",
    ],
  },
  {
    id: "distribution",
    code: "00-2",
    title: "캠페인 & 미디어 홍보",
    description:
      "캠페인 운영·홍보·전환 관리까지 가능한 미디어 마케팅 플랫폼을 제공합니다.",
    includes: [
      "캠페인 생성 / 운영 / 퍼포먼스 분석",
      "광고·홍보 효율 극대화",
      "브랜드-크리에이터-미디어 채널 연결",
      "콘텐츠 유통 중심의 생태계 구축",
    ],
  },
  {
    id: "ecosystem",
    code: "00-3",
    title: "미디어 소스 공유",
    description:
      "다양한 소스(영상, 이미지, 음원 등)를 기업·크리에이터·파트너가 안심하고 공유할 수 있도록 지원합니다.",
    includes: [
      "소스 데이터 저장/관리/공유",
      "캠페인을 통한 콘텐츠 확산",
      "필요 시 판매/라이선스 연동",
      "미디어 산업 개방형 허브 역할",
    ],
  },
];

const ease = [0.22, 1, 0.36, 1] as const;
const springSlow = { stiffness: 76, damping: 28, mass: 1.12 };

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const revealProgress = useSpring(
    useTransform(scrollYProgress, [0.04, 0.34], [0, 1]),
    springSlow
  );
  const leftOpacity = useTransform(revealProgress, [0, 1], [0.12, 1]);
  const leftY = useTransform(revealProgress, [0, 1], [28, 0]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [-8, 12]);
  const titleY = useTransform(scrollYProgress, [0, 1], [-4, 18]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  useEffect(() => {
    const nodes = sceneRefs.current.filter(
      (n): n is HTMLDivElement => n !== null
    );
    if (!nodes.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = Number(entry.target.getAttribute("data-step"));
          if (Number.isInteger(idx)) setActive(idx);
        });
      },
      { threshold: 0.66 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const progressPercent = ((active + 1) / services.length) * 100;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-[100svh] bg-black"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 z-20 flex h-[100svh] min-h-[100svh] items-center overflow-hidden">
        <div className="relative flex h-full w-full items-center px-6 md:px-12 lg:px-20">
          <div className="grid min-h-[calc(100svh-8rem)] w-full grid-cols-1 items-center gap-12 md:gap-16 lg:grid-cols-[0.9fr_1.35fr]">

            {/* ── LEFT: title + progress ── */}
            <motion.div className="flex flex-col justify-start self-start pt-[8svh] md:pt-[10svh]" style={{ opacity: leftOpacity, y: leftY }}>
              <motion.div
                style={{ y: badgeY }}
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.82, ease }}
                className="flex items-center gap-3 mb-2"
              >
                <span className="text-[11px] tracking-[0.28em] uppercase text-white/25 font-medium">
                  Our Services
                </span>
                <div className="w-6 h-px bg-white/15" />
              </motion.div>
              <motion.h2
                style={{ y: titleY }}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.92, ease, delay: 0.12 }}
                className="text-[5rem] font-black tracking-[-0.03em] text-white leading-[1.02]"
              >
                창작부터 유통까지,
                <br />
                <span className="text-white">하나의 생태계로</span>
              </motion.h2>
              <motion.p
                style={{ y: descY }}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.82, ease, delay: 0.24 }}
                className="mt-8 hidden max-w-[34rem] text-[clamp(1rem,1.25vw,1.35rem)] leading-relaxed text-zinc-400/90 md:block"
              >
                <span className="block">PMT의 세 가지 핵심 서비스가 유기적으로 연결되어</span>
                <span className="block">새로운 미디어 경험을 만듭니다.</span>
              </motion.p>

              {/* Progress + step labels */}
              <div className="mt-14 hidden md:flex items-start gap-7">
                {/* Vertical line */}
                <div className="relative w-[1px] self-stretch bg-white/10 flex-shrink-0">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-white"
                    animate={{ height: `${progressPercent}%` }}
                    transition={{ duration: 0.92, ease }}
                  />
                </div>

                {/* Step labels */}
                <div className="relative flex flex-col w-full">
                  {services.map((item, i) => (
                    <motion.div
                      key={item.id}
                      className="flex h-[58px] items-center gap-4 border-b last:border-0"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                      animate={{ opacity: i === active ? 1 : 0.28 }}
                      transition={{ duration: 0.68, ease }}
                    >
                      <span
                        style={{
                          fontSize: "12px",
                          fontFamily: "monospace",
                          letterSpacing: "0.12em",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        {item.code}
                      </span>
                      <span className="text-[1rem] font-medium text-white/80">
                        {item.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: accordion cards ── */}
            <div className="flex w-full flex-col justify-center">
              {services.map((item, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={item.id}
                    className="border-t last:border-b"
                    style={{ borderColor: "rgba(255,255,255,0.09)" }}
                  >
                    {/* Header row */}
                    <div className="flex items-center justify-between gap-7 py-[2.2rem] select-none">
                      <div className="flex min-w-0 items-center gap-7">
                        <motion.span
                          style={{ fontFamily: "monospace", fontSize: "13px", letterSpacing: "0.12em", flexShrink: 0 }}
                          animate={{
                            color: isActive
                              ? "rgba(255,255,255,0.6)"
                              : "rgba(255,255,255,0.22)",
                          }}
                          transition={{ duration: 0.62, ease }}
                        >
                          {item.code}
                        </motion.span>
                        <motion.h3
                          className="text-[clamp(1.45rem,2.6vw,3.1rem)] font-bold leading-[1.02] tracking-tight"
                          animate={{
                            color: isActive
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.3)",
                          }}
                          transition={{ duration: 0.68, ease }}
                        >
                          {item.title}
                        </motion.h3>
                      </div>

                      {/* Animated plus → cross */}
                      <motion.div
                        className="flex-shrink-0 flex items-center justify-center"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.62, ease }}
                      >
                        <motion.svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          animate={{
                            opacity: isActive ? 0.7 : 0.25,
                          }}
                          transition={{ duration: 0.62, ease }}
                        >
                          <path
                            d="M12 2v20M2 12h20"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>

                    {/* Expandable body */}
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={`body-${item.id}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.9, ease },
                            opacity: { duration: 0.52, delay: 0.12 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-12 pr-2 md:pr-16">
                            <p className="mb-8 max-w-[68rem] text-[clamp(0.95rem,1.12vw,1.18rem)] leading-relaxed text-zinc-300/82">
                              {item.description}
                            </p>
                            <p
                              style={{
                                fontSize: "10px",
                                fontWeight: 600,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)",
                                marginBottom: "10px",
                              }}
                            >
                              Includes
                            </p>
                            <div className="flex flex-col gap-2">
                              {item.includes.map((inc, j) => (
                                <motion.div
                                  key={inc}
                                  initial={{ opacity: 0, x: -6 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.56,
                                    delay: 0.24 + j * 0.1,
                                    ease,
                                  }}
                                  className="flex items-center gap-3"
                                >
                                  <span
                                    className="flex-shrink-0 rounded-full bg-white/45"
                                    style={{ width: 4, height: 4 }}
                                  />
                                  <span className="text-[clamp(0.9rem,1vw,1.05rem)] leading-relaxed text-zinc-200/78">
                                    {inc}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll spacers (one per service card) ── */}
      <div className="relative z-10">
        {services.map((item, index) => (
          <div
            key={`scene-${item.id}`}
            ref={(el) => {
              sceneRefs.current[index] = el;
            }}
            data-step={index}
            className="h-[135svh]"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
