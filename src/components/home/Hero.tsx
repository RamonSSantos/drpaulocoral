import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import foto from "@/assets/paulo-coral-foto.png.asset.json";
import { campaign } from "@/config/campaign";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-1.5 w-full bg-gold"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-0 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:pt-16">
        <div className="pb-12 animate-[fade-up_0.7s_ease-out_both]">
          <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Deputado Estadual · Santa Catarina
          </p>
          <h1 className="mt-5 text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Dr. Paulo <span className="text-gold">Coral</span>
          </h1>
          <p className="mt-4 max-w-md text-base text-white/80 sm:text-lg">{campaign.cargo}</p>

          <div className="mt-8 flex items-center gap-4">
            <span aria-hidden="true" className="h-14 w-1.5 rounded bg-gold sm:h-16" />
            <span className="text-5xl font-extrabold tracking-tight text-gold sm:text-6xl lg:text-7xl">
              {campaign.numero}
            </span>
          </div>

          <div className="mt-9">
            <Link
              to="/plano-parlamentar"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-bold text-navy transition-transform hover:scale-[1.03]"
            >
              Conheça o Plano Parlamentar
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={foto.url}
            alt="Dr. Paulo Coral, médico, de braços cruzados com estetoscópio"
            width={784}
            height={1160}
            fetchPriority="high"
            decoding="async"
            className="relative z-10 w-[min(100%,26rem)] max-w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
