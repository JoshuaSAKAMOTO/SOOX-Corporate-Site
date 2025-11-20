import type { Category } from '@/app/_libs/microcms';

type Props = {
  category?: Category;
};

export default function Category({ category }: Props) {
  if (!category) {
    return null;
  }
  return (
    <span className="bg-[#f3f3f3] px-3 py-1 rounded whitespace-nowrap text-base">
      {category.name}
    </span>
  );
}
