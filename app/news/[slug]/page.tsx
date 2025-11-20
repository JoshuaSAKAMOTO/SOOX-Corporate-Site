import { Metadata } from 'next';
import { getNewsDetail } from '@/app/_libs/microcms';
import Article from '@/app/_components/Article';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk: string;
  }>;
};

export const dynamic = 'force-dynamic';

export async function generateMetadata(props: Props): Promise<Metadata> {
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    return {
      title: 'ニュース',
    };
  }

  try {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const data = await getNewsDetail(params.slug, {
      draftKey: searchParams.dk,
    });

    return {
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.title,
        description: data.description,
        images: [data?.thumbnail?.url || ''],
      },
      alternates: {
        canonical: `/news/${params.slug}`,
      },
    };
  } catch (error) {
    return {
      title: 'ニュース',
    };
  }
}

export default async function Page(props: Props) {
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    notFound();
  }

  try {
    const searchParams = await props.searchParams;
    const params = await props.params;
    const data = await getNewsDetail(params.slug, {
      draftKey: searchParams.dk,
    });
    return (
      <>
        <Article data={data} />
        <div className={styles.footer}>
          <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
        </div>
      </>
    );
  } catch (error) {
    notFound();
  }
}
