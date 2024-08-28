function calculateCarPrice(num1){
    return num1
}
//this is the simple problem
console.log(calculateCarPrice(100))


//this is a spacial condation to write the more values
//... this is spread operator & restopertor
function calculateCarPrice(...num1){
    return num1
}
console.log(calculateCarPrice(200,433,2323,232,212,100))


// this is important for interview praspactiv
function calculateCarPrice1(val1, val2 , ...num1){
    return num1
}
console.log(calculateCarPrice1(200, 300, 100, 150))

// how to used(pass) object in in funcation
const user={
    username :"vipul",
    price : 199
}

function handleobjects(anyobject){
      console.log(`Username is${anyobject.username} and price si ${anyobject.price} `)
}
handleobjects(user)
handleobjects({
    username : "sam",
    price : 399
})

// how to pass the array in funcation 
const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))
