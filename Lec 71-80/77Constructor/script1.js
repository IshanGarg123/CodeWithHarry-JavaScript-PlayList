class RailWayForm{
    constructor(data,trainNo,address)
    {
        // when you make a obj of the class the const is called out
        // the constructor is called automatically by new keyword
        console.log("Constructor Called.... "+
        data + " " + trainNo);
        this.name1 = data;
        this.trainNo = trainNo;
        this.address = address;
    }
    preview()
    {
        console.log(this.name1 + " Your Form for Train Number: " + this.trainNo +
        " Your Address is " + this.address);
    }
    submit()
    {
        console.log(this.name1 + " Your Form is Submitted for TrainNo " + this.trainNo);
    }
    cancel()
    {
        console.log(this.name1 + " Your form is cancelled for TrainNo " + this.trainNo);
        this.trainNo = 0;
    }
}

let harry = new RailWayForm("Harry",123456,"youtube");
harry.preview();
harry.submit();
harry.cancel();
harry.preview();