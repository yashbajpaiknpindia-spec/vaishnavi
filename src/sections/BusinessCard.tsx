import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight, RefreshCw } from 'lucide-react';

// Butterfly SVG wing component
function ButterflyWing({ side, isAnimating }: { side: 'left' | 'right'; isAnimating: boolean }) {
  const isLeft = side === 'left';

  return (
    <motion.div
      className="absolute pointer-events-none z-10"
      style={{
        [isLeft ? 'right' : 'left']: '50%',
        top: '50%',
        transformOrigin: isLeft ? 'right center' : 'left center',
      }}
      animate={isAnimating ? {
        rotateY: isLeft
          ? [0, -90, -150, -90, 0]
          : [0, 90, 150, 90, 0],
        scaleY: [1, 0.9, 0.7, 0.9, 1],
        opacity: [0, 1, 1, 1, 0],
      } : { opacity: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <svg
        width="120"
        height="140"
        viewBox="0 0 120 140"
        style={{ transform: isLeft ? 'scaleX(-1)' : 'none' }}
      >
        {/* Upper wing */}
        <path
          d="M 10 70 C 10 20, 80 0, 110 30 C 120 40, 115 65, 10 70 Z"
          fill="rgba(197,160,89,0.25)"
          stroke="#c5a059"
          strokeWidth="1"
        />
        {/* Lower wing */}
        <path
          d="M 10 70 C 10 120, 70 140, 100 115 C 115 103, 110 80, 10 70 Z"
          fill="rgba(197,160,89,0.15)"
          stroke="#c5a059"
          strokeWidth="1"
        />
        {/* Wing veins */}
        <path d="M 10 70 C 50 55, 85 40, 110 30" stroke="#c5a059" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M 10 70 C 40 75, 75 80, 105 115" stroke="#c5a059" strokeWidth="0.5" fill="none" opacity="0.5" />
        <path d="M 30 68 C 55 58, 80 50, 100 45" stroke="#c5a059" strokeWidth="0.3" fill="none" opacity="0.3" />
        <path d="M 30 72 C 55 82, 78 95, 92 108" stroke="#c5a059" strokeWidth="0.3" fill="none" opacity="0.3" />
        {/* Wing spots */}
        <circle cx="70" cy="45" r="4" fill="#c5a059" opacity="0.4" />
        <circle cx="60" cy="98" r="3" fill="#c5a059" opacity="0.3" />
        <circle cx="45" cy="55" r="2" fill="#0a0a0a" opacity="0.3" />
      </svg>
    </motion.div>
  );
}

// Floating butterfly particles
function FloatingButterflies({ isVisible }: { isVisible: boolean }) {
  const butterflies = Array.from({ length: 6 });

  return (
    <AnimatePresence>
      {isVisible && butterflies.map((_, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none z-20"
          initial={{
            x: '50%',
            y: '50%',
            scale: 0,
            opacity: 0,
          }}
          animate={{
            x: `${20 + Math.random() * 60}%`,
            y: `${10 + Math.random() * 80}%`,
            scale: [0, 0.6 + Math.random() * 0.4, 0],
            opacity: [0, 0.8, 0],
            rotate: [0, Math.random() > 0.5 ? 30 : -30, 0],
          }}
          transition={{
            duration: 1.5 + Math.random() * 0.8,
            delay: i * 0.12,
            ease: 'easeOut',
          }}
        >
          <svg width="28" height="22" viewBox="0 0 28 22">
            {/* Left wing */}
            <motion.path
              d="M 14 11 C 14 4, 1 1, 1 8 C 1 14, 14 14, 14 11 Z"
              fill="#c5a059"
              opacity="0.6"
              animate={{ scaleX: [1, 0.2, 1, 0.2, 1] }}
              transition={{ duration: 0.4, repeat: 3 }}
            />
            {/* Right wing */}
            <motion.path
              d="M 14 11 C 14 4, 27 1, 27 8 C 27 14, 14 14, 14 11 Z"
              fill="#c5a059"
              opacity="0.6"
              animate={{ scaleX: [1, 0.2, 1, 0.2, 1] }}
              transition={{ duration: 0.4, repeat: 3 }}
            />
            {/* Lower wings */}
            <path d="M 14 11 C 14 18, 3 22, 5 17 C 7 13, 14 13, 14 11 Z" fill="#c5a059" opacity="0.4" />
            <path d="M 14 11 C 14 18, 25 22, 23 17 C 21 13, 14 13, 14 11 Z" fill="#c5a059" opacity="0.4" />
            {/* Body */}
            <ellipse cx="14" cy="11" rx="1.2" ry="5" fill="#0a0a0a" opacity="0.6" />
          </svg>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export function BusinessCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showButterflies, setShowButterflies] = useState(false);

  const handleFlip = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setShowButterflies(true);
    setTimeout(() => setIsFlipped(f => !f), 300);
    setTimeout(() => {
      setIsAnimating(false);
      setShowButterflies(false);
    }, 1500);
  };

  return (
    <section className="section-padding border-b border-ink/10 overflow-hidden">
      <div className="grid-container">
        <span className="section-number">06 / BUSINESS CARD</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: heading */}
          <div className="lg:col-span-4 space-y-8">
            <h2 className="text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
              The <br />
              <span className="font-serif italic font-normal lowercase">Card</span>
            </h2>
            <p className="text-ink/50 text-sm leading-relaxed max-w-xs">
              A distillation of purpose into a single artifact. Flip it to reveal the full story.
            </p>
            <button
              onClick={handleFlip}
              className="btn-luxury flex items-center gap-3 group"
              disabled={isAnimating}
            >
              <RefreshCw
                className={`w-4 h-4 transition-transform duration-700 ${isAnimating ? 'rotate-180' : ''}`}
              />
              {isFlipped ? 'Flip Back' : 'Flip Card'}
            </button>
          </div>

          {/* Right: Card */}
          <div className="lg:col-span-8 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-[520px] aspect-[1.75/1] cursor-pointer select-none"
              style={{ perspective: '1200px' }}
              onClick={handleFlip}
            >
              {/* Butterfly wings burst from center on flip */}
              <ButterflyWing side="left" isAnimating={isAnimating} />
              <ButterflyWing side="right" isAnimating={isAnimating} />
              <FloatingButterflies isVisible={showButterflies} />

              {/* Card inner (flip container) */}
              <motion.div
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 border border-ink bg-paper overflow-hidden"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Gold corner accent */}
                  <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-accent opacity-30" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-accent opacity-20" />

                  {/* Subtle grid texture */}
                  <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                      backgroundImage: 'repeating-linear-gradient(0deg, #0a0a0a 0px, #0a0a0a 1px, transparent 1px, transparent 24px), repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 1px, transparent 1px, transparent 24px)',
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono uppercase tracking-[0.35em] opacity-30">Black Apex Consultancy</span>
                      <div className="w-6 h-6 border border-accent/40 rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-accent/60 rotate-45" />
                      </div>
                    </div>

                    <div>
                      <div className="h-[1px] bg-ink/10 mb-6" />
                      <h3 className="text-3xl md:text-4xl font-black tracking-tighter leading-none mb-1">
                        Vaishnavi Dixit
                      </h3>
                      <p className="font-serif italic text-accent text-lg">Founder & CEO</p>
                    </div>

                    <div className="flex justify-between items-end">
                      <span className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-20">Est. 2026</span>
                      <span className="text-[9px] font-mono opacity-20">Tap to flip →</span>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 bg-ink text-paper border border-ink overflow-hidden"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  {/* Gold accent lines */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-30" />

                  {/* Large faint apex wordmark */}
                  <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                    <span
                      className="text-[9vw] md:text-[70px] font-black uppercase tracking-tighter opacity-[0.04] whitespace-nowrap"
                    >
                      Black Apex
                    </span>
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-between p-8 md:p-10">
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-mono uppercase tracking-[0.35em] opacity-30 text-paper">Contact</span>
                      <div className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-20 text-accent">Black Apex</div>
                    </div>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                      <a
                        href="mailto:vaishnavidixit2000@gmail.com"
                        className="flex items-center gap-2 group"
                        onClick={e => e.stopPropagation()}
                      >
                        <Mail className="w-3 h-3 text-accent flex-shrink-0" />
                        <span className="text-[11px] font-mono opacity-60 group-hover:opacity-100 transition-opacity truncate">
                          vaishnavidixit2000@gmail.com
                        </span>
                      </a>
                      <a
                        href="tel:9451368275"
                        className="flex items-center gap-2 group"
                        onClick={e => e.stopPropagation()}
                      >
                        <Phone className="w-3 h-3 text-accent flex-shrink-0" />
                        <span className="text-[11px] font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                          +91 94513 68275
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/vaishnavi-dixit27aug"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group"
                        onClick={e => e.stopPropagation()}
                      >
                        <Linkedin className="w-3 h-3 text-accent flex-shrink-0" />
                        <span className="text-[11px] font-mono opacity-60 group-hover:opacity-100 transition-opacity">
                          LinkedIn Profile
                        </span>
                      </a>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-[11px] font-mono opacity-60 leading-relaxed">
                          Kanpur, UP, India
                        </span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t border-paper/10 pt-4">
                      <a
                        href="#contact"
                        className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-accent hover:opacity-80 transition-opacity"
                        onClick={e => e.stopPropagation()}
                      >
                        Book a Session <ArrowUpRight className="w-3 h-3" />
                      </a>
                      <span className="text-[9px] font-mono opacity-20">blackapexconsultancy.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hint text below */}
        <motion.div
          className="mt-16 flex items-center gap-6 opacity-30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="h-px flex-1 bg-ink/20" />
          <span className="text-[9px] font-mono uppercase tracking-[0.4em]">Click card or button to flip</span>
          <div className="h-px flex-1 bg-ink/20" />
        </motion.div>
      </div>
    </section>
  );
}
