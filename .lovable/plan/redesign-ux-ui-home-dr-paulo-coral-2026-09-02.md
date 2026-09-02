# Redesign UX/UI — Home Dr. Paulo Coral

Redesenho visual da Home mantendo 100% do conteúdo e da ordem de seções já publicados. Nada de informação nova sobre o candidato; nenhum link ou dado de `src/config/campaign.ts` muda.

## Design system (base do redesign)

- Escala azul completa em `src/styles.css`: `navy-950 #00102F`, `navy-900 #00143D`, `navy-800 #031A4D`, `navy-700 #06245F`, `navy-600 #0A326F` (em oklch), mantendo `navy` como alias do 900.
- Escala dourada: `gold-300/400/500/600`, com `#FFC20E` como acento principal — usado só em número, linhas, ícones, badges e CTA.
- Neutros slate 50→900 mapeados como tokens.
- Raios: botões 10–12px, cards 16–20px, vídeo 20–24px.
- Sombra única e discreta: `0 10px 30px rgba(0,20,61,0.08)` como token `--shadow-card`.
- Escala tipográfica Inter com clamp (display 42→80px, H1, H2, H3, body, small), pesos 400–900; largura de leitura limitada a ~68ch.
- Ritmo de seção: 64–80px mobile / 96–128px desktop; container 1280px com padding 20–24px mobile e 32–48px desktop.
- Elementos gráficos reutilizáveis (componente `BrandDecor`): estrela da identidade, linhas diagonais e círculos em baixa opacidade, alternando entre fundos claros e escuros.

## Seções

1. **Header** — altura 72–84px, fundo navy-900, transição ao rolar (altura levemente menor + sombra sutil), indicador dourado no item ativo, CTA WhatsApp em gold. Menu mobile mantido, com melhor espaçamento e transição.
2. **Hero** — composição editorial assimétrica sobre navy-900 com textura geométrica: badge "Santa Catarina • 2026", H1 gigante DR. PAULO CORAL, subtítulo do cargo, bloco 10555 com presença forte mas subordinado ao nome, CTA "Conheça o Plano" e a frase "Cuidar. Gerar. Servir." Foto PNG grande à direita, com bloco/moldura geométrica atrás. Mobile: ordem badge → nome → cargo → 10555 → CTA → foto grande.
3. **Vídeo** — fundo claro, etiqueta "CONHEÇA O CANDIDATO", título e subtítulo, player 16:9 radius 24px com play destacado; mantém o carregamento sob clique.
4. **Quem é** — grid editorial foto/texto com moldura gráfica sobreposta; destaques 9 ANOS / 5 ANOS / MÉDICO com números 40–56px e régua dourada em vez de três cards iguais.
5. **Cuidar · Gerar · Servir** — bloco navy com três cards refinados (borda sutil, hover com elevação leve, borda dourada e deslocamento mínimo do ícone), sem depender de hover no mobile.
6. **Plano Parlamentar** — cabeçalho com contadores "15 propostas / 4 eixos" em tipografia grande, título e texto de apoio, grid 2×2 com cards numerados 01–04 (ícone Lucide, título, descrição, "N propostas →"), e CTA final forte para `/plano-parlamentar`.
7. **Nosso Compromisso** — fundo claro, headline conceitual + texto de apoio, quatro compromissos em linha visual numerada 01–04 com detalhes dourados (sem cards).
8. **Faça Parte** — bloco navy com dois cards de apoio (voluntário e doação), CTAs para WhatsApp com as mensagens já configuradas.
9. **Acompanhe** — layout limpo, ícones oficiais em grade discreta.
10. **Footer** — navy profundo, compacto: identidade + "Deputado Estadual — 10555" + assinatura, divisórias douradas finas, navegação, redes e bloco de informações eleitorais.
11. **Botão flutuante WhatsApp** — pill "Fale conosco" no desktop, botão circular no mobile, tamanho contido.

## Acessibilidade, SEO e performance

- H1 único, hierarquia H2/H3 semântica, contraste AA, foco visível, alvos de toque ≥44px.
- Title, description, canonical, Open Graph, Twitter Card e JSON-LD mantidos; `og:image` apontando para a composição 10555 já hospedada em CDN.
- Sem novas dependências: animações em CSS puro + o `Reveal` existente, respeitando `prefers-reduced-motion`; imagens com lazy loading (exceto a foto da Hero) e vídeo sob demanda.
- Verificação em 320, 390, 768, 1280 e 1440px, sem scroll horizontal.

## Notas técnicas

- Alterações concentradas em `src/styles.css`, `src/components/SiteHeader.tsx`, `SiteFooter.tsx`, `WhatsAppFloat.tsx`, `SocialLinks.tsx` e todos os componentes de `src/components/home/`; novo `src/components/BrandDecor.tsx`.
- Sem cores hardcoded nos componentes — tudo via tokens do `@theme`.
- `/plano-parlamentar` recebe apenas o alinhamento de header/footer/tokens, sem mudança de conteúdo.
