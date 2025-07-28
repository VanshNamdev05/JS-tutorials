class Employee{
    login(){
        console.log(`Employee has logged in`)
    }
    login(){
        console.log(`Employee has logged in`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaves`)
    }
}

class Programmer extends Employee{
    requestCoffee(x){
        console.log(`Employee has requested ${x} coffees`)
    }
    requestLeaves(leaves){
        super.requestLeaves(4);
        console.log(`One extra is granted`);
        // console.log(`Employee has requested ${leaves+1} leaves (one extra)`)
    }
}

// let a = new Employee()
let a = new Programmer()
a.login();
a.requestLeaves(3);
