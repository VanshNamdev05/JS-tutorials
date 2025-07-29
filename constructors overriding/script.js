class Employee{
    constructor(){
        console.log("Employee constructor is here...");
    }
    login(){
        console.log(`Employee has logged in`);
    }
    login(){
        console.log(`Employee has logged in`);
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`);
    }
}

class Programmer extends Employee{

    constructor(name){
        // this.name = name;
        super(); // this is required to be called always
        console.log(`${name} - Programmer's constructor is here. this is newly written`);
    }
    // constructor(...args){
    //     super(...args);
    // }
    // if there is no constructor in the child class this is created automatically
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log(`One extra is granted`);
        // console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
    }
}

// let a = new Employee()
let a = new Programmer() // it automatically creates constructor if not passed for the class that is extending the base class
a.login();
a.requestLeaves(3);
