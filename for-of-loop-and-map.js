// this for of loop is used spacialy for array

// for off loop syntex

const arr1 = [1,2,3,4,5,6]
// in this element we are used to other cases is "i" in other loops
// object means which var we make loop
for (const element of arr1) {
    console.log(num)
}


//for of loop
// what is higher order funcation
// this loop in Array



// this loop in string
const greetings = "Hellow world!"
for(const greet of greetings){
   console.log(`Each char is ${greet}`)
   //this is used to berak key word for example a,d,s,f,g  =adsfg
}



//Maps in maps:

//map is a object which is hold key value pair



const map = new Map()
map.set('IN','India')
map.set('USA', 'United state of Amrica')
map.set('ENG','England')
// map is only show unique value and ordered formate
map.set('IN','India')

console.log(map)

//how to  make for-of-loop in map
for (const key  of map){
    console.log(key);
}

// how to disstructure array help of  map in for of loop
for(const [key,value] of map) {
    console.log(key , ':-', value)
}

const myObject = {
    'game1' :'NFS',
    'game2': 'Spiderman'
}
// for off loop is not working in objects
for (const [key,value] of myObject){

}

// object is not intateratable in for-of-loop
// it is not working const myObject ={
//     'game1':'NFS',
//     'game2':'spederman'
// }
// for(const[key,value ] of myObject){
//     console.log(key,':-',value)
// }