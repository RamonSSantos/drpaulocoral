import { Link } from "@tanstack/react-router";
import logoLight from "@/assets/logo-light.png.asset.json";
import { campaign } from "@/config/campaign";
import { SocialLinks } from "@/components/SocialLinks";

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <img
            src={logoLight.url}
            alt={`Logotipo ${campaign.nome}`}
            width={220}
            height={110}
            loading="lazy"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm text-white/70">{campaign.cargo}</p>
          <p className="mt-3 text-3xl font-extrabold tracking-tight text-gold">
            {campaign.numero}
          </p>
        </div>

        <nav aria-label="Rodapé">
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/60">Navegação</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/" hash="topo" className="text-white/85 hover:text-gold">
                Início
              </Link>
            </li>
            <li>
              <Link to="/" hash="sobre" className="text-white/85 hover:text-gold">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/plano-parlamentar" className="text-white/85 hover:text-gold">
                Plano Parlamentar
              </Link>
            </li>
            <li>
              <Link to="/" hash="faca-parte" className="text-white/85 hover:text-gold">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white/60">Redes</h2>
          <div className="mt-4">
            <SocialLinks />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs leading-relaxed text-white/55 sm:px-6">
          {campaign.legalInformation || "Informações eleitorais obrigatórias em breve."}
        </div>
      </div>
    </footer>
  );
}
