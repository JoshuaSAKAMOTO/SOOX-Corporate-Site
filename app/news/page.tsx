import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import Pagination from '@/app/_components/Pagination';
import Hero from '@/app/_components/Hero';

export default async function Page() {
  // Check if microCMS is configured
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    return (
      <>
        <Hero title="News" sub="ニュース" />
        <div className="bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg">ニュース機能は準備中です。</p>
          </div>
        </div>
      </>
    );
  }

  try {
    const data = await getNewsList({
      limit: NEWS_LIST_LIMIT,
    });
    return (
      <>
        <NewsList articles={data.contents} />
        <Pagination totalCount={data.totalCount} basePath="/news" />
      </>
    );
  } catch (error) {
    console.error('Failed to fetch news:', error);
    return (
      <>
        <Hero title="News" sub="ニュース" />
        <div className="bg-white py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg">ニュースの読み込みに失敗しました。</p>
          </div>
        </div>
      </>
    );
  }
}
