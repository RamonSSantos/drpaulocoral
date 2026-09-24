/**
 * Dados configuráveis da campanha.
 * Preencha os campos vazios quando as informações oficiais estiverem disponíveis.
 * Links vazios são automaticamente ocultados/desativados no site.
 */

export const campaign = {
  nome: "Dr. Paulo Coral",
  cargo: "Seu Candidato a Deputado Estadual por Santa Catarina",
  numero: "10555",

  /** Somente dígitos, com DDI e DDD. Ex.: "5547999999999" */
  whatsappNumber: "5547996212094",

  /** URLs externos do vídeo (HostGator/CDN) e da imagem vertical de capa. */
  VIDEO_URL: "https://video.drpaulocoral.com.br/apresentacao.m4v",
  VIDEO_POSTER_URL: "[VIDEO_POSTER_URL]",

  /** ID do pixel da Meta (Facebook) para rastreamento de campanha */
  metaPixelId: "1079839594791742",

  social: {
    instagram: "https://www.instagram.com/drpaulocoral/",
    facebook: "https://www.facebook.com/share/1HbfXrcYEX/",
    threads: "https://www.threads.com/@paulocoral.oficial",
    whatsapp: "https://wa.me/message/FPGGAPYBDVHUF1",
    whatsappGrupo: "https://chat.whatsapp.com/JtyrtijyEGXCrAq0aTlRll",
  },

  /** Informações eleitorais obrigatórias (CNPJ de campanha, etc.) */
  legalInformation: "CNPJ: 68.403.667/0001-79",
} as const;

export function whatsappLink(mensagem: string): string | null {
  if (!campaign.whatsappNumber) return campaign.social.whatsapp || null;
  return `https://wa.me/${campaign.whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
}

export const mensagens = {
  voluntario:
    "Olá! Gostaria de saber como posso participar como voluntário da campanha do Dr. Paulo Coral.",
  doacao:
    "Olá! Gostaria de receber informações sobre como apoiar a campanha do Dr. Paulo Coral.",
  contato: "Olá! Gostaria de falar com a campanha do Dr. Paulo Coral.",
  plano:
    "Olá! Conheci o Plano Parlamentar do Dr. Paulo Coral e gostaria de saber mais sobre as propostas e como fazer parte.",
};
