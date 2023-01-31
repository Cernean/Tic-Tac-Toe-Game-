const squares = document.querySelectorAll(".square");
const resultText = document.querySelector("#resultText");
const replayBtn = document.querySelector("#replayBtn");
const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let options = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "X";
let running = false;

startGame();

function startGame() {
    squares.forEach(square => square.addEventListener("click", squareClicked )) 
    replayBtn.addEventListener("click", replayGame);
    resultText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function squareClicked(){
    const squareIndex = this.getAttribute("squareIndex");
    if(options[squareIndex] != "" || !running) {
        return;
    }
    updateSquare(this, squareIndex);
    checkWinner();
}

function updateSquare(square, index) {
    options[index] = currentPlayer;
    square.textContent = currentPlayer;
}
function changePlayer() {
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    resultText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winCondition.length; i++){
        const condition = winCondition[i];
        const squareA = options[condition[0]];
        const squareB = options[condition[1]];
        const squareC = options[condition[2]];

        if(squareA == "" || squareB == "" || squareC == ""){
            continue;
        }
        if(squareA == squareB && squareB == squareC){
            roundWon = true;
            break;
        }
    }
}
