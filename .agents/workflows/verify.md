# Verificar O Meeting Cost CLI

Use este workflow após alterar o cálculo ou o CLI.

1. Execute `npm run check` para lint, typecheck e testes.
2. Execute o caso válido do CLI:
   `npm start -- 5 60 80`
3. Confirme a saída `Custo total de mão de obra: 400,00`.
4. Execute uma entrada inválida representativa:
   `node src/cli.js 0 60 80`
5. Confirme mensagem de erro, forma de uso e código de saída não zero.
6. Revise o diff e confirme que a mudança permanece no escopo solicitado.
