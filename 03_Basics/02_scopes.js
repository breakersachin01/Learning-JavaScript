/*Note: When to use let, var, and const:-----
Use "const" by default for variables that should not be reassigned.
Use "let" for variables that need to be reassigned.
Avoid using "var" as it can lead to unexpected behaviors due to its function-scoping and hoisting characteristics. 
Modern JavaScript development prefers let and const for better code clarity and maintainability. 
*/

////assign varible as global (and it will be globally accessible all)
// let a = 10;
// const b = 20;
// var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

//// assign varible within the scope (and it should not be accessible by out of the scope. But var varible can be accessible so this is the drawback of it so that's why recommended to use it.)
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
}
// console.log(a);            //can't accessible
// console.log(b);            //can't accessible
console.log(c);            //can be accessible(so this is the drawback of it)

