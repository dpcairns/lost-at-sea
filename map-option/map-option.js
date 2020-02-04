let board = [];
const boardSize = 10;

initializeBoard();
drawBoard();

function initializeBoard()
{
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
    for (let row in board) {
        for (let space in board[row]) {
            // This create an individual space element for the board.
            // 'space' variable will be zero or one (set in initializeBoard)
            // you'll eventually use this to determine if a click is a 'hit'
            const spaceElement = document.createElement('div');
            spaceElement.className = 'board-space';
            boardElement.appendChild(spaceElement);
            spaceElement.addEventListener('click', spaceClick);
        }
    }
}

// Handle on click logic here.
function spaceClick(event) {
    console.log(event);
}