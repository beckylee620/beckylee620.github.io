//populate the table with the starting numbers

var offColor = "#F9F9F9"
var onColor = ""

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
        
        if (zero < 0) {
          var onColor = "#CEE08C";
        } else {
          var onColor = "#1A5A63";
        }
        
        
        if (Math.abs(zero) % 10 > 0) {
          $("#oneOne").css("background-color", onColor);
        } else {
          $("#oneOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 1) {
          $("#twoOne").css("background-color", onColor);
        } else {
          $("#twoOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 2) {
          $("#threeOne").css("background-color", onColor);
        } else {
          $("#threeOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 3) {
          $("#fourOne").css("background-color", onColor);
        } else {
          $("#fourOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 4) {
          $("#fiveOne").css("background-color", onColor);
        } else {
          $("#fiveOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 5) {
          $("#sixOne").css("background-color", onColor);
        } else {
          $("#sixOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 6) {
          $("#sevenOne").css("background-color", onColor);
        } else {
          $("#sevenOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 7) {
          $("#eightOne").css("background-color", onColor);
        } else {
          $("#eightOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 8) {
          $("#nineOne").css("background-color", onColor);
        } else {
          $("#nineOne").css("background-color", offColor);
        }


        if (Math.abs(zero) % 100 > 9) {
          $("#oneTen").css("background-color", onColor);
        } else {
          $("#oneTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 19) {
          $("#twoTen").css("background-color", onColor);
        } else {
          $("#twoTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 29) {
          $("#threeTen").css("background-color", onColor);
        } else {
          $("#threeTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 39) {
          $("#fourTen").css("background-color", onColor);
        } else {
          $("#fourTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 49) {
          $("#fiveTen").css("background-color", onColor);
        } else {
          $("#fiveTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 59) {
          $("#sixTen").css("background-color", onColor);
        } else {
          $("#sixTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 69) {
          $("#sevenTen").css("background-color", onColor);
        } else {
          $("#sevenTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 79) {
          $("#eightTen").css("background-color", onColor);
        } else {
          $("#eightTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 89) {
          $("#nineTen").css("background-color", onColor);
        } else {
          $("#nineTen").css("background-color", offColor);
        }


        if (Math.abs(zero) % 1000 > 99) {
          $("#oneHun").css("background-color", onColor);
        } else {
          $("#oneHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 199) {
          $("#twoHun").css("background-color", onColor);
        } else {
          $("#twoHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 299) {
          $("#threeHun").css("background-color", onColor);
        } else {
          $("#threeHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 399) {
          $("#fourHun").css("background-color", onColor);
        } else {
          $("#fourHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 499) {
          $("#fiveHun").css("background-color", onColor);
        } else {
          $("#fiveHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 599) {
          $("#sixHun").css("background-color", onColor);
        } else {
          $("#sixHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 699) {
          $("#sevenHun").css("background-color", onColor);
        } else {
          $("#sevenHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 799) {
          $("#eightHun").css("background-color", onColor);
        } else {
          $("#eightHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 899) {
          $("#nineHun").css("background-color", onColor);
        } else {
          $("#nineHun").css("background-color", offColor);
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
        
        
        if (zero < 0) {
          var onColor = "#CEE08C";
        } else {
          var onColor = "#1A5A63";
        }
        
        
        if (Math.abs(zero) % 10 > 0) {
          $("#oneOne").css("background-color", onColor);
        } else {
          $("#oneOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 1) {
          $("#twoOne").css("background-color", onColor);
        } else {
          $("#twoOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 2) {
          $("#threeOne").css("background-color", onColor);
        } else {
          $("#threeOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 3) {
          $("#fourOne").css("background-color", onColor);
        } else {
          $("#fourOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 4) {
          $("#fiveOne").css("background-color", onColor);
        } else {
          $("#fiveOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 5) {
          $("#sixOne").css("background-color", onColor);
        } else {
          $("#sixOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 6) {
          $("#sevenOne").css("background-color", onColor);
        } else {
          $("#sevenOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 7) {
          $("#eightOne").css("background-color", onColor);
        } else {
          $("#eightOne").css("background-color", offColor);
        }
        if (Math.abs(zero) % 10 > 8) {
          $("#nineOne").css("background-color", onColor);
        } else {
          $("#nineOne").css("background-color", offColor);
        }


        if (Math.abs(zero) % 100 > 9) {
          $("#oneTen").css("background-color", onColor);
        } else {
          $("#oneTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 19) {
          $("#twoTen").css("background-color", onColor);
        } else {
          $("#twoTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 29) {
          $("#threeTen").css("background-color", onColor);
        } else {
          $("#threeTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 39) {
          $("#fourTen").css("background-color", onColor);
        } else {
          $("#fourTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 49) {
          $("#fiveTen").css("background-color", onColor);
        } else {
          $("#fiveTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 59) {
          $("#sixTen").css("background-color", onColor);
        } else {
          $("#sixTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 69) {
          $("#sevenTen").css("background-color", onColor);
        } else {
          $("#sevenTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 79) {
          $("#eightTen").css("background-color", onColor);
        } else {
          $("#eightTen").css("background-color", offColor);
        }
        if (Math.abs(zero) % 100 > 89) {
          $("#nineTen").css("background-color", onColor);
        } else {
          $("#nineTen").css("background-color", offColor);
        }


        if (Math.abs(zero) % 1000 > 99) {
          $("#oneHun").css("background-color", onColor);
        } else {
          $("#oneHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 199) {
          $("#twoHun").css("background-color", onColor);
        } else {
          $("#twoHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 299) {
          $("#threeHun").css("background-color", onColor);
        } else {
          $("#threeHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 399) {
          $("#fourHun").css("background-color", onColor);
        } else {
          $("#fourHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 499) {
          $("#fiveHun").css("background-color", onColor);
        } else {
          $("#fiveHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 599) {
          $("#sixHun").css("background-color", onColor);
        } else {
          $("#sixHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 699) {
          $("#sevenHun").css("background-color", onColor);
        } else {
          $("#sevenHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 799) {
          $("#eightHun").css("background-color", onColor);
        } else {
          $("#eightHun").css("background-color", offColor);
        }
        if (Math.abs(zero) % 1000 > 899) {
          $("#nineHun").css("background-color", onColor);
        } else {
          $("#nineHun").css("background-color", offColor);
        }



        break;


      }

     e.preventDefault(); // prevent the default action (scroll / move caret)
  });


$(function(){
    
    var stage = document.getElementById("stage");
    
    Hammer(stage).on("swipeleft", function() {

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
        
        
      if (zero < 0) {
        var onColor = "#CEE08C";
        } else {
        var onColor = "#1A5A63";
      }
        
        
      if (Math.abs(zero) % 10 > 0) {
        $("#oneOne").css("background-color", onColor);
        } else {
        $("#oneOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 1) {
        $("#twoOne").css("background-color", onColor);
        } else {
        $("#twoOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 2) {
        $("#threeOne").css("background-color", onColor);
        } else {
        $("#threeOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 3) {
        $("#fourOne").css("background-color", onColor);
        } else {
        $("#fourOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 4) {
        $("#fiveOne").css("background-color", onColor);
        } else {
        $("#fiveOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 5) {
        $("#sixOne").css("background-color", onColor);
        } else {
        $("#sixOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 6) {
        $("#sevenOne").css("background-color", onColor);
        } else {
        $("#sevenOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 7) {
        $("#eightOne").css("background-color", onColor);
        } else {
        $("#eightOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 8) {
        $("#nineOne").css("background-color", onColor);
        } else {
        $("#nineOne").css("background-color", offColor);
      }
      

      if (Math.abs(zero) % 100 > 9) {
        $("#oneTen").css("background-color", onColor);
      } else {
        $("#oneTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 19) {
        $("#twoTen").css("background-color", onColor);
      } else {
        $("#twoTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 29) {
        $("#threeTen").css("background-color", onColor);
      } else {
        $("#threeTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 39) {
        $("#fourTen").css("background-color", onColor);
      } else {
        $("#fourTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 49) {
        $("#fiveTen").css("background-color", onColor);
      } else {
        $("#fiveTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 59) {
        $("#sixTen").css("background-color", onColor);
      } else {
        $("#sixTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 69) {
        $("#sevenTen").css("background-color", onColor);
      } else {
        $("#sevenTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 79) {
        $("#eightTen").css("background-color", onColor);
      } else {
        $("#eightTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 89) {
        $("#nineTen").css("background-color", onColor);
      } else {
        $("#nineTen").css("background-color", offColor);
      }
      

      if (Math.abs(zero) % 1000 > 99) {
        $("#oneHun").css("background-color", onColor);
      } else {
        $("#oneHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 199) {
        $("#twoHun").css("background-color", onColor);
      } else {
        $("#twoHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 299) {
        $("#threeHun").css("background-color", onColor);
      } else {
        $("#threeHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 399) {
        $("#fourHun").css("background-color", onColor);
      } else {
        $("#fourHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 499) {
        $("#fiveHun").css("background-color", onColor);
      } else {
        $("#fiveHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 599) {
        $("#sixHun").css("background-color", onColor);
      } else {
        $("#sixHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 699) {
        $("#sevenHun").css("background-color", onColor);
      } else {
        $("#sevenHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 799) {
        $("#eightHun").css("background-color", onColor);
      } else {
        $("#eightHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 899) {
        $("#nineHun").css("background-color", onColor);
      } else {
        $("#nineHun").css("background-color", offColor);
      }
      

    });
    
    Hammer(stage).on("swiperight", function() {
      
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
      
      if (zero < 0) {
        var onColor = "#CEE08C";
      } else {
        var onColor = "#1A5A63";
      }
        
        
      if (Math.abs(zero) % 10 > 0) {
        $("#oneOne").css("background-color", onColor);
      } else {
        $("#oneOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 1) {
        $("#twoOne").css("background-color", onColor);
      } else {
        $("#twoOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 2) {
        $("#threeOne").css("background-color", onColor);
      } else {
        $("#threeOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 3) {
        $("#fourOne").css("background-color", onColor);
      } else {
        $("#fourOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 4) {
        $("#fiveOne").css("background-color", onColor);
      } else {
        $("#fiveOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 5) {
        $("#sixOne").css("background-color", onColor);
      } else {
        $("#sixOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 6) {
        $("#sevenOne").css("background-color", onColor);
      } else {
        $("#sevenOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 7) {
        $("#eightOne").css("background-color", onColor);
      } else {
        $("#eightOne").css("background-color", offColor);
      }
      if (Math.abs(zero) % 10 > 8) {
        $("#nineOne").css("background-color", onColor);
      } else {
        $("#nineOne").css("background-color", offColor);
      }


      if (Math.abs(zero) % 100 > 9) {
        $("#oneTen").css("background-color", onColor);
      } else {
        $("#oneTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 19) {
        $("#twoTen").css("background-color", onColor);
      } else {
        $("#twoTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 29) {
        $("#threeTen").css("background-color", onColor);
      } else {
        $("#threeTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 39) {
        $("#fourTen").css("background-color", onColor);
      } else {
        $("#fourTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 49) {
        $("#fiveTen").css("background-color", onColor);
      } else {
        $("#fiveTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 59) {
        $("#sixTen").css("background-color", onColor);
      } else {
        $("#sixTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 69) {
        $("#sevenTen").css("background-color", onColor);
      } else {
        $("#sevenTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 79) {
        $("#eightTen").css("background-color", onColor);
      } else {
        $("#eightTen").css("background-color", offColor);
      }
      if (Math.abs(zero) % 100 > 89) {
        $("#nineTen").css("background-color", onColor);
      } else {
        $("#nineTen").css("background-color", offColor);
      }
      

      if (Math.abs(zero) % 1000 > 99) {
        $("#oneHun").css("background-color", onColor);
      } else {
        $("#oneHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 199) {
        $("#twoHun").css("background-color", onColor);
      } else {
        $("#twoHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 299) {
        $("#threeHun").css("background-color", onColor);
      } else {
        $("#threeHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 399) {
        $("#fourHun").css("background-color", onColor);
      } else {
        $("#fourHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 499) {
        $("#fiveHun").css("background-color", onColor);
      } else {
        $("#fiveHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 599) {
        $("#sixHun").css("background-color", onColor);
      } else {
        $("#sixHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 699) {
        $("#sevenHun").css("background-color", onColor);
      } else {
        $("#sevenHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 799) {
        $("#eightHun").css("background-color", onColor);
      } else {
        $("#eightHun").css("background-color", offColor);
      }
      if (Math.abs(zero) % 1000 > 899) {
        $("#nineHun").css("background-color", onColor);
      } else {
        $("#nineHun").css("background-color", offColor);
      }


    });
    
    
})



});
