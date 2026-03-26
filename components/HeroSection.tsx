export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full bg-violet-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/8 blur-[100px] pointer-events-none animate-pulse-slow" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald-600/6 blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 text-violet-300 text-xs font-medium mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Polestar Media Tech
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
          <span className="text-white">누구나 즐겁게</span>
          <br />
          <span className="gradient-text">창조하고 연결되는</span>
          <br />
          <span className="text-white">미디어 세상</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-4">
          PMT는 기술을 통해
        </p>
        <p className="text-base md:text-lg text-white/40 max-w-3xl mx-auto leading-relaxed mb-12">
          창작 · 유통 · 캠페인이 자연스럽게 이어지는
          <br className="hidden md:block" />
          새로운 미디어 생태계를 만들어갑니다
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
            서비스 알아보기
          </button>
          <button className="px-7 py-3.5 rounded-xl border border-white/10 text-white/60 font-medium text-sm hover:border-white/20 hover:text-white/80 transition-all">
            문의하기 →
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
