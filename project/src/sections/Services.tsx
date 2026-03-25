import { motion } from 'framer-motion';
import { Briefcase, Code, Smartphone, Palette, Megaphone, Plus } from 'lucide-react';

const services = [
  { name: "Business Consulting", icon: Briefcase },
  { name: "Web Development", icon: Code },
  { name: "App Development", icon: Smartphone },
  { name: "Branding", icon: Palette },
  { name: "Marketing", icon: Megaphone }
];

export function Services() {
  return (
    <section className="section-padding border-b border-ink/10">
      <div className="grid-container">
        <span className="section-number">02 / SERVICES</span>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10 border border-ink/10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-paper p-8 md:p-12 group interactive relative overflow-hidden"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono opacity-20">0{index + 1}</span>
                <service.icon className="w-5 h-5 text-ink/20 group-hover:text-accent transition-colors" />
              </div>
              <h4 className="text-2xl md:text-3xl font-black mb-12">{service.name}</h4>
              
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-ink transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
          
          <div className="bg-ink text-paper p-8 md:p-12 flex flex-col justify-between min-h-[250px]">
            <div className="flex justify-between items-start">
              <p className="text-sm font-bold uppercase tracking-widest">Custom Solutions</p>
              <Plus className="w-5 h-5 text-accent" />
            </div>
            <h4 className="text-2xl md:text-3xl font-black">Tailored to your <br />enterprise.</h4>
            <a href="#contact" className="text-xs font-mono uppercase tracking-widest border-b border-paper/20 pb-2 w-fit hover:border-paper transition-colors">
              Inquire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
