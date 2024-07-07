import type { Metadata } from "next";
import { Gowun_Dodum } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "박진아의 포트폴리오",
  description: "박진아의 웹 포트폴리오입니다.",
};

const gowunDodum = Gowun_Dodum({
  weight: ["400"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={gowunDodum.className}>{children}</body>
    </html>
  );
}
