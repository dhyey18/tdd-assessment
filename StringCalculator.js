
// Implementation for Test 3
function add(numbers) {
  if (!numbers) return 0;
  const numsArray = numbers.split(',').map(Number);
  return numsArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };