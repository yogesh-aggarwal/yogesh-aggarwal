import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Metadata } from "next"

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
         <body>{children}</body>
      </html>
   )
}
