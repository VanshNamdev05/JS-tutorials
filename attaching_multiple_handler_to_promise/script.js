let p1 = new Promise((resolve,reject)=>{
    alert("I am not resolved");
    setTimeout(() => {
        resolve(1);
    }, 2000);
})

p1.then(()=>{
    console.log("Congratulations now this promise is resolved");
})

p1.then(()=>{
    alert("HURRAY...!!!")
})

// first .then() will show result first then the second one will show the result

// all of these multiple handler will run independently...