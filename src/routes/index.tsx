import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/home/Hero";
import { VideoSection } from "@/components/home/VideoSection";
import { Sobre } from "@/components/home/Sobre";
import { LiderancasApoios } from "@/components/home/LiderancasApoios";
import { Principios } from "@/components/home/Principios";
import { PlanoResumo } from "@/components/home/PlanoResumo";
import { Compromisso } from "@/components/home/Compromisso";
import { FacaParte } from "@/components/home/FacaParte";
import { Acompanhe } from "@/components/home/Acompanhe";

const siteUrl = "https://drpaulocoral.com.br";
const ogImage = `${siteUrl}/og-campanha.jpg`;

const title =
  "Paulo Coral 10555 | Deputado Estadual por Santa Catarina";
const description =
  "Paulo Coral é candidato a Deputado Estadual por Santa Catarina — 10555. Médico, ex-vereador e empreendedor, apresenta propostas para Saúde, Emprego, Educação e Segurança. Acesse o Plano Parlamentar e faça parte da campanha.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "keywords", content: "Paulo Coral, Deputado Estadual por Santa Catarina, Paulo Coral 10555, candidato Deputado Estadual SC, Dr. Paulo Coral, Plano Parlamentar Santa Catarina, Paulo Coral Santa Catarina" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${siteUrl}/` },
      { property: "og:image", content: ogImage },
      { property: "og:image:secure_url", content: ogImage },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Paulo Coral 10555 — Deputado Estadual por Santa Catarina" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:image:alt", content: "Paulo Coral 10555 — Deputado Estadual por Santa Catarina" },
      { name: "geo.region", content: "BR-SC" },
      { name: "geo.placename", content: "Santa Catarina" },
    ],
    links: [{ rel: "canonical", href: `${siteUrl}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Paulo Coral",
          jobTitle: "Candidato a Deputado Estadual por Santa Catarina",
          description,
          url: `${siteUrl}/`,
          image: ogImage,
          address: {
            "@type": "PostalAddress",
            addressRegion: "SC",
            addressCountry: "BR",
          },
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VideoSection />
        <Sobre />
        <LiderancasApoios />
        <Principios />
        <PlanoResumo />
        <Compromisso />
        <FacaParte />
        <Acompanhe />
      </main>
      <SiteFooter />
      <WhatsAppFloat />
    </>
  );
}
