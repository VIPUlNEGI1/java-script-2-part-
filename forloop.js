// forr loop
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    if (element == 5) {
        console.log(Math.random(element))
    }
    console.log(element)
}

for (let i = 0; i <= 10; i++) {
   console.log(`Outer loop value: ${i}`)
    for (let j = 0; j<= 10; j++) {
   console.log(`Inner loop value ${j} and inner loop ${i}`)
    }
    
}

let myArray=['vipul','javad','rahul']
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element)
}


// what is break and continue

// what is break
for (let i = 2; i <= 20; i++) {
   if(i== 5){
    console.log(`dected 5`)
    break
   }
   console.log(`value of i is ${i}`) 
}


// what  is contunue
for (let i = 2; i <= 20; i++) {
   if(i== 5){
    console.log(`dected 5`)
    continue
   }
   console.log(`value of i is ${i}`) 
}