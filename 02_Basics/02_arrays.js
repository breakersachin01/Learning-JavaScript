const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

/*+++++++++++++++++++Merging of two arrays++++++++++++++++++++++*/
////using push() method:---(not right way)

// console.log(`Intial size of marvel_heros= ${marvel_heros.length}`);
// marvel_heros.push(dc_heros);      //if i push "dc_heros" in the "marvel_heros" then the dc_heros array is treated as a single element and it will pushed in the marvel_heros.
// console.log(marvel_heros);
// console.log(`After pushed, Size of marvel_heros= ${marvel_heros.length}`);

////using concate() method:---(right way But not mostly used) {it will require another array to store all element}

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);
// console.log(`Size of allHeros: ${allHeros.length}`);

////(imp)using Spread ways(most commonly used as industry based)
// const film_heros = ["Hirtik","john","Sharukh","Salman"];
// const all_new_heros = [...marvel_heros, ...dc_heros];            //"..." represent spread all(it is used because we can add two or multiple arrays with this way)
// console.log(all_new_heros);
// console.log(all_new_heros.length);
// const all_heros = [...marvel_heros, ...dc_heros, ...film_heros];
// console.log(all_heros);
// console.log(all_heros.length);

/*************************************************************************/

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]];    //if array are in this non-arrangement formate then we use flat() method to correct it.
// const real_anothor_array = another_array.flat(Infinity);
// console.log(real_anothor_array);

console.log(Array.isArray("Sachin"));         //"isArray()" method is used to check the this  name of array is present or not if yes return=true else return= false;
console.log(Array.from("Sachin"));     //"from("from()" method is used to convert the give parameter into the characte array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));   //"of()" method convert the "set of value" into the arrays.

