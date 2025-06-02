'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ChevronDown, User, ShoppingCart, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'BUY', path: '/buy' },
  { name: 'Sell', path: '/sell' },
  { name: 'Event', path: '/event' },
  { name: 'Clube', path: '/clube' },
  { name: 'Directory', path: '/directory' },
];

const languages = ['English', 'हिंदी'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState(languages[0]);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLanguageDropdown = () => setIsLanguageDropdownOpen((prev) => !prev);
  const changeLanguage = (lang) => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  const renderLinks = (onClick) =>
    navLinks.map(({ name, path }) => (
      <Link key={name} href={path} onClick={onClick} className="hover:text-gray-300">
        {name}
      </Link>
    ));

  return (
    <>
      {/* Mobile Language Selector - Outside Navbar */}
      <div className="md:hidden bg-black text-white p-2 flex justify-end">
        <div className="relative">
          <button className="flex items-center text-sm font-medium" onClick={toggleLanguageDropdown}>
            {language}
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => changeLanguage(lang)}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <nav className="flex h-20 lg:h-36 bg-black justify-center text-sm">
        <Link href="/" className="font-bold flex justify-center items-center">
          <Image src="/Company.svg" width={120} height={40} alt="Company Logo" className="bg-cover" />
        </Link>
        <div className=" h-20 lg:h-36 text-[#FAFAFA] w-full flex flex-col">
          {/* Language Selector - Desktop Only */}
          <div className="hidden md:flex justify-end p-2">
            <div className="relative px-20">
              <button className="flex items-center text-sm font-medium" onClick={toggleLanguageDropdown}>
                {language}
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      onClick={() => changeLanguage(lang)}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Main Navbar */}
          <div className="container mx-auto px-4 flex h-full justify-center items-end">
            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden absolute top-16 right-4 text-white focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-16 justify-end pb-3 px-24">
              {renderLinks()}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Locations"
                  className="bg-white text-black px-2 w-36 h-9 py-1 pr-8 rounded"
                />
                <Search className="absolute right-2 top-2 text-gray-500 h-4 w-4" />
              </div>
              <Link href="/cart" className="text-white">
                <ShoppingCart className="h-6 w-6 bg-black" />
              </Link>
            </div>

            {/* Search + Cart + Profile */}
            <div className="hidden md:flex items-center space-x-4">
              <Link href="/profile" className="flex text-white pb-5 ml-20">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-900 px-4 absolute top-28 left-0 right-0 z-50">
              <div className="flex flex-col space-y-3">
                {renderLinks(() => setIsMenuOpen(false))}

                {/* Search */}
                <div className="pt-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Locations"
                      className="bg-white text-black px-4 py-1 pr-8 rounded w-full"
                    />
                    <Search className="absolute right-2 top-2 text-gray-500 h-4 w-4" />
                  </div>
                </div>

                {/* Cart & Profile */}
                <div className="flex space-x-4 pt-2">
                  <Link href="/cart" className="text-white">
                    <ShoppingCart className="h-6 w-6" />
                  </Link>
                  <Link href="/profile" className="text-white">
                    <User className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
