# Site Institucional — Dr. Paulo Coral (10555)

Landing page institucional de campanha, em português, seguindo exatamente a identidade do PRD: azul-marinho dominante (#00143D / #06245F), branco e amarelo #FFC20E para o número 10555 e CTAs. Tipografia Inter. Animações leves (fade-in / slide-up), respeitando `prefers-reduced-motion`.

## Páginas

- `/` — Home completa (escopo principal).
- `/plano-parlamentar` — página de destino dos CTAs. Como o PRD não traz o conteúdo completo das propostas, será criada uma página simples com os 4 eixos e os títulos já informados, marcando as propostas detalhadas como conteúdo a preencher. Assim nenhum link fica quebrado.

## Estrutura da Home

1. Header sticky: logo, Início, Sobre, Plano Parlamentar, Contato, botão WhatsApp. Menu hambúrguer no mobile, navegação suave por âncoras.
2. Hero azul-marinho, duas colunas no desktop (texto + foto PNG sem fundo), vertical no mobile. Nome, cargo, 10555 em destaque dourado, CTA "Conheça o Plano Parlamentar". Estrela da marca usada de forma discreta.
3. Vídeo: título, subtítulo, player 16:9 com thumbnail e botão play — o iframe só carrega após o clique (facade), usando `[ VIDEO_URL ]`.
4. Quem é Dr. Paulo Coral: texto de trajetória + 3 cards (9 ANOS, 5 ANOS, MÉDICO).
5. Cuidar. Gerar. Servir.: 3 cards com ícone, título e descrição.
6. Plano Parlamentar — resumo: 4 cards numerados (01–04) com contagem de propostas + CTA "Acessar Plano Parlamentar →".
7. Nosso Compromisso: 4 itens (Saúde, Economia, Trabalho, Política) em destaque.
8. Faça Parte: dois cards (voluntário e doação), cada um abrindo o WhatsApp com a mensagem pré-definida do PRD.
9. Acompanhe: ícones/links das redes sociais.
10. Footer azul-marinho: identidade, links, redes e bloco reservado para as informações eleitorais obrigatórias.
11. Botão flutuante de WhatsApp fixo no canto inferior direito, com área de toque adequada.

## Dados configuráveis

Um único arquivo `src/config/campaign.ts` centraliza todos os placeholders: `WHATSAPP_NUMBER`, `INSTAGRAM_URL`, `FACEBOOK_URL`, `X_URL`, `TIKTOK_URL`, `WHATSAPP_URL`, `WHATSAPP_GROUP_URL`, `VIDEO_URL`, `CAMPAIGN_LEGAL_INFORMATION`. Nada é inventado: links vazios ficam desativados visualmente até serem preenchidos.

## Imagens

- Foto PNG sem fundo (IMG_6295) na Hero, com prioridade de carregamento.
- Logo (versão clara sobre azul e versão escura) no header/footer.
- Favicon gerado a partir da estrela da marca.
- Demais imagens com lazy loading e alt text.
- Uploads publicados via CDN de assets (não copiados para o repositório).

## SEO e acessibilidade

- `head()` da Home com title, description, canonical, Open Graph e Twitter Card conforme o PRD; `head()` próprio para `/plano-parlamentar`.
- H1 único, hierarquia H2/H3, JSON-LD de pessoa/candidato, `robots.txt` mantido. Sitemap fica pendente até haver domínio público configurado.
- Contraste alto, foco visível, navegação por teclado, botões e links semânticos, sem scroll horizontal de 320px a 1440px+.

## Detalhes técnicos

- TanStack Start com rotas em `src/routes/index.tsx` e `src/routes/plano-parlamentar.tsx`; seções como componentes em `src/components/home/`.
- Tokens de cor/tipografia definidos em `src/styles.css` (`@theme`), sem cores hardcoded nos componentes.
- Inter carregada via `<link>` no `__root.tsx`.
- Sem bibliotecas extras de animação: transições em CSS puro + IntersectionObserver leve para fade-in.
