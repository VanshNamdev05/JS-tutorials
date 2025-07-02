let a = document.getElementsByTagName("div")[0];

// a.innerHTML = a.innerHTML + "<h1>Hello World ! </div>;"

let div = document.createElement("div");
div.innerHTML = "<h1> Hello World !</h1>";

// a.prepend(div); // inner the container
// a.append(div); // inner the container

//a.before(div); // outside the container
// a.after(div); // outside the container

a.replaceWith(div); // remove all the content of the selected div and replace it with the new div

