class railwayForm {
    constructor(givenName, trainNumber){
        // constructor will automatically called or invoked when a new object is created using the constructor's class...
        this.name = givenName;
        this.trainNo = trainNumber
    }
    submit(){
        alert(this.name + "'s Form submitted for : "+this.trainNo);
    }

    cancel(){
        alert(this.name+ "'s Form cancelled for train : "+this.trainNo);
    }

    fill
}

// Creating and filling form for vansh
let vansh = new railwayForm("vansh", 14123);
// No need to Fill the forms with vansh's details
// vansh.fill("vansh", 14123);

// Creating a form for rohan
let rohan = new railwayForm();
// Fill the forms with details
// rohan.fill("rohan", 11221);

vansh.submit();
rohan.submit();
rohan.cancel();