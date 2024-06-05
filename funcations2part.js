function calculateCarPrice(num1){
    return num1
}
//this is the simple problem
console.log(calculateCarPrice(100))


//this is a spacial condation to write the more values
function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(200,433,2323,232,212,100))

// how to used(pass) object in in funcation
const user={
    username :"vipul",
    price : 199
}

function handleobjects(anyobject){
      console.log(`Username is${anyobject.username} and price si ${anyobject.price} `)
}

// how to pass the array in funcation 
const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))
