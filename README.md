# SOOX コーポレートサイト

![](public/img-cover.png)

microCMS ベースのSOOXコーポレートサイトです。
お問い合わせフォームには [Resend](https://resend.com/) を利用しています。

## 動作環境

Node.js 22 以上

## 環境変数の設定

ルート直下に`.env`ファイルを作成し、下記の情報を入力してください。
`.env.example` をコピーして使用することもできます。

```bash
cp .env.example .env
```

### 必須の環境変数

```
MICROCMS_API_KEY=xxxxxxxxxx
MICROCMS_SERVICE_DOMAIN=xxxxxxxxxx
BASE_URL=xxxxxxxxxx
RESEND_API_KEY=xxxxxxxxxx
FROM_EMAIL=noreply@your-domain.com
TO_EMAIL=contact@your-domain.com
```

`MICROCMS_API_KEY`
microCMS 管理画面の「サービス設定 > API キー」から確認することができます。

`MICROCMS_SERVICE_DOMAIN`
microCMS 管理画面の URL（https://xxxxxxxx.microcms.io）の xxxxxxxx の部分です。

`BASE_URL`
デプロイ先の URL です。プロトコルから記載してください。

例）
開発環境 → http://localhost:3000
本番環境 → https://your-domain.vercel.app/ など

`RESEND_API_KEY`
[Resend](https://resend.com/) のダッシュボードで取得できる API キーです。

`FROM_EMAIL`
メール送信元アドレス（Resend で認証済みのドメイン）

`TO_EMAIL`
お問い合わせ通知を受け取るメールアドレス

## 開発の仕方

1. パッケージのインストール

```bash
npm install
```

2. 開発環境の起動

```bash
npm run dev
```

3. 開発環境へのアクセス  
   [http://localhost:3000](http://localhost:3000)にアクセス

## Vercel へのデプロイ

1. [Vercel](https://vercel.com/) にログイン
2. GitHub リポジトリをインポート
3. 環境変数を設定（上記の環境変数をすべて設定）
4. デプロイ

## 技術スタック

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- microCMS (Headless CMS)
- Resend (Email API)
- TypeScript
