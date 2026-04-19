"use client";

import { useTranslation } from "@/src/i18n/LanguageProvider";

export default function ContactContent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="page-section border-b border-stone-200 bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("contact.pageTitle")}
          </h1>
          <p className="mt-2 text-lg text-stone-600">{t("contact.pageSubtitle")}</p>
        </div>
      </section>

      <section className="page-section bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {t("contact.labelAddress")}
              </p>
              <p className="mt-2 text-lg text-stone-900">
                {t("contact.placeholderAddress")}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {t("contact.labelPhone")}
              </p>
              <p className="mt-2 text-lg">
                <a
                  href="tel:+8600000000000"
                  className="text-amber-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
                >
                  +86 000-0000-0000
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {t("contact.labelEmail")}
              </p>
              <p className="mt-2 text-lg">
                <a
                  href="mailto:contact@example.com"
                  className="text-amber-900 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-800"
                >
                  contact@example.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
              {t("contact.labelMap")}
            </p>
            <div className="mt-3 min-h-[280px] overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-lg">
              <div className="flex aspect-video w-full items-center justify-center p-8 text-center text-stone-500">
                <span className="text-sm">
                  {t("contact.mapPlaceholder")}
                  <br />
                  <span className="text-stone-400">{t("contact.mapHint")}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
