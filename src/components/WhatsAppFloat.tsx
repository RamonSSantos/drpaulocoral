import { mensagens, whatsappLink } from "@/config/campaign";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

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
