"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { Tech } from "@/config/techs"

interface TechCardProps {
  tech: Tech
}

export function TechCard({ tech }: TechCardProps) {
  const { image, link, title } = tech
  return (
    <a href={link} className="w-full md:w-fit">
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: 75,
          },

          visible: {
            opacity: 1,
            x: 0,
          },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5 }}
      >
        <div className="flex w-full items-center justify-between gap-4 rounded-md bg-slate-50  p-3 md:w-52 dark:bg-slate-900">
          <div className="grid h-16 w-16 place-content-center rounded-md bg-muted p-2 dark:bg-slate-600">
            <Image src={image} alt={title} height={48} width={48} />
          </div>
          <h3 className=" text-md flex-1 text-center font-semibold sm:w-full">
            {title}
          </h3>
        </div>
      </motion.div>
    </a>
  )
}
