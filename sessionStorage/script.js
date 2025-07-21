// sessionStorage exists only within the current browser tab . 
// Another tab with same page will have a different storage .
// The data survives page refresh but not open/close of the tab .

sessionStorage.setItem("name","vansh");

window.onstorage = (e) => {
    alert("Changed");
    console.log(e);
    console.log("Old value : ",e.oldValue);
    console.log("New value : ",e.newValue);
}