export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  eyebrow: string;
  author: string;
  imageStyle: string;
  imageSrc?: string;
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "polmi-inuiro-ip-mou",
    category: "NEWS",
    title: "폴미-법무법인 인의로,\nAI 플랫폼 IP 보호 위한 MOU 체결",
    excerpt:
      "AI 숏폼 생성 기술에 전문 법률 솔루션을 결합해 Clipink 플랫폼의 IP 보호 체계와 법률 안전성을 강화하는 업무협약이 체결됐다.",
    publishedAt: "Apr 13, 2026",
    readTime: "4 min read",
    eyebrow: "이데일리TV",
    author: "이데일리TV",
    imageStyle: "bg-[url('/inuiro-article.jpg')] bg-cover bg-center",
    imageSrc: "/inuiro-article.jpg",
    intro:
      "[이데일리TV 이지은 기자] AI 숏폼 자동 생성 플랫폼 기업 주식회사 폴미와 법무법인 인의로가 지난 10일 Clipink(클리핑) 플랫폼의 IP 저작권 보호 체계 수립 및 법률적 안정성 확보를 위한 업무협약(MOU)을 체결했다고 13일 밝혔다.",
    sections: [
      {
        heading: "본문",
        paragraphs: [
          "이번 협약은 폴미가 보유한 AI 숏폼 생성 기술 및 CQAA(콘텐츠 품질 어시스트 알고리즘) 엔진에 법무법인 인의로의 전문적인 법률 자문 역량을 더해 시장 내 고질적인 문제인 저작권 분쟁을 미연에 방지하고자 추진됐다.",
          "양사는 △IP 화이트리스트 검증 및 법률 자문 △블록체인 기반 저작권 보호 시스템 고도화 △AI 알고리즘의 법적 준거성 확보 △글로벌 진출을 위한 법률 인프라 구축 등 4개 분야에서 긴밀하게 협력할 방침이다.",
          "특히 이번 파트너십에서 주목받는 것은 법무법인 인의로의 합류다. 인의로는 그간 연예 기획사와 유명 연예인들의 전속계약 분쟁, 출연료 및 관련 정산금 미지급, 복잡한 디지털 저작권 소송을 성공적으로 이끌어온 전문 법률사무소로 알려져 있다.",
          "인의로는 풍부한 레퍼런스를 바탕으로 폴미의 디지털 자산 라이브러리에 등록된 방송사 및 제작사들의 IP 권리 관계를 명확히 하고, 글로벌 유통 시 발생할 수 있는 리스크를 사전에 차단하는 역할을 수행한다. 또한 폴미가 도입한 블록체인 기반 IP 관리 기술과 워터마킹 프로토콜이 법정에서 실질적인 증거력을 가질 수 있도록 법률적 가이드라인을 제공할 예정이다.",
          "폴미의 클리핑은 유튜브, 틱톡 등 글로벌 플랫폼의 정책 변화와 각국의 AI 윤리 지침을 준수하며 동남아 5개국 및 미국 시장 론칭을 앞두고 있다. 인의로는 현지 저작권법 대응과 글로벌 표준 계약안 수립을 지원함으로써 폴미의 안정적인 해외 진출을 뒷받침할 예정이다.",
          "송진욱 폴미 대표는 “글로벌 K콘텐츠 시장에서 AI 기술의 확산만큼 중요한 것이 바로 창작자의 권리 보호”라며 “인의로와의 협력을 통해 창작자와 IP 보유자가 상생할 수 있는 가장 안전하고 건전한 AI 미디어 생태계를 구축하겠다”고 밝혔다.",
          "법무법인 인의로 관계자는 “기술 전문성을 존중하면서 시장 환경 변화에 최적화된 법률 솔루션을 제공해 클리핑이 글로벌 표준으로 자리 잡을 수 있도록 돕겠다”고 전했다.",
        ],
      },
    ],
  },
  {
    slug: "edaily-polmi-strategic-ai-mou",
    category: "NEWS",
    title: "이데일리씨앤비-폴미,\nAI 전환 가속 위한 전략적 제휴 체결",
    excerpt:
      "AI 영상 클리핑 기술을 중심으로 제작 자동화 고도화와 AI 미디어 생태계 확장을 추진하는 전략적 업무협약이 체결됐습니다.",
    publishedAt: "Feb 11, 2026",
    readTime: "3 min read",
    eyebrow: "AI Media Transformation",
    author: "이데일리TV",
    imageStyle: "bg-[url('/edaily-article.jpg')] bg-cover bg-center",
    imageSrc: "/edaily-article.jpg",
    intro:
      "[이데일리TV 이지은 기자] 이데일리씨앤비와 퍼포먼스 토탈 마케팅 에이전시 폴미가 AI 기반 영상 클리핑 기술을 중심으로 콘텐츠 제작 혁신과 AI 미디어 전환 가속을 위한 전략적 업무협약(MOU)을 체결했다.",
    sections: [
      {
        heading: "본문",
        paragraphs: [
          "양사는 11일 서울 중구 KG타워 하모니홀에서 협약식을 열고, AI 영상 클리핑 소프트웨어 ‘클리핑’을 활용한 제작 자동화 고도화와 AI 미디어 생태계 확장을 위한 중장기 협력에 나서기로 했다. 이번 협약은 단순 기술 협력을 넘어 AI 기반 제작 시스템 전환을 본격화하는 데 의미가 있다.",
          "폴미는 AI를 활용해 숏폼 영상을 자동 생성하는 클리핑을 운영 중이다. 이데일리씨앤비는 이를 통해 숏폼 클립 제작과 편집 프로세스를 고도화하고 디지털 플랫폼 경쟁력을 강화할 계획이다. 제작 속도와 확장성을 동시에 확보해 AI 중심 제작 구조로의 전환을 가속화한다는 전략이다.",
          "양사는 AI 미디어와 영상 자동화 등 신규 사업 추진 시 상호 우선 협력하고 공동 사업 가능성도 적극 모색하기로 했다. 또 이데일리씨앤비가 주최·주관하는 각종 행사와 프로젝트에서도 협력을 확대해 실질적인 시너지를 창출할 방침이다.",
          "이데일리씨앤비 관계자는 “이번 협약을 계기로 AI 기반 콘텐츠 제작 역량을 한층 고도화하고, 미디어 산업의 디지털 전환을 선도해 나갈 계획”이라고 밝혔다.",
        ],
      },
    ],
  },
  {
    slug: "gwangju-ai-innovation-city-mou",
    category: "NEWS",
    title: "광주광역시, AI 유망기업 10곳과 손잡고\n'AI 혁신도시'로 도약",
    excerpt:
      "광주광역시가 AICON 광주 2025에서 AI 유망기업 10개 사와 협약을 체결하고 AI 실증·사업화 거점 도시로의 전환을 본격화합니다.",
    publishedAt: "Oct 15, 2025",
    readTime: "3 min read",
    eyebrow: "Regional AI Ecosystem",
    author: "KPI뉴스",
    imageStyle: "bg-[url('/aicon-article.jpeg')] bg-cover bg-[center_43%]",
    imageSrc: "/aicon-article.jpeg",
    intro:
      "광주광역시는 김대중컨벤션센터에서 열린 AICON 광주 2025 개막식에서 국내 인공지능 유망기업 10개 사와 '광주형 인공지능 비즈니스 업무협약'을 체결했다. 이번 협약은 AI 혁신도시 광주라는 비전을 구체화하고 지속 가능한 인공지능 산업 생태계를 가속화하는 데 목적이 있다.",
    sections: [
      {
        heading: "협약 내용과 참여 기업",
        paragraphs: [
          "협약에는 디지털프레소, 브레인웍스, 브릭섬, 사미텍, 씨럽, 에이아이캐슬, 에이치인텔리전스, 엠디에스인텔리전스, 위즈팜, 폴미 등 10개 기업이 참여했다.",
          "참여 기업들은 AI 데이터 분석, 음성·자연어 처리, 콘텐츠 등 다양한 분야에서 기술력과 성장성을 인정받은 혁신 기업으로, 광주를 거점으로 기술개발과 사업화를 추진할 계획이다.",
        ],
      },
      {
        heading: "기대 효과와 도시 전략",
        paragraphs: [
          "광주시는 지역 내 연구 거점 설립과 AI 기반시설·실증 환경 연계를 지원해 기업의 기술 검증과 상용화를 뒷받침하고, 이를 통해 지역 산업 고도화와 청년 일자리 창출을 동시에 추진한다는 방침이다.",
          "시는 이번 협약을 AI 기술 실증과 산업 혁신의 거점도시로 도약하는 출발점으로 보고, 기업과 도시가 함께 성장하는 협력 모델을 강화해 나갈 계획이다.",
        ],
      },
    ],
  },
];
