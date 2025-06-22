let str = "van\""
console.log(str.length);

// Includes method : 

const sentence = "My name is Vansh";
console.log(sentence.includes("iss"))

// startsWith and endsWith

console.log(str.startsWith("va"));
console.log(str.endsWith("\""));

let str2 = "Please give Rs. 1000";
let amount = Number.parseInt(str2.slice("Please give Rs. ".length))
console.log(amount)
console.log(typeof amount)


let friend = "Harsh";

friend[2] = "n";
// it does not print error but it will also not t=change tghe string because strings are immutable...
console.log(friend)