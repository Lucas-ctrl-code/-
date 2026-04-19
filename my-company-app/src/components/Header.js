"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/src/i18n/LanguageProvider";

const ROUTES = [
  { href: "/", key: "nav.home" },
  { href: "/building", key: "nav.building" },
  { href: "/jade", key: "nav.jade" },
  { href: "/english-school", key: "nav.englishSchool" },
  { href: "/contact", key: "nav.contact" },
];

const LOCALES = [
  { id: "zh", labelKey: "lang.zh" },
  { id: "en", labelKey: "lang.en" },
  { id: "ja", labelKey: "lang.ja" },
];

export default function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useTranslation();

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-white/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/90">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3 sm:justify-start">
          <Link
            href="/"
            className="truncate text-base font-semibold tracking-tight text-stone-900 sm:text-lg md:text-xl"
          >
            {t("brand.name")}
          </Link>
          <div
            className="flex shrink-0 items-center rounded-lg border border-stone-200 bg-stone-50 p-0.5 sm:hidden"
            role="group"
            aria-label={t("nav.ariaLang")}
          >
            {LOCALES.map(({ id, labelKey }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLocale(id)}
                className={`rounded-md px-2 py-1 text-xs font-medium transition ${
                  locale === id
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-6">
          <nav
            className="flex flex-wrap items-center justify-end gap-x-3 gap-y-2 text-sm font-medium text-stone-600 sm:gap-x-5 sm:text-base"
            aria-label={t("nav.ariaMain")}
          >
            {ROUTES.map(({ href, key }) => {
              const active =
                href === "/"
                  ? pathname === "/"
                  : pathname === href || pathname.startsWith(`${href}/`);
              return (
                <Link
                  key={href}
                  href={href}
                  className={`transition-colors hover:text-amber-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800 ${
                    active
                      ? "text-amber-900 underline decoration-amber-800/60 underline-offset-4"
                      : ""
                  }`}
                >
                  {t(key)}
                </Link>
              );
            })}
          </nav>

          <div
            className="hidden items-center rounded-lg border border-stone-200 bg-stone-50 p-0.5 sm:flex"
            role="group"
            aria-label={t("nav.ariaLang")}
          >
            {LOCALES.map(({ id, labelKey }) => (
              <button
                key={id}
                type="button"
                onClick={() => setLocale(id)}
                className={`rounded-md px-2.5 py-1.5 text-xs font-medium transition sm:text-sm ${
                  locale === id
                    ? "bg-white text-stone-900 shadow-sm"
                    : "text-stone-500 hover:text-stone-800"
                }`}
              >
                {t(labelKey)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
