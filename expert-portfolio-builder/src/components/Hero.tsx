import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-3 py-1 mb-6 border border-white/20 rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-white/50"
        >
          {t('hero_badge')}
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-normal mb-8 uppercase"
        >
          {t('hero_title_1')} <br />
          {t('hero_title_2')} <br />
          <span className="text-white/20">{t('hero_title_3')}</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed mb-12"
        >
          {t('hero_desc')}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <a 
            href="#contact" 
            className="group inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm md:text-base uppercase tracking-wider hover:bg-white/90 transition-all active:scale-95"
          >
            {t('hero_cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 border-l border-white/5 hidden lg:block -z-10 bg-gradient-to-l from-white/[0.02] to-transparent"></div>
    </section>
  );
}
