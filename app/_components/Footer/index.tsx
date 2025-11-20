import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 px-6 py-4 text-center text-[#999] text-sm">
      <nav className="mb-4">
        <ul className="flex flex-wrap justify-center gap-x-10 gap-y-2 text-base whitespace-nowrap md:gap-10">
          <li className="w-1/2 md:w-auto">
            <Link href="/about" className="hover:opacity-70 transition-opacity">
              About
            </Link>
          </li>
          <li className="w-1/2 md:w-auto">
            <Link href="/news" className="hover:opacity-70 transition-opacity">
              ニュース
            </Link>
          </li>
          <li className="w-1/2 md:w-auto">
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
      <p>© SOOX. All Rights Reserved 2025</p>
    </footer>
  );
}
