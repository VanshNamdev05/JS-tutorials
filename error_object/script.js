// try {
//     harry
// } catch (error) {
//     console.log(error);
//     console.log(error.name);
//     console.log(error.message);
// }


try {
    let age = prompt("Enter your age : ");
    age = Number.parseInt(age);
    if (age>120) {
        throw new Error("This is not probably true");
    }
    // throw new Error("Not Good");
    // throw new ReferenceError("Not Good");
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

