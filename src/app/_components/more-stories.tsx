'use client'
import ReactPaginate from 'react-paginate'
import { useState } from 'react'

import { Post } from '@/interfaces/post'
import { PostPreview } from './post-preview'
import styles from './MoreStories.module.scss' // ← 追加

type Props = {
  posts: Post[]
}

const POSTS_PER_PAGE = 6; // 1ページの件数

export function MoreStories({ posts }: Props) {
  const [currentPage, setCurrentPage] = useState(0)

  const offset = currentPage * POSTS_PER_PAGE
  const currentPosts = posts.slice(offset, offset + POSTS_PER_PAGE)
  const pageCount = Math.ceil(posts.length / POSTS_PER_PAGE)

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  return (
    <section className={styles.wrap}>
      <h2 className={styles.heading}>記事一覧</h2>
      <div className={styles.postGrid}>
        {currentPosts.map((post) => (
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

      <ReactPaginate
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        previousLabel="← 前へ"
        nextLabel="次へ →"
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
      />

    </section>
  )
}