import { Play } from "lucide-react";
import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import thumbMobile from "@/assets/paulo-coral-video-640.webp.asset.json";
import thumbDesktop from "@/assets/paulo-coral-video-1080.webp.asset.json";
import { campaign } from "@/config/campaign";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  const [requested, setRequested] = useState(false);
  const [error, setError] = useState(false);
  const [posterFailed, setPosterFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasVideo = /^https:\/\//i.test(campaign.VIDEO_URL);
  const hasExternalPoster = /^https:\/\//i.test(campaign.VIDEO_POSTER_URL) && !posterFailed;

  function startVideo() {
    if (!hasVideo) return;
    setError(false);
    // Mount the video while the click's user activation is still available (notably on iOS).
    flushSync(() => setRequested(true));
    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play().catch(() => {
        // Native controls remain available if programmatic playback is blocked.
      });
    }
  }

  return (
    <section id="video" className="section-y bg-neutral-50/60">
      <div className="container-site grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-16">
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
            className="mx-auto w-full max-w-[480px] overflow-hidden rounded-[1.5rem] bg-navy-900"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="relative aspect-[9/16] w-full">
              {requested && hasVideo ? (
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label="Vídeo institucional de Dr. Paulo Coral"
                  onError={() => {
                    setRequested(false);
                    setError(true);
                  }}
                  className="absolute inset-0 h-full w-full object-contain"
                >
                  {/* type hint: browsers then sniff the real MP4 container instead of trusting the x-m4v MIME */}
                  <source src={campaign.VIDEO_URL} type="video/mp4" />
                </video>
              ) : (
                <>
                  <img
                    src={hasExternalPoster ? campaign.VIDEO_POSTER_URL : thumbDesktop.url}
                    srcSet={hasExternalPoster ? undefined : `${thumbMobile.url} 640w, ${thumbDesktop.url} 1080w`}
                    sizes={hasExternalPoster ? undefined : "(min-width: 1024px) 480px, min(100vw - 2.5rem, 480px)"}
                    onError={hasExternalPoster ? () => setPosterFailed(true) : undefined}
                    alt="Dr. Paulo Coral, candidato a Deputado Estadual por Santa Catarina, número 10555"
                    width={1080}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-contain"
                  />
                  <Button
                    type="button"
                    onClick={startVideo}
                    disabled={!hasVideo}
                    aria-label="Reproduzir vídeo"
                    className="group absolute inset-0 h-full w-full rounded-none bg-navy-950/35 p-0 hover:bg-navy-950/45 focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-gold-500 disabled:opacity-100"
                  >
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-gold-500 text-navy-900 transition-transform group-hover:scale-105 motion-reduce:transition-none">
                      <Play className="!h-8 !w-8 translate-x-0.5" aria-hidden="true" />
                    </span>
                  </Button>
                </>
              )}
            </div>
          </div>
          {error ? (
            <div className="mx-auto mt-3 flex max-w-[480px] flex-wrap items-center justify-between gap-2 text-sm text-muted-foreground" role="alert">
              <span>Não foi possível carregar o vídeo. Tente novamente.</span>
              <Button type="button" variant="link" onClick={startVideo} className="h-11 px-0 text-navy-700">Tentar novamente</Button>
            </div>
          ) : !hasVideo ? (
            <p className="mt-3 text-sm text-muted-foreground">Vídeo institucional em breve.</p>
          ) : null}
        </Reveal>
      </div>
    </section>
  );
}
