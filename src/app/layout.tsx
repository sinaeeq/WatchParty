import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "باهم | تماشای همزمان فیلم",
  description: "با دوستات همزمان فیلم ببین و با هم حرف بزنید 🎬🎤 | رایگان، بدون ثبت‌نام، فقط یه لینک بساز و با دوستات به اشتراک بذار",
  openGraph: {
    title: "باهم 🎬",
    description: "با دوستات همزمان فیلم ببین و با هم حرف بزنید | رایگان، بدون ثبت‌نام",
    url: "https://bahampk.ir",
    siteName: "باهم",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "باهم 🎬",
    description: "با دوستات همزمان فیلم ببین و با هم حرف بزنید | رایگان، بدون ثبت‌نام",
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased" data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-[var(--bg-deep)] overflow-x-hidden">{children}</body>
    </html>
  );
}
