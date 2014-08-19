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
        
        case 37: // left
        
//        $("td").animate({paddingLeft:"+=10%"}, 100);
        
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
        
        
        if (Math.abs(zero) % 10 > 0) {
          $("#oneOne").css("background-color", "#FF4C00");
        } else {
          $("#oneOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 1) {
          $("#twoOne").css("background-color", "#FF4C00");
        } else {
          $("#twoOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 2) {
          $("#threeOne").css("background-color", "#FF4C00");
        } else {
          $("#threeOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 3) {
          $("#fourOne").css("background-color", "#FF4C00");
        } else {
          $("#fourOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 4) {
          $("#fiveOne").css("background-color", "#FF4C00");
        } else {
          $("#fiveOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 5) {
          $("#sixOne").css("background-color", "#FF4C00");
        } else {
          $("#sixOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 6) {
          $("#sevenOne").css("background-color", "#FF4C00");
        } else {
          $("#sevenOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 7) {
          $("#eightOne").css("background-color", "#FF4C00");
        } else {
          $("#eightOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 8) {
          $("#nineOne").css("background-color", "#FF4C00");
        } else {
          $("#nineOne").css("background-color", "#FAFBFC");
        }


        if (Math.abs(zero) % 100 > 9) {
          $("#oneTen").css("background-color", "#FF4C00");
        } else {
          $("#oneTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 19) {
          $("#twoTen").css("background-color", "#FF4C00");
        } else {
          $("#twoTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 29) {
          $("#threeTen").css("background-color", "#FF4C00");
        } else {
          $("#threeTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 39) {
          $("#fourTen").css("background-color", "#FF4C00");
        } else {
          $("#fourTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 49) {
          $("#fiveTen").css("background-color", "#FF4C00");
        } else {
          $("#fiveTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 59) {
          $("#sixTen").css("background-color", "#FF4C00");
        } else {
          $("#sixTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 69) {
          $("#sevenTen").css("background-color", "#FF4C00");
        } else {
          $("#sevenTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 79) {
          $("#eightTen").css("background-color", "#FF4C00");
        } else {
          $("#eightTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 89) {
          $("#nineTen").css("background-color", "#FF4C00");
        } else {
          $("#nineTen").css("background-color", "#FAFBFC");
        }


        break;
        
        case 39: // right
        
//        $("td").animate({paddingRight:"+=10%"}, 100);
        
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
        
        
        if (Math.abs(zero) % 10 > 0) {
          $("#oneOne").css("background-color", "#FF4C00");
        } else {
          $("#oneOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 1) {
          $("#twoOne").css("background-color", "#FF4C00");
        } else {
          $("#twoOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 2) {
          $("#threeOne").css("background-color", "#FF4C00");
        } else {
          $("#threeOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 3) {
          $("#fourOne").css("background-color", "#FF4C00");
        } else {
          $("#fourOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 4) {
          $("#fiveOne").css("background-color", "#FF4C00");
        } else {
          $("#fiveOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 5) {
          $("#sixOne").css("background-color", "#FF4C00");
        } else {
          $("#sixOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 6) {
          $("#sevenOne").css("background-color", "#FF4C00");
        } else {
          $("#sevenOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 7) {
          $("#eightOne").css("background-color", "#FF4C00");
        } else {
          $("#eightOne").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 10 > 8) {
          $("#nineOne").css("background-color", "#FF4C00");
        } else {
          $("#nineOne").css("background-color", "#FAFBFC");
        }


        if (Math.abs(zero) % 100 > 9) {
          $("#oneTen").css("background-color", "#FF4C00");
        } else {
          $("#oneTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 19) {
          $("#twoTen").css("background-color", "#FF4C00");
        } else {
          $("#twoTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 29) {
          $("#threeTen").css("background-color", "#FF4C00");
        } else {
          $("#threeTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 39) {
          $("#fourTen").css("background-color", "#FF4C00");
        } else {
          $("#fourTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 49) {
          $("#fiveTen").css("background-color", "#FF4C00");
        } else {
          $("#fiveTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 59) {
          $("#sixTen").css("background-color", "#FF4C00");
        } else {
          $("#sixTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 69) {
          $("#sevenTen").css("background-color", "#FF4C00");
        } else {
          $("#sevenTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 79) {
          $("#eightTen").css("background-color", "#FF4C00");
        } else {
          $("#eightTen").css("background-color", "#FAFBFC");
        }
        if (Math.abs(zero) % 100 > 89) {
          $("#nineTen").css("background-color", "#FF4C00");
        } else {
          $("#nineTen").css("background-color", "#FAFBFC");
        }




        break;


      }

     e.preventDefault(); // prevent the default action (scroll / move caret)
  });

        




});
