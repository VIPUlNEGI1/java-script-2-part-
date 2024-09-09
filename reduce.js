const myNum = [1,2,3,4]
const mytotal=myNum.reduce(function(acc,currval){
    console.log(`acc: ${acc} and currvalue: ${currval}`)
    return acc+currval
},0)
// how to write the arrow function in the reduce 
const myTotal = myNum.reduce((acc,currval)=> acc+currval,0)
console.log(mytotal)


const shoppitngcard = [
    {
        intem : "js",
        price : 2999

    }
,
    {
        intem : "racte",
        price : 3999

    },
    {
        intem : "Data scientest",
        price : 4999

    },
    {
        intem : "promt ingneeer",
        price : 5599

    }
]
 const pricetopay = shoppitngcard .reduce((acc,item) =>acc+item.price,0)
 console.log(pricetopay)