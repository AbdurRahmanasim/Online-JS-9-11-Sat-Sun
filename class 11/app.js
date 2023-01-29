


// function changeColor(){
//     var head = document.getElementById("head") ;
//     head.style.color = "green"
//     // console.log(head);
// }


// function yellow(){
//     document.body.style.backgroundColor = "yellow" ;
// }

// function green(){
//     document.body.style.backgroundColor = "green" ;
// }

// function pink(){
//     document.body.style.backgroundColor = "pink"
// }











// Calculator 



function showVal(val){
 var screen = document.getElementById("val");

 screen.value += val ;

}


function clearAll(){
    var screen = document.getElementById("val");
    screen.value = ""
}

function del(){
    var screen = document.getElementById("val");
    var copiedVal = screen.value.slice(0,-1)
    screen.value = copiedVal ;
}

function cal(){
    var screen = document.getElementById("val");
    var answer = eval(screen.value) ;
    screen.value = answer ;
}











