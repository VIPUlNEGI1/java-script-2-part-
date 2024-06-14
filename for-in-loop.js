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
// and this is the way how to get the objects values
for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`)       
    }


  //how to print array in help of for in  loop
    const programing =['js','rb','py','java','cpp']
    for(const key in programing){
        console.log(key);
    }
//it provide key not a value its provide keys

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


//filter

const myNum =[1,2,3,4,5,6,7,8,9,10]
const newNum = myNum.filter((num)=> num >4)
console.log(newNum)
// In a filter we can filter any value according our condation 

// but we are got one type of problem
// const newNums=myNum.filter( (num) =>{
//  num>4
// }) this is not write way because we already know any time we weite a function 
const myNums =[1,2,3,4,5,6,7,8,9,11,34,21]
const newNums = myNum.filter((num)=> {
  return num >4
})
console.log(newNums);

// this is other way  <iam int sure>
// const nuwNum =[]
// myNums.forEach(( num)=>{
//   if(num>4){
//     newNums.push(num)
//   }
// })
// console.log(nuwNum)

// const userBooks=books.filter((bk)=>bk.genre =='Hostory')//this is the way hoe to ecess the values in database