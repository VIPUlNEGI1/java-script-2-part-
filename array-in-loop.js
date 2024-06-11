// this is array specfic loop

//for of loop
// what is higher order funcation
// this loop in Array
const arr=[1,2,3,4,5,67,,8,9]
for(const num of arr){
    console.log(num);


}


// this loop in string
const greetings = "Hellow world!"
for(const greet of greetings){
    console.log(`each char is ${greet}`)
}

//Maps in maps: it is little bit similar in maps and its is athe objects whish is used to hold key value pair
const map =new Map()
map.set('IN','India')
map.set('USA', 'United state of Amrica')
map.set('ENG','England')
// map is only show unique value and ordered formate
map.set('IN','India')

console.log(map)

// loop in map
for (const key  of map){
    console.log(key);
}

// how to disstructure  map in for of loop

for(const [key,value]of map) {
    console.log(key , ':-', value)
}
// it is not working const myObject ={
//     'game':'NFS',
//     'game2':'spederman'
// }
// for(const[key,value ] of myObject){
//     console.log(key,':-',value)
// }