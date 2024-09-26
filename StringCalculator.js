
// Implementation for Test 6
function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /[\n,]/;
  if (numbers.startsWith("//")) {
    const delimiterMatch = numbers.match(/^\/\/(.)\n/);
    delimiter = new RegExp(`[${delimiterMatch[1]}]`);
    // Remove the delimiter part
    numbers = numbers.slice(4);  
  }

  const numsArray = numbers.split(delimiter).map(Number);
  return numsArray.reduce((sum, num) => sum + num, 0);
}


module.exports = { add };