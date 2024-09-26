function add(numbers) {
  // Return 0 if no input is provided
  if (!numbers) return 0;

  let delimiter = /[\n,]/; // Default delimiters: newline and comma

  // Check for custom delimiters
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.+)\n/);
    if (delimiterMatch) {
      delimiter = new RegExp(`[${delimiterMatch[1]}]`); // Create a regex for the custom delimiter
      numbers = numbers.slice(delimiterMatch[0].length); // Remove the delimiter line from the input
    }
  }

  // Split the numbers into an array and convert to numbers
  const numsArray = numbers.split(delimiter).map(Number);

  // Validate for negative numbers
  const negatives = numsArray.filter(num => num < 0);
  if (negatives.length) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
  }

  // Filter out numbers greater than 1000 and sum the remaining numbers
  return numsArray
    .filter(num => num <= 1000) // Ignore numbers greater than 1000
    .reduce((sum, num) => sum + num, 0); // Sum the remaining numbers
}

module.exports = { add };