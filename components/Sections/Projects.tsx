import { Data } from "@/lib/data"
import { FolderKanban } from "lucide-react"

/* eslint-disable @next/next/no-img-element */
export default function Projects() {
	return (
		<section
			id="projects"
			className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
			aria-label="Personal projects"
		>
			<div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
				<h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-2">
					<FolderKanban size={22} />
					<span>Projects</span>
				</h2>
			</div>
			<div>
				<ul className="group/list">
					{Data.projects.map((project, index) => (
						<li key={index} className="mb-12">
							<div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
								{/* Hover background */}
								<div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-blueuce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
								{/* Information */}
								<div className="z-10 sm:order-2 sm:col-span-6">
									<h3>
										<a
											className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
											href={project.link}
											target="_blank"
											rel="noreferrer noopener"
											aria-label={`${project.title} (opens in a new tab)`}
										>
											<span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
											<span>{project.title}</span>
										</a>
									</h3>
									<p className="mt-2 text-sm leading-normal text-l2">
										{project.description}
									</p>
									<ul
										className="mt-2 flex flex-wrap"
										aria-label="Technologies used"
									>
										{project.tags.map((tag, index) => (
											<li key={index} className="mr-1.5 mt-2">
												<div className="flex items-center rounded-full bg-blue-400/10 px-3 py-1 text-xs font-medium leading-5 text-blue-300">
													{tag}
												</div>
											</li>
										))}
									</ul>
								</div>
								{/* Image */}
								<img
									alt={project.title}
									loading="lazy"
									width={200}
									height={150}
									decoding="async"
									className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
									style={{ color: "transparent" }}
									src={project.image}
								/>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
