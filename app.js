console.log("Hello World");

let board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ];
let currentPlayer = "X";
let gameOver = false;
let winner = null;    

/*function initializeGame() {
    board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    currentPlayer = "X";
    gameOver = false;
    winner = null;
    renderBoard();    
  };
}*/

function checkWinner(){
    for (let i =0; i<3; i++){ //We check the Rows 
        if(
           board[i][0] !== ""&&
           board[i][0] === board[i][1] &&
           board[i][1] === board[i][2] 
        ){
            gameOver = true;
            winner = board[i][0];
            console.log("Winner is: " + winner);
            return;
        }
    }
    for(let j=0; j<3;j++){ //We check the Columns
       if (
        board[0][j] !== "" &&
        board[0][j] === board[1][j] &&
        board[1][j] === board[2][j]
        ) {
        gameOver = true;
        winner = board[0][j];
        console.log("Winner is: " + winner);
        return; 
       }
    }

    if(
        board[0][0] !== ""&&    //check diagonally
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]
    ){
        gameOver = true;
        winner = board[0][0];
        console.log("Winner is: " + winner);
        return;
     }

     if (
        board[0][2] !== "" &&   //check diagonally
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]
        ) {
        gameOver = true;
        winner = board[0][2];
        console.log("Winner is: " + winner);
        return;
       }
    }  

function cellClicked(i, j){
    if (gameOver || board[i][j]!=""){
        return;
    }
    board[i][j] = currentPlayer;
    renderBoard();
    checkWinner();
    if(!gameOver){
        if (currentPlayer === "X"){
            currentPlayer = "O";
        } else{
            currentPlayer = "X";
    
        }
    }    
}

 

function renderBoard(){
    const gameBoard = document.getElementById("gameBoard");
    const rows = gameBoard.getElementsByClassName("row");

    for (let i =0; i<3; i++){
        const cells = rows[i].getElementsByClassName("cell");
        for (let j=0; j<3; j++){
            cells[j].innerText = board[i][j];
            cells[j].onclick = function() {
                cellClicked(i, j);
            };
        }
       }
}

 

renderBoard();