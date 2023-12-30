// getter and setter methord
// getter to get the value of the variable
// setter to set the value of the variable

class Animal{
    constructor(name)
    {
        this.name = name;
    }
    fly()
    {
        console.log("Mai ud raha hu");
    }
    // get _name()
    // {
    //     return this.name;
    // }
    // set _name(name)
    // {
    //     this.name = name;
    // }
    // getter and setter not very useful
}

class rabbit extends Animal{
    eatCarrot()
    {
        console.log("Eating Carrot");
    }
}

let a = new Animal("Sumo");
a.fly();
console.log(a.name);
a.name = "Jack";
console.log(a.name);
let b = new rabbit("rabbi");

// InstanceOf operator
console.log(a instanceof Animal);
// true
console.log(a instanceof rabbit);
// false as it only incl only super class not sub classes
console.log(b instanceof Animal);
// true as it is a Super Class
console.log(b instanceof rabbit)
// true


// it give true or false
// if the object is of that class or class inheriting of it than true
// else false

let c= 100;
console.log(c instanceof Animal);
