import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const testimonials = [
  {
    quote: "Black Apex didn't just consult; they re-architected our entire digital presence. The precision in their execution is unmatched.",
    author: "Strategy Director, Tata Group",
  },
  {
    quote: "Vaishnavi's ability to simplify complex enterprise problems into actionable growth strategies is a rare asset.",
    author: "VP Operations, Reliance Industries",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x1 = useTransform(scrollYProgress, [0, 1], ['0%', '-5%']);
  const x2 = useTransform(scrollYProgress, [0, 1], ['0%', '5%']);

  return (
    <section ref={ref} className="section-padding border-b border-ink/10 overflow-hidden">
      <div className="grid-container">
        <span className="section-number">05 / TESTIMONIALS</span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              style={{ x: i === 0 ? x1 : x2 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <span className="text-6xl font-serif italic opacity-20 leading-none block">"</span>
              <p className="text-2xl md:text-3xl leading-tight font-light italic">{t.quote}</p>
              <p className="text-xs font-mono uppercase tracking-widest opacity-40">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
