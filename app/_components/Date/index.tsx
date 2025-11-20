import Image from 'next/image';
import { formatDate } from '@/app/_libs/utils';

type Props = {
  date: string;
};

export default function PublishedDate({ date }: Props) {
  return (
    <span className="flex items-center gap-2 my-3 text-base">
      <Image src="/clock.svg" alt="" width={16} height={16} priority />
      {formatDate(date)}
    </span>
  );
}
