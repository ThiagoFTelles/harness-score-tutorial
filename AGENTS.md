# Contexto do Repositório

## Produto

- Mantenha o Meeting Cost CLI como uma aplicação Node.js de linha de comando.
- Calcule o custo de mão de obra: participantes x duração em minutos x custo/hora / 60.
- Aceite três argumentos posicionais: participantes, duração em minutos e custo por hora.
- Formate o sucesso com `Intl.NumberFormat` em pt-BR e exatamente duas casas decimais.
- Preserve o escopo atual: sem interface gráfica, serviço web ou persistência.

## Estrutura Real

- Raiz: `package.json`, `README.md`, `PROJETO.md`, `LICENSE` e `AGENTS.md`.
- `src/domain.js`: exporta a função pura `calculateMeetingCost`.
- `src/cli.js`: lê `process.argv`, converte argumentos, chama o domínio e escreve no terminal.
- Não presuma testes, lint, formatter, typecheck, build, CI, hooks, MCP ou outros diretórios.

## Comandos E Módulos

- O único script é `start`: `npm start -- <participantes> <duração-em-minutos> <custo-por-hora>`.
- Exemplo válido: `npm start -- 5 60 80`.
- Também é válido executar `node src/cli.js` com os mesmos três argumentos.
- Não documente nem invente comandos que não estejam configurados.
- Preserve ESM (`"type": "module"`) e as extensões `.js` nas importações locais.
- Use apenas APIs nativas; não há dependências declaradas de runtime ou desenvolvimento.
- Só adicione dependências com decisão explícita e atualização coerente do manifesto e instalação.

## Invariantes E Erros

- Rejeite qualquer argumento não finito, incluindo `NaN`, `Infinity` e `-Infinity`.
- Exija participantes como inteiro seguro JavaScript maior ou igual a 1.
- Exija duração finita e estritamente maior que zero; ela pode ser fracionária.
- Aceite custo por hora finito e maior ou igual a zero, inclusive custo zero.
- Lance erro se o resultado calculado não for finito.
- Exija exatamente três argumentos no CLI; caso contrário, mostre uso e use código 1.
- Converta argumentos com `Number` e preserve mensagens acionáveis mais a forma de uso.
- Não silencie erros, transforme entrada inválida em zero ou remova validações.
- Sem testes automatizados, valide manualmente um caso válido e casos inválidos representativos.

## Segurança E Limites Operacionais

- Não adicione acesso a arquivos, rede, banco, ambiente, credenciais ou comandos externos.
- Não introduza telemetria, envio remoto, armazenamento, autenticação ou segredos.
- Não trate argumentos como código nem use avaliação dinâmica; valide-os numericamente no domínio.
- Não faça commit, tag ou alteração do histórico Git sem solicitação explícita.
- Não altere `README.md`, `PROJETO.md`, `LICENSE`, `package.json` ou código-fonte em tarefa documental.
- Não crie rules, skills, hooks, sensors, CI, `.gitignore`, MCP ou testes sem solicitação explícita.
- Não invente arquivos, serviços, endpoints, comandos, dependências ou requisitos.
- Preserve alterações preexistentes, evite comandos destrutivos e mantenha o escopo solicitado.

## Checklist De Conclusão

- [ ] A alteração está limitada aos arquivos solicitados.
- [ ] O cálculo e suas validações permanecem preservados.
- [ ] ESM, APIs nativas e dependências reais continuam coerentes.
- [ ] Sucesso, erros e código de saída continuam claros.
- [ ] Segurança, ausência de persistência e limites do CLI foram preservados.
- [ ] A validação disponível foi executada; se inexistente, isso foi registrado.
- [ ] O diff foi revisado e não há alterações acidentais.
- [ ] Nenhum commit ou tag foi criado pelo agente.
