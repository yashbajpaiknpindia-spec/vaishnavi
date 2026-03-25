import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Briefcase, BarChart2, FolderOpen, MessageSquare, CreditCard } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#', section: null },
  { icon: User, label: 'About', href: '#about', section: 'about' },
  { icon: Briefcase, label: 'Services', href: '#services', section: 'services' },
  { icon: BarChart2, label: 'Stats', href: '#stats', section: 'stats' },
  { icon: FolderOpen, label: 'Work', href: '#work', section: 'work' },
  { icon: CreditCard, label: 'Card', href: '#card', section: 'card' },
  { icon: MessageSquare, label: 'Contact', href: '#contact', section: 'contact' },
];

export function BottomNav() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Show after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY > 200);
      setLastScrollY(currentY);

      // Track active section
      const sections = ['about', 'services', 'stats', 'work', 'card', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            setActive(i + 1);
            return;
          }
        }
      }
      setActive(0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleClick = (index: number, href: string) => {
    setActive(index);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pb-4 md:pb-6 px-4 pointer-events-none"
        >
          <div
            className="pointer-events-auto flex items-center gap-1 bg-ink/95 backdrop-blur-md border border-paper/10 px-3 py-3 shadow-2xl"
            style={{ borderRadius: '2px' }}
          >
            {navItems.map((item, i) => {
              const Icon = item.icon;
              const isActive = active === i;

              return (
                <button
                  key={item.label}
                  onClick={() => handleClick(i, item.href)}
                  className="relative group flex flex-col items-center justify-center px-3 py-2 transition-all duration-300"
                  aria-label={item.label}
                >
                  {/* Active indicator bar top */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent"
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Icon */}
                  <motion.div
                    animate={{
                      y: isActive ? -2 : 0,
                      color: isActive ? '#c5a059' : 'rgba(255,255,255,0.4)',
                    }}
                    whileHover={{ color: '#c5a059', y: -1 }}
                    transition={{ duration: 0.2 }}
                    className="relative"
                  >
                    <Icon className="w-4 h-4" />

                    {/* Gold dot for active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full"
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Label */}
                  <motion.span
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? 'auto' : 0,
                      marginTop: isActive ? 4 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-[8px] font-mono uppercase tracking-[0.2em] text-accent overflow-hidden whitespace-nowrap"
                  >
                    {item.label}
                  </motion.span>

                  {/* Hover tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-paper text-ink text-[9px] font-mono uppercase tracking-widest px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-ink/10">
                    {item.label}
                  </div>
                </button>
              );
            })}
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
