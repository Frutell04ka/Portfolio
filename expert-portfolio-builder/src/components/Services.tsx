import { motion } from "motion/react";
import { Zap, Target, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t('service_1_title'),
      description: t('service_1_desc')
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: t('service_2_title'),
      description: t('service_2_desc')
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t('service_3_title'),
      description: t('service_3_desc')
    }
  ];

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium">{t('services_badge')}</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-4 uppercase">{t('services_title')}</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 border border-white/5 bg-black/40 rounded-2xl hover:border-white/20 transition-all group"
            >
              <div className="mb-6 p-3 w-fit bg-white/5 rounded-xl group-hover:bg-white text-white group-hover:text-black transition-all">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-white/50 leading-relaxed font-light">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
