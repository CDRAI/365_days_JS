// get min and max value from the sum of (arr.length-1) numbers of the array excluding 1 value each tiem

const minMaxFunc = (arr) => {
  let newArr = arr.map((item, index) => {
    const currIndex = index;
    return arr.reduce((acc, curr, index) => {
      if (index === currIndex) return acc;

      return acc + curr;
    }, 0);
  });
  let minimumNum = Math.min(...newArr);
  let maximumNum = Math.max(...newArr);

  return { minimumNum, maximumNum };
};

const returnValue = minMaxFunc([5, 2, 3, 4, 5]);

console.log(returnValue);
