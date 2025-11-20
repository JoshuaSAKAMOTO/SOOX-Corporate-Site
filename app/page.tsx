import Image from 'next/image';
import ButtonLink from '@/app/_components/ButtonLink';

export default async function Page() {
  return (
    <>
      {/* Hero Section - Large Photo Display */}
      <section className="relative flex items-center justify-center h-screen min-h-[600px] overflow-hidden">
        <Image
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/IMG_6701.JPG"
          alt=""
          width={3600}
          height={1200}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            写真で世界を伝える
          </h1>
          <p className="text-lg md:text-xl">
            技術と創造性で、新しい価値を生み出す
          </p>
        </div>
      </section>

      {/* Statement Section */}
      <section className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Statement</h2>
          <div className="flex items-center gap-5 mb-10">
            <div className="h-px w-10 bg-[#333]" />
            <p className="text-lg">私たちについて</p>
          </div>
          <p className="text-lg leading-relaxed mb-8">
            ここにステートメント（会社の理念・価値観）が入ります。
            <br />
            編集可能なテキストエリアとして、microCMSから管理することもできます。
          </p>
          <div className="mt-12">
            <ButtonLink href="/about">もっと詳しく</ButtonLink>
          </div>
        </div>
      </section>

      {/* News Section - Temporarily disabled until microCMS is configured */}
      {/*
      <section className="py-20 md:py-32 bg-[#f9f9f9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded p-6 md:p-10 relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">News</h2>
            <NewsList articles={data.contents} />
            <div className="mt-8 md:absolute md:-right-10 md:-bottom-10">
              <ButtonLink href="/news">もっとみる</ButtonLink>
            </div>
          </div>
        </div>
      </section>
      */}
    </>
  );
}
