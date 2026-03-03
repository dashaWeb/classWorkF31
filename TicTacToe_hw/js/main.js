
const board = document.getElementById("board");
const statusText = document.getElementById("status");
const difficultySelect = document.getElementById("difficulty");

let cells = [];
let gameActive = true;

function createBoard() {
    board.innerHTML = "";
    cells = [];
    gameActive = true;
    statusText.textContent = "";

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("button");
        cell.classList.add("cell");
        cell.textContent = "";
        cell.addEventListener("click", () => playerMove(i));
        board.appendChild(cell);
        cells.push(cell);
    }
}

function playerMove(index) {
    if (!gameActive) return;
    if (cells[index].textContent !== "") return;

    cells[index].textContent = "X";

    if (checkWinner("X")) {
        statusText.textContent = "Ви перемогли!!!";
        gameActive = false;
        return;
    }

    if (isDraw()) {
        statusText.textContent = "Нічия!)";
        gameActive = false;
        return;
    }

    computerMove();
}

function computerMove() {
    if (!gameActive) return;

    let level = difficultySelect.value;

    if (level === "easy") {
        randomMove();
    } else if (level === "medium") {
        blockMove();
    } else {
        bestMove();
    }

    if (checkWinner("O")) {
        statusText.textContent = "Комп'ютер переміг!!!";
        gameActive = false;
        return;
    }

    if (isDraw()) {
        statusText.textContent = "Нічия!";
        gameActive = false;
    }
}

function randomMove() {
    let empty = cells
        .map((cell, i) => cell.textContent === "" ? i : null)
        .filter(i => i !== null);

    if (empty.length === 0) return;

    let randomIndex = empty[Math.floor(Math.random() * empty.length)];
    cells[randomIndex].textContent = "O";
}

function blockMove() {
    for (let i = 0; i < 9; i++) {
        if (cells[i].textContent === "") {
            cells[i].textContent = "X";
            if (checkWinner("X")) {
                cells[i].textContent = "O";
                return;
            }
            cells[i].textContent = "";
        }
    }

    randomMove();
}

function bestMove() {
    let bestScore = -Infinity;
    let move;

    for (let i = 0; i < 9; i++) {
        if (cells[i].textContent === "") {
            cells[i].textContent = "O";
            let score = minimax(false);
            cells[i].textContent = "";

            if (score > bestScore) {
                bestScore = score;
                move = i;
            }
        }
    }

    if (move !== undefined) {
        cells[move].textContent = "O";
    }
}

function minimax(isMaximizing) {
    if (checkWinner("O")) return 1;
    if (checkWinner("X")) return -1;
    if (isDraw()) return 0;

    if (isMaximizing) {
        let bestScore = -Infinity;

        for (let i = 0; i < 9; i++) {
            if (cells[i].textContent === "") {
                cells[i].textContent = "O";
                let score = minimax(false);
                cells[i].textContent = "";
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;

        for (let i = 0; i < 9; i++) {
            if (cells[i].textContent === "") {
                cells[i].textContent = "X";
                let score = minimax(true);
                cells[i].textContent = "";
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

function checkWinner(player) {
    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return wins.some(combo =>
        combo.every(index =>
            cells[index].textContent === player
        )
    );
}

function isDraw() {
    return cells.every(cell => cell.textContent !== "");
}

function restartGame() {
    createBoard();
}

createBoard();