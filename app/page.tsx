/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import About from "@/components/Sections/About"
import Experience from "@/components/Sections/Experience"
import Projects from "@/components/Sections/Projects"
import Publications from "@/components/Sections/Publications"
import Skills from "@/components/Sections/Skills"
import Story from "@/components/Sections/Story"

export default function Home() {
	return (
		<div className="group/spotlight relative bg-slate-950">
			<div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute" />
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="lg:flex lg:justify-between lg:gap-4">
					<Header />
					<main id="content" className="pt-24 lg:w-1/2 lg:py-24">
						<About />
						<Experience />
						{/* <Projects /> */}
						<Skills />
						<Publications />
						{/* <Story /> */}
						<Footer />
					</main>
				</div>
			</div>
		</div>
	)
}
