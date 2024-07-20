//array
/*Note:--
-> In javaScript: in a single array we can store multiple dataTypes elements.
-> In javaScript: Arrays are resizable and contain a mix of different dataTypes.
-> in JavaScript: Arrays are Object Type.
*/ 

const myArr = [7, 5, 8, 9, 2, 6];       //declaration of array
// console.log(myArr);                     //print array
// console.log(typeof(myArr));
// console.log(myArr[2]);                  //access element by indexes basis

const  myArr1 = ['j', 'd', 90, 34, "Shaktiman", "Naagraj"];         //in JavaScript : we can store multiple dataTypes element.
// console.log(myArr1[5]);

// //properties:---
// console.log(`The length of the myArr1: ${myArr1.length}`);         //"length" property is used to find the array length.

// //methods:---
// myArr1.push("sachin");                   //"push()" method is used for adding the element at the "end".
// myArr1.push(869);
// myArr1.pop()                            //"pop()" method is used to remove the last element from the array.
// myArr1.unshift(580);                    //"unshift()" method is used to add the element at the front of array(But this is not optimize way becos we need to shift all the element.)
// myArr1.shift();                         //"shift()" method is used to remove the front element from the array.
// console.log(myArr.toSorted());          //"toSorted()" method is used to sort the array.
// console.log(myArr.reverse());           //"reverse()" method is used to reverse the array.
// console.log(myArr1);

// console.log(myArr1.includes(90));         //"includes()" method is used to check whether that element is present or not ==> it will return the "boolean value."
// console.log(myArr1.indexOf(90));          //"indexOf()" method is used to find the index of that element from the array.==> it returns the integer value. if element is not present it will return '-1'

// const newArr = myArr1.join();               //"join()" method is used for cancatinate all the element and return it as a String.
// console.log(myArr1);             
// console.log(newArr);
// console.log(typeof(newArr));              //String dataType.

// //==> slice, splice
// console.log("A ", myArr1);
// const myn1 = myArr1.slice(1,3);             //"slice()" method is used to print a subArray used same property as String substring() funtion used.
// console.log(myn1);                          //used indx of 1 but not used indx of 3 in "slice()" and do not change the array.
// console.log("B ", myArr1);

// const myn2 = myArr1.splice(1,3);            //"splice()" it also used for same thing but it will include the 3 indx as well and main thing is it will remove the element from the array from 1-3 indexes.
// console.log("C ",myArr1);
// console.log(myn2);