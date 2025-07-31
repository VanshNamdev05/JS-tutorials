class Animal{
    constructor(name){
        this._name = name;
    }
    fly(){
        console.log("I am flying...");
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name = newName;
    }
}

class Rabbit extends Animal{
    eatCarrot(){
        console.log("Rabbit is eating Carrot");
    }
}

let a = new Rabbit("Bruno");
a.fly();
console.log(a.name);
a.name = "Jack";
console.log("Jack");

console.log(a instanceof Animal);

let c = 56;

console.log(c instanceof Animal);

console.log(a instanceof Rabbit);