import styles from './Footer.module.scss'
import Container from '@/app/_components/container'
import Link from "next/link";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            このブログはNext.jsで作成しました。
          </h3>
          <div className={styles.actions}>
            <a
              href="https://lab-ca.com/" target='_blank'
              className={styles.button} rel="noopener noreferrer"
            >Lab-Ca.公式サイト</a>
            <a
              href='https://github.com/lab-ca-dot/nextjs-blog' target='_blank'
              className={styles.link} rel="noopener noreferrer"
            >
              このブログのGithubはこちら
            </a>
            <Link
              href={`/contact/`}
              className={styles.link}
            >
              お問い合わせはこちら
            </Link>
          </div>
          <address className={styles.address}>&copy; Lab-Ca.</address>
        </div>
      </Container>
    </footer>
  )
}

export default Footer