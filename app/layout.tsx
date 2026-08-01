import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hüseyin Emre Çevik | Software Engineer",
  description:
    "Hüseyin Emre Çevik için sade, modern kişisel CV sitesi.",
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
