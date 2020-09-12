/**
 * problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem
 */

// SAMPLE INPUT
const candlesArr = [3, 2, 1, 3];

function birthdayCakeCandles(ar) {
  const tallestCandleHeight = Math.max(...ar);
  const tallestCandles = ar.reduce((acc, element) => {
    if (element === tallestCandleHeight) {
      acc.push(element);
      return acc;
    }
    return acc;
  }, []);
  return tallestCandles.length;
}

console.log(birthdayCakeCandles(candlesArr));