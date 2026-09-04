import { Facebook, Instagram, Users } from "lucide-react";
import { campaign, mensagens, whatsappLink } from "@/config/campaign";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const ThreadsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" className={className}>
    <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
  </svg>
);

const items = [
  { key: "instagram", label: "Instagram", href: campaign.social.instagram, Icon: Instagram },
  { key: "facebook", label: "Facebook", href: campaign.social.facebook, Icon: Facebook },
  { key: "threads", label: "Threads", href: campaign.social.threads, Icon: ThreadsIcon },
  {
    key: "whatsapp",
    label: "WhatsApp",
    href: whatsappLink(mensagens.contato) ?? campaign.social.whatsapp,
    Icon: WhatsAppIcon,
  },
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
