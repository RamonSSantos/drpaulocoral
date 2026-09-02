import { Link } from "@tanstack/react-router";
import { ArrowRight, HandHeart, HardHat, Rocket, Stethoscope } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { DecorLight } from "@/components/BrandDecor";

export const eixos = [
  {
    numero: "01",
    Icon: Stethoscope,
    titulo: "Saúde",
    resumo: "O braço forte do nosso mandato.",
    texto:
      "Redução das filas, atenção primária, saúde mental, prevenção e valorização dos profissionais.",
    propostas: 5,
  },
  {
    numero: "02",
    Icon: Rocket,
    titulo: "Empreendedorismo",
    resumo: "Menos burocracia. Mais oportunidades.",
    texto: "Desburocratização, acesso ao crédito, educação empreendedora e inovação.",
    propostas: 4,
  },
  {
    numero: "03",
    Icon: HardHat,
    titulo: "O Trabalhador Honesto",
    resumo: "Trabalho, produção e responsabilidade.",
    texto: "Geração de emprego e renda, qualificação profissional e primeiro emprego.",
    propostas: 3,
  },
  {
    numero: "04",
    Icon: HandHeart,
    titulo: "Política Limpa",
    resumo: "Transparência e responsabilidade.",
    texto: "Transparência das emendas, eficiência dos gastos e mandato aberto.",
    propostas: 3,
  },
];

export function PlanoResumo() {
  return (
    <section id="plano" className="relative isolate section-y overflow-hidden bg-neutral-50/60">
      <DecorLight />
      <div className="container-site relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-navy-700">
              <span aria-hidden="true" className="h-px w-10 hairline-gold" />
              Plano Parlamentar
            </p>
            <h2 className="mt-4 text-h2 text-navy-900">
              Um plano para cuidar, gerar e servir.
            </h2>
            <p className="mt-4 measure text-body-lg text-muted-foreground">
              Conheça as principais propostas que orientam o plano de ação parlamentar de Dr. Paulo
              Coral.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <dl className="flex gap-10 lg:justify-end">
              <div>
                <dt className="sr-only">Propostas</dt>
                <dd className="text-[clamp(2.75rem,5vw,4rem)] font-black leading-none tracking-tight text-navy-900">
                  15
                </dd>
                <p className="mt-2 eyebrow text-navy-600">Propostas</p>
              </div>
              <span aria-hidden="true" className="w-px self-stretch bg-border" />
              <div>
                <dt className="sr-only">Eixos</dt>
                <dd className="text-[clamp(2.75rem,5vw,4rem)] font-black leading-none tracking-tight text-gold-600">
                  4
                </dd>
                <p className="mt-2 eyebrow text-navy-600">Eixos</p>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {eixos.map((e, i) => (
            <Reveal key={e.numero} delay={i * 80}>
              <Link
                to="/plano-parlamentar"
                className="group flex h-full flex-col rounded-[1.25rem] border border-border bg-card p-8 transition-[border-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:border-gold-500"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-black tracking-tight text-navy-900/15">
                    {e.numero}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-500 transition-transform duration-300 group-hover:-translate-y-0.5">
                    <e.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-6 text-h3 uppercase tracking-tight text-navy-900">{e.titulo}</h3>
                <p className="mt-2 text-base font-semibold text-navy-700">{e.resumo}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
                  {e.propostas} propostas
                  <ArrowRight
                    className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="relative isolate mt-12 flex flex-col items-start gap-6 overflow-hidden rounded-[1.25rem] bg-navy-900 p-9 text-white sm:flex-row sm:items-center sm:justify-between">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl"
            />
            <p className="relative text-h3">Conheça todas as propostas</p>
            <Link
              to="/plano-parlamentar"
              className="group relative inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-4 text-base font-bold text-navy-900 transition-colors hover:bg-gold-400 sm:w-auto"
            >
              Acessar Plano Parlamentar
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
