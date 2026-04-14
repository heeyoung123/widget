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

export default function EcosystemSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const sceneRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevActiveRef = useRef(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const revealProgress = useSpring(
    useTransform(scrollYProgress, [0.02, 0.23], [0, 1]),
    { stiffness: 140, damping: 24, mass: 0.78 }
  );
  const badgeY = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  const titleY = useTransform(scrollYProgress, [0, 1], [-8, 22]);
  const descY = useTransform(scrollYProgress, [0, 1], [0, 26]);
  const sectionOpacity = useTransform(revealProgress, [0, 1], [0, 1]);
  const sectionY = useTransform(revealProgress, [0, 1], [108, 0]);
  const sectionScale = useTransform(revealProgress, [0, 1], [0.935, 1]);
  const sectionBlur = useTransform(revealProgress, [0, 1], ["18px", "0px"]);
  const headerRevealY = useTransform(revealProgress, [0, 1], [-36, 0]);
  const contentRevealY = useTransform(revealProgress, [0, 1], [54, 0]);
  const headerOpacity = useTransform(revealProgress, [0, 1], [0.2, 1]);
  const contentOpacity = useTransform(revealProgress, [0, 1], [0.08, 1]);

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
          if (!Number.isInteger(idx) || idx === prevActiveRef.current) return;
          setDirection(idx > prevActiveRef.current ? 1 : -1);
          prevActiveRef.current = idx;
          setActive(idx);
        });
      },
      { threshold: 0.55 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ecosystem" ref={sectionRef} className="relative bg-black">
      <motion.div
        className="sticky top-0 z-20 h-[100svh] overflow-hidden flex items-center"
        style={{
          opacity: sectionOpacity,
          y: sectionY,
          scale: sectionScale,
          filter: sectionBlur,
          willChange: "transform, opacity, filter",
        }}
      >
        <div className="relative w-full h-full mx-auto max-w-[1440px] px-6 md:px-16 flex items-center justify-center">
          <div className="grid w-full max-w-[1080px] gap-10 md:gap-16 grid-cols-1">
            <motion.div className="flex flex-col justify-center items-center text-center" style={{ y: headerRevealY, opacity: headerOpacity }}>
              <motion.p
                style={{ y: badgeY }}
                className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40 mb-5"
              >
                Our Ecosystem
              </motion.p>
              <motion.h2
                style={{ y: titleY }}
                className="text-[clamp(2rem,4.2vw,3.4rem)] font-bold tracking-tight text-white leading-[1.06] break-keep"
              >
                <span className="block">창작부터 유통까지,</span>
                <span className="gradient-text-metal block">하나의 생태계로</span>
              </motion.h2>
              <motion.p
                style={{ y: descY }}
                className="mt-5 text-[0.92rem] leading-relaxed text-zinc-400/90 max-w-[30rem] hidden md:block break-keep mx-auto"
              >
                PMT의 세 가지 핵심 서비스가 유기적으로 연결되어 새로운 미디어 경험을 만듭니다.
              </motion.p>

            </motion.div>

            <motion.div
              className="relative flex flex-col justify-center w-full max-w-[980px] mx-auto border-x px-6 md:px-12 py-3 md:py-4"
              style={{
                perspective: 1200,
                y: contentRevealY,
                opacity: contentOpacity,
                borderColor: "rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.01)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {services.map((item, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={item.id}
                    className="border-t last:border-b"
                    style={{ borderColor: "rgba(255,255,255,0.1)" }}
                  >
                    <motion.div
                      className="flex items-center justify-between py-[1.6rem] gap-7 select-none"
                      animate={{
                        x: isActive ? 0 : -4,
                        scale: isActive ? 1 : 0.995,
                        opacity: isActive ? 1 : 0.74,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 360,
                        damping: 30,
                        mass: 0.85,
                      }}
                    >
                      <div className="flex items-center gap-6 min-w-0">
                        <motion.span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "13px",
                            letterSpacing: "0.16em",
                            flexShrink: 0,
                          }}
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
                          className="text-[clamp(1.7rem,3.3vw,2.8rem)] font-bold leading-[1.05] tracking-tight break-keep"
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

                      <motion.div
                        className="flex-shrink-0 flex items-center justify-center"
                        animate={{
                          rotate: isActive ? 45 : 0,
                          scale: isActive ? 1.03 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 520,
                          damping: 28,
                          mass: 0.7,
                        }}
                      >
                        <motion.svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          animate={{ opacity: isActive ? 0.7 : 0.25 }}
                          transition={{ duration: 0.3 }}
                        >
                          <path
                            d="M11 1.8v18.4M1.8 11h18.4"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                          />
                        </motion.svg>
                      </motion.div>
                    </motion.div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          key={`body-${item.id}`}
                          initial={{
                            height: 0,
                            opacity: 0,
                            y: direction > 0 ? 22 : -22,
                            filter: "blur(6px)",
                            scale: 0.98,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                            scale: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            y: direction > 0 ? -14 : 14,
                            filter: "blur(4px)",
                            scale: 0.99,
                          }}
                          transition={{
                            height: { duration: 0.42, ease },
                            opacity: { duration: 0.24, delay: 0.02 },
                            y: { duration: 0.36, ease },
                            filter: { duration: 0.28 },
                            scale: { duration: 0.36, ease },
                          }}
                          className="overflow-hidden origin-top"
                        >
                          <div className="pb-11 pr-2 md:pr-12">
                            <motion.p
                              className="text-[1.2rem] leading-[1.75] text-zinc-200/85 mb-8 max-w-[58rem]"
                              initial={{ opacity: 0, y: 14, filter: "blur(3px)" }}
                              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                              transition={{ duration: 0.32, ease, delay: 0.08 }}
                            >
                              {item.description}
                            </motion.p>
                            <motion.p
                              style={{
                                fontSize: "11px",
                                fontWeight: 600,
                                letterSpacing: "0.24em",
                                textTransform: "uppercase",
                                color: "rgba(255,255,255,0.35)",
                                marginBottom: "12px",
                              }}
                              initial={{ opacity: 0, y: 10, letterSpacing: "0.26em" }}
                              animate={{ opacity: 1, y: 0, letterSpacing: "0.22em" }}
                              transition={{ duration: 0.28, ease, delay: 0.12 }}
                            >
                              Includes
                            </motion.p>
                            <div className="flex flex-col gap-3">
                              {item.includes.map((inc, j) => (
                                <motion.div
                                  key={inc}
                                  initial={{
                                    opacity: 0,
                                    x: -14,
                                    y: 4,
                                    scale: 0.98,
                                    filter: "blur(2px)",
                                  }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                    y: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                  }}
                                  transition={{
                                    duration: 0.26,
                                    ease,
                                    delay: 0.16 + j * 0.05,
                                  }}
                                  className="flex items-center gap-3"
                                >
                                  <span
                                    className="flex-shrink-0 rounded-full bg-white/45"
                                    style={{ width: 4, height: 4 }}
                                  />
                                  <span className="text-[1.12rem] text-zinc-200/82 leading-[1.65]">
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
            </motion.div>
          </div>
        </div>
      </motion.div>

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
