import { Reveal } from "@/components/Reveal";
import { BrandStar } from "@/components/BrandDecor";
import liderancas from "@/assets/liderancas.jpeg.asset.json";

export function LiderancasApoios() {
  return (
    <section id="liderancas-e-apoios" className="relative isolate overflow-hidden bg-navy-900 section-y">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold/8 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-navy-800/50 blur-3xl"
      />

      <div className="container-site relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow flex items-center justify-center gap-3 text-gold-400">
              <span aria-hidden="true" className="h-px w-10 hairline-gold" />
              Lideranças e Apoios
              <span aria-hidden="true" className="h-px w-10 hairline-gold" />
            </p>
            <h2 className="mt-5 text-h2 text-white">
              Lideranças que compartilham deste projeto para Santa Catarina.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="group relative mt-12 overflow-hidden rounded-[1.25rem] border border-gold-500/20 bg-navy-950/60 shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:mt-14 lg:mt-16">
            {/* Gold accent border top */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-70"
            />

            <img
              src={liderancas.url}
              alt="Jorginho, Dr. Paulo Coral e Flávio Bolsonaro — lideranças que apoiam o projeto para Santa Catarina"
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              className="h-auto w-full"
              style={{ maxWidth: "100%" }}
            />

            {/* Subtle gradient overlay at bottom for cohesion */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-navy-900/85 via-navy-900/40 to-transparent"
            />

            {/* Candidate labels — positioned over the image */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-2 pb-3 sm:px-4 sm:pb-4 lg:pb-5">
              <div className="flex-1 text-center">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-wider text-white sm:text-xs lg:text-sm">
                  Jorginho
                </p>
                <p className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-widest text-gold-300/90 sm:text-[0.65rem] lg:text-xs">
                  Governador de Santa Catarina
                </p>
                <p className="mt-0.5 text-sm font-bold text-gold-400 sm:text-base lg:text-lg">
                  22
                </p>
              </div>

              <div className="flex-1 text-center">
                <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-white sm:text-sm lg:text-base">
                  Dr. Paulo Coral
                </p>
                <p className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-widest text-gold-300 sm:text-xs lg:text-sm">
                  Deputado Estadual
                </p>
                <p className="mt-0.5 text-base font-bold text-gold-400 sm:text-lg lg:text-xl">
                  10555
                </p>
              </div>

              <div className="flex-1 text-center">
                <p className="text-[0.65rem] font-extrabold uppercase tracking-wider text-white sm:text-xs lg:text-sm">
                  Flávio Bolsonaro
                </p>
                <p className="mt-0.5 text-[0.55rem] font-medium uppercase tracking-widest text-gold-300/90 sm:text-[0.65rem] lg:text-xs">
                  Presidente
                </p>
                <p className="mt-0.5 text-sm font-bold text-gold-400 sm:text-base lg:text-lg">
                  22
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="relative mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            <BrandStar
              aria-hidden="true"
              className="h-8 w-8 text-gold-500/60"
            />
            <p className="text-center text-sm font-semibold uppercase tracking-widest text-gold-400 sm:text-base">
              Jorginho · Dr. Paulo Coral · Flávio Bolsonaro
            </p>
            <BrandStar
              aria-hidden="true"
              className="h-8 w-8 text-gold-500/60"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
