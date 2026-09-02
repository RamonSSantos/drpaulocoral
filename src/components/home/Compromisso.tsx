import { Reveal } from "@/components/Reveal";

const compromissos = [
  { numero: "01", area: "Saúde", texto: "Reduzir a espera" },
  { numero: "02", area: "Economia", texto: "Facilitar para quem empreende" },
  { numero: "03", area: "Trabalho", texto: "Gerar oportunidades" },
  { numero: "04", area: "Política", texto: "Transparência e prestação de contas" },
];

export function Compromisso() {
  return (
    <section id="compromisso" className="section-y">
      <div className="container-site">
        <Reveal>
          <p className="eyebrow flex items-center gap-3 text-navy-700">
            <span aria-hidden="true" className="h-px w-10 hairline-gold" />
            Nosso compromisso
          </p>
          <h2 className="mt-4 measure text-h2 text-navy-900">
            Propostas que podem ser acompanhadas e cobradas.
          </h2>
          <p className="mt-5 measure text-body-lg text-muted-foreground">
            Não queremos apenas dizer o que pretendemos fazer. Queremos estabelecer indicadores para
            mostrar o que realmente está dando resultado.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {compromissos.map((c, i) => (
            <Reveal key={c.numero} delay={i * 70}>
              <div className="border-t border-border pt-6">
                <p className="text-[clamp(2.25rem,3.5vw,3rem)] font-black leading-none tracking-tight text-gold-500">
                  {c.numero}
                </p>
                <h3 className="mt-4 eyebrow text-navy-600">{c.area}</h3>
                <p className="mt-2 text-h3 text-navy-900">{c.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
