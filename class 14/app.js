

// Object 

// var obj = {
//     name : "Ali" ,
//     age : 15 ,
//     class : "5th"
// }

// console.log(obj);

// console.log( obj.name );

// var students = [
//     {
//         name : "Ali",
//         age : 15
//     } ,
//     {
//         name : "Ahmed" ,
//         age : 18
//     }
// ]


// console.log( students[1].name );


var quizQuestions = [
    {
        question : "What is the capital  city of Pakistan" ,
        options : ["Karachi" , "Lahore" , "Islamabad" ,"Multan"] ,
        answer : "Islamabad"
    } ,
    {
        question : "National animal of Pakistan" ,
        options : ["Lion" , "Tiger" , "Markhor" ,"Deer"] ,
        answer : "Markhor"
    } 
    ,
    {
        question : "Who is the founder of pakistan" ,
        options : ["Quaid-e-Azam" , "Sir Syed" , "liaqat ali khan" ,"Allama Iqbal"] ,
        answer : "Quaid-e-Azam"
    }
    
]


function showQues(e){
    var ques = document.getElementById("ques");
    ques.innerHTML = 'Q'+ +(e+1) + ") " + quizQuestions[e].question;

    var options = document.getElementsByClassName("option") ;

    for(var i = 0 ; i < options.length ; i++){
        options[i].innerHTML = quizQuestions[e].options[i] 
    }

}

var count = 0 ;
var score = 0 ;


function next(){

    var radio = document.getElementsByClassName("radiobtn") ;
 
    result()

  if( count < quizQuestions.length -1){

  for(var i = 0 ; i < radio.length ; i ++){
    if(radio[i].checked == true){
        count++
        showQues(count)
        radio[i].checked = false ;
    }
  }
  }
  else{
    alert("SCORE : " + score)
  }

}


function result(){
    var radio = document.getElementsByClassName("radiobtn") ;

    var options = document.getElementsByClassName("option") ;

    for(var i = 0 ; i < radio.length ; i++){
     
        if(radio[i].checked == true){
            if(options[i].innerHTML  == quizQuestions[count].answer){
                score++
            }
        }
    }

}