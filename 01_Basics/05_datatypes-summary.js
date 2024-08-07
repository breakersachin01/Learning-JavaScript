/*
1.Primitive DataType: 
basically 7 types -->>> String, Number, Boolean, null, undefined, Symbol, BigInt
ex:--
*/

// const score = 100;                         //Number
// const scoreValue = 100.33;                 //Number
// var name = "Sachin"                        //String 
// const inLoggedIn = false;                  //Boolean
// const outsideTemp = null;                  //null
// let userEmail;                             //undefined

// const id = Symbol('123');       
// const anotherId = Symbol('123');           //Symbol   (used for uniquely identify)
// console.log(typeof(id))                    //Symbol
// console.log(id === anotherId);

// const bigNumber = 3243566876754567865432n   //bigint (n is used to make bigint)
// console.log(typeof (bigNumber));


/*
2.Non-Primitive DataType("or" Reference Type):
Types->>> Array, Object, Functions
*/

// const heros = ["shaktiman", "naagraj", "doga"];            //Array
// let myObj = {name:"sachin", age:22};                       //Object
// console.log(heros);
// console.log(myObj.name);
// console.log(myObj.age);

// const myFunction = function(){console.log("Hello World");};
// console.log(myFunction());
// console.log(typeof(myFunction));  



/*Note: Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object*/


/************************Memory: (Stack and Heap memory)*****************************/

// Stack memory(used where primitive type), Heap memory(used where non-primitive). ex:-

//stack
let myYoutubename = "sachinvishwakarmadotcom";
let anothername = myYoutubename;
anothername = "chaiaurjavascript";      
console.log(myYoutubename);           //sachinvishwakarmadotcom (value not change becos it give the copy of our value to anothername.)
console.log(anothername);             //chaiaurjavascript

//Heap
let userOne={
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "sachin@gmail.com";

console.log(userOne.email);          //sachin@gmail.com
console.log(userTwo.email);          //sachin@gmail.com