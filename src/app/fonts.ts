import { Audiowide, Noto_Sans_JP } from 'next/font/google'

export const audiowide = Audiowide({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

export const notoSans = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})