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
// function loginUserMessage(username = "sachin"){   //if we declared the user name in the funtion parameter then it will never go for undefined if we pass any new username from out of the funtion then it will override it.
//     if(!username){                             //'or' username===undefined =>(Same as)=> !username.
//         console.log("Please enter a username");
//     }
//     else if(username==='sachin'){
//         return `${username} Just Loggedin`;
//     }
//     else{
//         return "Invalid username";
//     }
// }
// // console.log(loginUserMessage());
// console.log(loginUserMessage("raj"));


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

//*Note: "..." called as "spread operator" as well as "rest operator" it is only depend on the use-case to call it as spread operator or  as rest operator.*/

// function calculateCartPrice(...num1){        //using "rest operator=>(...)" we can take multiple argument into the funtion and can packed it into an array.
//     return num1;
// }
// console.log(calculateCartPrice(100,300,200,450));

// function calculateCartPrice(val1,val2, ...num1){   // in this 100 is assign as=> val1 & 200 is assign as val2 && rest of that are assign as rest operation.
//     // console.log("val1: ",val1);                 //for checking perpose we can print it also.
//     // console.log("val2: ",val2);
//     return num1;
// }
// console.log(calculateCartPrice(100,200,300,450,500));




/*+++++++++++++++++Pass Object into the Funtion++++++++++++++++++++++++++*/

// const user = {                   //create object => user
//     username: "SACHIN",
//     price: 199
// }

// function handleObject(anyobject){
//     // console.log("Username is:",anyobject.username,"And price is:",anyobject.price);    //NOT THE LITTLE BIT RIGHT SYNTAX
//     console.log(`Username is: ${anyobject.username} and Price is: ${anyobject.price} `);  //this is mostly used at the industry level.
// }

// // handleObject(user);           //call the funtion(and we pass the already created "Object" as a parameter)

// handleObject({                   //we can pass the object directly like this also. We don't need to create object seperatly.
//     username:"JAVED",
//     price: 299
// })


/*+++++++++++++++++Pass Array into the Funtion++++++++++++++++++++++++++*/

const myNewArray = [200, 400, 500, 600];

function returnSecondValue(getArray){
    return getArray[1];               //return index of 1 value.
}

// console.log(returnSecondValue(myNewArray));          // "alreadycreated-Array" pass as a argument of the funtion.
console.log(returnSecondValue([900, 700, 800, 100]));  // directly array pass as a argument of the funtion.

