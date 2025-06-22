let name = "Vansh";
console.log(name.length); //prints the length of the string

console.log(name.toUpperCase()); //converts all theletters in the string to upper case

console.log(name.toLowerCase()); //converts all theletters in the string to lower case

// index of the string will lie from 0 to (n-1)

console.log(name.slice(2,4)) // 4th not included

console.log(name.slice(2)) // will print everything from 2nd index to the last

console.log(name.replace("Van", "Har"))

console.log(name.replace("van", "Har")) //v & V -> different letters  o/p -> Vansh

let friend = "Naman";

console.log(name.concat(" is a friend of ", friend))

let friend2 = "        Harsh       ";
console.log(friend2) 
console.log(friend2.trim()) // will remove all the spaces...

// strings are immutable...

console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])

for(key in name){
    console.log(name[key]);
}