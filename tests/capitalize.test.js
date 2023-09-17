import capitalize from '../functions/capitalize.js'

test("capitalize first letter", () => {
	expect(capitalize("hello")).toBe("Hello");
});

test("capitalize first letter", () => {
	expect(capitalize("HELLO")).toBe("HELLO");
});

test("capitalize first letter", () => {
	expect(capitalize("wOrLd")).toBe("WOrLd");
});
