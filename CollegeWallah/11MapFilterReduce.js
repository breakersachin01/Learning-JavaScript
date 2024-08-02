// //Map:--basically agr mughe ek array se ek aur array banana hai usi se related with specific changes. 
// let arr = [1,6,3,8];
// console.log(arr);

// //by simple using loop====>>
// // let brr = [];       //empty array
// // for(const ele of arr){
// //     brr.push(ele*2);
// // }
// // console.log(brr);

// //now using map:===>>
// function twice(ele){                //Method(1) =>
//     return ele*2;
// }
// // function square(ele){
// //     return ele*ele;
// // }

// // let brr = arr.map(twice);       //callback funtion
// // let brr = arr.map(square);

// // let brr = arr.map(function square(ele){     //Method(2) => at place of square we can put it funtion directly also.
// //     return ele*ele;
// // });

// let brr = arr.map(ele => ele*2);     //Method(3) => we can do like this also without using funtion.ele*2;);
// console.log(brr);


/*Fiter::==>> filter in JavaScript is to create a new array containing only the elements that pass a specified test or condition.*/
//basically 'filter' is used to filter the element on the basis of given condition.

// let arr = [1,9,2,7,4,5,6,2,8];
// console.log(arr);

//filter out even elements
// function fun(ele){                   // methode(1)
//     if(ele%2!=0) return true;
//     else return false;
// }
// arr = arr.filter(fun);
// console.log(arr);

// arr = arr.filter(function fun(ele){      // methode(2)
//     if(ele%2!=0) return true;
//     else return false;
// });
// console.log(arr);

// arr = arr.filter((ele)=>{                   // methode(3)
//     if(ele%2!=0) return true;
//     else return false;
// });
// console.log(arr);

// arr = arr.filter(ele=>(ele%2!=0));             // methode(4)
// console.log(arr);


/*Reduce::==>> The main purpose of using reduce in JavaScript is to transform an array into a single cumulative value.*/
let arr = [1,9,2,7,4,5,6,2,8];
// console.log(arr);

let x = arr.reduce(function(a,b){
    // return a+b;
    // return a-b;
    return a*b
});
console.log(x);









