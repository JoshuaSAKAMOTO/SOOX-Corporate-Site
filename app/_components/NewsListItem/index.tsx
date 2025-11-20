import Link from 'next/link';
import Image from 'next/image';
import { Article } from '@/app/_libs/microcms';
import PublishedDate from '../Date';
import Category from '../Category';

type Props = {
  news: Article;
};

export default function NewsListItem({ news }: Props) {
  return (
    <li className="border-b border-[#f3f3f3] last:border-b-0">
      <Link href={`/news/${news.id}`} className="flex items-start gap-10 py-6 md:flex-row flex-col md:gap-10">
        {news.thumbnail ? (
          <Image
            src={news.thumbnail?.url}
            alt=""
            className="w-[200px] h-auto rounded md:block hidden"
            width={news.thumbnail?.width}
            height={news.thumbnail?.height}
          />
        ) : (
          <Image
            className="w-[200px] h-auto rounded md:block hidden"
            src="/no-image.png"
            alt="No Image"
            width={1200}
            height={630}
          />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-2 md:text-lg text-base">{news.title}</h3>
          <div className="flex items-center gap-4">
            <Category category={news.category} />
            <PublishedDate date={news.publishedAt || news.createdAt} />
          </div>
        </div>
      </Link>
    </li>
  );
}
