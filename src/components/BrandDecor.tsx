/** Elementos gráficos da identidade: estrela cadente, linhas diagonais e círculos. */

export function BrandStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" fill="currentColor" className={className}>
      <path d="M50 2 61.6 33.4 94 38.2 70.6 61.4 76.6 94 50 78.4 23.4 94l6-32.6L6 38.2l32.4-4.8z" />
    </svg>
  );
}

/** Textura discreta para blocos escuros (navy). */
export function DecorDark({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -right-32 -top-40 h-[28rem] w-[28rem] rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-24 bottom-[-8rem] h-72 w-72 rounded-full border border-white/10" />
      <svg
        viewBox="0 0 400 400"
        className="absolute right-[6%] top-[8%] h-64 w-64 text-white/[0.05]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M-40 400 L400 -40 M20 400 L400 20 M80 400 L400 80" />
      </svg>
      
    </div>
  );
}

/** Textura discreta para blocos claros. */
export function DecorLight({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -right-20 top-10 h-80 w-80 rounded-full border border-navy/5" />
      <BrandStar className="absolute -left-8 bottom-6 h-40 w-40 text-navy/[0.03]" />
    </div>
  );
}
