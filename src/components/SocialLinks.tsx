import { Facebook, Instagram, MessageCircle, Users } from "lucide-react";
import { campaign } from "@/config/campaign";

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.433 1.5 15.211 1.472 12.9l-.004-.056c-.007-.551-.004-1.036.002-1.478.049-3.32 1.13-6.404 3.14-8.68C6.627 1.405 9.172.315 12.002.315c.173 0 .347.003.521.01 2.97.106 5.508 1.12 7.36 2.933 1.824 1.786 2.86 4.253 2.985 7.132.032.694.05 1.39.05 2.07 0 1.589-.076 3.143-.22 4.5-.4 3.72-2.332 6.266-5.35 7.02-1.033.26-2.12.392-3.232.392l-.13-.002Zm-.058-16.3c-2.64.01-4.16 1.7-4.16 4.65 0 2.93 1.52 4.62 4.17 4.62 2.64 0 4.16-1.69 4.16-4.62 0-2.95-1.52-4.65-4.16-4.65Zm-.02 7.08c-1.09 0-1.69-.8-1.69-2.22 0-1.43.6-2.23 1.69-2.23 1.09 0 1.69.8 1.69 2.23 0 1.42-.6 2.22-1.69 2.22ZM17.6 6.16a1.06 1.06 0 1 1-2.12 0 1.06 1.06 0 0 1 2.12 0Z" />
  </svg>
);

const items = [
  { key: "instagram", label: "Instagram", href: campaign.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: campaign.social.facebook, Icon: Facebook },
  { key: "threads", label: "Threads", href: campaign.social.threads, Icon: ThreadsIcon },
  { key: "whatsapp", label: "WhatsApp", href: campaign.social.whatsapp, Icon: MessageCircle },
  {
    key: "grupo",
    label: "Grupo no WhatsApp",
    href: campaign.social.whatsappGrupo,
    Icon: Users,
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
