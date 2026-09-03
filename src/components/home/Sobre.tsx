import { Reveal } from "@/components/Reveal";
import { BrandStar } from "@/components/BrandDecor";
import retrato from "@/assets/paulo-coral-trajetoria-clean.png";

const destaques = [
  { valor: "9", unidade: "anos", texto: "Atuação no SUS e Estratégia Saúde da Família." },
  { valor: "5", unidade: "anos", texto: "Experiência técnica no Detran." },
  {
    valor: "Médico",
    unidade: "",
    texto: "Especialista em Medicina do Tráfego e pós-graduado em Medicina de Família.",
  },
];

const trajetoria = [
  "9 anos de atuação no SUS e na Estratégia Saúde da Família",
  "Atuação na linha de frente durante a pandemia da COVID-19",
  "5 anos de experiência técnica no Detran",
  "Responsável técnico em clínica de tratamento para dependentes químicos",
  "Empreendedor",
  "Ex-vereador de Balneário Piçarras",
];

export function Sobre() {
  return (
    <section id="sobre" className="section-y">
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal className="relative self-start">
          <div
            aria-hidden="true"
            className="absolute -left-3 -top-3 h-28 w-28 rounded-2xl border-2 border-gold-500/60"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-36 w-36 rounded-2xl bg-navy-900/[0.06]"
          />
          <div className="relative overflow-hidden rounded-[1.25rem] bg-navy-900">
            <img
              src={retrato}
              alt="Dr. Paulo Coral"
              width={812}
              height={1039}
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover object-top"
            />
          </div>
          <BrandStar
            aria-hidden="true"
            className="absolute -bottom-4 left-6 h-10 w-10 text-gold-500"
          />
        </Reveal>


        <div>
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-navy-700">
              <span aria-hidden="true" className="h-px w-10 hairline-gold" />
              Trajetória
            </p>
            <h2 className="mt-4 text-h2 text-navy-900">Quem é o Dr. Paulo Coral</h2>
            <p className="mt-5 measure text-body-lg text-muted-foreground">
              Nascido em Joinville e criado em Jaraguá do Sul, Dr. Paulo Coral é médico, formado pela UNISUL, na Grande Florianópolis, especialista em Medicina do Tráfego e pós-graduado em Medicina de Família.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trajetoria.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed text-navy-700">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
              {destaques.map((d) => (
                <div key={d.valor} className="relative pl-4">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1 h-10 w-0.5 rounded bg-gold-500"
                  />
                  <p className="text-[clamp(2.5rem,4vw,3.5rem)] font-black leading-none tracking-tight text-navy-900">
                    {d.valor}
                    {d.unidade ? (
                      <span className="ml-1 text-base font-bold uppercase tracking-wide text-navy-600">
                        {d.unidade}
                      </span>
                    ) : null}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.texto}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
