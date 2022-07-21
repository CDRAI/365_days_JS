const isPalindromeFunc = (str) => {
  if (str.length === 1 || str.length === 0) return true;

  if (str.charAt(0) === str.charAt(str.length - 1))
    return isPalindromeFunc(str.slice(1, str.length - 1));

  return false;
};

const returnValue = isPalindromeFunc("tattarrattat");

console.log(returnValue);
