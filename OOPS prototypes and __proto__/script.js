let a = {
    name1 : "Vansh",
    language : "JavaScript",
    run : () => {
        alert("Self Run...!")
    }
}

console.log(a);

let p = {
    run : () => {
        alert("RUN...!");
    }
}

p.__proto__ = {
    name : "Namdev",
}

a.__proto__ = p;

a.run(); // will not run without __proto__ , if run() present in the a object, that one will be used

console.log(a.name)