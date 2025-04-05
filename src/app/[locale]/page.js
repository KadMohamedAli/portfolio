'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Home() {
  const t = useTranslations('Home'); // Access the translations for the 'Home' namespace

  return (
    <div className="py-10 bg-gray-50">

      {/* Intro */}
      <section className="max-w-6xl mx-auto px-6 text-center mt-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">{t('intro.name')}</h1>
        <p className="text-xl text-gray-600">{t('intro.title')}</p>
        <p className="mt-2 text-md text-gray-500">{t('intro.location')}</p>
      </section>

      {/* Contact Bar */}
      <section className="mt-8 max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-center gap-8 text-sm text-center">
        <span className="text-gray-700">{t('contact.phone')}</span>
        <span className="text-gray-700">
          {t('contact.email')}{' '}
          <a href="mailto:kaddour.mohamed.ali.31@gmail.com" className="text-blue-600 underline">
            {t('contact.email')}
          </a>
        </span>
        <a href="https://github.com/KadMohamedAli" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          {t('contact.github')}
        </a>
        <a href="https://linkedin.com/in/mohamed-ali-kaddour-3b6300256" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          {t('contact.linkedin')}
        </a>
      </section>

      {/* Summary */}
      <section className="mt-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">{t('summary.title')}</h2>
        <p className="text-lg leading-relaxed text-gray-700">{t('summary.content')}</p>
      </section>

      {/* Projects */}
      <section className="mt-12 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8 text-center">{t('projects.title')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <Image src="/images/game-thumb.jpg" alt={t('projects.game.title')} width={600} height={300} className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{t('projects.game.title')}</h3>
                <p className="text-sm text-gray-600">{t('projects.game.tech')}</p>
                <p className="mt-4 text-base text-gray-700">{t('projects.game.description')}</p>
              </div>
            </div>

            {/* Meal App */}
            <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden">
              <Image src="/images/meal-app-thumb.jpg" alt={t('projects.mealApp.title')} width={600} height={300} className="rounded-t-xl" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800">{t('projects.mealApp.title')}</h3>
                <p className="text-sm text-gray-600">{t('projects.mealApp.tech')}</p>
                <p className="mt-4 text-base text-gray-700">{t('projects.mealApp.description')}</p>
              </div>
            </div>

            {/* Auction */}
            <div className="bg-gray-50 rounded-xl shadow-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-800">{t('projects.auctionApp.title')}</h3>
              <p className="text-sm text-gray-600">{t('projects.auctionApp.tech')}</p>
              <p className="mt-4 text-base text-gray-700">{t('projects.auctionApp.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-12 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">{t('contactMe.openTo')}</h2>
        <div className="space-y-4 text-lg text-gray-700">
          <p>
            📧{' '}
            <a href="mailto:kaddour.mohamed.ali.31@gmail.com" className="text-blue-600 underline">
              kaddour.mohamed.ali.31@gmail.com
            </a>
          </p>
          <p>📞 +213 696181641</p>
          <p>🌐 <a href="https://github.com/KadMohamedAli" className="text-blue-600 underline">GitHub</a></p>
          <p>🔗 <a href="https://linkedin.com/in/mohamed-ali-kaddour-3b6300256" className="text-blue-600 underline">LinkedIn</a></p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-gray-500 py-6 border-t">
        {t('footer.text', { year: new Date().getFullYear() })}
      </footer>
    </div>
  );
}
