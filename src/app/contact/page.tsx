'use client'
import Script from 'next/script'
import Container from "@/app/_components/container";

export default function ContactForm() {
  return (
    <>
      <Script src="https://www.google.com/recaptcha/api.js" strategy="afterInteractive" />
      <Container>
        <form
          action="https://ssgform.com/s/YxudAFlPwiMX"
          method="POST"
        >
          <input type="text" name="name" placeholder="お名前" required />
          <input type="email" name="email" placeholder="メールアドレス" required />
          <textarea name="message" placeholder="お問い合わせ内容" required />
          <div className="g-recaptcha" data-sitekey="6LdswzwrAAAAALxcBXJJ8P7EB1WQIEVmKEuY1P9g" />
          <button type="submit">送信</button>
        </form>
      </Container>
    </>
  )
}