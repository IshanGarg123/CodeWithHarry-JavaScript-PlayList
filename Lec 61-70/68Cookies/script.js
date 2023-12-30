// cookies in js
// cookies are small string of data store directly in the browser

// console.log(document.cookie);
// key=value pairs seperated by the ; in cookies

// you can add a cookie using document.cookie = "new data";
// the data you want to add in cookie
// eg document.cookie = "name=ishan1234567890"

document.cookie = "name=ishangarg";
document.cookie = "college=chitkara";
document.cookie = "School=BVM";

console.log(document.cookie);

document.cookie = "School=BhartiyaVidyaMandir";
// overwrite the current cookie data
// not make a new entry
console.log(document.cookie);

// document with a cookie is treated specially
// cookies are smalllest and a easy database
// cookie data store karne ka essan tarika


// encode url component
// console.log(encodeURIComponent(name));
//console.log(encodeURIComponent(value));

let key = prompt("Enter Your Key");
let value = prompt("Enter you value");
document.cookie = `${key}=${value}`;
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);

// encodeURIComponent = encode symobls in something else
// eg a;; convert into a%3B%3B
// decodeURIComponent = to decode the components
// eg encodeURIComponent("a;;") = "a%3B%3B";
// eg decodeURIComponent("a%3B%3B") = "a;;";











