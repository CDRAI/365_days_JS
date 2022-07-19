// convert AMS & PMS to their correct forms

const time = (s) => {
  let currString = s;
  let prevTime = currString.split(":")[0];
  let mutatedTime;
  if (s.includes("PM")) {
    if (Number(prevTime >= 12)) return currString.replace("PM", "");
    mutatedTime = (Number(prevTime) + 12).toString();
    return currString.replace(prevTime, mutatedTime).replace("PM", "");
  }
  if (Number(prevTime) >= 12) {
    mutatedTime = (Number(prevTime) - 12).toString();
    return `0` + currString.replace(prevTime, mutatedTime).replace("AM", "");
  }

  return currString.replace("AM", "");
};

const returnValue = time("13:00:00AM");

console.log(returnValue);
