import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  activeSection: string;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { label: 'Features', href: '#features', id: 'features' },
  { label: 'Development', href: '#development', id: 'development' },
];

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="fixed top-3 inset-x-0 z-40 px-4 sm:px-6 pointer-events-none">
      <header className="mx-auto max-w-5xl liquid-glass-nav rounded-2xl px-4 sm:px-6 h-14 flex items-center justify-between gap-8 pointer-events-auto transition-colors duration-300">
        {/* Zone 1: Brand Title (Single-line official logo & wordmark) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded-lg whitespace-nowrap shrink-0"
          aria-label="Wardrobe.AI Home"
        >
          <BrandLogo size="sm" />
        </a>

        {/* Zone 2: 5 Concise Single-Line Text Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3] rounded ${
                  isActive
                    ? 'text-[#0071E3] dark:text-[#2997FF]'
                    : 'text-[#1D1D1F]/75 dark:text-[#FFFFFF]/75 hover:text-[#1D1D1F] dark:hover:text-[#FFFFFF]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 inset-x-0 h-[1.5px] bg-[#0071E3] dark:bg-[#2997FF] rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
            }
            className="inline-flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-medium text-[#1D1D1F] dark:text-[#FFFFFF] bg-[#F5F5F7]/80 dark:bg-white/10 hover:bg-[#0071E3]/10 dark:hover:bg-[#2997FF]/15 border border-[#1D1D1F]/8 dark:border-white/10 transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-3.5 h-3.5 text-[#2997FF]" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-[#0071E3]" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl text-[#1D1D1F] dark:text-[#FFFFFF] hover:bg-[#1D1D1F]/5 dark:hover:bg-white/10 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0071E3]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            aria-label="Mobile Navigation"
            className="md:hidden mx-auto max-w-5xl mt-2 liquid-glass-nav rounded-2xl p-3 pointer-events-auto"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`flex items-center justify-between px-4 py-3 min-h-[44px] rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#0071E3]/10 dark:bg-[#2997FF]/15 text-[#0071E3] dark:text-[#2997FF]'
                          : 'text-[#1D1D1F] dark:text-[#FFFFFF] hover:bg-[#1D1D1F]/5 dark:hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && (
                        <span className="text-xs font-mono text-[#0071E3] dark:text-[#2997FF]">
                          Active
                        </span>
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};
