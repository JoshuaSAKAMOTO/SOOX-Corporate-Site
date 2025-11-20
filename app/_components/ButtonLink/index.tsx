import Link from 'next/link';

type Props = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
};

export default function ButtonLink({ href, children, isExternal = false }: Props) {
  const className =
    'block px-10 py-5 rounded w-[300px] md:w-[300px] sm:w-full bg-[#333] text-white hover:opacity-90 transition-opacity bg-[url("/arrow-right.svg")] bg-no-repeat bg-[right_20px_center]';

  if (isExternal) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
