import { ProjectItem } from "@/components/project-item"

export default function Projects() {
  return (
    <section className="container flex flex-col gap-4 min-h-[700px] h-full pb-8 pt-6 md:py-10">
      <h1 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
        Projetos
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2  auto-cols-max place-items-center gap-5">
        {new Array(10).fill(0).map((_, index) => (
          <ProjectItem key={index} />
        ))}
      </div>
    </section>
  )
}
