---
description: Regras de domínio e arquitetura aplicáveis somente ao código-fonte do Meeting Cost CLI.
applyTo: "src/**"
---

# Regras De Source

- Mantenha `calculateMeetingCost` em `src/domain.js` como função pura e exportada.
- Mantenha leitura de `process.argv`, formatação e saída do terminal em `src/cli.js`.
- Preserve a separação entre cálculo de domínio e interface de linha de comando.
- Valide três números finitos; participantes devem ser inteiros seguros >= 1.
- Aceite duração finita > 0, inclusive fracionária, e custo por hora finito >= 0.
- Rejeite resultados calculados que não sejam finitos.
- Preserve ESM e extensões `.js` nas importações locais.
- Use somente APIs nativas já disponíveis no projeto.
