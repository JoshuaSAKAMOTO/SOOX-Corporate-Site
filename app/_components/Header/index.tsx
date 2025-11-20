import Menu from '@/app/_components/Menu';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="absolute top-0 left-0 right-0 z-[1000] flex items-center justify-between"
      style={{ paddingLeft: '1.5rem', paddingRight: '3rem', paddingTop: '0', paddingBottom: '0' }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logo-white.png"
          alt="SOOX"
          className="h-40 w-auto md:h-48"
          width={348}
          height={133}
          priority
        />
      </Link>
      <div className="flex items-center">
        <Menu />
      </div>
    </header>
  );
}
