import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { campaign } from "@/config/campaign";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { Check } from "lucide-react";
import trajetoriaClean from "@/assets/paulo-coral-trajetoria-clean.png";

const benefits = [
  "CONTEÚDOS EXCLUSIVOS",
  "INFORMAÇÕES EM PRIMEIRA MÃO",
  "PARTICIPE DESSE MOVIMENTO POR SANTA CATARINA",
];

export function Acompanhe() {
  return (
    <section id="acompanhe" className="section-y overflow-hidden">
      <div className="container-site">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-500/20 via-gold-500/5 to-transparent"
              />
              <img
                src={trajetoriaClean}
                alt="Dr. Paulo Coral"
                width={600}
                height={700}
                loading="lazy"
                className="relative z-10 h-auto w-full rounded-3xl object-cover shadow-card"
              />
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="eyebrow flex items-center gap-3 text-navy-700">
              <span aria-hidden="true" className="h-px w-10 hairline-gold" />
              Canais oficiais
            </p>

            <h2 className="mt-4 text-h1 font-black uppercase leading-[0.95] text-navy-900">
              Entre no nosso grupo oficial de{" "}
              <span className="text-whatsapp">Whatsapp</span>
            </h2>

            <p className="mt-6 text-body-lg text-muted-foreground">
              No grupo, você acompanha de perto as{" "}
              <strong className="text-navy-900">propostas, projetos, agenda</strong>{" "}
              e todas as{" "}
              <strong className="text-navy-900">informações</strong> da campanha.
            </p>

            <ul className="mt-8 space-y-4">
              {benefits.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm font-extrabold uppercase tracking-wide text-navy-900"
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-900 text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {item.includes("SANTA CATARINA") ? (
                    <span>
                      {item.replace("SANTA CATARINA", "").trim()}{" "}
                      <span className="whitespace-nowrap font-black text-navy-900 underline decoration-2 underline-offset-4">SANTA CATARINA</span>
                    </span>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>

            {campaign.social.whatsappGrupo && (
              <a
                href={campaign.social.whatsappGrupo}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-14 items-center gap-3 rounded-xl bg-whatsapp px-7 font-extrabold text-white shadow-card transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-whatsapp focus-visible:ring-offset-2"
              >
                <WhatsAppIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
                Entrar no grupo oficial
              </a>
            )}
          </Reveal>
        </div>

        <Reveal delay={120} className="mt-16 lg:mt-24">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8 lg:p-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow text-navy-700">SIGA NAS REDES SOCIAIS</p>
                <h3 className="mt-2 text-h3 text-navy-900">Acompanhe o Dr. Paulo Coral</h3>
              </div>
              <p className="max-w-md text-body-lg text-muted-foreground">
                Fique por dentro das informações da campanha nos canais oficiais.
              </p>
            </div>
            <SocialLinks variant="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
