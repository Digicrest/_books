// returns an array containing all numbers from start up to end (inclusive)
function range(start, end, increment = 1) {
  let numbers = [];

  if (start > end)
    for (let i = start; i >= end; i += increment)
      numbers.push(i);
  else
    for (let i = start; i <= end; i += increment) 
      numbers.push(i);

  return numbers;
}

// takes an array of numbers and returns the sum of these numbers
const sum = arr => 
  arr.reduce((n, sum) => sum += n, 0);

// there is a constant time method to solve the sum, for a rangeof consecutive numbers instead od the linear method above
// the caveat is this only works assuming a start value of 1.
const oiSum = arr => (arr.length * (arr.length + 1)) / 2;


console.log(sum(range(1, 10, 1)));
console.log(oiSum(range(1, 10, 1)));