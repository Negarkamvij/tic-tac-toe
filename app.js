console.log("Hello World");


let currentPlayer = "X";
let gameOver = false;
let winner = null;    

/*function initializeGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
}*/
let board = [
        ["X", "O", "X"],
        ["O", "X", "O"],
        ["X", "O", "X"],
    ];
function renderBoard(){
    const gameBoard = document.getElementById("gameBoard");
    const rows = gameBoard.getElementsByClassName("row");

    for (let i =0; i<3; i++){
        const cells = rows[i].getElementsByClassName("cell");
        for (let j=0; j<3; j++){
            console.log(`Updating cell ${i},${j} to`, board[i][j]);
            cells[j].innerText = board[i][j];
        }
       }
}
renderBoard();
