import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: 'Ayu Suhada | Prudential Takaful Wealth Planner | Protect Your Future',
  description: 'Discover Prudential Takaful insurance solutions. Sharia-compliant protection for you and your family. Get a quote today!',
  openGraph: {
    title: 'Prudential Takaful Insurance | Protect Your Future',
    description: 'Discover Prudential Takaful insurance solutions. Sharia-compliant protection for you and your family. Get a quote today!',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Prudential Takaful Insurance' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
