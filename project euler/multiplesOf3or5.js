/**
 * https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
 */

function sumOfMultiplesOf(number, multiplier) {
  let first = multiplier;
  let totalMultiples = parseInt(number / multiplier);
  let last = totalMultiples * multiplier;
  let sum = ((first + last) * totalMultiples) / 2;
  return sum;
}

function multiplesOf3and5(number) {
  let sum3 = sumOfMultiplesOf(number - 1, 3);
  let sum5 = sumOfMultiplesOf(number - 1, 5);
  let sum15 = sumOfMultiplesOf(number - 1, 15);

  return sum3 + sum5 - sum15;
}

let s = multiplesOf3and5(1000);
console.log(s);
