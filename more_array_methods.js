let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
delete num[0];
console.log(num)
console.log(num.length); // the length of the array does not get afftected by using delete operator

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let num2 = [11, 12, 13, 14, 15, 16, 17, 18, 19];
let num3 = [21, 22, 3, 24, 25, 26, 27, 28, 29];

let num4 = num1.concat(num2, num3); // new array will be created which will contain/merge all the elements of num1, num2 and num3...

console.log(num4);

// sort method

let compare = (a, b) => {
    return a - b; // -> ascending order;
    // return b-a; // -> decreasing order;
}

let new_num = [11, 521, 333, 223, 11142, 14];
console.log(new_num);
// new_num.sort(); // it will modify the original array alphabetically and NOT IN ASCENDING ORDER
new_num.sort(compare); //provide a function in the parenthesis
console.log(new_num);

// reverse()

let marks = [1, 2, 3, 4, 5, 6, 7, 8, 9];
marks.reverse();
console.log(marks);

// splice method -> used to add elements in a particular interval of index
// splice method modifies the original array

let people = [11, 22, 33, 44, 55, 66, 77, 88, 99];

let deleted_values = people.splice(3, 4, 11111, 22222, 33333, 44444); // index 3rd s 4 element delete kro aur 11111,22222,33333,44444 add krdo
console.log(people);
console.log(deleted_values); // will return the array of the deleted values from the array

// slice method -> will  create a new array 

let val = [1, 2, 3, 4, 5];
let a = val.slice(2,4);
// let a = val.slice(2);
console.log(val);
console.log(a);