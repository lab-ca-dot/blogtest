import styles from './Intro.module.scss'
import Link from "next/link";
import { gugi } from '@/app/fonts';
import { CMS_NAME } from "@/lib/constants";

export function Intro() {
  return (
    <section className={styles.section}>
      <h1 className={`${styles.title} ${gugi.className}`}><Link href="/" className="hover:underline">Lab-Ca.TechBlog</Link></h1>
      <h4 className={styles.subtitle}>大阪のウェブサイト制作・CSS研究所「Lab-Ca.」の技術ブログです</h4>
    </section>
  );
}
