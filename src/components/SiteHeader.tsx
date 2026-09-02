import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import logoLight from "@/assets/logo-light.png.asset.json";
import { campaign, mensagens, whatsappLink } from "@/config/campaign";

const nav = [
  { label: "Início", to: "/", hash: "topo" },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Contato", to: "/", hash: "faca-parte" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const wa = whatsappLink(mensagens.contato);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass =
    "relative text-sm font-semibold text-white/85 transition-colors hover:text-gold-500 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-gold-500 after:transition-[width] hover:after:w-full";

  return (
    <header
      className={`sticky top-0 z-50 bg-navy-logo transition-[height,box-shadow] duration-300 ${
        scrolled ? "shadow-[0_6px_24px_rgba(0,16,47,0.35)]" : ""
      }`}
    >
      <div
        className={`container-site flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-[72px]" : "h-[84px]"
        }`}
      >
        <Link to="/" hash="topo" className="flex min-w-0 items-center" aria-label={campaign.nome}>
          <img
            src={logoLight.url}
            alt={`Logotipo ${campaign.nome}`}
            width={220}
            height={110}
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-9" : "h-11"}`}
          />
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {nav.map((item) => (
            <Link key={item.label} to={item.to} hash={item.hash} className={linkClass}>
              {item.label}
            </Link>
          ))}
          <Link to="/plano-parlamentar" className={linkClass}>
            Plano Parlamentar
          </Link>
          <a
            href={wa ?? undefined}
            aria-disabled={!wa}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-xl bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-gold-400 ${
              wa ? "" : "pointer-events-none opacity-50"
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
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:border-gold-500 hover:text-gold-500 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div aria-hidden="true" className="h-px w-full bg-white/10" />

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-b border-white/10 bg-navy-logo px-[clamp(1.25rem,4vw,3rem)] pb-7 pt-2 lg:hidden"
        >
          <ul className="flex flex-col divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="block py-4 text-base font-semibold text-white/90"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/plano-parlamentar"
                onClick={() => setOpen(false)}
                className="block py-4 text-base font-semibold text-white/90"
              >
                Plano Parlamentar
              </Link>
            </li>
          </ul>
          <a
            href={wa ?? undefined}
            aria-disabled={!wa}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-5 py-3.5 text-base font-bold text-navy-900 ${
              wa ? "" : "pointer-events-none opacity-50"
            }`}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
