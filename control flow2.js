// truthy value :"0",'flase',"flase","  ",[] ,{} ,function(){}

// flasey value : false , 0 , -0, 0n(it used in bigint values),"",null,undefined,NaN
 



const userEmaail= "vi@gmail.com"

if(userEmaail){
    console.log("got user email")
} else{
    console.log("Don't have user email")
}

// how to check value is empty

// how to check the array
console.log("array is empty")
    if(userEmaail.length===0){
}

// how the check the object
const emptyobj ={}
if(Object.keys(emptyobj).length===0){
console.log("Object is empty");
}


//value equal
false==0
true
false==''
true
0==''
true

// nullish Coalescing operator (??)

// why we used null operator? -: becauause some condations we get a tow values and highier chance to we get (NULL or undefine or value)value in this time or programe was sohwing truble avoid this problem we used ?? (nullish operator).
val1= 5 ?? 10
val1= null ?? 10
val1= undefined ??15
console.log(val1);

val1 =null ?? 10 ?? 20
 console.log(val1)


 // Terniary Operator

//  condition ? true :false

 const iceTeaPrice =100
 iceTeaPrice<=80 ? console.log("less than 80") : console.log("more than 80")
