import Hero from '@/app/_components/Hero';

export default function AboutPage() {
  return (
    <>
      <Hero title="About" sub="私たちについて" />

      <div className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          {/* Statement Section */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Statement</h2>
            <div className="flex items-center gap-5 mb-8">
              <div className="h-px w-10 bg-[#333]" />
              <p className="text-lg">私たちの理念</p>
            </div>
            <p className="text-lg leading-relaxed mb-6">
              ここにSOOXの理念やビジョンを記載します。
            </p>
            <p className="text-lg leading-relaxed">
              私たちは技術と創造性を融合させ、新しい価値を生み出すことを目指しています。
            </p>
          </section>

          {/* Company Info Section */}
          <section>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Company</h2>
            <div className="flex items-center gap-5 mb-8">
              <div className="h-px w-10 bg-[#333]" />
              <p className="text-lg">会社情報</p>
            </div>

            <dl className="space-y-6">
              <div className="flex flex-col md:flex-row border-b border-[#ddd] pb-6">
                <dt className="w-full md:w-32 font-bold mb-2 md:mb-0">会社名</dt>
                <dd className="flex-1">株式会社SOOX</dd>
              </div>

              <div className="flex flex-col md:flex-row border-b border-[#ddd] pb-6">
                <dt className="w-full md:w-32 font-bold mb-2 md:mb-0">設立</dt>
                <dd className="flex-1">2025年</dd>
              </div>

              <div className="flex flex-col md:flex-row border-b border-[#ddd] pb-6">
                <dt className="w-full md:w-32 font-bold mb-2 md:mb-0">事業内容</dt>
                <dd className="flex-1">
                  写真撮影<br />
                  ウェブ開発<br />
                  デジタルコンテンツ制作
                </dd>
              </div>

              <div className="flex flex-col md:flex-row border-b border-[#ddd] pb-6">
                <dt className="w-full md:w-32 font-bold mb-2 md:mb-0">所在地</dt>
                <dd className="flex-1">
                  〒000-0000<br />
                  東京都
                </dd>
              </div>
            </dl>
          </section>
        </div>
      </div>
    </>
  );
}
