'use client'
import { ThemeProvider } from 'next-themes';
import { notoSans } from '@/app/fonts';
import Footer from "@/app/_components/footer";
import cn from "classnames";

import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={cn(notoSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen">
            {children}
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}