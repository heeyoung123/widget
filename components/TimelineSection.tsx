const steps = [
  {
    step: "STEP 1",
    number: "01",
    title: "AI 숏폼 자동 생성",
    description:
      "영상을 분석하여 가장 전달력 높은 콘텍스트 기반 CQAA 알고리즘으로 최적의 숏폼 클립을 자동 생성합니다.",
    features: [
      "긴 영상 → 숏폼 클립 자동 생성",
      "전달력·조회수 최적화 알고리즘",
      "SNS 업로드·유통까지 워크플로우 단축",
      "Clipink 서비스 기반의 기술 확장성 확보",
    ],
    color: "from-violet-500 to-purple-600",
    glow: "rgba(139, 92, 246, 0.15)",
    accent: "text-violet-400",
    border: "border-violet-500/20",
    tag: "bg-violet-500/10 text-violet-300",
  },
  {
    step: "STEP 2",
    number: "02",
    title: "캠페인 & 미디어 홍보",
    description:
      "캠페인 운영·홍보·전환 관리까지 가능한 미디어 마케팅 플랫폼을 제공합니다.",
    features: [
      "캠페인 생성 / 운영 / 퍼포먼스 분석",
      "광고·홍보 효율 극대화",
      "브랜드-크리에이터-미디어 채널 연결",
      "콘텐츠 유통을 중심으로 한 미디어 생태계 구축",
    ],
    color: "from-blue-500 to-cyan-600",
    glow: "rgba(59, 130, 246, 0.12)",
    accent: "text-blue-400",
    border: "border-blue-500/20",
    tag: "bg-blue-500/10 text-blue-300",
  },
  {
    step: "STEP 3",
    number: "03",
    title: "미디어 소스 공유",
    description:
      "다양한 소스(영상, 이미지, 음원 등)를 기업·크리에이터·파트너가 안심하고 공유할 수 있도록 지원합니다.",
    features: [
      "소스 데이터 저장/관리/공유",
      "캠페인을 통한 콘텐츠 확산",
      "필요 시 판매/라이선스 연동",
      "미디어 산업 전체를 연결하는 개방형 허브 역할",
    ],
    color: "from-emerald-500 to-teal-600",
    glow: "rgba(16, 185, 129, 0.12)",
    accent: "text-emerald-400",
    border: "border-emerald-500/20",
    tag: "bg-emerald-500/10 text-emerald-300",
  },
];

export default function TimelineSection() {
  return (
    <section id="services" className="relative py-32 px-6">
      {/* Section header */}
      <div className="max-w-5xl mx-auto mb-24 text-center">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
          창작부터 유통까지,
          <br />
          <span className="gradient-text">하나의 생태계로</span>
        </h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          PMT의 세 가지 핵심 서비스가 유기적으로 연결되어 새로운 미디어 경험을 만듭니다.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px timeline-line" />

        <div className="space-y-20">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-6 flex items-center justify-center">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                  style={{ boxShadow: `0 0 30px ${item.glow}` }}
                >
                  <span className="text-white font-bold text-lg">{item.number}</span>
                </div>
              </div>

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] card-hover rounded-2xl border ${item.border} bg-white/[0.02] p-7`}
                style={{ boxShadow: `0 0 0 1px rgba(255,255,255,0.03) inset` }}
              >
                {/* Step badge */}
                <span className={`inline-block text-xs font-semibold tracking-widest px-3 py-1 rounded-full ${item.tag} mb-4`}>
                  {item.step}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Feature list */}
                <ul className="space-y-2.5">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-white/40">
                      <span className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-3rem)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
