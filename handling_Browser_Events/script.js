let btn = document.getElementById("btn");

let x = (e)=>{
    alert("Hello World 1 !");
    console.log(e.target, e.type, e.clientX, e.clientY);
}

let y = (e)=>{
    alert("Hello World 2 !");
}

btn.addEventListener('click',x)

btn.addEventListener('click',y)

// let num = prompt("Enter your favourite number : ");

// if (num == 2) {
//     btn.removeEventListener('click', x);
// }
// else if (num == 1) {
//     btn.removeEventListener('click', y);
// }

// agar removeEveneListener use krna h to reference same hona chahiye addEventListener aur removeEveneListener