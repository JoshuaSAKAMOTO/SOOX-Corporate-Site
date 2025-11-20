import Hero from '@/app/_components/Hero';

export default function NotFound() {
  return (
    <>
      <Hero title="404" sub="Not Found" />
      <div className="relative bg-white w-full max-w-[840px] mx-auto -mt-10 px-20 py-40 rounded md:w-full md:px-20 sm:w-[calc(100%-2rem)] sm:px-4 sm:py-10">
        <dl>
          <dt className="text-2xl text-center font-bold mb-6 sm:text-left">
            ページが見つかりませんでした
          </dt>
          <dd className="text-base text-center sm:text-left">
            あなたがアクセスしようとしたページは存在しません。
            <br />
            URLを再度ご確認ください。
          </dd>
        </dl>
      </div>
    </>
  );
}
