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
  intro: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-storytelling-playbook",
    category: "ARTICLES",
    title: "브랜드 스토리텔링을 AI 워크플로우로 다시 설계하는 방법",
    excerpt:
      "기획부터 컷다운, 배포 포맷 최적화까지. PMT가 실험 중인 콘텐츠 파이프라인을 더미 케이스로 풀어봅니다.",
    publishedAt: "Nov 20, 2026",
    readTime: "8 min read",
    eyebrow: "Editorial Systems",
    author: "PMT Strategy Lab",
    imageStyle:
      "bg-[radial-gradient(circle_at_32%_36%,rgba(255,227,208,0.98),rgba(236,195,169,0.86)_10%,transparent_14%),linear-gradient(92deg,rgba(255,225,167,0.92)_0%,rgba(255,255,255,0)_25%,rgba(246,255,214,0.85)_35%,rgba(255,255,255,0)_54%,rgba(255,233,190,0.84)_66%,rgba(255,255,255,0)_86%),radial-gradient(circle_at_70%_44%,rgba(168,212,208,0.4),transparent_20%),linear-gradient(135deg,#080808_0%,#131313_35%,#2a2e24_100%)]",
    intro:
      "브랜드 콘텐츠는 더 이상 한 편의 영상으로 끝나지 않습니다. 기획, 촬영, 편집, 컷다운, 채널별 배포까지 이어지는 전체 흐름을 하나의 시스템으로 설계할 때 팀은 더 빠르게 실험하고 더 안정적으로 학습할 수 있습니다.",
    sections: [
      {
        heading: "작게 시작하는 자동화",
        paragraphs: [
          "가장 먼저 볼 것은 반복해서 손이 가는 작업입니다. 레퍼런스 수집, 콘셉트 초안, 자막 포맷 변환, 썸네일 버전 정리처럼 결과물의 방향을 바꾸기보다 시간을 오래 잡아먹는 작업부터 자동화 후보로 올립니다.",
          "중요한 점은 모든 판단을 AI에 맡기는 것이 아니라, 사람이 판단해야 할 지점을 더 선명하게 남기는 것입니다. 자동화는 팀의 감각을 대체하는 장치가 아니라 감각을 더 자주 쓰게 만드는 운영 방식에 가깝습니다.",
        ],
      },
      {
        heading: "브랜드 톤을 워크플로우에 넣기",
        paragraphs: [
          "좋은 프롬프트 하나보다 중요한 것은 브랜드가 반복해서 지켜야 할 기준을 구조화하는 일입니다. 금지어, 문장 길이, 컷 전환 리듬, 자막 톤, 썸네일 대비 같은 기준을 템플릿으로 묶으면 산출물의 편차가 줄어듭니다.",
          "PMT는 이 기준을 캠페인 단위로만 쓰지 않고 다음 프로젝트에서 다시 꺼낼 수 있는 라이브러리로 관리합니다. 그렇게 쌓인 운영 지식이 다음 제작의 출발선을 앞당깁니다.",
        ],
      },
      {
        heading: "검수는 더 촘촘하게",
        paragraphs: [
          "자동화가 들어가면 검수는 줄어드는 것이 아니라 더 명확해집니다. 초안 생산 속도가 빨라질수록 승인 기준, 책임자, 수정 로그가 함께 정리되어야 팀이 같은 화면을 보고 움직일 수 있습니다.",
          "결국 스마트한 워크플로우는 속도와 통제의 균형입니다. 더 많이 만들기 위한 자동화가 아니라, 더 좋은 선택을 더 빨리 하기 위한 구조를 만드는 것이 핵심입니다.",
        ],
      },
    ],
  },
  {
    slug: "campaign-signal-dashboard",
    category: "CASE STUDY",
    title: "캠페인 성과를 한 화면에서 읽는 시그널 대시보드",
    excerpt:
      "유입, 반응, 전환을 분리해서 보지 않고 연결해서 해석할 때 생기는 운영 속도의 차이를 정리했습니다.",
    publishedAt: "Nov 14, 2026",
    readTime: "5 min read",
    eyebrow: "Media Analytics",
    author: "PMT Analytics Team",
    imageStyle:
      "bg-[radial-gradient(circle_at_76%_18%,rgba(35,42,49,0.92),transparent_18%),radial-gradient(circle_at_55%_56%,rgba(211,235,245,0.92),rgba(175,208,220,0.48)_10%,transparent_16%),radial-gradient(circle_at_51%_70%,rgba(33,37,38,0.96),transparent_24%),linear-gradient(135deg,#cadbe3_0%,#b5cdd8_38%,#8aa2ad_62%,#d6e5ea_100%)]",
    intro:
      "성과 대시보드는 숫자를 모아두는 화면이 아니라 다음 행동을 고르는 인터페이스입니다. 유입과 반응, 전환 데이터를 한 문맥에서 읽을 때 캠페인 운영 속도는 눈에 띄게 달라집니다.",
    sections: [
      {
        heading: "지표보다 흐름",
        paragraphs: [
          "좋은 대시보드는 개별 수치보다 변화의 방향을 먼저 보여줍니다. 어떤 소재가 관심을 만들었고, 어떤 채널에서 이탈이 생겼는지 한눈에 연결되어야 합니다.",
        ],
      },
      {
        heading: "판단 가능한 화면",
        paragraphs: [
          "팀마다 필요한 의사결정 단위는 다릅니다. PMT는 캠페인 목표, 운영 주기, 승인 구조에 맞춰 보는 사람에게 필요한 신호만 남기는 방향으로 화면을 설계합니다.",
        ],
      },
    ],
  },
  {
    slug: "creator-commerce-loop",
    category: "PLAYBOOK",
    title: "크리에이터와 커머스를 하나의 루프로 묶는 배포 전략",
    excerpt:
      "콘텐츠 발행 이후의 구매 연결과 반복 노출 구조를 설계할 때 체크해야 할 운영 포인트를 다룹니다.",
    publishedAt: "Nov 1, 2026",
    readTime: "6 min read",
    eyebrow: "Distribution Design",
    author: "PMT Commerce Team",
    imageStyle:
      "bg-[radial-gradient(circle_at_28%_62%,rgba(250,214,179,0.9),transparent_18%),radial-gradient(circle_at_68%_30%,rgba(77,55,34,0.75),transparent_22%),linear-gradient(125deg,#41362d_0%,#88715b_28%,#dcc09e_55%,#6c4d31_76%,#1f1915_100%)]",
    intro:
      "크리에이터 콘텐츠가 실제 구매 행동으로 이어지려면 노출 이후의 여정이 함께 설계되어야 합니다. 콘텐츠, 상품, 랜딩, 리타겟팅이 하나의 루프로 연결될 때 반복 가능한 성과가 만들어집니다.",
    sections: [
      {
        heading: "콘텐츠 이후의 동선",
        paragraphs: [
          "좋은 소재가 있어도 구매까지의 경로가 길거나 불명확하면 성과는 흩어집니다. 링크 구조, 상품 맥락, 혜택 메시지를 콘텐츠의 톤과 맞추는 것이 출발점입니다.",
        ],
      },
      {
        heading: "반복 노출의 설계",
        paragraphs: [
          "한 번 본 사람이 다시 만나는 장면까지 계획해야 합니다. 컷다운, 리뷰, 비교형 소재를 순차적으로 배치하면 사용자는 같은 메시지를 지루하지 않게 다시 확인합니다.",
        ],
      },
    ],
  },
  {
    slug: "media-source-library",
    category: "PRODUCT",
    title: "미디어 소스 라이브러리가 협업 속도를 바꾸는 순간",
    excerpt:
      "영상, 이미지, 음원을 한 번 정리해두면 이후 프로젝트의 승인과 재사용 흐름이 얼마나 간결해지는지 살펴봅니다.",
    publishedAt: "Oct 23, 2026",
    readTime: "4 min read",
    eyebrow: "Content Infrastructure",
    author: "PMT Operations",
    imageStyle:
      "bg-[radial-gradient(circle_at_62%_46%,rgba(226,182,133,0.95),transparent_14%),radial-gradient(circle_at_70%_50%,rgba(103,151,150,0.52),transparent_30%),radial-gradient(circle_at_38%_44%,rgba(46,64,66,0.78),transparent_38%),linear-gradient(135deg,#12353b_0%,#396b73_32%,#8f4f2c_57%,#e0a05d_82%,#3d271b_100%)]",
    intro:
      "미디어 소스가 정리되어 있으면 제작의 많은 병목이 사라집니다. 파일을 찾고 권한을 확인하고 이전 버전을 뒤지는 시간이 줄어들수록 팀은 더 빠르게 다음 결과물을 만들 수 있습니다.",
    sections: [
      {
        heading: "재사용 가능한 자산",
        paragraphs: [
          "캠페인이 끝나도 자산의 수명은 끝나지 않습니다. 원본, 승인본, 채널별 변형본을 함께 관리하면 다음 프로젝트에서 바로 꺼내 쓸 수 있는 선택지가 늘어납니다.",
        ],
      },
      {
        heading: "승인 이력까지 함께",
        paragraphs: [
          "라이브러리는 저장소를 넘어 운영 기록이어야 합니다. 누가 어떤 버전을 승인했는지 남아 있어야 재사용 과정에서 불필요한 확인이 줄어듭니다.",
        ],
      },
    ],
  },
  {
    slug: "future-prediction-engine",
    category: "RESEARCH",
    title: "PREDICTIVE ANALYTICS: SEEING TOMORROW, TODAY",
    excerpt:
      "성과 예측과 운영 판단을 같은 문맥에서 읽어야 할 때 필요한 실무형 모델링 관점을 정리했습니다.",
    publishedAt: "Oct 8, 2026",
    readTime: "7 min read",
    eyebrow: "Forecast Models",
    author: "PMT Research",
    imageStyle:
      "bg-[radial-gradient(circle_at_62%_38%,rgba(243,166,105,0.82),transparent_13%),radial-gradient(circle_at_50%_52%,rgba(198,223,224,0.42),transparent_21%),radial-gradient(circle_at_38%_48%,rgba(71,90,95,0.9),transparent_30%),linear-gradient(135deg,#182528_0%,#355760_34%,#c87438_67%,#f0b673_100%)]",
    intro:
      "예측 분석은 미래를 맞히는 기술이 아니라 지금의 선택지를 좁히는 방법입니다. 캠페인 성과와 운영 리소스를 함께 보면 다음 액션의 우선순위가 더 분명해집니다.",
    sections: [
      {
        heading: "예측은 운영 언어로",
        paragraphs: [
          "모델의 정확도만으로는 현장이 움직이지 않습니다. 예측 결과가 예산 조정, 소재 교체, 채널 전환 같은 실행 단위로 번역되어야 합니다.",
        ],
      },
      {
        heading: "불확실성을 다루기",
        paragraphs: [
          "좋은 예측 시스템은 하나의 답보다 범위와 조건을 보여줍니다. 어떤 변수에 따라 결과가 달라지는지 알 때 팀은 더 유연하게 대응할 수 있습니다.",
        ],
      },
    ],
  },
];
