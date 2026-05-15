import { motion } from "motion/react";
import { MessageCircle, Twitter } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Contact() {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-white text-black text-center">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-black/30 text-xs uppercase tracking-[0.2em] font-medium">{t('contact_badge')}</span>
          <h2 className="text-4xl md:text-7xl font-display font-bold mt-6 mb-8 leading-tight uppercase tracking-tight">
            {t('contact_title_1')} <br /> {t('contact_title_2')}
          </h2>
          
          <p className="text-lg md:text-xl text-black/60 mb-12 font-light max-w-2xl mx-auto">
            {t('contact_desc')}
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href={t('contact_url')} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full hover:bg-zinc-800 transition-all text-sm font-bold uppercase tracking-[0.2em] active:scale-95 group"
            >
              {language === 'RU' ? <MessageCircle className="w-5 h-5" /> : <Twitter className="w-5 h-5" />} {t('contact_cta')}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
