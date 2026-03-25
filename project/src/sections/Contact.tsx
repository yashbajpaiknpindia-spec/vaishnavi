import { motion } from 'framer-motion';
import { Phone, MessageSquare, MapPin, ArrowRight, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="grid-container">
        <span className="section-number">05 / CONTACT</span>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-8">
            <h2 className="text-5xl md:text-6xl lg:text-[8vw] leading-[0.85] mb-12">
              Built for <br />Businesses <br />That <span className="font-serif italic font-normal lowercase">Think Bigger</span>.
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-12 pt-12 border-t border-ink/10">
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <Phone className="w-3 h-3" />
                  <p className="text-[10px] font-mono uppercase tracking-widest">Phone</p>
                </div>
                <a href="tel:9451368275" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors tracking-tighter">94513 68275</a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <MessageSquare className="w-3 h-3" />
                  <p className="text-[10px] font-mono uppercase tracking-widest">WhatsApp</p>
                </div>
                <a href="https://wa.me/9451368275" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors tracking-tighter">Direct Chat</a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <MessageSquare className="w-3 h-3" />
                  <p className="text-[10px] font-mono uppercase tracking-widest">Email</p>
                </div>
                <a href="mailto:vaishnavidixit2000@gmail.com" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors tracking-tighter">vaishnavidixit2000@gmail.com</a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <Linkedin className="w-3 h-3" />
                  <p className="text-[10px] font-mono uppercase tracking-widest">LinkedIn</p>
                </div>
                <a href="https://www.linkedin.com/in/vaishnavi-dixit27aug" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-bold hover:text-accent transition-colors tracking-tighter">Connect</a>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 opacity-40">
                  <MapPin className="w-3 h-3" />
                  <p className="text-[10px] font-mono uppercase tracking-widest">Location</p>
                </div>
                <p className="text-xl md:text-2xl font-bold tracking-tighter">Lucknow, India</p>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 flex flex-col justify-end">
            <div className="space-y-12">
              <p className="text-lg md:text-xl leading-relaxed text-ink/60">
                Ready to architect your enterprise growth? Book a confidential strategy session with Vaishnavi Dixit.
              </p>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-luxury w-full interactive flex items-center justify-center gap-3 group"
              >
                Start a Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
