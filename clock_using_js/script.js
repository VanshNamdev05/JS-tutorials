

let cont = document.getElementById("time");

setInterval(() => {
    let a = new Date();
    let hr = a.getHours();
    let min = a.getMinutes();
    let sec = a.getSeconds();
    cont.innerHTML = `${hr}Hr : ${min}Min : ${sec}Sec`;
}, 1000);