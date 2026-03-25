import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Black Apex didn't just consult; they re-architected our entire digital presence. The precision in their execution is unmatched.",
    author: "Strategy Director, Tata Group"
  },
  {
    quote: "Vaishnavi's ability to simplify complex enterprise problems into actionable growth strategies is a rare asset.",
    author: "VP Operations, Reliance Industries"
  }
];

export function Testimonials() {
  return (
    <section className="section-padding border-b border-ink/10">
      <div className="grid-container">
        <span className="section-number">06 / TESTIMONIALS</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {testimonials.map((t, i) => (
            <div key={i} className="space-y-8">
              <span className="text-6xl font-serif italic opacity-20">“</span>
              <p className="text-2xl md:text-3xl leading-tight font-light italic">
                {t.quote}
              </p>
              <p className="text-xs font-mono uppercase tracking-widest opacity-40">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
