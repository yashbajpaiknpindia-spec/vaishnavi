import { motion } from 'framer-motion';
import { Eye, ShieldCheck } from 'lucide-react';

export function About() {
  return (
    <section className="section-padding border-b border-ink/10">
      <div className="grid-container">
        <span className="section-number">01 / ABOUT</span>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-8xl mb-8 lg:mb-12">The <br />Visionary</h2>
          </div>
          
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8 text-xl md:text-2xl leading-relaxed font-light"
            >
              <p>
                As the Founder & CEO of <span className="font-bold">Black Apex Consultancy</span>, Vaishnavi Dixit has redefined the landscape of modern business consulting through a lens of architectural precision.
              </p>
              <p>
                With a focus on data-driven decision making and strategic growth architecture, she leads a team dedicated to transforming legacy enterprises into agile, future-ready organizations.
              </p>
              <p>
                Her approach combines elite strategic thinking with deep technical expertise, ensuring that every project delivers measurable, high-impact results.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-12 border-t border-ink/10">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Eye className="w-5 h-5 text-accent" />
                  <p className="font-bold uppercase tracking-widest text-xs">Discipline</p>
                </div>
                <p className="text-ink/60 text-sm leading-relaxed">Highly disciplined, detail-oriented strategist with a focus on precision execution.</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <p className="font-bold uppercase tracking-widest text-xs">Authority</p>
                </div>
                <p className="text-ink/60 text-sm leading-relaxed">Trusted business authority delivering high-level consulting for global enterprises.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
