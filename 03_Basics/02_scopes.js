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
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// // console.log(a);            //can't accessible
// // console.log(b);            //can't accessible
// console.log(c);            //can be accessible(so this is the drawback of it)

/*++++++++++++++++++++++++++++++Nested-Scope++++++++++++++++++++++++*/

// function one(){                      //Nested Function: "child function variable" can't be accessible by parent funtion or from outside the function. but parent funtion variables can be accessible by child funtion.
//     const username = "sachin";
//     function two(){
//         const lastname = "vishwakarma";
//         console.log(username);
//     }
//     // console.log(lastname);              //it can't be accessible because it is local varible(block variable).
//     two();
// }
// one();


// if(true){                                  //Nested condition
//     const username = "sachin";

//     if(username === "sachin"){
//         const lastname = "vishwakarma";
//         console.log(username +" "+ lastname);
//     }
//     // console.log(lastname);                  //can't be accessible
// }
// // console.log(username);                     //can't be accessible


/*++++++++++++++++++interesting++++++++++++++++++++++*/

console.log(addone(5));                 // called funtion before or after declaration of funtion are valid.

function addone(num){                   //it is simple a funtion
    return num+1;
}
// addone(5);

// addTwo(5);                             //but this funtion can't be called before declaration of funtion.
const addTwo = function(num){          //it is also called as Expression also. because the funtion value is store in a variable.
    return num + 2;
}
console.log(addTwo(5));               //it the funtion is store in variable then it can be only accessible by after declaration of funtion. 
