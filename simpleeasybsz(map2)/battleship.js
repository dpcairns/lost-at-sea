import compareCoord from './compareCoord.js';

// set grid rows and columns and the size of each square
const rows = 10;
const cols = 10;
const squareSize = 50;

// get the container element
const gameBoardContainer = document.getElementById('gameboard');

// make the grid columns and rows
for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
        const square = document.createElement('div');
        gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
        square.id = 's' + j + i;			
		
		// set each grid square's coordinates: multiples of the current row or column number
        const topPosition = j * squareSize;
        const leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
        square.style.top = topPosition + 'px';
        square.style.left = leftPosition + 'px';						
    }
}

/* lazy way of tracking when the game is won: just increment hitCount on every hit
   in this version, and according to the official Hasbro rules (http://www.hasbro.com/common/instruct/BattleShip_(2002).PDF)
   there are 17 hits to be made in order to win the game:
      Carrier     - 5 hits
      Battleship  - 4 hits
      Destroyer   - 3 hits
      Submarine   - 3 hits
      Patrol Boat - 2 hits
*/
const hitCount = 0;

/* create the 2d array that will contain the status of each square on the board
   and place ships on the board (later, create function for random placement!)
   0 = empty, 1 = part of a ship, 2 = a sunken part of a ship, 3 = a missed shot
*/
const gameBoard = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];
let randomLocationX = Math.floor(Math.random() * 9);
console.log(randomLocationX);
let randomLocationY = Math.floor(Math.random() * 9);
const randomLocation3 = Math.floor(Math.random() * 9);
const randomLocation4 = Math.floor(Math.random() * 9);
const randomLocation5 = Math.floor(Math.random() * 9);
const randomLocation6 = Math.floor(Math.random() * 9);const randomLocation7 = Math.floor(Math.random() * 9);const randomLocation8 = Math.floor(Math.random() * 9);const randomLocation9 = Math.floor(Math.random() * 9);const randomLocation10 = Math.floor(Math.random() * 9);


// if (randomLocation3, randomLocation4 === randomLocation5, randomLocation6 || randomLocation3, randomLocation4 === randomLocation6, randomLocation7 || randomLocation3, randomLocation4 === randomLocation9, randomLocation10 || randomLocation3, randomLocation4 === randomLocationX, randomLocationY)Math.floor(Math.random() * 3);


for (let i = 0; i < gameBoard.length; i++);
gameBoard[randomLocationY][randomLocationX] = 1;
gameBoard[randomLocationY][randomLocationX + 1 ] = 1;
gameBoard[randomLocationY][randomLocationX + 2 ] = 1;
gameBoard[randomLocation3][randomLocation4] = 2;
gameBoard[randomLocation3][randomLocation4 + 1] = 2;
gameBoard[randomLocation3][randomLocation4 + 2] = 2;
gameBoard[randomLocation5][randomLocation6] = 3;
gameBoard[randomLocation5][randomLocation6 + 1] = 3;
gameBoard[randomLocation7][randomLocation8] = 4;
gameBoard[randomLocation9][randomLocation10] = 5;
console.log(JSON.stringify(gameBoard));
// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener('click', fireTorpedo, false);

// initial code via http://www.kirupa.com/html5/handling_events_for_many_elements.htm:
function fireTorpedo(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
    
    if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
        const row = e.target.id.substring(1, 2);
        const col = e.target.id.substring(2, 3);
        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no ship, change the color and change square's value
        if (gameBoard[row][col] === 0) {
            e.target.style.background = '#bbb';
			// set this square's value to 3 to indicate that they fired and missed
            gameBoard[row][col] = 3;
			
		// if player clicks a square with a ship, change the color and change square's value
        } else if (gameBoard[row][col] === 1 ||
            gameBoard[row][col] === 2) {
            e.target.style.background = 'red';
			// set this square's value to 2 to indicate the ship has been hit
            gameBoard[row][col] = 2;
			
			// increment hitCount each time a ship is hit
            hitCount++;
			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
            if (hitCount === 17) {
                alert('All enemy battleships have been defeated! You win!');
            }
			
		// if player clicks a square that's been previously hit, let them know
        } else if (gameBoard[row][col] > 1) {
            alert('Stop wasting your torpedos! You already fired at this location.');
        }		
    }
    e.stopPropagation();
}