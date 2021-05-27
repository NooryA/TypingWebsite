// Jqery stuff


$("document").ready(function(){

   
    $("h1:first").css("border","3px solid red");
    $("h1:last").css("border","3px solid gold");
    // can target .class or #id also inside the brackets

    $("#typingHead").on('click',mouseClickedEvent);
    $("#typingHead").on('mouseleave',mouseLeaveEvent);

    function mouseClickedEvent(){
$("#typingHead").html("<h1> Welcome bro </h1>");
$("#typingHead").css("border","5px dotted black");


    }
    function mouseLeaveEvent(){

    $("#typingHead").html("<h1>Where you going bro</h1>");
    }

    $("#show").on("click",function(){

        $("#buttonClick").show();

    });

    $("#hide").on("click",function(){

        $("#buttonClick").hide();
    })

    $("#typingHead").hover(hoverEffect);

    function hoverEffect(){

        $(this).toggleClass("hovering"); // toggles the css class "hovering"
    }


    $("#buttonClick").click(function(){

        $("#paragraph").animate({fontSize: "50px"},3000);

    })

//var inputField = document.getElementById("typingField");
//var inputFieldValue = document.getElementById("typingField").value;
//var separateWords = inputFieldValue.split(" ");

///inputField.addEventListener("keydown",function(e){
//if(e.keyCode === 32){
//document.getElementById("typingForm").reset();

//}

// THIS IS USING NORMAL JAVSCRIPT BELOW iS JQUERY
//})




var words = $("#roughWords").text().split("|");
var counter = 0;
var counter2 = 1;
var check = true;


$("#typingField").keyup(function(e){  // everytime there is a key up perform the function
  
    var allWords ="#"+ counter2 +"-word";
    var extraWord = $("#typingField").val().split(" ");


    if(($("#typingField").val().localeCompare(words[counter])) == 0 ){
   
         $(allWords).removeClass("highlightRed").addClass("highlightGreen");
         counter++;
         counter2++;
         $("#typingField").val("");
         check = true;
    }

    else if ($("#typingField").val() == words[counter].substr(0,$("#typingField").val().length)){

        $(allWords).removeClass("highlightGreen").removeClass("highlightRed").addClass("highlight");
        check = false;


    }

    else if (($("#typingField").val().localeCompare(words[counter])) == -1 && e.keyCode === 32 && $("#typingField").val() != " "){
      
          $(allWords).removeClass("highlightGreen").removeClass("highlight").addClass("highlightRed");
          counter++;
          counter2++;
          check = true;


    } 
     
    else if (($("#typingField").val().localeCompare(words[counter])) == -1 && $("#typingField").val() != " " ){
        
          $(allWords).removeClass("highlightGreen").removeClass("highlight").addClass("highlightRed");
          check = true;
    } 
   
     else if(($("#typingField").val().localeCompare(words[counter])) == 1 && e.keyCode === 32){

        if(extraWord.length == 2 && (extraWord[0] + " ") == (words[counter]) ){
 
                $(allWords).removeClass("highlightRed").addClass("highlightGreen");
                check = false;
                counter++;
                counter2++;
                $("#typingField").val(extraWord[1]);
       
            }

        else {
                $(allWords).removeClass("highlightGreen").removeClass("highlight").addClass("highlightRed");
                counter++;
                counter2++;
                check = true;
         
            }  
      
    } 
    else if ($("#typingField").val() != " ")  {

        $(allWords).removeClass("highlightGreen").removeClass("highlight").addClass("highlightRed");
        check = true;
     }
    
 });
 
 
 $("#typingField").keyup(function(e){
     
    if(e.keyCode === 32 && check == true){
        $("#typingField").val("");
    }
    
    
    
    
    
    });

    function nextRow(){


        
    }




});




















var text;
function preload() {



}
function setup() {
}

preload();
setup();


var form = document.getElementById("typingForm");

form.addEventListener('submit', function(){

alert("we clicked the reset");



});


















var Name = "Noor";
var age = 11;

var message = "Hola! My name is " + Name + " and I am " + age + " years old";

console.log(message);


var students = ["Jack","Jill","Jemo","jerricho"];

var present = [];
present.push(students[1]);

var index = students.indexOf("Jemo"); // finds the index of Jemo, if it doesnt exist, reutrns -1
students.splice(3,2);

console.log(index);
console.log(present);
console.log(students);

function area(length,width){
return length * width;

}

var area1 = area(5,10);
console.log(area1);

var printCustomerName = function(first,last){
return first + " "+ last;


}

var customerNames = [];

customerNames.push(printCustomerName("Noor","Apsar"));
customerNames.push(printCustomerName("Jeez","Apsar"));
customerNames.push(printCustomerName("Haha","Apsar"));

console.log(customerNames);





function dropDown(){
    var x = document.getElementById("NavDrop");
    if(x.className === "topNAV"){
        x.className += " responsive";
        /* change topNAV to topNAV.responsive to use in the css style sheet*/
    }
    else if(x.className === "topNAV responsive") {
    x.className = "topNAV";
    
    }
    
    
    
}


//Using objects now

var studentInClassroom = {
 firstName: "Noory",
 lastName: "Apsari",
 age: 27,
 greeting: function(){
return "Hello " + this.firstName + " " + this.lastName + ". You are " + this.age + " years old";


 }

};

console.log(studentInClassroom.greeting());

/// now to make an object in another way

var student1 = new Object();
student1.firstName = "johnny";
student1.lastName = "helly";
student1.age = 28;

console.log(student1.firstName);

// now to use the constructor method to create an object (constructs an object every time)

function constructStudents(FirstName,LastName,age){
this.firstName = FirstName;
this.lastName = LastName;
this.age = age;
this.greeting = function(){

    return "Hello there " + this.firstName + " " + this.lastName + ". You are " + age + " years old today";
}

}

var s1 = new constructStudents("Farzan","Mahmood",21);
var s2 = new constructStudents("Alisha","Rekr",23);
var s3 = new constructStudents("Althy","Nowhere",29);

var constructionOfStudents = [];
constructionOfStudents.push(s1);
constructionOfStudents.push(s2);
constructionOfStudents.push(s3);

for(var i = 0; i < constructionOfStudents.length;i++){
var student = constructionOfStudents[i];
console.log(student.greeting());

}

// now to print out the actual elements in the object , we can do this
var specificStudent = constructionOfStudents[0];
for(var key in specificStudent){ // printing out all the keys in the object
console.log(specificStudent[key]); // the reason why we can use the [] because we can do specificStudent["firstName"] to grab the value

}

