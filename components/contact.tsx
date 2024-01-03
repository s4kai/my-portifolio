import { Icons } from "./icons"
import { Reveal } from "./reveal"

export function Contact() {
  return (
    <section className="container flex h-full min-h-[600px] flex-col items-center justify-center gap-6">
      <div className="flex max-w-[800px] flex-col text-center">
        <Reveal>
          <h2 className="text-3xl font-extrabold md:text-5xl">Contate-me</h2>
        </Reveal>
        <Reveal>
          <p className="text-xl">
            Me mande um email se quiser conectar! Você também pode me achar no
            Linkedin ou Github se você preferir.
          </p>
        </Reveal>

        <Reveal>
          <a
            className="flex items-center justify-center gap-4 text-3xl transition-colors hover:text-blue-500  "
            href="malito:vinicius.sakai@tuta.io"
          >
            <span>
              <Icons.mail className="h-8 w-8" />
            </span>
            vinicius.sakai@tuta.io
          </a>
        </Reveal>
      </div>
    </section>
  )
}
