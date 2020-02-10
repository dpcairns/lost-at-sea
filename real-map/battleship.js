function saveUser(user) {
    const json = JSON.stringify(user);
    localStorage.setItem('user', json);
}

function addHit() {
    const user = getUser();
    user.hits++;
    saveUser(user);
}

function addClick() {
    const user = getUser();
    user.clicks++;
    saveUser(user);
}

function getUser() {
    const json = localStorage.getItem('user');
    if (!json) return null;
    const user = JSON.parse(json);
    return user;
}

// set grid rows and columns and the size of each square
const rows = 10;
const cols = 10;
const squareSize = 50;

// get the container element
const gameBoardContainer = document.getElementById('gameboard');
const computerGameBoardContainer = document.getElementById('computer-gameboard');

// make the grid columns and rows
const gameBoardBody = makeGrid();
gameBoardContainer.append(gameBoardBody);
const computerBoardBody = makeGrid();
computerGameBoardContainer.append(computerBoardBody);
// for (let k = 0; k < cols; k++) {
//     for (let l = 0; l < rows; l++) {
//         const square2 = document.createElement('div');
//         computerGameBoardContainer.appendChild(square2);

//         square2.id = 'p' + l + k;	

//         const computerTopPosition = l * squareSize;
//         const computerLeftPosition = k * squareSize;		

//         square2.style.top = computerTopPosition + 'px';
//         square2.style.left = computerLeftPosition + 'px';
//     }
// }

let hitCount = 0;
let totalClicks = 0;

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

