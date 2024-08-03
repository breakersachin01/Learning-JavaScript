// console.log("hello bhai");
// let a = 2;
// console.log(a*15);
 
/*1)"querySelector" ===>> used to select the element*/
// let x = document.querySelector("h1"); 
// console.log(x);

// let y = document.querySelector("h2");
// console.log(y);

// let z = document.querySelector("h1");                 //again select h1 but it is only select the first h1 tag i.e; it will select the 'Hello one' not select 'Hello four'
// console.log(x);

/*2)"querySelectorAll" ===>> used to select multiple element of same class and store it into NodeList*/

// let x = document.querySelectorAll("h1");    //if 'tag' then director select using 'tag name'
// console.log(x);

// let y = document.querySelectorAll(".yes");    //if same 'class' then select using '.class name'
// console.log(y);

// let z = document.querySelectorAll("#no");    //if same 'id' then select using '#id name'
// console.log(z);

/*3)change styles of html element using javaScript */

// let x = document.querySelector("h2");
// x.style.color = "white";
// x.style.fontFamily = "Cursive"

// let y = document.querySelector("h1");
// y.style.backgroundColor = "yellow";


// // y.innerHTML = "Kya Haal Hai !";           //this will change the 'h1' text (Hello one) to "Kya Haal Hai !"; 

// setTimeout(function(){                       //used setTimeout of 2sec means after 2sec "Hello One" will be changed into "Kya Haal hai !"
//     y.innerHTML = "Kya Haal Hai !";
// },2000)



/*------------------Event Listeners-----------------------(imp)*/
//Event Listeners:-- agr mai kisi element ko click kru, ya fir hover(enter) karu, ya fir element se mause ko bahar kar du to kuchh changes ho.

// //by simple way:--
// let x = document.getElementById("ele1");       //if we use "getElementById" then only we need to  write the "id name" only
// x.style.color = "yellow";
// x.style.backgroundColor = "green";

// //do same by using event listener:--
let x = document.getElementById("ele1");          //"click"
x.addEventListener("click",function(){            //after clicked on it they will changed their style.
    x.style.color = "yellow";
    x.style.backgroundColor = "green";
    x.innerHTML = "Changed Pikachu !"
});

x.addEventListener("mouseleave",function(){        //"mouseleave" on ele1
    x.style.color="red";
    x.style.backgroundColor = "black";
    x.innerHTML = "Pikachu";
});  

let y = document.getElementById("ele2");          //"mousemove"
y.addEventListener("mousemove",function(){        //after moved mouse to ele2 they will changed their style.
    y.style.color = "gray";
    y.style.backgroundColor = "pink";
    y.innerHTML = "Charizard";
});

y.addEventListener("mouseleave",function(){     //"mouseleave" 
    y.style.color = "red";                      //after leave mouse from the ele2 it will remain comes in original state.
    y.style.backgroundColor = "black";
    y.innerHTML = "Charizard";
});


let z = document.getElementById("ele3");       //"after clicked on one element it will changed the style of another element";
y.addEventListener("click",function(){        //after clicked on ele2 ==> change the style of ele3.
    z.style.color = "black";
    z.style.backgroundColor = "blue";
});

y = document.getElementById("ele2");        //"after clicked on one element it will changed the style of another element";
z.addEventListener("click",function(){        //after clicked on ele3 ==> change the style of ele2.
    y.style.color = "Brown";
    y.style.backgroundColor = "Orange";
    y.innerHTML = "SHAKTIMAN";
});





