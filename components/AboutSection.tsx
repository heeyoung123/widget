export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
              About PMT
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              우리는 단순한
              <br />
              <span className="gradient-text-purple">솔루션 제공사가</span>
              <br />
              아닙니다.
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-6">
              PMT는 미디어 산업의 흐름을 분석하고, 고객사의 비즈니스 문제를 깊이 이해하여 성장을 함께 만드는{" "}
              <span className="text-white/70 font-medium">&lsquo;디지털 혁신 파트너&rsquo;</span>입니다.
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              데이터와 기술의 잠재력을 최대화하여 아이디어가 현실이 되고, 콘텐츠가 가치가 되고, 미디어가 비즈니스가 되는 경험을 제공합니다.
            </p>
          </div>

          {/* Right: vision card */}
          <div className="relative">
            {/* Decorative glow behind card */}
            <div className="absolute -inset-4 bg-gradient-to-br from-violet-600/10 to-blue-600/10 rounded-3xl blur-xl" />

            <div className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-8 overflow-hidden">
              {/* Inner glow top */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              <div className="mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center mb-5">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.964-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-white/30 text-xs uppercase tracking-widest font-semibold mb-2">PMT의 비전</p>
                <p className="text-white text-xl font-semibold leading-snug">
                  고객과 함께 성장하며
                  <br />
                  지속 가능한 미디어 생태계를
                  <br />
                  구축하는 기술 기업
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5">
                {[
                  { value: "3+", label: "핵심 플랫폼" },
                  { value: "AI", label: "기반 기술" },
                  { value: "∞", label: "확장 가능성" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-bold gradient-text-purple">{stat.value}</p>
                    <p className="text-white/30 text-xs mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
