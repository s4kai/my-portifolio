import { ProjectItem } from "./project-item"
import { Reveal } from "./reveal"
import { Separator } from "./ui/separator"

export function Projects() {
  return (
    <section className="container grid items-center  gap-2 pb-8 pt-6 md:py-10">
      <Reveal>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
          Projetos
        </h2>
      </Reveal>
      <Separator />

      <div className="grid auto-cols-max grid-cols-1  place-items-center gap-5 lg:grid-cols-2">
        {[0, 1, 2, 3].map((_, index) => (
          <ProjectItem key={index} />
        ))}
      </div>
    </section>
  )
}
