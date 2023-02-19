// ParkingLot 

var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");


var parkings = [ p1 , p2 , p3 ]

function park(){
    var flag = false
    for(var i = 0 ; i < parkings.length ; i++){
        if(parkings[i].innerHTML == "Available"){
         var carNumber = prompt("Enter Your Car Number") ;
         parkings[i].innerHTML = carNumber ;
         flag = true
         break ;
        }
    }
    if(flag == false){
        alert("No space Available")
    }
}

function checkout(){
    var carNumberco = prompt("Enter Car Number") ;
    var flag = false
    for(var i = 0 ; i < parkings.length ; i++){
        if(carNumberco == parkings[i].innerHTML){
            parkings[i].innerHTML = "Available"
            flag = true
            break;
        }
    }
    if(flag == false){
        alert("No car Available with this Number")
    }
}