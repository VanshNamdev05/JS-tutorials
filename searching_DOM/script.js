// changing the box-1 bg color to red

//using className

let box1 = document.getElementsByClassName("box1")[0];
// console.log(box1)

box1.style.backgroundColor = "red";

//using Id

let box2 = document.getElementById("b2");
// console.log(box2);
box2.style.backgroundColor = "yellow";

// using querySelectorAll

let cards = document.querySelectorAll(".card");
console.log(cards)

cards[0].style.color = "aqua";
cards[1].style.color = "blue";
cards[2].style.color = "red";
cards[3].style.color = "purple";