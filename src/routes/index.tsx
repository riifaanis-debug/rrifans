import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import {
  Shield,
  TrendingUp,
  Building2,
  Scale,
  Banknote,
  Sparkles,
  Target,
  Eye,
  Compass,
  Heart,
  Lock,
  Award,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  ArrowLeft,
  Star,
  Quote,
  Menu,
  X,
  Twitter,
  Instagram,
  MessageCircle,
  Music,
} from "lucide-react";
import { submitContact } from "@/lib/contact.functions";
import heroImg from "@/assets/hero.jpg";
import patternImg from "@/assets/pattern.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ريفانس المالية | حلول مالية وعقارية احترافية" },
      {
        name: "description",
        content:
          "ريفانس المالية شركة سعودية متخصصة في الاستشارات والحلول المالية والعقارية والقانونية والمصرفية، مرخصة من البنك المركزي السعودي والهيئة السعودية للمقيمين المعتمدين.",
      },
      { property: "og:title", content: "ريفانس المالية — حلول مالية لنمو مستدام" },
      {
        property: "og:description",
        content: "استشارات وحلول مالية، عقارية، مصرفية وقانونية باحترافية وشفافية.",
      },
    ],
  }),
  component: HomePage,
});

const nav = [
  { id: "vision", label: "الرؤية والرسالة" },
  { id: "sectors", label: "مجالات أعمالنا" },
  { id: "services", label: "خدماتنا" },
  { id: "values", label: "قيمنا" },
  { id: "contact", label: "تواصل معنا" },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <StatsGrid />
      <VisionMission />
      <Founder />
      <Sectors />
      <Services />
      <Values />
      <Testimonials />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HEADER ---------------- */
function Logo({ light = false }: { light?: boolean }) {
  const logoUrl = "/rifanis-logo-banner-transparent.png";
  if (light) {
    return (
      <div className="inline-flex items-center p-2 md:p-3 transition-transform hover:scale-102">
        <img src={logoUrl} alt="ريفانس المالية" className="h-14 md:h-16 w-auto object-contain" />
      </div>
    );
  }
  return (
    <img
      src={logoUrl}
      alt="ريفانس المالية"
      className="h-16 md:h-20 w-auto object-contain transition-transform hover:scale-102"
    />
  );
}

function Header({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FAF9F5]/95 border-b border-[#C0AA72]/20 shadow-[0_4px_25px_rgba(192,170,114,0.06)]">
      <div className="mx-auto max-w-7xl px-5 py-3 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <a href="/" className="block">
          <Logo />
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-navy-deep transition-colors rounded-md hover:bg-secondary"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="القائمة"
          className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border text-navy-deep"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-5 py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setMenuOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-navy-deep font-medium block text-right"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- OPTIONAL DECORATIONS ---------------- */
function OrnamentTop() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 opacity-20 pointer-events-none z-0">
      <svg
        className="w-full h-full text-[#C0AA72]"
        viewBox="0 0 100 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M50 0 C45 15, 30 20, 20 25 C10 30, 0 35, 0 50" />
        <path d="M50 0 C55 15, 70 20, 80 25 C90 30, 100 35, 100 50" />
        <circle cx="50" cy="15" r="8" strokeDasharray="1 1" />
        <circle cx="50" cy="15" r="4" />
        <circle cx="50" cy="28" r="1.5" fill="currentColor" />
        <path d="M50 15 L50 45" strokeDasharray="1 2" />
        <path d="M40 22 C45 25, 48 35, 50 40 C52 35, 55 25, 60 22" />
        <circle cx="20" cy="25" r="1" fill="currentColor" />
        <circle cx="80" cy="25" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

function OrnamentBottom() {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-80 h-40 opacity-20 pointer-events-none z-0">
      <svg
        className="w-full h-full text-[#C0AA72]"
        viewBox="0 0 100 50"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.5"
      >
        <path d="M50 50 C45 35, 30 30, 20 25 C10 20, 0 15, 0 0" />
        <path d="M50 50 C55 35, 70 30, 80 25 C90 20, 100 15, 100 0" />
        <circle cx="50" cy="35" r="8" strokeDasharray="1 1" />
        <circle cx="50" cy="35" r="4" />
        <circle cx="50" cy="22" r="1.5" fill="currentColor" />
        <path d="M50 5 L50 35" strokeDasharray="1 2" />
        <path d="M40 28 C45 25, 48 15, 50 10 C52 15, 55 28, 60 28" />
        <circle cx="20" cy="25" r="1" fill="currentColor" />
        <circle cx="80" cy="25" r="1" fill="currentColor" />
      </svg>
    </div>
  );
}

function StatsGrid() {
  const stats = [
    { value: "25+", label: "خدمة احترافية" },
    { value: "4+", label: "قطاعات تخصصية" },
    { value: "2030", label: "شركاء الرؤية" },
    { value: "100%", label: "الالتزام بالأنظمة" },
  ];

  return (
    <div className="bg-[#FAF9F5] py-4 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center text-center shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-[#C0AA72]/10 transition-all duration-300 hover:shadow-[0_15px_45px_rgba(192,170,114,0.12)] hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-[#C0AA72] tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold text-navy-deep opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-[#130722] text-cream min-h-[75vh] flex flex-col justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/skyline.jpg')",
        clipPath: "polygon(0 0, 100% 0, 100% calc(100% - 40px), 0 100%)",
      }}
    >
      {/* Dark overlay for beautiful readability in space */}
      <div className="absolute inset-0 bg-[#130722]/95 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#130722] via-transparent to-[#130722]/60 z-0" />

      {/* Decorative Watermark ornaments */}
      <OrnamentTop />
      <OrnamentBottom />

      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-16 md:pt-14 md:pb-20 lg:pt-16 lg:pb-24 z-10 w-full flex flex-col items-end">
        {/* Content Section - Align to Right */}
        <div className="text-right max-w-4xl w-full">
          <h1 className="font-display text-[15px] min-[375px]:text-lg min-[425px]:text-xl sm:text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white tracking-wide whitespace-nowrap">
            ريفانس المالية | <span className="font-sans text-[#C0AA72]">Revans Finance</span>
          </h1>

          <p className="mt-2 text-xs min-[375px]:text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-[#C0AA72]">
            شركة سعودية ذات مسؤولية محدودة
          </p>

          {/* Golden divider with central circle aligned to the right */}
          <div
            className="my-6 md:my-8 flex items-center gap-3 w-full max-w-[280px] justify-start"
            dir="rtl"
          >
            <span className="h-[1px] w-24 bg-[#C0AA72]/30" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#C0AA72]" />
            <span className="h-[1px] w-24 bg-[#C0AA72]/30" />
          </div>

          <div
            className="space-y-6 max-w-3xl text-sm sm:text-base md:text-lg text-[#FAF9F5] leading-relaxed md:leading-loose"
            dir="rtl"
          >
            <p className="opacity-95">
              تعمل تحت مظلة قطاع التقنية المالية ( FinTech ) مرخصة من قِبل البنك المركزي السعودي
              وخاضعة لإشراف ورقابة هيئة السوق المالية ، متخصصة في تقديم الحلول والإستشارات المالية
              والعقارية وتقديم خدمات إنترنت الأشياء للأنشطة المالية وأنشطة التأمين والنشاطات الأخرى
              المساعدة لأنشطة الخدمات المالية
            </p>
            <p className="opacity-95">
              تضع معايير جديدة في قطاع التقنية المالية ، وتهتم بدراسة ومعالجة طلبات الأفراد في
              القطاع المصرفي ، وتقدم حلول وإستشارات مالية ، وتلتزم بأعلى معايير الشفافية والسرعة ،
              وتسعى لتخفيف الأعباء المالية عن العملاء ، وفق أعلى معايير الجودة والحوكمة والإبتكار ،
              عبر منظومة رقمية متكاملة
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HEADING ---------------- */
function SectionHead({
  kicker,
  title,
  desc,
  light = false,
}: {
  kicker?: string;
  title: string;
  desc?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {kicker && (
        <div
          className={`section-label ${light ? "text-gold-soft" : "text-gold"}`}
        >
          {kicker}
        </div>
      )}
      <h2
        className={`mt-2 md:mt-3 font-display section-title ${light ? "text-cream" : "text-navy-deep"}`}
      >
        {title}
      </h2>
      <div className="gold-divider mt-3 md:mt-5" />
      {desc && (
        <p
          className={`mt-3 md:mt-5 section-description ${light ? "text-cream/80" : "text-muted-foreground"}`}
        >
          {desc}
        </p>
      )}
    </div>
  );
}

/* ---------------- VISION / MISSION / GOAL ---------------- */
function VisionMission() {
  const [selectedTab, setSelectedTab] = useState<"goal" | "vision" | "mission">("goal");

  const tabs = [
    {
      id: "goal" as const,
      t: "هدفنا",
      icon: Target,
      d: "تقديم منظومة متكاملة من الحلول المالية والعقارية والاستشارية تسهم في تعزيز الاستقرار المالي وتحقيق النمو المستدام للمستفيدين، بما يتواكب مع تطلعات رؤية المملكة 2030.",
    },
    {
      id: "vision" as const,
      t: "رؤيتنا",
      icon: Eye,
      d: "أن تكون ريفانس المالية الخيار الأول والأكثر موثوقية في تقديم الحلول المالية والعقارية المتكاملة، وأن تقود مستقبل الابتكار في القطاع المالي الاستثماري الملتزم.",
    },
    {
      id: "mission" as const,
      t: "رسالتنا",
      icon: Compass,
      d: "تمكين الأفراد وقطاع الأعمال من الوصول إلى حلول مالية وعقارية احترافية تحقق أهدافهم بكفاءة واستدامة، مع التركيز العالي على النزاهة والخبرة والشفافية.",
    },
  ];

  const currentData = tabs.find((b) => b.id === selectedTab) || tabs[0];

  return (
    <section
      id="vision"
      className="relative py-10 md:py-16 bg-background text-navy-deep overflow-hidden"
    >
      {/* Dynamic ambient backgrounds */}
      <img
        src={patternImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.02] pointer-events-none"
        loading="lazy"
      />
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-96 h-96 rounded-full bg-navy/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead
          title="نقود مستقبل الخدمات المالية"
          desc="رؤية طموحة، رسالة سامية، وأهداف راسخة ترسم خارطة طريقنا نحو الريادة والتميز المستدام."
        />

        {/* Interactive Timeline Tape */}
        <div className="relative mt-8 md:mt-12 max-w-3xl mx-auto px-4">
          {/* Connecting Line */}
          <div className="absolute left-6 right-6 h-[4px] md:h-[6px] bg-[#C0AA72] top-1/2 -translate-y-1/2 z-0" />

          {/* Tabs Container */}
          <div className="relative flex justify-between items-center z-10" dir="rtl">
            {tabs.map((tab) => {
              const isActive = selectedTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`w-[28%] text-center py-2.5 sm:py-4 px-2 font-display text-sm sm:text-lg md:text-2xl font-black transition-all duration-300 pointer-events-auto cursor-pointer border-[#C0AA72] border-2 rounded-xl sm:rounded-2xl relative z-20
                    ${
                      isActive
                        ? "bg-[#C0AA72] text-[#2A0845] scale-105 shadow-[0_10px_25px_rgba(192,170,114,0.35)] ring-4 ring-[#C0AA72]/20"
                        : "bg-[#FAF9F5] text-[#C0AA72] hover:bg-[#FAF9F5] hover:text-[#2A0845] hover:border-[#2A0845] scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(192,170,114,0.15)]"
                    }`}
                >
                  {tab.t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Window (Popup Style) */}
        <div className="mt-6 md:mt-8 max-w-3xl mx-auto relative group">
          {/* Glassmorphism Backdrop Shadow */}
          <div className="absolute inset-0 bg-[#C0AA72]/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />

          {/* Active Window */}
          <div className="relative rounded-3xl bg-[#FAF9F5] border-2 border-[#C0AA72]/30 p-6 sm:p-10 shadow-[0_15px_35px_rgba(192,170,114,0.08)] transition-all duration-500 hover:border-[#C0AA72]/50">
            {/* Active indicator arrow pointing precisely to selected button */}
            <div
              className="absolute -top-[10px] h-4 w-4 rotate-45 border-t-2 border-l-2 border-[#C0AA72]/30 bg-[#FAF9F5] transition-all duration-500 ease-out"
              style={{
                left: selectedTab === "mission" ? "14%" : selectedTab === "vision" ? "50%" : "86%",
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />

            <div className="text-right" dir="rtl">
              {/* Title heading with dot */}
              <div className="flex items-center justify-start gap-2 select-none">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-navy-deep">
                  {currentData.t}
                </h3>
                <span className="h-2 w-2 rounded-full bg-[#C0AA72] inline-block mt-1" />
              </div>

              {/* Accent styling line */}
              <div className="h-[2px] w-12 bg-[#C0AA72] mt-3 mb-6" />

              {/* Content description */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose text-justify font-sans">
                {currentData.d}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SECTORS ---------------- */
function Sectors() {
  const sectors = [
    {
      icon: TrendingUp,
      t: "القطاع المالي",
      items: [
        "خدمات إنترنت الأشياء المالية",
        "الأنشطة والخدمات المالية",
        "التأمين ضد الخسائر المالية",
        "الاستشارات المالية",
        "أنظمة المدفوعات والتسويات",
      ],
    },
    {
      icon: Building2,
      t: "القطاع العقاري",
      items: [
        "الاستشارات العقارية",
        "الوساطة العقارية",
        "إدارة الأملاك",
        "المزادات العقارية",
        "إدارة المرافق العقارية",
      ],
    },
    {
      icon: Banknote,
      t: "القطاع المصرفي",
      items: [
        "الحلول المصرفية الرقمية",
        "خدمات الأفراد وقطاع الأعمال",
        "إدارة المخاطر والامتثال",
        "إدارة السيولة والخزينة",
        "الخدمات المصرفية الإسلامية",
      ],
    },
    {
      icon: Scale,
      t: "القطاع القانوني",
      items: [
        "الاستشارات القانونية",
        "صياغة ومراجعة العقود",
        "التمثيل القانوني والتقاضي",
        "الامتثال والحوكمة القانونية",
        "التحكيم وتسوية المنازعات",
      ],
    },
  ];

  // We duplicate the sectors array multiple times to fill the infinite marquee line.
  // Repeating 4 times gives 16 cards, ensuring perfect continuity on all screen sizes.
  const duplicatedSectors = [...sectors, ...sectors, ...sectors, ...sectors];

  return (
    <section id="sectors" className="py-8 md:py-12 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead
          kicker="مجالات أعمالنا"
          title="منظومة متكاملة"
          desc="نُقدّم منظومة متكاملة من الحلول الاحترافية في القطاعات المالية والعقارية والمصرفية والقانونية، تجمع بين الخبرة المتخصصة والابتكار التقني."
        />
      </div>

      <div className="relative mt-8 md:mt-12 overflow-hidden py-4 w-full" dir="ltr">
        {/* Faint shadows/gradients masking are used on side edges for elegant integration */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 md:w-32 bg-gradient-to-r from-background via-background/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 md:w-32 bg-gradient-to-l from-background via-background/60 to-transparent" />

        {/* Endless scrolling track using optimized accelerated CSS animation */}
        <div className="flex gap-4 md:gap-6 animate-marquee py-2 select-none">
          {duplicatedSectors.map(({ icon: Icon, t, items }, idx) => (
            <article
              key={`${t}-${idx}`}
              dir="rtl"
              className="w-[280px] md:w-[350px] shrink-0 card-elevated rounded-2xl md:rounded-3xl p-5 md:p-7 transition-all duration-300 hover:shadow-xl hover:border-gold/50 hover:bg-card/95"
            >
              <div className="flex items-start gap-3 md:gap-5">
                <div className="grid h-11 w-11 md:h-14 md:w-14 shrink-0 place-items-center rounded-xl md:rounded-2xl gradient-navy text-gold shadow-luxe">
                  <Icon className="h-5 w-5 md:h-7 md:w-7" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-base md:text-xl font-bold text-navy-deep">
                    {t}
                  </h3>
                </div>
              </div>
              <ul className="mt-4 md:mt-6 space-y-2 md:space-y-2.5 text-right">
                {items.map((it) => (
                  <li
                    key={it}
                    className="flex items-start gap-2.5 text-xs md:text-sm text-foreground/85"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full gradient-gold" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      i: Shield,
      t: "إعفاء من المنتجات التمويلية",
      d: "تقديم طلب إعفاء من الالتزامات التمويلية بسبب العجز الطبي المعتمد.",
    },
    {
      i: Compass,
      t: "إعادة جدولة المنتجات التمويلية",
      d: "إعادة تنظيم الالتزامات بما يتناسب مع القدرة المالية وتفادي التعثر.",
    },
    {
      i: Scale,
      t: "إتاحة النسبة النظامية",
      d: "إتاحة النسبة النظامية من الدخل والمبالغ المستثناة من الحجز وفق الأنظمة.",
    },
    {
      i: Banknote,
      t: "شكاوى المؤسسات المالية",
      d: "تقديم ومتابعة الشكاوى لدى البنك المركزي السعودي (ساما تهتم).",
    },
    {
      i: Award,
      t: "شكاوى هيئة التأمين",
      d: "تقديم الشكاوى ومتابعتها لدى هيئة التأمين على الجهات المرخصة.",
    },
    {
      i: Building2,
      t: "التقييم العقاري المعتمد",
      d: "تقارير تقييم عقاري معتمدة لدى البنوك والجهات القضائية والحكومية.",
    },
  ];
  return (
    <section id="services" className="py-10 md:py-16 bg-cream">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead
          kicker="خدماتنا"
          title="حلول احترافية مصممة لاحتياجاتك"
          desc="نُرافقك في كل خطوة بحلول مرنة، سرّية، ومسؤولة تساعدك على استعادة التوازن المالي وتحقيق الاستقرار والنمو المستدام."
        />

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map(({ i: Icon, t, d }) => (
            <div
              key={t}
              className="group relative overflow-hidden rounded-3xl bg-card p-6 md:p-8 border border-gold/15 hover:border-gold/45 transition-all duration-500 hover:shadow-[0_22px_45px_rgba(212,175,55,0.06)] hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Corner soft glowing reflection */}
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full gradient-gold opacity-0 blur-2xl group-hover:opacity-10 transition duration-700 pointer-events-none" />

              <div>
                {/* Heading with smooth colors transition */}
                <h3 className="font-display text-lg md:text-xl font-black text-navy-deep group-hover:text-gold transition-colors duration-300">
                  {t}
                </h3>

                {/* Thin gold styling accent */}
                <div className="h-[2px] w-8 bg-gold mt-2.5 rounded-full transition-all duration-500 group-hover:w-20" />

                {/* Description */}
                <p className="mt-4 text-xs md:text-sm text-muted-foreground leading-relaxed md:leading-loose text-justify">
                  {d}
                </p>
              </div>

              {/* Bottom Expandable Gradient Accent Line */}
              <div className="h-[3px] w-0 bg-gradient-to-r from-gold/30 via-gold/90 to-gold/30 absolute bottom-0 right-0 left-0 mx-auto group-hover:w-2/3 transition-all duration-500 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- VALUES ---------------- */
function Values() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const v = [
    { t: "الشفافية", d: "وضوح كامل في جميع التعاملات يعزز الثقة مع العملاء والشركاء." },
    { t: "المسؤولية", d: "التزام أخلاقي ومهني تجاه العملاء والشركاء والمجتمع." },
    { t: "الثقة", d: "الأساس الذي نبني عليه علاقاتنا مع كل عملائنا وشركائنا." },
  ];

  const currentData = v[selectedIdx] || v[0];

  // Dynamic left position for the active selection arrow pointing precisely to the chosen button
  // With 3 items in RTL layout: 86% for الشفافية, 50% for المسؤولية, and 14% for الثقة
  const arrowPosition = selectedIdx === 0 ? 86 : selectedIdx === 1 ? 50 : 14;

  return (
    <section
      id="values"
      className="relative py-10 md:py-16 bg-background text-navy-deep overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <SectionHead
          kicker="قيمنا"
          title="القيم التي نُؤمن بها"
          desc="ثلاث قيم جوهرية تُشكّل هويتنا وتوجّه كل قرار وكل خدمة وعلاقة نبنيها لعملائنا وشركائنا."
        />

        {/* Interactive Timeline Tape */}
        <div className="relative mt-8 md:mt-12 max-w-4xl mx-auto px-4">
          {/* Connecting Line */}
          <div className="absolute left-6 right-6 h-[4px] md:h-[6px] bg-[#C0AA72] top-1/2 -translate-y-1/2 z-0" />

          {/* Tabs Container */}
          <div className="relative flex justify-between items-center z-10" dir="rtl">
            {v.map((item, idx) => {
              const isActive = selectedIdx === idx;
              return (
                <button
                  key={item.t}
                  onClick={() => setSelectedIdx(idx)}
                  className={`w-[28%] text-center py-2 sm:py-3.5 px-1 sm:px-2 font-display text-xs sm:text-base md:text-xl font-black transition-all duration-300 pointer-events-auto cursor-pointer border-[#C0AA72] border-2 rounded-xl sm:rounded-2xl relative z-20
                    ${
                      isActive
                        ? "bg-[#C0AA72] text-[#2A0845] scale-105 shadow-[0_10px_25px_rgba(192,170,114,0.35)] ring-4 ring-[#C0AA72]/20"
                        : "bg-[#FAF9F5] text-[#C0AA72] hover:bg-[#FAF9F5] hover:text-[#2A0845] hover:border-[#2A0845] scale-95 shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_rgba(192,170,114,0.15)]"
                    }`}
                >
                  {item.t}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Window (Popup Style) */}
        <div className="mt-12 max-w-4xl mx-auto relative group">
          {/* Glassmorphism Backdrop Shadow */}
          <div className="absolute inset-0 bg-[#C0AA72]/5 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity pointer-events-none" />

          {/* Active Window */}
          <div className="relative rounded-3xl bg-[#FAF9F5] border-2 border-[#C0AA72]/30 p-6 sm:p-10 shadow-[0_15px_35px_rgba(192,170,114,0.08)] transition-all duration-500 hover:border-[#C0AA72]/50">
            {/* Active indicator arrow pointing precisely to selected button */}
            <div
              className="absolute -top-[10px] h-4 w-4 rotate-45 border-t-2 border-l-2 border-[#C0AA72]/30 bg-[#FAF9F5] transition-all duration-500 ease-out"
              style={{
                left: `${arrowPosition}%`,
                transform: "translateX(-50%) rotate(45deg)",
              }}
            />

            <div className="text-right" dir="rtl">
              {/* Title heading with dot */}
              <div className="flex items-center justify-start gap-2 select-none">
                <h3 className="font-display text-2xl sm:text-3xl font-black text-navy-deep">
                  {currentData.t}
                </h3>
                <span className="h-2 w-2 rounded-full bg-[#C0AA72] inline-block mt-1" />
              </div>

              {/* Accent styling line */}
              <div className="h-[2px] w-12 bg-[#C0AA72] mt-3 mb-6" />

              {/* Content description */}
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed md:leading-loose text-justify font-sans">
                {currentData.d}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const t = [
    {
      q: "حلول واقعية ونتائج ملموسة",
      b: "ساعدت ريفانس المالية في التعامل مع تحديات مالية واستثمارية معقدة عبر حلول عملية ومدروسة ساهمت في تحسين الوضع المالي بصورة كبيرة.",
      a: "أحد العملاء",
    },
    {
      q: "ثقة وشفافية",
      b: "ما يميز ريفانس المالية هو الوضوح الكامل والاهتمام الحقيقي بالعميل، حيث تم تقديم الحلول المناسبة باحترافية ومصداقية عالية.",
      a: "عميل خدمات استشارية",
    },
    {
      q: "تجربة احترافية متكاملة",
      b: "قدمت ريفانس المالية حلولاً مالية واستشارية ساعدتنا على إعادة تنظيم أوضاعنا المالية وتحسين كفاءة أعمالنا بصورة واضحة واحترافية.",
      a: "عميل قطاع الأعمال",
    },
  ];
  return (
    <section className="py-8 md:py-12 bg-cream">
      <div className="mx-auto max-w-7xl px-4">
        <SectionHead kicker="تجارب عملائنا" title="ثقة عملائنا هي إنجازنا الحقيقي" />
        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-4 md:gap-6">
          {t.map((it) => (
            <figure key={it.q} className="card-elevated rounded-2xl md:rounded-3xl p-5 md:p-8">
              <Quote className="h-6 w-6 md:h-8 md:w-8 text-gold" />
              <div className="mt-3 md:mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 md:h-4 md:w-4 fill-gold text-gold" />
                ))}
              </div>
              <blockquote className="mt-3 md:mt-4 font-display text-base md:text-lg font-bold text-navy-deep">
                "{it.q}"
              </blockquote>
              <p className="mt-2 md:mt-3 text-xs md:text-sm text-muted-foreground leading-relaxed md:leading-loose">
                {it.b}
              </p>
              <figcaption className="mt-4 md:mt-5 text-[10px] md:text-xs font-bold text-gold tracking-wider">
                — {it.a}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOUNDER ---------------- */
function Founder() {
  return (
    <section className="py-8 md:py-12 bg-background">
      <div className="mx-auto max-w-5xl px-4">
        <SectionHead kicker="كلمة المؤسس" title="من فكرة .. إلى علامة تجارية رائدة" />
        <div className="mt-6 md:mt-10 card-elevated rounded-2xl md:rounded-3xl p-5 md:p-10 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full gradient-gold opacity-10 blur-3xl" />
          <Quote className="h-8 w-8 md:h-10 md:w-10 text-gold" />
          <div className="mt-4 md:mt-5 space-y-3 md:space-y-5 text-xs md:text-sm text-foreground/85 leading-relaxed md:leading-loose">
            <p>
              جاءت فكرة تأسيس ريفانس المالية من قناعة راسخة بأن القطاع المالي والعقاري بحاجة إلى
              مفهوم أكثر احترافية ومرونة، مفهوم لا يقتصر على تقديم الخدمة، بل يمتد ليكون شريكاً
              حقيقياً يساعد العملاء على تجاوز التحديات وبناء مستقبل أكثر استقراراً وثقة.
            </p>
            <p>
              ومن هنا، جاءت ريفانس المالية لتكون أكثر من مجرد اسم في القطاع المالي، بل علامة تجارية
              رائدة استطاعت أن تثبت مكانتها وهويتها الاحترافية، وأن تبني حضوراً يعكس الثقة، الجودة،
              والتميز.
            </p>
            <p className="text-navy-deep font-bold">
              نؤمن بأن النجاح الحقيقي لا يتحقق فقط بالأرقام، بل ببناء الثقة وصناعة الأثر وخلق تجربة
              مختلفة.
            </p>
          </div>
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-border flex items-center gap-3 md:gap-4">
            <div className="grid h-10 w-10 md:h-12 md:w-12 place-items-center rounded-full gradient-navy text-gold font-display font-black">
              ر
            </div>
            <div>
              <div className="font-display text-sm md:text-base font-bold text-navy-deep">
                مؤسس ريفانس المالية
              </div>
              <div className="text-[10px] md:text-xs text-gold tracking-widest">
                FOUNDER • RIFANIS FINANCE
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
function Partners() {
  const p = [
    "البنك الأهلي السعودي SNB",
    "مصرف الراجحي",
    "بنك الرياض",
    "صندوق التنمية العقارية",
    "هيئة السوق المالية",
    "وزارة الاستثمار",
  ];
  return (
    <section className="py-8 md:py-10 bg-cream border-y border-border">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <div className="text-[10px] md:text-xs font-bold tracking-[0.25em] md:tracking-[0.3em] text-gold">
            شركاؤنا
          </div>
          <h2 className="mt-2 md:mt-3 font-display text-lg sm:text-xl md:text-3xl font-black text-navy-deep">
            شراكات استراتيجية مع كبرى الجهات
          </h2>
          <div className="gold-divider mt-3 md:mt-5 mx-auto" />
        </div>
        <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {p.map((name) => (
            <div
              key={name}
              className="group relative rounded-xl md:rounded-2xl border border-border bg-card p-3 md:p-5 text-center hover:border-gold/60 hover:shadow-luxe transition"
            >
              <div className="grid h-10 w-10 md:h-12 md:w-12 mx-auto place-items-center rounded-lg md:rounded-xl gradient-navy text-gold mb-2 md:mb-3">
                <Building2 className="h-5 w-5 md:h-6 md:w-6" />
              </div>
              <div className="text-[11px] md:text-xs font-bold text-navy-deep leading-snug">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sendContact = useServerFn(submitContact);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    try {
      await sendContact({
        data: {
          name: String(formData.get("name") ?? ""),
          phone: String(formData.get("phone") ?? ""),
          message: String(formData.get("message") ?? ""),
        },
      });
      setSent(true);
    } catch (err: any) {
      setError(err?.message || "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-8 md:py-12 gradient-navy text-cream overflow-hidden"
    >
      <img
        src={heroImg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-navy-deep/80" />

      <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-8 md:gap-12">
        <div>
          <SectionHead
            light
            kicker="تواصل معنا"
            title="نحن هنا لخدمتك"
            desc="فريقنا المتخصص جاهز للإجابة على استفساراتك وتقديم الاستشارة المناسبة لاحتياجاتك المالية والعقارية."
          />

          <div className="mt-6 md:mt-10 space-y-4 md:space-y-5">
            {[
              { i: Phone, t: "الهاتف", v: "8002440432", href: "tel:8002440432" },
              {
                i: Mail,
                t: "البريد الإلكتروني",
                v: "info@rifans.net",
                href: "mailto:info@rifans.net",
              },
              { i: MapPin, t: "العنوان", v: "المملكة العربية السعودية — الطائف" },
            ].map(({ i: Icon, t, v, href }) => {
              const content = (
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] md:text-xs text-gold-soft tracking-widest">{t}</div>
                  <div className="text-cream text-sm md:text-base font-bold truncate transition-colors hover:text-gold">
                    {v}
                  </div>
                </div>
              );
              return (
                <div key={t} className="flex items-center gap-3 md:gap-4">
                  <div className="grid h-10 w-10 md:h-12 md:w-12 shrink-0 place-items-center rounded-lg md:rounded-xl gradient-gold text-navy-deep">
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                  </div>
                  {href ? (
                    <a href={href} className="min-w-0 flex-1 flex">
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl md:rounded-3xl bg-cream p-5 md:p-8 shadow-luxe text-foreground"
          suppressHydrationWarning={true}
        >
          <h3 className="font-display text-lg md:text-2xl font-bold text-navy-deep">تواصل معنا</h3>
          <p className="mt-1 text-xs md:text-sm text-muted-foreground">
            سنرد عليك خلال 24 ساعة عمل.
          </p>

          {sent ? (
            <div className="mt-6 md:mt-8 rounded-2xl border border-gold/40 bg-gold/10 p-5 md:p-6 text-center">
              <CheckCircle2 className="mx-auto h-8 w-8 md:h-10 md:w-10 text-gold" />
              <p className="mt-3 text-sm md:text-base font-bold text-navy-deep">
                تم استلام رسالتك بنجاح
              </p>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                شكراً لتواصلك مع ريفانس المالية.
              </p>
            </div>
          ) : (
            <div className="mt-5 md:mt-6 space-y-3 md:space-y-4">
              {error && (
                <div className="rounded-xl border border-red-300 bg-red-50 p-3 text-xs md:text-sm text-red-700 text-right">
                  {error}
                </div>
              )}
              {[
                { l: "الاسم الكامل", n: "name", type: "text" },
                { l: "رقم الجوال", n: "phone", type: "tel" },
              ].map((f) => (
                <div key={f.n}>
                  <label className="text-[11px] md:text-xs font-bold text-navy-deep block">
                    {f.l}
                  </label>
                  <input
                    required
                    type={f.type}
                    name={f.n}
                    dir="rtl"
                    className="mt-1 md:mt-1.5 w-full rounded-lg md:rounded-xl border border-border bg-background px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm text-right focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition"
                    suppressHydrationWarning={true}
                  />
                </div>
              ))}
              <div>
                <label className="text-[11px] md:text-xs font-bold text-navy-deep block">
                  رسالتك
                </label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  dir="rtl"
                  className="mt-1 md:mt-1.5 w-full rounded-lg md:rounded-xl border border-border bg-background px-3 md:px-4 py-2.5 md:py-3 text-xs md:text-sm text-right focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition resize-none"
                  suppressHydrationWarning={true}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg md:rounded-xl gradient-gold px-5 md:px-6 py-3 text-xs md:text-sm font-bold text-navy-deep shadow-luxe hover:opacity-95 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-navy-deep border-t-transparent" />
                ) : (
                  <>
                    إرسال الرسالة <ArrowLeft className="h-3.5 w-3.5 md:h-4 md:w-4" />
                  </>
                )}
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="bg-navy-deep text-cream/70 py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-3 gap-6 md:gap-8 items-start">
        <div>
          <Logo light />
          <p className="mt-3 md:mt-4 text-xs md:text-sm leading-relaxed md:leading-loose text-cream/65 max-w-sm">
            حلول مالية وعقارية احترافية تجمع بين الخبرة والتقنية لتقديم قيمة حقيقية ومستدامة.
          </p>
          {/* Social media links row inside Footer */}
          <div className="mt-5 flex items-center gap-3">
            {[
              { i: Twitter, label: "X.com", href: "https://x.com/rifaniis" },
              { i: Instagram, label: "Instagram", href: "https://www.instagram.com/rifaniis/" },
              { i: MessageCircle, label: "WhatsApp", href: "https://wa.me/966553550496" },
              { i: Music, label: "TikTok", href: "https://www.tiktok.com/@rifans.r" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-navy-deep hover:bg-[#C0AA72] text-[#C0AA72] hover:text-navy-deep border border-[#C0AA72]/20 hover:border-[#C0AA72] transition-all duration-300"
                title={s.label}
              >
                <s.i className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="text-[10px] md:text-xs font-bold tracking-widest text-gold">
            روابط سريعة
          </div>
          <ul className="mt-3 md:mt-4 grid grid-cols-2 gap-1.5 md:gap-2 text-xs md:text-sm">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-gold transition">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[10px] md:text-xs font-bold tracking-widest text-gold">
            الاعتمادات
          </div>
          <ul className="mt-3 md:mt-4 text-xs md:text-sm space-y-1.5 md:space-y-2">
            <li>• البنك المركزي السعودي (ساما)</li>
            <li>• الهيئة السعودية للمقيمين المعتمدين</li>
            <li>• الهيئة السعودية للملكية الفكرية</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 mt-6 md:mt-10 pt-4 md:pt-6 border-t border-cream/10 flex flex-wrap justify-between items-center gap-2 md:gap-3 text-[10px] md:text-xs text-cream/50">
        <div>© {new Date().getFullYear()} ريفانس المالية. جميع الحقوق محفوظة.</div>
        <div className="text-gold tracking-widest">حلول مالية .. لنمو مستدام</div>
      </div>
    </footer>
  );
}
