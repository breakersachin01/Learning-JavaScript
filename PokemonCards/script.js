// var h =document.querySelector("h1");
// h.innerHTML = "Good Bye";

// var m = document.getElementById("main");
// // m.innerHTML = "Good Bye";        //<h1>"Hey, This is Sachin</h1>" se "Good Bye" aa gya.(but in small lettel not apply the h1 tag in 'Good Bye')
// // m.innerHTML = "<h1>Good Bye</h1>";  //Now its use the properties of h1.

// //for printing multiple elements:
// var s = "";
// for(let i=1;i<=10;i++){
//     s+="<h1>Good Bye</h1>";
// } 
// m.innerHTML = s;

/*
https://i.pinimg.com/564x/8a/44/39/8a4439689a4b1df26491f7e8b257fbe0.jpg" alt="Dragonite Pokemon"
https://i.pinimg.com/564x/9c/22/88/9c2288407d7048fbb73e4a736dc4306d.jpg" alt="bulbasaur Pokemon"
*/

var m = document.getElementById("main");
var s = "";
for(let i=1;i<=70;i++){
    let r = Math.floor(Math.random()*10)
    s+= `<div class="card"><h1>${r}</h1></div>`;
}
m.innerHTML = s;