import { getNewsList } from '@/app/_libs/microcms';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination';
import ArticleList from '@/app/_components/NewsList';
import { notFound } from 'next/navigation';
import Hero from '@/app/_components/Hero';

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export const dynamic = 'force-dynamic';

export default async function Page(props: Props) {
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
    const params = await props.params;
    const current = parseInt(params.current as string, 10);
    const data = await getNewsList({
      limit: NEWS_LIST_LIMIT,
      offset: NEWS_LIST_LIMIT * (current - 1),
    });
    return (
      <>
        <ArticleList articles={data.contents} />
        <Pagination totalCount={data.totalCount} current={current} basePath="/news" />
      </>
    );
  } catch (error) {
    notFound();
  }
}
