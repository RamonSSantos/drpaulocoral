import { HandHeart, Rocket, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const principios = [
  {
    Icon: Stethoscope,
    titulo: "Cuidar",
    subtitulo: "Saúde",
    texto:
      "Mais eficiência no atendimento, redução das filas e atenção especial à saúde mental.",
  },
  {
    Icon: Rocket,
    titulo: "Gerar",
    subtitulo: "Empreendedorismo e oportunidades",
    texto: "Estimular novos negócios, reduzir burocracias e gerar emprego e renda.",
  },
  {
    Icon: HandHeart,
    titulo: "Servir",
    subtitulo: "Política limpa e eficiente",
    texto:
      "Atuação ética, transparente, fiscalizadora e responsável com o dinheiro público.",
  },
];

export function Principios() {
  return (
    <section className="bg-navy py-16 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Cuidar. Gerar. <span className="text-gold">Servir.</span>
          </h2>
          <p className="mt-3 max-w-2xl text-base text-white/75">
            Os três princípios que orientam o projeto de mandato.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {principios.map(({ Icon, titulo, subtitulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 90}>
              <article className="h-full rounded-2xl border border-white/12 bg-white/5 p-7">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold text-navy">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-2xl font-extrabold uppercase tracking-tight text-gold">
                  {titulo}
                </h3>
                <p className="mt-1 text-sm font-semibold text-white">{subtitulo}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/75">{texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
