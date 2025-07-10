let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`Resolve after 2 seconds`);
        resolve(56);
    }, 2000);
})

p1.then((value)=>{
    console.log(value);
    return new Promise((resolve,reject)=>{
        resolve("Promise 2");
    })
    
}).then((value)=>{
    console.log("We are done...");
    return 2;
}).then((value)=>{
    console.log(value);
})

const loadScript = (src) =>{
    return new Promise((resolve,reject)=>{

        let s = document.createElement("script");
        s.src = src;
        document.body.appendChild(s);
        s.onload =()=>{
            resolve(1);
        }
        s.onerror = () =>{
            reject(0);
        }
    })
}

let scr = loadScript("https://localhost:3000/index.js")

scr.then((value)=>{
    console.log(value);
}).catch((error)=>{
    console.log("We are sorry there was a problem in loading the script");
})