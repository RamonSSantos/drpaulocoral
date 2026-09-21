import { Play } from "lucide-react";
import { useState } from "react";
import thumbMobile from "@/assets/paulo-coral-video-640.webp.asset.json";
import thumbDesktop from "@/assets/paulo-coral-video-1080.webp.asset.json";
import { campaign } from "@/config/campaign";
import { Reveal } from "@/components/Reveal";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(campaign.videoUrl);

  return (
    <section id="video" className="section-y bg-neutral-50/60">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-navy-700">
            <span aria-hidden="true" className="h-px w-10 hairline-gold" />
            Conheça o candidato
          </p>
          <h2 className="mt-4 text-h2 text-navy-900">Conheça Dr. Paulo Coral</h2>
          <p className="mt-4 measure text-body-lg text-muted-foreground">
            Conheça sua trajetória, sua experiência e sua visão para Santa Catarina.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="mt-10 overflow-hidden rounded-[1.5rem] bg-navy-900"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="relative aspect-video w-full">
              {playing && hasVideo ? (
                <iframe
                  src={campaign.videoUrl}
                  title="Vídeo institucional de Dr. Paulo Coral"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <>
                  <img
                    src={thumbDesktop.url}
                    srcSet={`${thumbMobile.url} 640w, ${thumbDesktop.url} 1080w`}
                    sizes="min(100vw - 2.5rem, 1280px)"
                    alt="Dr. Paulo Coral, candidato a Deputado Estadual, número 10555"
                    width={1080}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover object-bottom"
                  />
                  <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    disabled={!hasVideo}
                    aria-label={
                      hasVideo ? "Reproduzir vídeo institucional" : "Vídeo disponível em breve"
                    }
                    className="group absolute inset-0 grid place-items-center bg-navy-950/35 transition-colors hover:bg-navy-950/45 disabled:cursor-not-allowed"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-500 text-navy-900 transition-transform group-hover:scale-105">
                      <Play className="h-8 w-8 translate-x-0.5" aria-hidden="true" />
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
          {!hasVideo ? (
            <p className="mt-3 text-sm text-muted-foreground">Vídeo institucional em breve.</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
