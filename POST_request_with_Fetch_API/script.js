const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        // body: JSON.stringify({
        //     title: 'Choco',
        //     body: 'bar',
        //     userId: 1,
        //     id: 101,
        // }),
        body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json();
    return response;
}

const mainFunc = async () => {
    let todo = {
        title: 'CHOCOOOOOOOOOOOOOOOOO',
        body: 'bar',
        userId: 5,
    }
    let Todo = await createTodo(todo);
    console.log(Todo);
}

mainFunc();