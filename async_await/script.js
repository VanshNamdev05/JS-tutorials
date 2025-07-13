// async function always return a promise and we can use .then()... and so on

async function vansh(params) {
    return 5;
}

console.log(vansh);

vansh().then((x)=>{
    alert(x);
})