// const sayHello = (name) => {console.log("Hello "+name)}
// const sayHello = (name) => console.log("Hello "+name)

// const sayHello = name => console.log("Hello "+name)
// sayHello("Vansh")

const sayHello = (name, greeting) => console.log(greeting + name)
sayHello("Vansh", "Good Afternoon ")

const x = {
    name: "Vansh",
    role: "JS Learner",
    show: function(){
        console.log(this)
        console.log(this.name)
        let that = this
        setTimeout(() => {
            console.log(`The name is ${that.name}\nThe role is ${that.role}`)
        }, 2000);
        
    }
}

x.show()