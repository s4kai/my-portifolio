import { Icons } from "./icons"
import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section className="container items-center justify-center flex flex-col gap-6 min-h-[600px] h-full">
      <div className="flex flex-col text-center max-w-[800px]">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-extrabold">Contate-me</h2>
        </Reveal>
        <Reveal>
          <p className="text-xl">
            Me mande um email se quiser conectar! Você também pode me achar no
            Linkedin ou Github se você preferir.
          </p>
        </Reveal>

        <Reveal>
          <a
            className="text-3xl flex justify-center items-center gap-4 hover:text-blue-500 transition-colors  "
            href="malito:vinicius.sakai@tuta.io"
          >
            <span>
              <Icons.mail className="w-8 h-8" />
            </span>
            vinicius.sakai@tuta.io
          </a>
        </Reveal>
      </div>
    </section>
  )
}
