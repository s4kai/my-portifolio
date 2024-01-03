import { Reveal } from "./reveal"
import { Separator } from "./ui/separator"

const freelancerTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JQuery",
  "PHP",
  "Laravel",
  "WordPress",
  "MySQL",
  "PostgreSQL",
]

export function Experience() {
  return (
    <section className="container grid items-center  gap-2 pb-8 pt-6 md:py-10">
      <Reveal>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
          Experiencias
        </h2>
      </Reveal>
      <Separator />

      <div className="container p-6 ">
        <div className="border-b pb-5">
          <div className="flex justify-between mb-4">
            <Reveal>
              <h3 className="text-2xl font-semibold leading-none tracking-tight">
                Freelancer
              </h3>
            </Reveal>
            <Reveal>
              <span className="text-md ">2023 - Presente</span>
            </Reveal>
          </div>
          <div className="flex justify-between">
            <Reveal>
              <h3 className="text-xl font-semibold text-blue-500 leading-none tracking-tight">
                Desenvolvedor de Software
              </h3>
            </Reveal>
            <Reveal>
              <span className="text-md ">Online</span>
            </Reveal>
          </div>
          <Reveal>
            <p className="max-w-[1000px]">
              Como freelancer, meu foco principal é o desenvolvimento de
              aplicativos e sites personalizados para atender às necessidades
              específicas de empresas e indivíduos. Ao longo da minha carreira,
              adquiri ampla experiência e expertise em diversas linguagens e
              tecnologias fundamentais para criar produtos de alta qualidade.
            </p>
          </Reveal>

          <Reveal>
            <ul className="list-none flex gap-4">
              {freelancerTechs.map((tech, index) => (
                <li className=" rounded bg-muted px-3 py-1 text-sm font-semibold hover:scale-105 transition-all">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
