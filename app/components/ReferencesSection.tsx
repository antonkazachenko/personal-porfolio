'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LinkedinMobileIcon } from '@/public/icons';

// -------------------------------------------------------------
// Types
// -------------------------------------------------------------
interface ReferenceItem {
  name: string;
  position: string;
  quote: string;
  avatar?: string; // path from /public, remote URL, or data URI
  link?: string; // optional external link (LinkedIn, etc.)
}

// -------------------------------------------------------------
// Helpers + Safe Fallbacks
// -------------------------------------------------------------
const PLACEHOLDER_AVATAR =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="112" height="112" viewBox="0 0 112 112">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#22c55e"/>
        </linearGradient>
      </defs>
      <rect width="112" height="112" rx="56" fill="url(#g)"/>
      <circle cx="56" cy="44" r="18" fill="white" fill-opacity="0.85"/>
      <rect x="26" y="66" width="60" height="28" rx="14" fill="white" fill-opacity="0.85"/>
    </svg>
  `);

function getAvatarSrc(src?: string) {
  if (!src || typeof src !== 'string') return PLACEHOLDER_AVATAR;
  const isData = src.startsWith('data:');
  const isAbsolutePublic = src.startsWith('/'); // e.g., /images/references/a.jpeg
  const isRemote = /^https?:\/\//.test(src);
  return isData || isAbsolutePublic || isRemote ? src : PLACEHOLDER_AVATAR;
}

function getNextIndex(len: number, current: number, dir: 1 | -1) {
  if (len <= 0) return 0;
  return (current + dir + len) % len;
}

// -------------------------------------------------------------
// Demo Data — replace with your own if you pass items via props
// NOTE: Files must be under the root /public directory to be served.
// E.g., /public/images/references/brett.jpeg -> "/images/references/brett.jpeg"
// -------------------------------------------------------------
const DEFAULT_REFERENCES: ReferenceItem[] = [
  {
    name: 'Matthew Ridderikhoff',
    position: 'Senior Lead Software Developer @ IFS',
    avatar: '/images/references/matt.jpeg',
    quote:
      "It has been a privilege to have Anton as part of our team during his 8-month co-op term from May to December 2024. Throughout his tenure, Anton showcased a remarkable inclination towards learning and mastering new technologies, making significant contributions particularly in our visual regression platform and Design System components. Tony's strong problem-solving skills, quick learning ability, and his passion for software engineering were evident in the quality of his work and his interactions with the team. I am confident that with his enthusiasm and commitment, Anton is poised for a successful career in software development.",
    link: 'https://www.linkedin.com/in/matthew-ridderikhoff-45a17a151',
  },
  {
    name: 'Maria Fakhruddin',
    position: 'Senior Program Manager @ IFS',
    avatar: '/images/references/maria.jpeg',
    quote:
      "It's been a pleasure having Anton on our team for his co-op term. I've watched him grow from day one as he took on various aspects of our product development, from Design System components to our visual regression platform. What stands out to me is his genuine desire to learn and improve -he takes feedback well and isn't afraid to ask questions when needed. Tony has shown a good understanding of our product requirements and his positive attitude makes him a joy to work with. I have no doubt that with his dedication and eagerness to learn, Anton will build a successful career in software development.",
    link: 'https://www.linkedin.com/in/manatana/',
  },
  {
    name: 'Simon Nodel',
    position: 'Design System Team Lead @ IFS',
    avatar: '/images/references/Simon.jpeg', // case-sensitive
    quote:
      "Anton has joined our team for 8 month co-op term from May to December 2024. He demonstrated strong interest in learning new technologies, quickly came up to speed and was a welcome addition to our team. He contributed to our Design System components that are used in enterprise application. His main focus has been on, our mission critical, visual regression platform. With a little bit of support he worked on all aspects of the framework, from database schema changes, to schema upgrade scripts, APIs and frontend application features. Tony is a smart, polite, enthusiastic, loves to learn and ready to help. I am sure that Tony will become a great software developer.",
    link: 'https://www.linkedin.com/in/simon-nodel-138934/',
  },
  {
    name: 'Angela Ma',
    position: 'Software Developer @ IFS',
    avatar: '/images/references/angela.jpeg',
    quote:
      "Tony consistently brought a positive and enthusiastic attitude to our team during his time as a Software Developer Co-op. His strong interest in learning new technologies, such as Angular, NgRx, NestJS, and Prisma, greatly contributed to the development of our visual regression management application. Tony demonstrated an eagerness to learn, actively seeking and applying feedback from code reviews. His team-oriented approach and willingness to tackle new challenges made him an absolute pleasure to work with.",
    link: 'https://www.linkedin.com/in/angelahma/',
  },
  {
    name: 'Brett Pasula',
    position: 'Senior Lead Software Engineer @ IFS',
    avatar: '/images/references/brett.jpeg',
    quote:
      "I had the pleasure of mentoring Anton during his time at Copperleaf. While our projects didn't directly overlap, I was continually impressed by his can-do attitude and affinity for software engineering. Anton consistently demonstrated a proactive, curious approach to learning and adapting to new challenges. His resourcefulness and enthusiasm for finding effective solutions were evident in all our interactions. His drive to always improve and his dedication are sure to be an asset for any team.",
    link: 'https://www.linkedin.com/in/brettpasula/',
  },
  {
    name: 'Tara MacKinnon',
    position: 'Software Developer @ IFS',
    avatar: '/images/references/tara.jpeg',
    quote:
      "I had the pleasure of working alongside Tony during our time as software developer co-ops. In the four months we worked together, I was consistently impressed by his strong problem-solving skills and ability to quickly learn new technologies. He was always eager to learn and contribute, making a positive impact on our team. Tony would be a great asset to any team, and I highly recommend him for any future role.",
    link: 'https://www.linkedin.com/in/tara-m/',
  },
];

// -------------------------------------------------------------
// Component
// -------------------------------------------------------------
export default function ReferencesCarousel({ items = DEFAULT_REFERENCES }: { items?: ReferenceItem[] }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [windowWidth, setWindowWidth] = useState(0);
  const safeItems = useMemo(() => (Array.isArray(items) ? items : []), [items]);

  useEffect(() => {
    const update = () => setWindowWidth(window.innerWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const perSlide = windowWidth >= 1280 ? 2 : 1;

  const chunks = useMemo<ReferenceItem[][]>(() => {
    const result: ReferenceItem[][] = [];
    for (let i = 0; i < safeItems.length; i += perSlide) {
      result.push(safeItems.slice(i, i + perSlide));
    }
    return result;
  }, [safeItems, perSlide]);

  useEffect(() => {
    setIndex(0);
  }, [perSlide]);

  const go = useCallback(
    (d: 1 | -1) => { setDir(d); setIndex((i) => getNextIndex(chunks.length, i, d)); },
    [chunks.length]
  );

  const AUTO_INTERVAL = 100000000;
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') { go(-1); resetAutoTimer(); }
      if (e.key === 'ArrowRight') { go(1); resetAutoTimer(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [go]);

  useEffect(() => {
    startAutoTimer();
    return () => stopAutoTimer();
  }, [go]);

  function startAutoTimer() {
    stopAutoTimer();
    timerRef.current = setInterval(() => { go(1); }, AUTO_INTERVAL);
  }
  function stopAutoTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }
  function resetAutoTimer() { startAutoTimer(); }

  const currentChunk = chunks[index] ?? [];

  const slideVariants = {
    initial: (d: 1 | -1) => ({ opacity: 0, x: d * 40 }),
    animate: { opacity: 1, x: 0 },
    exit: (d: 1 | -1) => ({ opacity: 0, x: d * -40 }),
  };

  const ReferenceCard = ({ item }: { item: ReferenceItem }) => (
    <article className={`relative reference-card h-full flex flex-col justify-start ${perSlide === 1 ? 'w-full md:w-1/2 md:mx-auto' : 'w-full'}`}>
      <div className="flex items-start gap-4 w-full">
        <div>
          <img
            src={getAvatarSrc(item.avatar)}
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.onerror = null;
              img.src = PLACEHOLDER_AVATAR;
            }}
            alt={`${item.name} avatar`}
            width={80}
            height={80}
            className="reference-avatar"
            loading="lazy"
          />
        </div>
        <div className="flex-1 mt-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="reference-header">{item.name}</h4>
            {item.link && (
              <a
                href="https://www.linkedin.com/in/antonkazachenko/details/recommendations/?detailScreenTabIndex=0"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-600/80 text-white hover:bg-sky-500"
                aria-label="Open reference link"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M11 1.06641L1 11.0664" stroke="#F5F5F5" strokeWidth="1.09779" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 7.93359V0.933594H4" stroke="#F5F5F5" strokeWidth="1.09779" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            )}
          </div>
          <p className="reference-text">{item.position}</p>
        </div>
      </div>
      <p className="mt-6 reference-text">&ldquo;{item.quote}&rdquo;</p>
    </article>
  );

  return (
    <section className="relative w-full py-20">
      <div className="skills-header-container">
        <h1 className="section-header-bg">References</h1>
        <h2 className="section-header">References</h2>
      </div>

      <div className="references-desktop container mx-auto px-4 h-auto py-10 md:py-0 md:h-[600px] flex items-center">
        <div className="relative w-full">
          {/* Left */}
          <button
            aria-label="Previous"
            onClick={() => { go(-1); resetAutoTimer(); }}
            className="absolute -left-2 lg:-left-6 top-1/2 z-10 -translate-y-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none" className="w-9 h-9 md:w-[62px] md:h-[62px]">
              <path d="M31 61C47.5685 61 61 47.5685 61 31C61 14.4315 47.5685 1 31 1C14.4315 1 1 14.4315 1 31C1 47.5685 14.4315 61 31 61Z" stroke="var(--color-text-primary)" strokeOpacity="0.6" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.5 31H43.5" stroke="var(--color-text-primary)" strokeOpacity="0.6" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M28.5 21L18.5 31L28.5 41" stroke="var(--color-text-primary)" strokeOpacity="0.6" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Right */}
          <button
            aria-label="Next"
            onClick={() => { go(1); resetAutoTimer(); }}
            className="absolute -right-2 lg:-right-6 top-1/2 z-10 -translate-y-1/2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62" fill="none" className="w-9 h-9 md:w-[62px] md:h-[62px]">
              <path d="M31 61C14.4315 61 1 47.5685 1 31C1 14.4315 14.4315 1 31 1C47.5685 1 61 14.4315 61 31C61 47.5685 47.5685 61 31 61Z" stroke="var(--color-text-primary)" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M43.5001 31H18.5001" stroke="var(--color-text-primary)" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M33.5001 21L43.5001 31L33.5001 41" stroke="var(--color-text-primary)" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="overflow-hidden w-full px-10 md:px-16">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={`ref-${index}-${perSlide}`}
                custom={dir}
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.35 }}
                className={`grid gap-8 ${perSlide === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}
              >
                {currentChunk.length > 0 ? (
                  currentChunk.map((r) => <ReferenceCard key={r.name} item={r} />)
                ) : (
                  <p className="text-white/60">No references available.</p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile layout — single testimonial card + control bar (Figma 2018:1190) */}
      <div className="references-mobile">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.article
            key={`ref-m-${index}`}
            custom={dir}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35 }}
            className="reference-card-mobile"
          >
            {(() => {
              const item = chunks[index]?.[0];
              if (!item) return <p className="reference-text">No references available.</p>;
              return (
                <>
                  <div className="reference-mobile-body">
                    <p className="reference-mobile-quote">&ldquo;{item.quote}&rdquo;</p>
                    <a
                      className="reference-mobile-readmore"
                      href="https://www.linkedin.com/in/antonkazachenko/details/recommendations/?detailScreenTabIndex=0"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Read full recommendation
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2.5 9.5L9.5 2.5M9.5 2.5H4M9.5 2.5V8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>

                  <div className="reference-mobile-divider" />

                  <div className="reference-mobile-footer">
                    <img
                      src={getAvatarSrc(item.avatar)}
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement;
                        img.onerror = null;
                        img.src = PLACEHOLDER_AVATAR;
                      }}
                      alt={`${item.name} avatar`}
                      width={40}
                      height={40}
                      className="reference-mobile-avatar"
                      loading="lazy"
                    />
                    <div className="reference-mobile-meta">
                      <p className="reference-mobile-name">{item.name}</p>
                      <p className="reference-mobile-position">{item.position}</p>
                    </div>
                    {item.link && (
                      <a
                        className="reference-mobile-linkedin"
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${item.name} on LinkedIn`}
                      >
                        <LinkedinMobileIcon width={13} height={13} />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </>
              );
            })()}
          </motion.article>
        </AnimatePresence>

        <div className="reference-mobile-controls">
          <div className="reference-mobile-dots">
            {chunks.map((_, i) => (
              <span
                key={i}
                className={`reference-mobile-dot ${i === index ? 'reference-mobile-dot--active' : ''}`}
              />
            ))}
          </div>
          <div className="reference-mobile-nav">
            <span className="reference-mobile-counter">
              {String(index + 1).padStart(2, '0')}
              <span className="reference-mobile-counter-total"> / {String(chunks.length).padStart(2, '0')}</span>
            </span>
            <button
              type="button"
              aria-label="Previous"
              className="reference-mobile-navbtn"
              onClick={() => { go(-1); resetAutoTimer(); }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              className="reference-mobile-navbtn"
              onClick={() => { go(1); resetAutoTimer(); }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// Lightweight runtime tests (do not change unless clearly wrong)
// -------------------------------------------------------------
if (process.env.NODE_ENV !== 'production') {
  // getAvatarSrc tests
  console.assert(getAvatarSrc(undefined) === PLACEHOLDER_AVATAR, 'getAvatarSrc: undefined → placeholder');
  console.assert(getAvatarSrc('') === PLACEHOLDER_AVATAR, 'getAvatarSrc: empty → placeholder');
  console.assert(getAvatarSrc('/ok.png') === '/ok.png', 'getAvatarSrc: accepts absolute public path');
  console.assert(getAvatarSrc('data:image/png;base64,xyz').startsWith('data:'), 'getAvatarSrc: accepts data URI');

  // getNextIndex wrap-around tests
  console.assert(getNextIndex(5, 0, -1) === 4, 'getNextIndex: wrap left from 0 → 4');
  console.assert(getNextIndex(5, 4, 1) === 0, 'getNextIndex: wrap right from 4 → 0');
  console.assert(getNextIndex(0, 0, 1) === 0, 'getNextIndex: empty length returns 0');
}
