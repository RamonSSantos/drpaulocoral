import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { Hero } from "@/components/home/Hero";
import { VideoSection } from "@/components/home/VideoSection";
import { Sobre } from "@/components/home/Sobre";
import { Principios } from "@/components/home/Principios";
import { PlanoResumo } from "@/components/home/PlanoResumo";
import { Compromisso } from "@/components/home/Compromisso";
import { FacaParte } from "@/components/home/FacaParte";
import { Acompanhe } from "@/components/home/Acompanhe";

const title = "Dr. Paulo Coral | Candidato a Deputado Estadual por Santa Catarina";
const description =
  "Conheça Dr. Paulo Coral, médico e ex-vereador, candidato a Deputado Estadual por Santa Catarina. Conheça sua trajetória, compromissos e plano parlamentar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Dr. Paulo Coral",
          jobTitle: "Candidato a Deputado Estadual por Santa Catarina",
          description,
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
