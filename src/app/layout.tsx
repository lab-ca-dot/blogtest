'use client'
import { ThemeProvider } from 'next-themes';
import { notoSans } from '@/app/fonts';
import Alert from "@/app/_components/alert";
import { Header } from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import cn from "classnames";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={cn(notoSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* <Alert /> */}
          <Header />
          <div className="">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}