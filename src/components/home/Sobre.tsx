import { Reveal } from "@/components/Reveal";

const destaques = [
  { valor: "9 anos", texto: "Atuação no SUS e Estratégia Saúde da Família." },
  { valor: "5 anos", texto: "Experiência técnica no Detran." },
  {
    valor: "Médico",
    texto: "Especialista em Medicina do Tráfego e pós-graduado em Medicina de Família.",
  },
];

const trajetoria = [
  "9 anos de atuação no SUS e na Estratégia Saúde da Família",
  "Atuação na linha de frente durante a pandemia da COVID-19",
  "5 anos de experiência técnica no Detran",
  "Responsável técnico em clínica de tratamento para dependentes químicos",
  "Experiência como empreendedor",
  "Experiência como vereador",
];

export function Sobre() {
  return (
    <section id="sobre" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Quem é Dr. Paulo Coral
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Dr. Paulo Coral é natural de Joinville, médico, especialista em Medicina do Tráfego e
            pós-graduado em Medicina de Família.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <ul className="space-y-3">
              {trajetoria.map((item) => (
                <li key={item} className="flex gap-3 text-base text-foreground">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gold"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {destaques.map((d, i) => (
              <Reveal key={d.valor} delay={i * 80}>
                <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <p className="text-2xl font-extrabold uppercase tracking-tight text-navy">
                    {d.valor}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
