const recordsCounter = (arr) => {
  let minimumScore;
  let maximumScore;
  let brokeMinimumScore = 0;
  let brokeMaximumScore = 0;
  arr.forEach((score, index) => {
    if (index === 0) {
      maximumScore = score;
      minimumScore = score;
    }

    if (score > maximumScore) {
      maximumScore = score;
      brokeMaximumScore++;
    }
    if (score < minimumScore) {
      minimumScore = score;
      brokeMinimumScore++;
    }
  });
  return [brokeMaximumScore, brokeMinimumScore];
};

const returnValue = recordsCounter([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);

console.log(returnValue);
