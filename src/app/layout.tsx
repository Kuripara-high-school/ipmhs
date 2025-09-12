import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from 'next/script';

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// seo
export const metadata: Metadata = {
  title: "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয় | IPMHS",
  description:
    "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়, কালিপুর বাজার, মতলব উত্তর, চাঁদপুর। অফিসিয়াল ওয়েবসাইটে স্কুল সম্পর্কিত তথ্য, নোটিশ, রেজাল্ট এবং অন্যান্য গুরুত্বপূর্ণ তথ্য পাওয়া যাবে।",
  icons: {
    icon: '/favicon.png',
  },
  keywords: [
    "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়",
    "Imampur Palli Mangal High School",
    "Officeal website of Imampur Palli Mangal High School",
    "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয় ওয়েবসাইট ",
    "অফিসিয়াল ওয়েবসাইট - ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়",
    "IPMHS",
    "কালিপুর বাজার স্কুল",
    "মতলব উত্তর স্কুল",
    "চাঁদপুর স্কুল",
    "চাঁদপুরের শ্রেষ্ঠ স্কুল",
    "বাংলাদেশ উচ্চ বিদ্যালয়",
    "স্কুল ভর্তি তথ্য",
    "স্কুল ফলাফল",
  ],
  authors: [{ name: "Imampur Palli Mangal High School" }],
  viewport: "width=device-width, initial-scale=1",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়",
    description:
      "অফিসিয়াল ওয়েবসাইট - Imampur Palli Mangal High School, কালিপুর বাজার, চাঁদপুর",
    url: "https://ipmhs.vercel.app",
    siteName: "IPMHS",
    images: [
      {
        url: "https://ipmhs.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ইমামপুর পল্লী মঙ্গল উচ্চ বিদ্যালয়",
    description:
      "অফিসিয়াল ওয়েবসাইট - Imampur Palli Mangal High School, কালিপুর বাজার, চাঁদপুর",
    images: ["https://ipmhs.vercel.app/images/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-6YNCDB07NY`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6YNCDB07NY');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
