import { type Author } from "@/interfaces/author";
import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import styles from "./PostPreview.module.scss" // ← 追加！

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cover}>
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className={styles.title}>
        <Link href={`/posts/${slug}`} className={styles.link}>
          {title}
        </Link>
      </h3>
      <div className={styles.date}>
        <DateFormatter dateString={date} />
      </div>
      <p className={styles.excerpt}>{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}