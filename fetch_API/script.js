let a = fetch("https://dog.ceo/api/breeds/image/random");

let img = document.createElement("img");
document.body.appendChild(img);

a.then((value)=>{
    console.log(value.status);
    return value.json();
}).then((data)=>{
    img.src = data.message;
})