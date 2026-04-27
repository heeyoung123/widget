"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const heroStatement = "우리는 단순한 솔루션 제공사가 아닙니다.";

const visionItems = [
  "아이디어가 현실이 되고.",
  "콘텐츠가 가치가 되고.",
  "미디어가 비즈니스가 되고.",
  "성장이 구조가 되고.",
  "기술이 미래를 만든다.",
] as const;

const partnerLogos = [
  { src: "/kbs.png", alt: "KBS" },
  { src: "/sbs.png", alt: "SBS" },
  { src: "/mbc.svg", alt: "MBC" },
  { src: "/jtbc.svg", alt: "JTBC" },
  { src: "/channelA.svg", alt: "Channel A" },
  { src: "/mbn.svg", alt: "MBN" },
  { src: "/tv-chosun.png", alt: "TV Chosun" },
  { src: "/cj.png", alt: "CJ" },
  { src: "/edaily.png", alt: "eDaily" },
  { src: "/tripass.png", alt: "Tripass" },
  { src: "/modori.png", alt: "Modori" },
  { src: "/gifez.png", alt: "Gifez" },
  { src: "/inuiro.png", alt: "Inuiro" },
  { src: "/livewith.png", alt: "Livewith" },
  { src: "/hyu.png", alt: "HYU" },
  { src: "/shampagnefirm.png", alt: "Shampagne Firm" },
  { src: "/cidermics.png", alt: "Cidermics" },
  { src: "/plus.png", alt: "Plus" },
  { src: "/butiple.jpg", alt: "Butiple" },
  { src: "/channels4_profile.jpg", alt: "Channels4" },
  { src: "/gwangju.jpeg", alt: "Gwangju" },
  { src: "/media-commerce.png", alt: "Media Commerce" },
  { src: "/v.png", alt: "V" },
  { src: "/coei.svg", alt: "Coei" },
  { src: "/kibo.png", alt: "Kibo" },
  { src: "/kosme.jpg", alt: "Kosme" },
  { src: "/ksu.svg", alt: "KSU" },
] as const;

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = { duration: 1.15, ease };

function SectionKicker({ text }: { text: string }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <span className="text-[11px] tracking-[0.28em] uppercase text-white/25 font-medium">
        {text}
      </span>
      <div className="w-6 h-px bg-white/15" />
    </div>
  );
}

function VisualPanel({
  variant,
  className = "",
}: {
  variant: "portrait" | "warm" | "eye";
  className?: string;
}) {
  const styles = {
    portrait:
      "bg-[radial-gradient(circle_at_55%_36%,rgba(231,214,203,0.92),rgba(150,115,110,0.18)_16%,transparent_18%),radial-gradient(circle_at_54%_58%,rgba(103,47,58,0.5),transparent_18%),linear-gradient(145deg,#15161c_0%,#332832_28%,#874b5e_52%,#4db2c0_78%,#111115_100%)]",
    warm:
      "bg-[radial-gradient(circle_at_58%_46%,rgba(255,234,205,0.98),rgba(255,206,158,0.42)_13%,transparent_18%),radial-gradient(circle_at_42%_48%,rgba(239,180,126,0.45),transparent_24%),linear-gradient(135deg,#dad2ca_0%,#f3ece4_28%,#f0d4af_54%,#936a4d_82%,#2e2119_100%)]",
    eye:
      "bg-[radial-gradient(circle_at_50%_46%,rgba(235,233,227,0.95),transparent_15%),radial-gradient(circle_at_49%_47%,rgba(42,52,71,0.92),transparent_7%),linear-gradient(120deg,#2b211e_0%,#7f5a43_24%,#d7d8d7_46%,#7b98b8_70%,#151618_100%)]",
  } as const;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 1.05, ease }}
      className={`relative overflow-hidden ${styles[variant]} ${className}`}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent_26%,rgba(0,0,0,0.16))]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.08)_42%,transparent_58%)] opacity-0 transition-opacity duration-700 hover:opacity-100" />
    </motion.div>
  );
}

