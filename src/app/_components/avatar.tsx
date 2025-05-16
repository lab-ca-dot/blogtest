import styles from './Avatar.module.scss'

type Props = {
  name: string
  picture: string
}

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className={styles.wrapper}>
      <img src={picture} className={styles.image} alt={name} />
      <div className={styles.name}>{name}</div>
    </div>
  )
}

export default Avatar