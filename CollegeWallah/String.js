let s = "sachin";
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
for (const char of s) {
    console.log(char);
}

//note==>> "for each" does not work for string.