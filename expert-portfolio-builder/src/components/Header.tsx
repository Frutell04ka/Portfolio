import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <button 
        onClick={scrollToTop}
        className="text-xl font-display font-medium tracking-tighter uppercase hover:opacity-80 transition-opacity cursor-pointer"
      >
        Frutell04ka
      </button>
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium text-white/60 items-center">
        <a href="#services" className="hover:text-white transition-colors">{t('nav_expertise')}</a>
        <a href="#portfolio" className="hover:text-white transition-colors">{t('nav_works')}</a>
        <a href="#contact" className="hover:text-white transition-colors">{t('nav_contacts')}</a>
        
        <div className="flex gap-4 ml-4 border-l border-white/10 pl-8">
          <button 
            onClick={() => setLanguage('RU')} 
            className={`transition-colors ${language === 'RU' ? 'text-white' : 'text-white/20 hover:text-white/40'}`}
          >
            RU
          </button>
          <button 
            onClick={() => setLanguage('EN')} 
            className={`transition-colors ${language === 'EN' ? 'text-white' : 'text-white/20 hover:text-white/40'}`}
          >
            EN
          </button>
        </div>
      </nav>
      <div className="md:hidden flex items-center gap-6">
        <button 
          onClick={() => setLanguage(language === 'RU' ? 'EN' : 'RU')}
          className="text-xs font-bold text-white/60 tracking-widest"
        >
          {language}
        </button>
        <div className="flex flex-col gap-1.5">
          <div className="w-6 h-px bg-white"></div>
          <div className="w-6 h-px bg-white"></div>
        </div>
      </div>
    </motion.header>
  );
}
