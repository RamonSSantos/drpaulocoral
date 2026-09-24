# Player de vídeo institucional — Home

## Resultado

Substituir somente a implementação da seção de vídeo atual por um player HTML5 vertical, mantendo o texto, a identidade azul/dourado, o espaçamento da seção e todas as demais partes do site intactos. O MP4 continuará hospedado fora do projeto e só será solicitado após o clique em reproduzir.

## Implementação

1. Centralizar `VIDEO_URL = "[VIDEO_URL]"` e `VIDEO_POSTER_URL = "[VIDEO_POSTER_URL]"` na configuração da campanha. Tratar esses valores como pendentes até serem substituídos por URLs reais; nunca requisitar os textos-placeholder.
2. Adaptar apenas a seção de vídeo: texto existente à esquerda e quadro vertical 9:16 à direita no desktop, limitado a cerca de 420–480 px; no mobile, título, descrição e player em uma coluna. Reutilizar tokens, tipografia e bordas atuais, sem alterar estilos globais.
3. Mostrar inicialmente apenas o poster e o botão central acessível “Reproduzir vídeo”. Usar a URL de poster configurada quando disponível; enquanto não houver URL, usar a miniatura WebP otimizada já presente no projeto como visual provisório, sem esticá-la nem cortá-la dentro do quadro 9:16.
4. Criar o elemento `<video>` **apenas depois do clique**, com `src` externo, `controls`, `playsInline`, `preload="metadata"` e ajuste sem recorte. Solicitar a reprodução a partir do início pela ação do usuário, sem atributo `autoplay`; manter controles nativos caso o navegador bloqueie a tentativa programática.
5. Se o arquivo falhar, mostrar mensagem discreta e opção de tentar novamente, sem quebrar o quadro. Quando a URL ainda não estiver configurada, informar discretamente que o vídeo estará disponível em breve, sem tentativa de download.

## Validação

- Conferir em rede que não há pedido do MP4 antes do clique e que o pedido só surge após interação; inspecionar poster, foco, controles nativos, tentativa de reprodução e erro/repetição.
- Verificar a proporção 9:16, ausência de corte e de rolagem horizontal em 320, 375, 390, 430, 768, 1024, 1280 e 1440 px.
- Confirmar que as outras seções permanecem inalteradas. A reprodução do arquivo definitivo na HostGator/CDN só poderá ser validada após as duas URLs reais serem fornecidas/configuradas; também dependerá de o servidor aceitar requisições de mídia por intervalo de bytes.

## Detalhe técnico

A seção existente usa uma miniatura WebP com moldura 16:9 e um `iframe` configurado por `campaign.videoUrl`, atualmente vazio. A mudança ficará concentrada em `src/components/home/VideoSection.tsx` e `src/config/campaign.ts`; a imagem WebP atual poderá servir como poster provisório. Nenhum vídeo MP4 ou biblioteca de player será adicionado ao projeto.
