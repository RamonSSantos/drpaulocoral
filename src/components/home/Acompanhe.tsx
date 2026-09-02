import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";

export function Acompanhe() {
  return (
    <section id="acompanhe" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Acompanhe Dr. Paulo Coral
          </h2>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Acompanhe os canais oficiais e fique por dentro das informações da campanha.
          </p>
          <div className="mt-8">
            <SocialLinks variant="dark" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
