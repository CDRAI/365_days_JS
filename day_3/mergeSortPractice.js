
const mergeSortFunc = (arr)=>{

    if(arr.length < 2)
    return arr

    let midIndex = Math.floor((0+arr.length)/2)

    return mergeFunc(mergeSortFunc(arr.slice(0,midIndex)),mergeSortFunc(arr.slice(midIndex,arr.length)))


}

const mergeFunc = (leftArr,rightArr)=>{

let i =0;
let j =0;
let newArr = []


while(i<leftArr.length && j<rightArr.length){

if(leftArr[i]<rightArr[j])
{
    newArr.push(leftArr[i])
    i++
}
else{
    newArr.push(rightArr[j])
    j++
}

}
return newArr.concat(leftArr.slice(i)).concat(rightArr.slice(j))

}


const returnValue = mergeSortFunc([100,1,4,50,3,5,2,7,4,6])

console.log(returnValue)