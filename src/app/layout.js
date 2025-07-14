// src/app/layout.js

import "./globals.css";
import NavigationBar from '@/components/NavigationBar';

export const metadata = {
  title: "Shir Amosi",
  description: "Performer & Instructor | Burlesque, Pole & Heel | Workshops & Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: light)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#6000ff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap"   
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {/* רקע קבוע */}
        <div
          className="fixed inset-0 -z-10"
          style={{
            background: "linear-gradient(160deg, #000 0%, #0a0305 55%, rgb(29, 11, 15) 80%, #3e121d 100%)",
            minHeight: "100vh",
            width: "100vw",
          }}
        />
        <NavigationBar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
