let p = 9;
function ax(){
    let a = 8; //not in scope outside this block...
    // var a = 9; // var is globally scoped
    console.log(p);
}

ax();
console.log(p);
console.log(a);