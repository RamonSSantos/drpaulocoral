import { Facebook, Instagram, Users } from "lucide-react";
import { campaign } from "@/config/campaign";

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.433 1.5 15.211 1.472 12.9l-.004-.056c-.007-.551-.004-1.036.002-1.478.049-3.32 1.13-6.404 3.14-8.68C6.627 1.405 9.172.315 12.002.315c.173 0 .347.003.521.01 2.97.106 5.508 1.12 7.36 2.933 1.824 1.786 2.86 4.253 2.985 7.132.032.694.05 1.39.05 2.07 0 1.589-.076 3.143-.22 4.5-.4 3.72-2.332 6.266-5.35 7.02-1.033.26-2.12.392-3.232.392l-.13-.002Zm-.058-16.3c-2.64.01-4.16 1.7-4.16 4.65 0 2.93 1.52 4.62 4.17 4.62 2.64 0 4.16-1.69 4.16-4.62 0-2.95-1.52-4.65-4.16-4.65Zm-.02 7.08c-1.09 0-1.69-.8-1.69-2.22 0-1.43.6-2.23 1.69-2.23 1.09 0 1.69.8 1.69 2.23 0 1.42-.6 2.22-1.69 2.22ZM17.6 6.16a1.06 1.06 0 1 1-2.12 0 1.06 1.06 0 0 1 2.12 0Z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.15-.672-1.612-.921-2.206-.242-.579-.487-.5-.672-.51-.173-.008-.371-.01-.57-.01-.198 0-.521.074-.797.372-.275.299-1.05 1.025-1.05 2.503 0 1.478 1.077 2.902 1.227 3.104.149.198 2.122 3.234 5.132 4.535 2.183.938 3.044 1.016 4.137.86 1.273-.185 2.03-.849 2.323-1.325.293-.475.293-1.08.22-1.325-.074-.148-.272-.223-.57-.372m-3.2-9.923c-3.33 0-6.036 2.706-6.036 6.037 0 1.33.43 2.57 1.165 3.574l-1.002 2.924 3.002-1.002c.97.63 2.12.998 3.353.998 3.33 0 6.037-2.706 6.037-6.037s-2.706-6.037-6.037-6.037m0 11.074c-1.16 0-2.24-.347-3.145-.94l-2.09.696.695-2.03a4.98 4.98 0 0 1-.94-2.93 4.98 4.98 0 0 1 4.974-4.974 4.98 4.98 0 0 1 4.975 4.974 4.98 4.98 0 0 1-4.975 4.974" />
  </svg>
);

const items = [
  { key: "instagram", label: "Instagram", href: campaign.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: campaign.social.facebook, Icon: Facebook },
  { key: "threads", label: "Threads", href: campaign.social.threads, Icon: ThreadsIcon },
  { key: "whatsapp", label: "WhatsApp", href: campaign.social.whatsapp, Icon: WhatsAppIcon },
  {
    key: "grupo",
    label: "Grupo no WhatsApp",
    href: campaign.social.whatsappGrupo,
    Icon: WhatsAppIcon,
  },
];

export function SocialLinks({ variant = "light" }: { variant?: "light" | "dark" }) {
  const base =
    variant === "light"
      ? "border-white/12 text-white/85 hover:border-gold-500 hover:text-gold-500"
      : "border-border text-navy-900 hover:border-gold-500 hover:text-gold-600";

  return (
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-5 lg:grid-cols-3">
      {items.map(({ key, label, href, Icon }) => {
        const enabled = Boolean(href);
        return (
          <li key={key}>
            <a
              href={href || undefined}
              target={enabled ? "_blank" : undefined}
              rel={enabled ? "noopener noreferrer" : undefined}
              aria-disabled={!enabled}
              title={enabled ? label : `${label} — link em breve`}
              className={`flex h-12 items-center justify-center gap-2 rounded-xl border px-3 transition-colors ${base} ${
                enabled ? "" : "pointer-events-none opacity-40"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span className="sr-only">{label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
