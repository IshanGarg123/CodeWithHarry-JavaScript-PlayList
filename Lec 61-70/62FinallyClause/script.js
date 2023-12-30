// finally clause
// you execute a code by try-catch
// if it give error 
// it run the catch block
// else run the try block
// it always run if exists

try{
    let a=0;
    throw error("Hello");
    console.log("program ran Successfully");
}
catch(error)
{
    console.log("This is an error");
    //console.log(p);
    // it give error
}
finally{
    console.log("i am  a good boy");
    // it always run
    // wheather their is error or not 
    // both in try and catch;
}

// let take an example
// if your code have an error in try block it go to catch
// if catch block also have an error
// it produce error
// but in this case also the finally will run
// in the case where the catch have error
// the line after that error will not run

// function written the finally clause
// close the file
// exit the loop
// Write to the log file


const fun = () =>{
    try{
        let a=0;
        console.log("program ran Successfully");
        return;
    }
    catch(error)
    {
        console.log("This is an error");
        console.log(p);
        // it give error
    }
    finally{
        console.log("i am  a good boy");
        // it always run
        // wheather their is error or not 
        // both in try and catch;
    }
}

fun();
// the function also
// it will also run after return in function
// it will definatly run program
console.log("End");

