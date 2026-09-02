import { MessageCircle } from "lucide-react";
import { mensagens, whatsappLink } from "@/config/campaign";

export function WhatsAppFloat() {
  const wa = whatsappLink(mensagens.contato);
  if (!wa) return null;

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a campanha no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="h-7 w-7" aria-hidden="true" />
    </a>
  );
}
