# Instalação do Pixel da Meta

## Contexto
O gestor de tráfego solicitou a inclusão do pixel da Meta (ID `1079839594791742`) no head do site, com rastreamento em todas as páginas e disparo de `PageView` também durante a navegação SPA (transições internas sem recarregamento).

## O que será feito

1. **Configurar o ID do pixel**
   - Adicionar `metaPixelId: "1079839594791742"` em `src/config/campaign.ts`, mantendo o dado centralizado e facilmente trocável.

2. **Injetar o script base no head**
   - Em `src/routes/__root.tsx`, incluir o script padrão do Meta Pixel via `head().scripts` (formato inline/children).
   - O script será condicional: só carrega se `campaign.metaPixelId` estiver preenchido.

3. **Fallback `<noscript>` no body**
   - Inserir a imagem de 1×1 do pixel dentro de `<noscript>` no final do `<body>` (próximo a `<Scripts />`), evitando colocar `<img>` dentro de `<head>`, o que pode falhar no SSR.

4. **Rastrear PageView em navegação SPA**
   - Criar um componente/hook leve (ex: `src/components/MetaPixelTracker.tsx`) que escuta mudanças de rota do TanStack Router.
   - A cada mudança de path, chamar `fbq('track', 'PageView')` quando `window.fbq` estiver disponível.
   - Montar o tracker dentro de `RootComponent`, garantindo execução apenas no cliente.

5. **Validar**
   - Rodar typecheck (`bunx tsgo --noEmit`) e build para garantir que o script inline e o listener de rota não quebrem o SSR nem a tipagem.

## Notas
- Não serão adicionados eventos customizados nesta entrega, apenas o `PageView` padrão.
- A questão de banner LGPD/aviso de cookies não será implementada agora, a menos que o gestor solicite explicitamente.
