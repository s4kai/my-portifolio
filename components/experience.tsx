import { Reveal } from "./reveal"
import { Separator } from "./ui/separator"

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
            <p>
              I help build and scale Google Photos. Increased throughput of our
              primary services by 70%. Migrated backend service from Java to Go.
              Also helped make it look prettier.
            </p>
          </Reveal>

          <Reveal>
            <ul className="list-none flex gap-4">
              <li className=" rounded bg-muted px-3 py-1 text-sm font-semibold hover:scale-105 transition-all">
                "AAAAA"
              </li>

              <li className=" rounded bg-muted px-3 py-1 text-sm font-semibold hover:scale-105 transition-all">
                "AAAAA"
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
