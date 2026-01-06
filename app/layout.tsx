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
  title: 'Ryzal | Ejen Takaful Prudential | Portfolio & Perundingan Takaful',
  description:
    'Kenali Ryzal, ejen takaful Prudential yang membantu individu dan keluarga merancang perlindungan, hibah dan pelan kesihatan secara patuh Syariah dan tanpa paksaan.',
  openGraph: {
    title: 'Ryzal – Ejen Takaful Prudential',
    description:
      'Kenali cara kerja dan pendekatan Ryzal sebagai ejen takaful sebelum berbincang di WhatsApp.',
    type: 'website',
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
