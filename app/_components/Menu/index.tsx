'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Menu() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const open = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <div>
      <nav
        className={`${
          isOpen
            ? 'block fixed top-0 left-0 right-0 bottom-0 bg-[#333] text-white p-6 md:p-6'
            : 'hidden'
        } md:block md:relative md:bg-transparent md:p-0 md:pr-4`}
      >
        <ul className="flex flex-col gap-6 text-white text-xl md:flex-row md:gap-10 md:text-2xl md:pr-6">
          <li>
            <Link href="/about" onClick={close} className="hover:opacity-70 transition-opacity">
              About
            </Link>
          </li>
          <li>
            <Link href="/news" onClick={close} className="hover:opacity-70 transition-opacity">
              ニュース
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={close} className="hover:opacity-70 transition-opacity">
              お問い合わせ
            </Link>
          </li>
        </ul>
        <button
          className="absolute top-6 right-4 flex bg-transparent border-none cursor-pointer md:hidden"
          onClick={close}
        >
          <Image src="/close.svg" alt="閉じる" width={24} height={24} priority />
        </button>
      </nav>
      <button className="flex bg-transparent border-none cursor-pointer md:hidden" onClick={open}>
        <Image src="/menu.svg" alt="メニュー" width={24} height={24} priority />
      </button>
    </div>
  );
}
