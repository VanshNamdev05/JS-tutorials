console.log(a)
greet();
aaa(); // function expressions are not hoisted
function greet(){
    console.log("good morning");
}
var a = 9; //Declaration hoisted to the top but initialization isn't...
console.log(a)

var aaa = function(){
    console.log(`Greet...`);
}