import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex min-h-16 items-center justify-between transition-all duration-100 ease-in s md:max-h-16">
        <MainNav items={siteConfig.mainNav} />
        <div className="items-center  justify-end ">
          <nav className="flex items-center ">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="md:flex hidden"
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.gitHub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
