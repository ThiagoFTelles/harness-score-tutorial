# Verificar O Meeting Cost CLI

Use este workflow após alterar o cálculo ou o CLI.

1. Revise o diff e confirme que a mudança permanece no escopo solicitado.
2. Execute o caso válido configurado:
   `npm start -- 5 60 80`
3. Confirme a saída `Custo total de mão de obra: 400,00`.
4. Execute uma entrada inválida representativa, por exemplo:
   `node src/cli.js 0 60 80`
5. Confirme mensagem de erro, forma de uso e código de saída não zero.
6. Para validar a função de domínio, use apenas o código e os comandos já presentes.
7. Não invente comandos de teste, lint, formatter, typecheck ou build.
8. Testes automatizados, lint, formatter, typecheck e CI ainda não existem; esses sensors estão pendentes.
9. Não adicione dependências, arquivos de teste ou infraestrutura para executar este workflow.
