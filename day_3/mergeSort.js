const mergeSortFunc = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let midIndex = Math.floor(arr.length / 2);

  let leftArr = arr.slice(0, midIndex);
  let rightArr = arr.slice(midIndex, arr.length);

  return mergeFunc(mergeSortFunc(leftArr), mergeSortFunc(rightArr));
};

const mergeFunc = (leftArr, rightArr) => {
  let resultArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  console.log({ leftArr, rightArr });
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
};

const returnValue = mergeSortFunc([2, 10, 5, 20, 7, 6, 1]);

console.log(returnValue);
