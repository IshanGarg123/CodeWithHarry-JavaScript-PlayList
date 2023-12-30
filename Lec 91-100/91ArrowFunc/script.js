// Arrow Function

const sayHello = ()=>{
    console.log("Hello");
}
sayHello();

// can be written as
//const sayHello = () => console.log("Hello");

const a = (name,greeting) => {
    console.log(greeting + " " + name)
}

a("Ishan" , "Hello");

const x = {
    name:"Harry",
    role:"Js Developer",
    exp:30,
    show: ()=>{
        console.log(`The name is ${this.name} 
        the role is ${x.role}`);
    },
    show1: function()
    {
        setTimeout(console.log(`The name is ${this.name}
        the role is ${this.role}`),2000);
    },
    show2:function()
    {
        let that = this;
        setTimeout(console.log(`The name is ${that.name}
        the role is ${that.role}`),2000);
    },
}

x.show();
// this arrow fun it is said to undefined
x.show1();
// this func show the real name of the variables
x.show2();
