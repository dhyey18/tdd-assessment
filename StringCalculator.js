
// Implementation for Test 7

function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);
    delimiter = new RegExp(`[${delimiterMatch[1]}]`);
    numbers = numbers.slice(4);
  }

  const numsArray = numbers.split(delimiter).map(Number);
  
  // Check for negative numbers
  const negatives = numsArray.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

  return numsArray.reduce((sum, num) => sum + num, 0);
}


module.exports = { add };