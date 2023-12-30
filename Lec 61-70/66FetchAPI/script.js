// fetch API
// kabhi ve server se data magana hota hai
// ya server ko data send karna hota hai
// we use API - Application programming interface

let p = fetch("https://api.weatherapi.com/v1/current.json?key=845307a8b8ee4e18a52122108231009&q=London&aqi=yes");

p.then((value1)=>{
    console.log(value1.status);
    // status between 200-299 is consider good status
    
    console.log(value1.ok);
    // it give boolean true and false
    // if all thing go good or not
    
    console.log(value1.headers)
    
    return value1.json();
    // you can't use console.log(value1.json)
    // it give error
    // convert json string  into the object form to print it
}).then((value2)=>{
    console.log(value2);
})

// js can be used to send and recieve information
// from the network when needed(AJAX)
// AJAX = async js and xml
// AJAX used in old days
// now JSON is used to fetch data from the server(fetch)


// fetch API - use to get data over network
// let promise = fetch(url,[options]);
// without options it is get request
// to get some data from server url it is by default

// get put post del 
// 4 type of requests are their





