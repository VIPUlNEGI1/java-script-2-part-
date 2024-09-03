

// why are we used iffi ===> because some time we want imadate execute the function and 
//  secound 
//  reasion is we dont want to intrupt the globle variable (dont want a polution in globle scope) in our function
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
)('vipul');



//  the syntex in iffi
(()=>{
    console.log('mostly we used this function in database')
})();


// most important thing  is this ; used in spacial time we want write tow iffi in a code .
