// ES6 Modules
// exort using ES6 Function export
// export use for exporting the functions 
// default is used to take default fun without
// the destruturing of the object
export const hello = ()=>{
    console.log("Hello Ishan");
}

export const ahello = (name)=>{
    console.log("Hello",name);
}

const harry =()=>{
    console.log("Hello "+"Ishan");
}

export default harry;