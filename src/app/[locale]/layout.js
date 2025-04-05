import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing'; // Make sure this routing file is correctly set up
import Header from '../components/Header';


export default async function LocaleLayout({ children, params }) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  
  // Validate if the locale exists in your routing locales
  if (!hasLocale(routing.locales, locale)) {
    notFound(); // If not found, display 404
  }

  return (
    <html lang={locale}>
      <body>
        {/* Wrap the children inside the NextIntlClientProvider */}
        <NextIntlClientProvider locale={locale}>
        <Header locale={locale} />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
