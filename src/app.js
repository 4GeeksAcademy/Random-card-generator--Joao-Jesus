/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = generateRandomCard() {
  //write your code here
  let cardNum = [1,2,3,4,5,6,7,8,9,10,11,12];
  let number = document.getElementById('number');
  number.addEventListener('click', function()   {
    let randomNum = cardNum.Math.trunc((Math.random() * 12) +1);
     if(randomNum === 1) {
      number.innerHTML('A');
      } else if ( randomNum === 12 ) {
        number.innerHTML('K');
      } else if ( randomNum === 11 ) {
        number.innerHTML('Q');
      } else if (randomNum === 10) {
        number.innerHTML('J');
      } else {
        number === randomNum
      }

      document.getElementById("number").innerHTML = number;
     });
    
    
let cardClub = [spades, diamond, heart, club];
number.addEventListener('click', function()   {
  let randomClub = cardClub.Math.trunc((Math.random() * 4) +1);
   if(randomClub === 1) {
    club.innerHTML('♥');
    } else if ( randomClub === 2 ) {
      club.innerHTML('♣');
    } else if ( randomClub === 3 ) {
      club.innerHTML('♠');
    } else (randomClub === 4) {
      club.innerHTML === '♦';
    } 
    document.getElementById("cardClub").innerHTML = club;
   });
};
  
