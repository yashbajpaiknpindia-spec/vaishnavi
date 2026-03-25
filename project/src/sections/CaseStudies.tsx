import { motion } from 'framer-motion';

const caseStudies = [
  {
    company: "Tata Group",
    logo: "TATA",
    title: "Digital Transformation",
    problem: "Legacy systems hindering operational speed.",
    strategy: "Cloud-native architecture and data-driven workflows.",
    result: "40% increase in operational efficiency."
  },
  {
    company: "Reliance Industries",
    logo: "RELIANCE",
    title: "Market Expansion",
    problem: "Saturated local markets requiring global reach.",
    strategy: "Aggressive digital branding and cross-platform app ecosystem.",
    result: "25% growth in international user base."
  },
  {
    company: "Infosys",
    logo: "INFOSYS",
    title: "AI Integration",
    problem: "Manual data processing causing bottlenecks.",
    strategy: "Custom AI-driven automation and predictive analytics.",
    result: "Reduction in processing time by 60%."
  },
  {
    company: "HDFC Bank",
    logo: "HDFC",
    title: "FinTech Evolution",
    problem: "Traditional banking friction in digital payments.",
    strategy: "End-to-end mobile banking overhaul and API integration.",
    result: "15M+ active digital users added."
  },
  {
    company: "Adani Group",
    logo: "ADANI",
    title: "Logistics Optimization",
    problem: "Supply chain visibility issues across continents.",
    strategy: "Blockchain-based tracking and IoT infrastructure.",
    result: "30% reduction in transit delays."
  }
];

export function CaseStudies() {
  return (
    <section className="border-b border-ink/10">
      <div className="grid-container py-24">
        <span className="section-number">04 / CASE STUDIES</span>
        <h2 className="text-4xl md:text-6xl font-black mt-8">Proven Impact for <br />Industry Leaders.</h2>
      </div>
      
      <div className="border-t border-ink/10">
        {caseStudies.map((study, index) => (
          <div key={index} className="border-b border-ink/10 group overflow-hidden hover:bg-ink/[0.01] transition-colors">
            <div className="grid-container py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-5 space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-ink text-paper flex items-center justify-center font-black text-[10px] tracking-tighter">
                    {study.logo}
                  </div>
                  <h4 className="text-xs font-mono uppercase tracking-widest opacity-40">{study.company}</h4>
                </div>
                <h3 className="text-4xl md:text-6xl tracking-tight">{study.title}</h3>
                
                <div className="space-y-6 pt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Problem</p>
                      <p className="text-base leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Strategy</p>
                      <p className="text-base leading-relaxed">{study.strategy}</p>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-ink/5">
                    <p className="text-[10px] font-mono uppercase tracking-widest opacity-40 mb-2">Result</p>
                    <p className="text-3xl md:text-4xl font-black text-accent">{study.result}</p>
                  </div>
                </div>
              </div>
              
              <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-[16/9] bg-ink/5 overflow-hidden relative group-hover:bg-ink/10 transition-colors">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  >
                    <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
                       <span className="text-[15vw] font-black uppercase tracking-tighter">{study.logo}</span>
                    </div>
                    <img 
                      src={`https://picsum.photos/seed/${study.company}/1200/800`} 
                      alt={study.company}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
