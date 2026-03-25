import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Gem } from 'lucide-react';

const stats = [
  { label: "Projects per month", value: "20+", icon: BarChart3 },
  { label: "Average project value", value: "₹50,000", icon: Gem },
  { label: "Monthly growth", value: "20%", icon: TrendingUp }
];

export function Stats() {
  return (
    <section className="section-padding border-b border-ink/10 bg-ink/[0.02]">
      <div className="grid-container">
        <span className="section-number">03 / PERFORMANCE</span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">{stat.value}</h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
