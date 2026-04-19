"use client";

import Image from "next/image";
import { useTranslation } from "@/src/i18n/LanguageProvider";

export default function EnglishSchoolContent() {
  const { t } = useTranslation();

  const courses = [
    { key: "course1" },
    { key: "course2" },
    { key: "course3" },
    { key: "course4" },
    { key: "course5" },
  ];

  const events = [
    { key: "event1" },
    { key: "event2" },
    { key: "event3" },
    { key: "event4" },
  ];

  const galleryImages = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="relative mx-auto max-w-7xl min-h-[min(88vh,920px)] w-full overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/images/school1.jpg"
            alt={t("englishSchool.heroAlt")}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-900/60" aria-hidden />
          <div className="relative z-10 flex min-h-[min(88vh,920px)] items-center justify-center px-6 py-24 text-center text-white">
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
                {t("englishSchool.schoolName")}
              </h1>
              <p className="mt-4 text-lg text-stone-100 sm:text-xl">
                {t("englishSchool.schoolSubtitle")}
              </p>
              <p className="mt-2 text-sm text-stone-200 sm:text-base">
                {t("englishSchool.schoolTagline")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="page-section border-b border-stone-200 bg-white"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <div className="lg:order-1">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              {t("englishSchool.aboutTitle")}
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-stone-700 sm:text-lg">
              <p>{t("englishSchool.aboutP1")}</p>
              <p>{t("englishSchool.aboutP2")}</p>
              <p>{t("englishSchool.aboutP3")}</p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-96 overflow-hidden rounded-lg shadow-lg lg:order-2">
            <Image
              src="/images/school2.jpg"
              alt={t("englishSchool.aboutTitle")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="page-section border-b border-stone-200">
        <div className="mx-auto max-w-3xl mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("englishSchool.coursesTitle")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("englishSchool.coursesIntro")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="group rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <h3 className="text-lg font-semibold text-stone-900">
                {t(`englishSchool.${course.key}Title`)}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {t(`englishSchool.${course.key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section
        id="community"
        className="page-section border-b border-stone-200 bg-stone-50"
      >
        <div className="mx-auto max-w-3xl mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("englishSchool.communityTitle")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("englishSchool.communityIntro")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {events.map((event, idx) => (
            <div key={idx} className="flex flex-col rounded-lg bg-white p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                    <span className="text-xl font-bold text-amber-900">
                      {idx + 1}
                    </span>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-stone-900">
                    {t(`englishSchool.${event.key}Title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">
                    {t(`englishSchool.${event.key}Desc`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="page-section border-b border-stone-200">
        <div className="mx-auto max-w-3xl mb-12 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("englishSchool.galleryTitle")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("englishSchool.galleryIntro")}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((imgNum) => (
            <div
              key={imgNum}
              className="group relative h-64 overflow-hidden rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            >
              <Image
                src={`/images/school${imgNum}.jpg`}
                alt={`${t("englishSchool.galleryAlt")} - ${imgNum}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="page-section bg-stone-50">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              {t("englishSchool.contactTitle")}
            </h2>
            <p className="mt-4 text-lg text-stone-600">
              {t("englishSchool.contactIntro")}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3 mb-12">
            {/* Address */}
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-lg font-bold text-amber-900">
                📍
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">
                {t("englishSchool.labelAddress")}
              </h3>
              <p className="mt-2 text-sm text-stone-600">
                {t("englishSchool.placeholderAddress")}
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-lg font-bold text-amber-900">
                📞
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">
                {t("englishSchool.labelPhone")}
              </h3>
              <p className="mt-2 text-sm text-stone-600">【待补充】</p>
            </div>

            {/* Email */}
            <div className="text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-lg font-bold text-amber-900">
                ✉️
              </div>
              <h3 className="mt-4 font-semibold text-stone-900">
                {t("englishSchool.labelEmail")}
              </h3>
              <p className="mt-2 text-sm text-stone-600">【待补充】</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="inline-flex items-center justify-center rounded-lg bg-amber-800 px-8 py-3 font-semibold text-white transition-colors duration-200 hover:bg-amber-900 focus:outline-none focus:ring-2 focus:ring-amber-700 focus:ring-offset-2">
              {t("englishSchool.ctaContact")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
