import { calculateMeetingCost } from "./domain.js";

const usage =
  "Uso: npm start -- <participantes> <duração-em-minutos> <custo-por-hora>";
const args = process.argv.slice(2);

if (args.length !== 3) {
  console.error(
    `Erro: informe participantes, duração e custo por hora.\n${usage}`,
  );
  process.exitCode = 1;
} else {
  const [participants, durationMinutes, hourlyCost] = args.map(Number);

  try {
    const totalCost = calculateMeetingCost(
      participants,
      durationMinutes,
      hourlyCost,
    );
    const formattedCost = new Intl.NumberFormat("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(totalCost);
    console.log(`Custo total de mão de obra: ${formattedCost}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`Erro: ${message}\n${usage}`);
    process.exitCode = 1;
  }
}
