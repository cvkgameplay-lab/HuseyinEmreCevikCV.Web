import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hüseyin Emre Çevik | Digital Banking Software Engineer",
  description:
    "Fimple bünyesinde dijital bankacılık platformları, kredi süreçleri ve entegrasyonlar üzerinde çalışan software engineer.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
