// what is this : this is the current context it is used to reffer current context of any variable
// in this case username is the current context
// with the help can change current context of the date 
const user= {
    username:"vipul negi",
    price: 8569,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // in that case this. is used to access the any dat in the function 
        console.log(this)
    }

}
user.welcomeMessage()
// note in a browser object are all window object htat is the reasion browser object can access the window function
// then we are change the welcomeMessage value
user.username="sam"
user.welcomeMessage()
console.log(this)

function doodoo()
{
    let username='vipul'
    console.log(this.username)
// we cant used this in funcation in this type we used only this type in a objects


    console.log(this)
}
doodoo()


// +++++how to declare funcations with the help of arrow function+++++++\

const dood2 = function(){
    //this is a normul funcation 
    let username="vipul"
    console.log (this.username)
}
// in arrow funcation we are not used this keyword but we are used normel function this arrow function ha haaa haaa
// but any chance we are used arrow function in this key word the result is with the odject is undfine and without the object is {}
const dood1=()=>{
    let username ='vipul'
    console.log (this.username)
}

// first
// arrow function 
const addtow =(num1,num2)=>{
    return num1+num2
}
addtow()
// {} we used this  in arrow function to warp we  need to write return keyword
// but in arrow function


// secound opction is implecite return to write any arrow function
const addtow1 = (num1, num2)=> (num1+num2)
console.log(addtow(3,4))
//  and we are used to wrape this() we dont need to write the return keyword and the is very widly used in react.js


// () it is helpfull to return object
console.log({username:"vipul"})


