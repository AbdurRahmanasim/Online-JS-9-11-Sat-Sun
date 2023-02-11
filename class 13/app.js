
// Stop Watch 

var hr = 00 ;
var min = 00 ;
var sec = 00 ;
var msec = 00 ;

var hour = document.getElementById("hr") ;
var minute = document.getElementById("min") ;
var second = document.getElementById("sec") ;
var millisecond = document.getElementById("msec") ;

var interval ;

function timer(){
     msec++
     millisecond.innerHTML = msec <= 9 ? "0"+msec : msec  ;
     if(msec >= 99){
        sec++
        second.innerHTML = sec <= 9 ? "0"+sec : sec ;
        msec = 00
     }
     else if(sec >= 60){
       min++
       minute.innerHTML = min <= 9 ? "0"+min : min ;
       sec = 00 ;
     }
     else if(min >= 60 ){
       hr++
       hour.innerHTML = hr <= 9 ? "0"+hr : hr ;
       min = 00 ;
     }
}

function start(){
    interval = setInterval(timer , 10)

    var st = document.getElementById("st");
    st.style.visibility = "hidden" ;
}

function stop(){
    clearInterval(interval) ;
    
    var st = document.getElementById("st");
    st.style.visibility = "visible" ;
}


function restart(){
    hr = "00" ;
    min = "00" ;
    sec = "00" ;
    msec = "00" ;

    hour.innerHTML = hr ;
    minute.innerHTML = min ;
    second.innerHTML = sec;
    millisecond.innerHTML = msec ;

    stop() ;

    var st = document.getElementById("st");
    st.style.visibility = "visible" ;
}