const computerBoard = [

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

// USER Random Start Locations

// let randomLocation1 = [1, Math.floor(Math.random() * 6)];
// let randomLocation2 = [2, Math.floor(Math.random() * 7)];
// let randomLocation3 = [6, Math.floor(Math.random() * 7)];
// let randomLocation4 = [9, Math.floor(Math.random() * 8)];
// let randomLocation5 = [4, Math.floor(Math.random() * 6)];
//                                                                 // Computer Random Start Locations
// let computerRandomLocation1 = [3, Math.floor(Math.random() * 6)];
// let computerRandomLocation2 = [5, Math.floor(Math.random() * 7)];
// let computerRandomLocation3 = [2, Math.floor(Math.random() * 7)];
// let computerRandomLocation4 = [9, Math.floor(Math.random() * 8)];
// let computerRandomLocation5 = [1, Math.floor(Math.random() * 6)];



const boats = {
    boatOne: 1,
    boatTwo: 2,
    boatThree: 3,
    boatFour: 4,
    boatFive: 5,
};

// ///////////////////////////////////////////// refactor starting locations.
placeBoatsOne();

function makeGrid() {
    const gameBoardContainer = document.createElement('div');
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
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
    return gameBoardContainer;
}


function placeBoatsOne() {
    const availbleArrayIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const numberOfBoats = Object.keys(boats).length;
    for (let i = 0; i < numberOfBoats; i++) {
        const y = availbleArrayIndex.splice(Math.floor(availbleArrayIndex.length * Math.random()), 1);


        gameBoard[y[0]][Math.floor(Math.random() * 6)] = i + 1;

    }
}

// How we set Boat Lenghts
// let boatOne = [
//     gameBoard[randomLocation1[0]][randomLocation1[1]] = 1,
//     gameBoard[randomLocation1[0]][randomLocation1[1] + 1] = 1,
//     gameBoard[randomLocation1[0]][randomLocation1[1] + 2] = 1,

//     computerBoard[computerRandomLocation1[0]][computerRandomLocation1[1]] = 1,
//     computerBoard[computerRandomLocation1[0]][computerRandomLocation1[1] + 1] = 1,
//     computerBoard[computerRandomLocation1[0]][computerRandomLocation1[1] + 2] = 1,

// ];
// let boatTwo = [
//     gameBoard[randomLocation2[0]][randomLocation2[1]] = 2,
//     gameBoard[randomLocation2[0]][randomLocation2[1] + 1] = 2,
//     gameBoard[randomLocation2[0]][randomLocation2[1] + 2] = 2,
//     gameBoard[randomLocation2[0]][randomLocation2[1] + 3] = 2,

//     computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1]] = 2,
//     computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1] + 1] = 2,
//     computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1] + 2] = 2,
//     computerBoard[computerRandomLocation2[0]][computerRandomLocation2[1] + 3] = 2
// ];
// let boatThree = [
//     gameBoard[randomLocation3[0]][randomLocation3[1]] = 3,
//     gameBoard[randomLocation3[0]][randomLocation3[1] + 1] = 3,
//     gameBoard[randomLocation3[0]][randomLocation3[1] + 2] = 3,

//     computerBoard[computerRandomLocation3[0]][computerRandomLocation3[1]] = 3,
//     computerBoard[computerRandomLocation3[0]][computerRandomLocation3[1] + 1] = 3,
//     computerBoard[computerRandomLocation3[0]][computerRandomLocation3[1] + 2] = 3
// ];
// let boatFour = [
//     gameBoard[randomLocation4[0]][randomLocation4[1]] = 4,
//     gameBoard[randomLocation4[0]][randomLocation4[1] + 1] = 4,

//     computerBoard[computerRandomLocation4[0]][computerRandomLocation4[1]] = 4,
//     computerBoard[computerRandomLocation4[0]][computerRandomLocation4[1] + 1] = 4
// ];
// let boatFive = [
//     gameBoard[randomLocation5[0]][randomLocation5[1]] = 5,
//     gameBoard[randomLocation5[0]][randomLocation5[1] + 1] = 5,
//     gameBoard[randomLocation5[0]][randomLocation5[1] + 2] = 5,
//     gameBoard[randomLocation5[0]][randomLocation5[1] + 3] = 5,

//     computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1]] = 5,
//     computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1] + 1] = 5,
//     computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1] + 2] = 5,
//     computerBoard[computerRandomLocation5[0]][computerRandomLocation5[1] + 3] = 5
// ];

// OVERLAP CONTROL 
// function compareCoord(array1, array2) {
//     if (array1[0] !== array2[0] && array1[1] !== array2[1]) {
//         return true;
//     }
//     else false;
// }

// while (!compareCoord(randomLocation1, randomLocation2) && !compareCoord(randomLocation2, randomLocation3) && !compareCoord(randomLocation2, randomLocation4)) {
//     randomLocation2 = Math.floor(Math.random() * 6);
// }
// while (!compareCoord(randomLocation1, randomLocation3) && !compareCoord(randomLocation3, randomLocation4)) {
//     randomLocation3 = Math.floor(Math.random() * 6);
// }
// while (!compareCoord(randomLocation1, randomLocation4)) {
//     randomLocation4 = Math.floor(Math.random() * 6);
// }


console.log(JSON.stringify(gameBoard));
console.log(JSON.stringify(computerBoard));

// FUNCTIONALITY OF THE BOARD
// set event listener for all elements in gameboard, run fireTorpedo function when square is clicked
gameBoardContainer.addEventListener('click', (e) => {
    fireTorpedo(e);
    computerTorpedo();

});

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
            gameBoard[row][col] = 7;
            totalClicks++;
            addClick();
            console.log(totalClicks);

            // if player clicks a square with a ship, change the color and change square's value
        } else if (gameBoard[row][col] === 1 ||
            gameBoard[row][col] === 2 || gameBoard[row][col] === 3 || gameBoard[row][col] === 4 || gameBoard[row][col] === 5) {
            e.target.style.background = 'red';
            // set this square's value to 2 to indicate the ship has been hit
            gameBoard[row][col] = 8;

            // increment hitCount each time a ship is hit
            hitCount++;
            totalClicks++;
            addHit();
            addClick();
            // How we win the game
            if (hitCount === 16) {
                alert('All enemy battleships have been defeated! You win!');
                window.location = '../results/index.html';
            }

            // if player clicks a square that's been previously hit, let them know
        } else if (gameBoard[row][col] > 1) {
            alert('Stop wasting your torpedos! You already fired at this location.');
        }
    }
}

function computerTorpedo() {

    const randomLoc = [Math.floor(Math.random() * 9), Math.floor(Math.random() * 9)];
    const placement = computerBoard[randomLoc[0]][randomLoc[1]];
    const computerTarg = document.getElementById('p' + randomLoc[0] + randomLoc[1]);

    if (placement === 0) {
        computerTarg.style.background = '#bbb';
    } else if (placement === 1 ||
        placement === 2 || placement === 3 || placement === 4 || placement === 5) {
        computerTarg.style.background = 'red';
    }
}