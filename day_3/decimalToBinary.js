const decimalToBinaryFunc = (num, result) => {
  console.log({ num });
  if (num === 0) return result;

  result = (num % 2) + result;

  return decimalToBinaryFunc(Math.floor(num / 2), result);
};

const returnValue = decimalToBinaryFunc(233, "");
console.log(returnValue);
