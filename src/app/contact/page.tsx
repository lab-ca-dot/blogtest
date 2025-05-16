'use client'
import Head from 'next/head'
import Container from "@/app/_components/container";

export default function ContactForm() {
  return (
    <>
    <Head>
        <script src="https://www.google.com/recaptcha/api.js" async defer/>
      </Head>
    <Container>
      <form
        action="https://ssgform.com/s/YxudAFlPwiMX"
        method="POST"
      >
        <input type="text" name="name" placeholder="お名前" required />
        <input type="email" name="email" placeholder="メールアドレス" required />
        <textarea name="message" placeholder="お問い合わせ内容" required />
        <button type="submit">送信</button>
        <div className="g-recaptcha" data-sitekey="6LfyvjwrAAAAAEDQbowrLdY7cd1J-uATHDbZ9yAM"></div>
      </form>
      </Container>
      </>
  )
}