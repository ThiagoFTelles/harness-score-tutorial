# Instruções do Repositório

Este arquivo é o contexto global para agentes de código que trabalharem neste repositório.
Ele descreve o estado atual, deliberadamente pequeno, do projeto e deve ser lido antes
que qualquer alteração seja proposta ou aplicada.

## Produto E Objetivo

O produto é o Meeting Cost CLI, uma aplicação de linha de comando em Node.js.
Ele estima o custo total de mão de obra associado a uma reunião.
A entrada consiste em três valores posicionais: número de participantes, duração da
reunião em minutos e custo de cada participante por hora.
O cálculo usa participantes multiplicados pela duração em minutos e pelo custo horário,
dividindo o resultado por 60 para converter minutos em horas.
Para uma entrada válida, o terminal exibe o custo total formatado para a localidade pt-BR,
com exatamente duas casas decimais.
O produto atual não é um serviço web, não possui interface gráfica e não possui persistência.

## Estrutura Real

A raiz contém `package.json`, `README.md`, `PROJETO.md`, `LICENSE` e este `AGENTS.md`.
O diretório `src/` contém os dois arquivos de implementação existentes.
`src/domain.js` exporta a função pura `calculateMeetingCost`.
`src/cli.js` é o ponto de entrada que lê `process.argv`, chama o domínio e escreve no terminal.
`README.md` documenta o produto e um exemplo de uso.
`PROJETO.md` contém a descrição do projeto criada para o tutorial.
Não há atualmente diretório de testes, arquivo de configuração de testes, lint, formatter,
typecheck, CI, configuração MCP, hooks ou outros diretórios de aplicação.
Não presuma que arquivos não listados aqui existam.

## Comandos Disponíveis Hoje

O único script declarado em `package.json` é `start`.
Execute a aplicação com `npm start -- <participantes> <duração-em-minutos> <custo-por-hora>`.
Exemplo válido: `npm start -- 5 60 80`.
Também é possível executar diretamente o ponto de entrada com `node src/cli.js` e os três
argumentos posicionais, pois esse arquivo é o entrypoint atual do Node.js.
Não existe comando de teste, lint, formatação, typecheck ou build declarado no projeto.
Não invente um comando de validação e não documente comandos como se já estivessem configurados.

## Invariantes De Domínio

Todos os três argumentos precisam ser números finitos; valores que chegam como `NaN`,
`Infinity` ou `-Infinity` são rejeitados pela função de domínio.
O número de participantes precisa ser um inteiro seguro de JavaScript e maior ou igual a 1.
A duração precisa ser estritamente maior que zero; ela precisa ser finita, mas não precisa ser
um inteiro, conforme a implementação atual.
O custo por hora precisa ser maior ou igual a zero e também precisa ser finito.
Custo zero é válido; duração zero, duração negativa e custo negativo não são válidos.
O resultado calculado também precisa ser finito; caso contrário, o domínio lança um erro.
A função de domínio não deve ler argumentos do processo, escrever no console ou depender de rede.

## ESM E Dependências

O projeto declara `"type": "module"` em `package.json` e deve permanecer em ESM.
Importações locais devem usar o caminho compatível com ESM atualmente adotado, incluindo a
extensão `.js` quando aplicável.
A implementação atual usa somente APIs nativas do Node.js, incluindo `Intl.NumberFormat`.
Não há dependências de runtime ou de desenvolvimento declaradas.
Não adicione uma biblioteca apenas para substituir uma operação que já é feita pela plataforma.
Qualquer mudança de dependências exigiria uma decisão explícita e a atualização coerente do
manifesto e dos artefatos de instalação, em vez de um arquivo gerado incidentalmente.

## Validação E Erros

O CLI exige exatamente três argumentos; qualquer outra quantidade produz erro e código de
saída 1, além de exibir a forma de uso.
Os argumentos são convertidos com `Number` antes de serem enviados ao domínio.
Erros de tipo e de faixa lançados pelo domínio são capturados pelo CLI e apresentados como
mensagens acionáveis acompanhadas da forma de uso.
A saída de sucesso usa `Custo total de mão de obra:` e formatação pt-BR com duas casas.
Não silencie erros, não transforme entrada inválida em zero e não remova as validações existentes.
Como ainda não há suíte automatizada, mudanças devem ser verificadas manualmente com um caso
válido e com casos inválidos representativos, quando isso for necessário.

## Limites De Segurança

O programa atual não acessa arquivos, rede, banco de dados, variáveis de ambiente ou credenciais.
Ele não autentica usuários e não executa comandos externos.
Preserve esse limite para uma alteração que só envolva o cálculo ou a apresentação do resultado.
Não introduza coleta de dados, telemetria, envio remoto, armazenamento ou segredos no código.
Não trate argumentos da linha de comando como código executável nem use avaliação dinâmica.
Entradas devem continuar passando pela validação numérica explícita do domínio.

## Ações Proibidas Ao Agente

Não faça commit, crie tag ou altere o histórico Git sem uma solicitação explícita.
Não altere `README.md`, `PROJETO.md`, `LICENSE`, `package.json` ou o código-fonte para uma
tarefa que peça somente documentação de contexto.
Não crie rules, skills, hooks, sensors, CI, `.gitignore`, configuração MCP ou arquivos de teste
sem que a solicitação peça especificamente essa mudança.
Não invente serviços, endpoints, comandos, dependências, requisitos de produto ou arquivos.
Não apague alterações preexistentes do usuário e não use comandos destrutivos para limpar o worktree.
Mantenha as mudanças focadas no escopo solicitado e inspecione o diff antes de concluir.

## Checklist De Conclusão

- [ ] A mudança está limitada aos arquivos explicitamente solicitados.
- [ ] O comportamento existente do cálculo permanece preservado.
- [ ] As validações de finitude, faixa e inteireza segura foram respeitadas.
- [ ] O uso de ESM e das APIs nativas continua consistente.
- [ ] Erros continuam claros e resultam em código de saída não zero quando aplicável.
- [ ] Nenhuma dependência ou comando inexistente foi documentado como disponível.
- [ ] Nenhum segredo, acesso remoto, persistência ou execução dinâmica foi introduzido.
- [ ] O diff foi revisado e não há alterações acidentais em arquivos fora do escopo.
- [ ] O agente não criou commit nem tag.
- [ ] A validação disponível foi executada ou sua ausência foi registrada.
