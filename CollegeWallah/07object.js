//Object is kind of like map/dictionary where we have "key-value" pairs

// var details = ["Sachin",24,90.4,false];      //array

let obj = {
    name: "sachin",            //key : value
    'my age': 24,              // making it string we can store key with space also
    percentage: 90.4, 
    isMarried: false
}
console.log(obj);

// console.log(obj.percentage);     //want to print value individualy 
// console.log(obj["my age"]);
// console.log(obj['name']);       // most usable

// obj.name = "javed";            // set the value again
// console.log(obj.name);


/////iterate
for (const key in obj) {
    // console.log(key);             //print all keys
    // console.log(obj[key]);        //print all values
    console.log(key, obj[key]);      //print keys and values
}
