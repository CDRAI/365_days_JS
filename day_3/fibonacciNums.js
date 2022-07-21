// this has the time complexity of O(n^2)

const fibonacciNumbers = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacciNumbers(n - 1) + fibonacciNumbers(n - 2);
};

const returnValue = fibonacciNumbers(7);
console.log(returnValue);
