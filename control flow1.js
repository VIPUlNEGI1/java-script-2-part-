//this switch case are used to check multiple switchwation


// switchcase syntex

// switch
// switch(key){
//     case value:

//         break

//      default:

//             break;

// } basic syntex of switch



const month = 3
switch(month){
    case 1:
        console.log("january")
        break;

    case 2:
        console.log("febuary")
        break;

    case 3:
        console.log("March")
        break;

    case 4:
        console.log("April")
        break;

    case 5:
        console.log("may")
        break;

        default:
            console.log("bhai tu rahne de");

            break
}


const month1 = "march"
switch(month1){
    case "january":
        console.log("january")
        break;

    case "febuary":
        console.log("febuary")
        break;

    case "March":
        console.log("March")
        break;

    case "April":
        console.log("April")
        break;

    case "may":
        console.log("may")
        break;

        default:
            console.log("bhai tu rahne de");

            break;
}

// continue
for(let index =1; index <=20; index++){
    if (index ==5){
        console.log (`Detected 5`)
        continue
    }
    console.log(`Value of i is ${index}`)
}
// continue we are guesss by name continue is used to continue the  loop it is oppsite to the break statement.......