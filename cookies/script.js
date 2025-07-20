console.log(document.cookie);

document.cookie = "name=vansh11223344";
document.cookie = "name2=vanshhsnav";

console.log(document.cookie)

//document.cookie doesnt mess with other cookies , it only adds (updates) to the existing cookie...

let key = prompt("Enter your Key");
let value = prompt("Enter your Value");

document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

console.log(document.cookie)

console.log(decodeURIComponent("%3B%3B212%3B"));