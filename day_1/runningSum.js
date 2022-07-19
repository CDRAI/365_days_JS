const runningSumFun = (nums)=>{
    
    return nums.map((num,index)=>{
        return nums.slice(0,index+1).reduce((acc,curr)=>acc+=curr,0)
})
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