// local storage 
// it is a web storage object
// which are not sent to server with each req
// data survive a full page refersh and even a full browser restart

localStorage.setItem("name","Ishan");
// to set value in the local storage

let key = prompt("Enter key you want to set");
let value = prompt('Enter value you want ot set');

localStorage.setItem(key,value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);


// localStorage.setItem(key,value); 
// to set new keyt value pairs in the local storage
// localStorage.getItem(key);
// to get the value of a key from the local storage

localStorage.removeItem("name");
// use to remove key-value pair from local storage


//localStorage.clear();
// to remove all elements from local storage

localStorage.setItem("a",5);
console.log(localStorage.getItem("a"));
localStorage.setItem("a",10);
console.log(localStorage.getItem("a"));
// it will overwrite the value of a from 5 to 10;

console.log(localStorage.length);
// to find length of local storage
// no of items stored in local storage

console.log(localStorage.key(0));
// to the key at a given index in the local storage


// it also be treated as an js object with name localstorage
// both the key and value must be strings type
// JSON methord is used to store the object in local storage as string
// JSON.stringify(object) - convert obj to JSONstring;
// JSON.parse(string) - convert JSONstring into obj;

