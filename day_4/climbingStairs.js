// solving using recursion 

// using recursion takes to much time

const climbingStairsFunc = (n) => {
  if (n == 1) return 1;

  if (n == 2) return 2;

  return climbingStairsFunc(n - 1) + climbingStairsFunc(n - 2);
};

const returnValue = climbingStairsFunc(4);

console.log(returnValue);
