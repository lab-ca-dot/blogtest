import { ReactNode } from 'react'
import styles from './PostTitle.module.scss'

type Props = {
  children?: ReactNode
}

export function PostTitle({ children }: Props) {
  return <h1 className={styles.title}>{children}</h1>
}