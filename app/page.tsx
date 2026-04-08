"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaInstagram, FaJava, FaLinkedin, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiExpo,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiFirebase,
} from "react-icons/si";

type Achievement = {
  id: number;
  title: string;
  body: string;
  images: string[];
};

type Project = {
  title: string;
  description: string;
  stack: string[];
  demoUrl: string;
  githubUrl: string;
};

type NavLink = {
  href: string;
  label: string;
};

type SocialLink = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const navLinks: NavLink[] = [
  { href: "#about", label: "About" },
  { href: "#accomplishments", label: "Accomplishments" },
  { href: "#projects", label: "Projects" },
];

const socialLinks: SocialLink[] = [
  { href: "https://instagram.com/sgfrdgrln", label: "Instagram", icon: FaInstagram },
  { href: "https://linkedin.com/in/sgfrdgrln", label: "LinkedIn", icon: FaLinkedin },
  { href: "https://github.com/sgfrdgrln", label: "GitHub", icon: FaGithub },
];

const achievements: Achievement[] = [
  {
    id: 1,
    title: "ALPHA ICT Week 2024 - App Development Category Champion (June 2024)",
    body: "During this 6 hours hackathon, we developed a mobile application from scratch using native Java and SQLite database on Android Studio. The competition required us to create an e-commerce application for computer parts.",
    images: ["/images/accomplishment_1.jpg", "/images/accomplishment_2.jpg"],
  },
  {
    id: 2,
    title: "Readers Rising! Hackathon for a Reading Nation - Special Prize Awardee (September 2025)",
    body: "We've joined a 2-day hackathon wherein we developed a mobile application using React Native Expo and Firebase. The competition required us to create an app that helps reignite a love for reading for Filipino youths. The hackathon also consisted a mentoring session on its day one and we did our pitching session on the second day. Wherein we've introduced Hibla, a mobile application that aims to make reading fun, engaging, and not boring.",
    images: ["/images/accomplishment_3.jpeg", "/images/accomplishment_4.jpeg"],
  },
  {
    id: 3,
    title: "UMAK 14th IT Skills Olympics - Android Productivity Category Participant (November 2025)",
    body: "The IT Skills Olyympic is an annual competition held by the University of Makati that aims to test the skills of IT students in various categories. During this competition, we developed a mobile application using React Native Expo and Firebase. The competition required us to create a productivity app in any way possible. We developed Tuon, an app that will help students and freelancers focus on their certain tasks by blocking distracting apps and websites, setting focus timers, and providing insights on their productivity patterns.",
    images: ["/images/accomplishment_5.jpg", "/images/accomplishment_6.jpg"],
  },
  {
    id: 4,
    title: "Tagisan ng Talino Codefest Locals 2026 - Champion (March 2026)",
    body: "We've joined a hackathon at our school that allows us to develop a mobile application through a set of problem given with a duration of 6 hours. The problem was to create a task application with full CRUD functionalities, search filter, sorting algorithm, and a calendar view.",
    images: ["/images/accomplishment_7.jpeg", "/images/accomplishment_8.jpeg"],
  },
];

const projects: Project[] = [
  {
    title: "Hibla",
    description: "A mobile application that aims to make reading fun, engaging, and not boring.",
    stack: ["React Native Expo", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Tuon",
    description: "A productivity app that helps students and freelancers focus on their tasks.",
    stack: ["React Native Expo", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <article className={`group glass-card reveal-up rounded-2xl p-6 sm:p-7 ${className}`}>
      {children}
    </article>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-8 sm:mb-10">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200/80">{subtitle}</p>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">{title}</h2>
    </div>
  );
}

const techIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  React: FaReact,
  "Next.js": SiNextdotjs,
  Supabase: SiSupabase,
  Tailwind: SiTailwindcss,
  TypeScript: SiTypescript,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  "Express.js": SiExpress,
  "Node.js": SiNodedotjs,
  SQLite: SiSqlite,
  "React Native Expo": SiExpo,
  Java: FaJava,
  Firebase: SiFirebase,
  "React Native": FaReact,
  Expo: SiExpo,
};

function TechBadge({ label }: { label: string }) {
  const Icon = techIcons[label];

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-200 backdrop-blur-sm transition duration-200 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/12 hover:text-white">
      {Icon ? <Icon className="h-3.5 w-3.5 text-zinc-200" /> : null}
      <span>{label}</span>
    </span>
  );
}

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a0308]/75 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#about" className="text-sm font-semibold tracking-wide text-white">
          sgfrdgrln
        </a>

        <ul className="hidden items-center gap-0.5 sm:gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-md px-2 py-2 text-xs font-medium text-zinc-300 transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:siegfriedgaerlan0213@gmail.com"
          className="hidden rounded-lg border border-blue-300/35 bg-blue-500/20 px-3 py-2 text-xs font-semibold text-blue-100 transition hover:bg-blue-500/35 sm:text-sm md:inline-flex"
        >
          Contact
        </a>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 bg-white/5 text-zinc-100 transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
        >
          {isMobileMenuOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
        </button>
      </nav>

      {isMobileMenuOpen ? (
        <div className="border-t border-white/10 px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-zinc-200 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="mailto:siegfriedgaerlan0213@gmail.com"
            className="mt-3 inline-flex w-full items-center justify-center rounded-lg border border-blue-300/35 bg-blue-500/20 px-3 py-2 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/35"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      ) : null}
    </header>
  );
}

