// outside the {} we are called globle scope
let a=30
const b=10
var c=20
// {} this is scope
console.log(a)
if(true){
    // in a {}we are called block scope
    let a = 10
    const b=20
    c=300
    console.log(a)
}

if(true){
    const username="vipul1"
    if(username==="vipul1"){
        const website = "git-hub1"
        console.log(username+website)
    }
    // we cant access the website because the child funcation scope was limited and we cant access the child funcation
    // console.log(webside)
  
}

function addone(num){
    return num +1
}
addone(5)

const addtow =function(num){

}

const addtwo = function(num )
    {
        return num +2
    }
addtow(5)

// nested scope
function one(){
    const username="vipul"

    function tow(){
        const website = "git hub"
        console.log(username)
    }
tow()
}
one()


if(true){
    const username ="vipul"
    if(username==="vipul"){
        const website ="git-hub"
        console.log(username+website)
    }
    // console.log(website)
}
// console.log(username)

