const binarySearch = (arr,target)=>{
let startIndex = 0;
let endIndex = arr.length -1

return binarySearchFunc(arr,startIndex,endIndex,target)
}

const binarySearchFunc = (arr,startIndex,endIndex,target)=>{

if(startIndex> endIndex)
return false

let midIndex = Math.floor((startIndex+endIndex)/2)

if(arr[midIndex] === target)
return true

if(arr[midIndex]<target)
return binarySearchFunc(arr,midIndex+1,endIndex,target)

return binarySearchFunc(arr,startIndex,midIndex-1,target)

}

const returnValue = binarySearch([1,3,5,7,9,11,13],3)

console.log(returnValue)