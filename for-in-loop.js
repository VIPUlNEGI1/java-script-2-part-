// this is for-in loop in js

// this is loop in objects because for-in loop is used in object and some othertypes of other sechwations
const myObject ={
    js: 'javascript',
    cpp:'c++',
    rd:'ruby',
    swift:'swift'
}
for (const key in myObject){
  console.log(key)//it is used for keys
}
// and this is the way how to get the objects
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`)       
    }


  //how to print array in help of for in  loop
    const programing =['js','rb','py','java','cpp']
    for(const key in programing){
        console.log(key);
    }
//it provide key not a value

// con we do this with the help of for in loop
// const map =new Map()
// map.set('IN','India')
// map.set('USA', 'United state of Amrica')
// map.set('ENG','England')
// // map is only show unique value and ordered formate
// map.set('IN','India')
// for(const key in map){
//   console.log(key);
// }
