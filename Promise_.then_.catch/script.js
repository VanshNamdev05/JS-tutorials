let p1 = new Promise((res,rej)=>{
    console.log("Promise is pending...")

    setTimeout(() => {
        console.log("I am a promise 1 and i am fulfilled");
        res(true);
    }, 2000);
})

let p2 = new Promise((res,rej)=>{
    console.log("Promise is pending...")

    setTimeout(() => {
        console.log("I am a promise 2 and i am fulfilled");
        rej(new Error("PROMISE IS REJECTED 😣"))
    }, 2000);
})


console.log(p1);
console.log(p2);

p1.then((value)=>{
    console.log(value);
})

p1.then(prompt)
p1.then(console.log)
p1.then(alert)

p2.catch((error)=>{
    console.log(`Some error occured in p2`);  
})

//if we use .catch() then the error object will not be logged in console