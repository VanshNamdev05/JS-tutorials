console.log("Please wait..")
try {
    console.log(rahul);
}
catch (error) {
    console.log(error);
}
console.log("Fetching username and password...")

// try adn catch doesn't work for scheduled code like setTimeout...

try {
    setTimeout(() => {
            console.log(rahul)
    }, 100);
} catch (error) {
    console.log(error);
}

// to use try and catch in scheduled code... use it inside of the scheduled code... 

setTimeout(() => {
    try {
        console.log(rahul)
    } catch (error) {
        console.log(error)
    }
})