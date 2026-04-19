"use client";

import Link from "next/link";
import { useTranslation } from "@/src/i18n/LanguageProvider";

const ROUTES = [
  { href: "/", key: "nav.home" },
  { href: "/building", key: "nav.building" },
  { href: "/jade", key: "nav.jade" },
  { href: "/contact", key: "nav.contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-stone-100">{t("brand.name")}</p>
            <p className="mt-2 max-w-md text-sm leading-relaxed">{t("footer.tagline")}</p>
          </div>
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm"
            aria-label={t("footer.navAria")}
          >
            {ROUTES.map(({ href, key }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-500"
              >
                {t(key)}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-stone-700 pt-8 text-center text-sm text-stone-500">
          © {year} {t("brand.name")} · {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
