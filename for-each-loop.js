const coding=9['java','python','node-js','c++']
coding.forEach(function name(val){
    console.log(val);
} )//basic

// how to used arrow funcation in for-each-loop
coding.forEach(( item)=>{
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
    // how to exces values
    console.log(item.languageName);
})
