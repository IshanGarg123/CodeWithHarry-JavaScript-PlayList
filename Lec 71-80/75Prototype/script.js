// javascript object have a prototype property

let a={
    name:"Harry",
    lang:"Javascript"
}

console.log(a);

// protype is a document consist of properties
// and functions related to the object


console.log(a.toString());
console.log(a.valueOf());

// we can change the prototype of the object
// prototype value either null
// or pointing to some other object
// if we try to read a property from the obj and it is missing
// js automatically take it from prototype
// it is called prototypal inheritance

// we can set prototype
// by setting __proto__ 

let p ={
    run:()=>{
        alert("run");
    }
}

a.__proto__ = p ;
// to add the p obj items in the prototype of the a;
a.run();
console.log(a.lang);


let b={
    name:"Harry",
    lang:"Javascript",
    run:()=>{
        alert("Self run");
    }
}

b.__proto__ = p;
// this above line helps to add obj p in
// the prototype object
console.log(b);
b.run();
// it run self run
// as it first see in its object 
// if not found than goto the protype function


b.__proto__ = a;
console.log(b);

// __proto__ = use to access the prototype
