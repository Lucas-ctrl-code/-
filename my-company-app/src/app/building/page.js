import Image from "next/image";
import FloorCard from "@/src/components/FloorCard";

export const metadata = {
  title: "不动产楼层介绍 | 後半彩り株式会社",
  description: "四层不动产：餐饮、美容美发、民宿与建筑实景。",
};

const GALLERY = [
  { src: "/images/building1.jpg", alt: "不动产 · 建筑实景一" },
  { src: "/images/building2.jpg", alt: "不动产 · 建筑实景二" },
  { src: "/images/floor1.jpg", alt: "1F 楼层实景" },
  { src: "/images/floor2.jpg", alt: "2F 楼层实景" },
  { src: "/images/floor3.jpg", alt: "3F 楼层实景" },
  { src: "/images/floor4.jpg", alt: "4F 楼层实景" },
];

export default function BuildingPage() {
  return (
    <div className="flex flex-col">
      {/* ========== 页头标题 ========== */}
      <section className="border-b border-stone-200 bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
            不动产楼层介绍
          </h1>
          <p className="mt-2 text-lg text-stone-600">
            四层大楼业态分布与实景照片
          </p>
        </div>
      </section>

      {/* ========== 楼层业态：1F–4F ========== */}
      <section
        id="floors"
        className="border-b border-stone-200 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            楼层业态
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            四层不动产大楼，分层经营多元业态。以下为各楼层简介与实景。
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            <FloorCard
              floor="1F"
              title="餐饮"
              desc="重餐饮业态，欢迎品牌与顾客垂询。"
              imageSrc="/images/floor1.jpg"
            />
            <FloorCard
              floor="2F"
              title="理发店（美容美发）"
              desc="美容美发服务，舒适空间与专业团队。"
              imageSrc="/images/floor2.jpg"
            />
            <FloorCard
              floor="3F"
              title="民宿"
              desc="精品民宿体验，旅居之选。"
              imageSrc="/images/floor3.jpg"
            />
            <FloorCard
              floor="4F"
              title="民宿"
              desc="高层景观民宿，静谧休憩。"
              imageSrc="/images/floor4.jpg"
            />
          </div>
        </div>
      </section>

      {/* ========== 不动产实景：6 张照片 ========== */}
      <section
        id="gallery"
        className="border-b border-stone-200 bg-stone-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl">
            实景相册
          </h2>
          <p className="mt-2 text-stone-600">
            建筑外观与各楼层实景（共 6 张）
          </p>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {GALLERY.map((item) => (
              <figure
                key={item.src}
                className="overflow-hidden rounded-xl shadow-lg transition duration-300 ease-out hover:scale-[1.02]"
              >
                <div className="relative aspect-[4/3] w-full bg-stone-200">
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

      {/* ========== 文字介绍 ========== */}
      <section id="property-text" className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl space-y-4 text-stone-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-stone-900 sm:text-3xl">
            不动产说明
          </h2>
          <p>
            本项目为四层独立不动产物业，集重餐饮、美容美发、民宿及公司玉石销售业务于一体，
            区位与建筑条件可根据贵司实际资料在此展开：建筑面积、电梯与消防、停车位、
            招商业态与合作方式等。
          </p>
          <p className="text-stone-600">
            【此处可继续补充】例如：交通位置、周边配套、楼层荷载与排油烟条件、
            民宿客房数量与房型、合作招商联系方式等。
          </p>
        </div>
      </section>
    </div>
  );
}
