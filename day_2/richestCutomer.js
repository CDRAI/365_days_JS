const richestCustomerWealth = (arr)=>{
return Math.max(...arr.map(customer=>{
    return customer.reduce((acc,curr)=>{
        return acc +=curr
    },0)
}))
}

const returnValue = richestCustomerWealth([[1,2,3],[3,2,1]])

console.log(returnValue)