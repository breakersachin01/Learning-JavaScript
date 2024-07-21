// let x=23;
// let y=45;
// console.log("Sum =",x+y);

/**********************Functions***************************/
// function sayMyName(){            //implement the funtion
//     console.log("S");
//     console.log("A");
//     console.log("C");
//     console.log("H");
//     console.log("I");
//     console.log("N");
// }
// // sayMyName                  //reference of the funtion.
// sayMyName();                  // call the funtion

//Add two number:---
// function addtwoNumbers(n1, n2){        //no need to give the data type of the number And no need to give funtion Return type.
//     return n1+n2;
// }
// const result = addtwoNumbers(2,3);
// console.log(result);

/**Note:""==" operator performs a loose equality comparison.  "===" operator performs a strict equality comparison the operands to have the same type (as well as the same value)*/
//loginFunction:-----
function loginUserMessage(username = "sachin"){   //if we declared the user name in the funtion parameter then it will never go for undefined if we pass any new username from out of the funtion then it will override it.
    if(!username){                             //'or' username===undefined =>(Same as)=> !username.
        console.log("Please enter a username");
    }
    else if(username==='sachin'){
        return `${username} Just Loggedin`;
    }
    else{
        return "Invalid username";
    }
}
// console.log(loginUserMessage());
console.log(loginUserMessage("raj"));