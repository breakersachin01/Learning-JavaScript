//Callback funtion ek esa funtion hota hai jo ek funtion ke andar pass hoota hai.

function Products(a,b,c){
    return a*b*c;
}
function fun(x,y){
    let a = x(3,2,3);
    console.log(a-y);
}
fun(Products,7);            //call funtion by another funtion as an argument then it is called callBackFunction.