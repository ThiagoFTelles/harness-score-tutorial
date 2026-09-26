import assert from "node:assert/strict";
import test from "node:test";
import { calculateMeetingCost } from "../src/domain.js";

test("calcula o custo de uma reunião", () => {
  assert.equal(calculateMeetingCost(5, 60, 80), 400);
});

test("arredonda o custo formatado para duas casas decimais", () => {
  const formattedCost = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(calculateMeetingCost(1, 1, 1));

  assert.equal(formattedCost, "0,02");
});

test("rejeita intervalos inválidos", () => {
  assert.throws(() => calculateMeetingCost(0, 60, 80), RangeError);
  assert.throws(() => calculateMeetingCost(-1, 60, 80), RangeError);
  assert.throws(() => calculateMeetingCost(1.5, 60, 80), RangeError);
  assert.throws(
    () => calculateMeetingCost(Number.MAX_SAFE_INTEGER + 1, 60, 80),
    RangeError,
  );
  assert.throws(() => calculateMeetingCost(1, 0, 80), RangeError);
  assert.throws(() => calculateMeetingCost(1, -1, 80), RangeError);
  assert.throws(() => calculateMeetingCost(1, 60, -1), RangeError);
});

test("rejeita entradas não finitas em cada argumento", () => {
  for (const value of [
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ]) {
    assert.throws(() => calculateMeetingCost(value, 60, 80), TypeError);
    assert.throws(() => calculateMeetingCost(1, value, 80), TypeError);
    assert.throws(() => calculateMeetingCost(1, 60, value), TypeError);
  }
});

test("rejeita um resultado não finito", () => {
  assert.throws(
    () =>
      calculateMeetingCost(
        Number.MAX_SAFE_INTEGER,
        Number.MAX_VALUE,
        Number.MAX_VALUE,
      ),
    RangeError,
  );
});
