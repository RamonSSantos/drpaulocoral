# Otimização das imagens restantes

## Objetivo
Reduzir o peso das imagens da Home e do Plano Parlamentar sem alterar composição, transparência ou qualidade visual perceptível.

## Alterações
- Manter a foto de trajetória em WebP já otimizada.
- Converter para WebP e redimensionar apenas as imagens ainda pesadas: foto principal, lideranças, miniatura do vídeo e logos utilizados no site.
- Criar variantes menores quando a mesma imagem aparece em larguras muito diferentes no celular e no computador.
- Atualizar dimensões declaradas, `srcSet`/`sizes`, prioridade da primeira imagem e carregamento tardio das imagens abaixo da primeira tela.
- Remover do carregamento da Home as cópias PNG locais de trajetória que ainda somam mais de 1 MB, reutilizando o WebP existente.

## Validação
- Conferir Home e Plano em celular e desktop, sem cortes ou mudanças de layout.
- Confirmar redução de bytes, ausência de erros visuais e build válido.
