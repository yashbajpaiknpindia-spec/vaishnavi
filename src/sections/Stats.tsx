import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BarChart3, TrendingUp, Gem } from 'lucide-react';

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 15 });

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, value, motionVal]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = prefix + Math.round(v).toLocaleString() + suffix;
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

const stats = [
  { label: 'Projects per month', valueNum: 20, suffix: '+', icon: BarChart3 },
  { label: 'Average project value', prefix: '₹', valueNum: 50000, icon: Gem },
  { label: 'Monthly growth', valueNum: 20, suffix: '%', icon: TrendingUp },
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-500">
                <stat.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="space-y-2">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
                  <AnimatedNumber value={stat.valueNum} prefix={stat.prefix} suffix={stat.suffix} />
                </h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
