const square = document.querySelectorAll(".square");
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

let option = ["", "", "", "", "", "", "", "", "",];
let curentPlayer = "X";
let running = false;