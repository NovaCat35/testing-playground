import caesar from '../functions/caesar.js'

test("happy trail cipher", () => {
	expect(caesar("hello")).toEqual("ifmmp");
});
test("z cipher", () => {
	expect(caesar("zebra")).toEqual("afcsb");
});
test("sentence cipher", () => {
	expect(caesar("hello zebra!")).toEqual("ifmmp afcsb!");
});

test("capital letters cipher", () => {
	expect(caesar("Hello Zebra!")).toEqual("Ifmmp Afcsb!");
});
test("standard cipher", () => {
	expect(caesar("defend the east wall of the castle")).toEqual("efgfoe uif fbtu xbmm pg uif dbtumf");
});