// functions are used to create a program more readable as it allows using a block of code again and again

// function sum(x,y){
//     return x+y;
// }

const sum = (x,y) => {       // ---> arrow function
    return x+y;
}

let a = 1;
let b = 2;
let c = 3;

console.log("The sum of a and b is ", a+b)
console.log("The sum of a and b is ", sum(a,b))
console.log("The sum of b and c is ", sum(b,c))
console.log("The sum of c and a is ", sum(c,a))