import { useState, useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Stats } from './sections/Stats';
import { CaseStudies } from './sections/CaseStudies';
import { Testimonials } from './sections/Testimonials';
import { BusinessCard } from './sections/BusinessCard';
import { Contact } from './sections/Contact';
import { BottomNav } from './components/ui/BottomNav';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { X, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function App() {
  useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  useEffect(() => {
    // Preload fonts
    document.fonts.ready.then(() => {
      setIsLoaded(true);
    });
    // Fallback
    const t = setTimeout(() => setIsLoaded(true), 800);
    return () => clearTimeout(t);
  }, []);

  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Card", href: "#card" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      {/* Page loader */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[9998] bg-paper flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-black tracking-tighter uppercase"
            >
              Black Apex
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative bg-paper selection:bg-ink selection:text-paper overflow-x-hidden">
        <CustomCursor />

        {/* Scroll progress bar */}
        <motion.div
          className="fixed top-0 left-0 h-[2px] bg-accent z-[100] origin-left"
          style={{ width: progressWidth }}
        />

        {/* Navigation */}
        <nav className="fixed top-[2px] left-0 w-full z-50 px-6 md:px-12 py-5 md:py-7 flex justify-between items-center bg-paper/90 backdrop-blur-md border-b border-ink/5">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl font-black tracking-tighter uppercase hover:text-accent transition-colors duration-300"
          >
            Black Apex
          </motion.a>

          {/* Desktop nav links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {menuLinks.slice(0, 4).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity duration-300"
              >
                {link.name}
              </a>
            ))}
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="group flex items-center gap-4 interactive"
          >
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-0 group-hover:opacity-60 transition-opacity hidden md:block">
              {isMenuOpen ? 'Close' : 'Menu'}
            </span>
            <div className="w-10 h-10 rounded-full border border-ink/20 flex flex-col items-center justify-center gap-1.5 hover:bg-ink hover:text-paper hover:border-ink transition-all duration-400">
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center gap-1.5"
                  >
                    <div className="w-5 h-[1px] bg-current" />
                    <div className="w-3 h-[1px] bg-current self-end mr-2.5" />
                    <div className="w-5 h-[1px] bg-current" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </nav>

        {/* Fullscreen Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              exit={{ clipPath: 'inset(0 0 100% 0)' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col"
            >
              <div className="flex justify-between items-center px-6 md:px-12 py-5 md:py-7">
                <span className="text-lg md:text-xl font-black tracking-tighter uppercase">Black Apex</span>
                <button
                  onClick={toggleMenu}
                  className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-all duration-400 interactive"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-grow flex flex-col justify-center px-6 md:px-24">
                <div className="space-y-2">
                  {menuLinks.map((link, i) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
                    >
                      <a
                        href={link.href}
                        onClick={toggleMenu}
                        className="text-6xl md:text-8xl font-black hover:italic hover:pl-8 hover:text-accent transition-all duration-500 block leading-none py-2 interactive"
                      >
                        {link.name}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-6 md:p-12 border-t border-paper/10 flex flex-col md:flex-row justify-between items-end gap-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 opacity-40">
                    <Mail className="w-3 h-3" />
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Get in touch</p>
                  </div>
                  <a href="mailto:vaishnavidixit2000@gmail.com" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors break-all">
                    vaishnavidixit2000@gmail.com
                  </a>
                </div>
                <div className="flex gap-8">
                  <a href="https://www.linkedin.com/in/vaishnavi-dixit27aug" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors interactive"><Linkedin className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-accent transition-colors interactive"><Twitter className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-accent transition-colors interactive"><Instagram className="w-5 h-5" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <Hero />

        <div id="about">
          <About />
        </div>

        <div id="stats">
          <Stats />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="work">
          <CaseStudies />
        </div>

        <Testimonials />

        <div id="card">
          <BusinessCard />
        </div>

        <Contact />

        {/* Footer */}
        <footer className="py-12 pb-32 border-t border-ink/10">
          <div className="grid-container flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
              © 2026 Black Apex Consultancy. All Rights Reserved.
            </div>
            <div className="flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
              <a href="https://www.linkedin.com/in/vaishnavi-dixit27aug" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">LinkedIn</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
            </div>
          </div>
        </footer>

        <BottomNav />
      </main>
    </>
  );
}
