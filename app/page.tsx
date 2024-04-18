"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import About from "@/components/Sections/About"
import Books from "@/components/Sections/Books"
import Experience from "@/components/Sections/Experience"
import Projects from "@/components/Sections/Projects"
import Publications from "@/components/Sections/Publications"
import Skills from "@/components/Sections/Skills"
import Story from "@/components/Sections/Story"
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react"

export default function Home() {
	useEffect(() => {
		// document.addEventListener("DOMContentLoaded", () => {
		const interBubble = document.querySelector<HTMLDivElement>(".interactive")!
		let curX = 0
		let curY = 0
		let tgX = 0
		let tgY = 0

		function move() {
			curX += (tgX - curX) / 20
			curY += (tgY - curY) / 20
			interBubble.style.transform = `translate(${Math.round(
				curX
			)}px, ${Math.round(curY)}px)`
			requestAnimationFrame(() => {
				move()
			})
		}

		window.addEventListener("mousemove", (event) => {
			tgX = event.clientX
			tgY = event.clientY
		})

		move()
		// })
	}, [])

	return (
		<>
			<div className="gradient-bg">
				<svg xmlns="http://www.w3.org/2000/svg">
					<defs>
						<filter id="goo">
							<feGaussianBlur
								in="SourceGraphic"
								stdDeviation="10"
								result="blur"
							/>
							<feColorMatrix
								in="blur"
								mode="matrix"
								values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
								result="goo"
							/>
							<feBlend in="SourceGraphic" in2="goo" />
						</filter>
					</defs>
				</svg>
				<div className="gradients-container">
					<div className="g1"></div>
					<div className="g2"></div>
					<div className="g3"></div>
					<div className="g4"></div>
					<div className="g5"></div>
					<div className="interactive"></div>
				</div>
			</div>
			<div className="z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Header />
					<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
						<About />
						<Experience />
						<Projects />
						<Skills />
						<Publications />
						{/* <Story /> */}
						<Books />
						<Footer />
					</main>
				</div>
			</div>
		</>
	)
}
