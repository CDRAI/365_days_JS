// Time complexity = O(logn)
// Space complexity = O(1)


const reduceToZeroFunc= (num)=>{
    let count =0;
    while(num>0){
      count++
      // & logical bit wise operator where 1 is the bitmask
        if(!(num & 1))
        // right shift operation
        num>>=1
        else
        num--
    }
    
    return count
}

// const reduceToZeroFunc = (num) => {
//   let count = 0;
//   while (num > 0) {
//     count++;

//     if (num % 2 === 0) {
//       num = num / 2;
//       continue;
//     }
//     num--;
//   }
//   return count;
// };

const returnValue = reduceToZeroFunc(123);

console.log(returnValue);
