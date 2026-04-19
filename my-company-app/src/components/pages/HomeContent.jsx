"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/src/i18n/LanguageProvider";

export default function HomeContent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="relative w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="relative mx-auto max-w-7xl min-h-[min(88vh,920px)] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/images/building1.jpg"
            alt={t("home.heroAlt")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-900/55" aria-hidden />
          <div className="relative z-10 flex min-h-[min(88vh,920px)] items-center justify-center px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {t("brand.name")}
              </h1>
              <p className="mt-4 text-lg text-stone-100 sm:text-xl">
                {t("brand.shortTagline")}
              </p>
              <p className="mt-2 text-sm text-stone-200 sm:text-base">
                {t("brand.lineJa")}
              </p>
              <p className="mt-1 text-sm text-stone-300 sm:text-base">
                {t("brand.lineEn")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="page-section border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("home.aboutTitle")}
          </h2>
          <div
            className="mt-6 max-w-none text-left text-base leading-relaxed text-stone-700 sm:text-lg [&_strong]:font-semibold [&_strong]:text-stone-900"
            dangerouslySetInnerHTML={{ __html: t("home.aboutBody") }}
          />
        </div>
      </section>

      <section id="contact-preview" className="page-section bg-stone-100">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("home.contactTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            {t("home.contactHint")}
          </p>
          <div className="mx-auto mt-10 max-w-xl space-y-6 rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {t("home.labelAddress")}
              </p>
              <p className="mt-1 text-stone-800">{t("home.placeholderAddress")}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {t("home.labelPhone")}
              </p>
              <p className="mt-1">
                <a
                  href="tel:+8600000000000"
                  className="text-lg text-amber-900 underline-offset-4 hover:underline"
                >
                  +81 03-6261-3003
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-stone-500">
                {t("home.labelEmail")}
              </p>
              <p className="mt-1">
                <a
                  href="mailto:contact@example.com"
                  className="text-lg text-amber-900 underline-offset-4 hover:underline"
                >
                  commonroom202@gmail.com
                </a>
              </p>
            </div>
            <div className="border-t border-stone-100 pt-6 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-stone-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                {t("home.ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
