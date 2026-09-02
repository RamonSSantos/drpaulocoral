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
        <section className="bg-navy py-16 text-white sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Plano <span className="text-gold">Parlamentar</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80">
              Quatro eixos orientam o plano de ação parlamentar de Dr. Paulo Coral.
            </p>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-2">
            {eixos.map((e) => (
              <article
                key={e.numero}
                className="rounded-2xl border border-border bg-card p-8 shadow-sm"
              >
                <p className="text-sm font-extrabold tracking-widest text-gold">{e.numero}</p>
                <h2 className="mt-2 text-2xl font-bold text-navy">{e.titulo}</h2>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{e.texto}</p>
                <p className="mt-5 inline-flex rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-navy">
                  {e.propostas} propostas
                </p>
                <p className="mt-5 text-sm text-muted-foreground">
                  Detalhamento das propostas em breve.
                </p>
              </article>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-6xl px-4 sm:px-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-base font-bold text-navy hover:text-navy-2"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
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
