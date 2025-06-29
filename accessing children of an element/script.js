// direct as well as deeply nested elements of an element are called its childrens

// child nodes -> Elements that are directly children example.-> title,meta tag is the direct children of head
// span and p are siblings and both are direct childrens of the div tag

// descendent nodes -> all nested elements, children, their children and so on...
// ex.-> head, meta , title , body , div , p , span tag all are the descendant nodes of the html tag

console.log(document.body.firstChild); // text node -> spaces available between body and other element

console.log(document.body.lastChild); // script

console.log(document.body.childNodes);

// following is always true 

console.log(document.body.childNodes[0] === document.body.firstChild);

console.log(document.body.childNodes[document.body.childNodes.length -1] === document.body.lastChild);

console.log(document.body.hasChildNodes())

// childNodes looks like an arrat but its not actually an arrat but a collection
// We can use Array.from(collection) to convert it into an Array

console.log(Array.from(document.body.childNodes));