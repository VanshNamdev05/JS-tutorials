let color = prompt("Enter the color you want")
document.body.style.backgroundColor = color;

// in an html - body and head present (children of html) , inside body it has more children , etc...

// text node is a leaf

// if we start a tag with span and close it with div .. the browser will change the div to span and autocorrect it

// document.body -> will point to the body
// document.head -> will point to the head... and so on

console.log(document.title); // doesn't return the title tag... it returns the string...

console.log(typeof document.title);

document.title= "Hello 😉"; 

console.log(document.title);
console.log(typeof document.title);