function CenterIconTile() {
  return (
    <div className="flex h-full min-h-[240px] items-center justify-center bg-[#050505]">
      <motion.div
        initial={{ opacity: 0, scale: 0.88, rotate: -10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.2, ease }}
        className="relative h-24 w-24"
      >
        <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/88 shadow-[0_0_30px_rgba(255,255,255,0.18)]" />
        <div className="absolute left-1/2 top-0 h-10 w-16 -translate-x-1/2 rounded-b-[999px] rounded-t-[999px] border-t-[10px] border-white/78 border-l-[10px] border-r-[10px] border-b-0" />
        <div className="absolute bottom-1 left-0 h-14 w-10 rotate-[36deg] rounded-b-[999px] rounded-t-[999px] border-l-[10px] border-r-[10px] border-b-[10px] border-t-0 border-white/78" />
        <div className="absolute bottom-1 right-0 h-14 w-10 -rotate-[36deg] rounded-b-[999px] rounded-t-[999px] border-l-[10px] border-r-[10px] border-b-[10px] border-t-0 border-white/78" />
      </motion.div>
    </div>
  );
}

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-10%" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-4 pt-24 pb-0 md:px-8 md:pt-32 md:pb-0"
    >

      <div className="relative z-10 mx-auto max-w-[1820px] border border-white/12 bg-[#050505]">
        <div className="border-b border-white/12 px-7 py-10 md:px-10 md:py-12">
          <motion.div
            id="about-pmt"
            className="scroll-mt-24"
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease }}
          >
            <SectionKicker text="About PMT" />
          </motion.div>

          <div className="max-w-[1360px] overflow-hidden">
            <motion.h2
              initial={{ y: "108%", opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : undefined}
              transition={{ duration: 1.45, delay: 0.16, ease }}
              className="text-[clamp(2.8rem,5.2vw,5.8rem)] font-black leading-[0.96] tracking-[-0.06em] text-white"
            >
              {heroStatement}
            </motion.h2>
          </div>

        </div>

        <div className="grid lg:grid-cols-4">
          <div className="border-b border-white/12 p-7 md:p-8 lg:border-b-0 lg:border-r">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={reveal}
            >
              <p className="text-[clamp(1.7rem,2vw,2.4rem)] font-bold uppercase leading-[1.08] tracking-[-0.04em] text-white">
                PMT builds
                <br />
                lasting media
                <br />
                momentum.
              </p>
            </motion.div>
          </div>

          <div className="border-b border-white/12 p-7 md:p-8 lg:border-b-0 lg:border-r">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...reveal, delay: 0.1 }}
            >
              <SectionKicker text="Our Mission" />
              <p className="max-w-[18rem] text-[1.02rem] leading-[1.6] text-white/66">
                PMT는 미디어 산업의 흐름을 분석하고, 고객사의 비즈니스 문제를 깊이 이해하여
                성장을 함께 만드는 디지털 혁신 파트너입니다.
              </p>
            </motion.div>
          </div>

          <div className="border-b border-white/12 p-7 md:p-8 lg:border-b-0 lg:border-r">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...reveal, delay: 0.18 }}
            >
              <SectionKicker text="Our Goal" />
              <p className="max-w-[20rem] text-[1.02rem] leading-[1.6] text-white/66">
                고객과 함께 성장하며
                <br />
                지속 가능한 미디어 생태계를
                <br />
                구축하는 기술 기업
              </p>
            </motion.div>
          </div>

          <div className="p-7 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ ...reveal, delay: 0.18 }}
            >
              <SectionKicker text="Our Vision" />
              <div className="space-y-3">
                {visionItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.24 + index * 0.1, ease }}
                    className="flex items-start gap-3 text-[1.02rem] leading-[1.55] text-white/68"
                  >
                    <span className="mt-[0.18em] text-white">➤</span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid border-t border-white/12 lg:grid-cols-3">
          <div className="border-b border-white/12 p-7 md:p-8 lg:border-b-0 lg:border-r">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={reveal}
            >
              <p className="text-[clamp(2rem,2.8vw,3rem)] font-black leading-[1] tracking-[-0.04em] text-white">
                12,800+
              </p>
              <p className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.16em] text-white/82">
                Short-form clips
              </p>
              <p className="mt-5 max-w-[18rem] text-[1rem] leading-[1.6] text-white/62">
                AI로 자동 생성된 숏폼
              </p>
            </motion.div>
          </div>

          <div className="border-b border-white/12 p-7 md:p-8 lg:border-b-0 lg:border-r">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ ...reveal, delay: 0.16 }}
            >
              <p className="text-[clamp(2rem,2.8vw,3rem)] font-black leading-[1] tracking-[-0.04em] text-white">
                340+
              </p>
              <p className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.16em] text-white/82">
                Campaigns
              </p>
              <p className="mt-5 max-w-[18rem] text-[1rem] leading-[1.6] text-white/62">
                운영한 미디어 캠페인
              </p>
            </motion.div>
          </div>

          <div className="p-7 md:p-8">
            <motion.div
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ ...reveal, delay: 0.24 }}
            >
              <p className="text-[clamp(2rem,2.8vw,3rem)] font-black leading-[1] tracking-[-0.04em] text-white">
                48
              </p>
              <p className="mt-4 text-[0.86rem] font-semibold uppercase tracking-[0.16em] text-white/82">
                Partner brands
              </p>
              <p className="mt-5 max-w-[18rem] text-[1rem] leading-[1.6] text-white/62">
                협업한 브랜드·크리에이터
              </p>
            </motion.div>
          </div>
        </div>

        <div className="border-t border-white/12">
          <div className="relative overflow-hidden bg-white py-4">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-white to-transparent" />
            <motion.div
              className="flex w-max items-center gap-12"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 42, ease: "linear", repeat: Infinity }}
            >
              {[...partnerLogos, ...partnerLogos].map((logo, index) => (
                <div
                  key={`${logo.src}-${index}`}
                  className="flex h-12 min-w-[130px] items-center justify-center"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-9 w-auto max-w-[120px] object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
