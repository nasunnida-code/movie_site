import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "나만의 영화 기록 사이트",
  description: "좋아하는 영화를 기록하고 리뷰를 남기세요",
};

export default function RootLayout({children,}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <nav className="nav">
          <Link href="/" className="logo">
          영화소개사이트
          </Link>
          <div className="navLinks">
            <Link href='/' className="navLink">홈</Link>
            <Link href='/movies' className="navLink">영화목록</Link>
            <Link href='/about' className="navLink">소개</Link>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
