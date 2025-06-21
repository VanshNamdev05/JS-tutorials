// strings are used to store and manipulate text...

let name = "Vansh"; // double quotes
console.log(name);

let lastName = 'Namdev'; // single quotes
console.log(lastName);

console.log(name.length);
console.log(lastName.length);
console.log(lastName[0]);

let boy1 = "Pramod";
let boy2 = "Nikhil";

// let sentence = `boy2 is a friend of boy1`;
let sentence = `${boy2} is a friend of ${boy1}`;
console.log(sentence);

// Escape sequence characters

// let fruit = 'bana'na' --> Error

let fruit = 'bana\'na'
console.log(fruit);
console.log(fruit.length) // "\'" will be only one character ... so total length = banana(6) + 1 = 7

