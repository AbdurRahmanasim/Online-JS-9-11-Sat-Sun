// console.log("log");



// Function 

// A function is used to do the same thing again again 


// function print(){
//     var a = 5 ;
//     var b = 10 ;
//     console.log(a+b);
// }


// print();

// console.log("hello world");

// print();

// console.log("javascript");

// print();





// Functions with parameters and arguments

// if we want to do the same work bt with different values we use parameter 


// function sum( num1 , num2 ){
//     console.log(num1 + num2);
// }


// sum( 40 , 10 ) ;

// sum( 30 , 70 ) ;








// function report(name , classes , english , science , maths , totalmarks){

//  console.log("Name : " + name);
//  console.log("Class : " + classes);
//  console.log("English : " + english);
//  console.log("Science : " + science);
//  console.log("Maths : " + maths);
//  console.log("Total Marks : " + totalmarks);
//  var obt = english + science + maths ;
//  console.log("Obtained Marks : " + obt);
//  var per = obt / totalmarks * 100 ;
//  console.log("Percentage : " + per + "%");
// if( per >= 80 && per <= 100 ){
//     console.log("Grade : A+");
// }
// else if(per >= 70 && per < 80 ){
//     console.log("Grade : A");
// }
// else if(per >= 60 && per < 70 ){
//     console.log("Grade : B");
// }
// else if(per >= 50 && per < 60 ){
//     console.log("Grade : C");
// }
// else{
//     console.log("Grade : Fail");
// }
// }
// report("Ali" , "8th" , 50 , 86 , 73 , 300) ;
// report("Ahmed" , "6th" , 80 , 96 , 93 , 300) ;






// return keyword in function 


// function takevale(){
//     var a = 5 ;
//     var b = 10 ;
//     return a + b
// }


// console.log( takevale() );



// parameters with default values 


// function intro( fname = "Muzammil" , lname = "Ali Siddiqui" ){
//     return (fname +" "+ lname)
// }


// var func = intro("Ali" , "Ahmed")

// console.log( func );




// Switch Case 


var color = "blue" ;

switch(color) {

    case "red" :
        alert("Must Stop")
        break ;
    
    case "yellow" :
        alert("Ready to go")
        break ;
    
    case "green"  :
        alert("Must go")
        break ;


    default :

        alert("Typing Error")



}

















