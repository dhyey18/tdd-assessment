
// Implementation for Test 3
function add(numbers) {
  if (!numbers) return 0;
  // Regex to handle both commas and newlines
  const numsArray = numbers.split(/[\n,]/).map(Number);  
  return numsArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };