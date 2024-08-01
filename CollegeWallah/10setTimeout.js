//print 1 to 10 but with delay of 1sec after each number get printed.

// for(let i=1;i<=10;i++){
//     console.log(i);
// }

// function hello(){
//     console.log("HELLO");
// }
// function mello(){
//     console.log("MELLO");
// }
// setTimeout(hello,3000);           //it print after 2second
// setTimeout(mello,2000);           //it print after 3second 


// setTimeout(function(){
//     console.log("sachin");
// },2000);

// setTimeout(function(){
//     console.log("Vishwakarma");
// },5000);


// //print 1 to 10 after 2 2 secs
// for(let i = 1; i <= 10; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000 * i);
// }

//create timer for 15seconds:===========>>>>>
for(let i = 1; i <= 15; i++) {
    setTimeout(() => {
        console.log(16-i);
    }, 1000 * i);
}