const { add } = require('./StringCalculator');

// Test 1: Empty String Returns 0
test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

// Test 2: Single Number Returns That Number
test('should return the number for a single number', () => {
  expect(add("1")).toBe(1);
});

