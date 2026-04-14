"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";

/* ─────────────────────────── data ─────────────────────────── */

const headlineLines = [
  { text: "우리는 단순한", metal: false },
  { text: "솔루션 제공사가", metal: true },
  { text: "아닙니다.", metal: false },
];

const stats = [
  { raw: 3, suffix: "+", label: "핵심 플랫폼", isNumber: true },
  { raw: "AI", suffix: "", label: "기반 기술", isNumber: false },
  { raw: "∞", suffix: "", label: "확장 가능성", isNumber: false },
] as const;

const marqueeItems = [
  "아이디어가 현실이 되고",
  "콘텐츠가 가치가 되고",
  "미디어가 비즈니스가 된다",
  "PMT",
  "디지털 혁신 파트너",
];

const ease = [0.22, 1, 0.36, 1] as const;

/* ─────────────────────────── sub-components ─────────────────────────── */

function AnimatedCount({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1300;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <>
      {val}
      {suffix}
    </>
  );
}

function Marquee() {
  const track = [...marqueeItems, ...marqueeItems];
  return (
    <div
      className="overflow-hidden border-t border-b py-4 mt-16"
      style={{ borderColor: "rgba(255,255,255,0.06)" }}
    >
      <style>{`
        @keyframes pmt-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .pmt-marquee-track {
          animation: pmt-marquee 26s linear infinite;
        }
      `}</style>

      <div className="pmt-marquee-track flex items-center gap-0 w-max">
        {track.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="whitespace-nowrap text-sm font-medium"
              style={{
                color: "rgba(255,255,255,0.14)",
                letterSpacing: "0.05em",
                paddingRight: "2.5rem",
              }}
            >
              {item}
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.07)",
                paddingRight: "2.5rem",
                fontSize: "0.55rem",
              }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────── main component ─────────────────────────── */

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-12%" });

  /* cursor-chasing glow — monochrome, matches project palette */
  const cxRaw = useMotionValue(600);
  const cyRaw = useMotionValue(300);
  const cx = useSpring(cxRaw, { stiffness: 45, damping: 16 });
  const cy = useSpring(cyRaw, { stiffness: 45, damping: 16 });

  /* card 3-D tilt */
  const txRaw = useMotionValue(0);
  const tyRaw = useMotionValue(0);
  const rotX = useSpring(useTransform(tyRaw, [-0.5, 0.5], [7, -7]), {
    stiffness: 110,
    damping: 22,
  });
  const rotY = useSpring(useTransform(txRaw, [-0.5, 0.5], [-7, 7]), {
    stiffness: 110,
    damping: 22,
  });

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const sr = sectionRef.current?.getBoundingClientRect();
    if (sr) {
      cxRaw.set(e.clientX - sr.left);
      cyRaw.set(e.clientY - sr.top);
    }
    if (cardRef.current) {
      const cr = cardRef.current.getBoundingClientRect();
      txRaw.set((e.clientX - cr.left) / cr.width - 0.5);
      tyRaw.set((e.clientY - cr.top) / cr.height - 0.5);
    }
  };
  const onLeave = () => {
    txRaw.set(0);
    tyRaw.set(0);
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative overflow-hidden bg-[#070911] py-28 md:py-40 px-6"
    >
      {/* subtle grid — same density as WhyChooseUs */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px)," +
            "linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* cursor glow — white, very subtle */}
      <motion.div
        className="pointer-events-none absolute rounded-full"
        style={{
          left: cx,
          top: cy,
          x: "-50%",
          y: "-50%",
          width: 560,
          height: 560,
          background:
            "radial-gradient(circle,rgba(255,255,255,0.032) 0%,transparent 65%)",
        }}
      />

      {/* ─── content ─── */}
      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* top rule — same style as WhyChooseUs divider */}
        <motion.div
          className="mb-14 h-px bg-white/12"
          style={{ originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease }}
        />

        {/* label — matches WhyChooseUs label style */}
        <motion.div
          className="mb-10 flex items-center gap-3"
          initial={{ opacity: 0, x: -12 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15, ease }}
        >
          <span
            className="text-[11px] tracking-[0.28em] uppercase text-white/25 font-medium"
          >
            About PMT
          </span>
          <div className="w-6 h-px bg-white/15" />
        </motion.div>

        {/* two-column grid */}
        <div className="grid items-start gap-14 lg:gap-20 md:grid-cols-[1fr_370px] lg:grid-cols-[1fr_410px]">

          {/* ── LEFT ── */}
          <div>
            {/* headline mask-reveal */}
            <h2
              style={{
                fontSize: "clamp(2.6rem,5.8vw,5.4rem)",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                lineHeight: 1.02,
                marginBottom: "2.5rem",
              }}
            >
              {headlineLines.map((line, i) => (
                <span
                  key={i}
                  style={{ display: "block", overflow: "hidden" }}
                >
                  <motion.span
                    style={{ display: "block" }}
                    className={line.metal ? "gradient-text-metal" : "text-white"}
                    initial={{ y: "108%" }}
                    animate={isInView ? { y: 0 } : {}}
                    transition={{
                      duration: 0.76,
                      ease,
                      delay: 0.28 + i * 0.09,
                    }}
                  >
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h2>

            {/* body copy */}
            <motion.div
              className="max-w-[32rem] space-y-4"
              initial={{ opacity: 0, y: 18 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.66, ease }}
            >
              <p className="text-white/50 text-base leading-relaxed">
                PMT는 미디어 산업의 흐름을 분석하고, 고객사의 비즈니스 문제를
                깊이 이해하여 성장을 함께 만드는{" "}
                <span className="text-white/80 font-medium">
                  &lsquo;디지털 혁신 파트너&rsquo;
                </span>
                입니다.
              </p>
              <p className="text-white/30 text-sm leading-relaxed">
                데이터와 기술의 잠재력을 최대화하여 아이디어가 현실이 되고,
                콘텐츠가 가치가 되고, 미디어가 비즈니스가 되는 경험을
                제공합니다.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: vision card (3-D tilt) ── */}
          <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 36 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.72, delay: 0.5, ease }}
            style={{
              rotateX: rotX,
              rotateY: rotY,
              transformPerspective: 900,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.09)",
                background:
                  "linear-gradient(150deg,rgba(255,255,255,0.042) 0%,rgba(255,255,255,0.014) 100%)",
                padding: "32px 30px",
                overflow: "hidden",
              }}
            >
              {/* shimmer top — white, consistent with metal palette */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 1,
                  background:
                    "linear-gradient(to right,transparent,rgba(255,255,255,0.28),transparent)",
                }}
              />
              {/* subtle corner light */}
              <div
                style={{
                  position: "absolute",
                  top: -40,
                  left: -40,
                  width: 160,
                  height: 160,
                  background:
                    "radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 70%)",
                  pointerEvents: "none",
                }}
              />

              {/* vision label */}
              <p
                className="text-[10px] font-semibold uppercase tracking-widest text-white/28 mb-4"
              >
                PMT의 비전
              </p>

              <p className="text-white text-[1.06rem] font-semibold leading-[1.65] mb-8">
                고객과 함께 성장하며
                <br />
                지속 가능한 미디어 생태계를
                <br />
                구축하는 기술 기업
              </p>

              {/* stats — gradient-text-metal like TimelineSection */}
              <div
                className="grid grid-cols-3 gap-3 pt-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="text-center"
                    initial={{ opacity: 0, y: 8 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + i * 0.08, ease }}
                  >
                    <p
                      className="gradient-text-metal"
                      style={{
                        fontSize: "1.7rem",
                        fontWeight: 700,
                        lineHeight: 1,
                        marginBottom: "6px",
                      }}
                    >
                      {s.isNumber ? (
                        <AnimatedCount
                          target={s.raw as number}
                          suffix={s.suffix}
                          inView={isInView}
                        />
                      ) : (
                        <>
                          {s.raw}
                          {s.suffix}
                        </>
                      )}
                    </p>
                    <p className="text-white/24 text-[11px] tracking-wide">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom rule */}
        <motion.div
          className="h-px bg-white/12 mt-16"
          style={{ originX: 1 }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, delay: 0.35, ease }}
        />

        {/* marquee strip */}
        <Marquee />
      </div>
    </section>
  );
}
