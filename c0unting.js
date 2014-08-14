//populate the table with the starting numbers

var negFive = -5;
var negFour = -4;
var negThree = -3;
var negTwo = -2;
var negOne = -1;
var zero = 0;
var posOne = 1;
var posTwo = 2;
var posThree = 3;
var posFour = 4;
var posFive = 5;

document.getElementById("negFive").textContent=negFive.toString();
document.getElementById("negFour").textContent=negFour.toString();
document.getElementById("negThree").textContent=negThree.toString();
document.getElementById("negTwo").textContent=negTwo.toString();
document.getElementById("negOne").textContent=negOne.toString();
document.getElementById("zero").textContent=zero.toString();
document.getElementById("posOne").textContent=posOne.toString();
document.getElementById("posTwo").textContent=posTwo.toString();
document.getElementById("posThree").textContent=posThree.toString();
document.getElementById("posFour").textContent=posFour.toString();
document.getElementById("posFive").textContent=posFive.toString();

//change the numbers with arrows/swipe

$(document).ready(function() {

  $(document).keydown(function(e) {
    switch(e.which) {
        case 39: // right
        
        $("td").animate({right:"+=10%"}, 100);
        
        negFive += 1;
        negFour += 1;
        negThree += 1;
        negTwo += 1;
        negOne += 1;
        zero += 1;
        posOne += 1;
        posTwo += 1;
        posThree += 1;
        posFour += 1;
        posFive += 1;
        
        document.getElementById("negFive").textContent=negFive.toString();
        document.getElementById("negFour").textContent=negFour.toString();
        document.getElementById("negThree").textContent=negThree.toString();
        document.getElementById("negTwo").textContent=negTwo.toString();
        document.getElementById("negOne").textContent=negOne.toString();
        document.getElementById("zero").textContent=zero.toString();
        document.getElementById("posOne").textContent=posOne.toString();
        document.getElementById("posTwo").textContent=posTwo.toString();
        document.getElementById("posThree").textContent=posThree.toString();
        document.getElementById("posFour").textContent=posFour.toString();
        document.getElementById("posFive").textContent=posFive.toString();
        
//        $("td").css("padding-left", "0");
//        $("td").css("padding-right", "0");

        break;

        
        case 37: // left
        
        $("td").animate({left:"+=10%"}, 100);
        
        negFive -= 1;
        negFour -= 1;
        negThree -= 1;
        negTwo -= 1;
        negOne -= 1;
        zero -= 1;
        posOne -= 1;
        posTwo -= 1;
        posThree -= 1;
        posFour -= 1;
        posFive -= 1;
         
        document.getElementById("negFive").textContent=negFive.toString();
        document.getElementById("negFour").textContent=negFour.toString();
        document.getElementById("negThree").textContent=negThree.toString();
        document.getElementById("negTwo").textContent=negTwo.toString();
        document.getElementById("negOne").textContent=negOne.toString();
        document.getElementById("zero").textContent=zero.toString();
        document.getElementById("posOne").textContent=posOne.toString();
        document.getElementById("posTwo").textContent=posTwo.toString();
        document.getElementById("posThree").textContent=posThree.toString();
        document.getElementById("posFour").textContent=posFour.toString();
        document.getElementById("posFive").textContent=posFive.toString();
        
//        $("td").css("padding-right", "0");
//        $("td").css("padding-left", "0");
        
        break;
      }
     e.preventDefault(); // prevent the default action (scroll / move caret)
  });







//  $("div").click(function() {
//   $(this).css("background-color", "#FAFBFC");
//  });





});
