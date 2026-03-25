import { motion } from 'framer-motion';
import { Briefcase, Code, Smartphone, Palette, Megaphone, ArrowUpRight } from 'lucide-react';

const services = [
  { name: "Business Consulting", desc: "Strategic growth architecture for modern enterprises.", icon: Briefcase },
  { name: "Web Development", desc: "Precision-crafted digital experiences.", icon: Code },
  { name: "App Development", desc: "Mobile-first solutions for scale.", icon: Smartphone },
  { name: "Branding", desc: "Identity systems that command authority.", icon: Palette },
  { name: "Marketing", desc: "Data-driven campaigns that convert.", icon: Megaphone },
];

export function Services() {
  return (
    <section className="section-padding border-b border-ink/10">
      <div className="grid-container">
        <span className="section-number">02 / SERVICES</span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl mb-16"
        >
          What We <br /><span className="font-serif italic font-normal lowercase">Build</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="bg-paper p-8 md:p-12 group interactive relative overflow-hidden cursor-none"
            >
              {/* Hover fill */}
              <motion.div
                className="absolute inset-0 bg-ink"
                initial={{ y: '101%' }}
                whileHover={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-8">
                  <span className="text-xs font-mono opacity-20 group-hover:opacity-60 group-hover:text-paper transition-all">0{index + 1}</span>
                  <service.icon className="w-5 h-5 text-ink/20 group-hover:text-accent transition-colors duration-300" />
                </div>
                <h4 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-paper transition-colors duration-300">{service.name}</h4>
                <p className="text-sm text-ink/50 group-hover:text-paper/60 transition-colors duration-300 leading-relaxed">{service.desc}</p>

                <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-accent">Explore</span>
                  <ArrowUpRight className="w-3 h-3 text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
