/*****************************Numbers*******************************************/
// const score = 400;                         //it will automaticaly defined its DataType according to its value.
// console.log(score);
// const balance = new Number(100);          //we can explicity define its DataType also.
// console.log(balance);

// console.log(balance.toString().length);   //we can convert its datatype to String dataType and can use all the propertis of String as well like length, charAt() etc.
// console.log(balance.toFixed(2));          //toFixed() function (used to show the value after dot is according to argument passed.)

// const otherNumber = 123.95453;
// console.log(otherNumber.toFixed(2));
// console.log(otherNumber.toPrecision(3));     //toPrecision() function (it give the number as parameter given and if possible the it will convert the value in appoximate value.

// const hundreds = 1000000;
// console.log(hundreds.toLocaleString());       //toLocaleString() function (used to convert the given number into the US Number-format)
// console.log(hundreds.toLocaleString('en-IN'));       //convert the given number into the Indian Number-format)


/*****************************Maths*******************************************/
// Math:-- Math liberary is comes in javaScript by Default

// console.log(Math.PI);                                //PI property: (give the PI value = 3.14
// console.log(Math.abs(-24));                          //abs() Function (give us the absolute value means it convert -ve value to +ve value);
// console.log(Math.round(4.3));                        //round() function (it will round up the value)
// console.log(`Ceil Number: `+Math.ceil(4.2));        //ceil() funtion (take ceil(lowest) number)
// console.log(`Floor Number: `+Math.floor(4.9));       //floor() funnction (take floor(highest) number)
// console.log(Math.min(6,7,3,5));                      //min() funtion (to find the minimum value)
// console.log(Math.max(6,7,3,5));                      //max() funtion (to find the maximum value)

console.log(Math.random()*10000);                       //random() funtion (basicaly used for puting random otp it will give you the random number between 0 to 1 But int the decimal formate)
console.log(Math.floor(Math.random()*10000));          // i want 4 digit number so i multiple by 10000.
