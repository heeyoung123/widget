const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    number: "01",
    title: "숙련된 전문가 그룹",
    description:
      "미디어·AI·데이터·플랫폼 분야의 전문 인력이 프로젝트 전체를 책임집니다.",
    gradient: "from-violet-500/20 to-purple-500/5",
    iconColor: "text-violet-400",
    iconBg: "bg-violet-500/10",
    borderHover: "hover:border-violet-500/30",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.43.992a6.759 6.759 0 010 .255c-.008.378.137.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    number: "02",
    title: "고객 맞춤형 설계 능력",
    description:
      "각 산업과 브랜드의 목적에 맞춰 완전히 커스터마이징된 솔루션을 제공합니다.",
    gradient: "from-blue-500/20 to-cyan-500/5",
    iconColor: "text-blue-400",
    iconBg: "bg-blue-500/10",
    borderHover: "hover:border-blue-500/30",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    number: "03",
    title: "지속적인 기술 확장성",
    description:
      "클라우드, 빅데이터, AI 등 변화하는 기술 트렌드를 지속적으로 연구하여 최고의 결과물을 만들어냅니다.",
    gradient: "from-emerald-500/20 to-teal-500/5",
    iconColor: "text-emerald-400",
    iconBg: "bg-emerald-500/10",
    borderHover: "hover:border-emerald-500/30",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="relative py-32 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-blue-600/6 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-blue-400 mb-4">
            Why Choose Us
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            성공적인 프로젝트는
            <br />
            <span className="gradient-text">깊이 있는 이해와 경험에서</span>
            <br />
            시작됩니다.
          </h2>
          <p className="text-white/40 text-base max-w-lg mx-auto">
            단순한 기술력이 아닌, 산업 전반의 인사이트와 실행력으로 차별화된 결과를 만듭니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className={`relative rounded-2xl border border-white/6 bg-white/[0.02] p-7 card-hover overflow-hidden ${reason.borderHover}`}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${reason.gradient} opacity-50 pointer-events-none`} />

              {/* Top line */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              <div className="relative z-10">
                {/* Number */}
                <p className="text-white/10 text-6xl font-black absolute top-0 right-4 leading-none select-none">
                  {reason.number}
                </p>

                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl ${reason.iconBg} ${reason.iconColor} flex items-center justify-center mb-5`}>
                  {reason.icon}
                </div>

                <h3 className="text-white font-bold text-lg mb-3 tracking-tight">
                  {reason.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-white/6 bg-white/[0.02]">
            <p className="text-white/60 text-sm">PMT와 함께 미디어 비즈니스를 혁신하세요</p>
            <button className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20">
              지금 시작하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
