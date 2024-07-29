// arr = [1,3,6,7];
// n = arr.length;         ///length of arrays
// console.log("Array length is: "+ n); 

// for(let i=0;i<n;i++){
//     console.log(arr[i]);
// }

// console.log(arr[6]);

/*In c++ = Vectors, Java = ArrayList But in JavaScript==>> here array and arraylist are the same.😁*/
// console.log(arr);
// arr.push(9);                //add at end
// console.log(arr);
// arr.push(0);
// console.log(arr);
// arr.unshift(2);            //add at first
// console.log(arr);
// arr.shift();               //remove at first
// console.log(arr);
// arr.pop();                 // remove last element
// console.log(arr);


/*simple Arrays V/S const Arrays */
// const arr = [2,3,4,5];
// console.log(arr);
// arr[2]=9;
// console.log(arr); /*Note if we have 'const Arrays' then we can even do the such kind of works as previously we do. and if we want to create new varible with that name and put the value of it then it will gives an error.*/
// // arr  = 2.5;         // Error due to constant.
// // console.log(arr);

/*But if we declared the varible as 'let' so we can do it easily like*/
let arr = [2,3,4,5];
console.log(arr);
arr[2]=9;
console.log(arr);
arr  = 2.5;         
console.log(arr)
