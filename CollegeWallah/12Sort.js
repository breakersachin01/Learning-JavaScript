let arr = [1,-9,-2,7];
console.log(arr);

////sort in asscending order:==>>
// console.log(arr.sort());    //[ -2, -9, 1, 7 ]in javaScript it will give wrong sorting it will only sort the +ve number.
// arr = arr.sort((a,b)=>a-b);    //[ -9, -2, 1, 7 ] actual asccending order sort rigth. 
// console.log(arr);


////sort in descending order:==>>
// arr = arr.sort((a,b)=> b-a);          // actual descending order sort.
// console.log(arr); 

//// want to sort in asccending order by ignoring the sign
arr = arr.sort((a,b) => Math.abs(a)-Math.abs(b));
console.log(arr);


