// Dates
let myDate  = new Date();          //Dates values always comes into millisecond so we need to convert it using funtions.
// console.log(myDate);                             
// console.log(myDate.toString());
// console.log(myDate.toDateString());           //most used
// console.log(myDate.toTimeString());                
// console.log(myDate.toLocaleDateString());     //most used
// console.log(myDate.toLocaleString());         //most used
// console.log(myDate.toJSON());   

// console.log(typeof(myDate));               //Date is the 'Object' type.

/*if we want to declare a specific date*/
// // formate 1:--
// let myCreatedDate = new Date(2023, 0, 23);     //in JavaScript Month is started from 0 means 0->januaray  and 11->December.
// console.log(myCreatedDate.toDateString());    //Mon Jan 23 2023 (day is calculated automatically by provided date);

// let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);     
// console.log(myCreatedDate2.toLocaleString());

// formate 2:--
let myCreatedDate = new Date("2023-01-23");     // YY-MM-DD ---> MM/DD/YY (time is set '12 AM' bydefault) (comes in this formate: MM/DD/YY)
// let myCreatedDate = new Date("01-23-2023");     // MM-DD-YY ---> MM/DD/YY (time is set '12 AM' bydefault) (comes in this formate: MM/DD/YY) --->most used
// console.log(myCreatedDate.toLocaleString());

// //Using TimeStamp   ---->Most-most usess
let myTimeStamp = Date.now();
// console.log(myTimeStamp);              //it give you the 'time' is milliSeconds

// console.log(myCreatedDate.getTime());       //gives the time in millisecond this method is mostly used at industy level.
// console.log(Date.now());                       //give me the current time in the millisecond.
// console.log(Math.floor(Date.now()/1000));      //convert millisecond to seconds.for the purpose of easily compariable.

// // lets suppose if we want to know the pertical date, day, year or time then we can easly find using that funtion ex:---
let newDate = new Date();            //show the current date and time.
console.log(newDate.getFullYear());
console.log(newDate.getMonth()+1);  //as Month is started from 0 so we need to add 1 to print exact month. 
console.log(newDate.getDate());     //getDate() – gets the day as a number (1-31)
console.log(newDate.getDay());      //the week, starting with "0 for Sunday" and "6 for saturday"
console.log(newDate.getHours());    //Hours: (return between 0 and 23, where 0 represents midnight and 23 represents 11 PM)
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());

let newDate2 = newDate.toLocaleString('default',{
    weekday: "long"
})
console.log(newDate2);