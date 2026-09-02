import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";

export function Acompanhe() {
  return (
    <section id="acompanhe" className="section-y">
      <div className="container-site grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-navy-700">
            <span aria-hidden="true" className="h-px w-10 hairline-gold" />
            Canais oficiais
          </p>
          <h2 className="mt-4 text-h2 text-navy-900">Acompanhe Dr. Paulo Coral</h2>
          <p className="mt-4 measure text-body-lg text-muted-foreground">
            Fique por dentro das informações da campanha nos canais oficiais.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <SocialLinks variant="dark" />
        </Reveal>
      </div>
    </section>
  );
}
