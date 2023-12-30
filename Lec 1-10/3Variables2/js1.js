// now var is not used now a days
// it can occur bugs in your code
// let - block scope
// const - const value cant be changed

console.log("var let ans const");
var a=45;
var b="Ishan";
var c=null;
var d=undefined;

{
    // global variable
    var a=10;
    console.log(a);
}
console.log(a);

{
    // block scope variable;
    let b="Garg";
    console.log(b);
}

{
    let c = 123;
    //let c=122; //error
    // let can be declared
    console.log(c);
    var d=123;
    var d=123; // no error
    console.log(d);
}

{
    const author="Ishan";
    //const author="garg";
    //author ="garg";
    //const cant be redefined or redeclared
    //const should be define on declare

}
console.log(b);

// at the end variable should be defined as let or const 
// should not defined as var keyword.