"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

import { buttonVariants } from "./ui/button"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <div className="flex flex-1">
        <Link href="/" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className={cn("font-bold", isOpen ? "hidden" : "inline-block")}>
            {siteConfig.name}
          </span>
        </Link>

        {items?.length ? (
          <nav
            className={cn(
              "flex-1 flex-col items-center justify-center gap-6 py-10 md:flex md:flex-row lg:mr-20 lg:justify-end",
              isOpen ? "flex" : "hidden"
            )}
          >
            {items?.map(
              (item, index) =>
                item.href && (
                  <Link
                    key={index}
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      item.disabled && "cursor-not-allowed opacity-80",
                      pathname === item.href && "font-bold text-blue-500"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}

            <Link
              href={"/CV - VINICIUS SAKAI.pdf"}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Veja meu CV
            </Link>
          </nav>
        ) : null}
      </div>
      <div className="block md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-black-500 hover:text-black-400 flex items-center rounded px-3 py-2"
        >
          <Icons.menu
            className={cn("h-6 w-6 fill-current", isOpen ? "hidden" : "block")}
          />
          <Icons.x
            className={cn("h-6 w-6 fill-current", isOpen ? "block" : "hidden")}
          />
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>
    </>
  )
}
