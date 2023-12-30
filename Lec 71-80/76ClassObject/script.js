// class is template or a blueprint 
// object is class with some specific properties
// object is the class with filled template

class RailWayForm{
    constructor()
    {

    }
    submit()
    {
        alert(this.name1 + " Your Form is Submitted for TrainNo " + this.trainNo);
    }
    cancel()
    {
        alert(this.name1 + " Your form is cancelled for TrainNo " + this.trainNo);
    }
    fill(data,trainNo)
    {
        this.name1 = data;
        this.trainNo = trainNo;
    }
}

let harry = new RailWayForm();
harry.fill("Harry",132635);

let ishan = new RailWayForm();
ishan.fill("IshanGarg",165426);

let ishan1 = new RailWayForm();
ishan1.fill("IshanGarg",132635);

harry.submit();
ishan.submit();
ishan1.submit();
ishan.cancel();
