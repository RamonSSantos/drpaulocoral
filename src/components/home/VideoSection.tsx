import { Play } from "lucide-react";
import { useState } from "react";
import thumb from "@/assets/paulo-coral-10555.png.asset.json";
import { campaign } from "@/config/campaign";
import { Reveal } from "@/components/Reveal";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(campaign.videoUrl);

  return (
    <section id="video" className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Conheça Dr. Paulo Coral
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Conheça sua trajetória, sua experiência e sua visão para Santa Catarina.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-navy shadow-sm">
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
                    src={thumb.url}
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
                    className="absolute inset-0 grid place-items-center bg-navy/35 transition-colors hover:bg-navy/45 disabled:cursor-not-allowed"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-gold text-navy shadow-lg">
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
