import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
   title: "Yogesh Aggarwal",
   description:
      "Self-Taught Computer Science Engineer | I build pixel-perfect, engaging, and accessible digital experiences.",
   creator: "Yogesh Aggarwal",
   authors: [{ name: "Yogesh Aggarwal", url: "https://yogeshaggarwal.in" }],
   openGraph: {
      type: "website",
      locale: "en_US",
      url: "https://yogeshaggarwal.com",
      siteName: "Yogesh Aggarwal",
      title: "Yogesh Aggarwal",
      description:
         "Self-Taught Computer Science Engineer | I build pixel-perfect, engaging, and accessible digital experiences.",
      countryName: "India",
      determiner: "the",
      emails: ["inquiry@yogeshaggarwal.in"],
      phoneNumbers: ["+91 9136566908"],
      ttl: 60,
      images: [
         {
            url: "https://yogeshaggarwal.in/og-cover.jpg",
            width: 1200,
            height: 627,
            alt: "Yogesh Aggarwal",
         },
      ],
   },
}

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <Analytics />
         <SpeedInsights />
         <Script
            src="https://datafa.st/js/script.js"
            data-website-id="dfid_CjdX9OpCAEEozLakfa5Bc"
            data-domain="yogeshaggarwal.in"
            strategy="afterInteractive"
         />
         <script
            dangerouslySetInnerHTML={{
               __html: `
                  function initApollo() {
                     var n = Math.random().toString(36).substring(7);
                     var o = document.createElement("script");
                     o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n;
                     o.async = true;
                     o.defer = true;
                     o.onload = function() {
                        window.trackingFunctions.onLoad({appId: "66b718669fbee9019aab654f"});
                     };
                     document.head.appendChild(o);
                  }
                  initApollo();
               `,
            }}
         />
         <body>{children}</body>
      </html>
   )
}
