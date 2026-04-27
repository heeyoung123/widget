"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isModalOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between border-b border-white/5 bg-black px-8 py-4">
        <div className="flex items-center">
          <Image
            src="/pmt-logo.png"
            alt="PMT logo"
            width={108}
            height={42}
            priority
            className="h-8 w-auto object-contain"
          />
        </div>
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm text-white/50 md:flex">
          <a
            href="https://clipink.ai/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white/90"
          >
            Clipink
          </a>
          <a href="#services" className="transition-colors hover:text-white/90">
            서비스
          </a>
          <a href="#about-pmt" className="transition-colors hover:text-white/90">
            회사 소개
          </a>
          <a href="#why-choose-us" className="transition-colors hover:text-white/90">
            왜 PMT인가
          </a>
          <a href="#blog" className="transition-colors hover:text-white/90">
            블로그
          </a>

        </div>
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="border border-white/20 px-5 py-3 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          문의하기
        </button>
      </nav>

      {isModalOpen && (
        <div className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-transparent px-4">
          <div className="pointer-events-auto relative z-10 w-full max-w-xl rounded-2xl border border-white/10 bg-black p-6 shadow-[0_25px_120px_rgba(0,0,0,0.6)] md:p-8">
            <div className="mb-6 flex items-start justify-between gap-4">
              <h2 className="text-xl font-semibold text-white md:text-2xl">제휴 문의</h2>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="rounded-lg px-2.5 py-1 text-sm text-zinc-400 transition-colors hover:text-zinc-200"
              >
                닫기
              </button>
            </div>

            <form className="space-y-4">
              <label className="block space-y-2">
                <span className="text-sm text-zinc-200">
                  회사명 또는 이름 <span className="text-red-400">*</span>
                </span>
                <input
                  required
                  type="text"
                  placeholder="회사명 또는 이름을 입력해주세요"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-zinc-200">
                  이메일 <span className="text-red-400">*</span>
                </span>
                <input
                  required
                  type="email"
                  placeholder="이메일을 입력해주세요"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-zinc-200">연락처</span>
                <input
                  type="tel"
                  placeholder="연락처를 입력해주세요"
                  className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm text-zinc-200">
                  문의 내용 <span className="text-red-400">*</span>
                </span>
                <textarea
                  required
                  rows={5}
                  placeholder="문의 내용을 입력해주세요"
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 outline-none transition-colors focus:border-white/30"
                />
              </label>

              <button
                type="submit"
                className="w-full border border-white/20 px-7 py-4 text-sm font-semibold tracking-widest uppercase text-white transition-all duration-300 hover:bg-white hover:text-black"
              >
                제휴 문의하기
              </button>
            </form>

            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              입력하신 정보는 제휴 및 문의 응대 목적 외에는 사용되지 않습니다.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
