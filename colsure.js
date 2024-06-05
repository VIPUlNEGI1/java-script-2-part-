// a closure is the combination of a funcation's bundeled together and in the closure the inner funcation was access the outer funcation data , objects etc.
// but first we need to understand lexicalscoping to understand properly closure

function makefuncation(){

    const name ="vipul negi"
    function displayName(){
        console.log(name)
    }
    return displayName
}
const myfun = makefuncation()
myfun()


// in a closer funcation we are return hole funcation's  lexicalscope
