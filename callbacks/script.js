// asynchronus code -> runs one by one as shown below :
// let a = prompt("What is your name");
// let b = prompt("What is your age");
// let c = prompt("What is your fav color");

// console.log(`${a} is ${b} years old and his fav color is ${c}`);

// Asynchronous code -> initiated a code that dont block the execution of a program i.e can start w/o waiting for other tasks to finish...

// console.log("Start");
// setTimeout(() => {
//     console.log("Hey i am good");
// }, 3000);
// console.log("End");

// CALLBACKS : 

function loadScript(src, callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Loaded script with src : "+src);
        callback(null, src);
    }
    script.onerror = function(){
        console.log("Error loading script with src : "+src);
        callback(new Error ("SRC got some error"));
    }
    document.body.appendChild(script);
}

function hello(error, src){
    // alert("HELLO..." +src);
    if (error) {
        console.log(error);
    }

}

// loadScript("https://cdn.uhjsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js", hello); // correct
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js", hello); //incorrect