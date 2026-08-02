import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://huseyinemrecevik.com"),
  title: "Hüseyin Emre Çevik | Senior Software Developer",
  description:
    "Finans ve bankacılık domainlerinde .NET, mikro servisler, kredi süreçleri ve entegrasyonlar üzerinde çalışan Senior Software Developer.",
  openGraph: {
    title: "Hüseyin Emre Çevik | Senior Software Developer",
    description:
      "Finans ve bankacılık domainlerinde .NET, mikro servisler, kredi süreçleri ve entegrasyonlar üzerinde çalışan Senior Software Developer.",
    type: "profile",
    locale: "tr_TR",
    url: "/",
    siteName: "Hüseyin Emre Çevik CV",
  },
  twitter: {
    card: "summary",
    title: "Hüseyin Emre Çevik | Senior Software Developer",
    description:
      "Finans ve bankacılık domainlerinde .NET, mikro servisler, kredi süreçleri ve entegrasyonlar üzerinde çalışan Senior Software Developer.",
  },
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
