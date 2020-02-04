// VIEW OBJECT ////
const view = {
    displayMessage: function(msg) {
        const messageArea = document.getElementById('messageArea');
        messageArea.innerHTML = msg;
    },
    displayHit: function(location) {
        const cell = document.getElementById(location);
        cell.setAtrribute('class', 'hit');
        // this will be converted from to number form before the user guess gets this far - so we can find an individual td id
    },
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute('class', 'miss');
        // these will assign either of the two images based on if a user hits a ship or misses a ship.
    }
}; 

/////////////////////////////////////////// boardsize and monster values

const model = {   //change vaules
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipSunk: 0,
// how we are going to generate random ship order on our board
    ships: [
        { locations: [], hits: ['', '', ''] },
        { locations: [], hits: ['', '', ''] },
        { locations: [], hits: ['', '', ''] },
    ],
};
    //////fire
    function fire(guess) {
        for (let i = 0; i < this.numShips; i++) {    // maybe Const not let change
            const ship = this.ships[i];  // ships array
            const index = ship.locations.indexOf(guess);

        // checking if monster location has been hit.
            if (ship.hits[index] === 'hit') {
                view.displayMessage('Oops, you already hit that location');
                return true;
            } else if (index >= 0) {
                ship.hits[index] = 'hit';
                view.displayHit(guess);
                view.displayMessage('HIT!');

                if (this.isSunk(ship)) {
                    view.displayMessage('You hit the Monster!');
                    this.shipsSunk++;
                }
                return true;    
            }
        };
        // focused on, so the user doesn't need to click it every time they want to make a guess. DISPLAY MESSAGE EVERYTIME YOU MISS, DONT NEED
        ///////////  WILL NOT NEED THIS
        //     // $(`#guessInput`).focus();
        // }
        // view.displayMiss(guess);
        // view.displayMessage('You Missed');
        // return false;
    
    
    function isSunk(ship) {  //will change value
        for (var i = 0; i < this.shipLength; i++) { // change name
            if (ship.hits[i] !== 'hit') { // cn
                return false;
            }
        }
        $(`#guessInput`).focus();
        return true;
    }


    // three methods within the model object Each will be set to a function. The first call generateShipLocations, we will use this to define the ships locations,
    //  the second call generateShip these will create the actual ships, and the third call it collision and pass the parameter of locations, we will use this to stop any ships from colliding.
    //                     //////// GENERATSHIPS FUNCTION//////////////////////////
function generateShipsLocations() { // will chgange name
    let locations;   
    for (let i = 0; i < this.numShips; i++) {
        do {
            locations = this.generateShip(); // cn
        } while (this.collision(locations));
        this.ships[i].locations = locations;  // cn
    }
}

function generateShip() { // cn
    let direction = Math.floor(Math.random() * 2);
    let row, col;
    const newShipLocations = []; // cn

    // this is true lets set this to make a ship horizontal, start by calling the row, and set it equal to the functionMath.floor(), have it run Math.random() * this.boardSize, to give us a number between 0 & 6 - because same ammount of rows on board.

                                ////////HORIZONTAL////////////////
    if (direction === 1) { 
        row = Math.floor(Math.random() * this.boardSize);
        col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));

                     ////////////////   VERTICAL //////////////////
    } else {
        row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
        col = Math.floor(Math.random() * this.boardSize);
    }
    
        // for loop to check if the index is less than this.shipLength. Inside we need another if else statement, again to check it the direction is exactly equal to 1. If it is use the push() function to push the row + "" + (col + i) to the newShipLocations variable. Otherwise push() the (row + i) + "" + col). And return newShipLocations, so it stores in the array to be placed

    for (let i = 0; i < this.shipLength; i++) {
        if (direction === 1) {
            newShipLocations.push(row + '' + (col + i));
        } else {
            newShipLocations.push((row + i) + '' + col);
        }
    }
    return newShipLocations;
}

// Stopping a Collision! see if the i is less than this.numShips. call it ship have it equal to the index of this.ships.  second loop inside the for loop we just made, have it check to see if a j variable is less than locations.length. Inside this loop, create a if statement is see if ship.locations.indexOf(locations[j]) is greater than or equal to 0, if so return this true. Outside the for loop we need to return this false so we know there have been no collisions.

function collision(locations) {
    for (let i = 0; i < this.numShips; i++) {
        const ship = this.ships[i];

        for (let j = 0; j < locations.length; j++) {
            if (ship.locations.indexOf(locations[j]) >= 0) {
                return true;
            }
        }
    }
    return false;
}

// we can track how many guesses the user takes to beat the game
// we need to check if the hit var & model.shipSunk method is equal to model.numShips, if this passes it means all the ships will be sunk, 

const controller = {
    guesses: 0,

    function processGuess(guess) {
        const location = parseGuess(guess);

        if (location) {
            this.guesses++;
            const hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('You sank all of the ships, in ' + this.guesses + 'guesses');
            }
        }
    }
    
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
    
    function handleKeyPress(e) {
        const fireButton = document.getElementById('fireButton');
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
}