import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

function validateEmail(email: string) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export async function POST(request: NextRequest) {
  const json = await request.json();
  const { lastname, firstname, company, email, message } = json;

  // Validation
  if (!lastname) {
    return NextResponse.json(
      { status: 'error', message: '姓を入力してください' },
      { status: 400 },
    );
  }
  if (!firstname) {
    return NextResponse.json(
      { status: 'error', message: '名を入力してください' },
      { status: 400 },
    );
  }
  if (!company) {
    return NextResponse.json(
      { status: 'error', message: '会社名を入力してください' },
      { status: 400 },
    );
  }
  if (!email) {
    return NextResponse.json(
      { status: 'error', message: 'メールアドレスを入力してください' },
      { status: 400 },
    );
  }
  if (!validateEmail(email)) {
    return NextResponse.json(
      { status: 'error', message: 'メールアドレスの形式が誤っています' },
      { status: 400 },
    );
  }
  if (!message) {
    return NextResponse.json(
      { status: 'error', message: 'メッセージを入力してください' },
      { status: 400 },
    );
  }

  try {
    // Send notification email to company
    const companyEmail = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.TO_EMAIL || 'delivered@resend.dev',
      subject: `【お問い合わせ】${company} ${lastname} ${firstname}様より`,
      html: `
        <h2>新しいお問い合わせがありました</h2>
        <p><strong>会社名:</strong> ${company}</p>
        <p><strong>お名前:</strong> ${lastname} ${firstname}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: email,
      subject: 'お問い合わせありがとうございます - SOOX',
      html: `
        <h2>お問い合わせを受け付けました</h2>
        <p>${lastname} ${firstname}様</p>
        <p>この度は、SOOXへお問い合わせいただき、誠にありがとうございます。</p>
        <p>以下の内容でお問い合わせを受け付けました。</p>
        <hr>
        <p><strong>会社名:</strong> ${company}</p>
        <p><strong>お名前:</strong> ${lastname} ${firstname}</p>
        <p><strong>メールアドレス:</strong> ${email}</p>
        <p><strong>メッセージ:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p>内容を確認の上、担当者より通常3営業日以内にご連絡いたします。</p>
        <p>今しばらくお待ちください。</p>
        <br>
        <p>SOOX</p>
      `,
    });

    if (companyEmail.error || customerEmail.error) {
      throw new Error('メール送信に失敗しました');
    }

    return NextResponse.json({ status: 'success' });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { status: 'error', message: 'メール送信に失敗しました。しばらく経ってから再度お試しください。' },
      { status: 500 },
    );
  }
}
