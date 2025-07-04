// let a = setTimeout(() => {
//     alert("I am inside of timeout");
// }, 5000);

// let b = prompt("Do you want to run the setTimeout ? ");

// if(b === "n"){
//     clearTimeout(a)
// }

// console.log(a);

let count = 0;

const sum = (a,b,c) =>{
    console.log("Yes i am running and the sum of the numbers is : ",a+b+c);
}

const multiply = (a,b,c) =>{
    console.log("The multiplication of the numbers is : ",a*b*c);
    count++;

    
if(count == 5){
    clearInterval(c);
    console.log("The interval stopped after 10 seconds...")
}
}

setTimeout(sum,2000,1,2,3);
let c = setInterval(multiply,2000,2,2,3);
