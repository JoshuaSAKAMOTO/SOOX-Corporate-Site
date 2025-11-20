import { Metadata } from 'next';
import { getMeta } from '@/app/_libs/microcms';
import Footer from '@/app/_components/Footer';
import Header from '@/app/_components/Header';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  // Default metadata if microCMS is not configured
  const defaultMetadata: Metadata = {
    metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
    title: 'SOOX',
    description: '写真と技術で新しい価値を生み出すSOOXのコーポレートサイト',
  };

  // Return default metadata if microCMS environment variables are not set
  if (!process.env.MICROCMS_SERVICE_DOMAIN || !process.env.MICROCMS_API_KEY) {
    return defaultMetadata;
  }

  try {
    const data = await getMeta();
    if (!data) {
      return defaultMetadata;
    }

    return {
      metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
      title: data.title,
      description: data.description,
      openGraph: {
        title: data.ogTitle,
        description: data.ogDescription,
        images: [data.ogImage?.url || ''],
      },
      alternates: {
        canonical: data.canonical,
      },
    };
  } catch (error) {
    console.error('Failed to fetch metadata from microCMS:', error);
    return defaultMetadata;
  }
}

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="ja">
      <body className="bg-[#f9f9f9]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
