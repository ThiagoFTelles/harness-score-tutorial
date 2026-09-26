# Contexto do Repositório

## Produto

- Mantenha o Meeting Cost CLI como uma aplicação Node.js de linha de comando.
- Calcule o custo de mão de obra: participantes x duração em minutos x custo/hora / 60.
- Aceite três argumentos posicionais: participantes, duração em minutos e custo por hora.
- Formate o sucesso com `Intl.NumberFormat` em pt-BR e exatamente duas casas decimais.
- Preserve o escopo atual: sem interface gráfica, serviço web ou persistência.

## Estrutura Real

- Raiz: `package.json`, `package-lock.json`, `tsconfig.json`, `biome.json`, `README.md`, `PROJETO.md`, `LICENSE` e `AGENTS.md`.
- `src/domain.js`: exporta a função pura `calculateMeetingCost`.
- `src/cli.js`: lê `process.argv`, converte argumentos, chama o domínio e escreve no terminal.
- `test/domain.test.js`: cobre o cálculo e suas validações usando o test runner nativo do Node.js.
- `.github/workflows/ci.yml`: executa as verificações em pushes para `main` e pull requests.
- `.agents/workflows/verify.md`: descreve o fluxo local de verificação.

## Comandos E Módulos

- `npm start -- <participantes> <duração-em-minutos> <custo-por-hora>` executa o CLI.
- `npm test` executa os testes com `node --test`.
- `npm run lint`, `npm run format` e `npm run typecheck` executam suas verificações específicas.
- `npm run check` executa lint, typecheck e testes; use-o como verificação local integrada.
- Exemplo válido: `npm start -- 5 60 80`.
- Também é válido executar `node src/cli.js` com os mesmos três argumentos.
- Preserve ESM (`"type": "module"`) e as extensões `.js` nas importações locais.
- Use APIs nativas no runtime; as dependências declaradas são somente ferramentas de desenvolvimento.
- Mantenha versões de dependências de desenvolvimento fixadas e sincronizadas com `package-lock.json`.

## Invariantes E Erros

- Rejeite qualquer argumento não finito, incluindo `NaN`, `Infinity` e `-Infinity`.
- Exija participantes como inteiro seguro JavaScript maior ou igual a 1.
- Exija duração finita e estritamente maior que zero; ela pode ser fracionária.
- Aceite custo por hora finito e maior ou igual a zero, inclusive custo zero.
- Lance erro se o resultado calculado não for finito.
- Exija exatamente três argumentos no CLI; caso contrário, mostre uso e use código 1.
- Converta argumentos com `Number` e preserve mensagens acionáveis mais a forma de uso.
- Não silencie erros, transforme entrada inválida em zero ou remova validações.
- Mantenha os testes, lint e typecheck passando com `npm run check`.

## Segurança E Limites Operacionais

- Não adicione acesso a arquivos, rede, banco, ambiente, credenciais ou comandos externos.
- Não introduza telemetria, envio remoto, armazenamento, autenticação ou segredos.
- Não trate argumentos como código nem use avaliação dinâmica; valide-os numericamente no domínio.
- Não faça commit, tag ou alteração do histórico Git sem solicitação explícita.
- Não altere `README.md`, `PROJETO.md`, `LICENSE`, `package.json` ou código-fonte em tarefa documental.
- Não crie hooks, workflow do Harness Score, MCP, pre-commit, dependências de runtime, deploy ou funcionalidades não relacionadas.
- Não invente arquivos, serviços, endpoints, comandos, dependências ou requisitos.
- Preserve alterações preexistentes, evite comandos destrutivos e mantenha o escopo solicitado.

## Checklist De Conclusão

- [ ] A alteração está limitada aos arquivos solicitados.
- [ ] O cálculo e suas validações permanecem preservados.
- [ ] ESM, APIs nativas e dependências reais continuam coerentes.
- [ ] Sucesso, erros e código de saída continuam claros.
- [ ] Segurança, ausência de persistência e limites do CLI foram preservados.
- [ ] `npm run check` foi executado com sucesso.
- [ ] O diff foi revisado e não há alterações acidentais.
- [ ] Nenhum commit ou tag foi criado pelo agente.
