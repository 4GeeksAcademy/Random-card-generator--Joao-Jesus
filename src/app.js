/* eslint-disable */

import "./style.css";

window.onload = () => {
  document.querySelector(".card").classList.add(generateRandomClub());
  document.querySelector(".card").innerHTML = generateRandomCard();
};
/// function random number
let generateRandomCard = () => {
  /// Arrays of numcards
  let cardNum = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  /// array of clubcard

  let randomNum = Math.floor(Math.random() * cardNum.length);
  return cardNum[randomNum];
};

/// function random clubcards
let generateRandomClub = () => {
  /// array of clubcard
  let arrClub = ["spade", "diamond", "heart", "club"];
  let randomClub = Math.floor(Math.random() * arrClub.length);
  return arrClub[randomClub];
};
