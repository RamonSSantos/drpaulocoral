import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const eixos = [
  {
    numero: "01",
    titulo: "Saúde",
    texto:
      "Redução das filas, atenção primária, saúde mental, prevenção e valorização dos profissionais.",
    propostas: 5,
  },
  {
    numero: "02",
    titulo: "Empreendedorismo",
    texto: "Desburocratização, acesso ao crédito, educação empreendedora e inovação.",
    propostas: 4,
  },
  {
    numero: "03",
    titulo: "O Trabalhador Honesto",
    texto: "Geração de emprego e renda, qualificação profissional e primeiro emprego.",
    propostas: 3,
  },
  {
    numero: "04",
    titulo: "Política Limpa",
    texto: "Transparência das emendas, eficiência dos gastos e mandato aberto.",
    propostas: 3,
  },
];

export function PlanoResumo() {
  return (
    <section id="plano" className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Plano Parlamentar
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Conheça as principais propostas que orientam o plano de ação parlamentar de Dr. Paulo
            Coral.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {eixos.map((e, i) => (
            <Reveal key={e.numero} delay={i * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md">
                <p className="text-sm font-extrabold tracking-widest text-gold">{e.numero}</p>
                <h3 className="mt-2 text-xl font-bold text-navy">{e.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
                <p className="mt-5 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy">
                  {e.propostas} propostas
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between">
            <p className="text-lg font-bold">Conheça todas as propostas</p>
            <Link
              to="/plano-parlamentar"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3.5 text-base font-bold text-navy transition-transform hover:scale-[1.03]"
            >
              Acessar Plano Parlamentar
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
