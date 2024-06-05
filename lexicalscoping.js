
function outer(){
    let username="vipul"

    function inner(){
     console.log(username);

    }
    function innertow(){
        console.log(username)
    }
    inner()
    innertow
}
outer()
console.log("to outer",username)

// in a lexicalscoping inner funcations access outer funcation but outer funcation not access inner function
