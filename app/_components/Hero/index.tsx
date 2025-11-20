import Image from 'next/image';

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="relative flex items-center justify-center bg-black/50 text-white overflow-hidden py-24 md:py-24 sm:py-24">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-5xl sm:text-4xl font-bold text-center mb-4">{title}</h1>
        <p className="flex items-center gap-5 mb-10 justify-center before:content-[''] before:block before:h-px before:w-5 before:bg-white after:content-[''] after:block after:h-px after:w-5 after:bg-white">
          {sub}
        </p>
      </div>
      <Image
        className="absolute top-0 right-0 h-[600px] w-full object-cover object-right -z-10"
        src="/img-mv.jpg"
        alt=""
        width={4000}
        height={1200}
        priority
      />
    </section>
  );
}
