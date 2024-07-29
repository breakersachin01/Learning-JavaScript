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
// let arr = [2,3,4,5];
// console.log(arr);
// arr[2]=9;
// console.log(arr);
// arr  = 2.5;         
// console.log(arr)



//We can add anytype of data in the arrays of javascript
// const arr = [2,"javed",7.87,true];
// console.log(arr);
// arr.push("sachin");
// console.log(arr);
// arr.push(9.45);
// console.log(arr);
// arr.push(20/2);
// console.log(arr);


/**************2D-Arrays(Note: in any programing languague we can't create different size of arrays but in the JavaScript  we can different types of length arrays)*/
// arr = [[1,2,3,4],[9,8,7,6]];           //==>> both have the same length of arrays which is valid in any programming language of Arrays.

// arr = [[1,2,3,4],[9,8,7,6,5,10]];         //==>> both are the different length of arrays which is Not valid in any programming language of Arrays EXCEPT JavaScript it is valid in it.

// console.log(arr);



/*****Print of arrays Iteratively*/
arr = [9,8,7,6,5,4];
// console.log(typeof(arr));               //Object

//1>> for loop:--      it will print the exact value of the element of the arrays.
// for(let i = 0;i<arr.length; i++){
//     console.log(arr[i]);
// }

//2>> forOf loop:----  it will print the copy value of the element of the arrays by storing into new varible.
// for (const iterator of arr) {
//     console.log(iterator);
// }
// console.log(arr);

//3>> forEach loop:----  basically it is used to for the puspose of index of the element.
arr.forEach((ele,i,arr) => {              //we can pass the (elementvalue, index of the element, arr) together or we can pass it individualy also
    // console.log(ele);                     //print element of the arrays.
    // console.log(i);                     //print index of the element of the arrays.
    // console.log(arr);                     //print array till loops.
    // console.log(ele,i);                     //print element and index of that element of the arrays.
    console.log(ele,i,arr);                     //print element and index and the array of the arrays.
 
});