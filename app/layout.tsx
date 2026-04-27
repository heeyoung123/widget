import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PMT — Polestar Media Tech",
  description: "창작부터 유통까지 하나의 미디어 생태계",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
