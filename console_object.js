console.log(console);
console.log("Hello");
console.error("Hey this is an error");
console.assert(5 > 55); // if false -> assertion failed
console.assert(55 > 5);
// console.clear(); // clears the console

let obj = {
    a: 1,
    b: 2,
    c: 3,
}

console.table(obj); // shows key-value pair in the tabular method...

console.warn("Please don't drink");

console.info("Hey this is an important information");

console.time("forLoop");

for(let i = 0; i<5; i++){
    console.log(222);
}

console.timeEnd("forLoop");

let i = 0;

console.time("whileLoop");

while(i<5){
    console.log(233);
    i++;
}

console.timeEnd("whileLoop");