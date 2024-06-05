// Immediately invoked function expresstion
//  this type of function is execute immediately
//and this is help to save child funcation to globle funcation in simple word iife is used to help avoide globle scope varable polutation

(
    //this is name iife because it have name
    function vipul(){
        console.log(`DB connected`);
    }
)() ;
// this is important we need to end this process by ; this


(
    //this is simple iife(unname iife.js) 
   (name)=> { //parameter pass
        console.log(`DB connected two`)
        //how too used iife in arrow function

    }
)('vipul')