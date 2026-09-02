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

      <div className="container-site relative grid items-end gap-8 pb-0 pt-14 lg:grid-cols-[1.06fr_0.94fr] lg:pt-20">
        <div className="pb-14 lg:pb-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/45 bg-white/[0.04] px-4 py-1.5 eyebrow text-gold-400 animate-[fade-up_0.5s_ease-out_both]">
            <BrandStar className="h-3 w-3" />
            Santa Catarina • 2026
          </p>

          <h1 className="mt-6 text-display uppercase animate-[fade-up_0.6s_ease-out_0.05s_both]">
            Dr. Paulo <span className="text-gold-500">Coral</span>
          </h1>

          <p className="mt-4 max-w-md text-body-lg text-white/75 animate-[fade-up_0.6s_ease-out_0.1s_both]">
            {campaign.cargo}
          </p>

          <div className="mt-9 flex items-center gap-5 animate-[fade-up_0.6s_ease-out_0.15s_both]">
            <span aria-hidden="true" className="h-16 w-1 rounded-full bg-gold-500 sm:h-20" />
            <div>
              <span className="block eyebrow text-white/50">Número</span>
              <span className="block text-[clamp(2.75rem,6vw,4.5rem)] font-black leading-none tracking-tight text-gold-500">
                {campaign.numero}
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center animate-[fade-up_0.6s_ease-out_0.2s_both]">
            <Link
              to="/plano-parlamentar"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gold-500 px-7 py-4 text-base font-bold text-navy-900 transition-[background-color,box-shadow] hover:bg-gold-400 sm:w-auto"
            >
              Conheça o Plano
              <ArrowRight
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
            <p className="eyebrow text-white/60">Cuidar. Gerar. Servir.</p>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div
            aria-hidden="true"
            className="absolute bottom-0 right-[6%] hidden h-[70%] w-[68%] rounded-t-[2rem] border border-white/10 bg-white/[0.03] lg:block"
          />
          <img
            src={foto.url}
            alt="Dr. Paulo Coral, médico, de braços cruzados com estetoscópio"
            width={784}
            height={1160}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-[min(100%,30rem)] max-w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
