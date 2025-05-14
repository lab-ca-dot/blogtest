import { Post } from '@/interfaces/post'
import { PostPreview } from './post-preview'
import styles from './MoreStories.module.scss' // ← 追加

type Props = {
  posts: Post[]
}

export function MoreStories({ posts }: Props) {
  return (
    <section>
      <h2 className={styles.heading}>記事一覧</h2>
      <div className={styles.postGrid}>
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
        ))}
      </div>
    </section>
  )
}