export default function Home() {
  const accomplishmentGallery = achievements.flatMap((achievement) =>
    achievement.images.map((imagePath, imageIndex) => ({
      key: `${achievement.id}-${imagePath}`,
      src: imagePath,
      alt: `Achievement ${achievement.id} image ${imageIndex + 1}`,
    }))
  );

  const [expandedImageIndex, setExpandedImageIndex] = useState<number | null>(null);

  const goToPreviousImage = () => {
    setExpandedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex - 1 + accomplishmentGallery.length) % accomplishmentGallery.length;
    });
  };

  const goToNextImage = () => {
    setExpandedImageIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      return (currentIndex + 1) % accomplishmentGallery.length;
    });
  };

  const expandedImage =
    expandedImageIndex !== null ? accomplishmentGallery[expandedImageIndex] : null;

  useEffect(() => {
    if (expandedImageIndex === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedImageIndex(null);
      }

      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }

      if (event.key === "ArrowRight") {
        goToNextImage();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [expandedImageIndex]);

  return (
    <div className="portfolio-bg relative min-h-screen overflow-x-clip text-zinc-100">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-red-600/22 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-8rem] top-[20rem] h-[22rem] w-[22rem] rounded-full bg-rose-500/20 blur-[110px]" />

      <Navbar />

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:gap-20 sm:px-6 sm:py-14 lg:px-8">
        <section id="about" className="scroll-mt-24">
          <SectionHeading title="Introduction" subtitle="Overview" />
          <div className="reveal-up flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                  Siegfried Gaerlan
                </h1>
                <p className="mt-2 text-sm font-medium text-blue-200 sm:text-base">
                  Full-Stack Developer
                </p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-300 sm:text-base">
                  Welcome to my portfolio. I build modern web experiences with a strong focus on clean UI, reliable
                  backend integration, and shipping products that feel smooth and professional.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="rounded-lg border border-blue-300/35 bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-100 transition hover:bg-blue-500/35"
                  >
                    View Projects
                  </a>
                  <a
                    href="mailto:siegfriedgaerlan0213@gmail.com"
                    className="rounded-lg border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-white/10"
                  >
                    Hire Me
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {[
                    "React",
                    "Next.js",
                    "Supabase",
                    "Tailwind",
                    "TypeScript",
                    "MongoDB",
                    "Express.js",
                    "Node.js",
                    "SQLite",
                    "React Native Expo",
                    "Java",
                    "Firebase"
                  ].map((item) => (
                    <TechBadge key={item} label={item} />
                  ))}
                </div>
              </div>
              <div className="relative h-72 w-full shrink-0 overflow-hidden sm:h-80 md:h-104 md:w-104 lg:h-120 lg:w-120">
                <Image
                  src="/images/profile.png"
                  alt="Siegfried Gaerlan profile photo"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 416px, 480px"
                  quality={100}
                  className="object-contain object-center"
                  priority
                />
              </div>
            </div>
        </section>

        <section id="accomplishments" className="scroll-mt-24">
          <SectionHeading title="Accomplishments" subtitle="Highlights" />
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
            {achievements.map((achievement, index) => (
              <GlassCard
                key={achievement.id}
                className="reveal-stagger relative min-h-44"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-300/25 bg-blue-500/20 text-sm font-semibold text-blue-100"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {achievement.id}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-white">{achievement.title}</h3>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-2">
                  {achievement.images.map((imagePath, imageIndex) => (
                    <button
                      type="button"
                      key={`${achievement.id}-${imagePath}`}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 transition hover:opacity-90"
                      onClick={() => {
                        const selectedImageKey = `${achievement.id}-${imagePath}`;
                        const selectedImageIndex = accomplishmentGallery.findIndex(
                          (image) => image.key === selectedImageKey
                        );

                        if (selectedImageIndex >= 0) {
                          setExpandedImageIndex(selectedImageIndex);
                        }
                      }}
                    >
                      <Image
                        src={imagePath}
                        alt={`Achievement ${achievement.id} image ${imageIndex + 1}`}
                        fill
                        sizes="(max-width: 640px) 45vw, 240px"
                        className="object-cover transition duration-300 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{achievement.body}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {expandedImage ? (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setExpandedImageIndex(null)}
          >
            <button
              type="button"
              onClick={() => setExpandedImageIndex(null)}
              className="absolute right-4 top-4 rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-semibold text-white"
            >
              Close
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToPreviousImage();
              }}
              className="absolute bottom-4 left-[calc(50%-3.25rem)] z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/70 md:left-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
              aria-label="Previous image"
            >
              <FiChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                goToNextImage();
              }}
              className="absolute bottom-4 right-[calc(50%-3.25rem)] z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/55 text-white transition hover:bg-black/70 md:right-4 md:top-1/2 md:-translate-y-1/2 md:translate-x-0"
              aria-label="Next image"
            >
              <FiChevronRight className="h-4 w-4" />
            </button>
            <div
              className="relative h-[82vh] w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={expandedImage.src}
                alt={expandedImage.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        ) : null}

        <section id="projects" className="scroll-mt-24">
          <SectionHeading title="Featured Projects" subtitle="Work" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <GlassCard key={project.title} className="overflow-hidden">
                <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <TechBadge key={`${project.title}-${item}`} label={item} />
                  ))}
                </div>

                <div className="mt-5 flex gap-3">
                  <a
                    href={project.demoUrl}
                    className="rounded-lg border border-blue-300/30 bg-blue-500/20 px-3 py-2 text-xs font-semibold text-blue-100 transition hover:bg-blue-500/35"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
                  >
                    GitHub
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-10 w-full max-w-6xl border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-zinc-300">Connect with me</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-zinc-100 transition hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </footer>
    </div>
  );
}
