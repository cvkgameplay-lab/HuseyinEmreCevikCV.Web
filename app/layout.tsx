import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hüseyin Emre Çevik | Senior Software Developer",
  description:
    "Finans ve bankacılık domainlerinde .NET, mikro servisler, kredi süreçleri ve entegrasyonlar üzerinde çalışan senior software developer.",
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
