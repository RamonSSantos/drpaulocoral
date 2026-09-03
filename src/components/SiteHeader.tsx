import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import logoLight from "@/assets/logo-light.png.asset.json";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { campaign, mensagens, whatsappLink } from "@/config/campaign";

const nav = [
  { label: "Início", to: "/", hash: "topo" },
  { label: "Sobre", to: "/", hash: "sobre" },
  { label: "Plano Parlamentar", to: "/plano-parlamentar" },
  { label: "Contato", to: "/", hash: "faca-parte" },
];

const SECTIONS = ["topo", "sobre", "plano-parlamentar", "compromisso", "faca-parte", "acompanhe"];
const PLANO_SECTIONS = new Set(["plano-parlamentar", "compromisso"]);
const CONTATO_SECTIONS = new Set(["faca-parte", "acompanhe"]);

function useActiveSection() {
  const [activeHash, setActiveHash] = useState("topo");
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratiosRef.current.set(entry.target.id, entry.intersectionRatio);
        });

        let best = "topo";
        let bestRatio = -1;
        ratiosRef.current.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = id;
          }
        });

        setActiveHash(best);
      },
      {
        rootMargin: "-80px 0px -45% 0px",
        threshold: Array.from({ length: 21 }, (_, i) => i / 20),
      }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return activeHash;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeHash = useActiveSection();
  const isPlanoPage = location.pathname === "/plano-parlamentar";
  const isPlanoSection = PLANO_SECTIONS.has(activeHash);
  const activeNavHash = PLANO_SECTIONS.has(activeHash)
    ? "plano-parlamentar"
    : CONTATO_SECTIONS.has(activeHash)
      ? "faca-parte"
      : activeHash;
  const wa = whatsappLink(mensagens.contato);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "relative text-sm font-semibold transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:bg-gold-500 after:transition-[width]";
  const linkInactive = "text-white/85 hover:text-gold-500 after:w-0 hover:after:w-full";
  const linkActive = "text-gold-500 after:w-full";

  const isActive = (item: (typeof nav)[number]) => {
    if (item.to === "/plano-parlamentar") return isPlanoPage || isPlanoSection;
    if (isPlanoPage) return false;
    return activeNavHash === item.hash;
  };

  const sectionClass = (item: (typeof nav)[number]) =>
    `${linkBase} ${isActive(item) ? linkActive : linkInactive}`;

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

        <nav
          aria-label="Principal"
          className="hidden flex-1 items-center justify-between pl-6 md:flex lg:pl-8 xl:pl-16"
        >
          <div className="flex flex-1 items-center justify-evenly gap-2">
            {nav.map((item) => (
              <Link key={item.label} to={item.to} hash={item.hash} className={sectionClass(item)}>
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={wa ?? undefined}
            aria-disabled={!wa}
            target="_blank"
            rel="noopener noreferrer"
            className={`ml-4 inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold-500 px-4 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-gold-400 md:ml-6 lg:ml-8 lg:px-5 xl:ml-12 ${
              wa ? "" : "pointer-events-none opacity-50"
            }`}
          >
            <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 text-white transition-colors hover:border-gold-500 hover:text-gold-500 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div aria-hidden="true" className="h-px w-full bg-white/10" />

      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Menu mobile"
          className="border-b border-white/10 bg-navy-logo px-[clamp(1.25rem,4vw,3rem)] pb-7 pt-2 md:hidden"
        >
          <ul className="flex flex-col divide-y divide-white/10">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className={`block py-4 text-base font-semibold transition-colors ${
                    activeNavHash === item.hash && !isPlanoPage ? "text-gold-500" : "text-white/90"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/plano-parlamentar"
                onClick={() => setOpen(false)}
                className={`block py-4 text-base font-semibold transition-colors ${
                  isPlanoPage || isPlanoSection ? "text-gold-500" : "text-white/90"
                }`}
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
            <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
            Falar no WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
