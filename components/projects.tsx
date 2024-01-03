import { ProjectItem } from "./project-item"
import { Separator } from "./ui/separator"

export function Projects() {
  return (
    <section className="container grid items-center  gap-2 pb-8 pt-6 md:py-10">
      <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
        Projetos
      </h2>
      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-2  auto-cols-max place-items-center gap-5">
        {[0, 1, 2, 3].map((_, index) => (
          <ProjectItem key={index} />
        ))}
      </div>
    </section>
  )
}
