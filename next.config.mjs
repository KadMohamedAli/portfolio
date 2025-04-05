import nextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'fr'], // Add all the languages you need
    defaultLocale: 'en', // Default language if none is provided
  },};

export default nextIntlPlugin(nextConfig);
