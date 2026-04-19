import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "不动产相册 | M's 玉造集团",
  description: "建筑与不动产实景相册。",
};

const IMAGES = [
  { src: "/images/building1.jpg", alt: "不动产 · 建筑实景一" },
  { src: "/images/building2.jpg", alt: "不动产 · 建筑实景二" },
  { src: "/images/floor1.jpg", alt: "1F 楼层实景" },
  { src: "/images/floor2.jpg", alt: "2F 楼层实景" },
  { src: "/images/floor3.jpg", alt: "3F 楼层实景" },
  { src: "/images/floor4.jpg", alt: "4F 楼层实景" },
];

export default function BuildingGalleryPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
          <nav className="text-sm text-stone-500">
            <Link href="/" className="underline-offset-4 hover:text-stone-800 hover:underline">
              ← 返回首页
            </Link>
            <span className="mx-2 text-stone-300">/</span>
            <Link
              href="/jade"
              className="underline-offset-4 hover:text-stone-800 hover:underline"
            >
              玉石展示
            </Link>
          </nav>
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
              不动产相册
            </h1>
            <p className="mt-2 text-lg text-stone-600">Building Gallery</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {IMAGES.map((item) => (
            <figure
              key={item.src}
              className="group overflow-hidden rounded-xl shadow-lg transition duration-300 ease-out hover:scale-105"
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
      </main>
    </div>
  );
}
