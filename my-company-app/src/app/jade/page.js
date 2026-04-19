import Image from "next/image";

export const metadata = {
  title: "玉石展示 | 後半彩り株式会社",
  description: "玉石精选与展品相册。",
};

const IMAGES = [
  { src: "/images/jade1.jpg", alt: "玉石展品 1" },
  { src: "/images/jade2.jpg", alt: "玉石展品 2" },
  { src: "/images/jade3.jpg", alt: "玉石展品 3" },
  { src: "/images/jade4.jpg", alt: "玉石展品 4" },
  { src: "/images/jade5.jpg", alt: "玉石展品 5" },
  { src: "/images/jade6.jpg", alt: "玉石展品 6" },
  { src: "/images/jade7.jpg", alt: "玉石展品 7" },
  { src: "/images/jade8.jpg", alt: "玉石展品 8" },
];

export default function JadePage() {
  return (
    <div className="flex flex-col">
      {/* ========== 页头 ========== */}
      <section className="border-b border-stone-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            玉石展示
          </h1>
          <p className="mt-2 text-lg text-stone-600">Jade Collection</p>
          <p className="mt-6 max-w-3xl text-stone-700 leading-relaxed">
            公司同步经营玉石销售业务。以下为实拍展品图，您可在此补充材质、工艺、鉴定与购买渠道等说明。
          </p>
        </div>
      </section>

      {/* ========== 画廊：小屏 2 列，大屏 3 列 ========== */}
      <section className="bg-stone-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {IMAGES.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-xl bg-stone-100 shadow-lg ring-1 ring-stone-200/80 transition duration-300 ease-out hover:scale-[1.02]"
              >
                <div className="relative aspect-square w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
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

      {/* ========== 补充说明 ========== */}
      <section className="border-t border-stone-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm text-stone-600 leading-relaxed">
            【玉石业务说明】可在此撰写品牌故事、选石标准、门店/线上渠道、
            售后服务与鉴定合作等信息。
          </p>
        </div>
      </section>
    </div>
  );
}
