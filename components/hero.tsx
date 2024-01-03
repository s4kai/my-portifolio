import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Reveal } from "./reveal"
import { buttonVariants } from "./ui/button"

export function Hero() {
  return (
    <section className="container flex h-full min-h-[700px] flex-col gap-4 pb-8 pt-6 md:py-10">
      <div className="mt-auto flex max-w-[980px] flex-col items-start gap-2">
        <Reveal>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-5xl">
            Olá, meu nome é Vinicius Sakai
          </h1>
        </Reveal>
        <Reveal>
          <h2 className="scroll-m-20 text-2xl font-medium tracking-tight">
            Sou um{" "}
            <span className="text-blue-800 dark:text-blue-500">
              Fullstack Developer
            </span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            Combinando paixão pela inovação e expertise técnica, eu sou um
            desenvolvedor comprometido em transformar ideias em soluções
            digitais impactantes e funcionais.
          </p>
        </Reveal>
      </div>
      <div className=" mb-auto">
        <Reveal>
          <div className="flex items-start gap-4">
            <Link
              href={siteConfig.links.email}
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
        </Reveal>
      </div>
    </section>
  )
}
