import { useState } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Services } from './sections/Services';
import { Stats } from './sections/Stats';
import { CaseStudies } from './sections/CaseStudies';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function App() {
  useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <main className="relative bg-paper selection:bg-ink selection:text-paper">
      <CustomCursor />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center mix-blend-difference text-paper">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl font-black tracking-tighter uppercase"
        >
          Black Apex
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleMenu}
          className="group flex items-center gap-4"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            {isMenuOpen ? 'Close' : 'Menu'}
          </span>
          <div className="w-10 h-10 rounded-full border border-paper/20 flex flex-col items-center justify-center gap-1.5 hover:bg-paper hover:text-ink transition-all duration-500">
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <>
                <div className="w-5 h-[1px] bg-current" />
                <div className="w-3 h-[1px] bg-current self-end mr-2.5" />
                <div className="w-5 h-[1px] bg-current" />
              </>
            )}
          </div>
        </motion.button>
      </nav>

      {/* Fullscreen Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-ink text-paper flex flex-col"
          >
            <div className="flex justify-between items-center px-6 md:px-12 py-6 md:py-8">
              <span className="text-lg md:text-xl font-black tracking-tighter uppercase">Black Apex</span>
              <button 
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full border border-paper/20 flex items-center justify-center hover:bg-paper hover:text-ink transition-all duration-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-grow flex flex-col justify-center px-6 md:px-24">
              <div className="space-y-4">
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-6xl md:text-8xl font-black hover:italic hover:pl-8 transition-all duration-500 block"
                    >
                      {link.name}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-12 border-t border-paper/10 flex flex-col md:flex-row justify-between items-end gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <Mail className="w-3 h-3" />
                  <p className="text-[10px] font-mono uppercase tracking-[0.3em]">Get in touch</p>
                </div>
                <a href="mailto:vaishnavidixit2000@gmail.com" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors">vaishnavidixit2000@gmail.com</a>
              </div>
              <div className="flex gap-8">
                <a href="https://www.linkedin.com/in/vaishnavi-dixit27aug" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
      
      <div id="about">
        <About />
      </div>

      <Stats />

      <div id="services">
        <Services />
      </div>

      <div id="work">
        <CaseStudies />
      </div>

      <Testimonials />

      <Contact />

      {/* Footer */}
      <footer className="py-12 border-t border-ink/10">
        <div className="grid-container flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
            © 2026 Black Apex Consultancy. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
            <a href="#" className="hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Twitter</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Instagram</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
