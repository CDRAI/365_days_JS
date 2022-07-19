const binarySearch = (nums,target)=>{
let startIndex = 0;
let endIndex = nums.length

return binarySearchFunc(nums,startIndex,endIndex,target)

}

const binarySearchFunc =(nums,startIndex,endIndex,targetValue)=>{
    let midIndex = Math.floor((startIndex+endIndex)/2)

if(startIndex>endIndex)
return -1
if(nums[midIndex] === targetValue)
return midIndex

if(nums[midIndex]<targetValue)
return binarySearchFunc(nums,midIndex+1,endIndex,targetValue)
else
return binarySearchFunc(nums,startIndex,midIndex-1,targetValue)
}


const returnValue = binarySearch([-2,0,3,5,9,12],5)

console.log(returnValue)