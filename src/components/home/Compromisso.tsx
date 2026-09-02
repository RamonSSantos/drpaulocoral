import { HandHeart, HardHat, Rocket, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const compromissos = [
  { Icon: Stethoscope, area: "Saúde", texto: "Reduzir a espera" },
  { Icon: Rocket, area: "Economia", texto: "Facilitar para quem empreende" },
  { Icon: HardHat, area: "Trabalho", texto: "Gerar oportunidades" },
  { Icon: HandHeart, area: "Política", texto: "Transparência e prestação de contas" },
];

export function Compromisso() {
  return (
    <section id="compromisso" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Nosso compromisso
          </h2>
          <p className="mt-3 max-w-2xl text-base font-semibold text-navy-2">
            Propostas que podem ser acompanhadas e cobradas.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {compromissos.map(({ Icon, area, texto }, i) => (
            <Reveal key={area} delay={i * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                  {area}
                </h3>
                <p className="mt-1 text-lg font-bold text-navy">{texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
