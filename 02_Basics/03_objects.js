///// singleton
// Object.create

//Object literals   :--in JavaScript: Object contains key-value pair.
const mySym = Symbol("keys1");           //(imp) if we want to declare symbol in the object then first we need to initialize outside the object then go for it.
const JsUser = {
    name: "Sachin",                     //keys are always as String Type by default
    "full name": "Sachin Vishwakarma",
    [mySym]: "myKey1",                  //Symbol initialize in bracket
    age: 18,
    location: "Jaipur",
    email: "vishwakarmasachin632@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]                 //Array; =>in Object we can also store the object type variable also.
};

// console.log(JsUser.email);          //not to much usable
// console.log(JsUser["email"]);       //mostly used this
// // console.log(JsUser.full name);   // gives an ERROR
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);         //no need to close with double cot.
// console.log(typeof mySym);

//if we want to change the value of object
// JsUser.email = "roshanvishwakarma244@gmail.com";          //"override the value" then it will change the value.
// console.log(JsUser);

//if we want that i don't want to change anything in my object so we  can freeze the object so that value can not changeable.
// Object.freeze(JsUser);       //it will freeze the object so that it can be changeable.
// JsUser.email = "sachin12345@gmail.com";   //can't be update becose of freezed Object
// console.log(JsUser);


/*+++++++++++++++++Adding funtion in the object++++++++++++++++*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);               //` ${}`  ==> called String interpolation
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());