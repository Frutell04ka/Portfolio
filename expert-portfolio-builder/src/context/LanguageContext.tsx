import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'RU' | 'EN';

interface Translations {
  [key: string]: {
    RU: string;
    EN: string;
  };
}

export const translations: Translations = {
  nav_expertise: { RU: 'Экспертиза', EN: 'Expertise' },
  nav_works: { RU: 'Работы', EN: 'Works' },
  nav_contacts: { RU: 'Контакты', EN: 'Contacts' },
  hero_badge: { RU: 'Frutell04ka // Монтаж для первых', EN: 'Frutell04ka // Editing for the Elite' },
  hero_title_1: { RU: 'ВАШ СТАТУС', EN: 'YOUR STATUS' },
  hero_title_2: { RU: 'В КАЖДОМ', EN: 'IN EVERY' },
  hero_title_3: { RU: 'КАДРЕ', EN: 'FRAME' },
  hero_desc: { 
    RU: 'Помогаю предпринимателям и экспертам усиливать личный бренд через вертикальный монтаж. Удержание, стиль и трансляция вашего уровня через экран.', 
    EN: 'Helping entrepreneurs and experts amplify their personal brand through vertical editing. Retention, style, and status projection through the screen.' 
  },
  hero_cta: { RU: 'Обсудить проект', EN: 'Discuss Project' },
  services_badge: { RU: 'Ваша ценность через экран', EN: 'Your value through the screen' },
  services_title: { RU: 'ПОЧЕМУ ЭТО РАБОТАЕТ', EN: 'WHY IT WORKS' },
  service_1_title: { RU: 'Удержание внимания', EN: 'Attention Retention' },
  service_1_desc: { RU: 'Работа с динамикой кадра и ритмом, чтобы досматривали до конца. Каждая секунда имеет значение.', EN: 'Working with frame dynamics and rhythm so they watch until the end. Every second counts.' },
  service_2_title: { RU: 'Визуал уровня Premium', EN: 'Premium Visuals' },
  service_2_desc: { RU: 'Ваш контент должен соответствовать уровню вашего продукта. Обработка, которая транслирует дороговизну.', EN: 'Your content must match the level of your product. Processing that projects high value.' },
  service_3_title: { RU: 'Продающая экспертность', EN: 'Selling Expertise' },
  service_3_desc: { RU: 'Усиливаем смыслы через монтаж: акцент на важных фразах, смысловые субтитры и чистота подачи.', EN: 'We amplify meanings through editing: emphasis on key phrases, meaningful subtitles, and clean delivery.' },
  portfolio_badge: { RU: 'Кейсы', EN: 'Cases' },
  portfolio_title: { RU: 'ПРИМЕРЫ РАБОТ', EN: 'SAMPLES OF WORK' },
  portfolio_desc: { RU: 'Чистый результат без лишних слов. Каждый ролик — это инструмент для достижения ваших целей.', EN: 'Pure results without extra words. Every video is a tool for achieving your goals.' },
  contact_badge: { RU: 'Сотрудничество', EN: 'Collaboration' },
  contact_title_1: { RU: 'ГОТОВЫ ВЫЙТИ', EN: 'READY TO LEVEL' },
  contact_title_2: { RU: 'НА НОВЫЙ УРОВЕНЬ?', EN: 'UP YOUR CONTENT?' },
  contact_desc: { RU: 'Оставьте заявку в Telegram, и мы обсудим ваш проект, цели и то, как сделать ваш контент по-настоящему выдающимся.', EN: 'Connect with me on X (Twitter) or Telegram to discuss your project and goals.' },
  contact_cta: { RU: 'Написать в Telegram', EN: 'Message on X' },
  contact_url: { RU: 'https://t.me/Frutell04ka', EN: 'https://x.com/Frutell04ka' },
  footer_rights: { RU: 'Все права защищены.', EN: 'All rights reserved.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('RU');

  const t = (key: string) => {
    return translations[key] ? translations[key][language] : key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
