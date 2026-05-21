import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import bgTexture from "@/assets/bg-texture.jpg";
import work1 from "@/assets/work-1.jpg";
import work2 from "@/assets/work-2.jpg";
import work3 from "@/assets/work-3.jpg";
import work4 from "@/assets/work-4.jpg";
import work5 from "@/assets/work-5.jpg";
import work6 from "@/assets/work-6.jpg";

export const Route = createFileRoute("/")({ component: Index });

const nav = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl text-gold">KN</span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:block">Studio · MMXXV</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="gold-underline text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="border border-gold/60 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-primary-foreground transition">
          Let's Talk
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end overflow-hidden bg-ink">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-1 opacity-[0.08]">
        <img src={bgTexture} alt="" className="h-full w-full object-cover" />
      </div>
      {/* animated background blobs */}
      <div className="pointer-events-none absolute inset-1">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] animate-float" />
        <div className="absolute -right-32 bottom-0 h-[600px] w-[600px] rounded-full bg-accent/20 blur-[140px] animate-float [animation-delay:-3s]" />
        <div className="absolute inset-0 bg-grain opacity-40" />
        <div className="absolute inset-0 cinema-vignette" />
      </div>

      {/* portrait */}
      <img
        src={heroPortrait}
        alt="Kuldeep Nhemafuki illustrated portrait"
        width={1024}
        height={1024}
        className="absolute right-0 top-0 h-full w-1/2 object-cover object-center opacity-90 mix-blend-luminosity md:opacity-100 md:mix-blend-normal"
        style={{ maskImage: "linear-gradient(to left, black 50%, transparent)" }}
      />

      {/* top meta strip */}
      <div className="absolute left-0 right-0 top-24 z-10 mx-auto hidden max-w-7xl px-6 md:flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <div>
          <div className="text-gold mb-1">Reel</div>
          <div>2018 — 2025</div>
        </div>
        <div className="text-right">
          <div className="text-gold mb-1">Based In</div>
          <div>Bhaktapur · Nepal</div>
          <div>27.6710° N, 85.4298° E</div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        <p className="mb-6 text-[11px] uppercase tracking-[0.4em] text-gold animate-rise">A Cinematic Portfolio</p>
        <h1 className="font-display text-[18vw] leading-[0.82] tracking-tight md:text-[12rem] animate-rise [animation-delay:120ms]">
          KULDEEP
          <br />
          <span className="text-gold italic font-serif-display text-[14vw] md:text-[9rem] font-sans font-normal">Nhemafuki</span>
        </h1>
        <div className="mt-10 grid gap-10 md:grid-cols-2 md:items-end">
          <p className="max-w-md font-serif-display text-2xl italic text-foreground/90 animate-rise [animation-delay:240ms]">
            “Crafting emotion through motion &amp; design.”
          </p>
          <div className="flex flex-wrap items-center gap-4 md:justify-end animate-rise [animation-delay:360ms]">
            <a href="#work" className="group flex items-center gap-3 bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground transition hover:bg-foreground">
              View Portfolio
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="flex items-center gap-3 border border-foreground/30 px-6 py-4 text-[11px] uppercase tracking-[0.3em] hover:border-gold hover:text-gold transition">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* marquee bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-border bg-background/40 py-3 backdrop-blur">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>Motion Graphics</span><span className="text-gold">✦</span>
              <span>2D Animation</span><span className="text-gold">✦</span>
              <span>Illustration</span><span className="text-gold">✦</span>
              <span>Creative Direction</span><span className="text-gold">✦</span>
              <span>Visual Storytelling</span><span className="text-gold">✦</span>
              <span>Branding</span><span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ num, title }: { num: string; title: string }) {
  return (
    <div className="mb-12 flex items-end justify-between border-b border-border pb-4">
      <div className="flex items-center gap-4">
        <span className="font-display text-gold text-sm">{num}</span>
        <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">{title}</span>
      </div>
      <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">— Reel</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="01" title="About" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-6xl leading-[0.95] md:text-8xl">
              A storyteller who <span className="text-gold italic font-serif-display font-sans font-normal not-italic">draws</span> with light, rhythm and meaning.
            </h2>
            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I'm Kuldeep — a motion graphics artist, illustrator and creative director based in Bhaktapur, Nepal. For over seven years I've been shaping ideas into cinematic visual stories: frame by frame, breath by breath.
              </p>
              <p>
                My work pulls from the architecture of Nepali temples, the geometry of mandalas, and the quiet drama of cinema. Every piece is an attempt to make audiences feel something — wonder, tension, stillness — through motion and composition.
              </p>
              <p>
                I lead teams, mentor emerging animators, and treat each project as a short film with intent, weight and a soul.
              </p>
            </div>

            <blockquote className="mt-12 border-l-2 border-gold pl-6 font-serif-display text-2xl italic md:text-3xl">
              “Design is not decoration — it is the rhythm beneath the story.”
            </blockquote>
          </div>

          <div className="md:col-span-5">
            <div className="border border-border bg-card/40 p-8 backdrop-blur">
              <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-gold">Education</p>
            <ul className="space-y-6">
                <li>
                  <div className="font-display text-2xl">S.L.C.</div>
                  <div className="text-sm text-muted-foreground">Mount Everest Higher Secondary School, Suryabinayak Bhaktapur, Nepal · 2013 AD</div>
                </li>
                <li>
                  <div className="font-display text-2xl">Higher Education (Science)</div>
                  <div className="text-sm text-muted-foreground">Khwopa Higher Secondary School – Dekocha, Bhaktapur · 2014 – 2015 AD</div>
                </li>
                <li>
                  <div className="font-display text-2xl">Advanced Diploma in Animation</div>
                  <div className="text-sm text-muted-foreground">Graphic Design · Motion Graphics · Storytelling</div>
                </li>
              </ul>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 text-center">
                <div>
                  <div className="font-display text-5xl text-gold">7<span className="text-foreground">+</span></div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Years</div>
                </div>
                <div>
                  <div className="font-display text-5xl text-gold">120<span className="text-foreground">+</span></div>
                  <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const experiences = [
  { year: "2025 — Now", role: "Motion Graphics Mentor", company: "Broadway Infosys", desc: "Mentoring the next generation of motion designers through structured curriculum, critique sessions and industry-grade project work." },
  { year: "2021 — Now", role: "Creative Head & 2D Animator", company: "Innovate Tech", desc: "Leading creative direction across animated campaigns and storytelling pieces. Building and guiding a multidisciplinary design and animation team." },
  { year: "2018 — Now", role: "Freelance Motion & Graphic Designer", company: "Independent", desc: "Partnering with brands, NGOs and creators to craft emotionally resonant visuals — from logo systems to long-form animated stories." },
  { year: "2019 — 2020", role: "Lead Animator", company: "Smaterr Pvt. Ltd.", desc: "Oversaw production pipelines, quality control and creative supervision for a team of 2D animators on commercial projects." },
  { year: "2018 — 2019", role: "Senior Graphic Designer", company: "Infinia Hub", desc: "Delivered brand systems, marketing collateral and editorial design with a focus on narrative-led visual identities." },
];

function Experience() {
  return (
    <section id="experience" className="relative bg-ink py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="02" title="Experience" />
        <h2 className="font-display text-5xl md:text-7xl mb-20">The reel of <span className="italic font-serif-display text-gold font-sans font-normal not-italic">years</span>.</h2>
        <div className="relative">
          <div className="absolute left-0 md:left-[20%] top-0 bottom-0 w-px bg-border" />
          <ul className="space-y-16">
            {experiences.map((e, i) => (
              <li key={i} className="relative grid gap-6 md:grid-cols-5 md:gap-12 pl-8 md:pl-0">
                <div className="absolute left-0 md:left-[calc(20%-5px)] top-2 h-2.5 w-2.5 rounded-full bg-gold ring-4 ring-ink" />
                <div className="md:col-span-1 md:text-right md:pr-12">
                  <div className="font-display text-xl text-gold">{e.year}</div>
                </div>
                <div className="md:col-span-4 md:pl-12">
                  <h3 className="font-display text-3xl md:text-4xl">{e.role}</h3>
                  <div className="text-sm uppercase tracking-[0.2em] text-muted-foreground mt-1">{e.company}</div>
                  <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">{e.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * ────────────────────────────────────────────────────────────────
 *  HOW TO ADD YOUR OWN WORK
 * ────────────────────────────────────────────────────────────────
 *  Each sub-category has an `items` array. Add objects like:
 *
 *    { type: "image", src: "/my-work/poster.jpg", title: "..." }
 *    { type: "video", src: "/my-work/reel.mp4", poster: "/cover.jpg", title: "..." }
 *    { type: "youtube", src: "https://www.youtube.com/embed/VIDEO_ID", title: "..." }
 *
 *  - Images/videos: drop into `public/` and reference as "/filename.ext"
 *    (or `src/assets/` and import at top of this file).
 *  - YouTube/Vimeo: use the EMBED url (e.g. youtube.com/embed/XXXX).
 * ────────────────────────────────────────────────────────────────
 */

type WorkItem =
  | { type: "image"; src: string; title: string }
  | { type: "video"; src: string; poster?: string; title: string }
  | { type: "youtube"; src: string; title: string };

type SubCategory = {
  name: string;
  count: string;
  highlights: string[];
  items: WorkItem[];
};

const workCategories: Array<{
  id: string;
  num: string;
  label: string;
  cover: string;
  title: string;
  winningTitle: string;
  tag: string;
  desc: string;
  role: string;
  tools: string;
  subs: SubCategory[];
}> = [
  {
    id: "social",
    num: "01",
    label: "Social Media",
    cover: work4,
    title: "Hands That Grow",
    winningTitle: "Campaign of the Year — Nepal Social Impact Awards 2024",
    tag: "Awareness Campaign · Instagram",
    desc: "A 12-piece carousel series turning farming livelihoods into a slow, frame-by-frame visual poem.",
    role: "Illustrator · Animator",
    tools: "Procreate · After Effects",
    subs: [
      {
        name: "Instagram Carousels",
        count: "42 sets",
        highlights: ["Avg. 18k organic reach / set", "Featured on @nepalcreatives", "Built for 1:1 + 4:5 ratios"],
        items: [
          { type: "image", src: work4, title: "Hands That Grow · Slide 01" },
          { type: "image", src: work3, title: "Cardamom Story · Slide 04" },
          { type: "image", src: work2, title: "DCA Awareness · Slide 07" },
        ],
      },
      {
        name: "Story Templates",
        count: "18 systems",
        highlights: ["Editable AE templates", "Brand-locked colour systems", "9:16 motion-ready"],
        items: [
          { type: "image", src: work6, title: "Mandala Story Frame" },
          { type: "image", src: work1, title: "Junior Jury Story Set" },
        ],
      },
      {
        name: "Reels Covers",
        count: "60+ frames",
        highlights: ["Designed for thumb-stop", "Consistent grid identity", "Series-friendly"],
        items: [
          { type: "image", src: work5, title: "Echo Reel Cover" },
          { type: "image", src: work2, title: "DCA Reel Cover" },
        ],
      },
      {
        name: "Brand Posts",
        count: "Ongoing",
        highlights: ["Monthly retainers", "Cross-platform export", "Copy + design combined"],
        items: [
          { type: "image", src: work3, title: "Cardamom Post Series" },
          { type: "image", src: work6, title: "Mandala Brand Post" },
        ],
      },
    ],
  },
  {
    id: "reel",
    num: "02",
    label: "Reel",
    cover: work5,
    title: "Echo — A Motion Study",
    winningTitle: "Selected · Kathmandu International Mountain Film Festival",
    tag: "Personal Reel Piece · 01:48",
    desc: "A meditative short reel exploring stillness, breath and the geometry of light across the Himalayan dusk.",
    role: "Director · Editor",
    tools: "After Effects · Blender · DaVinci",
    subs: [
      {
        name: "Short Films",
        count: "07 pieces",
        highlights: ["Festival-ready cuts", "Original sound design", "DCP delivery"],
        items: [
          { type: "youtube", src: "https://www.youtube.com/embed/aqz-KE-bpKQ", title: "Short Film · Echo" },
          { type: "image", src: work5, title: "Echo · Still Frame" },
        ],
      },
      {
        name: "Showreels",
        count: "Yearly cut",
        highlights: ["2024 reel — 01:30", "Director-led edit", "Sound by Bibek Tamang"],
        items: [
          { type: "youtube", src: "https://www.youtube.com/embed/ScMzIvxBSi4", title: "Studio Reel 2024" },
        ],
      },
      {
        name: "Cinematic Cuts",
        count: "12 films",
        highlights: ["Hand-graded LUTs", "16:9 + 2.39:1", "Brand storytelling"],
        items: [
          { type: "image", src: work2, title: "DCA Cinematic Frame" },
          { type: "image", src: work4, title: "Hands That Grow Frame" },
        ],
      },
      {
        name: "Promo Reels",
        count: "23 brands",
        highlights: ["Built for paid social", "Vertical-first", "15s / 30s versions"],
        items: [
          { type: "image", src: work3, title: "Cardamom Promo" },
          { type: "image", src: work6, title: "Mandala Promo" },
        ],
      },
    ],
  },
  {
    id: "2d",
    num: "03",
    label: "2D Animation",
    cover: work1,
    title: "Junior Jury",
    winningTitle: "Best Animated Series for Children — YouTube Nepal 2023",
    tag: "2D Animation · YouTube Series · S01–S02",
    desc: "A character-led courtroom series for kids — written, storyboarded and animated frame by frame.",
    role: "Director · Lead Animator",
    tools: "After Effects · Illustrator · Toon Boom",
    subs: [
      {
        name: "Character Animation",
        count: "30 rigs",
        highlights: ["Duik / Rubberhose rigs", "Expressive lip-sync", "Reusable libraries"],
        items: [
          { type: "image", src: work1, title: "Junior Jury · Hero Rig" },
          { type: "image", src: work4, title: "Farmer Rig" },
        ],
      },
      {
        name: "Explainer Films",
        count: "14 films",
        highlights: ["Script → storyboard → final", "60–90 second sweet spot", "Multi-language exports"],
        items: [
          { type: "image", src: work2, title: "DCA Explainer" },
          { type: "image", src: work3, title: "Cardamom Explainer" },
        ],
      },
      {
        name: "YouTube Series",
        count: "2 seasons",
        highlights: ["18 episodes total", "1M+ minutes watched", "Sponsored by UNICEF Nepal"],
        items: [
          { type: "youtube", src: "https://www.youtube.com/embed/aqz-KE-bpKQ", title: "Junior Jury · Trailer" },
          { type: "image", src: work1, title: "Junior Jury · Key Art" },
        ],
      },
      {
        name: "Storyboards",
        count: "200+ frames",
        highlights: ["Pencil-first workflow", "Mood-led panels", "Director-ready packs"],
        items: [
          { type: "image", src: work5, title: "Echo · Board 04" },
          { type: "image", src: work6, title: "Mandala · Title Board" },
        ],
      },
    ],
  },
  {
    id: "motion",
    num: "04",
    label: "Motion Graphics",
    cover: work2,
    title: "DCA Awareness",
    winningTitle: "Featured Campaign — UNICEF Nepal Outreach 2024",
    tag: "NGO Motion Graphics · National Broadcast",
    desc: "Kinetic typography and infographic motion built to translate dense policy into one minute of clarity.",
    role: "Creative Lead",
    tools: "After Effects · Premiere",
    subs: [
      {
        name: "Logo Animation",
        count: "48 marks",
        highlights: ["Mnemonic-driven", "Loopable exports", "Lottie-ready"],
        items: [
          { type: "image", src: work6, title: "Mandala Logo Reveal" },
          { type: "image", src: work2, title: "DCA Logo Sting" },
        ],
      },
      {
        name: "Title Sequences",
        count: "11 films",
        highlights: ["Film-style typography", "Custom transitions", "Sound-aware timing"],
        items: [
          { type: "image", src: work5, title: "Echo · Opening Title" },
          { type: "image", src: work1, title: "Junior Jury · Intro" },
        ],
      },
      {
        name: "Broadcast Idents",
        count: "6 stations",
        highlights: ["10s + 5s + bumper", "Brand-locked motion", "HD + 4K masters"],
        items: [
          { type: "image", src: work2, title: "Channel Ident" },
          { type: "image", src: work3, title: "Promo Ident" },
        ],
      },
      {
        name: "Kinetic Typography",
        count: "Ongoing",
        highlights: ["Type as performance", "Rhythm-cut to audio", "Devanagari + Latin"],
        items: [
          { type: "image", src: work4, title: "Kinetic · Hands That Grow" },
        ],
      },
    ],
  },
  {
    id: "brand",
    num: "05",
    label: "Branding",
    cover: work6,
    title: "Mandala Identity",
    winningTitle: "Brand New / Under Consideration — Identity of the Quarter",
    tag: "Brand System · Cultural Identity",
    desc: "A complete identity grammar drawn from temple geometry — wordmark, motion, print and ritual packaging.",
    role: "Art Director",
    tools: "Illustrator · Photoshop · After Effects",
    subs: [
      {
        name: "Logo Systems",
        count: "26 brands",
        highlights: ["Wordmark + monogram + symbol", "Responsive scaling", "Motion-ready"],
        items: [
          { type: "image", src: work6, title: "Mandala Wordmark" },
          { type: "image", src: work3, title: "Cardamom Logo" },
        ],
      },
      {
        name: "Brand Guidelines",
        count: "14 books",
        highlights: ["50–80 page systems", "Voice + visual", "Print + digital ready"],
        items: [
          { type: "image", src: work6, title: "Mandala Guidelines Cover" },
        ],
      },
      {
        name: "Editorial Design",
        count: "9 issues",
        highlights: ["Magazine layouts", "Custom grids", "Devanagari typesetting"],
        items: [
          { type: "image", src: work3, title: "Cardamom Editorial" },
          { type: "image", src: work4, title: "Hands That Grow Spread" },
        ],
      },
      {
        name: "Packaging",
        count: "18 SKUs",
        highlights: ["Sustainable substrates", "Print-tested dielines", "Ritual-grade finishes"],
        items: [
          { type: "image", src: work6, title: "Mandala Packaging" },
          { type: "image", src: work3, title: "Cardamom Pouch" },
        ],
      },
    ],
  },
];

function Lightbox({ item, onClose }: { item: WorkItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-xl p-4 md:p-12 animate-rise"
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 border border-gold/60 px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-gold hover:bg-gold hover:text-primary-foreground transition"
      >
        Close ✕
      </button>
      <div onClick={(e) => e.stopPropagation()} className="relative max-h-full max-w-6xl w-full">
        {item.type === "image" && (
          <img src={item.src} alt={item.title} className="max-h-[85vh] w-full object-contain" />
        )}
        {item.type === "video" && (
          <video src={item.src} poster={item.poster} controls autoPlay className="max-h-[85vh] w-full" />
        )}
        {item.type === "youtube" && (
          <div className="relative aspect-video w-full">
            <iframe
              src={item.src + "?autoplay=1"}
              title={item.title}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        )}
        <div className="mt-4 text-center text-[11px] uppercase tracking-[0.3em] text-gold">{item.title}</div>
      </div>
    </div>
  );
}

function Work() {
  const [active, setActive] = useState(workCategories[0].id);
  const current = workCategories.find((c) => c.id === active)!;
  const [activeSubIdx, setActiveSubIdx] = useState(0);
  const activeSub = current.subs[activeSubIdx];
  const [lightbox, setLightbox] = useState<WorkItem | null>(null);

  const selectCategory = (id: string) => {
    setActive(id);
    setActiveSubIdx(0);
  };

  return (
    <section id="work" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="03" title="Selected Work" />
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-5xl md:text-7xl max-w-2xl leading-[0.95]">
            Stories shaped in <span className="italic font-serif-display text-gold font-sans font-normal not-italic">motion</span>.
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Five disciplines, one obsession — narrative. Each panel below opens a chapter of the studio.
          </p>
        </div>

        {/* Category tab strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 border-y border-border">
          {workCategories.map((c) => {
            const isActive = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => selectCategory(c.id)}
                className={`group relative flex flex-col items-start gap-2 border-r border-border px-5 py-6 text-left transition ${isActive ? "bg-gold text-primary-foreground" : "hover:bg-card"}`}
              >
                <span className={`font-display text-xs ${isActive ? "text-primary-foreground/80" : "text-gold"}`}>{c.num}</span>
                <span className="font-display text-xl md:text-2xl leading-tight">{c.label}</span>
                <span className={`text-[10px] uppercase tracking-[0.25em] ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {c.subs.length} streams
                </span>
                {isActive && <span className="absolute right-4 top-4 text-primary-foreground">●</span>}
              </button>
            );
          })}
        </div>

        {/* Active category panel */}
        <div key={current.id} className="mt-10 grid gap-8 md:grid-cols-12 animate-rise">
          <div className="md:col-span-7 group relative overflow-hidden bg-card">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={current.cover}
                alt={current.title}
                width={1024}
                height={768}
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute left-6 top-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-gold">
                <span className="h-px w-8 bg-gold" />
                <span>Title Cover · {current.label}</span>
              </div>
            </div>
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-10">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">{current.tag}</div>
              <h3 className="font-display text-4xl md:text-6xl leading-[0.95]">{current.title}</h3>
              <p className="mt-4 max-w-xl text-muted-foreground">{current.desc}</p>
              <div className="mt-5 flex flex-wrap gap-x-6 gap-y-1 text-xs text-muted-foreground">
                <span>{current.role}</span>
                <span>{current.tools}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="border border-gold/40 bg-gold/5 p-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">★ Title Holder</div>
              <p className="font-serif-display italic text-xl md:text-2xl leading-snug">
                "{current.winningTitle}"
              </p>
            </div>

            <div className="border border-border bg-card/40 p-6 backdrop-blur flex-1">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Sub-categories — tap to open</div>
              <ul className="divide-y divide-border">
                {current.subs.map((s, i) => {
                  const isOn = i === activeSubIdx;
                  return (
                    <li key={s.name}>
                      <button
                        onClick={() => setActiveSubIdx(i)}
                        className={`group flex w-full items-baseline justify-between py-4 text-left transition ${isOn ? "pl-3" : "hover:pl-2"}`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className={`font-display text-xs w-6 ${isOn ? "text-foreground" : "text-gold"}`}>{String(i + 1).padStart(2, "0")}</span>
                          <span className={`font-display text-xl md:text-2xl ${isOn ? "text-gold" : ""}`}>{s.name}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{isOn ? "● Open" : s.count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Mini gallery + highlights for selected sub-category */}
        <div key={current.id + activeSubIdx} className="mt-10 border-t border-border pt-10 animate-rise">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                {current.label} / Stream {String(activeSubIdx + 1).padStart(2, "0")}
              </div>
              <h4 className="font-display text-4xl md:text-5xl">{activeSub.name}</h4>
            </div>
            <ul className="flex flex-wrap gap-2 md:max-w-xl md:justify-end">
              {activeSub.highlights.map((h) => (
                <li key={h} className="border border-border bg-card/40 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  ✦ {h}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {activeSub.items.map((it, idx) => {
              const thumb = it.type === "image" ? it.src : it.type === "video" ? it.poster : undefined;
              return (
                <button
                  key={idx}
                  onClick={() => setLightbox(it)}
                  className="group relative block aspect-[4/3] overflow-hidden bg-card text-left"
                >
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={it.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink to-card">
                      <span className="font-display text-5xl text-gold/40">▶</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <div className="absolute left-3 top-3 border border-gold/60 bg-ink/60 px-2 py-0.5 text-[9px] uppercase tracking-[0.3em] text-gold">
                    {it.type === "image" ? "Image" : it.type === "video" ? "Video" : "YouTube"}
                  </div>
                  <div className="absolute inset-x-3 bottom-3 flex items-center justify-between">
                    <span className="font-display text-sm md:text-base truncate pr-2">{it.title}</span>
                    <span className="text-gold opacity-0 transition group-hover:opacity-100">↗</span>
                  </div>
                </button>
              );
            })}

            <div className="flex aspect-[4/3] flex-col items-center justify-center border border-dashed border-border bg-card/20 p-4 text-center">
              <div className="font-display text-3xl text-gold/60">+</div>
              <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Add your work</p>
              <p className="mt-1 text-[10px] text-muted-foreground/70 leading-relaxed">
                Edit <span className="text-gold">workCategories</span> in <code>src/routes/index.tsx</code>
              </p>
            </div>
          </div>
        </div>
      </div>

      {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}

const skillGroups = [
  { title: "Motion & Animation", items: ["Motion Graphics", "2D Character Animation", "Explainer Films", "Visual Storytelling"] },
  { title: "Design & Illustration", items: ["Graphic Design", "Stylized Illustration", "Branding Systems", "Editorial Design", "Photography"] },
  { title: "Direction & Leadership", items: ["Creative Direction", "Team Leadership", "Mentorship", "Project Management"] },
  { title: "Post-Production", items: ["Video Editing", "Color Grading", "Sound Sync", "Final Delivery"] },
];
const software = [
  "After Effects",
  "Illustrator",
  "Photoshop",
  "DaVinci Resolve",
  "Premiere Pro",
  "InDesign",
  "Blender",
  "CapCut",
];

function Skills() {
  return (
    <section id="skills" className="relative bg-ink py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="04" title="Capabilities" />
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="font-display text-5xl md:text-7xl mb-12 leading-[0.95]">
              A toolkit built for <span className="italic font-serif-display text-gold font-sans font-normal not-italic">storytelling</span>.
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {skillGroups.map((g) => (
                <div key={g.title} className="border-t border-border pt-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{g.title}</div>
                  <ul className="space-y-2">
                    {g.items.map((i) => (
                      <li key={i} className="text-foreground/90">{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Software Fluency</div>
            <ul className="space-y-4">
              {software.map((s) => (
                <li key={s} className="border-b border-border pb-4">
                  <span className="font-display text-2xl">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  { n: "01", t: "Motion Graphics", d: "Cinematic kinetic design for brands, campaigns and broadcast." },
  { n: "02", t: "2D Animation", d: "Character-driven explainers and short-form storytelling films." },
  { n: "03", t: "Graphic Design", d: "Brand identities, posters and social systems with narrative weight." },
  { n: "04", t: "Visual Storytelling", d: "Concept, storyboard and direction for emotionally driven pieces." },
  { n: "05", t: "Video Editing", d: "Sequence, pace and rhythm — cutting for feeling." },
  { n: "06", t: "Creative Direction", d: "End-to-end creative leadership across teams and projects." },
  { n: "07", t: "Mentorship", d: "1:1 and group training in motion, design and creative process." },
  { n: "08", t: "Freelance Services", d: "Long-term collaborations with studios, agencies and founders." },
];

function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel num="05" title="Services" />
        <h2 className="font-display text-5xl md:text-7xl mb-16 max-w-3xl leading-[0.95]">
          What I bring to the <span className="italic font-serif-display text-gold font-sans font-normal not-italic">edit room</span>.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-border">
          {services.map((s) => (
            <div key={s.n} className="group relative border-b border-r border-border p-8 transition hover:bg-card">
              <div className="font-display text-gold text-sm mb-6">{s.n} / 08</div>
              <h3 className="font-display text-3xl mb-3">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              <div className="absolute bottom-4 right-4 opacity-0 transition group-hover:opacity-100 text-gold">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative bg-ink py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gold/10 blur-[150px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel num="06" title="Contact" />
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-display text-6xl md:text-9xl leading-[0.9]">
              Let's create
              <br />
              <span className="italic font-serif-display text-gold font-sans font-normal not-italic">something cinematic</span>
              <br />
              together.
            </h2>
            <p className="mt-10 max-w-md text-muted-foreground">
              Open to commissions, collaborations, creative direction roles and mentorship engagements worldwide.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Email</div>
                <a href="mailto:koold45@gmail.com" className="gold-underline">koold45@gmail.com</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Phone</div>
                <a href="tel:+9779803443774" className="block gold-underline">+977 980 344 3774</a>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Studio</div>
                <div>Bhaktapur, Nepal</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Social</div>
                <div className="flex gap-4">
                  <a href="#" className="gold-underline">Facebook</a>
                  <a href="#" className="gold-underline">TikTok</a>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="md:col-span-5 border border-border bg-card/40 p-8 backdrop-blur"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-8">Start a project</div>
            <div className="space-y-6">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Name</label>
                <input type="text" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold transition" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold transition" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-2">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-border py-2 focus:outline-none focus:border-gold transition resize-none" />
              </div>
              <button type="submit" className="group flex w-full items-center justify-between bg-gold px-6 py-4 text-[11px] uppercase tracking-[0.3em] text-primary-foreground hover:bg-foreground transition">
                Send Message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <footer className="relative mx-auto mt-32 max-w-7xl border-t border-border px-6 pt-8 pb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <div>© 2025 Kuldeep Nhemafuki · All Frames Reserved</div>
        <div>Designed &amp; Directed in Bhaktapur</div>
      </footer>
    </section>
  );
}

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Work />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
}
