"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Separator } from "@/components/ui/separator"

import { Icons } from "./icons"
import { Reveal } from "./reveal"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"

export function ProjectItem() {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.2, ease: "easeIn" }}
    >
      <Card className="border-none ">
        <div className="grid max-h-60 place-content-center rounded-md bg-muted p-10">
          <Image
            src="/projects/ideias.avif"
            width={900}
            height={500}
            className="rounded-xl max-h-[300px] translate-y-20  object-cover z-0 hover:rotate-3 hover:scale-105 transition-all duration-200 ease-in-out transform"
            alt=""
          />
        </div>

        <CardHeader className="relative z-10 bg-white dark:bg-slate-950">
          <div className="flex flex-row items-center gap-4 ">
            <Reveal>
              <CardTitle>Projeto em Desenvolvimento</CardTitle>
            </Reveal>

            <div className="flex-1">
              <Separator />
            </div>

            <Reveal>
              <div className="flex gap-2">
                <Icons.gitHub className="h-6 w-6" />
                <Icons.externalLink className="h-6 w-6" />
              </div>
            </Reveal>
          </div>
          <Reveal>
            <CardDescription>Aqui serão listadas a stack</CardDescription>
          </Reveal>
        </CardHeader>

        <Reveal>
          <CardContent className="relative  z-10 bg-white dark:bg-slate-950">
            Os projetos atualmente estão sendo atualizados, em breve teremos
            grandes novidades.
            <Link href={"/"} className="ml-2 text-blue-500">
              Veja mais
            </Link>
          </CardContent>
        </Reveal>
      </Card>
    </motion.div>
  )
}
