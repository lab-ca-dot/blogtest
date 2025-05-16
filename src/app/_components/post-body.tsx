import styles from './PostBody.module.scss'
import markdownStyles from './MarkdownStyles.module.scss'

type Props = {
  content: string
}

export function PostBody({ content }: Props) {
  return (
    <div className={styles.wrapper}>
      <div
        className={markdownStyles.markdown}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}