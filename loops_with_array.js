let num = [3, 5, 1, 2, 4];

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }

num.forEach((e) => {
    console.log(e * e);
})

//array.from

let name = "Vansh";

let arr = Array.from(name);

console.log(arr)

// for...of loop -> will print the value...

for(let item of num){
    console.log(item)
}
// for...in loop -> will print the keys...

for(let i in num){
    console.log(i) // o/p -> 0,1,2,3,4 (i.e, keys)
    // console.log(num[i]) // o/p -> values at index
}