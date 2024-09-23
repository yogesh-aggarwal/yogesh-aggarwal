import { Data } from "@/lib/data"

type Section_t = {
   id: string
   title: string
}

const sections: Section_t[] = [
   { id: "about", title: "About" },
   { id: "experience", title: "Experience" },
   { id: "projects", title: "Projects" },
   { id: "skills", title: "Skills" },
   { id: "publications", title: "Research Publications" },
   // { id: "my-story", title: "My Story" },
   { id: "books", title: "Books Authored" },
]

export default function Header() {
   return (
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 z-20">
         <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
               <a href="/">Yogesh Aggarwal</a>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
               <span className="font-hand text-blue-300 font-medium">
                  Self-Taught Computer Science Engineer
               </span>
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-l2">
               I build pixel-perfect, engaging, and accessible digital experiences.
            </p>
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
               <ul className="mt-16 w-max">
                  {sections.map((section, index) => (
                     <li key={index}>
                        <a className="group flex items-center py-3 active" href={`#${section.id}`}>
                           <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-blueuce:transition-none" />
                           <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                              {section.title}
                           </span>
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
         <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
            {Data.socials.map((social, index) => (
               <li key={index} className="mr-5 text-xs shrink-0">
                  <a
                     className="block hover:text-slate-200"
                     href={social.link}
                     target="_blank"
                     rel="noreferrer noopener"
                     aria-label={`${social.name} (opens in a new tab)`}
                     title={social.name}
                  >
                     <span className="sr-only">{social.name}</span>
                     {social.icon}
                  </a>
               </li>
            ))}
         </ul>
      </header>
   )
}
