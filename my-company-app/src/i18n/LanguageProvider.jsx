"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import raw from "./translations.json";

const STORAGE_KEY = "site-locale";

/** @typedef {'zh' | 'en' | 'ja'} Locale */

const translations = raw;

const LANG_HTML = { zh: "zh-CN", en: "en", ja: "ja" };

function getByPath(obj, path) {
  const parts = path.split(".");
  let cur = obj;
  for (const p of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[p];
  }
  return cur;
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState("zh");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "zh" || saved === "en" || saved === "ja") {
        setLocaleState(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const setLocale = useCallback((next) => {
    setLocaleState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const dict = translations[locale] ?? translations.zh;

  const t = useCallback(
    (path) => {
      const v = getByPath(dict, path);
      if (v === undefined) return path;
      if (typeof v === "string") return v;
      return path;
    },
    [dict],
  );

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = LANG_HTML[locale] ?? "zh-CN";
    const title = getByPath(dict, "meta.siteTitle");
    if (typeof title === "string") document.title = title;
  }, [locale, dict]);

  const value = useMemo(
    () => ({ locale, setLocale, t, dict }),
    [locale, setLocale, t, dict],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useTranslation must be used within LanguageProvider");
  }
  return ctx;
}
