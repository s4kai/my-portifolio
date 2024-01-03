import Link from "next/link"

import { siteConfig } from "@/config/site"

import { buttonVariants } from "./ui/button"

export function Hero() {
  return (
    <section className="container flex flex-col gap-4 min-h-[500px] h-full pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 mt-auto">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
          Olá, meu nome é Vinicius Sakai
        </h1>
        <h3 className="scroll-m-20 text-2xl font-medium tracking-tight">
          Sou um{" "}
          <span className="text-blue-800 dark:text-blue-500">
            Fullstack Developer
          </span>
        </h3>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex items-start gap-4 mb-auto">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Contate-me
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
