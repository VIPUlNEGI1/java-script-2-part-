
function vipulnegi(){
    console.log("v")
    console.log("I")
    console.log("P")
    console.log("U")
    console.log("L")
}
// this is very simple

//vipulnegi() 

// function addNumbers(number1,number2){
//     console.log(number1+number2)
// }
addNumbers(3,4)


function addNumbers(number1,number2){
    // let result=number1+number2
    // return result
    return number1+number2
    console.log("return ke baad code kam nehi karta")
}

const result = addNumbers(8,3)
// console.log("result:" , result)

function login(usernane="we can give minimum value "){
    if(usernane===undefined){
        console.log("please enter user name")
         return
    }
    return `${usernane} just looged in`
}
//    console.log (login("vipul"))

console.log(login())
