/**
 * https://www.hackerrank.com/challenges/mini-max-sum/problem
 */

// const sampleInput = [1, 3, 5, 7, 9]
// const sampleInput = [1, 2, 3, 4, 5]


function miniMaxSum (arr) {
  const max = Math.max( ...arr )
  const min = Math.min( ...arr )

  const maxSum = arr.filter(current => current !== max).reduce((a,b) => a + b, 0)
  const minSum = arr.filter(current => current !== min).reduce((a,b) => a + b, 0)

  console.log(maxSum, minSum)
}

miniMaxSum(sampleInput)
