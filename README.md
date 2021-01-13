# Lab: Guess a Number

# Outcome
    1) I want to make an app that gives a user 4 attempts to guess a number between 1 and 20 (inclusively)
    2) after each attempt, compare their attempt with actual number and inform them if their guess was: correct, low, high, or used all guesses.
        - if they guess correctly or they run out of guesses inform them if the won/lost and disable further guessing
    
    ## HTML
    1) attempt container , submit button, hint container , reset button

    ## Functionality
    
    1) Get DOM elements
        - get users number and store in variable
        - get submit button and store in variable
        - get hint container and store in variable
        - get reset button and store in variable
    
    2) Initialize number variables
        - why? attempts will track the number of attempts of our current session, correct number will be compared with 
        the user guess and when the reset button is clicked we will initialize that number to a new rand number.
            - initialize user attempts to 4
            - initialize correct number to a random number 1 - 20
    
    3) Guessing Event listener
        - call addEventListener on submit button variable
        - when submit is clicked, evaluate user number variable with the correct number
            - create an if statement that does this
                - if user number < correct number then insert 'too low' in hint container
                - else if user number > correct number then insert 'too high' in hint container
                - else if user number === correct number then insert 'you won' in hint container and disable further guessing
                - else insert 'you lost' and disable further guessing

    4) Reset Event Listener
        - when clicking reset button start a new session
            - why? we need to enable guessing button, new rand number, change user attempts, reset hint container
        
        - initialize user attempt back to 4
        - set correct answer to new rand number
        - re-enable number input button
        - reset hint container to a default string

