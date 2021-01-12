// import functions and grab DOM elements
const submitButton = document.getElementById('click-submit');
const resetButton = document.getElementById('reset-button');
const userNumber = document.getElementById('user-guess');
const attemptsDisplay = document.getElementById('attempts');
const notifyDisplay = document.getElementById('notify');

// initialize state
let attemptsLeft = 4;
let correctNumber = Math.ceil(Math.random() * 20);


// set event listeners to update state and DOM