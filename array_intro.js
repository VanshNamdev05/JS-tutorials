let marks_class12 = [91,82,73,64,35, null, false, "Not Present"];

console.log(marks_class12)
console.log(marks_class12[0])
console.log(marks_class12[1])
console.log(marks_class12[2])
console.log(marks_class12[3])
console.log(marks_class12[4])
console.log(marks_class12[5])
console.log(marks_class12[6])
console.log(marks_class12[7])
console.log(marks_class12[8]) // index does not exist --> o/p -> undefined

//to get the length of the array

console.log("The length of the marks_class12 is : ",marks_class12.length)

marks_class12[7] = 89; // adding a new value to the array

console.log(marks_class12)

marks_class12[0] = 95; //changing the value of an array

console.log(marks_class12)

// in js arrays are object

console.log(typeof marks_class12)

for(let i = 0; i<marks_class12.length; i++){
    console.log(marks_class12[i]);
}