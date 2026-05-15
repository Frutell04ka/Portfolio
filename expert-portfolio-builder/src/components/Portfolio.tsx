import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export function Portfolio() {
  const { t } = useLanguage();
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const works = [
    { 
      id: 1, 
      type: t('service_1_title'), 
      category: "Premium Expert",
      id_video: "_6VwhpiQAvs"
    },
    { 
      id: 2, 
      type: t('service_2_title'), 
      category: "Real Estate",
      id_video: "_Vw--s8eknk"
    },
    { 
      id: 3, 
      type: t('service_3_title'), 
      category: "Crypto / Web3",
      id_video: "SqOrNKsH6cs"
    },
    { 
      id: 4, 
      type: "Fashion", 
      category: "Fashion / Brand",
      id_video: "JVYp8W-Lz-Y"
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">{t('portfolio_badge')}</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 tracking-tight uppercase">{t('portfolio_title')}</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/40 max-w-sm text-sm"
          >
            {t('portfolio_desc')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {works.map((work, index) => (
            <motion.button
              onClick={() => setSelectedVideo(work.id_video)}
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-[9/16] bg-zinc-900 rounded-xl overflow-hidden block w-full text-left"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10 opacity-60 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20">
                <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-white mb-1 block">{work.category}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-[400px] aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-white rounded-full hover:bg-white hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
