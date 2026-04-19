"use client";

import Image from "next/image";
import FloorCard from "@/src/components/FloorCard";
import { useTranslation } from "@/src/i18n/LanguageProvider";

const GALLERY_KEYS = [
  { src: "/images/building1.jpg", altKey: "building.altBuilding1" },
  { src: "/images/building2.jpg", altKey: "building.altBuilding2" },
  { src: "/images/floor1.jpg", altKey: "building.altFloor", floor: "1F" },
  { src: "/images/floor2.jpg", altKey: "building.altFloor", floor: "2F" },
  { src: "/images/floor3.jpg", altKey: "building.altFloor", floor: "3F" },
  { src: "/images/floor4.jpg", altKey: "building.altFloor", floor: "4F" },
];

export default function BuildingContent() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="page-section border-b border-stone-200 bg-white pt-12 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            {t("building.pageTitle")}
          </h1>
          <p className="mt-2 text-lg text-stone-600">{t("building.pageSubtitle")}</p>
        </div>
      </section>

      <section id="floors" className="page-section border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {t("building.floorsTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            {t("building.floorsIntro")}
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            <FloorCard
              floor="1F"
              title={t("building.f1Title")}
              desc={t("building.f1Desc")}
              imageSrc="/images/floor1.jpg"
            />
            <FloorCard
              floor="2F"
              title={t("building.f2Title")}
              desc={t("building.f2Desc")}
              imageSrc="/images/floor2.jpg"
            />
            <FloorCard
              floor="3F"
              title={t("building.f3Title")}
              desc={t("building.f3Desc")}
              imageSrc="/images/floor3.jpg"
            />
            <FloorCard
              floor="4F"
              title={t("building.f4Title")}
              desc={t("building.f4Desc")}
              imageSrc="/images/floor4.jpg"
            />
          </div>
        </div>
      </section>

      <section id="gallery" className="page-section border-b border-stone-200 bg-stone-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            {t("building.galleryTitle")}
          </h2>
          <p className="mt-2 text-stone-600">{t("building.galleryIntro")}</p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {GALLERY_KEYS.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-xl shadow-lg transition duration-300 ease-out hover:scale-[1.02]"
              >
                <div className="relative aspect-[4/3] w-full bg-stone-200">
                  <Image
                    src={item.src}
                    alt={
                      item.floor
                        ? `${item.floor} ${t(item.altKey) || "Building Floor"}`
                        : t(item.altKey) || "Building Image"
                    }
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

      <section id="property-text" className="page-section bg-white">
        <div className="mx-auto max-w-3xl space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            {t("building.textTitle")}
          </h2>
          <p>{t("building.textP1")}</p>
          <p className="text-stone-600">{t("building.textP2")}</p>
        </div>
      </section>
    </div>
  );
}
