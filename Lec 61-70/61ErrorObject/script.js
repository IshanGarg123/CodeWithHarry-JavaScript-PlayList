// error object
// custom error kaise throw karee
// if use do something wrong


// for built in errors the error oject has 2 main properties
// name ans message

try{
    ishan
}catch(error)
{
    console.log(error);
    // it prints the message of the error 
    // it is a line
    // ishan is not defined
    console.log(error.message);
    // it prints the name of the error
    // eg reference error
    console.log(error.name);
}


try{
    throw new Error("Ishan is not goood");
}
catch(error)
{
    console.log(error.name);
    // error
    console.log(error.message);
    // Ishan is not goood
}

try{
    throw new ReferenceError("Ishan is not goood");
    // use to throw reference error
}
catch(error)
{
    console.log(error.name);
    // error
    console.log(error.message);
    // Ishan is not goood
    console.log()
}

try{
    console.log(ishan);
    throw new ReferenceError("Ishan is not good");
    // use to throw reference error
}
catch(error)
{
    console.log(error.name);
    // error
    console.log(error.message);
    // Ishan is not goood
    console.log(error.stack);
    // it tell the line no in the script 
    // where the error is occured
}

try{
    let age = prompt("Enter your age");
    age = parseInt(age);
    if(age>120)
    {
        throw new ReferenceError("This is not true");
    }
}
catch(error)
{
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}

console.log("The script is still running");

// the 2 major errors are
// syntax error
// reference error


