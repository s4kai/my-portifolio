import Link from "next/link"

import { siteConfig } from "@/config/site"

import { Icons } from "./icons"
import { Reveal } from "./reveal"
import { Separator } from "./ui/separator"

const dailyTech = [
  "HTML",
  "CSS",
  "Jquery",
  "React",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "TypeScript",
  "Ruby on Rails",
  "PHP",
  "Laravel",
  "PostgreSQL",
  "Slack",
  "Git",
]

function calcAge(dateString: string) {
  var birthday = +new Date(dateString)
  return ~~((Date.now() - birthday) / 31557600000)
}

const otherTech = ["Rust", "Java", "GraphQL", "Python", "Crystal"]

export function AboutMe() {
  return (
    <section className="container grid items-center  gap-2 pb-8 pt-6 md:py-10">
      <Reveal>
        <h2 className="scroll-m-20 pb-2 text-3xl font-bold tracking-tight first:mt-0">
          Sobre mim
        </h2>
      </Reveal>
      <Separator />

      <div className="flex flex-col lg:grid grid-cols-12 w-100 lg:gap-8">
        <div className="col-span-8">
          <div className="grid">
            <Reveal>
              <p className="first-letter:text-2xl float-left first-letter:text-extrabold">
                Olá, me chamo Vinicius e tenho{" "}
                {calcAge("Jul 14 2005 00:51:54 GMT-0300 (BRT)")} anos, como todo
                desenvolvedor, sou apaixonado por inovação e tecnologia. Minha
                jornada profissional inclui experiências gratificantes
                trabalhando com freelancers em projetos diversos, utilizando
                principalmente Ruby, TypeScript e PHP como minhas ferramentas
                principais.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Trabalhar como desenvolvedor freelancer abriu as portas para
                explorar o vasto universo da tecnologia, permitindo-me transitar
                entre diferentes áreas, desde o desenvolvimento frontend até o
                backend. Nesse percurso, estive diretamente envolvido nas
                demandas dos clientes, compreendendo suas necessidades e
                oferecendo soluções personalizadas.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Minha paixão pela programação e meu comprometimento em buscar
                constantemente novos desafios moldaram minha trajetória como
                desenvolvedor. Estou sempre em busca de aprender e aprimorar
                minhas habilidades para enfrentar os desafios mais complexos e
                contribuir de maneira significativa para o desenvolvimento de
                soluções inovadoras.
              </p>
            </Reveal>
            <Reveal>
              <div className="flex gap-4 items-center mt-8">
                <span className="flex items-center text-blue-500 text-lg ">
                  Meus links <Icons.arrowRight className="w-5 h-5" />
                </span>

                <div className="flex gap-4">
                  <Link
                    href={siteConfig.links.github}
                    children={<Icons.gitHub className="h-5 w-5" />}
                  ></Link>
                  <Link
                    href={siteConfig.links.linkedin}
                    children={<Icons.linkedin />}
                  ></Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="md:col-span-4 md:mt-0 mt-10">
          <Reveal>
            <h3 className="scroll-m-20 text-xl font-bold tracking-tight flex items-center gap-4 my-5">
              <Icons.code /> Uso diário
            </h3>

            <div className="flex gap-3 flex-wrap">
              {dailyTech.map((tech) => {
                return (
                  <span className=" rounded bg-muted px-3 py-1 text-sm font-semibold hover:scale-105 transition-all">
                    {tech}
                  </span>
                )
              })}
            </div>
          </Reveal>
          <Reveal>
            <h3 className="scroll-m-20 text-xl font-bold tracking-tight flex items-center gap-4 my-5">
              <Icons.fun /> Outras tecnologias
            </h3>
            <div className="flex gap-2 flex-wrap">
              {otherTech.map((tech) => {
                return (
                  <span className=" rounded bg-muted px-3 py-1 text-sm font-semibold">
                    {tech}
                  </span>
                )
              })}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
