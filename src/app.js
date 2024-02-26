/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function generateRandomCard() {
  /// Arrays of numcards
  let cardNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  /// function o random number
  addEventListener("refresh", function() {
    let randomNum = cardNum.Math.floor(Math.random() * 12 + 1);
    let number = document.getElementById("cardNumber");
    if (randomNum === 1) {
      number.innerHTML("A");
    } else if (randomNum === 12) {
      number = "K";
    } else if (randomNum === 11) {
      number = "Q";
    } else if (randomNum === 10) {
      number = "J";
    } else {
      number === randomNum;
    }
    number.innerHTML = "number";
  });

  /// array of clubcard
  let arrClub = ["spades", "diamond", "heart", "club"];

  /// function random clubcards
  addEventListener("refresh", function() {
    let randomClub = arrClub.Math.floor(Math.random() * 4 + 1);
    if (randomClub === 1) {
      club = "♥";
    } else if (randomClub === 2) {
      club = "♣";
    } else if (randomClub === 3) {
      club = "♠";
    } else randomClub === 4;
    club = "♦";
  });
  let club = document.getElementById("cardClub");
  club.innerHTML = "";
};
