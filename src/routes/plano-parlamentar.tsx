import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { eixos } from "@/components/home/PlanoResumo";

const title = "Plano Parlamentar | Dr. Paulo Coral — 10555";
const description =
  "Os eixos do plano parlamentar de Dr. Paulo Coral: Saúde, Empreendedorismo, O Trabalhador Honesto e Política Limpa.";

export const Route = createFileRoute("/plano-parlamentar")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/plano-parlamentar" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/plano-parlamentar" }],
  }),
  component: PlanoParlamentar,
});

function PlanoParlamentar() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden bg-navy-900 py-16 text-white sm:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
          />
          <div className="container-site relative">
            <p className="eyebrow flex items-center gap-3 text-gold-400">
              <span aria-hidden="true" className="h-px w-10 hairline-gold" />
              15 propostas • 4 eixos
            </p>
            <h1 className="mt-4 text-h1">
              Plano <span className="text-gold-500">Parlamentar</span>
            </h1>
            <p className="mt-4 measure text-body-lg text-white/75">
              Quatro eixos orientam o plano de ação parlamentar de Dr. Paulo Coral.
            </p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-site grid gap-6 lg:grid-cols-2">
            {eixos.map((e) => (
              <article
                key={e.numero}
                className="rounded-[1.25rem] border border-border bg-card p-8"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-black tracking-tight text-navy-900/15">
                    {e.numero}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-500">
                    <e.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <h2 className="mt-6 text-h3 uppercase tracking-tight text-navy-900">{e.titulo}</h2>
                <p className="mt-2 text-base font-semibold text-navy-700">{e.resumo}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.texto}</p>
                <p className="mt-6 inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-bold text-navy-900">
                  {e.propostas} propostas
                </p>
                <p className="mt-5 text-sm text-muted-foreground">
                  Detalhamento das propostas em breve.
                </p>
              </article>
            ))}
          </div>

          <div className="container-site mt-12">
            <Link
              to="/"
              className="group inline-flex items-center gap-2 text-base font-bold text-navy-900 hover:text-gold-600"
            >
              <ArrowLeft
                className="h-5 w-5 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Voltar para a página inicial
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
