// let s = "sachin";
// console.log(s);
// console.log("string size is: "+s.length);

// //we can print the string character by using charAt or by index based only.
// console.log(s.charAt(3));    
// //'or'
// console.log(s[0]);


// //iterate all words of string using simple for loop:
// for(let i=0;i<s.length;i++){
//     // console.log(s[i]);       //'or'
//     console.log(s.charAt(i));
// }

//iterate all words of string using simple for of loop:
// for (const char of s) {
//     console.log(char);
// }

//note==>> "for each" does not work for string.


/*-----------------StringBuiltIn function------------*/
let s = "Sachin VishwaKarma";
let v = "    Javed    ";
let k = "Mo n  ey";
// console.log(s);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.indexOf('w'));               //gives the index of the charecter.
// console.log(v.trim());                     // remove from starting and ending white space from string. 
// console.log(k.split(" "));                 // split the charector on the basis of white space. and store it into an array

// console.log(s.slice(2));             //means==>(2,last Index)  subtring from index-2 to last-index
// console.log(s.slice(0,5));           //subtring from intex 0 to 4
// console.log(s.slice(7));

let arr = k.split(" ");
console.log(arr); 