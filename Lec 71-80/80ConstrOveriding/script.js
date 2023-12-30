// methord overriding
// means the child class have diff funct and child class
// diff func performed for same func name


// if constructor is not made it use the default constructor
// that is 
// constructor(){};

class Employee {
    constructor(name)
    {
      console.log(`${name} Employee's constructor is here`);
      this.name = name;
    }
    login() {
      console.log(`Employee has logged in`);
    }
    logout() {
      console.log(`Employee has logged out`);
    }
    reqLeave(leaves) {
      console.log(`Employee has requested ${leaves} leave - Auto Approve`);
    }
  }
  
  class Programmer extends Employee {
    // this constructor is made automatically in child class
    // it is the constructor of parent class
    // constructor(...args)
    // {
    //   super(...args);
    // }

    // constructor(name)
    // {
    //   console.log(`${name} Programmer's constructor is here`);
    //   this.name = name;
    // }

    // it give error 
    // you must have to call super constructor

    constructor(name)
    {
      super(name);
      console.log("Newly made constructor");
    }
    // you should use this keyword below the super keyword
    // else it give the error


    reqCoffee(x) {
      console.log(`Employee has requested ${x} coffees`);
    }
    // methord overiding of Employee class
    reqLeave(leaves) {
      // super help to call the parent function
      super.reqLeave(leaves);
      console.log("One extra leave is granted")
      console.log(`Employee has Granted ${leaves + 1} leave(one extra)`);
    }
  }
  
  let e = new Employee("Harry");
  e.login();
  e.reqLeave(3);
  
  let p = new Programmer("IshanGarg");
  p.login();
  p.reqLeave(3);
  