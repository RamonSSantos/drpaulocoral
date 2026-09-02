import { HeartHandshake, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { mensagens, whatsappLink } from "@/config/campaign";

const cards = [
  {
    Icon: Users,
    titulo: "Seja um voluntário",
    texto: "Quer contribuir com a campanha? Entre em contato conosco.",
    cta: "Quero ser voluntário",
    mensagem: mensagens.voluntario,
  },
  {
    Icon: HeartHandshake,
    titulo: "Apoie a campanha",
    texto: "Entre em contato para receber informações sobre como contribuir.",
    cta: "Quero saber como doar",
    mensagem: mensagens.doacao,
  },
];

export function FacaParte() {
  return (
    <section id="faca-parte" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Faça parte
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {cards.map(({ Icon, titulo, texto, cta, mensagem }, i) => {
            const href = whatsappLink(mensagem);
            return (
              <Reveal key={titulo} delay={i * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-navy text-gold">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-navy">{titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
                  <a
                    href={href ?? undefined}
                    aria-disabled={!href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex w-fit items-center justify-center rounded-full bg-gold px-6 py-3.5 text-base font-bold text-navy transition-transform hover:scale-[1.03] ${
                      href ? "" : "pointer-events-none opacity-60"
                    }`}
                  >
                    {cta}
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
