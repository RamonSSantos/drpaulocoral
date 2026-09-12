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
import { campaign } from "@/config/campaign";

const siteUrl = "https://drpaulocoral.com.br";
const ogImage = `${siteUrl}/og-campanha.jpg`;

const title =
  "Dr. Paulo Coral 10555 | Deputado Estadual por Santa Catarina";
const description =
  "Conheça Dr. Paulo Coral, candidato a Deputado Estadual por Santa Catarina — 10555. Médico, ex-vereador e empreendedor, apresenta propostas para Saúde, Emprego, Educação e Segurança. Acesse o Plano Parlamentar e faça parte da campanha por Santa Catarina.";

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
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${siteUrl}/#website`,
              url: `${siteUrl}/`,
              name: "Dr. Paulo Coral 10555",
              inLanguage: "pt-BR",
              publisher: { "@id": `${siteUrl}/#person` },
            },
            {
              "@type": "WebPage",
              "@id": `${siteUrl}/#webpage`,
              url: `${siteUrl}/`,
              name: title,
              description,
              inLanguage: "pt-BR",
              isPartOf: { "@id": `${siteUrl}/#website` },
              about: { "@id": `${siteUrl}/#person` },
              primaryImageOfPage: { "@id": `${siteUrl}/#ogimage` },
            },
            {
              "@type": "ImageObject",
              "@id": `${siteUrl}/#ogimage`,
              url: ogImage,
              width: 1200,
              height: 630,
              caption:
                "Paulo Coral 10555 — Deputado Estadual por Santa Catarina",
            },
            {
              "@type": "Person",
              additionalType: "https://www.wikidata.org/wiki/Q618536",
              "@id": `${siteUrl}/#person`,
              name: "Dr. Paulo Coral",
              alternateName: ["Paulo Coral", "Paulo Coral 10555"],
              honorificPrefix: "Dr.",
              jobTitle: "Candidato a Deputado Estadual por Santa Catarina",
              description,
              url: `${siteUrl}/`,
              image: { "@id": `${siteUrl}/#ogimage` },
              identifier: {
                "@type": "PropertyValue",
                name: "Número na urna",
                value: campaign.numero,
              },
              hasOccupation: [
                {
                  "@type": "Occupation",
                  name: "Médico",
                  occupationalCategory: "Medicina do Tráfego e Medicina de Família",
                },
                {
                  "@type": "Role",
                  roleName: "Candidato a Deputado Estadual",
                  startDate: "2026",
                },
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "UNISUL — Universidade do Sul de Santa Catarina",
              },
              birthPlace: {
                "@type": "Place",
                name: "Joinville, Santa Catarina",
              },
              homeLocation: {
                "@type": "Place",
                name: "Jaraguá do Sul, Santa Catarina",
              },
              knowsLanguage: "pt-BR",
              knowsAbout: [
                "Saúde pública",
                "Medicina do Tráfego",
                "Empreendedorismo",
                "Política de Santa Catarina",
              ],
              affiliation: { "@id": `${siteUrl}/#partido` },
              memberOf: { "@id": `${siteUrl}/#partido` },
              worksFor: { "@id": `${siteUrl}/#campanha` },
              address: {
                "@type": "PostalAddress",
                addressRegion: "SC",
                addressCountry: "BR",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Santa Catarina",
              },
              sameAs: [
                campaign.social.instagram,
                campaign.social.facebook,
                campaign.social.threads,
              ].filter(Boolean),
            },
            {
              "@type": "PoliticalParty",
              "@id": `${siteUrl}/#partido`,
              name: "Republicanos",
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Santa Catarina",
              },
            },
            {
              "@type": "Organization",
              "@id": `${siteUrl}/#campanha`,
              name: "Campanha Dr. Paulo Coral 10555",
              legalName: "Campanha Dr. Paulo Coral — Deputado Estadual",
              description:
                "Campanha de Dr. Paulo Coral, candidato a Deputado Estadual por Santa Catarina pelo número 10555.",
              url: `${siteUrl}/`,
              logo: ogImage,
              image: { "@id": `${siteUrl}/#ogimage` },
              taxID: campaign.legalInformation.replace("CNPJ: ", ""),
              founder: { "@id": `${siteUrl}/#person` },
              member: { "@id": `${siteUrl}/#person` },
              parentOrganization: { "@id": `${siteUrl}/#partido` },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Santa Catarina",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Fale com a campanha",
                telephone: `+${campaign.whatsappNumber}`,
                availableLanguage: "pt-BR",
                areaServed: "BR",
                url: campaign.social.whatsapp,
              },
              sameAs: [
                campaign.social.instagram,
                campaign.social.facebook,
                campaign.social.threads,
              ].filter(Boolean),
            },
          ],
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
