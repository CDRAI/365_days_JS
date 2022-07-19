// implementation of binary search using recursion

let arr = [1, 3, 5, 8, 10, 13, 16, 20, 22, 26, 33 ,45 ,62 ,67, 75 ,80];
let startIndex = 0;
let endIndex = arr.length - 1;
let targetValue = 15;

const binarySearchFunc = (arr, startIndex, endIndex, targetValue) => {
  if (startIndex > endIndex) return false;
  let midIndex = Math.floor((startIndex + endIndex) / 2);
  if (arr[midIndex] === targetValue) return true;

  if (arr[midIndex] < targetValue)
    return binarySearchFunc(arr, midIndex + 1, endIndex, targetValue);
  else return binarySearchFunc(arr, startIndex, midIndex - 1, targetValue);
};

const returnValue = binarySearchFunc(arr, startIndex, endIndex, targetValue);

console.log(returnValue);
