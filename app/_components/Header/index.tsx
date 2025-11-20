import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] flex items-center justify-between px-6 pt-4 pb-2 md:px-6">
      <Link href="/" className="flex">
        <Image
          src="/logo-white.png"
          alt="SOOX"
          className="h-8 w-auto"
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
