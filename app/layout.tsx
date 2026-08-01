import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hüseyin Emre Çevik | Software Engineer",
  description:
    "Backend ağırlıklı full-stack software engineer. .NET, microservices, banking, capital markets and business applications.",
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
