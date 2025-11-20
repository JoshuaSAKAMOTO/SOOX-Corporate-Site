'use client';
import React, { useRef, useState } from 'react';

export default function ContactForm() {
  const lastnameRef = useRef<HTMLInputElement>(null);
  const firstnameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/submit-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastname: lastnameRef.current?.value,
        firstname: firstnameRef.current?.value,
        company: companyRef.current?.value,
        email: emailRef.current?.value,
        message: messageRef.current?.value,
      }),
    }).then((res) => res.json());
    if (res.status === 'error') {
      setError(res.message);
    } else {
      setSuccess(true);
    }
  };
  if (success) {
    return (
      <p className="text-center text-lg leading-relaxed">
        お問い合わせいただき、ありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className="max-w-3xl mx-auto" onSubmit={onSubmit}>
      <div className="flex gap-6 mb-6 md:flex-row flex-col">
        <div className="flex-1">
          <label className="block mb-2 font-bold" htmlFor="lastname">
            姓
          </label>
          <input
            className="w-full px-4 py-3 border border-[#ddd] rounded focus:outline-none focus:border-[#333]"
            type="text"
            id="lastname"
            ref={lastnameRef}
          />
        </div>
        <div className="flex-1">
          <label className="block mb-2 font-bold" htmlFor="firstname">
            名
          </label>
          <input
            className="w-full px-4 py-3 border border-[#ddd] rounded focus:outline-none focus:border-[#333]"
            type="text"
            id="firstname"
            ref={firstnameRef}
          />
        </div>
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold" htmlFor="company">
          会社名
        </label>
        <input
          className="w-full px-4 py-3 border border-[#ddd] rounded focus:outline-none focus:border-[#333]"
          type="text"
          id="company"
          ref={companyRef}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold" htmlFor="email">
          メールアドレス
        </label>
        <input
          className="w-full px-4 py-3 border border-[#ddd] rounded focus:outline-none focus:border-[#333]"
          type="text"
          id="email"
          ref={emailRef}
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2 font-bold" htmlFor="message">
          メッセージ
        </label>
        <textarea
          className="w-full px-4 py-3 border border-[#ddd] rounded min-h-[200px] focus:outline-none focus:border-[#333]"
          id="message"
          ref={messageRef}
        />
      </div>
      <div className="text-center">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="submit"
          value="送信する"
          className="px-10 py-4 bg-[#333] text-white rounded cursor-pointer hover:opacity-90 transition-opacity"
        />
      </div>
    </form>
  );
}
