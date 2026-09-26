export function calculateMeetingCost(participants, durationMinutes, hourlyCost) {
  const inputs = [
    ["Número de participantes", participants],
    ["Duração em minutos", durationMinutes],
    ["Custo por hora", hourlyCost],
  ];

  for (const [label, value] of inputs) {
    if (!Number.isFinite(value)) {
      throw new TypeError(`${label} deve ser um número finito.`);
    }
  }

  if (!Number.isSafeInteger(participants) || participants < 1) {
    throw new RangeError("O número de participantes deve ser um inteiro positivo.");
  }
  if (durationMinutes <= 0) {
    throw new RangeError("A duração deve ser maior que zero minuto.");
  }
  if (hourlyCost < 0) {
    throw new RangeError("O custo por hora não pode ser negativo.");
  }

  const totalCost = participants * durationMinutes * hourlyCost / 60;
  if (!Number.isFinite(totalCost)) {
    throw new RangeError("O custo calculado excede o limite numérico suportado.");
  }

  return totalCost;
}