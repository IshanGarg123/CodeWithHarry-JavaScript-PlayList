setTimeout(()=>{
    console.log("Hacking wifi ... Plese wait...");
},1000)

try{
    console.log(ishan);
}
catch(error)
{
    console.log(error);
}

// error handling 
// that the script will not stop working due to error
// the error is catch and sorted

try{
    setTimeout(()=>{
        console.log(ishan);
    },100)
}
catch(error)
{
    console.log(error);
}


// it give error 
// try only handle sync error in it
// but it is async 

try{
    setTimeout(()=>{
        try{
            console.log(ishan);
        }
        catch(error)
        {
            console.log(error);
        }
    },100)
}
catch(error)
{
    console.log(error);
}


// give no error as the script inside async is sync

setTimeout(()=>{
    console.log("Fetching username and password... plese wait...");
},2000)

setTimeout(()=>{
    console.log("Hacking Rahul's facebook id... plese wait...");
},3000)

setTimeout(()=>{
    console.log("Username and password of rahul (+9217863954) fetched...");
},4000);

// if you have an error 
// your script give and will stop executing
