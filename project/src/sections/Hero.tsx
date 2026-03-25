import { motion } from 'framer-motion';
import { ArrowUpRight, Target, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-12">
      <div className="grid-container grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-[2px] w-12 bg-ink" />
            <span className="text-xs md:text-sm font-mono font-bold uppercase tracking-[0.4em] text-ink">
              Vaishnavi Dixit <span className="opacity-60 ml-2 font-medium">Founder & CEO</span>
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-[15vw] md:text-[12vw] lg:text-[10vw] leading-[0.85] font-black"
          >
            Precision in <span className="font-serif italic font-normal lowercase">Strategy</span>. <br />
            Power in <span className="font-serif italic font-normal lowercase">Execution</span>.
          </motion.h1>
        </div>
        
        <div className="lg:col-span-4 lg:pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-accent" />
                <p className="font-bold uppercase tracking-widest text-[10px] md:text-xs">Black Apex Consultancy</p>
              </div>
              <p className="text-ink/60 text-sm md:text-base leading-relaxed">Led by Vaishnavi Dixit — delivering precision-driven consulting for modern enterprises.</p>
            </div>
            
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-luxury interactive flex items-center justify-center gap-3 w-full md:w-fit group"
            >
              Book Consultation
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-auto border-t border-ink/10 py-8 hidden md:block">
        <div className="grid-container flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
          <div className="flex items-center gap-2">
            <Zap className="w-3 h-3" />
            <span>Architectural Minimalism</span>
          </div>
          <span>Precision Grid Design</span>
          <span>Est. 2026</span>
        </div>
      </div>
    </section>
  );
}
