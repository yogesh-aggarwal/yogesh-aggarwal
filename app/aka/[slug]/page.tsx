"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

const LIVE_LINKS_URL = "https://yogeshaggarwal.in/links.jsonc"

const ALLOWED_PROTOCOLS = ["https:", "http:", "mailto:"]

function isSafeTarget(target: string): boolean {
   try {
      const url = new URL(target, window.location.origin)
      return ALLOWED_PROTOCOLS.includes(url.protocol)
   } catch {
      return false
   }
}

function stripJsonc(jsonc: string): string {
   let result = ""
   let i = 0
   let inString = false
   while (i < jsonc.length) {
      const ch = jsonc[i]
      if (inString) {
         result += ch
         if (ch === "\\") {
            result += jsonc[i + 1] ?? ""
            i += 2
            continue
         }
         if (ch === '"') inString = false
         i++
         continue
      }
      if (ch === '"') {
         inString = true
         result += ch
         i++
         continue
      }
      if (ch === "/" && jsonc[i + 1] === "/") {
         while (i < jsonc.length && jsonc[i] !== "\n") i++
         continue
      }
      if (ch === "/" && jsonc[i + 1] === "*") {
         i += 2
         while (i < jsonc.length && !(jsonc[i] === "*" && jsonc[i + 1] === "/")) i++
         i += 2
         continue
      }
      if (ch === ",") {
         let j = i + 1
         while (j < jsonc.length && /\s/.test(jsonc[j])) j++
         if (jsonc[j] === "}" || jsonc[j] === "]") {
            i++
            continue
         }
      }
      result += ch
      i++
   }
   return result
}

function parseJsonc(jsonc: string): Record<string, string> {
   return JSON.parse(stripJsonc(jsonc))
}

export default function AkaPage() {
   const { slug } = useParams<{ slug: string }>()
   const [status, setStatus] = useState<"redirecting" | "error">("redirecting")

   useEffect(() => {
      if (!slug) {
         setStatus("error")
         return
      }

      const fetchLinks = (url: string) =>
         fetch(url).then((res) => {
            if (!res.ok) throw new Error(`Failed to fetch ${url}`)
            return res.text().then(parseJsonc)
         })

      fetchLinks(LIVE_LINKS_URL)
         .catch(() => fetchLinks("/links.jsonc"))
         .then((links) => {
            const target = links[slug]
            if (target && isSafeTarget(target)) {
               window.location.replace(target)
            } else {
               setStatus("error")
            }
         })
         .catch(() => setStatus("error"))
   }, [slug])

   if (status === "error") {
      return (
         <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 px-6 text-center text-zinc-300">
            <p className="text-5xl font-semibold text-zinc-100">404</p>
            <p>
               The link <span className="font-semibold text-zinc-100">/aka/{slug}</span> does not exist or could not be
               resolved.
            </p>
            <Link
               href="/"
               className="rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition hover:bg-white"
            >
               Go to homepage
            </Link>
         </div>
      )
   }

   return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-zinc-950 px-6 text-center text-zinc-300">
         <p className="text-5xl font-semibold text-zinc-100">Redirecting</p>
         <p>Taking you to the requested link…</p>
      </div>
   )
}
