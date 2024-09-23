import { Data } from "@/lib/data"
import { PencilLine } from "lucide-react"
import { useMemo } from "react"

namespace Components {
   export function Highlighted(props: { children: any }) {
      return <span className="font-hand text-blue-300 font-medium">{props.children}</span>
   }

   export function ParsedDescription(props: { description: string }) {
      const description = useMemo(() => {
         const regex = /`(.*?)`/g
         return props.description.split(regex).map((part, index) => {
            if (index % 2 === 1) {
               return <Highlighted key={index}>{part}</Highlighted>
            }
            return part
         })
      }, [props.description])

      return <>{description}</>
   }
}

/* eslint-disable @next/next/no-img-element */
export default function Books() {
   return (
      <section
         id="books"
         className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
         aria-label="Books authored"
      >
         <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-2">
               <PencilLine size={22} />
               <span>Books Authored</span>
            </h2>
         </div>
         <div>
            <ul className="group/list">
               {Data.books.map((book, index) => (
                  <li key={index} className="mb-12">
                     <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        {/* Hover background */}
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-blueuce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                        {/* Information */}
                        <div className="z-10 sm:order-2 sm:col-span-6">
                           <h3>
                              <a
                                 className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-300 focus-visible:text-blue-300 group/link text-base"
                                 href={book.link}
                                 target="_blank"
                                 rel="noreferrer noopener"
                                 aria-label={`${book.title} (opens in a new tab)`}
                              >
                                 <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                                 <span>{book.title}</span>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-blueuce:transition-none ml-1 translate-y-px"
                                    aria-hidden="true"
                                 >
                                    <path
                                       fillRule="evenodd"
                                       d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                       clipRule="evenodd"
                                    />
                                 </svg>
                              </a>
                           </h3>
                           <p className="mt-2 text-sm leading-normal text-l2">
                              <Components.ParsedDescription description={book.description} />
                           </p>
                           <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                              {book.tags.map((tag, index) => (
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
                           alt={book.title}
                           loading="lazy"
                           width={200}
                           height={150}
                           decoding="async"
                           className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                           style={{ color: "transparent" }}
                           src={book.cover}
                        />
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}
