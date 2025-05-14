'use client'

import styles from './Header.module.scss'
import Link from "next/link";
import Image from 'next/image'
import { audiowide } from '@/app/fonts';
import { CMS_NAME } from "@/lib/constants";
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'
  const TitleTag = isHome ? 'h1' : 'p' // ← JSXのタグとして使える

  return (
    < >
    <header className={styles.section}>
        <TitleTag className={`${styles.title} ${audiowide.className}`}><Link href="/" className={styles.link}>
        <Image
          src="/assets/blog/logo.svg"
          alt="Lab-Ca."
          className={styles.titleImg}
          width={600}
          height={400}
        />
        Lab-Ca.TechBlog</Link></TitleTag>
      <h4 className={styles.subtitle}>大阪のウェブサイト制作・CSS研究所「Lab-Ca.」の技術ブログです</h4>
    </header>
    </>
  );
}
