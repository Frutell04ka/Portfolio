/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function AppContent() {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans">
      <Header />
      <main id="top">
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <footer className="py-12 px-6 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Frutell04ka. {t('footer_rights')}</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
