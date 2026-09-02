import { Facebook, Instagram, MessageCircle, Music2, Users } from "lucide-react";
import { campaign } from "@/config/campaign";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.75l-5.29-6.79L4.4 22H1.14l8.02-9.16L1.5 2h6.92l4.78 6.22L18.244 2Zm-1.14 18h1.87L7.02 3.9H5.02L17.104 20Z" />
  </svg>
);

const items = [
  { key: "instagram", label: "Instagram", href: campaign.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: campaign.social.facebook, Icon: Facebook },
  { key: "x", label: "X", href: campaign.social.x, Icon: XIcon },
  { key: "tiktok", label: "TikTok", href: campaign.social.tiktok, Icon: Music2 },
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
    <ul className="grid grid-cols-3 gap-3 sm:grid-cols-6 lg:grid-cols-3">
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
