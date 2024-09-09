// this is normal function for-each
const coding=['java','python','node-js','c++']
coding.forEach(function name(val){
    console.log(val);
} )//basic
// how to write th value in for-each


// this is call back function
coding.forEach(function (val){
    console.log(val)
})

// how to used arrow funcation in for-each-loop
// this is syntex of arrow function
coding.forEach(() => {

})

coding.forEach((item)=>{
    console.log(item);
})

function  printMe(item){
    console.log(item);
}
coding.forEach(printMe)


coding.forEach((item,index, arr)=>{
    console.log(item,index,arr);
})

// this is very imprtant operation
// and how to loop in this type of array funcation
const mycoding=[
    {
        languageName :'python',
        languagefileName :'java script'
    },
    {
        languageName :'java',
        languagefileName :'python'
    },
    {
        languageName :'c++',
        languagefileName :'script'
    }
]
mycoding.forEach((item)=>{
    // how to exces values whith the help of for loop
    console.log(item.languageName);
})


// forEach loop never return the values the is the spacial things of for each exemple in the bellow

const coding1 = ['js','react','c++','cpp','redux']
const values = coding1. forEach((item)=>{
    return item
})
console.log( values)