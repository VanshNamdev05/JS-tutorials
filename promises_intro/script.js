let promise = new Promise(function(res,rej){
    alert("Hello");
    res(56);
})

console.log(promise);