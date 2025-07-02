let span = document.getElementsByTagName("span")[0];
console.log(span);
console.dir(span); // it will show the element as an object along with its properties...

console.log(first.innerHTML)

first.innerHTML = "<b>YES I am a SPAN</b>";
console.log(first.innerHTML);


console.log(first.outerHTML);
first.outerHTML = "<div>Hey</div>"

//inner and outerHTML are valid only for element nodes 
//for text or comment nodes use .nodevale or .data

console.log(document.body.textContent);