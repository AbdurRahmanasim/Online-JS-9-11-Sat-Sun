
// function digitalClock(){
//     var date = new Date();
//     var hours = date.getHours();
//     var minutes = date.getMinutes() ;
//     var seconds = date.getSeconds() ;

//     var session = document.getElementById("session") ;

//     if(hours >= 12){
//         session.innerHTML = "PM" ;
//     }
//     else{
//         session.innerHTML = "AM"
//     }
    
//     if(hours > 12 ){
//         hours = hours - 12 ;
//     }
    
//     document.getElementById("hrs").innerHTML = hours < 10 ? "0"+hours : hours ;
//     document.getElementById("mins").innerHTML = minutes < 10 ? "0"+minutes : minutes ;
//     document.getElementById("secs").innerHTML = seconds < 10 ? "0"+seconds : seconds ;
// }

// setInterval( digitalClock , 10 ) 


// function print(){
//     console.log("Pakistan");
// }


// setInterval( print , 10 )


// Ternary Operator 

// var a = 10 ;
// var b = 20 ;

// a == b ? console.log("This is true") : console.log("This is false");



// Dom ( Document Object Model )

// console.log( document );

// console.log( document.body );

var dom = document.childNodes[1].childNodes[0].childNodes[0] ;

console.log( dom );

// Junk ArtiFacts 