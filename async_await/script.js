// async function always return a promise and we can use .then()... and so on

async function vansh(params) {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 Deg")
        }, 1000);
    })

    let bengaloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 Deg")
        }, 2000);
    })

    // delhiWeather.then(alert);
    // bengaloreWeather.then(alert);

    console.log("Fetching delhi Weather... Please Wait.....")
    let delhiW = await delhiWeather;
    console.log("Delhi Weather is fetched... : " + delhiW)

    console.log("Fetching bengalore Weather... Please Wait.....")
    let bengW = await bengaloreWeather;
    console.log("Bengalore Weather is fetched... : " + bengW)

    return [delhiW, bengW];

}

const cherry = async () => {
    console.log("Hey i am cherry and i am waiting...");
}

console.log("Welcome to weather control room")

const main = async () => {

    let a = await vansh();
    let b = await cherry();
}

main();