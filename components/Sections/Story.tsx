import { Sprout } from "lucide-react"

namespace Components {
   export function Link(props: { href: string; title: string }) {
      return (
         <a
            className="font-medium text-slate-200 hover:text-blue-300 focus-visible:text-blue-300"
            href={props.href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={props.title}
         >
            {props.title}
         </a>
      )
   }
}

/* eslint-disable react/no-unescaped-entities */
export default function Story() {
   return (
      <section
         id="my-story"
         className="mb-8 pb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
         aria-label="My story"
      >
         <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-2">
               <Sprout size={20} />
               <span>My Story</span>
            </h2>
         </div>
         <div className="text-l2">
            <p className="mb-4">My story here</p>
            <p className="mb-4"></p>
         </div>
      </section>
   )
}
