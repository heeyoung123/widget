"use client";

import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { blogPosts } from "@/data/blogPosts";

const ease = [0.22, 1, 0.36, 1] as const;
const reveal = { duration: 1.05, ease };

type BlogSectionProps = {
  mode?: "home" | "page";
};

type CardProps = {
  index: number;
  featured?: boolean;
};

function BlogCard({ index, featured = false }: CardProps) {
  const post = blogPosts[index];
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const glowX = useSpring(pointerX, { stiffness: 70, damping: 24, mass: 0.85 });
  const glowY = useSpring(pointerY, { stiffness: 70, damping: 24, mass: 0.85 });
  const glow = useTransform(
    [glowX, glowY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.18), rgba(255,255,255,0.06) 18%, transparent 48%)`
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 1.1, delay: index * 0.13, ease }}
      whileHover={{ backgroundColor: "rgba(0,0,0,0.035)" }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        pointerX.set(x);
        pointerY.set(y);
      }}
      className={`group relative overflow-hidden bg-[#050505] ${
        featured ? "min-h-[22rem] md:min-h-[25rem]" : "min-h-[17rem] md:min-h-[18rem]"
      }`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="absolute inset-0 z-20"
        aria-label={post.title}
      />

      <div className="relative flex h-full flex-col">
        <motion.div
          aria-hidden
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: glow }}
        />
        <motion.div
          aria-hidden
          initial={false}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 1.1, ease }}
          className={`relative m-[10px] mb-0 overflow-hidden ${post.imageStyle} ${
            featured ? "h-[15rem] md:h-[16rem]" : "h-[9.5rem] md:h-[10rem]"
          }`}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 1.55, ease }}
          >
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_20%,rgba(0,0,0,0.12))]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,0.18)_40%,transparent_58%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </motion.div>
          {featured ? (
            <div className="absolute left-2 top-2 border border-white/20 bg-black/70 px-1.5 py-1 text-[7px] font-semibold uppercase tracking-[0.16em] text-white">
              Featured Post
            </div>
          ) : null}
        </motion.div>

        <div className="flex flex-1 flex-col justify-between px-[10px] pb-[10px] pt-2">
          <motion.h3
            className={`max-w-[32rem] font-semibold uppercase leading-[1.1] tracking-[-0.03em] text-white ${
              featured
                ? "text-[clamp(0.92rem,1.5vw,1.15rem)]"
                : "text-[clamp(0.76rem,1vw,0.92rem)]"
            }`}
            whileHover={{ x: 2 }}
            transition={{ duration: 0.7, ease }}
          >
            {post.title}
          </motion.h3>

          <motion.div
            className="mt-2 flex items-center justify-between gap-3 text-[7px] font-medium uppercase tracking-[0.08em] text-white/45 md:text-[8px]"
            whileHover={{ y: -1 }}
            transition={{ duration: 0.62, ease }}
          >
            <span className="truncate">{post.category}</span>
            <span className="whitespace-nowrap">{post.publishedAt}</span>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export default function BlogSection({ mode = "home" }: BlogSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const isPage = mode === "page";

  return (
    <section
      id={isPage ? undefined : "blog"}
      ref={sectionRef}
      className={`relative overflow-hidden bg-black px-0 ${
        isPage ? "pt-28 pb-20 md:pt-32" : "pt-20 pb-16"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="relative mx-auto max-w-[1440px] border-x border-white/14 bg-[#020202]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={reveal}
          className="relative min-h-[8rem] border-b border-white/14 px-3 py-4 md:min-h-[9.75rem] md:px-4 md:py-5"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_at_78%_18%,rgba(224,165,255,0.12),transparent_22%),radial-gradient(ellipse_at_84%_20%,rgba(183,250,255,0.1),transparent_14%),radial-gradient(ellipse_at_71%_17%,rgba(255,235,147,0.12),transparent_11%)]" />
          <div className="relative flex min-h-[5rem] items-start justify-between">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 1.25, ease, delay: 0.12 }}
              className="text-[clamp(3.4rem,8vw,6.3rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-white"
            >
              Our
            </motion.h2>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 1.25, ease, delay: 0.26 }}
              className="self-end text-[clamp(3.4rem,8vw,6.3rem)] font-black uppercase leading-[0.88] tracking-[-0.08em] text-white"
            >
              Blog
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 1, ease, delay: 0.38 }}
            className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2"
          >
            <Link
              href="/blog"
              className="inline-flex items-center justify-center border border-white/16 bg-white/6 px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.14em] text-white transition-all duration-500 hover:border-white/28 hover:bg-white hover:px-4 hover:text-black"
            >
              Look more
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid border-b border-white/14 md:grid-cols-[2fr_1fr]">
          <div className="border-b border-white/14 md:border-b-0 md:border-r md:border-white/14">
            <BlogCard index={0} featured />
          </div>
          <div>
            <BlogCard index={1} />
          </div>
        </div>

        <div className="grid md:grid-cols-3">
          <div className="border-b border-white/14 md:border-b-0 md:border-r md:border-white/14">
            <BlogCard index={2} />
          </div>
          <div className="border-b border-white/14 md:border-b-0 md:border-r md:border-white/14">
            <BlogCard index={3} />
          </div>
          <div>
            <BlogCard index={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
