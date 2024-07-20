//Object Singleton

// const tinderUser = {}             //Non-singleton Object

const tinderUser = new Object();     //create object(Singeton Object)
tinderUser.id = "123abc";
tinderUser.name ="Sammy";
tinderUser.isLoggedIn = false;
// // console.log(tinderUser);

// const regularUser = {
//     email: "someOne@gamil.com",
//     fullname: {
//         userfullname: {
//             firstname: "sachin",
//             lastname: "vishwakarma"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname.lastname);

/*+++++++++++++++++++merging/combining of objects++++++++++++++++++*/

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}


// // const obj3 ={obj1, onj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3);   //{} =>>optional parameter (but its good to gave becos it insure that values must be combine and arrange);
// console.log(obj4);

// // most useable at industry level---->>>>>
// const resObj = {...obj1, ...obj2, ...obj3};
// console.log(resObj);

/*++++++++++++++++++++++++++++++++++++++++++++++*/

const users = [                     //array with in it its objects
    {
        id: 1,            
        email: "h@gamil.com"
    },
    {
        id: 2,
        email: "i@gamil.com"
    },
    {
        id: 3,
        email: "j@gamil.com"
    },
    {
        id: 4,
        email: "k@gamil.com"
    }
]

// console.log(users[0].email);
console.log(tinderUser);

console.log(Object.keys(tinderUser));            //it will store the all keys only of an Object and put it into an array.
console.log(Object.values(tinderUser));          //it will store the all values only of an Object and put it into an array.
console.log(Object.entries(tinderUser))          //keys&value of an Object are treate as a single element and that element are stored in array.
console.log(tinderUser.hasOwnProperty("isLoggedIn"));  //it will check property of an  object instead of checking manually we can do like this also.