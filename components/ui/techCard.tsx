"use client"

import { motion } from "framer-motion"

import { Tech } from "@/config/techs"

interface TechCardProps {
  tech: Tech
}

export function TechCard({ tech }: TechCardProps) {
  const { image, link, title } = tech
  return (
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
      <a href={link} className="md:w-fit w-full">
        <div className="flex bg-slate-50 rounded-md justify-between items-center p-3 gap-4  w-full md:w-52 dark:bg-slate-900">
          <div className="bg-muted h-16 w-16 rounded-md p-2 grid place-content-center dark:bg-slate-600">
            <img src={image} alt={title} className="" />
          </div>
          <h3 className=" flex-1 text-md font-semibold text-center sm:w-full">
            {title}
          </h3>
        </div>
      </a>
    </motion.div>
  )
}
