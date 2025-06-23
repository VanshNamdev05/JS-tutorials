// Array methods

let num = [1, 2, 3, 44, 55];

console.log(num);
console.log(typeof num);

// to convert any array to string : 

let b = num.toString(); // b is now a string

console.log(b);
console.log(typeof b);

// to join elements in a array using a seperator

let c = num.join("_")

console.log(c)
console.log(typeof c)

// pop() - will remove the last element from the "ORIGINAL" array 

let r = num.pop();

console.log(num);
console.log(r) // will return the popped element

// push() -> will add new element to the last : 

let s = num.push(65);


console.log(num)
console.log(s) // will return the new length of the array after using push method

// shift() -> removes first element and return it

let t = num.shift()

console.log(num);
console.log(t) // will return the first element that has been removed

// unshift() -> will add an element to the beginning of the array and will return the new length of the array: 

let u = num.unshift(2345)

console.log(num);
console.log(u)