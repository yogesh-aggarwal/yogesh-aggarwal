import "./globals.css"

import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Yogesh Aggarwal",
	description: "",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<Analytics />
			<body>{children}</body>
		</html>
	)
}
