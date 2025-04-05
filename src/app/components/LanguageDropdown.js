'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function LanguageDropdown({ locale, availableLanguages }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null); // Reference for the dropdown menu

  // Language switch handler
  const changeLanguage = (newLocale) => {
    // Get the current locale from the pathname (assuming it is the first segment after "/")
    const currentLocale = pathname.split('/')[1];

    // Only change the language if the new locale is different from the current one
    if (currentLocale !== newLocale) {
      // Replace only the first occurrence of the current locale in the pathname
      const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);

      // Navigate to the new URL with the updated language
      router.push(newPathname);
    }

    setIsOpen(false); // Close the dropdown after switching
  };
  
  

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-lg bg-gray-700 px-4 py-2 rounded-md focus:outline-none"
      >
        {/* Display current language */}
        <span className={`mr-2 ${isOpen ? 'text-blue-500' : 'text-white'}`}>
          {locale ? locale.toUpperCase() : 'EN'}
        </span>
        {/* Dropdown Arrow */}
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-gray-800 text-white rounded-md shadow-lg transition-all duration-300">
          {availableLanguages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`block w-full text-left px-4 py-2 hover:bg-blue-500 hover:text-white transition-colors duration-300 ${
                locale === language.code ? 'bg-blue-500 text-white' : ''
              }`}
            >
              {language.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
