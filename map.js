// map si a funcation its automatically return the values


const mynumber=[21,3,5,54,7,8,9,5,3]
const newNums =mynumber.map((num)=> num +10)
console.log(newNums)
// in a scope we need to do

const mynumber1=[21,3,5,54,7,8,9,5,3]
// const newNums1 =mynumber.map((num)=> {return num +10})

// what is chaining in map
// this is example of chaining in chaining we are used so many funcations 
const newNums1 = mynumber
                       .map((num)=> num*10)
                       .map((num)=> num +1)
                        .filter(( num)=> num>=40)
        console.log(newNums1);



