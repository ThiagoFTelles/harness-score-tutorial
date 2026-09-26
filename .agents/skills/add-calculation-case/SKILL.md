---
name: add-calculation-case
description: "Use when adding or changing a meeting-cost calculation rule, especially when edge cases and manual verification must be evaluated."
---

# Adicionar Caso De Cálculo

1. Leia `src/domain.js` e identifique a regra ou condição que será alterada.
2. Preserve a função pura `calculateMeetingCost` e a separação do CLI.
3. Especifique o caso normal e os limites afetados antes de editar.
4. Considere participantes não inteiros, zero, negativos e valores acima do inteiro seguro.
5. Considere duração zero, negativa, fracionária, não finita e custo zero ou negativo.
6. Preserve a rejeição de `NaN`, infinitos e resultados não finitos.
7. Edite somente a validação ou fórmula necessária, sem introduzir dependências.
8. Execute um caso válido com `npm start -- 5 60 80` e confira `400,00`.
9. Execute casos inválidos representativos com `node src/cli.js` e confirme erro e código 1.
10. Revise o diff e registre a ausência de suíte automatizada, lint e typecheck.
