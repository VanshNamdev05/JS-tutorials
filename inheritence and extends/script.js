class Animal {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
    run() {
        console.log(this.name + " is running... 👭");
    }
    shout() {
        console.log(this.name + " is shouting !");
    }
}

class Monkey extends Animal {
    eatBanana() {
        console.log(`${this.name} is eating banana 🍌`);
    }
}

let ani = new Animal("Zebra", "B&W");
let m = new Monkey("Chimpu", "Brown");

ani.shout();
m.shout();
m.eatBanana();
// ani.eatBanana(); // --> this will not work as monkey is not the base class...

