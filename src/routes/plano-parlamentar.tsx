import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, LineChart } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Reveal } from "@/components/Reveal";
import { BrandStar, DecorDark, DecorLight } from "@/components/BrandDecor";
import { campaign, mensagens, whatsappLink } from "@/config/campaign";
import { compromissosPlano, eixosPlano, pilares } from "@/data/plano";
import heroFoto from "@/assets/paulo-coral-foto.png.asset.json";
import retrato from "@/assets/paulo-coral-trajetoria.png.asset.json";

const title = "Plano Parlamentar | Dr. Paulo Coral — Deputado Estadual 10555";
const description =
  "Conheça o Plano de Ação Parlamentar do Dr. Paulo Coral, candidato a Deputado Estadual por Santa Catarina. Cuidar, Gerar e Servir com propostas para saúde, trabalho, empreendedorismo e política limpa.";

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

const bandeiras = eixosPlano.map((e) => ({
  numero: e.numero,
  Icon: e.Icon,
  titulo: e.titulo,
  chamada: e.chamada,
  propostas: e.propostas.length,
  id: e.id,
}));

const destaques = [
  { valor: "9 anos", texto: "Atuação no SUS e Estratégia Saúde da Família" },
  { valor: "5 anos", texto: "Experiência técnica no Detran" },
  { valor: "Médico", texto: "Especialista em Medicina do Tráfego" },
];

