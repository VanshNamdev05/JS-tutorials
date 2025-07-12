let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Value 1");
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2");
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Value 3");
    }, 3000);
})

// let promise_all = Promise.all([p1, p2, p3]); // runs after all the promise runs

// let promise_all = Promise.allSettled([p1, p2, p3]); // runs even if some rejects show the result

// let promise_all = Promise.race([p1, p2, p3]); // show the result of the fastest promise

// let promise_all = Promise.any([p1, p2, p3]); // show the result of the fastest promise that is not rejected

// let promise_all = Promise.resolve(6)

let promise_all = Promise.reject(new Error("HEY"));


promise_all.then((value) => {
    console.log(value);
})
