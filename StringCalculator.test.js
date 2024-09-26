const { add } = require('./StringCalculator');

// Test 1
test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

