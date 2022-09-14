const letterCount = require("../");

test("It should add two number", () => {
  expect(1 + 1).toBe(2);
});

test("letterCount works with regular strings", () => {
  expect(letterCount("awesome", "e")).toBe(2);
});
