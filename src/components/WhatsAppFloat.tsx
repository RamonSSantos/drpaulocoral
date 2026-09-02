import { mensagens, whatsappLink } from "@/config/campaign";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.15-.672-1.612-.921-2.206-.242-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.797.372-.275.299-1.05 1.025-1.05 2.503 0 1.478 1.077 2.902 1.227 3.104.149.198 2.122 3.234 5.132 4.535 2.183.938 3.044 1.016 4.137.86 1.273-.185 2.03-.849 2.323-1.325.293-.475.293-1.08.22-1.325-.074-.148-.272-.223-.57-.372m-3.2-9.923c-3.33 0-6.036 2.706-6.036 6.037 0 1.33.43 2.57 1.165 3.574l-1.002 2.924 3.002-1.002c.97.63 2.12.998 3.353.998 3.33 0 6.037-2.706 6.037-6.037s-2.706-6.037-6.037-6.037m0 11.074c-1.16 0-2.24-.347-3.145-.94l-2.09.696.695-2.03a4.98 4.98 0 0 1-.94-2.93 4.98 4.98 0 0 1 4.974-4.974 4.98 4.98 0 0 1 4.975 4.974 4.98 4.98 0 0 1-4.975 4.974" />
  </svg>
);

export function WhatsAppFloat() {
  const wa = whatsappLink(mensagens.contato);
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a campanha no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center gap-2 rounded-full bg-[#25D366] font-semibold text-white transition-transform hover:scale-105 sm:w-auto sm:px-5"
      style={{ boxShadow: "0 10px 30px rgba(0, 20, 61, 0.25)" }}
    >
      <WhatsAppIcon className="h-6 w-6 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  );
}
