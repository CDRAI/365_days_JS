const reduceToZeroFunc = (num) => {
  let count = 0;
  while (num > 0) {
    count++;

    if (num % 2 === 0) {
      num = num / 2;
      continue;
    }
    num--;
  }
  return count;
};

const returnValue = reduceToZeroFunc(14);

console.log(returnValue);
