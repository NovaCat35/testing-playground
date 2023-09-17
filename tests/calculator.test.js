import { add, subtract, divide } from "../functions/calculator.js";

test("basic adds", () => {
	expect(add(2, 2)).toBe(4);
});

test("adding floating point numbers", () => {
	expect(add(0.1, 0.2)).toBeCloseTo(0.3);
});

test("hard adds", () => {
	expect(add(23456, 202)).toBe(23658);
});

test("basic subtraction", () => {
	expect(subtract(5, 3)).toBe(2);
});

test("negative subtraction", () => {
	expect(subtract(3, 5)).toBe(-2);
});

test("subtracting floating point numbers", () => {
	expect(subtract(0.1, 0.2)).toBeCloseTo(-0.1);
});

test("decimal divide", () => {
	expect(divide(3, 2)).toBeCloseTo(1.5);
});

test("basic divide", () => {
	expect(divide(4, 2)).toBeCloseTo(2);
});

test("divide", () => {
	expect(divide(3, 0)).toBe(Infinity);
});

