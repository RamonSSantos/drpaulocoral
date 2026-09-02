import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import foto from "@/assets/paulo-coral-foto.png.asset.json";
import { campaign } from "@/config/campaign";
import { BrandStar, DecorDark } from "@/components/BrandDecor";

export function Hero() {
  return (
    <section id="topo" className="relative isolate overflow-hidden bg-navy-900 text-white">
      <DecorDark />
      <div aria-hidden="true" className="absolute bottom-0 left-0 h-1 w-full hairline-gold" />

      {/* Estrela institucional no canto superior direito, acima do texto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[max(clamp(1rem,4vw,3rem),calc((100vw-80rem)/2+1rem))] top-10 z-0 hidden animate-[fade-up_0.8s_ease-out_0.3s_both] md:block"
      >
        <BrandStar className="h-20 w-20 text-gold-500/90 drop-shadow-[0_0_35px_rgba(255,194,14,0.35)] lg:h-28 lg:w-28 xl:h-36 xl:w-36" />
      </div>

      <div className="relative grid items-end gap-8 pb-0 pt-14 lg:grid-cols-[0.94fr_1.06fr] lg:pt-20">
        <div className="relative flex justify-start lg:order-first">
          <img
            src={foto.url}
            alt="Dr. Paulo Coral, médico, de braços cruzados com estetoscópio"
            width={848}
            height={1264}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-[min(100%,30rem)] max-w-full object-contain drop-shadow-2xl"
          />
        </div>

        <div className="order-first px-[clamp(1.25rem,4vw,3rem)] pb-14 lg:order-none lg:pb-24 lg:pl-0 lg:pr-[max(clamp(1.25rem,4vw,3rem),calc((100vw-80rem)/2+1.25rem))]">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/45 bg-white/[0.04] px-4 py-1.5 eyebrow text-gold-400 animate-[fade-up_0.5s_ease-out_both]">
            <BrandStar className="h-3 w-3" />
            Santa Catarina • 2026
          </p>

          <h1 className="mt-6 text-display uppercase animate-[fade-up_0.6s_ease-out_0.05s_both]">
            Dr. Paulo <span className="text-gold-500">Coral</span>
          </h1>

          <p className="mt-5 max-w-xl text-h3 font-medium text-white/90 animate-[fade-up_0.6s_ease-out_0.1s_both]">
            {campaign.cargo}
          </p>

          <div className="mt-10 flex items-center gap-5 animate-[fade-up_0.6s_ease-out_0.15s_both]">
            <span aria-hidden="true" className="h-20 w-1.5 rounded-full bg-gold-500 sm:h-24" />
            <div>
              <span className="block eyebrow text-white/50">Número</span>
              <span className="block text-[clamp(3.25rem,7.5vw,6rem)] font-black leading-none tracking-tight text-gold-500 drop-shadow-[0_0_24px_rgba(255,194,14,0.25)]">
                {campaign.numero}
              </span>
            </div>
          </div>

          <div className="mt-11 flex flex-col items-start gap-5 sm:flex-row sm:items-center animate-[fade-up_0.6s_ease-out_0.2s_both]">
            <Link
              to="/plano-parlamentar"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-8 py-4 text-lg font-bold text-navy-900 shadow-[0_8px_30px_rgba(255,194,14,0.35)] transition-[background-color,box-shadow,transform] hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_12px_38px_rgba(255,194,14,0.45)] sm:w-auto"
            >
              Conheça o Plano
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <p className="eyebrow text-white/70">Cuidar. Gerar. Servir.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
