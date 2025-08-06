// src/app/layout.js

import "./globals.css";
import NavigationBar from '@/components/NavigationBar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react"

export const metadata = {
  title: "Shir Amosi",
  description: "Performer & Instructor | Burlesque, Pole & Heel | Workshops & Shows",
};

export default function RootLayout({ children }) {
  return (
        <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* ICONS */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ADDRESS BAR COLOR */}
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        {/* SOCIAL (אם Next לא מייצר אוטומטית) */}
        <meta property="og:title" content="Shir Amosi" />
        <meta property="og:description" content="Performer & Instructor | Burlesque, Pole & Heel | Workshops & Shows" />
        <meta property="og:image" content="https://shiramosi.com/Shir-2.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shiramosi.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shir Amosi" />
        <meta name="twitter:description" content="Performer & Instructor | Burlesque, Pole & Heel | Workshops & Shows" />
        <meta name="twitter:image" content="https://shiramosi.com/Shir-2.webp" />

        <link rel="canonical" href="https://shiramosi.com" />
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
         <Analytics />
        <SpeedInsights/>
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
