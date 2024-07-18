const name = "Sachin"
const repoCount = 15

// console.log(name + " " + repoCount + " Value");        //old ways 

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //modern way print string with its value also.

const gameName = new String("SachinVish");                         //Object String 
// console.log(gameName[0]);                                          //we can print index wise character.
// console.log(gameName.toString());                                  //used to convert any dataType to String dataType.
// console.log(`String lenght is: `+gameName.length);                 //used to find the length of the string
// console.log(`UpperCase String: `+gameName.toUpperCase());          //toUpperCase() funtion
// console.log(`LowerCase String: `+gameName.toLowerCase());          //toLowerCase() funtion
// console.log(`Character at Index 2: `+gameName.charAt(2));          //charAt() function (find its "character" with its "index value")
// console.log(`Index of Character c: `+gameName.indexOf('c'));       //indexOf() funtion (find its "index value" with its "character")

// //subString
/*subString(-ve value is not obay it will treate -ve value as a 0 if you used) &&& slice(object the -ve value it will count from last to print the -ve substring*/
// console.log(`subString from idx 0 to 4: `+gameName.substring(0,4)); //substring from indx of 0 to 4(not included 4)
// console.log(`subString from idx 0 to 4: `+gameName.substring(4));   //substring from 4 to last(included 4)
// console.log(gameName.slice(-8,4));    //from end 8 and from start 4 =>>> ch

const str = "   Hello    world   "
// console.log(str.trim());                      //trim() funtion (used to trim the white space from start and end of the String)
// console.log(str.trimEnd());                   //trimEnd() function (used to trim white space from End)
// console.log(str.trimStart());                 //trimStart() function (used to trime white space from start)
// const str1 = str.trim();                      //trim white space and store in new strinf str1
// console.log(str1.split(" "));                 //split() funtion (the the word or character according to given parameters)

const email = "roshanvishwakarma-2342#gmail.com";
console.log(email.replace('-2342#','244@'));     //replace() funtion (replace the word "-2342#" to "244@")
console.log(email.includes('roshan'));           //includes() function (give us a boolean value)
