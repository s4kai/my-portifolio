"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { LucideExternalLink } from "lucide-react"

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
        <div className="bg-muted max-h-60 p-10 rounded-md grid place-content-center">
          {/*    <img
          src="https://picsum.photos/720/405"
          className="rounded-xl max-h-[300px] translate-y-20  object-cover z-0 hover:rotate-3 hover:scale-105 transition-all duration-200 ease-in-out transform"
          alt=""
        /> */}
        </div>
        <Reveal>
          <CardHeader className="z-10 relative bg-white dark:bg-slate-950">
            <div className="flex flex-row items-center gap-4 ">
              <CardTitle>Card Title</CardTitle>
              <div className="flex-1">
                <Separator />
              </div>
              <div className="flex gap-2">
                <Icons.gitHub className="w-6 h-6" />
                <LucideExternalLink className="w-6 h-6" />
              </div>
            </div>

            <CardDescription>Flutter - MUI - Python - FastAPI</CardDescription>
          </CardHeader>
        </Reveal>
        <Reveal>
          <CardContent className="z-10  relative bg-white dark:bg-slate-950">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            quam aliquid voluptatem reprehenderit vero dolor deleniti
            necessitatibus, alias accusamus nam inventore nostrum vel expedita
            quos nulla veritatis atque odit eligendi.
            <Link href={"/"} className="ml-2 text-blue-500">
              Veja mais
            </Link>
          </CardContent>
        </Reveal>
      </Card>
    </motion.div>
  )
}
