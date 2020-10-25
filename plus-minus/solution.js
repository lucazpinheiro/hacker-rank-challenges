/**
 * problem: https://www.hackerrank.com/challenges/plus-minus/problem
 */

// const sampleInput = [-4, 3, -9, 0, 4, 1];

const sampleInput = [1, 1, 0, -1, -1];


function plusMinus(arr) {
  const numbers = arr.reduce((acc, element) => {
    if (element > 0) acc.positive += 1;
    if (element < 0) acc.negative += 1;
    if (element === 0) acc.zeros += 1;

    return acc;
  }, {
    positive: 0,
    negative: 0,
    zeros: 0,
  });

  console.log((numbers.positive / arr.length).toFixed(6));
  console.log((numbers.negative / arr.length).toFixed(6));
  console.log((numbers.zeros / arr.length).toFixed(6));
}

plusMinus(sampleInput);