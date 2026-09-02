import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-light.png.asset.json";
import { campaign } from "@/config/campaign";
import { SocialLinks } from "@/components/SocialLinks";
import { BrandStar } from "@/components/BrandDecor";

export function SiteFooter() {
  return (
    <footer className="relative bg-navy-950 text-white">
      <BrandStar
        aria-hidden="true"
        className="absolute top-4 right-3 h-16 w-16 text-gold-500/75 md:hidden"
      />
      <div className="container-site grid gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr_1fr]">
        <div>
          <img
            src={logoLight.url}
            alt={`Logotipo ${campaign.nome}`}
            width={220}
            height={110}
            loading="lazy"
            className="h-11 w-auto"
          />
          <p className="mt-5 text-sm font-semibold text-white/80">
            Deputado Estadual — <span className="text-gold-500">{campaign.numero}</span>
          </p>
          <p className="mt-1 eyebrow text-white/45">Cuidar. Gerar. Servir.</p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="eyebrow text-white/45">Navegação</h2>
          <span aria-hidden="true" className="mt-3 block h-px w-10 hairline-gold" />
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/" hash="topo" className="text-white/80 hover:text-gold-500">
                Início
              </Link>
            </li>
            <li>
              <Link to="/" hash="sobre" className="text-white/80 hover:text-gold-500">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/plano-parlamentar" className="text-white/80 hover:text-gold-500">
                Plano Parlamentar
              </Link>
            </li>
            <li>
              <Link to="/" hash="faca-parte" className="text-white/80 hover:text-gold-500">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="eyebrow text-white/45">Redes</h2>
          <span aria-hidden="true" className="mt-3 block h-px w-10 hairline-gold" />
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site py-6 text-xs leading-relaxed text-white/50">
          {campaign.legalInformation || "Informações eleitorais obrigatórias em breve."}
        </div>
      </div>
    </footer>
  );
}
