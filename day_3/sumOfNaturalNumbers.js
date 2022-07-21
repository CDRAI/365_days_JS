const sumOfNaturalNumbersFunc = (n) => {
  if (n === 1) return n;

  return sumOfNaturalNumbersFunc(n - 1) + n;
};

const returnValue = sumOfNaturalNumbersFunc(10);

console.log(returnValue);