function PlanoParlamentar() {
  const whatsapp = whatsappLink(mensagens.contato) ?? campaign.social.whatsapp;

  return (
    <>
      <SiteHeader />
      <main>
        {/* ---------------- Hero ---------------- */}
        <section className="relative isolate overflow-hidden bg-navy-900 text-white">
          <DecorDark />
          <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full hairline-gold" />

          <div className="container-site relative grid items-end gap-10 pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20">
            <div className="pb-12 lg:pb-24">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/45 bg-white/[0.04] px-4 py-1.5 eyebrow text-gold-400">
                <BrandStar className="h-3 w-3" />
                Plano de ação parlamentar
              </p>

              <h1 className="mt-6 text-display uppercase">
                Cuidar. Gerar. <span className="text-gold-500">Servir.</span>
              </h1>

              <p className="mt-6 measure text-body-lg text-white/80">
                Um plano de ação para um mandato presente, responsável e comprometido com o futuro
                de Santa Catarina.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <span aria-hidden="true" className="h-16 w-1.5 rounded-full bg-gold-500 sm:h-20" />
                <div>
                  <span className="block text-h3 font-bold">{campaign.nome}</span>
                  <span className="block text-sm font-semibold uppercase tracking-wide text-white/60">
                    Deputado Estadual —{" "}
                    <span className="text-gold-500">{campaign.numero}</span>
                  </span>
                </div>
              </div>

              <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
                <div>
                  <dt className="eyebrow text-white/50">Propostas</dt>
                  <dd className="text-3xl font-black tracking-tight text-gold-500">15</dd>
                </div>
                <span aria-hidden="true" className="w-px self-stretch bg-white/15" />
                <div>
                  <dt className="eyebrow text-white/50">Eixos</dt>
                  <dd className="text-3xl font-black tracking-tight text-gold-500">4</dd>
                </div>
              </dl>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              {/* [IMAGEM_HERO_PLANO_PARLAMENTAR] — substituir quando a foto final for enviada */}
              <img
                src={heroFoto.url}
                alt="Dr. Paulo Coral, médico, com estetoscópio"
                width={848}
                height={1264}
                fetchPriority="high"
                decoding="async"
                className="relative z-10 w-[min(100%,26rem)] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* ---------------- Introdução ---------------- */}
        <section className="section-y">
          <div className="container-site grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-navy-700">
                <span aria-hidden="true" className="h-px w-10 hairline-gold" />
                Introdução
              </p>
              <h2 className="mt-4 text-h2 text-navy-900">Um plano para Santa Catarina</h2>
              <p className="mt-5 measure text-body-lg text-muted-foreground">
                Este plano apresenta as principais bandeiras e compromissos que irão orientar nossa
                atuação na Assembleia Legislativa de Santa Catarina.
              </p>
              <p className="mt-4 measure text-base leading-relaxed text-muted-foreground">
                São propostas construídas a partir da experiência na saúde, no serviço público, no
                empreendedorismo e na vida pública, com foco em resultados que possam ser
                acompanhados pela população.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <ul className="grid gap-4">
                {pilares.map((p) => (
                  <li
                    key={p.chave}
                    className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-navy-900 text-gold-500">
                      <p.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                    </span>
                    <div>
                      <p className="eyebrow text-navy-900">{p.chave}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {p.titulo}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ---------------- Cuidar. Gerar. Servir. ---------------- */}
        <section className="relative isolate section-y overflow-hidden bg-neutral-50/60">
          <DecorLight />
          <div className="container-site relative">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-navy-700">
                <span aria-hidden="true" className="h-px w-10 hairline-gold" />
                Os três pilares
              </p>
              <h2 className="mt-4 text-h2 text-navy-900">Cuidar. Gerar. Servir.</h2>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pilares.map((p, i) => (
                <Reveal key={p.numero} delay={i * 80}>
                  <article
                    className="flex h-full flex-col rounded-[1.25rem] border border-border bg-card p-8 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-gold-500"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-2xl font-black tracking-tight text-navy-900/15">
                        {p.numero}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-500">
                        <p.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-h3 uppercase tracking-tight text-navy-900">
                      {p.chave}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-navy-700">{p.titulo}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Quem é Dr. Paulo Coral ---------------- */}
        <section className="section-y">
          <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <Reveal className="relative self-start">
              <div className="relative overflow-hidden rounded-[1.25rem] bg-navy-900">
                <img
                  src={retrato.url}
                  alt="Retrato de Dr. Paulo Coral"
                  width={812}
                  height={1039}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
              </div>
            </Reveal>

            <div>
              <Reveal>
                <p className="eyebrow flex items-center gap-3 text-navy-700">
                  <span aria-hidden="true" className="h-px w-10 hairline-gold" />
                  Experiência
                </p>
                <h2 className="mt-4 text-h2 text-navy-900">Quem é Dr. Paulo Coral</h2>
                <div className="mt-5 measure space-y-4 text-base leading-relaxed text-muted-foreground">
                  <p>
                    Natural de Joinville, Dr. Paulo Coral é médico, especialista em Medicina do
                    Tráfego e pós-graduado em Medicina de Família.
                  </p>
                  <p>
                    Atuou por 9 anos no SUS e na Estratégia Saúde da Família, esteve na linha de
                    frente durante a pandemia da COVID-19 em Joinville e possui 5 anos de
                    experiência técnica no Detran.
                  </p>
                  <p>
                    Também atuou como responsável técnico em clínica de tratamento para dependência
                    química, possui experiência empresarial e exerceu mandato como vereador em
                    Balneário Piçarras.
                  </p>
                  <p>
                    Essa experiência forma a base de um projeto de mandato voltado à saúde, à
                    eficiência da gestão, ao trabalho e ao desenvolvimento de Santa Catarina.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-10 grid gap-6 border-t border-border pt-8 sm:grid-cols-3">
                  {destaques.map((d) => (
                    <div key={d.valor} className="relative pl-4">
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-1 h-10 w-0.5 rounded bg-gold-500"
                      />
                      <p className="text-[clamp(1.75rem,3vw,2.5rem)] font-black leading-none tracking-tight text-navy-900">
                        {d.valor}
                      </p>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {d.texto}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- Nossas principais bandeiras ---------------- */}
        <section className="relative isolate section-y overflow-hidden bg-neutral-50/60">
          <div className="container-site relative">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-navy-700">
                <span aria-hidden="true" className="h-px w-10 hairline-gold" />
                Bandeiras
              </p>
              <h2 className="mt-4 text-h2 text-navy-900">Nossas principais bandeiras</h2>
              <p className="mt-4 measure text-body-lg text-muted-foreground">
                Quatro áreas prioritárias para transformar experiência em ações e resultados.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {bandeiras.map((b, i) => (
                <Reveal key={b.numero} delay={i * 80}>
                  <a
                    href={`#${b.id}`}
                    className="group flex h-full flex-col rounded-[1.25rem] border border-border bg-card p-8 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-gold-500"
                    style={{ boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="text-2xl font-black tracking-tight text-navy-900/15">
                        {b.numero}
                      </span>
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy-900 text-gold-500 transition-transform duration-200 group-hover:-translate-y-0.5">
                        <b.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-6 text-h3 uppercase tracking-tight text-navy-900">
                      {b.titulo}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {b.chamada}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900">
                      {b.propostas} propostas
                      <ArrowRight
                        className="h-4 w-4 text-gold-600 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Eixos ---------------- */}
        {eixosPlano.map((eixo, idx) => (
          <section
            key={eixo.id}
            id={eixo.id}
            className={`section-y scroll-mt-24 ${idx % 2 === 1 ? "bg-neutral-50/60" : ""}`}
          >
            <div className="container-site">
              <Reveal>
                <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="eyebrow flex items-center gap-3 text-navy-700">
                      <span aria-hidden="true" className="h-px w-10 hairline-gold" />
                      Eixo {eixo.numero}
                    </p>
                    <h2 className="mt-4 text-h2 text-navy-900">{eixo.titulo}</h2>
                  </div>
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-navy-900 text-gold-500">
                    <eixo.Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <p className="mt-8 measure text-body-lg text-muted-foreground">{eixo.intro}</p>
              </Reveal>

              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {eixo.propostas.map((p, i) => (
                  <Reveal key={p.numero} delay={i * 60}>
                    <article
                      className="flex h-full flex-col rounded-[1.25rem] border border-border bg-card p-7 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-gold-500"
                      style={{ boxShadow: "var(--shadow-card)" }}
                    >
                      <div className="flex items-center gap-4">
                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-neutral-100 text-navy-900">
                          <p.Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                        </span>
                        <div>
                          <span className="eyebrow text-gold-600">Proposta {p.numero}</span>
                          <h3 className="text-lg font-bold leading-snug text-navy-900">
                            {p.titulo}
                          </h3>
                        </div>
                      </div>

                      {p.objetivo ? (
                        <p className="mt-5 rounded-xl bg-neutral-50 p-4 text-sm leading-relaxed text-navy-700">
                          <span className="font-bold uppercase tracking-wide">Objetivo: </span>
                          {p.objetivo}
                        </p>
                      ) : null}

                      <ul className="mt-5 grid gap-3">
                        {p.acoes.map((a) => (
                          <li
                            key={a}
                            className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                          >
                            <Check
                              className="mt-0.5 h-4 w-4 shrink-0 text-gold-600"
                              strokeWidth={2.4}
                              aria-hidden="true"
                            />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                ))}
              </div>

              <Reveal delay={80}>
                <div className="mt-10 rounded-[1.25rem] border border-border bg-card p-7">
                  <p className="flex items-center gap-3 eyebrow text-navy-700">
                    <LineChart className="h-4 w-4 text-gold-600" aria-hidden="true" />
                    Indicadores de acompanhamento
                  </p>
                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {eixo.indicadores.map((ind) => (
                      <li
                        key={ind}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500"
                        />
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </section>
        ))}

        {/* ---------------- Nosso compromisso ---------------- */}
        <section className="section-y">
          <div className="container-site">
            <Reveal>
              <p className="eyebrow flex items-center gap-3 text-navy-700">
                <span aria-hidden="true" className="h-px w-10 hairline-gold" />
                Nosso compromisso
              </p>
              <h2 className="mt-4 measure text-h2 text-navy-900">
                Um mandato que pode ser acompanhado e cobrado.
              </h2>
              <p className="mt-5 measure text-body-lg text-muted-foreground">
                As propostas deste plano não devem ficar apenas no papel. Nosso compromisso é
                estabelecer indicadores, acompanhar resultados e prestar contas à população sobre
                aquilo que foi proposto e realizado.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {compromissosPlano.map((c, i) => (
                <Reveal key={c.numero} delay={i * 70}>
                  <div className="border-t border-border pt-6">
                    <p className="text-[clamp(2.25rem,3.5vw,3rem)] font-black leading-none tracking-tight text-gold-500">
                      {c.numero}
                    </p>
                    <h3 className="mt-4 eyebrow text-navy-600">{c.area}</h3>
                    <p className="mt-2 text-h3 text-navy-900">{c.texto}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Encerramento ---------------- */}
        <section className="relative isolate overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
          <DecorDark />
          <div className="container-site relative text-center">
            <Reveal>
              <BrandStar className="mx-auto h-12 w-12 text-gold-500" />
              <h2 className="mt-8 text-h1 uppercase">
                Cuidar. Gerar. <span className="text-gold-500">Servir.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-body-lg text-white/80">
                Um mandato construído com experiência na saúde, respeito por quem trabalha e
                empreende e responsabilidade com o dinheiro público.
              </p>

              <div className="mt-10">
                <p className="text-h3 font-bold">{campaign.nome}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-white/70">
                  Deputado Estadual — <span className="text-gold-500">{campaign.numero}</span> ·
                  Republicanos
                </p>
              </div>

              <p className="mt-10 text-h2 font-black uppercase text-gold-500">
                Santa Catarina cada vez melhor!
              </p>

              <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
                {whatsapp ? (
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-lg font-bold text-navy-900 transition-[background-color,transform] hover:-translate-y-0.5 hover:bg-gold-400 sm:w-auto"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Conheça o projeto e faça parte
                  </a>
                ) : null}
                <Link
                  to="/"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 px-8 py-4 text-base font-bold text-white transition-colors hover:border-gold-500 hover:text-gold-500 sm:w-auto"
                >
                  Voltar para a página inicial
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
