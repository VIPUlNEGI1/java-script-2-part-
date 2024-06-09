// //if 


// // comperision operator  -:  < (lessthen), 
// const isusername = 2
// const isusername1 =12
// if(2<12){
//     console.log("javascript")
// }
// // >(greaterthen), 

// if(2>12){
//     console.log("HTML,Css,JS")
// }
// // <=(lessthen equal), 
// const isusername2 = 2
// const isusername3 =2
// if(2<=2){
//     console.log("frontend")
// }
// // >= (greater than equal),
// const isusername4 = 8
// const isusername5=2
// if(8>=2){
//     console.log("backend")
// }
// //  == (equalor or comperision)

// const user =12
// const user1=12
// if(12==12){
//     console.log("fullstack")
// }
// //  ,!=(not equal) 
// const isusername6 = 2
// const isusername7 =3
// if(2!=3){
//     console.log("learn")
// }


// //  , ===(its check value is equal and its type is same or not)
// const isusername9 = 2
// const isusername10 ="2"
// if(2===2){
//     console.log("frontend")
// }

// // !==
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
    //multiple condation checking  || &&
    if (userloogin&&debitcard){ //and operator : all value true
        console.log("please enter sir!")
    }
    if(loginemail || logingoogel){//or operatora: only one value is true
        console.log("user loggin")
    }


    


