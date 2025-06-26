// map,filter,reduce are high order functions... we can save a lot of time using these functions...

//map -> creates a new array by performing some operations on each array element
//filter -> creates a new array of those elements that passes a test
//reduce -> takes first and second value and produces a result , then the produced result is used with next element and new result is produced... and so on...
// these functions doesn't modify origginal array

let arr = [45, 23, 21];
// console.log(arr);

//MAP method...

let a = arr.map((value, index, array) => {
    console.log(value, index, array);
    return value + index;
})

console.log(a);

//FILTER method...

let arr2 = [3, 4, 5, 6, 7, 8];

let a2 = arr2.filter((value) => {
    return value < 5; // will only return the elements that have value less than 2...
})

console.log(a2);

let arr3 = [1, 2, 3, 5, 2, 1];

const reduce_func = (value, index)=>{
    return value+index;
}

let newarr3 = arr3.reduce(reduce_func)

console.log(newarr3) // reduce an array to single value...