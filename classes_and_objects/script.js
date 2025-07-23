class railwayForm {
    submit(){
        alert(this.name + "'s Form submitted for : "+this.trainNo);
    }

    cancel(){
        alert(this.name+ "'s Form cancelled for train : "+this.trainNo);
    }

    fill(givenName, trainNumber){
        this.name = givenName;
        this.trainNo = trainNumber
    }
}

// Creating a form for vansh
let vansh = new railwayForm();
// Fill the forms with details
vansh.fill("vansh", 14123);

// Creating a form for rohan
let rohan = new railwayForm();
// Fill the forms with details
rohan.fill("rohan", 11221);

vansh.submit();
rohan.submit();
rohan.cancel();