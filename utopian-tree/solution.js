/**
 * problem: https://www.hackerrank.com/challenges/utopian-tree/problem
 */

// sample input test
const sampleInput = [0, 1, 4];

// sample output test
const sampleOutput = [1, 2, 7];

function utopianTree(n) {
  let height = 1;
  let i = 1;
  if (n === 0) {
    return height;
  }

  while (i !== n + 1) {
    if (0 === (i % 2)) {
      height += 1;
    } else {
      height =  height + height;
    }
    i += 1;
  }
  return height;
}

function test(input, output) {
  if (utopianTree(input === output)) {
    console.log(`input: ${input}, output: ${output}, pass`);
  } else {
    console.log(`input: ${input}, output: ${output}, failed`);    
  }
}

sampleInput.forEach((element, i) => test(element, sampleOutput[i]));