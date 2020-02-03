
// The controller section will keep track of user guesses to display a message that say "It took you x amount of guesses to sink all ships"
const controller = {
    guesses: 0,

    processGuess: function(guess) {
        const location = parseGuess(guess);

        if (location) {
            this.guesses++;
            const hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                VRFieldOfView.displayMessage('You sank all of the ships, in ' + this.guesses + 'guesses');
            }
        }
    }
};

//this section will parse the user's guess and associate that guess with a table cell.
function parseGuess(guess) {
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    if (guess === null || guess.length !== 2) {
        alert('Oops, please enter a letter and number on the board.');
    } else { 
        const firstChar = guess.charAt(0);
        const row = alphabet.indexOf(firstChar);
        const column = guess.charAt(1);
        
        if (isNaN(row) || isNaN(column)) {
            alert("Oops, that isn't on the board.");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Oops, that's off the board");
        } else {
            return row + column;
        }
    }
    return null;
}

function handleFireButton() {
    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.nodeValue.toUpperCase();
    controller.processGuess(guess);
    guessInput.value = '';
}
function handleKeyPress (e) {
    const fireButton = document.getElementById("fireButton");
    e = e || window.event;
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}

window.onload = init;

function init() {
    const fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    const guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}
    

