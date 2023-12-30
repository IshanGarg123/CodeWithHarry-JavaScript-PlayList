// fetch API post req
// post req made to send data to the server
// jsonplaceholder is a website

const createTodo = async () => {
  let options = {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      title: "Ishan",
      body: "bhai",
      userId: 1100,
    }),
    // JSON.stringify - convert object into json string
    // JSON.parse - convert json string into object
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
    let response = await p.json();
    return response;
};

const mainfunc = async ()=>{
    let todo = await createTodo();
    console.log(todo);
}

mainfunc();

const createTodo1 = async (todo) => {
    let options = {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(todo),
      // JSON.stringify - convert object into json string
      // JSON.parse - convert json string into object
    };
    let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
      let response = await p.json();
      return response;
  };



const mainfunc1 = async ()=>{
    let todo1 = {
        title:'ram',
        body:'bhai',
        userId:1,
    }
    let todo = await createTodo1(todo1);
    console.log(todo);
    console.log(await getTodo(50));
}

mainfunc1();

const getTodo = async (id)=>{
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id);
    let r = await p.json();
    return r;
}
