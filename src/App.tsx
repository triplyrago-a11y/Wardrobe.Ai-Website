/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { FeaturesSection } from './components/FeaturesSection';
import { AppPreviewSection } from './components/AppPreviewSection';
import { DevelopmentStatusSection } from './components/DevelopmentStatusSection';

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem('wardrobe-ai-theme');
      if (saved === 'dark' || saved === 'light') return saved;
    }
    return 'light';
  });

  const [showSplash, setShowSplash] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;
      if (prefersReduced) return false;
      const seen = window.sessionStorage.getItem('wardrobe-ai-splash-seen');
      return !seen;
    }
    return false;
  });

  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    window.localStorage.setItem('wardrobe-ai-theme', theme);
  }, [theme]);

  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'how-it-works',
      'features',
      'development',
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const handleCompleteSplash = useCallback(() => {
    setShowSplash(false);
    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('wardrobe-ai-splash-seen', 'true');
    }
  }, []);

  const handleReplaySplash = useCallback(() => {
    setShowSplash(true);
  }, []);

  const handleToggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#000000] text-[#1D1D1F] dark:text-[#FFFFFF] transition-colors duration-300 overflow-x-hidden">
      {/* Official Wardrobe.AI Splash Screen */}
      <SplashScreen
        isVisible={showSplash}
        onComplete={handleCompleteSplash}
      />

      {/* Floating Liquid-Glass Top Navigation */}
      <Navbar
        theme={theme}
        onToggleTheme={handleToggleTheme}
        activeSection={activeSection}
      />

      {/* Main Content Flow */}
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <FeaturesSection />
        <AppPreviewSection />
        <DevelopmentStatusSection onReplaySplash={handleReplaySplash} />
      </main>
    </div>
  );
}
