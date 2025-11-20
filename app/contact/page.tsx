import Hero from '@/app/_components/Hero';
import ContactForm from '@/app/_components/ContactForm';

export default function Page() {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />

      <div className="bg-white py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-center mb-12 text-lg leading-relaxed md:text-center sm:text-left">
            ご質問、ご相談は下記フォームよりお問い合わせください。
            <br />
            内容確認後、担当者より通常3営業日以内にご連絡いたします。
          </p>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
