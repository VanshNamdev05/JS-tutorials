// take input from user and add to the existing array of numbers

let arr = [1, 2, 3, 4, 5, 6];

let a = prompt("Enter a number");
a = Number.parseInt(a);
arr.push(a);

// keep adding numbers to the array until 0 is added to the array...
let b;
do {
    b = prompt("Enter a number");
    b = Number.parseInt(b);
    arr.push(b);
    console.log(arr);
} while (b != 0);

// filter method to filter number divisible by 10

let arr1 = [10, 2, 0, 4, 50, 83, 87];
let newArr = arr1.filter((value) => {
    return value % 10 == 0;
})
console.log(newArr);

// mao method to create an array of squares of the number 

let arr2 = [1, 2, 3, 4, 5];
let squared_arr = arr2.map((value) => {
    return value * value;
})

console.log(squared_arr);

// factorial using reduce method...

let arr3 = [1, 2, 3, 4, 5, 6, 7, 8];

let fact_arr = arr3.reduce((val1, val2) => {
    return val1 * val2;
})

console.log(fact_arr);