

const richestCustomerWealth = (arr) => {
  return Math.max(
    ...arr.map((customer) => {
      return customer.reduce((acc, curr) => {
        return (acc += curr);
      }, 0);
    })
  );
};

// optimum solution

// const richestCustomerWealth = (accounts) => {
//     let currentMaxValue = 0;
//     let currentWealth ;

//     for (let i = 0; i < accounts.length ; i++) {
//         currentWealth = 0
//       for (let j = 0; j < accounts[i].length; j++) {
//         currentWealth += accounts[i][j];
//         }

//       currentMaxValue = Math.max(currentMaxValue, currentWealth);

//   }

//     return currentMaxValue;
// };

const returnValue = richestCustomerWealth([
  [1, 2, 3],
  [3, 2, 2],
  [7, 8],
  [1, 2, 2, 1, 4, 1],
]);

console.log(returnValue);
