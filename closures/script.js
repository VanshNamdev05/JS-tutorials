// message = "Good Global"
// function hello1() {
//     message = "Good Morning"
//     {
//         // let message = "Good Afternoon"
//         console.log("Hello 1 " + message)
//     }
//     let c = function hello2() {
//         console.log("I am c " + message)
//     }
//     message = "LAST WALA"
//     return c
// }
// c = hello1()
// c()

let x = () => {
    let a = 1
    console.log(a)
    let y = () => {
        let a = 2
        console.log(a)
        let z = () => {
            let a = 3
            console.log(a)
        }
    }
    y()
}
x()