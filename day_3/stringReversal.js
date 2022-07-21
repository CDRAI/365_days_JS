const stringReversalFunc = (str) => {
  if (str === "") return "";

  return stringReversalFunc(str.substring(1)) + str.charAt(0);
};

const returnValue = stringReversalFunc("hello world");

console.log(returnValue);
