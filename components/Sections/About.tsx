import { Quote } from "lucide-react"

namespace Components {
   export function Highlighted(props: { children: any }) {
      return <span className="font-hand text-blue-300 font-medium">{props.children}</span>
   }

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
export default function About() {
   return (
      <section
         id="about"
         className="mb-8 pb-8 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 border-b-[1px] border-gray-800"
         aria-label="About me"
      >
         <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only flex items-center gap-2">
               <Quote size={20} />
               <span>About</span>
            </h2>
         </div>
         <div className="text-l2">
            <p className="mb-4">
               I'm a digital craftsman who builds awesome websites and web apps with{" "}
               <Components.Highlighted>pixel-perfect</Components.Highlighted> perfection! From static sites to
               dynamic apps and APIs, I've created a bunch of cool projects using all kinds of techy tools.
            </p>
            <p className="mb-4">
               Even though <Components.Highlighted>I'm self-taught</Components.Highlighted>, learning new
               things is like a fun game for me. I'm always eager to level up my skills and take on new
               challenges. Right now, I'm super excited about exploring{" "}
               <Components.Highlighted>AI agents</Components.Highlighted> and how they can change the way we
               interact with computers. It's like stepping into a new digital dimension!
            </p>
            <p className="mb-4">
               Keeping up with the latest tech trends isn't just a{" "}
               <Components.Highlighted>hobby</Components.Highlighted> – it's an adventure! I'm a quick
               learner, ready to embark on new quests and conquer any coding conundrums that come my way.
            </p>
         </div>
      </section>
   )
}
