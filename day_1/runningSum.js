const runningSumFun = (arr)=>{
    
 arr.forEach((num,index)=>{
    if(index ===0)
    return num
    return  arr[index] += arr[index-1]
})
return arr
}


const returnValue = runningSumFun([1,2,3,4])
console.log(returnValue)


// Solutions with the best output

// var runningSum = function(nums) {
//     for(let i=1;i<nums.length;i++){
//         nums[i] += nums[i-1] 
//     }
//     return nums
    
//     };