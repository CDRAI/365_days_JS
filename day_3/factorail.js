// this has the time complexity of O(n!)


const factorilFunc = (n)=>{
if(n === 1)
return 1

return n*factorilFunc(n-1)


}


const returnValue = factorilFunc(5)
console.log(returnValue)