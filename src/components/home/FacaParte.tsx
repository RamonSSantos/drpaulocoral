import { ArrowRight, HeartHandshake, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DecorDark } from "@/components/BrandDecor";
import { mensagens, whatsappLink } from "@/config/campaign";

const cards = [
  {
    Icon: Users,
    titulo: "Seja um voluntário",
    texto: "Nossa campanha é feita por voluntários que acreditam no Dr. Paulo Coral e apoiam esse projeto por Santa Catarina.",
    cta: "Quero ser voluntário",
    mensagem: mensagens.voluntario,
  },
  {
    Icon: HeartHandshake,
    titulo: "Apoie a campanha",
    texto: "Apoie a campanha compartilhando nossas propostas, divulgando o projeto e ajudando a levar essa mensagem mais longe.",
    cta: "Quero saber como doar",
    mensagem: mensagens.doacao,
  },
];

export function FacaParte() {
  return (
    <section
      id="faca-parte"
      className="relative isolate section-y overflow-hidden bg-navy-900 text-white"
    >
      <DecorDark />
      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold-400">
            <span aria-hidden="true" className="h-px w-10 hairline-gold" />
            Participação
          </p>
          <h2 className="mt-4 text-h2">Faça parte desse projeto.</h2>
          <p className="mt-4 measure text-body-lg text-white/70">
            Contribua com a nossa campanha.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {cards.map(({ Icon, titulo, texto, cta, mensagem }, i) => {
            const href = whatsappLink(mensagem);
            return (
              <Reveal key={titulo} delay={i * 80}>
                <article className="group flex h-full flex-col rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-8 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-gold-500/60">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/40 text-gold-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-h3">{titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{texto}</p>
                  <a
                    href={href ?? undefined}
                    aria-disabled={!href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-base font-bold text-navy-900 transition-colors hover:bg-gold-400 sm:w-fit ${
                      href ? "" : "pointer-events-none opacity-50"
                    }`}
                  >
                    {cta}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
