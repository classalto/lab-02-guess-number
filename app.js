// import functions and grab DOM elements
const submitButton = document.getElementById('click-submit');
const resetButton = document.getElementById('reset-button');
const userNumber = document.getElementById('user-guess');
const attemptsDisplay = document.getElementById('attempts');
const notifyDisplay = document.getElementById('notify');

// initialize state
let attemptsLeft = 4;
let correctNumber = Math.ceil(Math.random() * 20);

attemptsDisplay.textContent = `${attemptsLeft} attempts left!`;

// set event listeners to update state and DOM

submitButton.addEventListener('click', () => {
    const userNumberify = userNumber.value;

    if (userNumberify < correctNumber) {
        notifyDisplay.textContent = 'Too Low!';
        attemptsLeft--;
        attemptsDisplay.textContent = `${attemptsLeft} attempts left!`;
    } else if (userNumberify > correctNumber) {
        notifyDisplay.textContent = 'Too High!';
        attemptsLeft--;
        attemptsDisplay.textContent = `${attemptsLeft} attempts left!`;
    } else {
        notifyDisplay.textContent = `You Guessed the Number!!!`;
        submitButton.disable = true;
    }

    if (attemptsLeft === 0) {
        notifyDisplay.textContent = `You ran out of attempts...`;
        submitButton.disabled = true;
    }
});

resetButton.addEventListener('click', () => {
    attemptsLeft = 4;
    attemptsDisplay.textContent = `${attemptsLeft} attempts left!`;
    notifyDisplay.textContent = '';
    submitButton.disabled = false;
    correctNumber = Math.ceil(Math.random() * 20);
});

