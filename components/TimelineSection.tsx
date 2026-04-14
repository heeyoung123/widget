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

export default function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const revealProgress = useSpring(
    useTransform(scrollYProgress, [0.05, 0.22], [0, 1]),
    { stiffness: 170, damping: 30, mass: 0.7 }
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
      { threshold: 0.55 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const progressPercent = ((active + 1) / services.length) * 100;

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative bg-black"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 z-20 h-[100svh] overflow-hidden flex items-center">
        <div className="relative w-full h-full mx-auto max-w-[1440px] px-6 md:px-16 flex items-center">
          <div className="grid w-full gap-10 md:gap-24 grid-cols-1 md:grid-cols-[4fr_8fr]">

            {/* ── LEFT: title + progress ── */}
            <motion.div className="flex flex-col justify-center" style={{ opacity: leftOpacity, y: leftY }}>
              <motion.p
                style={{ y: badgeY }}
                initial={{ opacity: 0, y: 22, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.45, ease }}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40 mb-5"
              >
                Our Services
              </motion.p>
              <motion.h2
                style={{ y: titleY }}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, ease, delay: 0.06 }}
                className="text-[clamp(2rem,4.2vw,3.4rem)] font-bold tracking-tight text-white leading-[1.06]"
              >
                창작부터 유통까지,
                <br />
                <span className="gradient-text-metal">하나의 생태계로</span>
              </motion.h2>
              <motion.p
                style={{ y: descY }}
                initial={{ opacity: 0, y: 18, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.42, ease, delay: 0.12 }}
                className="mt-5 text-[0.92rem] leading-relaxed text-zinc-400/90 max-w-[22rem] hidden md:block"
              >
                PMT의 세 가지 핵심 서비스가 유기적으로 연결되어 새로운 미디어 경험을 만듭니다.
              </motion.p>

              {/* Progress + step labels */}
              <div className="mt-9 hidden md:flex items-start gap-5">
                {/* Vertical line */}
                <div className="relative w-[1px] self-stretch bg-white/10 flex-shrink-0">
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-white"
                    animate={{ height: `${progressPercent}%` }}
                    transition={{ duration: 0.55, ease }}
                  />
                </div>

                {/* Step labels */}
                <div className="relative flex flex-col w-full">
                  {services.map((item, i) => (
                    <motion.div
                      key={item.id}
                      className="flex items-center gap-3 h-[44px] border-b last:border-0"
                      style={{ borderColor: "rgba(255,255,255,0.07)" }}
                      animate={{ opacity: i === active ? 1 : 0.28 }}
                      transition={{ duration: 0.35 }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontFamily: "monospace",
                          letterSpacing: "0.12em",
                          color: "rgba(255,255,255,0.55)",
                        }}
                      >
                        {item.code}
                      </span>
                      <span className="text-[0.82rem] text-white/80 font-medium">
                        {item.title}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT: accordion cards ── */}
            <div className="flex flex-col justify-center">
              {services.map((item, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={item.id}
                    className="border-t last:border-b"
                    style={{ borderColor: "rgba(255,255,255,0.09)" }}
                  >
                    {/* Header row */}
                    <div className="flex items-center justify-between py-[1.35rem] gap-6 select-none">
                      <div className="flex items-center gap-6 min-w-0">
                        <motion.span
                          style={{ fontFamily: "monospace", fontSize: "11px", letterSpacing: "0.12em", flexShrink: 0 }}
                          animate={{
                            color: isActive
                              ? "rgba(255,255,255,0.6)"
                              : "rgba(255,255,255,0.22)",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.code}
                        </motion.span>
                        <motion.h3
                          className="text-[clamp(1.35rem,2.7vw,2.1rem)] font-semibold leading-tight tracking-tight truncate"
                          animate={{
                            color: isActive
                              ? "rgba(255,255,255,1)"
                              : "rgba(255,255,255,0.3)",
                          }}
                          transition={{ duration: 0.35 }}
                        >
                          {item.title}
                        </motion.h3>
                      </div>

                      {/* Animated plus → cross */}
                      <motion.div
                        className="flex-shrink-0 flex items-center justify-center"
                        animate={{ rotate: isActive ? 45 : 0 }}
                        transition={{ duration: 0.3, ease }}
                      >
                        <motion.svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          animate={{
                            opacity: isActive ? 0.7 : 0.25,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            d="M7.5 1v13M1 7.5h13"
                            stroke="white"
                            strokeWidth="1.4"
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
                            height: { duration: 0.48, ease },
                            opacity: { duration: 0.28, delay: 0.08 },
                          }}
                          className="overflow-hidden"
                        >
                          <div className="pb-9 pr-2 md:pr-12">
                            <p className="text-[1.08rem] leading-relaxed text-zinc-300/82 mb-7 max-w-[48rem]">
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
                                    duration: 0.3,
                                    delay: 0.14 + j * 0.065,
                                    ease,
                                  }}
                                  className="flex items-center gap-3"
                                >
                                  <span
                                    className="flex-shrink-0 rounded-full bg-white/45"
                                    style={{ width: 4, height: 4 }}
                                  />
                                  <span className="text-[1rem] text-zinc-200/78 leading-relaxed">
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
            className="h-[100svh]"
            aria-hidden="true"
          />
        ))}
      </div>
    </section>
  );
}
