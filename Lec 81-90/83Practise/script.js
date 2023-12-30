// problem1 and problem2 and problem 5

class ComplexNumber{
    constructor(real,img)
    {
        this.real = real;
        this.img = img;
    }
    add(c)
    {
        let l = this.real + c.real;
        let r = this.img + c.img;
        return new ComplexNumber(l,r);
    }
    // get real()
    // {
    //     return this._real;
    // }
    // get img()
    // {
    //     return this._img;
    // }
    // set real(num)
    // {
    //     this.real = num;
    // }
    // set img(num)
    // {
    //     this.img = num;
    // }
}

let a = new ComplexNumber(3,4);
let b = new ComplexNumber(5,3);
let c = a.add(b)
console.log(`${c.real}+${c.img}i`);
c.real = 1;
c.img = 1;
console.log(c.real);
console.log(c.img);


// problem3

class Human{
    constructor(name,favfood){
        this.name = name;
        this.favfood = favfood;
    }
    Walk()
    {
        console.log(this.name + " Human is walking");
    }
}

class Student extends Human{
    Walk()
    {
        console.log(this.name + " Student is walking");
    }
}

let x = new Human("harry","burger");
let y = new Student("Ishan","Manchurian");
x.Walk();
y.Walk();

// problem4
console.log(y instanceof Human);
// true;