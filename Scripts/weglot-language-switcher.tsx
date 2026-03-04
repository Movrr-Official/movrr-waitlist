"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

type SupportedLanguage = "en" | "nl";

interface WeglotInstance {
  initialize: (options: { api_key: string; hide_switcher?: boolean }) => void;
  switchTo: (language: SupportedLanguage) => void;
  getCurrentLang: () => string;
  on: (
    eventName: "initialized" | "languageChanged",
    callback: (newLanguage: string) => void
  ) => void;
}

declare global {
  interface Window {
    Weglot?: WeglotInstance;
    __MOVRR_WEGLOT_INITIALIZED__?: boolean;
  }
}

const WEGLOT_LANGUAGE_COOKIE = "wglang";
const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["en", "nl"];

function normalizeLanguage(language?: string | null): SupportedLanguage {
  if (!language) {
    return "en";
  }

  return language.toLowerCase().startsWith("nl") ? "nl" : "en";
}

function readLanguageCookie(): SupportedLanguage | null {
  if (typeof document === "undefined") {
    return null;
  }

  const match = document.cookie.match(new RegExp(`(?:^|; )${WEGLOT_LANGUAGE_COOKIE}=([^;]*)`));
  return match ? normalizeLanguage(decodeURIComponent(match[1])) : null;
}

function persistLanguage(language: SupportedLanguage) {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = `${WEGLOT_LANGUAGE_COOKIE}=${language}; path=/; max-age=31536000; samesite=lax`;
}

export function WeglotLanguageSwitcher() {
  const [activeLanguage, setActiveLanguage] = useState<SupportedLanguage>("en");
  const weglotApiKey = process.env.NEXT_PUBLIC_WEGLOT_API_KEY;
  const pathname = usePathname();

  useEffect(() => {
    setActiveLanguage(readLanguageCookie() ?? "en");
  }, []);

  useEffect(() => {
    if (!weglotApiKey || typeof window === "undefined") {
      return;
    }

    const initializeWeglot = () => {
      if (!window.Weglot || window.__MOVRR_WEGLOT_INITIALIZED__) {
        return false;
      }

      window.Weglot.initialize({
        api_key: weglotApiKey,
        hide_switcher: true,
      });
      window.__MOVRR_WEGLOT_INITIALIZED__ = true;
      return true;
    };

    if (!initializeWeglot()) {
      const interval = window.setInterval(() => {
        if (initializeWeglot()) {
          window.clearInterval(interval);
        }
      }, 100);

      return () => window.clearInterval(interval);
    }
  }, [weglotApiKey]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const syncLanguage = () => {
      const currentLanguage = normalizeLanguage(window.Weglot?.getCurrentLang());
      setActiveLanguage(currentLanguage);
      persistLanguage(currentLanguage);
    };

    const bindEvents = () => {
      if (!window.Weglot) {
        return false;
      }

      window.Weglot.on("initialized", syncLanguage);
      window.Weglot.on("languageChanged", (nextLanguage) => {
        const normalized = normalizeLanguage(nextLanguage);
        setActiveLanguage(normalized);
        persistLanguage(normalized);
      });

      syncLanguage();
      return true;
    };

    if (!bindEvents()) {
      const interval = window.setInterval(() => {
        if (bindEvents()) {
          window.clearInterval(interval);
        }
      }, 100);

      return () => window.clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const applyLanguage = () => {
      const weglot = window.Weglot;
      if (!weglot) {
        return false;
      }

      const current = normalizeLanguage(weglot.getCurrentLang());
      if (current !== activeLanguage) {
        weglot.switchTo(activeLanguage);
      }

      return true;
    };

    if (!applyLanguage()) {
      const interval = window.setInterval(() => {
        if (applyLanguage()) {
          window.clearInterval(interval);
        }
      }, 100);

      return () => window.clearInterval(interval);
    }
  }, [activeLanguage, pathname]);

  const switchLanguage = (language: SupportedLanguage) => {
    if (!SUPPORTED_LANGUAGES.includes(language)) {
      return;
    }

    setActiveLanguage(language);
    persistLanguage(language);
    window.Weglot?.switchTo(language);
  };

  if (!weglotApiKey) {
    return null;
  }

  return (
    <>
      <Script
        id="weglot-sdk"
        src="https://cdn.weglot.com/weglot.min.js"
        strategy="afterInteractive"
      />

      <div className="fixed top-4 right-4 z-50">
        <div className="inline-flex items-center rounded-full border border-white/20 bg-black/55 p-1 shadow-2xl backdrop-blur-md">
          {SUPPORTED_LANGUAGES.map((language) => {
            const isActive = activeLanguage === language;

            return (
              <button
                key={language}
                type="button"
                aria-label={`Switch language to ${language === "en" ? "English" : "Dutch"}`}
                aria-pressed={isActive}
                className={`min-w-11 rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-white/80 hover:text-white"
                }`}
                onClick={() => switchLanguage(language)}
              >
                {language.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
