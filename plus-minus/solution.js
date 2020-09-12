/**
 * problem: https://www.hackerrank.com/challenges/plus-minus/problem
 */

const sampleInput = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  const positiveNumbers = arr.reduce((acc, element) => {
    if (element > 0) acc += 1;
    return acc;
  }, 0);
  const negativeNumbers = arr.reduce((acc, element) => {
    if (element < 0) acc += 1;
    return acc;
  }, 0);
  const zeros = arr.reduce((acc, element) => {
    if (element === 0) acc += 1;
    return acc;
  }, 0);
  console.log((positiveNumbers / arr.length).toFixed(6));
  console.log((negativeNumbers / arr.length).toFixed(6));
  console.log((zeros / arr.length).toFixed(6));
}

plusMinus(sampleInput);