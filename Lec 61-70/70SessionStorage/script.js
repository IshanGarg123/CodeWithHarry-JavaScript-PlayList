// Session Storage
// it is very often than localStorage.
// properties and methord are same as localStorage but
// differences
// session storage exists only within current browser tab
// not exist in another tab of same page
// another tab have diff storage
// the data survive page refresh but not closing/opening the tab

// all 6 same functions as the local storage
// setitem(key,value);
// getitem(key);
// removeitem(key);
// key(index)
// length
// clear()

// storage event = when the data get update you can do a 
// certain fun on it
// it happen when you open the page in 2 diff tabs
// if one tab shage the local storage
// the another get the function executed to it

window.onstorage = (e)=>{
    alert("Changed");
    console.log(e);
}

// e is storage event consisit of infomation
// regarding the change in the storage

