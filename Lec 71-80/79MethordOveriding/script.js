// methord overriding
// means the child class have diff funct and child class
// diff func performed for same func name

class Employee {
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

let e = new Employee();
e.login();
e.reqLeave(3);

let p = new Programmer();
p.login();
p.reqLeave(3);
