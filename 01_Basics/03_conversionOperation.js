/*In Number*/

// let score = "33"
// console.log(typeof score);
// console.log(typeof(score));

// let valueInNumber = Number(score);                //conversion string to number
// console.log(typeof (valueInNumber));             // number
// console.log(valueInNumber);                      // 33
// console.log();                                   // using for new line

// //But
// let s1 ="33abc"
// let valueInNumber1 = Number(s1);                // String to number
// console.log(typeof(valueInNumber1));           // number
// console.log(valueInNumber1);                   //comes "NaN" ->>>'Not a Number'
// console.log();

// //But
// let s2 =null
// let valueInNumber2 = Number(s2);                // String to number
// console.log(typeof(valueInNumber2));           // number
// console.log(valueInNumber2);                   // 0
// console.log();

// //But
// let s3 =undefined
// let valueInNumber3 = Number(s3);                // String to number
// console.log(typeof(valueInNumber3));           // number
// console.log(valueInNumber3);                   //NaN
// console.log();

// //But
// let s4 = true
// let valueInNumber4 = Number(s4);                // String to number
// console.log(typeof(valueInNumber4));           // number
// console.log(valueInNumber4);                   //true becomes 1 and false becomes 0
// console.log();

// //But
// let s5 = "Sachin"
// let valueInNumber5 = Number(s5);                // String to number
// console.log(typeof(valueInNumber5));           // number
// console.log(valueInNumber5);                   //NaN
// console.log();


// /*Note: 
// "33"       => 33
// "33abc"    => NaN
// true       => 1    & false => 0
// */


// /*In Boolean*/

// // let isLoggedIn = 1                     // true
// // let isLoggedIn =""                     // false
// // let isLoggedIn = 0                     // false
// let isLoggedIn ="sachin"                  // true
// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// /*Note: 
// 1 => true; 0 => false
// "" => false
// "sachin" => true
// */


/*In Stringr*/

// let someNumber=33                //33
// let someNumber=false             //false
// let stringNumber= String(someNumber);
// console.log(stringNumber);
// console.log(typeof(stringNumber));


/*************************OPERATIONS****************************************/ 
// let value = 3
// let negVal = -value           //-3
// console.log(negVal);
// console.log();

// console.log(3+2);             //add
// console.log(3-2);             //sub
// console.log(3*2);             //multiple
// console.log(3/2);             //devide
// console.log(3%2);             //modulus(remainder)
// console.log(2**3);            //power
// console.log();

// let str1 = "Hello"
// let str2 = " Sachin"
// let str3 = str1 + str2;
// console.log(str3);
// console.log();

// console.log("1"+2);        //12
// console.log(1+"2");        //12
// console.log("1"+2+2);      //122
// console.log(1+2+"2");      //32

// let num1, num2, num3;
// num1=num2=num3=2+2;
// console.table([num1,num2,num3]);

// let gameCounter = 100
// // gameCounter++;
// ++gameCounter
// console.log(gameCounter);

let x = 3;
let y = x++;
console.log(`x:${x}, y:${y}`);
let a = 3;
let b = ++a;
console.log(`a:${a}, b:${b}`);