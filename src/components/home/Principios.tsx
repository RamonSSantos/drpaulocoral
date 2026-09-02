import { HandHeart, Rocket, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DecorDark } from "@/components/BrandDecor";

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
    subtitulo: "Empreendedorismo",
    texto: "Estimular novos negócios, reduzir burocracias e gerar oportunidades.",
  },
  {
    Icon: HandHeart,
    titulo: "Servir",
    subtitulo: "Política limpa",
    texto: "Atuação ética, transparente e responsável com o dinheiro público.",
  },
];

export function Principios() {
  return (
    <section className="relative isolate section-y overflow-hidden bg-navy-900 text-white">
      <DecorDark />
      <div className="container-site relative">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-gold-400">
            <span aria-hidden="true" className="h-px w-10 hairline-gold" />
            Princípios
          </p>
          <h2 className="mt-4 text-h2">
            Cuidar. Gerar. <span className="text-gold-500">Servir.</span>
          </h2>
          <p className="mt-4 measure text-body-lg text-white/70">
            Três princípios para um mandato comprometido com Santa Catarina.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {principios.map(({ Icon, titulo, subtitulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 90}>
              <article className="group h-full rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-8 transition-[border-color,transform,background-color] duration-300 hover:-translate-y-1 hover:border-gold-500/60 hover:bg-white/[0.06]">
                <span className="grid h-12 w-12 place-items-center rounded-xl border border-gold-500/40 text-gold-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                  <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-h3 uppercase tracking-tight text-white transition-colors group-hover:text-gold-500">
                  {titulo}
                </h3>
                <p className="mt-1 eyebrow text-gold-400">{subtitulo}</p>
                <p className="mt-4 text-sm leading-relaxed text-white/70">{texto}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
