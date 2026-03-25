import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, ArrowRight, Linkedin, Mail } from 'lucide-react';

const contacts = [
  { icon: Phone, label: 'Phone', value: '94513 68275', href: 'tel:9451368275' },
  { icon: MessageSquare, label: 'WhatsApp', value: 'Direct Chat', href: 'https://wa.me/9451368275' },
  { icon: Mail, label: 'Email', value: 'vaishnavidixit2000@gmail.com', href: 'mailto:vaishnavidixit2000@gmail.com' },
  { icon: Linkedin, label: 'LinkedIn', value: 'Connect', href: 'https://www.linkedin.com/in/vaishnavi-dixit27aug', target: '_blank' },
  { icon: MapPin, label: 'Location', value: 'Kanpur (Near Mardanganj), UP, India', href: null },
];

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="grid-container">
        <span className="section-number">07 / CONTACT</span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[8vw] leading-[0.85] mb-12"
            >
              Built for <br />Businesses <br />That{' '}
              <span className="font-serif italic font-normal lowercase">Think Bigger</span>.
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-12 pt-12 border-t border-ink/10">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 opacity-40">
                    <c.icon className="w-3 h-3" />
                    <p className="text-[10px] font-mono uppercase tracking-widest">{c.label}</p>
                  </div>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={(c as any).target || undefined}
                      rel={(c as any).target ? 'noopener noreferrer' : undefined}
                      className="text-xl md:text-2xl font-bold hover:text-accent transition-colors tracking-tighter break-all block"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-xl md:text-2xl font-bold tracking-tighter">{c.value}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-12">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg md:text-xl leading-relaxed text-ink/60"
              >
                Ready to architect your enterprise growth? Book a confidential strategy session with Vaishnavi Dixit.
              </motion.p>

              <a
                href="https://wa.me/9451368275"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury w-full interactive flex items-center justify-center gap-3 group"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
