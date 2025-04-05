'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import LanguageDropdown from './LanguageDropdown';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('Header');

  // Get the locale directly from the URL path (e.g. /en/ or /fr/)
  const locale = pathname.split('/')[1]; // Extract the first segment of the path

  // Define the available languages directly here
  const availableLanguages = [
    { code: 'en', name: t('languages.english') },
    { code: 'fr', name: t('languages.french') },
  ];

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="text-2xl font-bold">
          <a href="/">{t('brand')}</a>
        </div>

        {/* Language Dropdown */}
        <LanguageDropdown locale={locale} availableLanguages={availableLanguages} />
      </div>
    </header>
  );
}
