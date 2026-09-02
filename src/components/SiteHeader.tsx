import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";
import logoLight from "@/assets/logo-light.png.asset.json";
import { campaign, mensagens, whatsappLink } from "@/config/campaign";

const nav = [
  { label: "Início", to: "/", hash: "topo" },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Contato", to: "/", hash: "faca-parte" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const wa = whatsappLink(mensagens.contato);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/80">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" hash="topo" className="flex min-w-0 items-center" aria-label={campaign.nome}>
          <img
            src={logoLight.url}
            alt={`Logotipo ${campaign.nome}`}
            width={220}
            height={110}
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              hash={item.hash}
              className="text-sm font-semibold text-white/85 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/plano-parlamentar"
            className="text-sm font-semibold text-white/85 transition-colors hover:text-gold"
          >
            Plano Parlamentar
          </Link>
          <a
            href={wa ?? undefined}
            aria-disabled={!wa}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy transition-transform hover:scale-[1.03] ${
              wa ? "" : "pointer-events-none opacity-60"
            }`}
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 text-white lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}

        </button>
      </div>

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-t border-white/10 bg-navy px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-white/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/plano-parlamentar"
                onClick={() => setOpen(false)}
                className="block py-3 text-base font-semibold text-white/90"
              >
                Plano Parlamentar
              </Link>
            </li>
            <li className="pt-3">
              <a
                href={wa ?? undefined}
                aria-disabled={!wa}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-base font-bold text-navy ${
                  wa ? "" : "pointer-events-none opacity-60"
                }`}
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
