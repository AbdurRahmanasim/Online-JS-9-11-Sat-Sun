// alert('Hello World') ;



// Concatenation

// var a = 10 ;
// var b = "5" ;

// console.log( a + b );


// console.log( a - b );
// console.log( a * b );
// console.log( a / b );
// console.log( a % b );



// var a = 5 ;

// console.log( a++ );
// console.log( a );



// var a = 5 ;
       
        //   5   + 6 +   7
// var result = a++ + a + ++a;


//             5   +  7  -   8 + 8 + 8
// var response = a++ + ++a - ++a + a + a++ ;

// console.log(response);





// Prompt
// promt is used to take input from user


// var data = prompt("Enter your Name" , "Enter Name" ) ;

// console.log(data);

// var first = prompt




// Conditions   IF / Else

// if(false){
// console.log("I AM TRUE");
// }
// else{
//     console.log("I AM FALSE");
// }




// if( 60 > 40 ){
//     console.log("I AM TRUE");
//     }
// else{
//         console.log("I AM FALSE");
//     }



// var num1 = 50 ;
// var num2 = 30 ;

// var num3 = 70 ;
// var num4 = 50



// if( num1 == num4 && num2 > num3 ){
//     console.log("I AM TRUE");
//     }
//     else{
//         console.log("I AM FALSE");
//     }









// var x = 5 ;

// if(x <10 ){
//     console.log(x + "is less than 10");
// }
// else if( x < 20 ){
//     console.log(x + "is less than 20");
// }
// else{
//     console.log(x + "is greater than 20");
// }




// var color = prompt("Enter Color") ;

// if(color == "red"){
//     console.log("Must Stop");
// }
// else if(color == "yellow"){
//     console.log("Ready to GO");
// }
// else if( color ==  "green"){
//     console.log("Must Go");
// }
// else{
//     console.log("Invalid Color");
// }








// Calculator


var num1 = +prompt("Enter First Number") ;
var opt = prompt("Enter Operator") ;
var num2 = +prompt("Enter Second Number") ;

if( opt == "+"){
    console.log( num1 + num2 );
}
else if( opt == "-" ){
    console.log(num1 - num2);
}
else if( opt == "*" ){
    console.log( num1 * num2 );
}
else if( opt == "/" ){
    console.log( num1 / num2 );
}
else if( opt == "%" ){
    console.log( num1 % num2 );
}
else{
    console.log("Syntax Error");
}





