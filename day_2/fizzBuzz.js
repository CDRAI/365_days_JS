const fizzBuzzFunc = (n) => {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("FizzBuzz");
      continue;
    }
    if (i % 3 !== 0 && i % 5 !== 0) {
      arr.push(i.toString());
    }

    i % 3 == 0 && arr.push("Fizz");
    i % 5 == 0 && arr.push("Buzz");
  }

  return arr;
};

const returnValue = fizzBuzzFunc(15);

console.log(returnValue);
