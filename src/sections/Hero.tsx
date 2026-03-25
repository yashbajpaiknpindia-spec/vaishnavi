import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Target, Zap } from 'lucide-react';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen flex flex-col justify-center pt-32 pb-12 relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #0a0a0a 0px, #0a0a0a 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 1px, transparent 1px, transparent 80px)',
        }}
      />

      <motion.div style={{ y, opacity }} className="grid-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-8"
        >
          <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
            <div className="h-[2px] w-12 bg-ink" />
            <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-[0.4em] text-ink">
              Vaishnavi Dixit <span className="opacity-60 ml-2 font-medium">Founder & CEO</span>
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-[11vw] sm:text-[13vw] md:text-[12vw] lg:text-[10vw] leading-[0.9] font-black"
          >
            Precision in{' '}
            <span className="font-serif italic font-normal lowercase">Strategy</span>. <br />
            Power in{' '}
            <span className="font-serif italic font-normal lowercase">Execution</span>.
          </motion.h1>
        </motion.div>

        <motion.div
          className="lg:col-span-4 lg:pb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                <p className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Black Apex Consultancy</p>
              </div>
              <p className="text-ink/60 text-sm md:text-base leading-relaxed">
                Led by Vaishnavi Dixit — delivering precision-driven consulting for modern enterprises.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-luxury interactive flex items-center justify-center gap-3 w-full md:w-fit group"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="mt-auto border-t border-ink/10 py-8 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="grid-container flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3" />
            <span>Architectural Minimalism</span>
          </div>
          <span>Precision Grid Design</span>
          <span>Est. 2026</span>
        </div>
      </motion.div>
    </section>
  );
}
