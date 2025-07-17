// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script");
//         script.src = src;
//         script.onload = () => {
//             resolve(src);
//         }
//         document.body.append(script)
//     })
// }

// const main1 = async () => {
//     console.log(new Date().getDate())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js")
//     console.log(a);
//     console.log(new Date().getDate())
// }

// main1();

// let p =() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("This threw a new Error... Not acceptable"))
//         }, 3000);
//     })
// }

// let a = async (params) => {
//     try{
//         let c = await p();
//         console.log(c);
//     }
//     catch(error){
//         console.log("This error has been handled");
//     }finally{
//         console.log("FINAL");
//     }
// }

// a();

let p1 = async (params) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 1000);
    })
}

let p2 = async (params) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}

let p3 = async (params) => {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(10);
        }, 3000);
    })
}

const run = async (params) => {
    // console.time("run");
    // let a1 = await p1();
    // let a2 = await p2();
    // let a3 = await p3();
    // console.log(a1,a2,a3);
    // console.timeEnd("run");

    // using Promise.all to make runtime shorter...

    console.time("run");

    let a1 = p1();
    let a2 = p2();
    let a3 = p3();

    let a1a2a3 = await Promise.all([a1,a2,a3]);
    console.log(a1a2a3)

    console.timeEnd("run")
}

run();