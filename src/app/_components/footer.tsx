import styles from './Footer.module.scss'
import Container from '@/app/_components/container'
import { EXAMPLE_PATH } from '@/lib/constants'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <h3 className={styles.title}>
            Statically Generated with Next.js.
          </h3>
          <div className={styles.actions}>
            <a
              href="https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates"
              className={styles.button}
            >
              Read Documentation
            </a>
            <a
              href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
              className={styles.link}
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer