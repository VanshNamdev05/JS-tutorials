let a = Math.floor(Math.random() * 100) + 1;
let guess = 0;

let num = prompt("Guess a number between 1 and 100");
num = Number.parseInt(num);

while (num !== a) {
    if (num > a) {
        alert("The number you guessed was larger!");
    }
    else if (num < a) {
        alert("The number you guessed was smaller!");
    }
    guess++;

    num = prompt("Guess a number between 1 and 100");
    num = Number.parseInt(num);
}
alert("You guessed the right number and your score is: " + (100 - guess));