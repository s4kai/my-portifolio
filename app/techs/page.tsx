import { Tech, techs } from "@/config/techs"
import { TechCard } from "@/components/ui/techCard"

export default function Techs() {
  return (
    <section className="container flex flex-col gap-4 min-h-[700px] h-full pb-8 pt-6 md:py-10">
      <h1 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
        Tecnologias e Ferramentas
      </h1>

      <p>
        Veja as tecnologias e ferramentas que utilizo no meu dia a dia para o
        desenvolvimento de aplicações
      </p>

      <h2 className="text-2xl font-bold">Backend</h2>
      <div className="flex flex-wrap gap-4 mb-8 items-center justify-start flex-col md:flex-row">
        {techs.backendTechs.map((tech: Tech, i) => {
          return <TechCard tech={tech} key={tech.title + i} />
        })}
      </div>

      <h2 className="text-2xl font-bold">Frontend</h2>
      <div className="flex flex-wrap gap-4  mb-8 items-center justify-start flex-col md:flex-row">
        {techs.frontendTechs.map((tech: Tech, i) => {
          return <TechCard tech={tech} key={tech.title + i} />
        })}
      </div>

      <h2 className="text-2xl font-bold">Banco de dados</h2>
      <div className="flex flex-wrap gap-4  mb-8 items-center justify-start flex-col md:flex-row">
        {techs.databaseTechs.map((tech: Tech, i) => {
          return <TechCard tech={tech} key={tech.title + i} />
        })}
      </div>

      <h2 className="text-2xl font-bold">Versionamento de Código</h2>
      <div className="flex flex-wrap gap-4  mb-8 items-center justify-start flex-col md:flex-row">
        {techs.versionControlTechs.map((tech: Tech, i) => {
          return <TechCard tech={tech} key={tech.title + i} />
        })}
      </div>

      <h2 className="text-2xl font-bold">Devops</h2>
      <div className="flex flex-wrap gap-4  mb-8 items-center justify-start flex-col md:flex-row">
        {techs.devopsTechs.map((tech: Tech, i) => {
          return <TechCard tech={tech} key={tech.title + i} />
        })}
      </div>
    </section>
  )
}
