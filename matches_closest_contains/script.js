let elem1 = document.getElementById("id-1");
let sp1 = document.getElementById("sp1");
console.log(elem1);
console.log(elem1.matches(".class"))
console.log(elem1.matches(".box"))

console.log(sp1.closest(".box"));

console.log(sp1.closest("#sp1"));

console.log(elem1.contains(sp1))
console.log(sp1.contains(sp1))
console.log(sp1.contains(elem1))