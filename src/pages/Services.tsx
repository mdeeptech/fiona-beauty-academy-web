import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { mensServices, services } from '../data/services';
import Booking from './Booking';

export default function Services() {
  const [activeAudience, setActiveAudience] = useState<'WOMEN' | 'MEN'>('WOMEN');
  const [activeCategory, setActiveCategory] = useState(services[0].category);
  const [bookingOpen, setBookingOpen] = useState(false);
  const audienceCategories = {
    WOMEN: [...new Set(services.map(s => s.category))],
    MEN: [...new Set(mensServices.map(s => s.category))],
  };
  const categories = audienceCategories[activeAudience];
  const activeServices = activeAudience === 'MEN' ? mensServices : services;

  const selectAudience = (audience: 'WOMEN' | 'MEN') => {
    setActiveAudience(audience);
    setActiveCategory(audienceCategories[audience][0]);
  };

  return (
    <div className="bg-fiona-ivory pt-32 pb-24 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h1 className="text-4xl md:text-6xl font-serif text-fiona-burgundy mb-6" initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>PREMIUM SERVICES</motion.h1>
          <motion.p className="text-fiona-black/70 max-w-2xl mx-auto tracking-wide" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.14 }}>
            Experience luxury beauty treatments performed by trained professionals in our state-of-the-art facility.
          </motion.p>
        </div>

        <div className="flex justify-center gap-3 mb-10" role="tablist" aria-label="Service sections">
          {(['WOMEN', 'MEN'] as const).map(audience => (
            <button
              key={audience}
              type="button"
              role="tab"
              aria-selected={activeAudience === audience}
              onClick={() => selectAudience(audience)}
              className={`min-w-36 px-8 py-4 text-sm tracking-[0.2em] font-semibold border transition-colors ${
                activeAudience === audience
                  ? 'bg-fiona-burgundy text-fiona-ivory border-fiona-burgundy'
                  : 'bg-white/60 text-fiona-burgundy border-fiona-taupe/30 hover:border-fiona-burgundy'
              }`}
            >
              {audience === 'WOMEN' ? "WOMEN'S" : "MEN'S"}
            </button>
          ))}
        </div>

        {/* Desktop Layout */}
        <div className="flex flex-col md:flex-row gap-12">
          {/* Categories Sidebar */}
          <div className="md:w-1/3">
            <div className="sticky top-32 flex flex-col gap-2">
              {categories.map(cat => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: categories.indexOf(cat) * 0.055 }}
                  className={`text-left px-6 py-4 border-l-2 text-sm tracking-widest font-semibold transition-all duration-300 ${
                    activeCategory === cat 
                      ? 'border-fiona-champagne bg-white text-fiona-burgundy shadow-sm' 
                      : 'border-transparent text-fiona-black/50 hover:text-fiona-burgundy hover:bg-white/50'
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Services List */}
          <div className="md:w-2/3">
            <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeCategory}
              className="bg-white p-8 md:p-12 shadow-sm border border-fiona-taupe/20"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-serif text-fiona-burgundy mb-8 pb-4 border-b border-fiona-champagne/30">
                {activeCategory}
              </h2>
              <div className="flex flex-col gap-6">
                {activeServices.filter(s => s.category === activeCategory).map((service, idx) => (
                  <motion.div key={`${activeCategory}-${service.name}-${idx}`} className="flex justify-between items-end group" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35, delay: idx * 0.045 }}>
                    <div className="flex-1 pr-4 relative overflow-hidden">
                      <h3 className="font-medium text-fiona-burgundy group-hover:text-fiona-champagne transition-colors">{service.name}</h3>
                      {/* Dotted line leader */}
                      <div className="absolute bottom-1 left-0 w-full h-[1px] border-b border-dotted border-fiona-taupe/40 z-0"></div>
                      <span className="relative z-10 bg-white pr-2 inline-block"></span>
                    </div>
                    <div className="font-serif text-lg font-semibold text-fiona-black relative z-10 bg-white pl-2">
                      {service.price}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-fiona-taupe/20 text-center">
                <button
                  type="button"
                  onClick={() => setBookingOpen(true)}
                  className="inline-block bg-fiona-burgundy text-fiona-ivory px-8 py-4 text-xs tracking-widest font-bold hover:bg-fiona-champagne hover:text-fiona-burgundy transition-all duration-300"
                >
                  BOOK AN APPOINTMENT
                </button>
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
      {bookingOpen && <Booking isModal initialType="Service" lockType serviceOptions={activeServices} onClose={() => setBookingOpen(false)} />}
    </div>
  );
}
