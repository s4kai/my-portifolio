import { AboutMe } from "@/components/about-me"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"

export default function IndexPage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Experience />
      <Contact />
    </>
  )
}
