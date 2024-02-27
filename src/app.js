/* eslint-disable */

import "./style.css";

// Wait for the window to load before executing the code
window.onload = () => {
  const constantGenerate = () => {
    setTimeout(() => {
      const cardElement = document.querySelector(".card");
      cardElement.classList.remove("spade", "diamond", "heart", "club");
      cardElement.classList.add(generateRandomClub());
      cardElement.innerHTML = generateRandomCard();
    });
  };
  setInterval(constantGenerate, 10000);

  // Select the card element and add a random club class
  const cardElement = document.querySelector(".card");
  cardElement.classList.add(generateRandomClub());

  // Set the inner HTML of the card element to a random card
  cardElement.innerHTML = generateRandomCard();

  // Get the button element and add an event listener to generate a new card on click
  const generateBtn = document.querySelector(".cardBtn");
  generateBtn.addEventListener("click", newGenerateCard);

  const sizeHeightInput = document.querySelector(".card-height-input");
  const sizeWidthInput = document.querySelector(".card-width-input");

  const DEFAULT_CARD_HEIGHT = 300;
  const DEFAULT_WIDTH_HEIGHT = 150;

  sizeHeightInput.addEventListener("change", function(event) {
    const currentNumber = event.target.value;

    if (currentNumber && currentNumber != "") {
      cardElement.style.height = `${currentNumber}px`;
    } else {
      cardElement.style.height = `${DEFAULT_CARD_HEIGHT}px`;
    }
  });

  sizeWidthInput.addEventListener("change", function(event) {
    const currentNumber = event.target.value;

    if (currentNumber && currentNumber != "") {
      cardElement.style.width = `${currentNumber}px`;
    } else {
      cardElement.style.width = `${DEFAULT_WIDTH_HEIGHT}px`;
    }
  });
};

// Function to generate a new card on button click
let newGenerateCard = event => {
  event.preventDefault();
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
  let randomClubIndex = Math.floor(Math.random() * arrClub.length);

  // Return the randomly selected club class

  if (arrClub[randomClubIndex]) {
    const cardElement = document.querySelector(".card");

    if (
      arrClub[randomClubIndex] === "spade" ||
      arrClub[randomClubIndex] === "club"
    ) {
      cardElement.style.color = "black";
    } else {
      cardElement.style.color = "red";
    }
  }
  return arrClub[randomClubIndex];
};
