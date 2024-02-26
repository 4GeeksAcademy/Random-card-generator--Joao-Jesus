/* eslint-disable */

import "./style.css";

// Wait for the window to load before executing the code
window.onload = () => {
  setTimeout(() => {
    const cardElement = document.querySelector(".card");
    cardElement.classList.remove("spade", "diamond", "heart", "club");
    cardElement.classList.add(generateRandomClub());
    cardElement.innerHTML = generateRandomCard();
  }, 1000 * 1);
  // Select the card element and add a random club class
  const cardElement = document.querySelector(".card");
  cardElement.classList.add(generateRandomClub());

  // Set the inner HTML of the card element to a random card
  cardElement.innerHTML = generateRandomCard();

  // Get the button element and add an event listener to generate a new card on click
  const generateBtn = document.querySelector(".cardBtn");
  generateBtn.addEventListener("click", newGenerateCard);
};

// Function to generate a new card on button click
let newGenerateCard = () => {
  // Select the card element and update its club class and inner HTML
  const cardElement = document.querySelector(".card");
  cardElement.classList.remove("spade", "diamond", "heart", "club");
  cardElement.classList.add(generateRandomClub());
  cardElement.innerHTML = generateRandomCard();
};

// Function to generate a random card
let generateRandomCard = () => {
  // Array of card numbers
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

  // Get a random index from the cardNum array
  let randomNum = Math.floor(Math.random() * cardNum.length);

  // Return the randomly selected card number
  return cardNum[randomNum];
};

// Function to generate a random club class
let generateRandomClub = () => {
  // Array of club classes
  let arrClub = ["spade", "diamond", "heart", "club"];

  // Get a random index from the arrClub array
  let randomClub = Math.floor(Math.random() * arrClub.length);

  // Return the randomly selected club class
  return arrClub[randomClub];
};
