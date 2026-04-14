"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type DeferredMountProps = {
  children: ReactNode;
  /** 스크롤 레이아웃 점프 완화용 자리 표시 높이 (Tailwind 클래스) */
  placeholderClassName?: string;
  /** 마운트 전에도 `#` 네비가 동작하도록 플레이스홀더에 부여할 id */
  anchorId?: string;
};

/**
 * 뷰포트에 가까워질 때까지 자식을 렌더하지 않아 초기 JS·WebGL 부하를 줄입니다.
 */
export default function DeferredMount({
  children,
  placeholderClassName = "min-h-[70vh] w-full",
  anchorId,
}: DeferredMountProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 380px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      {show ? (
        children
      ) : (
        <div id={anchorId} className={placeholderClassName} aria-hidden />
      )}
    </div>
  );
}
