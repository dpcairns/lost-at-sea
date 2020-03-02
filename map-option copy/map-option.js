
let board = [];
const boardSize = 10;

initializeBoard();
drawBoard();

function initializeBoard() {
    board = [];
    for (let row = 0; row < boardSize; row++) {
        const rowSpaces = [];
        for (let column = 0; column < boardSize; column++) {
            // This determines if a space is occupied. It's 50/50 right now.
            rowSpaces[column] = Math.round(Math.random());
        }
        board[row] = rowSpaces;
    }
}

function drawBoard() {
    const boardElement = document.getElementById('board');
    for (let row in board) { // interesting use of the let/in syntax! usually with arrays we use let/of, since in iterates through the keys of an object, while in iterates through the values in an array
        for (let space in board[row]) {
            // This create an individual space element for the board.
            // 'space' variable will be zero or one (set in initializeBoard)
            // you'll eventually use this to determine if a click is a 'hit'
            const spaceElement = document.createElement('div');
            spaceElement.className = 'board-space';
            boardElement.appendChild(spaceElement);
            spaceElement.addEventListener('click', fireCannonball, false);
        }
    }
}

function fireCannonball(e) {
    // if clicked (e. target) is not the partent elemeon on which the event lister was set (e. currentTarget)
    if (e.target !== e.currentarget) {
//extract row and collumn form the HTML element ids
        // cool string interrogation
        let row = e.target.id.substring(1, 2);
        let column = e.target.id.substring(2, 3);
        //alert("Clicked on row " + row + ", col " + col);

        //if player clicks on square with no monster, change the color and change the squars value
        if (drawBoard[row][column] === 0) { // hmm, not sure this is working. drawBoard is a function, not an object, so this will never be true.
            e.target.style.background = '#bbb';
        }
    }
}




















// function monsters (size, direction) { 
//     this.coveredFields = [];
//     this.place = function(sizeY, sizeX) { // sizeX & sizeY: size of fields in both dimensions

//         // pick randomly within our limits
//         let locationX;
//         let locationY;
//         if (direction) {
//             locationX = Math.floor(Math.random() * (sizeX - 1 - size));
//             locationY = Math.floor(Math.random() * (sizeY - 1));
//         } else {
//             locationX = Math.floor(Math.random() * (sizeX - 1));
//             locationY = Math.floor(Math.random() * (sizeY - 1 - size));
//         }

//         // TODO: check that we don't cross/overlap other ships
//         // ...

//         // setting locations
//         for (let i = 0 ; i < size ; i++) {
//             if (direction) {
//                 this.coveredFields.push(locationY * 10 + locationX + i);
//             } else {
//                 this.coveredFields.push((locationY + i) * 10 + locationX);
//             }
//         }
//     }
// }

// Handle on click logic here.
function spaceClick(event) {
    console.log(event);
}
