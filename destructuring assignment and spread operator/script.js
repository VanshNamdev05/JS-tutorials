let arr = [3, 5, 8, 6, 7, 22, 55];
// let [a, b, c, ...rest] = arr;

// console.log(a, b, c, rest);

let [a, , , ...rest] = arr;
console.log(a, rest);

let {c, d} = {
    c:11,
    d:22
}

console.log(c,d);

// spread operator

let arr1 = [1,8,4];
let obj = {...arr1};

console.log(obj);

function sum(v1,v2,v3){
    return v1+v2+v3;
}

let summ = sum(...arr1);
console.log(summ);

let obj2 = {
    name : "Vansh",
    company : "COMPANY",
    address : "ADDRESS"
}

console.log({...obj2, name:"NAMDEV"});
console.log({ name:"NAMDEV", ...obj2}); //in this case the value will not be overwritten as obj2 was written later...
