"use client";

import Image from "next/image";
import { useTranslation } from "@/src/i18n/LanguageProvider";

const IMAGES = [
  "/images/jade1.jpg",
  "/images/jade2.jpg",
  "/images/jade3.jpg",
  "/images/jade4.jpg",
  "/images/jade5.jpg",
  "/images/jade6.jpg",
  "/images/jade7.jpg",
  "/images/jade8.jpg",
];

export default function JadeContent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="page-section border-b border-stone-200 bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("jade.pageTitle")}
          </h1>
          <p className="mt-2 text-lg text-stone-600">{t("jade.pageSubtitle")}</p>
          <p className="mt-6 max-w-3xl text-stone-700 leading-relaxed">
            {t("jade.intro")}
          </p>
        </div>
      </section>

      <section className="page-section bg-stone-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {IMAGES.map((src, i) => (
              <figure
                key={src}
                className="overflow-hidden rounded-xl bg-stone-100 shadow-lg ring-1 ring-stone-200/80 transition duration-300 ease-out hover:scale-[1.02]"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={src}
                    alt={`${t("jade.altItem")} ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section border-t border-stone-200 bg-white">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-stone-600 leading-relaxed">{t("jade.note")}</p>
        </div>
      </section>
    </div>
  );
}
