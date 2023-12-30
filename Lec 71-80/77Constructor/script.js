// class is template or a blueprint 
// object is class with some specific properties
// object is the class with filled template

class RailWayForm{
    constructor(data,trainNo)
    {
        // when you make a obj of the class the const is called out
        // the constructor is called automatically by new keyword
        console.log("Constructor Called.... "+
        data + " " + trainNo);
        this.name1 = data;
        this.trainNo = trainNo;
    }
    submit()
    {
        console.log(this.name1 + " Your Form is Submitted for TrainNo " + this.trainNo);
    }
    cancel()
    {
        console.log(this.name1 + " Your form is cancelled for TrainNo " + this.trainNo);
    }
    fill(data,trainNo)
    {
        this.name1 = data;
        this.trainNo = trainNo;
    }
}

let harry = new RailWayForm("Harry",132635);
//harry.fill("Harry",132635);

let ishan = new RailWayForm("IshanGarg",165426);
//ishan.fill("IshanGarg",165426);

let ishan1 = new RailWayForm("IshanGarg",132635);
//ishan1.fill("IshanGarg",132635);

harry.submit();
ishan.submit();
ishan1.submit();
ishan.cancel();
