const changeBgRed = () =>{
    document.body.firstElementChild.style.background = "red";
}

let b = document.body;

console.log("First child of b is : ", b.firstChild); // will return text,comment node if available
console.log("First child of b is : ", b.firstElementChild); // will return only the element even if there are text,comment nodes present between them

setTimeout(() => {
    changeBgRed()
}, 1000);