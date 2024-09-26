const { add } = require('./StringCalculator');

// Test 1: Empty String Returns 0
test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

// Test 2: Single Number Returns That Number
test('should return the number for a single number', () => {
  expect(add("1")).toBe(1);
});

// Test 3: Two Numbers Returns Their Sum
test('should return sum of two comma-separated numbers', () => {
  expect(add("1,2")).toBe(3);
});

// Test 4: Handle an Unknown Number of Numbers
test('should return sum of multiple comma-separated numbers', () => {
  expect(add("1,2,3,4")).toBe(10);
});

// Test 5: Handle New Lines as Delimiters
test('should handle newlines between numbers', () => {
  expect(add("1\n2,3")).toBe(6);
});

// Test 6: Support Different Delimiters
test('should support different delimiters', () => {
  expect(add("//;\n1;2")).toBe(3);
});

// Test 7: Throw Exception for Negative Numbers 
test('should throw an exception for negative numbers', () => {
  expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
});

