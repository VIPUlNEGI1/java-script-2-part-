// //if 
// 1>this code is excuate or note
if(true ){

}
// yes it is execuate because condation is true


// this code is execuate or not
if(false){

}
//not because this condation is false

// comperision operator  -:  < (lessthen), 
const isusername = 2
const isusername1 =12
if(2<12){
    console.log("javascript")
}
// // >(greaterthen), 
// var keyword is scope glodle
const score1 = 200
if (score1 > 100){
    const power = 'fly'
    console.log(` user power :  ${power}`)
}



if(2>12){
    console.log("HTML,Css,JS")
}
// <=(lessthen equal), 
const isusername2 = 2
const isusername3 =2
if(2<=2){
    console.log("frontend")
}
// >= (greater than equal),
const isusername4 = 8
const isusername5=2
if(8>=2){
    console.log("backend")
}
//  == (equalor or comperision)

const user =12
const user1=12
if(12==12){
    console.log("fullstack")
}
//  ,!=(not equal) 
const isusername6 = 2
const isusername7 =3
if(2!=3){
    console.log("learn")
}


// //  , ===(its check value is equal and its type is same or not)
// const isusername9 = 2
// const isusername10 ="2"
// if(2===2){
//     console.log("frontend")
// }

// // !== this is negitive strick check
// if(2!=="2"){
//     console.log("opposit")
// }

const score =200
if(score>200) {
    const power="fly"
    console.log(`User power: ${power}`)
}

// tis showing reeor because we know this is scope prooblem ( but var scope is globle but that is  the reasion we dont used var in javascript)
// console.log (`User power:${power}`)




// short hand notation

// implicits scope in implicitsscope we are assume  scope and its execute in one single line


// const balance = 1
//if (balance <5000000) console.log("vipul is rich person") not good code 

// nesting
balance = 1100
// if (balance >500) console.log("vipul");it is not good
if(balance<500){
    console.log(" greater than 1000")
} 

       else if(balance<750){
          ("dont give the money")
        }    
        else if (balance<900){
        ("you are layer")
       }
       
else {
          console.log("haaa haa haaaa")
    }


    const userloogin =true
    const debitcard =  true
    const logingoogel=false
    const loginemail=true
    //  || this operator is used to or condation 
    //multiple condation checking  || &&   in this time one or  condation is false the code ard not run 
    if (userloogin&&debitcard){ //and operator : all value true
        console.log("please enter sir!")
    }
    if(loginemail || logingoogel){//or operatora: only one value is true
        console.log("user loggin")
    }

// what is Nullish Operaator (??): null undefined

// why we used this operoter -- this nullish operator is used to mostly  database because sone time our first value value is nillis the giving the secound value in our cadebase we used this nullis operator


// for example
let val1;

// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1)
    
// tarniary operator

//condition ? true : false 
 const icetea = 100
 icetea >= 80 ? console.log("less then 80"): console.log("more then 80")
